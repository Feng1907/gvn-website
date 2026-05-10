import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description: "Liên hệ GVN Technology để được tư vấn giải pháp CNTT. Văn phòng tại TP.HCM và Hà Nội. Hotline: 028 62515094 – 091 970 4433.",
  openGraph: {
    title: "Liên Hệ GVN Technology",
    description: "Gửi yêu cầu báo giá hoặc tư vấn kỹ thuật. Phản hồi trong 24 giờ làm việc.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
