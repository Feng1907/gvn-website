"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/components/LangContext";
import styles from "./page.module.css";

const services = [
  {
    slug: "bao-tri-nang-cap",
    image: "/images/services/dichvu1.jpg",
    title: "Dịch vụ bảo trì nâng cấp hệ thống CNTT cho doanh nghiệp",
    titleEn: "IT System Maintenance & Upgrade for Enterprises",
    desc: "Dịch vụ bảo trì định kỳ, nâng cấp phần cứng/phần mềm, đảm bảo hệ thống vận hành ổn định 24/7.",
    descEn: "Periodic maintenance, hardware/software upgrades, ensuring 24/7 stable system operation.",
    descFull: "GVN cung cấp dịch vụ bảo trì và nâng cấp hệ thống CNTT toàn diện cho doanh nghiệp. Với đội ngũ kỹ thuật viên lành nghề và nhiều năm kinh nghiệm, chúng tôi đảm bảo hệ thống của bạn luôn hoạt động ổn định và an toàn. Dịch vụ bao gồm kiểm tra định kỳ, vệ sinh thiết bị, cập nhật driver và firmware, cũng như nâng cấp phần cứng khi cần thiết. Chúng tôi xây dựng kế hoạch bảo trì theo lịch trình phù hợp với hoạt động của doanh nghiệp, giảm thiểu downtime và đảm bảo tính liên tục của hệ thống.",
    descFullEn: "GVN provides comprehensive IT system maintenance and upgrade services for enterprises. With a team of skilled technicians and years of experience, we ensure your systems always operate stably and securely. Services include periodic inspections, equipment cleaning, driver and firmware updates, as well as hardware upgrades when necessary. We build maintenance schedules tailored to your business operations, minimizing downtime and ensuring system continuity.",
    features: ["Bảo trì định kỳ theo hợp đồng", "Nâng cấp phần cứng & phần mềm", "Hỗ trợ từ xa & onsite 24/7", "Báo cáo tình trạng hệ thống hàng tháng", "Phản hồi sự cố trong 2 giờ"],
    featuresEn: ["Contract-based periodic maintenance", "Hardware & software upgrades", "24/7 remote & onsite support", "Monthly system status reports", "2-hour incident response"],
    bg: "linear-gradient(135deg, #0f4f9e, #1a6fc4)",
    relatedSlugs: ["linh-kien-cntt", "it-outsourcing"],
  },
  {
    slug: "linh-kien-cntt",
    image: "/images/services/dichvu2.jpg",
    title: "Cung cấp Linh kiện CNTT & Thiết bị công trình",
    titleEn: "IT Components Supply & Construction Equipment",
    desc: "Cung cấp linh kiện máy tính, thiết bị mạng, camera, thiết bị công trình chính hãng với giá cạnh tranh.",
    descEn: "Supply of genuine computer components, network devices and construction equipment at competitive prices.",
    descFull: "GVN là nhà phân phối chính hãng các thiết bị CNTT, linh kiện máy tính và thiết bị công trình từ các thương hiệu uy tín trên thế giới như ASUS, Gigabyte, Synology, Hikvision, Cisco và nhiều hơn nữa. Chúng tôi cam kết cung cấp sản phẩm chính hãng, có bảo hành đầy đủ với giá cạnh tranh nhất thị trường. Với kho hàng đa dạng và hệ thống logistics hiệu quả, chúng tôi đảm bảo giao hàng nhanh chóng và đúng hẹn cho doanh nghiệp của bạn.",
    descFullEn: "GVN is an authorized distributor of IT equipment, computer components and construction devices from leading global brands such as ASUS, Gigabyte, Synology, Hikvision, Cisco and more. We commit to providing genuine products with full warranty at the most competitive prices in the market. With a diverse inventory and efficient logistics, we ensure fast and timely delivery for your business.",
    features: ["Linh kiện máy tính chính hãng", "Thiết bị mạng & hệ thống Cisco", "Camera IP & CCTV Hikvision", "UPS & nguồn điện dự phòng", "Thiết bị văn phòng & in ấn"],
    featuresEn: ["Genuine computer components", "Cisco network & system devices", "Hikvision IP & CCTV cameras", "UPS & backup power supply", "Office & printing equipment"],
    bg: "linear-gradient(135deg, #43c99b, #00b4d8)",
    relatedSlugs: ["camera-cctv", "tu-van-thi-cong"],
  },
  {
    slug: "thiet-bi-ngan-hang",
    image: "/images/services/dichvu3.jpg",
    title: "Các thiết bị chuyên dụng dành cho Ngân hàng",
    titleEn: "Specialized Equipment for Banking",
    desc: "Cung cấp đầy đủ thiết bị chuyên dụng cho ngân hàng: máy đếm tiền, máy kiểm tra tiền giả, hệ thống xếp hàng.",
    descEn: "Complete supply of specialized banking equipment: cash counters, counterfeit detectors, queue management systems.",
    descFull: "GVN là đơn vị chuyên cung cấp và lắp đặt các thiết bị chuyên dụng cho ngân hàng và tổ chức tài chính. Với nhiều năm kinh nghiệm phục vụ hệ thống ngân hàng Việt Nam, chúng tôi hiểu rõ nhu cầu đặc thù của ngành và cung cấp các giải pháp thiết bị toàn diện, đáng tin cậy. Đội ngũ kỹ thuật của GVN được đào tạo bài bản để cài đặt, bảo trì và hỗ trợ kỹ thuật cho tất cả các thiết bị ngân hàng.",
    descFullEn: "GVN specializes in supplying and installing specialized equipment for banks and financial institutions. With years of experience serving Vietnam's banking system, we understand the sector's unique requirements and provide comprehensive, reliable equipment solutions. GVN's technical team is professionally trained to install, maintain and provide technical support for all banking equipment.",
    features: ["Máy đếm tiền RIBAO & Glory", "Máy kiểm tra tiền giả UV + MG", "Hệ thống quản lý xếp hàng (QMS)", "Máy in hóa đơn nhiệt Epson", "Thiết bị POS & Pinpad"],
    featuresEn: ["RIBAO & Glory cash counters", "UV + MG counterfeit detectors", "Queue Management Systems (QMS)", "Epson thermal receipt printers", "POS & Pinpad devices"],
    bg: "linear-gradient(135deg, #0f4f9e, #1a6fc4)",
    relatedSlugs: ["linh-kien-cntt", "bao-tri-nang-cap"],
  },
  {
    slug: "it-outsourcing",
    image: "/images/services/dichvu4.jpg",
    title: "Dịch vụ Helpdesk & IT Outsourcing – Cho thuê nhân sự IT Onsite",
    titleEn: "Helpdesk & IT Outsourcing – Onsite IT Staffing",
    desc: "Giải pháp thuê ngoài nhân sự IT chuyên nghiệp, hỗ trợ Helpdesk 24/7, kỹ thuật viên onsite.",
    descEn: "Professional IT outsourcing, 24/7 helpdesk support, onsite technicians to reduce costs.",
    descFull: "Dịch vụ IT Outsourcing của GVN giúp doanh nghiệp tiết kiệm đáng kể chi phí vận hành CNTT trong khi vẫn đảm bảo chất lượng dịch vụ cao nhất. Thay vì xây dựng đội ngũ IT nội bộ tốn kém, bạn có thể thuê kỹ thuật viên onsite chuyên nghiệp của GVN theo hợp đồng linh hoạt theo tháng hoặc năm. Chúng tôi cung cấp dịch vụ Helpdesk 24/7, xử lý sự cố trong thời gian thực và báo cáo SLA định kỳ.",
    descFullEn: "GVN's IT Outsourcing service helps businesses significantly reduce IT operational costs while maintaining the highest quality of service. Instead of building an expensive internal IT team, you can hire GVN's professional onsite technicians through flexible monthly or annual contracts. We provide 24/7 Helpdesk, real-time incident resolution and regular SLA reporting.",
    features: ["Helpdesk 24/7 hỗ trợ từ xa", "Kỹ thuật viên onsite tại văn phòng", "Quản lý hạ tầng IT theo SLA", "Báo cáo hiệu suất hàng tháng", "Hợp đồng linh hoạt theo nhu cầu"],
    featuresEn: ["24/7 remote Helpdesk support", "Onsite technicians at your office", "SLA-based IT infrastructure management", "Monthly performance reports", "Flexible contracts to your needs"],
    bg: "linear-gradient(135deg, #7c5cbf, #a37de8)",
    relatedSlugs: ["bao-tri-nang-cap", "tu-van-thi-cong"],
  },
  {
    slug: "camera-cctv",
    image: "/images/services/dichvu5.jpg",
    title: "Hệ thống Camera giám sát CCTV & Mạng nội bộ",
    titleEn: "CCTV Surveillance System & Internal Network",
    desc: "Thiết kế và lắp đặt hệ thống camera IP, CCTV, mạng LAN/WAN, WiFi doanh nghiệp tích hợp AI.",
    descEn: "Design and installation of IP camera systems, CCTV, LAN/WAN networks with AI integration.",
    descFull: "GVN thiết kế và triển khai hệ thống camera giám sát CCTV và mạng nội bộ tích hợp cho nhà máy, văn phòng và các cơ sở kinh doanh. Sử dụng camera IP thế hệ mới từ Hikvision với tích hợp AI để nhận diện khuôn mặt, phân tích hành vi và phát hiện xâm nhập thông minh. Hệ thống mạng LAN/WAN được thiết kế theo chuẩn enterprise với thiết bị Cisco, đảm bảo hiệu năng cao và bảo mật tốt nhất.",
    descFullEn: "GVN designs and deploys integrated CCTV surveillance and internal network systems for factories, offices and business facilities. Using next-generation IP cameras from Hikvision with AI integration for facial recognition, behavior analysis and intelligent intrusion detection. LAN/WAN network systems are designed to enterprise standards with Cisco equipment, ensuring high performance and best-in-class security.",
    features: ["Camera IP & AI thông minh Hikvision", "Hệ thống mạng LAN/WAN Cisco", "WiFi doanh nghiệp Ubiquiti/Cisco", "Lưu trữ NAS & Cloud", "Giám sát từ xa qua smartphone"],
    featuresEn: ["Hikvision smart IP & AI cameras", "Cisco LAN/WAN network systems", "Ubiquiti/Cisco enterprise WiFi", "NAS & Cloud storage", "Remote monitoring via smartphone"],
    bg: "linear-gradient(135deg, #43c99b, #00b4d8)",
    relatedSlugs: ["tu-van-thi-cong", "linh-kien-cntt"],
  },
  {
    slug: "tu-van-thi-cong",
    image: "/images/services/dichvu6.jpg",
    title: "Tư vấn – Thiết kế – Thi công công trình",
    titleEn: "Consulting – Design – Construction",
    desc: "Tư vấn, thiết kế và thi công toàn bộ hạ tầng CNTT, hệ thống điện, mạng cho nhà máy và văn phòng.",
    descEn: "Consulting, design and construction of IT infrastructure, electrical systems for factories and offices.",
    descFull: "GVN cung cấp dịch vụ tư vấn, thiết kế và thi công toàn diện cho hạ tầng CNTT và hệ thống kỹ thuật của nhà máy, văn phòng. Từ bản vẽ thiết kế chi tiết đến thi công hoàn thiện và bàn giao, chúng tôi đảm nhận toàn bộ quy trình. Đội ngũ kỹ sư của GVN có chuyên môn sâu về hệ thống điện nhẹ, điện công nghiệp, mạng cấu trúc và phòng máy chủ. Chúng tôi đã hoàn thành thành công hàng trăm công trình cho khách hàng là các doanh nghiệp FDI và tổ chức tài chính lớn tại Việt Nam.",
    descFullEn: "GVN provides comprehensive consulting, design and construction services for IT infrastructure and technical systems of factories and offices. From detailed design drawings to complete construction and handover, we handle the entire process. GVN's engineering team has deep expertise in low-voltage systems, industrial electrical, structured networks and server rooms. We have successfully completed hundreds of projects for FDI enterprises and major financial institutions in Vietnam.",
    features: ["Thiết kế hạ tầng CNTT tổng thể", "Thi công hệ thống điện & điện nhẹ", "Xây dựng phòng máy chủ (server room)", "Hệ thống mạng cấu trúc (structured cabling)", "Bàn giao & bảo trì sau thi công"],
    featuresEn: ["Complete IT infrastructure design", "Electrical & low-voltage construction", "Server room construction", "Structured cabling systems", "Handover & post-construction maintenance"],
    bg: "linear-gradient(135deg, #1a2340, #3a5080)",
    relatedSlugs: ["camera-cctv", "bao-tri-nang-cap"],
  },
];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { lang } = useLang();
  const isVi = lang === "vi";

  const svc = services.find((s) => s.slug === params.slug);
  if (!svc) notFound();

  const related = services.filter((s) => svc.relatedSlugs.includes(s.slug));

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero} style={{ background: svc.bg }}>
        <div className={styles.heroBreadcrumb}>
          <Link href="/">{isVi ? "Trang chủ" : "Home"}</Link>
          <span>/</span>
          <Link href="/services">{isVi ? "Dịch vụ" : "Services"}</Link>
          <span>/</span>
          <strong>{isVi ? svc.title : svc.titleEn}</strong>
        </div>
        <h1 className={styles.heroTitle}>{isVi ? svc.title : svc.titleEn}</h1>
        <p className={styles.heroDesc}>{isVi ? svc.desc : svc.descEn}</p>
      </div>

      {/* ── BODY ── */}
      <div className={styles.body}>
        <div className={styles.container}>

          {/* LEFT — mô tả + features */}
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>
              {isVi ? "Tổng quan dịch vụ" : "Service Overview"}
            </h2>
            <p className={styles.paragraph}>
              {isVi ? svc.descFull : svc.descFullEn}
            </p>

            <h3 className={styles.featuresTitle}>
              {isVi ? "Những gì chúng tôi cung cấp" : "What We Provide"}
            </h3>
            <ul className={styles.featureList}>
              {(isVi ? svc.features : svc.featuresEn).map((f, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — ảnh + CTA */}
          <aside className={styles.sidebar}>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={svc.image} alt={isVi ? svc.title : svc.titleEn} className={styles.image} />
            </div>

            <div className={styles.ctaBox}>
              <h3 className={styles.ctaTitle}>
                {isVi ? "Cần tư vấn thêm?" : "Need more info?"}
              </h3>
              <p className={styles.ctaDesc}>
                {isVi
                  ? "Đội ngũ chuyên gia GVN sẵn sàng hỗ trợ bạn 24/7."
                  : "GVN's expert team is available 24/7 to support you."}
              </p>
              <Link href="/contact" className={styles.ctaBtn}>
                {isVi ? "Liên hệ ngay" : "Contact Us"}
              </Link>
              <a href="tel:02862515094" className={styles.ctaPhone}>
                📞 028 62515094
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED SERVICES ── */}
      {related.length > 0 && (
        <div className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedTitle}>
              {isVi ? "Dịch vụ liên quan" : "Related Services"}
            </h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/services/${r.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImg}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.image} alt={isVi ? r.title : r.titleEn} className={styles.relatedImage} />
                  </div>
                  <div className={styles.relatedInfo}>
                    <h4>{isVi ? r.title : r.titleEn}</h4>
                    <p>{isVi ? r.desc : r.descEn}</p>
                    <span className={styles.relatedMore}>
                      {isVi ? "Xem chi tiết →" : "Learn more →"}
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
