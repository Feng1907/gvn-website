import { NextRequest } from "next/server";
import { getDb } from "../../../lib/mongodb";
import { ok, created, badRequest, serverError } from "../../../lib/apiHelper";
import { Product } from "../../../lib/types";

// GET /api/products
// Query params: ?category=xxx&featured=true&limit=8&page=1
export async function GET(req: NextRequest) {
  try {
    const db = await getDb();
    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category");
    const featured  = searchParams.get("featured");
    const limit     = parseInt(searchParams.get("limit") || "12");
    const page      = parseInt(searchParams.get("page")  || "1");
    const skip      = (page - 1) * limit;

    // Build filter
    const filter: Record<string, unknown> = {};
    if (category) filter.category = category;
    if (featured === "true") filter.featured = true;

    const [items, total] = await Promise.all([
      db.collection<Product>("products")
        .find(filter)
        .sort({ featured: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db.collection<Product>("products").countDocuments(filter),
    ]);

    return ok({
      items,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    return serverError(err);
  }
}

// POST /api/products  (tạo sản phẩm mới)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate bắt buộc
    if (!body.name || !body.slug || !body.category) {
      return badRequest("Thiếu trường bắt buộc: name, slug, category");
    }

    const db = await getDb();

    const product: Omit<Product, "_id"> = {
      name:        body.name,
      nameEn:      body.nameEn     || "",
      slug:        body.slug,
      category:    body.category,
      tag:         body.tag        || "",
      tagColor:    body.tagColor   || "#1a6fc4",
      description: body.description || "",
      descriptionEn: body.descriptionEn || "",
      price:       body.price,
      emoji:       body.emoji      || "📦",
      bg:          body.bg         || "linear-gradient(135deg,#e8f0fb,#d0e4f8)",
      inStock:     body.inStock    ?? true,
      featured:    body.featured   ?? false,
      createdAt:   new Date(),
      updatedAt:   new Date(),
    };

    const result = await db.collection<Product>("products").insertOne(product as Product);
    return created({ ...product, _id: result.insertedId });
  } catch (err: unknown) {
    // Duplicate slug
    if ((err as { code?: number }).code === 11000) {
      return badRequest("Slug đã tồn tại, vui lòng dùng slug khác");
    }
    return serverError(err);
  }
}