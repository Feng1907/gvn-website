import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Project } from "@/lib/models/Project";

type Context = { params: Promise<{ id: string }> };

// GET /api/projects/[id] → lấy 1 dự án
export async function GET(_req: NextRequest, { params }: Context) {
  try {
    await connectDB();
    const { id } = await params;
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json({ success: false, error: "Không tìm thấy dự án" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: project });
  } catch {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

// PUT /api/projects/[id] → cập nhật dự án
export async function PUT(req: NextRequest, { params }: Context) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const project = await Project.findByIdAndUpdate(
      id,
      { ...body },
      { new: true, runValidators: true }
    );

    if (!project) {
      return NextResponse.json({ success: false, error: "Không tìm thấy dự án" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: project });
  } catch {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

// DELETE /api/projects/[id] → xóa dự án
export async function DELETE(_req: NextRequest, { params }: Context) {
  try {
    await connectDB();
    const { id } = await params;

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return NextResponse.json({ success: false, error: "Không tìm thấy dự án" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Đã xóa dự án thành công" });
  } catch {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
