import { NextRequest } from "next/server";
import { getDb } from "../../../lib/mongodb";
import { ok, created, badRequest, serverError } from "../../../lib/apiHelper";
import { Article } from "../../../lib/types";

// GET /api/news?category=xxx&limit=6&page=1&published=true
export async function GET(req: NextRequest) {
  try {
    const db = await getDb();
    const { searchParams } = new URL(req.url);

    const category  = searchParams.get("category");
    const published = searchParams.get("published");
    const limit     = parseInt(searchParams.get("limit") || "10");
    const page      = parseInt(searchParams.get("page")  || "1");
    const skip      = (page - 1) * limit;

    const filter: Record<string, unknown> = {};
    if (category)                          filter.category  = category;
    if (published === "true")              filter.published = true;
    if (published === "false")             filter.published = false;

    const [items, total] = await Promise.all([
      db.collection<Article>("articles")
        .find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .project({ content: 0, contentEn: 0 }) // Bỏ content nặng khỏi list
        .toArray(),
      db.collection<Article>("articles").countDocuments(filter),
    ]);

    return ok({
      items,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  } catch (err) {
    return serverError(err);
  }
}

// POST /api/news
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.title || !body.slug || !body.excerpt) {
      return badRequest("Thiếu trường bắt buộc: title, slug, excerpt");
    }

    const db = await getDb();
    const article: Omit<Article, "_id"> = {
      title:       body.title,
      titleEn:     body.titleEn     || "",
      slug:        body.slug,
      excerpt:     body.excerpt,
      excerptEn:   body.excerptEn   || "",
      content:     body.content     || "",
      contentEn:   body.contentEn   || "",
      category:    body.category    || "Tin tức",
      categoryEn:  body.categoryEn  || "News",
      emoji:       body.emoji       || "📰",
      bg:          body.bg          || "linear-gradient(135deg,#1a6fc4,#00b4d8)",
      readTime:    body.readTime    || 3,
      published:   body.published   ?? false,
      createdAt:   new Date(),
      updatedAt:   new Date(),
    };

    const result = await db.collection<Article>("articles").insertOne(article as Article);
    return created({ ...article, _id: result.insertedId });
  } catch (err: unknown) {
    if ((err as { code?: number }).code === 11000) {
      return badRequest("Slug đã tồn tại");
    }
    return serverError(err);
  }
}