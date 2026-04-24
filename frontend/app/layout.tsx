import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const SITE_URL = "https://gvntmc.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GVN – Giải Pháp CNTT Chuyên Biệt",
    template: "%s | GVN Technology",
  },
  description:
    "Công ty TNHH Bảo dưỡng Công nghệ Toàn cầu VN – nhà cung cấp tổng thể hạ tầng & dịch vụ CNTT uy tín tại Việt Nam. Bảo trì, thi công, thiết bị ngân hàng, IT outsourcing.",
  keywords: ["CNTT", "IT outsourcing", "bảo trì hệ thống", "camera CCTV", "thiết bị ngân hàng", "GVN", "GVNTMC"],
  authors: [{ name: "GVN Technology", url: SITE_URL }],
  creator: "GVN Technology",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "GVN Technology",
    title: "GVN – Giải Pháp CNTT Chuyên Biệt",
    description: "Công ty TNHH Bảo dưỡng Công nghệ Toàn cầu VN – nhà cung cấp tổng thể hạ tầng & dịch vụ CNTT.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "GVN Technology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GVN – Giải Pháp CNTT Chuyên Biệt",
    description: "Nhà cung cấp tổng thể hạ tầng & dịch vụ CNTT uy tín tại Việt Nam.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Công ty TNHH Bảo dưỡng Công nghệ Toàn cầu VN",
  alternateName: "GVN Technology",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+84-91-970-4433",
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: ["Vietnamese", "English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "51 Đường số 9, KDC Him Lam, P. Tân Hưng",
    addressLocality: "Quận 7",
    addressRegion: "TP. Hồ Chí Minh",
    addressCountry: "VN",
  },
  sameAs: ["https://www.facebook.com/gvntmc"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
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