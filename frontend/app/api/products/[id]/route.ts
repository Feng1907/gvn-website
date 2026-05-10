import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "../../../../lib/mongodb";
import { ok, notFound, badRequest, serverError } from "../../../../lib/apiHelper";
import { Product } from "../../../../lib/types";

type Context = { params: Promise<{ id: string }> };

// GET /api/products/[id]  — lấy theo _id hoặc slug
export async function GET(_req: NextRequest, { params }: Context) {
  try {
    const db = await getDb();
    const { id } = await params;

    let product: Product | null = null;

    if (ObjectId.isValid(id)) {
      product = await db
        .collection<Product>("products")
        .findOne({ _id: new ObjectId(id) });
    }

    if (!product) {
      product = await db
        .collection<Product>("products")
        .findOne({ slug: id });
    }

    if (!product) return notFound("Sản phẩm không tồn tại");
    return ok(product);
  } catch (err) {
    return serverError(err);
  }
}

// PUT /api/products/[id]  — cập nhật sản phẩm
export async function PUT(req: NextRequest, { params }: Context) {
  try {
    const db   = await getDb();
    const body = await req.json();
    const { id } = await params;

    if (!ObjectId.isValid(id)) return badRequest("ID không hợp lệ");

    const update = {
      ...body,
      updatedAt: new Date(),
    };
    delete update._id;

    const result = await db
      .collection<Product>("products")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: update },
        { returnDocument: "after" }
      );

    if (!result) return notFound("Sản phẩm không tồn tại");
    return ok(result);
  } catch (err) {
    return serverError(err);
  }
}

// DELETE /api/products/[id]
export async function DELETE(_req: NextRequest, { params }: Context) {
  try {
    const db = await getDb();
    const { id } = await params;

    if (!ObjectId.isValid(id)) return badRequest("ID không hợp lệ");

    const result = await db
      .collection<Product>("products")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) return notFound("Sản phẩm không tồn tại");
    return ok({ deleted: true, id });
  } catch (err) {
    return serverError(err);
  }
}
