import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "GVN – Giải Pháp CNTT Chuyên Biệt",
  description:
    "Công ty TNHH Bảo dưỡng Công nghệ Toàn cầu VN – nhà cung cấp tổng thể hạ tầng & dịch vụ CNTT uy tín tại Việt Nam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&family=Lexend:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>
          <Navbar />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}