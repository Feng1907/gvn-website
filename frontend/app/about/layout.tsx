import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description: "GVN Technology – Công ty TNHH Bảo dưỡng Công nghệ Toàn cầu VN. Hơn 10 năm kinh nghiệm cung cấp giải pháp CNTT cho doanh nghiệp.",
  openGraph: {
    title: "Về GVN Technology",
    description: "Đội ngũ kỹ thuật viên chứng chỉ quốc tế, phục vụ hơn 100 doanh nghiệp tại TP.HCM và Hà Nội.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
