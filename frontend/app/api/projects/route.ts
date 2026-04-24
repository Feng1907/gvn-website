import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Project } from "@/lib/models/Project";

// GET /api/projects → lấy tất cả dự án
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const lang = searchParams.get("lang") || "vi";

    const filter = category && category !== "all" && category !== "Tất cả"
      ? lang === "en"
        ? { categoryEn: category }
        : { category }
      : {};

    const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });

    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

// POST /api/projects → tạo dự án mới
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, titleEn, category, categoryEn, image, description, descriptionEn, featured, order } = body;

    // Validate
    if (!title || !titleEn || !category || !categoryEn || !image) {
      return NextResponse.json(
        { success: false, error: "Thiếu các trường bắt buộc: title, titleEn, category, categoryEn, image" },
        { status: 400 }
      );
    }

    const project = await Project.create({
      title, titleEn, category, categoryEn, image,
      description: description || "",
      descriptionEn: descriptionEn || "",
      featured: featured ?? false,
      order: order ?? 0,
    });

    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}