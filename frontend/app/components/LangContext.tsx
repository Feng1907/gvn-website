"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export const translations = {
  vi: {
    nav: {
      home: "Trang chủ", about: "Giới thiệu", services: "Dịch vụ",
      products: "Sản phẩm", projects: "Dự án", news: "Tin tức",
      contact: "Liên hệ", quote: "Nhận báo giá",
    },
    hero: {
      badge: "Giải pháp CNTT toàn diện",
      title1: "Công ty giải pháp", title2: "CNTT chuyên biệt", title3: "và phát triển cùng khách hàng",
      desc: "Công ty TNHH Bảo dưỡng Công nghệ Toàn cầu VN (GVNTMC), hay còn gọi tắt là GVN, được biết đến là đơn vị chuyên nghiệp trong lĩnh vực triển khai, bảo trì và sửa chữa các hệ thống công nghệ thông tin, cung cấp thiết bị CNTT, thiết bị chuyên dùng cho ngân hàng, thi công công trình tại Việt Nam.",
      btnQuote: "Nhận báo giá", btnService: "Dịch vụ của chúng tôi",
      stat1: "Năm kinh nghiệm", stat2: "Dự án hoàn thành", stat3: "Đối tác tin cậy",
    },
    products: {
      title: "Sản xuất phần mềm, cung cấp các thiết bị CNTT",
      viewAll: "Xem tất cả", detail: "Xem chi tiết →",
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
    aboutPage: {
      heroTitle: "Giới Thiệu", breadcrumb: "Giới thiệu", home: "Trang chủ",
      intro: [
        "GVN được thành lập vào năm 2013, chúng tôi tự hào vì sự phát triển và kết nối được với nhiều khách hàng trong thời gian ngắn, với tên đầy đủ là \"CÔNG TY TNHH BẢO DƯỠNG CÔNG NGHỆ TOÀN CẦU VN\", hoạt động trong lĩnh vực thi công công trình, công nghệ thông tin và bảo trì hệ thống thiết bị công nghệ thông tin. Chúng tôi luôn cố gắng nỗ lực hết mình để theo kịp thời đại toàn cầu hóa và không ngừng phát triển thông qua sự đổi mới toàn diện.",
        "Với nhiều năm kinh nghiệm trong lĩnh vực thi công công trình và bảo trì hệ thống mạng cho các tổ chức tài chính, doanh nghiệp, công ty, xí nghiệp... GVN đã đáp ứng được nhu cầu đa dạng của khách hàng đang hoạt động kinh doanh tại Việt Nam, đề xuất, tư vấn các thiết bị có cấu hình phù hợp nhất, vận hành hệ thống mạng hoạt động ổn định nhất, duy trì và bảo trì hệ thống thiết bị mạng một cách chuyên nghiệp nhất. Chúng tôi luôn trau dồi, học hỏi và không ngừng tìm kiếm các giải pháp tốt nhất phù hợp với nhu cầu của khách hàng.",
        "Khát khao của GVN là cùng nhau phát triển với khách hàng bằng việc thực hiện trách nhiệm của mình một cách tận tâm nhất để nâng cao lòng tin của khách hàng hơn là theo đuổi lợi nhuận tức thời. Dựa trên kinh nghiệm của chúng tôi và đội ngũ nhân viên kỹ thuật cao, chúng tôi sẽ tiếp tục làm hết sức mình và mong rằng sẽ nhận được thật nhiều sự quan tâm của khách hàng.",
      ],
      ctaTitle: "Nhà cung cấp tổng thể hạ tầng & dịch vụ CNTT",
      ctaQuote: "Nhận báo giá", ctaProject: "Dự án tiêu biểu",
      projectLabels: ["Văn phòng hiện đại", "Kho thiết bị", "Phòng máy chủ"],
      sections: {
        about:    { title: "Về chúng tôi",  sub: "", bullets: ["Đề xuất cấu hình thiết bị tối ưu", "Vận hành mạng lưới hiệu quả", "Lên kế hoạch bảo trì dài hạn, hợp lý và tiết kiệm"] },
        motto:    { title: "Phương châm",    sub: "Nhà cung cấp giải pháp CNTT số 1", desc: "Công ty chuyên nghiệp hàng đầu về CNTT, cung cấp các giải pháp toàn diện tối ưu cho nhu cầu CNTT của bạn." },
        strategy: { title: "Chiến lược",    sub: "Nhà cung cấp giải pháp trọn gói",  desc: "Đối tác kinh doanh CNTT một điểm đến, cung cấp thông tin kịp thời theo nhu cầu khách hàng, đồng thời cung cấp và triển khai các giải pháp hạ tầng CNTT toàn diện." },
        customer: { title: "Khách hàng",    sub: "Tinh thần lấy khách hàng làm trung tâm & hỗ trợ kỹ thuật", desc: "Chúng tôi cung cấp đa dạng sản phẩm và các dịch vụ kỹ thuật nâng cao nhằm hỗ trợ sự thành công trong kinh doanh của bạn." },
        business: { title: "Kinh doanh",    sub: "Đối tác kinh doanh đáng tin cậy của khách hàng", desc: "GVNTMC hướng đến mô hình kinh doanh lấy khách hàng làm trung tâm, xây dựng niềm tin trong nhiều lĩnh vực như công, tài chính, sản xuất và viễn thông." },
      },
      ctaBanner: {
        title: "ĐỒNG HÀNH CÙNG DOANH NGHIỆP BỨT PHÁ CÔNG NGHỆ",
        desc: "Liên hệ chúng tôi để nhận báo giá hoặc tư vấn giải pháp phù hợp cho doanh nghiệp của bạn!",
        btn: "Liên hệ ngay",
      },
    },
    productsPage: {
      home: "Trang chủ", current: "Sản phẩm", sideTitle: "DANH MỤC SẢN PHẨM",
      showing: "Showing", of: "of", results: "results",
      sortDefault: "Default sorting", sortAZ: "Name: A → Z", sortZA: "Name: Z → A",
      categories: [
        { label: "Giải pháp - Phần mềm cho doanh nghiệp", slug: "giai-phap-phan-mem", children: ["Windows 11 Pro", "Kaspersky", "Office 365"] },
        { label: "Sản phẩm",                               slug: "san-pham",           children: [] },
        { label: "Sản phẩm CNTT - Công Trình",             slug: "cntt-cong-trinh",    children: ["Linh kiện máy tính", "UPS / Nguồn điện", "Camera CCTV"] },
        { label: "Thiết Bị Chuyên Dụng Cho Ngân Hàng",    slug: "ngan-hang",          children: ["Máy đếm tiền", "Máy in hoá đơn", "Thiết bị xếp hàng"] },
      ],
    },
    servicesPage: {
      heroTitle: "Dịch Vụ", breadcrumb: "Dịch vụ", home: "Trang chủ",
      items: [
        { image: "/images/services/dichvu1.jpg", title: "Dịch vụ bảo trì nâng cấp cho hệ thống doanh nghiệp" },
        { image: "/images/services/dichvu2.jpg", title: "Cung cấp Linh kiện CNTT - Thiết bị công trình" },
        { image: "/images/services/dichvu3.jpg", title: "Các thiết bị chuyên dụng dành cho Ngân hàng" },
        { image: "/images/services/dichvu4.jpg", title: "Dịch vụ Helpdesk & IT Outsourcing" },
        { image: "/images/services/dichvu5.jpg", title: "Các giải pháp Phần mềm cho doanh nghiệp" },
        { image: "/images/services/dichvu6.jpg", title: "Tư vấn - Thiết kế - Thi công công trình" },
      ],
    },
    projectsPage: {
      heroTitle: "Dự Án", breadcrumb: "Dự án", home: "Trang chủ",
      loadMore: "Xem thêm dự án",
      categories: ["Tất cả", "Ngân hàng", "Nhà máy", "Văn phòng", "Hạ tầng IT", "Dân dụng"],
      items: [
        { image: "/images/projects/shinhan-bank.jpg", title: "Thi công chuyển địa điểm chi nhánh và xây dựng hệ thống điện, mạng – Chi nhánh ngân hàng Shinhan", category: "Ngân hàng" },
        { image: "/images/projects/comet-vina.jpg",   title: "Thi công hệ thống điện và mạng cho nhà máy Comet Vina", category: "Nhà máy" },
        { image: "/images/projects/chemtronics.jpg",  title: "Thi công hệ thống mạng, camera giám sát, loa cho nhà máy và văn phòng Chemtronics", category: "Nhà máy" },
        { image: "/images/projects/busan.jpg",        title: "Thi công hệ thống mạng, camera giám sát (CCTV), loa cho văn phòng chi nhánh Busan", category: "Văn phòng" },
        { image: "/images/projects/hyosung.jpg",      title: "Thi công hệ thống điện, mạng cho Hyosung", category: "Nhà máy" },
        { image: "/images/projects/cjfoods.jpg",      title: "Thi công hệ thống mạng và camera giám sát cho CJ Foods", category: "Nhà máy" },
        { image: "/images/projects/datacenter.jpg",   title: "Lắp đặt tủ rack và hệ thống server room", category: "Hạ tầng IT" },
        { image: "/images/projects/construction.jpg", title: "Thi công hệ thống điện nhẹ cho công trình dân dụng", category: "Dân dụng" },
      ],
    },
    contactPage: {
      title:        "Liên hệ với Chúng tôi",
      name:         "Họ và Tên",
      email:        "Email",
      phone:        "Số điện thoại",
      message:      "Nội dung",
      submit:       "GỬI",
      sent:         "✓ ĐÃ GỬI!",
      phoneTitle:   "Điện thoại",
      phoneDesc:    "Hãy gọi cho chúng tôi để nói chuyện trực tiếp với nhóm của chúng tôi.",
      chatTitle:    "Chat trực tiếp",
      chatDesc:     "Cần câu trả lời ngay lập tức? Sử dụng trực tiếp để được hỗ trợ theo thời gian thực.",
      addressTitle: "Địa chỉ",
      addressDesc:  "Ghé văn phòng GVN – Chúng tôi luôn sẵn sàng hỗ trợ!",
    },
    partners: {
      title: "Đối tác tin cậy của chúng tôi",
      testimonial: {
        heading: "Khách hàng nói về gvntmc.com",
        sub: "Chất lượng dịch vụ tận tâm đã giúp doanh nghiệp an tâm phát triển cùng gvntmc.com",
        quote: "\"Chúng tôi đã chọn gvntmc.com vì dịch vụ lắp đặt hệ thống mạng, điện, máy tính vô cùng nhanh chóng và chuyên nghiệp. Đội ngũ hỗ trợ rất tận tâm, giúp công ty ổn định vận hành ngay từ ngày đầu. Thiết bị hiện đại, chi phí hợp lý. Tôi hoàn toàn hài lòng!\"",
        author: "Linh CEO, InnovateTech Solutions",
      },
    },
    footer: {
      desc: "Nhà cung cấp tổng thể hạ tầng & dịch vụ CNTT uy tín, chuyên nghiệp tại Việt Nam.",
      quickLinks: "Liên kết nhanh", contactInfo: "Thông tin liên hệ",
      newsletter: "Đăng ký nhận bản tin",
      newsletterDesc: "Nhận thông tin và cập nhật mới nhất về công nghệ cho hộp thư của bạn.",
      emailPlaceholder: "Nhập email...", subscribe: "ĐĂNG KÝ", subscribeSuccess: "✓ Đăng ký thành công!",
      copyright: "© Copyright 2025 | Thiết kế website bởi",
      tagline: "GVN – Giải pháp CNTT chuyên biệt tại Việt Nam",
      address: "123 Nguyễn Văn Linh, Q.7, TP.HCM", phone: "0123 456 789",
      email: "info@gvntmc.com", hours: "Thứ 2 – Thứ 7: 8:00 – 17:30",
      cta: { title: "Bạn sẵn sàng nâng tầm môi trường làm việc?", desc: "Liên hệ để nhận báo giá và tư vấn giải pháp toàn diện cho doanh nghiệp bạn!", btn: "Liên hệ ngay" },
      links: ["Giới thiệu", "Dịch vụ", "Sản phẩm", "Dự án", "Tin tức", "Liên hệ"],
    },
  },

  en: {
    nav: {
      home: "Home", about: "About", services: "Services",
      products: "Products", projects: "Projects", news: "News",
      contact: "Contact", quote: "Get a Quote",
    },
    hero: {
      badge: "Comprehensive IT Solutions",
      title1: "Specialized IT", title2: "Solutions Company", title3: "growing alongside our clients",
      desc: "GVNTMC (Global VN Technology & Maintenance Company), also known as GVN, is a professional company specializing in deploying, maintaining and repairing IT systems, supplying IT equipment, banking devices, and construction projects in Vietnam.",
      btnQuote: "Get a Quote", btnService: "Our Services",
      stat1: "Years of Experience", stat2: "Projects Completed", stat3: "Trusted Partners",
    },
    products: {
      title: "Software Development & IT Equipment Supply",
      viewAll: "View All", detail: "View details →",
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
    aboutPage: {
      heroTitle: "About Us", breadcrumb: "About", home: "Home",
      intro: [
        "GVN was established in 2013. We are proud of our rapid growth and connections with many customers in a short time. Our full name is \"GLOBAL VN TECHNOLOGY MAINTENANCE COMPANY LTD\", operating in the fields of construction, information technology, and IT equipment maintenance. We always strive to keep up with globalization and continuously develop through comprehensive innovation.",
        "With many years of experience in construction and network system maintenance for financial organizations, enterprises, companies, and factories... GVN has met the diverse needs of businesses operating in Vietnam, proposing optimal equipment configurations, maintaining stable network operations, and professionally maintaining network equipment systems. We continuously learn and seek the best solutions for our customers.",
        "GVN's aspiration is to grow together with customers by fulfilling our responsibilities most dedicatedly to build customer trust rather than pursuing short-term profits. Based on our experience and highly skilled technical team, we will continue to do our best and hope to receive much attention from customers.",
      ],
      ctaTitle: "Total IT Infrastructure & Services Provider",
      ctaQuote: "Get a Quote", ctaProject: "Featured Projects",
      projectLabels: ["Modern Office", "Equipment Warehouse", "Server Room"],
      sections: {
        about:    { title: "About Us",         sub: "", bullets: ["Propose optimal equipment configurations", "Efficient network operations", "Long-term, cost-effective maintenance planning"] },
        motto:    { title: "Our Motto",        sub: "No. 1 IT Solutions Provider", desc: "A leading professional IT company providing comprehensive solutions optimized for your IT needs." },
        strategy: { title: "Our Strategy",    sub: "One-stop Solutions Provider", desc: "A single-destination IT business partner, providing timely information per customer needs while delivering comprehensive IT infrastructure solutions." },
        customer: { title: "Our Customers",   sub: "Customer-centric spirit & technical support", desc: "We provide diverse products and advanced technical services to support your business success." },
        business: { title: "Our Business",    sub: "Trusted business partner for our customers", desc: "GVNTMC aims for a customer-centric business model, building trust across industries including construction, finance, manufacturing, and telecommunications." },
      },
      ctaBanner: {
        title: "PARTNER WITH US TO ACCELERATE YOUR TECHNOLOGY",
        desc: "Contact us for a quote or to consult on solutions tailored for your business!",
        btn: "Contact Us",
      },
    },
    productsPage: {
      home: "Home", current: "Products", sideTitle: "PRODUCT CATEGORIES",
      showing: "Showing", of: "of", results: "results",
      sortDefault: "Default sorting", sortAZ: "Name: A → Z", sortZA: "Name: Z → A",
      categories: [
        { label: "Software Solutions for Enterprises", slug: "giai-phap-phan-mem", children: ["Windows 11 Pro", "Kaspersky", "Office 365"] },
        { label: "Products",                           slug: "san-pham",           children: [] },
        { label: "IT & Construction Products",         slug: "cntt-cong-trinh",    children: ["Computer Components", "UPS / Power Supply", "CCTV Camera"] },
        { label: "Specialized Banking Equipment",      slug: "ngan-hang",          children: ["Cash Counter", "Receipt Printer", "Queue System"] },
      ],
    },
    servicesPage: {
      heroTitle: "Services", breadcrumb: "Services", home: "Home",
      items: [
        { image: "/images/services/dichvu1.jpg", title: "IT System Maintenance & Upgrade for Enterprises" },
        { image: "/images/services/dichvu2.jpg", title: "IT Components & Construction Equipment Supply" },
        { image: "/images/services/dichvu3.jpg", title: "Specialized Equipment for Banking" },
        { image: "/images/services/dichvu4.jpg", title: "Helpdesk & IT Outsourcing Services" },
        { image: "/images/services/dichvu5.jpg", title: "Software Solutions for Enterprises" },
        { image: "/images/services/dichvu6.jpg", title: "Consulting - Design - Construction Services" },
      ],
    },
    projectsPage: {
      heroTitle: "Projects", breadcrumb: "Projects", home: "Home",
      loadMore: "Load more projects",
      categories: ["All", "Banking", "Factory", "Office", "IT Infrastructure", "Civil"],
      items: [
        { image: "/images/projects/shinhan-bank.jpg", title: "Relocation & electrical/network system for Shinhan Bank branch", category: "Banking" },
        { image: "/images/projects/comet-vina.jpg",   title: "Electrical & network system for Comet Vina factory", category: "Factory" },
        { image: "/images/projects/chemtronics.jpg",  title: "Network, CCTV & speaker system for Chemtronics factory & office", category: "Factory" },
        { image: "/images/projects/busan.jpg",        title: "Network, CCTV & speaker system for Busan branch office", category: "Office" },
        { image: "/images/projects/hyosung.jpg",      title: "Electrical & network system for Hyosung", category: "Factory" },
        { image: "/images/projects/cjfoods.jpg",      title: "Network & CCTV system for CJ Foods", category: "Factory" },
        { image: "/images/projects/datacenter.jpg",   title: "Rack cabinet & server room installation", category: "IT Infrastructure" },
        { image: "/images/projects/construction.jpg", title: "Low-voltage electrical system for civil construction", category: "Civil" },
      ],
    },
    contactPage: {
      title:        "Contact Us",
      name:         "Full Name",
      email:        "Email",
      phone:        "Phone Number",
      message:      "Message",
      submit:       "SEND",
      sent:         "✓ SENT!",
      phoneTitle:   "Phone",
      phoneDesc:    "Call us to speak directly with our team.",
      chatTitle:    "Live Chat",
      chatDesc:     "Need an instant reply? Use live chat for real-time support.",
      addressTitle: "Address",
      addressDesc:  "Visit GVN office – We are always ready to assist!",
    },
    partners: {
      title: "Our Trusted Partners",
      testimonial: {
        heading: "What clients say about gvntmc.com",
        sub: "Our dedicated service quality has helped businesses grow with confidence alongside gvntmc.com",
        quote: "\"We chose gvntmc.com for their incredibly fast and professional network and computer installation services. The support team is very dedicated, helping our company operate smoothly from day one. Modern equipment, reasonable prices. We are completely satisfied!\"",
        author: "Linh CEO, InnovateTech Solutions",
      },
    },
    footer: {
      desc: "A trusted, professional total IT infrastructure & services provider in Vietnam.",
      quickLinks: "Quick Links", contactInfo: "Contact Information",
      newsletter: "Subscribe to Newsletter",
      newsletterDesc: "Receive the latest tech updates and tips delivered to your inbox.",
      emailPlaceholder: "Enter email...", subscribe: "SUBSCRIBE", subscribeSuccess: "✓ Subscribed successfully!",
      copyright: "© Copyright 2025 | Website designed by",
      tagline: "GVN – Specialized IT Solutions in Vietnam",
      address: "123 Nguyen Van Linh, District 7, HCMC", phone: "0123 456 789",
      email: "info@gvntmc.com", hours: "Mon – Sat: 8:00 AM – 5:30 PM",
      cta: { title: "Ready to upgrade your work environment?", desc: "Contact us for a quote and consultation on comprehensive solutions for your business!", btn: "Contact Us" },
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
  lang: "vi", setLang: () => {}, t: translations.vi,
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