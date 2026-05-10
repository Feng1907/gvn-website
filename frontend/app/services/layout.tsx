import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch Vụ",
  description: "6 dịch vụ CNTT chuyên nghiệp: bảo trì hệ thống, IT outsourcing, camera CCTV, thi công hạ tầng, thiết bị ngân hàng.",
  openGraph: {
    title: "Dịch Vụ | GVN Technology",
    description: "Helpdesk 24/7, kỹ thuật viên onsite, thi công mạng, camera AI – giải pháp CNTT trọn gói cho doanh nghiệp.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
