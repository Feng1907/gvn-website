import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin Tức & Công Nghệ",
  description: "Cập nhật tin tức công nghệ, giải pháp CNTT, bảo mật và dịch vụ mới nhất từ đội ngũ GVN Technology.",
  openGraph: {
    title: "Tin Tức | GVN Technology",
    description: "Bài viết về an ninh bảo mật, IT outsourcing, camera CCTV, bảo trì hệ thống và thiết bị ngân hàng.",
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
