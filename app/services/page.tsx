"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "../components/LangContext";
import styles from "./page.module.css";

const services = [
  {
    slug: "bao-tri-nang-cap",
    image: "/images/services/dichvu1.jpg",
    title: "Dịch vụ bảo trì nâng cấp hệ thống CNTT cho doanh nghiệp",
    titleEn: "IT System Maintenance & Upgrade for Enterprises",
    desc: "Dịch vụ bảo trì định kỳ, nâng cấp phần cứng/phần mềm, đảm bảo hệ thống vận hành ổn định 24/7.",
    descEn: "Periodic maintenance, hardware/software upgrades, ensuring 24/7 stable system operation.",
    features: ["Bảo trì định kỳ theo hợp đồng", "Nâng cấp phần cứng & phần mềm", "Hỗ trợ từ xa & onsite", "Báo cáo tình trạng hệ thống"],
    featuresEn: ["Contract-based periodic maintenance", "Hardware & software upgrades", "Remote & onsite support", "System status reporting"],
  },
  {
    slug: "linh-kien-cntt",
    image: "/images/services/dichvu2.jpg",
    title: "Cung cấp Linh kiện CNTT & Thiết bị công trình",
    titleEn: "IT Components Supply & Construction Equipment",
    desc: "Cung cấp linh kiện máy tính, thiết bị mạng, camera, thiết bị công trình chính hãng với giá cạnh tranh.",
    descEn: "Supply of genuine computer components, network devices and construction equipment at competitive prices.",
    features: ["Linh kiện máy tính chính hãng", "Thiết bị mạng & hệ thống", "Camera IP & CCTV", "Thiết bị văn phòng"],
    featuresEn: ["Genuine computer components", "Network & system devices", "IP & CCTV cameras", "Office equipment"],
  },
  {
    slug: "thiet-bi-ngan-hang",
    image: "/images/services/dichvu3.jpg",
    title: "Các thiết bị chuyên dụng dành cho Ngân hàng",
    titleEn: "Specialized Equipment for Banking",
    desc: "Cung cấp đầy đủ thiết bị chuyên dụng cho ngân hàng: máy đếm tiền, máy kiểm tra tiền giả, hệ thống xếp hàng.",
    descEn: "Complete supply of specialized banking equipment: cash counters, counterfeit detectors, queue management systems.",
    features: ["Máy đếm tiền & kiểm tra tiền giả", "Hệ thống quản lý xếp hàng", "Pinpad & thiết bị POS", "Máy in hóa đơn nhiệt"],
    featuresEn: ["Cash counters & counterfeit detectors", "Queue management systems", "Pinpad & POS devices", "Thermal receipt printers"],
  },
  {
    slug: "it-outsourcing",
    image: "/images/services/dichvu4.jpg",
    title: "Dịch vụ Helpdesk & IT Outsourcing – Cho thuê nhân sự IT Onsite",
    titleEn: "Helpdesk & IT Outsourcing – Onsite IT Staffing",
    desc: "Giải pháp thuê ngoài nhân sự IT chuyên nghiệp, hỗ trợ Helpdesk 24/7, kỹ thuật viên onsite.",
    descEn: "Professional IT outsourcing, 24/7 helpdesk support, onsite technicians to reduce costs.",
    features: ["Helpdesk 24/7", "Kỹ thuật viên onsite", "Quản lý hạ tầng IT theo hợp đồng", "Báo cáo SLA hàng tháng"],
    featuresEn: ["24/7 Helpdesk", "Onsite technicians", "Contract-based IT infrastructure management", "Monthly SLA reports"],
  },
  {
    slug: "camera-cctv",
    image: "/images/services/dichvu5.jpg",
    title: "Hệ thống Camera giám sát CCTV & Mạng nội bộ",
    titleEn: "CCTV Surveillance System & Internal Network",
    desc: "Thiết kế và lắp đặt hệ thống camera IP, CCTV, mạng LAN/WAN, WiFi doanh nghiệp tích hợp AI.",
    descEn: "Design and installation of IP camera systems, CCTV, LAN/WAN networks with AI integration.",
    features: ["Camera IP & AI thông minh", "Hệ thống mạng LAN/WAN", "WiFi doanh nghiệp", "Lưu trữ & giám sát từ xa"],
    featuresEn: ["Smart IP & AI cameras", "LAN/WAN network systems", "Enterprise WiFi", "Remote storage & monitoring"],
  },
  {
    slug: "tu-van-thi-cong",
    image: "/images/services/dichvu6.jpg",
    title: "Tư vấn – Thiết kế – Thi công công trình",
    titleEn: "Consulting – Design – Construction",
    desc: "Tư vấn, thiết kế và thi công toàn bộ hạ tầng CNTT, hệ thống điện, mạng cho nhà máy và văn phòng.",
    descEn: "Consulting, design and construction of IT infrastructure, electrical systems for factories and offices.",
    features: ["Thiết kế hạ tầng CNTT tổng thể", "Thi công hệ thống điện & mạng", "Xây dựng phòng máy chủ", "Bàn giao & bảo trì sau thi công"],
    featuresEn: ["Complete IT infrastructure design", "Electrical & network construction", "Server room construction", "Handover & post-construction maintenance"],
  },
];

export default function ServicesPage() {
  const { lang } = useLang();
  const isVi = lang === "vi";

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>{isVi ? "Dịch Vụ" : "Services"}</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">{isVi ? "Trang chủ" : "Home"}</Link>
          <span>/</span>
          <strong>{isVi ? "Dịch vụ" : "Services"}</strong>
        </div>
      </div>

      {/* Intro */}
      <div className={styles.intro}>
        <p className={styles.introText}>
          {isVi
            ? "Chào mừng Quý khách đến với website của Công Ty GVN chúng tôi. Hiện tại, chúng tôi cung cấp 6 danh mục dịch vụ chính."
            : "Welcome to GVN's website. We currently offer 6 main service categories."}
        </p>
      </div>

      {/* Grid */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((svc) => (
            <Link key={svc.slug} href={`/services/${svc.slug}`} className={styles.card}>

              {/* ẢNH THỰC — object-cover fill toàn bộ */}
              <div className={styles.cardImg}>
                <Image
                  src={svc.image}
                  alt={isVi ? svc.title : svc.titleEn}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Label nền cam bên dưới */}
              <div className={styles.cardLabel}>
                {isVi ? svc.title : svc.titleEn}
              </div>

              {/* Hover overlay */}
              <div className={styles.cardDetail}>
                <p className={styles.detailDesc}>{isVi ? svc.desc : svc.descEn}</p>
                <ul className={styles.featureList}>
                  {(isVi ? svc.features : svc.featuresEn).map((f, i) => (
                    <li key={i}><span className={styles.checkIcon}>✓</span>{f}</li>
                  ))}
                </ul>
                <span className={styles.moreBtn}>
                  {isVi ? "Xem chi tiết →" : "Learn more →"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>{isVi ? "Bạn cần tư vấn dịch vụ?" : "Need service consultation?"}</h2>
        <p>
          {isVi
            ? "Đội ngũ chuyên gia GVN luôn sẵn sàng hỗ trợ và tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn."
            : "GVN's expert team is always ready to support and advise on the best solutions for your business."}
        </p>
        <div className={styles.ctaBtns}>
          <Link href="/contact" className={styles.ctaBtnPrimary}>
            {isVi ? "Liên hệ ngay" : "Contact Us"}
          </Link>
          <Link href="/projects" className={styles.ctaBtnOutline}>
            {isVi ? "Xem dự án tiêu biểu" : "View Featured Projects"}
          </Link>
        </div>
      </div>
    </div>
  );
}