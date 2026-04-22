import { NextRequest } from "next/server";
import { getDb } from "../../../lib/mongodb";
import { ok, created, badRequest, serverError } from "../../../lib/apiHelper";
import { Contact } from "../../../lib/types";

// POST /api/contacts  — Gửi form liên hệ / yêu cầu báo giá
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate
    if (!body.name || !body.email || !body.message) {
      return badRequest("Vui lòng điền đầy đủ: Họ tên, Email, Nội dung");
    }

    // Validate email format đơn giản
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return badRequest("Email không hợp lệ");
    }

    const db = await getDb();

    const contact: Omit<Contact, "_id"> = {
      name:      body.name.trim(),
      email:     body.email.trim().toLowerCase(),
      phone:     body.phone?.trim()   || "",
      company:   body.company?.trim() || "",
      subject:   body.subject?.trim() || "Yêu cầu báo giá",
      message:   body.message.trim(),
      status:    "new",
      createdAt: new Date(),
    };

    const result = await db.collection<Contact>("contacts").insertOne(contact as Contact);
    return created({
      id: result.insertedId,
      message: "Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.",
      messageEn: "Thank you! We will get back to you within 24 hours.",
    });
  } catch (err) {
    return serverError(err);
  }
}

// GET /api/contacts?status=new&limit=20&page=1  — Xem danh sách (dành cho admin)
export async function GET(req: NextRequest) {
  try {
    const db = await getDb();
    const { searchParams } = new URL(req.url);

    const status = searchParams.get("status");
    const limit  = parseInt(searchParams.get("limit") || "20");
    const page   = parseInt(searchParams.get("page")  || "1");
    const skip   = (page - 1) * limit;

    const filter: Record<string, unknown> = {};
    if (status) filter.status = status;

    const [items, total] = await Promise.all([
      db.collection<Contact>("contacts")
        .find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db.collection<Contact>("contacts").countDocuments(filter),
    ]);

    return ok({
      items,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  } catch (err) {
    return serverError(err);
  }
}