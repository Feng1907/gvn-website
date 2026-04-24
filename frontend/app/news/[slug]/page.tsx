"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/components/LangContext";
import styles from "./page.module.css";

const articles = [
  {
    slug: "chien-luoc-an-ninh-vat-ly",
    category: "Bảo mật", categoryEn: "Security",
    date: "2025-03-15", readTime: 5, emoji: "🔐",
    bg: "linear-gradient(135deg,#1a6fc4,#00b4d8)",
    title: "Chiến lược an ninh vật lý hiệu quả cho doanh nghiệp và cơ sở hạ tầng",
    titleEn: "Effective Physical Security Strategy for Enterprises and Infrastructure",
    excerpt: "Trong môi trường kinh doanh hiện đại, an ninh vật lý đóng vai trò then chốt trong việc bảo vệ tài sản, con người và thông tin...",
    excerptEn: "In today's business environment, physical security plays a key role in protecting assets, people and corporate information...",
    content: `<p>Trong môi trường kinh doanh và xã hội hiện đại, <strong>an ninh vật lý</strong> đóng vai trò then chốt trong việc bảo vệ tài sản, con người và thông tin của doanh nghiệp. Không chỉ đơn giản là lắp đặt camera hay khóa cửa, chiến lược an ninh vật lý toàn diện đòi hỏi sự kết hợp giữa công nghệ hiện đại, quy trình vận hành và đào tạo nhân sự.</p>
<h2>1. Đánh giá rủi ro và phân vùng bảo mật</h2>
<p>Bước đầu tiên trong xây dựng chiến lược an ninh vật lý là <strong>đánh giá toàn diện các rủi ro</strong> tiềm ẩn. Doanh nghiệp cần xác định:</p>
<ul>
  <li>Các tài sản cần bảo vệ (thiết bị, dữ liệu, nhân viên)</li>
  <li>Các điểm yếu trong cơ sở vật chất hiện tại</li>
  <li>Phân vùng bảo mật theo mức độ nhạy cảm (công cộng, nội bộ, bí mật)</li>
</ul>
<h2>2. Hệ thống camera giám sát AI</h2>
<p>Camera giám sát CCTV thế hệ mới tích hợp AI giúp phát hiện và cảnh báo các hành vi bất thường theo thời gian thực. Công nghệ nhận diện khuôn mặt, phân tích hành vi và cảnh báo xâm nhập tự động giúp giảm thiểu sự can thiệp thủ công và tăng tốc độ phản ứng với sự cố.</p>
<h2>3. Kiểm soát ra vào thông minh</h2>
<p>Hệ thống <strong>Access Control</strong> hiện đại sử dụng thẻ từ, vân tay hoặc nhận diện khuôn mặt để quản lý quyền ra vào từng khu vực. Mọi hoạt động được ghi lại và có thể kiểm tra bất cứ lúc nào, tạo ra dấu vết kiểm toán hoàn chỉnh.</p>
<h2>4. Chiếu sáng và bố trí không gian</h2>
<p>Thiết kế ánh sáng hợp lý tại các điểm ra vào, bãi đỗ xe và hành lang không chỉ tăng cường khả năng ghi hình của camera mà còn tạo ra môi trường làm việc an toàn cho nhân viên.</p>
<h2>5. Đào tạo và quy trình ứng phó</h2>
<p>Công nghệ chỉ phát huy hiệu quả tối đa khi kết hợp với <strong>nhân tố con người</strong> được đào tạo bài bản. Doanh nghiệp cần xây dựng quy trình ứng phó sự cố rõ ràng và thực hiện diễn tập định kỳ.</p>
<p>GVN cung cấp giải pháp an ninh toàn diện từ tư vấn, thiết kế đến thi công và bảo trì hệ thống camera CCTV, access control cho doanh nghiệp tại Việt Nam. Liên hệ với chúng tôi để được tư vấn miễn phí.</p>`,
    contentEn: `<p>In today's modern business environment, <strong>physical security</strong> plays a key role in protecting assets, people and corporate information. Beyond simply installing cameras or locks, a comprehensive physical security strategy requires a combination of modern technology, operational procedures and personnel training.</p>
<h2>1. Risk Assessment and Security Zoning</h2>
<p>The first step in building a physical security strategy is a <strong>comprehensive risk assessment</strong>. Businesses need to identify:</p>
<ul>
  <li>Assets to protect (equipment, data, employees)</li>
  <li>Vulnerabilities in current facilities</li>
  <li>Security zones by sensitivity level (public, internal, confidential)</li>
</ul>
<h2>2. AI Surveillance Camera Systems</h2>
<p>Next-generation CCTV cameras with AI integration detect and alert abnormal behaviors in real-time. Facial recognition, behavior analysis and automatic intrusion alerts help minimize manual intervention and speed up incident response.</p>
<h2>3. Smart Access Control</h2>
<p>Modern <strong>Access Control</strong> systems using smart cards, fingerprints or facial recognition manage access rights to each area. All activity is logged and auditable at any time, creating a complete audit trail.</p>
<h2>4. Lighting and Space Layout</h2>
<p>Proper lighting at entry points, parking areas and corridors not only enhances camera recording capability but also creates a safe working environment for employees.</p>
<h2>5. Training and Response Procedures</h2>
<p>Technology only achieves maximum effectiveness when combined with well-trained <strong>human factors</strong>. Businesses need to establish clear incident response procedures and conduct regular drills.</p>
<p>GVN provides comprehensive security solutions from consulting, design to construction and maintenance of CCTV and access control systems for businesses in Vietnam. Contact us for a free consultation.</p>`,
    relatedSlugs: ["giai-phap-camera-giam-sat-cctv", "thiet-bi-chuyen-dung-ngan-hang"],
  },
  {
    slug: "dich-vu-helpdesk-it-outsourcing",
    category: "Dịch vụ IT", categoryEn: "IT Services",
    date: "2025-03-08", readTime: 4, emoji: "💻",
    bg: "linear-gradient(135deg,#43c99b,#00b4d8)",
    title: "Dịch vụ Helpdesk & IT Outsourcing – Cho thuê nhân sự IT Onsite",
    titleEn: "Helpdesk & IT Outsourcing – Onsite IT Staffing Services",
    excerpt: "Giải pháp thuê ngoài nhân sự IT onsite giúp doanh nghiệp tiết kiệm chi phí vận hành, đảm bảo hệ thống hoạt động liên tục 24/7...",
    excerptEn: "Onsite IT outsourcing solutions help businesses reduce operational costs while ensuring 24/7 continuous system uptime...",
    content: `<p>Trong bối cảnh cạnh tranh ngày càng khốc liệt, các doanh nghiệp đang tìm kiếm giải pháp tối ưu hóa chi phí vận hành CNTT mà không ảnh hưởng đến chất lượng dịch vụ. <strong>IT Outsourcing và Helpdesk</strong> là giải pháp được nhiều doanh nghiệp lớn lựa chọn.</p>
<h2>Tại sao chọn IT Outsourcing?</h2>
<ul>
  <li><strong>Tiết kiệm chi phí:</strong> Không cần tuyển dụng, đào tạo và duy trì đội ngũ IT nội bộ</li>
  <li><strong>Chuyên môn cao:</strong> Tiếp cận đội ngũ kỹ thuật viên có chứng chỉ quốc tế</li>
  <li><strong>Linh hoạt:</strong> Điều chỉnh quy mô dịch vụ theo nhu cầu thực tế</li>
  <li><strong>Tập trung vào core business:</strong> Để chuyên gia xử lý IT, bạn tập trung vào kinh doanh</li>
</ul>
<h2>Dịch vụ Helpdesk 24/7 của GVN</h2>
<p>GVN cung cấp dịch vụ Helpdesk đa kênh (điện thoại, email, ticket system) với cam kết SLA rõ ràng. Sự cố nghiêm trọng được xử lý trong vòng 2 giờ, sự cố thông thường trong 4 giờ làm việc.</p>
<h2>Kỹ thuật viên Onsite</h2>
<p>Với dịch vụ kỹ thuật viên onsite, GVN cung cấp nhân sự IT làm việc trực tiếp tại văn phòng khách hàng theo lịch cố định hoặc theo yêu cầu. Kỹ thuật viên của chúng tôi được đào tạo bài bản và có kinh nghiệm thực tế phong phú.</p>`,
    contentEn: `<p>In an increasingly competitive environment, businesses are looking for solutions to optimize IT operational costs without compromising service quality. <strong>IT Outsourcing and Helpdesk</strong> is the solution chosen by many large enterprises.</p>
<h2>Why Choose IT Outsourcing?</h2>
<ul>
  <li><strong>Cost savings:</strong> No need to recruit, train and maintain an internal IT team</li>
  <li><strong>High expertise:</strong> Access to internationally certified technicians</li>
  <li><strong>Flexibility:</strong> Scale services up or down based on actual needs</li>
  <li><strong>Focus on core business:</strong> Let experts handle IT while you focus on business</li>
</ul>
<h2>GVN's 24/7 Helpdesk Service</h2>
<p>GVN provides multi-channel Helpdesk service (phone, email, ticket system) with clear SLA commitments. Critical incidents are resolved within 2 hours, standard incidents within 4 business hours.</p>
<h2>Onsite Technicians</h2>
<p>With onsite technician service, GVN provides IT staff working directly at client offices on fixed schedules or on-demand. Our technicians are professionally trained with extensive practical experience.</p>`,
    relatedSlugs: ["dich-vu-bao-tri-nang-cap-cntt", "tu-van-thiet-ke-thi-cong-cong-trinh"],
  },
  {
    slug: "dich-vu-bao-tri-nang-cap-cntt",
    category: "Bảo trì", categoryEn: "Maintenance",
    date: "2025-02-20", readTime: 6, emoji: "⚙️",
    bg: "linear-gradient(135deg,#f47c3c,#ff9a5c)",
    title: "Dịch vụ bảo trì và nâng cấp hệ thống CNTT cho doanh nghiệp",
    titleEn: "IT System Maintenance & Upgrade Services for Enterprises",
    excerpt: "Hệ thống CNTT là xương sống của mọi doanh nghiệp hiện đại. Bảo trì định kỳ và nâng cấp đúng thời điểm giúp tối ưu hiệu suất...",
    excerptEn: "IT systems are the backbone of every modern enterprise. Regular maintenance and timely upgrades help optimize performance...",
    content: `<p>Hệ thống CNTT là <strong>xương sống</strong> của mọi doanh nghiệp hiện đại. Việc bảo trì định kỳ không chỉ kéo dài tuổi thọ thiết bị mà còn ngăn ngừa những sự cố nghiêm trọng có thể gây gián đoạn hoạt động kinh doanh.</p>
<h2>Tại sao bảo trì định kỳ quan trọng?</h2>
<p>Theo thống kê, <strong>80% sự cố hệ thống CNTT</strong> có thể được phòng ngừa thông qua bảo trì định kỳ. Chi phí xử lý sự cố đột ngột cao hơn gấp 3-5 lần so với chi phí bảo trì phòng ngừa.</p>
<h2>Quy trình bảo trì của GVN</h2>
<ol>
  <li>Kiểm tra toàn diện hệ thống (phần cứng & phần mềm)</li>
  <li>Vệ sinh thiết bị, kiểm tra nhiệt độ và nguồn điện</li>
  <li>Cập nhật firmware, driver và bản vá bảo mật</li>
  <li>Kiểm tra và tối ưu hóa hiệu suất</li>
  <li>Báo cáo tình trạng và đề xuất nâng cấp</li>
</ol>
<h2>Lập kế hoạch nâng cấp chiến lược</h2>
<p>GVN không chỉ bảo trì mà còn tư vấn lộ trình nâng cấp hợp lý, giúp doanh nghiệp tối ưu ngân sách CNTT và đón đầu công nghệ mới mà không bị gián đoạn hoạt động.</p>`,
    contentEn: `<p>IT systems are the <strong>backbone</strong> of every modern enterprise. Regular maintenance not only extends equipment lifespan but also prevents serious incidents that could disrupt business operations.</p>
<h2>Why Is Periodic Maintenance Important?</h2>
<p>According to statistics, <strong>80% of IT system incidents</strong> can be prevented through periodic maintenance. The cost of handling sudden incidents is 3-5 times higher than preventive maintenance costs.</p>
<h2>GVN's Maintenance Process</h2>
<ol>
  <li>Comprehensive system inspection (hardware & software)</li>
  <li>Equipment cleaning, temperature and power checks</li>
  <li>Firmware, driver and security patch updates</li>
  <li>Performance check and optimization</li>
  <li>Status report and upgrade recommendations</li>
</ol>
<h2>Strategic Upgrade Planning</h2>
<p>GVN not only maintains but also advises on reasonable upgrade roadmaps, helping businesses optimize their IT budget and embrace new technology without operational disruption.</p>`,
    relatedSlugs: ["dich-vu-helpdesk-it-outsourcing", "thiet-bi-chuyen-dung-ngan-hang"],
  },
  {
    slug: "giai-phap-camera-giam-sat-cctv",
    category: "Camera & An ninh", categoryEn: "CCTV & Security",
    date: "2025-02-10", readTime: 5, emoji: "📷",
    bg: "linear-gradient(135deg,#7c5cbf,#a37de8)",
    title: "Giải pháp camera giám sát CCTV toàn diện cho nhà máy và văn phòng",
    titleEn: "Comprehensive CCTV Surveillance Solutions for Factories and Offices",
    excerpt: "Hệ thống camera CCTV hiện đại tích hợp AI phân tích hành vi, nhận diện khuôn mặt và cảnh báo thông minh...",
    excerptEn: "Modern CCTV systems integrate AI for behavior analysis, facial recognition and smart alerts...",
    content: `<p>Hệ thống camera CCTV hiện đại không chỉ đơn thuần là thiết bị ghi hình mà đã trở thành <strong>nền tảng bảo mật thông minh</strong> với khả năng phân tích AI tiên tiến.</p>
<h2>Công nghệ camera AI thế hệ mới</h2>
<p>Camera IP Hikvision thế hệ mới tích hợp chip AI xử lý trực tiếp trên thiết bị (Edge AI), cho phép:</p>
<ul>
  <li>Nhận diện khuôn mặt và xác minh danh tính</li>
  <li>Phân tích hành vi bất thường (chạy trốn, tụ tập đám đông)</li>
  <li>Đếm người và phân tích lưu lượng</li>
  <li>Cảnh báo xâm nhập vào vùng cấm</li>
</ul>
<h2>Giải pháp lưu trữ tối ưu</h2>
<p>GVN tư vấn giải pháp lưu trữ phù hợp với quy mô và ngân sách:</p>
<ul>
  <li><strong>NVR/DVR:</strong> Lưu trữ nội bộ cho hệ thống vừa và nhỏ</li>
  <li><strong>NAS Synology:</strong> Lưu trữ RAID cho độ tin cậy cao</li>
  <li><strong>Cloud backup:</strong> Sao lưu đám mây bảo đảm dữ liệu không bị mất</li>
</ul>`,
    contentEn: `<p>Modern CCTV camera systems are no longer just recording devices — they have become <strong>intelligent security platforms</strong> with advanced AI analysis capabilities.</p>
<h2>Next-Generation AI Camera Technology</h2>
<p>New-generation Hikvision IP cameras integrate AI chips processed directly on the device (Edge AI), enabling:</p>
<ul>
  <li>Facial recognition and identity verification</li>
  <li>Abnormal behavior analysis (fleeing, crowd gathering)</li>
  <li>People counting and traffic analysis</li>
  <li>Intrusion alerts for restricted zones</li>
</ul>
<h2>Optimal Storage Solutions</h2>
<p>GVN advises on storage solutions appropriate to scale and budget:</p>
<ul>
  <li><strong>NVR/DVR:</strong> Internal storage for small to medium systems</li>
  <li><strong>Synology NAS:</strong> RAID storage for high reliability</li>
  <li><strong>Cloud backup:</strong> Cloud backup ensures data is never lost</li>
</ul>`,
    relatedSlugs: ["chien-luoc-an-ninh-vat-ly", "tu-van-thiet-ke-thi-cong-cong-trinh"],
  },
  {
    slug: "tu-van-thiet-ke-thi-cong-cong-trinh",
    category: "Thi công", categoryEn: "Construction",
    date: "2025-01-25", readTime: 7, emoji: "🏗️",
    bg: "linear-gradient(135deg,#1a2340,#3a5080)",
    title: "Tư vấn – Thiết kế – Thi công công trình CNTT từ A đến Z",
    titleEn: "IT Construction Consulting – Design – Implementation from A to Z",
    excerpt: "Từ tư vấn thiết kế đến thi công và bàn giao, GVN cung cấp giải pháp trọn gói cho hạ tầng CNTT...",
    excerptEn: "From design consulting to implementation and handover, GVN provides complete turnkey IT infrastructure solutions...",
    content: `<p>GVN cung cấp dịch vụ <strong>tư vấn, thiết kế và thi công</strong> toàn diện cho hạ tầng CNTT và kỹ thuật của doanh nghiệp. Chúng tôi đồng hành cùng khách hàng từ bản vẽ đầu tiên đến ngày bàn giao hoàn thiện.</p>
<h2>Phạm vi dịch vụ</h2>
<ul>
  <li>Thiết kế tổng mặt bằng và sơ đồ kỹ thuật chi tiết</li>
  <li>Thi công hệ thống điện công nghiệp và điện nhẹ</li>
  <li>Lắp đặt hệ thống mạng cấu trúc (structured cabling)</li>
  <li>Xây dựng và trang bị phòng máy chủ (server room)</li>
  <li>Hệ thống UPS và nguồn điện dự phòng</li>
</ul>
<h2>Quy trình làm việc chuyên nghiệp</h2>
<p>GVN áp dụng quy trình quản lý dự án theo chuẩn quốc tế, đảm bảo tiến độ, chất lượng và an toàn lao động tại mọi công trình. Đội ngũ kỹ sư có chứng chỉ và kinh nghiệm thực tế tại hàng chục dự án lớn cho các tập đoàn FDI và ngân hàng tại Việt Nam.</p>`,
    contentEn: `<p>GVN provides comprehensive <strong>consulting, design and construction</strong> services for IT and technical infrastructure of enterprises. We partner with clients from the first blueprint to the final handover.</p>
<h2>Service Scope</h2>
<ul>
  <li>General layout design and detailed technical drawings</li>
  <li>Industrial and low-voltage electrical system construction</li>
  <li>Structured cabling installation</li>
  <li>Server room construction and equipment</li>
  <li>UPS and backup power systems</li>
</ul>
<h2>Professional Work Process</h2>
<p>GVN applies internationally-standard project management processes, ensuring schedule, quality and labor safety at every project. Our certified engineering team has practical experience on dozens of major projects for FDI corporations and banks in Vietnam.</p>`,
    relatedSlugs: ["camera-cctv", "dich-vu-bao-tri-nang-cap-cntt"],
  },
  {
    slug: "thiet-bi-chuyen-dung-ngan-hang",
    category: "Ngân hàng", categoryEn: "Banking",
    date: "2025-01-12", readTime: 4, emoji: "🏦",
    bg: "linear-gradient(135deg,#0f4f9e,#1a6fc4)",
    title: "Thiết bị chuyên dụng dành cho ngân hàng và tổ chức tài chính",
    titleEn: "Specialized Equipment for Banks and Financial Institutions",
    excerpt: "GVN cung cấp đầy đủ thiết bị chuyên dụng cho ngân hàng như máy đếm tiền, máy kiểm tra tiền giả, hệ thống xếp hàng...",
    excerptEn: "GVN supplies complete specialized banking equipment including cash counters, counterfeit detectors, and queue management systems...",
    content: `<p>Ngành ngân hàng có những yêu cầu đặc thù về thiết bị, đòi hỏi <strong>độ chính xác cao, độ tin cậy tuyệt đối</strong> và khả năng hoạt động liên tục trong môi trường áp lực cao. GVN đã cung cấp thiết bị cho nhiều chi nhánh ngân hàng lớn tại Việt Nam.</p>
<h2>Danh mục thiết bị ngân hàng</h2>
<ul>
  <li><strong>Máy đếm tiền RIBAO:</strong> Đếm và phân loại tiền mặt chính xác cao</li>
  <li><strong>Máy kiểm tra tiền giả:</strong> Công nghệ UV + MG + IR đa lớp bảo vệ</li>
  <li><strong>Hệ thống QMS:</strong> Quản lý xếp hàng thông minh, tích hợp màn hình hiển thị</li>
  <li><strong>Máy in nhiệt Epson:</strong> In hóa đơn, phiếu giao dịch tốc độ cao</li>
  <li><strong>Thiết bị ký điện tử:</strong> Pad ký tên số cho giao dịch không giấy tờ</li>
</ul>
<h2>Dịch vụ sau bán hàng</h2>
<p>GVN cung cấp dịch vụ bảo hành, bảo trì và hỗ trợ kỹ thuật toàn diện cho tất cả thiết bị ngân hàng. Đội ngũ kỹ thuật được đào tạo chuyên sâu về thiết bị ngân hàng đảm bảo phản hồi nhanh nhất khi có sự cố.</p>`,
    contentEn: `<p>The banking industry has specific equipment requirements, demanding <strong>high precision, absolute reliability</strong> and the ability to operate continuously under high-pressure environments. GVN has supplied equipment to many major bank branches in Vietnam.</p>
<h2>Banking Equipment Catalog</h2>
<ul>
  <li><strong>RIBAO cash counters:</strong> High-accuracy cash counting and sorting</li>
  <li><strong>Counterfeit detectors:</strong> Multi-layer UV + MG + IR technology</li>
  <li><strong>QMS systems:</strong> Smart queue management with integrated display screens</li>
  <li><strong>Epson thermal printers:</strong> High-speed receipt and transaction slip printing</li>
  <li><strong>Electronic signature pads:</strong> Digital signature pads for paperless transactions</li>
</ul>
<h2>After-Sales Service</h2>
<p>GVN provides comprehensive warranty, maintenance and technical support for all banking equipment. Our technically trained team specializing in banking equipment ensures the fastest response when issues arise.</p>`,
    relatedSlugs: ["chien-luoc-an-ninh-vat-ly", "dich-vu-helpdesk-it-outsourcing"],
  },
];

function formatDate(dateStr: string, lang: string) {
  const d = new Date(dateStr);
  if (lang === "vi") return `${d.getDate()} tháng ${d.getMonth() + 1}, ${d.getFullYear()}`;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const { lang } = useLang();
  const isVi = lang === "vi";

  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => article.relatedSlugs.includes(a.slug));

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero} style={{ background: article.bg }}>
        <div className={styles.heroBreadcrumb}>
          <Link href="/">{isVi ? "Trang chủ" : "Home"}</Link>
          <span>/</span>
          <Link href="/news">{isVi ? "Tin tức" : "News"}</Link>
          <span>/</span>
          <strong>{isVi ? article.category : article.categoryEn}</strong>
        </div>
        <div className={styles.heroMeta}>
          <span className={styles.categoryBadge}>{isVi ? article.category : article.categoryEn}</span>
          <span className={styles.metaDot}>·</span>
          <span>{formatDate(article.date, lang)}</span>
          <span className={styles.metaDot}>·</span>
          <span>{article.readTime} {isVi ? "phút đọc" : "min read"}</span>
        </div>
        <div className={styles.heroEmoji}>{article.emoji}</div>
        <h1 className={styles.heroTitle}>{isVi ? article.title : article.titleEn}</h1>
        <p className={styles.heroExcerpt}>{isVi ? article.excerpt : article.excerptEn}</p>
      </div>

      {/* ── BODY ── */}
      <div className={styles.body}>
        <div className={styles.container}>

          {/* MAIN CONTENT */}
          <article
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: isVi ? article.content : article.contentEn }}
          />

          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            {/* Share */}
            <div className={styles.shareBox}>
              <h3 className={styles.shareTitle}>{isVi ? "Chia sẻ bài viết" : "Share this article"}</h3>
              <div className={styles.shareButtons}>
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? window.location.href : ""}`}
                  target="_blank" rel="noopener noreferrer"
                  className={styles.shareBtn}
                  aria-label="Share on Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/shareArticle?url=${typeof window !== "undefined" ? window.location.href : ""}`}
                  target="_blank" rel="noopener noreferrer"
                  className={styles.shareBtn}
                  aria-label="Share on LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                {/* Copy link */}
                <button
                  className={styles.shareBtn}
                  onClick={() => { if (typeof window !== "undefined") navigator.clipboard.writeText(window.location.href); }}
                  title={isVi ? "Sao chép liên kết" : "Copy link"}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                  {isVi ? "Sao chép" : "Copy link"}
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaBox}>
              <h3 className={styles.ctaTitle}>{isVi ? "Cần tư vấn?" : "Need advice?"}</h3>
              <p className={styles.ctaDesc}>
                {isVi
                  ? "Liên hệ GVN để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp."
                  : "Contact GVN for the most suitable solutions for your business."}
              </p>
              <Link href="/contact" className={styles.ctaBtn}>
                {isVi ? "Liên hệ ngay" : "Contact Us"}
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <div className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedTitle}>{isVi ? "Bài viết liên quan" : "Related Articles"}</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/news/${r.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedIcon} style={{ background: r.bg }}>{r.emoji}</div>
                  <div className={styles.relatedInfo}>
                    <span className={styles.relatedCat}>{isVi ? r.category : r.categoryEn}</span>
                    <h4>{isVi ? r.title : r.titleEn}</h4>
                    <p>{isVi ? r.excerpt : r.excerptEn}</p>
                    <span className={styles.relatedMore}>
                      {isVi ? "Đọc tiếp →" : "Read more →"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
