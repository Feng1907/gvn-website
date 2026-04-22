import { NextRequest } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import { ServiceModel } from "../../../lib/models/Service";
import { ok, created, badRequest, serverError } from "../../../lib/apiHelper";

// GET /api/services?active=true
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const active = searchParams.get("active");

    const filter: Record<string, unknown> = {};
    if (active === "true")  filter.active = true;
    if (active === "false") filter.active = false;

    const items = await ServiceModel.find(filter).sort({ order: 1 }).lean();
    return ok(items);
  } catch (err) {
    return serverError(err);
  }
}

// POST /api/services
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.title || !body.slug || !body.description) {
      return badRequest("Thiếu trường bắt buộc: title, slug, description");
    }
    await connectDB();
    const service = await ServiceModel.create({
      title:         body.title,
      titleEn:       body.titleEn       || "",
      slug:          body.slug,
      description:   body.description,
      descriptionEn: body.descriptionEn || "",
      emoji:         body.emoji         || "🔧",
      bg:            body.bg            || "linear-gradient(135deg,#e8f0fb,#d0e4f8)",
      order:         body.order         ?? 0,
      active:        body.active        ?? true,
    });
    return created(service);
  } catch (err: unknown) {
    if ((err as { code?: number }).code === 11000) {
      return badRequest("Slug đã tồn tại, vui lòng dùng slug khác");
    }
    return serverError(err);
  }
}
