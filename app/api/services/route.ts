import { NextRequest } from "next/server";
import { getDb } from "../../../lib/mongodb";
import { ok, serverError } from "../../../lib/apiHelper";
import { Service } from "../../../lib/types";

export async function GET(req: NextRequest) {
  try {
    const db = await getDb();
    const { searchParams } = new URL(req.url);
    
    // Lấy query param 'active'
    const activeParam = searchParams.get("active");
    
    const filter: Record<string, boolean> = {};
    
    // SỬA LỖI 1: Chuyển đổi string "true"/"false" sang đúng kiểu boolean
    if (activeParam !== null) {
      filter.active = activeParam === "true";
    }

    const services = await db.collection<Service>("services")
      .find(filter)
      .sort({ order: 1 })
      .toArray();

    // SỬA LỖI 2: Luôn trả về ok() ngay cả khi mảng rỗng để Frontend hiện trạng thái "Trống"
    return ok(services);
  } catch (err) {
    return serverError(err);
  }
}