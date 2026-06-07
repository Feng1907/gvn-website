import { NextRequest } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import { ServiceModel } from "../../../../lib/models/Service";
import { ok, notFound, badRequest, serverError } from "../../../../lib/apiHelper";

type Ctx = { params: Promise<{ id: string }> };

// GET /api/services/[id]
export async function GET(_req: NextRequest, { params }: Ctx) {
  try {
    await connectDB();
    const { id } = await params;
    const item = await ServiceModel.findById(id).lean();
    if (!item) return notFound("Dịch vụ không tồn tại");
    return ok(item);
  } catch (err) {
    return serverError(err);
  }
}

// PUT /api/services/[id]
export async function PUT(req: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params;
    const body = await req.json();
    await connectDB();
    const item = await ServiceModel
      .findByIdAndUpdate(id, body, { new: true, runValidators: true })
      .lean();
    if (!item) return notFound("Dịch vụ không tồn tại");
    return ok(item);
  } catch (err: unknown) {
    if ((err as { code?: number }).code === 11000) return badRequest("Slug đã tồn tại");
    return serverError(err);
  }
}

// DELETE /api/services/[id]
export async function DELETE(_req: NextRequest, { params }: Ctx) {
  try {
    await connectDB();
    const { id } = await params;
    const item = await ServiceModel.findByIdAndDelete(id).lean();
    if (!item) return notFound("Dịch vụ không tồn tại");
    return ok({ deleted: true, id });
  } catch (err) {
    return serverError(err);
  }
}
