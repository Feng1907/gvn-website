"use client";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useLang } from "@/components/LangContext";
import styles from "./page.module.css";

const projects = [
  {
    slug: "shinhan-bank",
    image: "/images/projects/shinhan-bank.jpg",
    title: "Thi công chuyển địa điểm chi nhánh và xây dựng hệ thống điện, mạng – Chi nhánh ngân hàng Shinhan",
    titleEn: "Branch relocation & electrical/network system for Shinhan Bank",
    category: "Ngân hàng", categoryEn: "Banking",
    client: "Ngân hàng Shinhan Việt Nam", clientEn: "Shinhan Bank Vietnam",
    year: "2024",
    desc: "Thi công toàn bộ hệ thống điện, mạng nội bộ, hệ thống camera CCTV và tủ rack cho chi nhánh mới của ngân hàng Shinhan. Dự án đòi hỏi tiêu chuẩn kỹ thuật cao và thực hiện trong thời gian ngắn để đảm bảo chi nhánh hoạt động đúng tiến độ.",
    descEn: "Complete construction of electrical systems, internal network, CCTV cameras and rack cabinets for a new Shinhan Bank branch. The project required high technical standards and was executed in a short timeframe to ensure the branch opened on schedule.",
    scope: ["Hệ thống điện nhẹ (ELV)", "Mạng LAN cấu trúc", "Camera CCTV IP", "UPS & Nguồn điện dự phòng", "Tủ rack & patch panel"],
    scopeEn: ["Low-voltage electrical (ELV)", "Structured LAN network", "IP CCTV cameras", "UPS & backup power", "Rack cabinet & patch panel"],
    relatedSlugs: ["chemtronics", "datacenter"],
  },
  {
    slug: "comet-vina",
    image: "/images/projects/comet-vina.jpg",
    title: "Thi công hệ thống điện và mạng cho nhà máy Comet Vina",
    titleEn: "Electrical & network system for Comet Vina factory",
    category: "Nhà máy", categoryEn: "Factory",
    client: "Comet Vina Co., Ltd", clientEn: "Comet Vina Co., Ltd",
    year: "2023",
    desc: "Triển khai hạ tầng điện và mạng toàn diện cho nhà máy sản xuất Comet Vina, bao gồm hệ thống điện công nghiệp, mạng LAN/WAN và hệ thống giám sát toàn nhà máy.",
    descEn: "Comprehensive deployment of electrical and network infrastructure for Comet Vina manufacturing plant, including industrial electrical systems, LAN/WAN network and factory-wide monitoring.",
    scope: ["Điện công nghiệp 3 pha", "Mạng LAN/WAN nhà máy", "WiFi doanh nghiệp", "Hệ thống camera giám sát"],
    scopeEn: ["3-phase industrial power", "Factory LAN/WAN network", "Enterprise WiFi", "Surveillance camera system"],
    relatedSlugs: ["chemtronics", "hyosung"],
  },
  {
    slug: "chemtronics",
    image: "/images/projects/chemtronics.jpg",
    title: "Thi công hệ thống mạng, camera giám sát, loa cho nhà máy và văn phòng Chemtronics",
    titleEn: "Network, CCTV & speaker system for Chemtronics factory & office",
    category: "Nhà máy", categoryEn: "Factory",
    client: "Chemtronics Co., Ltd", clientEn: "Chemtronics Co., Ltd",
    year: "2023",
    desc: "Thiết kế và thi công đồng bộ hệ thống mạng cấu trúc, camera IP CCTV và hệ thống âm thanh công cộng (PA) cho toàn bộ khuôn viên nhà máy và khối văn phòng của Chemtronics.",
    descEn: "Integrated design and construction of structured network, IP CCTV cameras and public address (PA) system for the entire Chemtronics factory and office complex.",
    scope: ["Mạng cấu trúc (Cat6)", "Camera IP Hikvision", "Hệ thống PA & loa", "WiFi nhà máy"],
    scopeEn: ["Structured cabling (Cat6)", "Hikvision IP cameras", "PA & speaker system", "Factory WiFi"],
    relatedSlugs: ["comet-vina", "cjfoods"],
  },
  {
    slug: "busan",
    image: "/images/projects/busan.jpg",
    title: "Thi công hệ thống mạng, camera giám sát (CCTV), loa cho văn phòng chi nhánh Busan",
    titleEn: "Network, CCTV & speaker system for Busan branch office",
    category: "Văn phòng", categoryEn: "Office",
    client: "Busan Branch Office", clientEn: "Busan Branch Office",
    year: "2024",
    desc: "Triển khai hạ tầng CNTT hoàn chỉnh cho văn phòng chi nhánh Busan bao gồm mạng nội bộ tốc độ cao, camera giám sát và hệ thống thông báo nội bộ.",
    descEn: "Complete IT infrastructure deployment for Busan branch office including high-speed internal network, surveillance cameras and internal announcement system.",
    scope: ["Mạng LAN nội bộ", "Camera CCTV IP", "Hệ thống loa thông báo", "Wifi văn phòng"],
    scopeEn: ["Internal LAN network", "IP CCTV cameras", "Announcement speaker system", "Office WiFi"],
    relatedSlugs: ["shinhan-bank", "chemtronics"],
  },
  {
    slug: "hyosung",
    image: "/images/projects/hyosung.jpg",
    title: "Thi công hệ thống điện, mạng cho Hyosung",
    titleEn: "Electrical & network system for Hyosung",
    category: "Nhà máy", categoryEn: "Factory",
    client: "Hyosung Vietnam", clientEn: "Hyosung Vietnam",
    year: "2022",
    desc: "Cung cấp và thi công hệ thống điện, mạng LAN quy mô lớn cho tổ hợp nhà máy Hyosung, đáp ứng tiêu chuẩn kỹ thuật quốc tế cho doanh nghiệp FDI Hàn Quốc.",
    descEn: "Supply and installation of large-scale electrical and LAN network systems for the Hyosung factory complex, meeting international technical standards for Korean FDI enterprises.",
    scope: ["Tủ điện công nghiệp", "Cáp mạng Cat6A", "Hệ thống UPS", "Phòng server"],
    scopeEn: ["Industrial electrical cabinets", "Cat6A network cabling", "UPS system", "Server room"],
    relatedSlugs: ["comet-vina", "datacenter"],
  },
  {
    slug: "cjfoods",
    image: "/images/projects/cjfoods.jpg",
    title: "Thi công hệ thống mạng và camera giám sát cho CJ Foods",
    titleEn: "Network & CCTV system for CJ Foods",
    category: "Nhà máy", categoryEn: "Factory",
    client: "CJ Foods Vietnam", clientEn: "CJ Foods Vietnam",
    year: "2023",
    desc: "Lắp đặt hệ thống mạng cấu trúc và camera giám sát CCTV cho nhà máy thực phẩm CJ Foods, đảm bảo tiêu chuẩn vệ sinh thực phẩm và an ninh nhà máy.",
    descEn: "Installation of structured network and CCTV surveillance system for CJ Foods factory, ensuring food hygiene standards and factory security.",
    scope: ["Mạng cấu trúc chống nước", "Camera IP chống bụi/ẩm", "NVR lưu trữ 30 ngày", "Giám sát từ xa"],
    scopeEn: ["Waterproof structured cabling", "Dustproof/moisture-proof IP cameras", "30-day NVR storage", "Remote monitoring"],
    relatedSlugs: ["chemtronics", "hyosung"],
  },
  {
    slug: "datacenter",
    image: "/images/projects/datacenter.jpg",
    title: "Lắp đặt tủ rack và hệ thống server room",
    titleEn: "Rack cabinet & server room installation",
    category: "Hạ tầng IT", categoryEn: "IT Infrastructure",
    client: "Khách hàng doanh nghiệp", clientEn: "Enterprise Client",
    year: "2024",
    desc: "Thiết kế và thi công phòng máy chủ (server room) đạt chuẩn Tier II, bao gồm tủ rack, hệ thống làm mát, nguồn điện UPS, cáp quang và patch panel có cấu trúc.",
    descEn: "Design and construction of a Tier II standard server room, including rack cabinets, cooling systems, UPS power, fiber optic and structured patch panels.",
    scope: ["Tủ rack 42U tiêu chuẩn", "Điều hòa precision cooling", "UPS & ATS", "Cáp quang & patch panel", "Hệ thống tiếp đất"],
    scopeEn: ["42U standard rack cabinets", "Precision cooling air conditioning", "UPS & ATS", "Fiber & patch panels", "Grounding system"],
    relatedSlugs: ["shinhan-bank", "hyosung"],
  },
  {
    slug: "construction",
    image: "/images/projects/construction.jpg",
    title: "Thi công hệ thống điện nhẹ cho công trình dân dụng",
    titleEn: "Low-voltage electrical system for civil construction",
    category: "Dân dụng", categoryEn: "Civil",
    client: "Chủ đầu tư dân dụng", clientEn: "Civil Developer",
    year: "2023",
    desc: "Cung cấp dịch vụ thi công hệ thống điện nhẹ hoàn chỉnh cho công trình dân dụng bao gồm hệ thống điện, mạng, điện thoại, camera và hệ thống báo cháy.",
    descEn: "Complete low-voltage electrical system construction service for civil projects including electrical, network, telephone, camera and fire alarm systems.",
    scope: ["Điện chiếu sáng & ổ cắm", "Mạng & điện thoại", "Camera ngoài trời", "Hệ thống báo cháy", "Điều khiển thông minh"],
    scopeEn: ["Lighting & power outlets", "Network & telephone", "Outdoor cameras", "Fire alarm system", "Smart controls"],
    relatedSlugs: ["busan", "cjfoods"],
  },
];

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { lang } = useLang();
  const isVi = lang === "vi";

  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => project.relatedSlugs.includes(p.slug));

  return (
    <div className={styles.page}>

      {/* ── HERO IMAGE ── */}
      <div className={styles.hero}>
        <Image
          src={project.image}
          alt={isVi ? project.title : project.titleEn}
          fill
          className={styles.heroImg}
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBreadcrumb}>
            <Link href="/">{isVi ? "Trang chủ" : "Home"}</Link>
            <span>/</span>
            <Link href="/projects">{isVi ? "Dự án" : "Projects"}</Link>
            <span>/</span>
            <strong>{isVi ? project.category : project.categoryEn}</strong>
          </div>
          <span className={styles.categoryBadge}>{isVi ? project.category : project.categoryEn}</span>
          <h1 className={styles.heroTitle}>{isVi ? project.title : project.titleEn}</h1>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className={styles.body}>
        <div className={styles.container}>

          {/* MAIN */}
          <div className={styles.main}>
            <h2 className={styles.sectionTitle}>{isVi ? "Mô tả dự án" : "Project Description"}</h2>
            <p className={styles.desc}>{isVi ? project.desc : project.descEn}</p>

            <h3 className={styles.scopeTitle}>{isVi ? "Phạm vi công việc" : "Scope of Work"}</h3>
            <ul className={styles.scopeList}>
              {(isVi ? project.scope : project.scopeEn).map((item, i) => (
                <li key={i} className={styles.scopeItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>{isVi ? "Thông tin dự án" : "Project Info"}</h3>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>{isVi ? "Khách hàng" : "Client"}</span>
                <span className={styles.infoValue}>{isVi ? project.client : project.clientEn}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>{isVi ? "Danh mục" : "Category"}</span>
                <span className={styles.infoValue}>{isVi ? project.category : project.categoryEn}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>{isVi ? "Năm thực hiện" : "Year"}</span>
                <span className={styles.infoValue}>{project.year}</span>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h3 className={styles.ctaTitle}>{isVi ? "Cần dự án tương tự?" : "Need a similar project?"}</h3>
              <p className={styles.ctaDesc}>
                {isVi
                  ? "Liên hệ GVN để được tư vấn và báo giá miễn phí."
                  : "Contact GVN for free consultation and quotation."}
              </p>
              <Link href="/contact" className={styles.ctaBtn}>
                {isVi ? "Liên hệ ngay" : "Contact Us"}
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED PROJECTS ── */}
      {related.length > 0 && (
        <div className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedTitle}>{isVi ? "Dự án liên quan" : "Related Projects"}</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/projects/${r.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImgWrapper}>
                    <Image
                      src={r.image}
                      alt={isVi ? r.title : r.titleEn}
                      fill
                      className={styles.relatedImg}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className={styles.relatedOverlay} />
                    <span className={styles.relatedCat}>{isVi ? r.category : r.categoryEn}</span>
                  </div>
                  <div className={styles.relatedInfo}>
                    <h4>{isVi ? r.title : r.titleEn}</h4>
                    <span className={styles.relatedMore}>{isVi ? "Xem chi tiết →" : "View details →"}</span>
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
