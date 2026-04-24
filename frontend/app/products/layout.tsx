import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản Phẩm",
  description: "Danh mục sản phẩm CNTT, thiết bị công trình, thiết bị ngân hàng và giải pháp phần mềm chính hãng từ GVN Technology.",
  openGraph: {
    title: "Sản Phẩm | GVN Technology",
    description: "Linh kiện máy tính, UPS, camera Hikvision, Cisco, thiết bị ngân hàng và phần mềm bản quyền.",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
