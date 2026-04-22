import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "../../../../lib/mongodb";
import { ok, notFound, badRequest, serverError } from "../../../../lib/apiHelper";
import { Article } from "../../../../lib/types";

type Params = { params: { id: string } };

// GET /api/news/[id]  — trả về full content (kể cả content HTML)
export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const db = await getDb();
    const { id } = params;

    let article: Article | null = null;

    if (ObjectId.isValid(id)) {
      article = await db.collection<Article>("articles").findOne({ _id: new ObjectId(id) });
    }
    if (!article) {
      article = await db.collection<Article>("articles").findOne({ slug: id });
    }

    if (!article) return notFound("Bài viết không tồn tại");
    return ok(article);
  } catch (err) {
    return serverError(err);
  }
}

// PUT /api/news/[id]
export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const db   = await getDb();
    const body = await req.json();
    const { id } = params;

    if (!ObjectId.isValid(id)) return badRequest("ID không hợp lệ");

    const update = { ...body, updatedAt: new Date() };
    delete update._id;

    const result = await db
      .collection<Article>("articles")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: update },
        { returnDocument: "after" }
      );

    if (!result) return notFound("Bài viết không tồn tại");
    return ok(result);
  } catch (err) {
    return serverError(err);
  }
}

// DELETE /api/news/[id]
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const db = await getDb();
    const { id } = params;

    if (!ObjectId.isValid(id)) return badRequest("ID không hợp lệ");

    const result = await db
      .collection<Article>("articles")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) return notFound("Bài viết không tồn tại");
    return ok({ deleted: true, id });
  } catch (err) {
    return serverError(err);
  }
}