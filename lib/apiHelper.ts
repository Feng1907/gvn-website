import { NextResponse } from "next/server";

export function ok<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

export function created<T>(data: T) {
  return NextResponse.json({ success: true, data }, { status: 201 });
}

export function notFound(message = "Không tìm thấy") {
  return NextResponse.json({ success: false, error: message }, { status: 404 });
}

export function badRequest(message = "Dữ liệu không hợp lệ") {
  return NextResponse.json({ success: false, error: message }, { status: 400 });
}

export function serverError(err: unknown) {
  const message = err instanceof Error ? err.message : "Lỗi máy chủ";
  console.error("[API Error]", err);
  return NextResponse.json({ success: false, error: message }, { status: 500 });
}