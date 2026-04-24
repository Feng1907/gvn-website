import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dự Án Tiêu Biểu",
  description: "Các dự án thi công CNTT tiêu biểu của GVN: hệ thống mạng, camera, phòng máy chủ cho ngân hàng và nhà máy.",
  openGraph: {
    title: "Dự Án | GVN Technology",
    description: "Shinhan Bank, Comet Vina, Chemtronics, CJ Foods – hạ tầng CNTT được GVN triển khai thành công.",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
