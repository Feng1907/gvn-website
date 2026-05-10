"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export const translations = {
  vi: {
    nav: {
      home:     "Trang chủ",
      about:    "Giới thiệu",
      services: "Dịch vụ",
      products: "Sản phẩm",
      projects: "Dự án",
      news:     "Tin tức",
      contact:  "Liên hệ",
      quote:    "Nhận báo giá",
    },
    hero: {
      badge:      "Giải pháp CNTT toàn diện",
      title1:     "Công ty giải pháp",
      title2:     "CNTT chuyên biệt",
      title3:     "và phát triển cùng khách hàng",
      desc:       "Công ty TNHH Bảo dưỡng Công nghệ Toàn cầu VN (GVNTMC), hay còn gọi tắt là GVN, được biết đến là đơn vị chuyên nghiệp trong lĩnh vực triển khai, bảo trì và sửa chữa các hệ thống công nghệ thông tin, cung cấp thiết bị CNTT, thiết bị chuyên dùng cho ngân hàng, thi công công trình tại Việt Nam.",
      btnQuote:   "Nhận báo giá",
      btnService: "Dịch vụ của chúng tôi",
      stat1:      "Năm kinh nghiệm",
      stat2:      "Dự án hoàn thành",
      stat3:      "Đối tác tin cậy",
    },
    products: {
      title:   "Sản xuất phần mềm, cung cấp các thiết bị CNTT",
      viewAll: "Xem tất cả",
      detail:  "Xem chi tiết →",
    },
    services: {
      title: "Dịch vụ của Chúng tôi",
      items: [
        "Dịch vụ bảo trì nâng cấp\nhệ thống CNTT cho doanh nghiệp",
        "Cung cấp Linh kiện CNTT\nThiết bị công trình",
        "Các thiết bị chuyên dụng dành cho\nNgân hàng",
        "Cho thuê nhân sự IT onsite\nchuyên nghiệp",
        "Hệ thống camera giám sát\nCCTV và mạng nội bộ",
        "Thi công, xây dựng\nhạ tầng công trình",
      ],
    },
    newsPage: {
      heroTitle: "Tin Tức & Sự Kiện",
      breadcrumb: "Tin tức",
      home: "Trang chủ",
      categories: ["Tất cả", "Công nghệ", "Dịch vụ", "Sự kiện"],
      readMore: "Xem thêm",
      items: [
        { 
          image: "/images/news/news1.jpg", 
          title: "GVN hoàn thành bảo trì hệ thống mạng cho Shinhan Bank", 
          date: "15/03/2024", 
          category: "Dịch vụ",
          desc: "Đội ngũ kỹ thuật của GVN đã hoàn tất đợt bảo trì định kỳ, đảm bảo hệ thống vận hành ổn định 24/7."
        }
      ],
    },
    partners: {
      title: "Đối tác tin cậy của chúng tôi",
      testimonial: {
        heading: "Khách hàng nói về gvntmc.com",
        sub:     "Chất lượng dịch vụ tận tâm đã giúp doanh nghiệp an tâm phát triển cùng gvntmc.com",
        quote:   "\"Chúng tôi đã chọn gvntmc.com vì dịch vụ lắp đặt hệ thống mạng, điện, máy tính vô cùng nhanh chóng và chuyên nghiệp. Đội ngũ hỗ trợ rất tận tâm, giúp công ty ổn định vận hành ngay từ ngày đầu. Thiết bị hiện đại, chi phí hợp lý. Tôi hoàn toàn hài lòng!\"",
        author:  "Linh CEO, InnovateTech Solutions",
      },
    },
    footer: {
      desc:             "Nhà cung cấp tổng thể hạ tầng & dịch vụ CNTT uy tín, chuyên nghiệp tại Việt Nam.",
      quickLinks:       "Liên kết nhanh",
      contactInfo:      "Thông tin liên hệ",
      newsletter:       "Đăng ký nhận bản tin",
      newsletterDesc:   "Nhận thông tin và cập nhật mới nhất về công nghệ cho hộp thư của bạn.",
      emailPlaceholder: "Nhập email...",
      subscribe:        "ĐĂNG KÝ",
      subscribeSuccess: "✓ Đăng ký thành công!",
      copyright:        "© Copyright 2025 | Thiết kế website bởi",
      tagline:          "GVN – Giải pháp CNTT chuyên biệt tại Việt Nam",
      address:          "123 Nguyễn Văn Linh, Q.7, TP.HCM",
      phone:            "0123 456 789",
      email:            "info@gvntmc.com",
      hours:            "Thứ 2 – Thứ 7: 8:00 – 17:30",
      cta: {
        title: "Bạn sẵn sàng nâng tầm môi trường làm việc?",
        desc:  "Liên hệ để nhận báo giá và tư vấn giải pháp toàn diện cho doanh nghiệp bạn!",
        btn:   "Liên hệ ngay",
      },
      links: ["Giới thiệu", "Dịch vụ", "Sản phẩm", "Dự án", "Tin tức", "Liên hệ"],
    },
  },

  en: {
    nav: {
      home:     "Home",
      about:    "About",
      services: "Services",
      products: "Products",
      projects: "Projects",
      news:     "News",
      contact:  "Contact",
      quote:    "Get a Quote",
    },
    hero: {
      badge:      "Comprehensive IT Solutions",
      title1:     "Specialized IT",
      title2:     "Solutions Company",
      title3:     "growing alongside our clients",
      desc:       "GVNTMC (Global VN Technology & Maintenance Company), also known as GVN, is a professional company specializing in deploying, maintaining and repairing IT systems, supplying IT equipment, banking devices, and construction projects in Vietnam.",
      btnQuote:   "Get a Quote",
      btnService: "Our Services",
      stat1:      "Years of Experience",
      stat2:      "Projects Completed",
      stat3:      "Trusted Partners",
    },
    products: {
      title:   "Software Development & IT Equipment Supply",
      viewAll: "View All",
      detail:  "View details →",
    },
    services: {
      title: "Our Services",
      items: [
        "IT System Maintenance\n& Upgrade for Enterprises",
        "IT Components Supply\n& Construction Equipment",
        "Specialized Equipment\nfor Banking",
        "IT Outsourcing &\nOnsite IT Staffing",
        "CCTV Surveillance System\n& Internal Network",
        "Construction &\nInfrastructure Services",
      ],
    },
    newsPage: {
      heroTitle: "News & Events",
      breadcrumb: "News",
      home: "Home",
      categories: ["All", "Technology", "Services", "Events"],
      readMore: "Read more",
      items: [
        { 
          image: "/images/news/news1.jpg", 
          title: "GVN completes network maintenance for Shinhan Bank", 
          date: "2024-03-15", 
          category: "Services",
          desc: "GVN technical team has finished periodic maintenance, ensuring stable 24/7 operations."
        }
      ],
    },
    partners: {
      title: "Our Trusted Partners",
      testimonial: {
        heading: "What clients say about gvntmc.com",
        sub:     "Our dedicated service quality has helped businesses grow with confidence alongside gvntmc.com",
        quote:   "\"We chose gvntmc.com for their incredibly fast and professional network and computer installation services. The support team is very dedicated, helping our company operate smoothly from day one. Modern equipment, reasonable prices. We are completely satisfied!\"",
        author:  "Linh CEO, InnovateTech Solutions",
      },
    },
    footer: {
      desc:             "A trusted, professional total IT infrastructure & services provider in Vietnam.",
      quickLinks:       "Quick Links",
      contactInfo:      "Contact Information",
      newsletter:       "Subscribe to Newsletter",
      newsletterDesc:   "Receive the latest tech updates and tips delivered to your inbox.",
      emailPlaceholder: "Enter email...",
      subscribe:        "SUBSCRIBE",
      subscribeSuccess: "✓ Subscribed successfully!",
      copyright:        "© Copyright 2025 | Website designed by",
      tagline:          "GVN – Specialized IT Solutions in Vietnam",
      address:          "123 Nguyen Van Linh, District 7, HCMC",
      phone:            "0123 456 789",
      email:            "info@gvntmc.com",
      hours:            "Mon – Sat: 8:00 AM – 5:30 PM",
      cta: {
        title: "Ready to upgrade your work environment?",
        desc:  "Contact us for a quote and consultation on comprehensive solutions for your business!",
        btn:   "Contact Us",
      },
      links: ["About", "Services", "Products", "Projects", "News", "Contact"],
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type Translations = typeof translations[Lang];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "vi",
  setLang: () => {},
  t: translations.vi,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}