"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "../components/LangContext";
import styles from "./page.module.css";

interface ArticleItem {
  id: number | string;
  slug: string;
  category: string;
  categoryEn: string;
  date: string;
  readTime: number;
  emoji: string;
  bg: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
}

const hardcodedArticles: ArticleItem[] = [
  {
    id: 1,
    slug: "chien-luoc-an-ninh-vat-ly",
    category: "Bảo mật",
    categoryEn: "Security",
    date: "2025-03-15",
    readTime: 5,
    emoji: "🔐",
    bg: "linear-gradient(135deg,#1a6fc4,#00b4d8)",
    title: "Chiến lược an ninh vật lý hiệu quả cho doanh nghiệp và cơ sở hạ tầng",
    titleEn: "Effective Physical Security Strategy for Enterprises and Infrastructure",
    excerpt: "Trong môi trường kinh doanh và xã hội hiện đại, an ninh vật lý đóng vai trò then chốt trong việc bảo vệ tài sản, con người và thông tin của doanh nghiệp...",
    excerptEn: "In today's modern business environment, physical security plays a key role in protecting assets, people and corporate information...",
  },
  {
    id: 2,
    slug: "dich-vu-helpdesk-it-outsourcing",
    category: "Dịch vụ IT",
    categoryEn: "IT Services",
    date: "2025-03-08",
    readTime: 4,
    emoji: "💻",
    bg: "linear-gradient(135deg,#43c99b,#00b4d8)",
    title: "Dịch vụ Helpdesk & IT Outsourcing – Cho thuê nhân sự IT Onsite",
    titleEn: "Helpdesk & IT Outsourcing – Onsite IT Staffing Services",
    excerpt: "Giải pháp thuê ngoài nhân sự IT onsite giúp doanh nghiệp tiết kiệm chi phí vận hành, đảm bảo hệ thống hoạt động liên tục 24/7...",
    excerptEn: "Onsite IT outsourcing solutions help businesses reduce operational costs while ensuring 24/7 continuous system uptime...",
  },
  {
    id: 3,
    slug: "dich-vu-bao-tri-nang-cap-cntt",
    category: "Bảo trì",
    categoryEn: "Maintenance",
    date: "2025-02-20",
    readTime: 6,
    emoji: "⚙️",
    bg: "linear-gradient(135deg,#f47c3c,#ff9a5c)",
    title: "Dịch vụ bảo trì và nâng cấp hệ thống CNTT cho doanh nghiệp",
    titleEn: "IT System Maintenance & Upgrade Services for Enterprises",
    excerpt: "Hệ thống CNTT là xương sống của mọi doanh nghiệp hiện đại. Bảo trì định kỳ và nâng cấp đúng thời điểm giúp tối ưu hiệu suất...",
    excerptEn: "IT systems are the backbone of every modern enterprise. Regular maintenance and timely upgrades help optimize performance...",
  },
  {
    id: 4,
    slug: "giai-phap-camera-giam-sat-cctv",
    category: "Camera & An ninh",
    categoryEn: "CCTV & Security",
    date: "2025-02-10",
    readTime: 5,
    emoji: "📷",
    bg: "linear-gradient(135deg,#7c5cbf,#a37de8)",
    title: "Giải pháp camera giám sát CCTV toàn diện cho nhà máy và văn phòng",
    titleEn: "Comprehensive CCTV Surveillance Solutions for Factories and Offices",
    excerpt: "Hệ thống camera CCTV hiện đại không chỉ ghi hình mà còn tích hợp AI phân tích hành vi, nhận diện khuôn mặt và cảnh báo thông minh...",
    excerptEn: "Modern CCTV systems not only record video but also integrate AI for behavior analysis, facial recognition and smart alerts...",
  },
  {
    id: 5,
    slug: "tu-van-thiet-ke-thi-cong-cong-trinh",
    category: "Thi công",
    categoryEn: "Construction",
    date: "2025-01-25",
    readTime: 7,
    emoji: "🏗️",
    bg: "linear-gradient(135deg,#1a2340,#3a5080)",
    title: "Tư vấn – Thiết kế – Thi công công trình CNTT từ A đến Z",
    titleEn: "IT Construction Consulting – Design – Implementation from A to Z",
    excerpt: "Từ tư vấn thiết kế đến thi công và bàn giao, GVN cung cấp giải pháp trọn gói cho hạ tầng CNTT của doanh nghiệp...",
    excerptEn: "From design consulting to implementation and handover, GVN provides complete turnkey solutions for enterprise IT infrastructure...",
  },
  {
    id: 6,
    slug: "thiet-bi-chuyen-dung-ngan-hang",
    category: "Ngân hàng",
    categoryEn: "Banking",
    date: "2025-01-12",
    readTime: 4,
    emoji: "🏦",
    bg: "linear-gradient(135deg,#0f4f9e,#1a6fc4)",
    title: "Thiết bị chuyên dụng dành cho ngân hàng và tổ chức tài chính",
    titleEn: "Specialized Equipment for Banks and Financial Institutions",
    excerpt: "GVN cung cấp đầy đủ thiết bị chuyên dụng cho ngân hàng như máy đếm tiền, máy kiểm tra tiền giả, hệ thống xếp hàng...",
    excerptEn: "GVN supplies complete specialized banking equipment including cash counters, counterfeit detectors, and queue management systems...",
  },
];

function formatDate(dateStr: string, lang: string) {
  const d = new Date(dateStr);
  if (lang === "vi") {
    return `${d.getDate()} tháng ${d.getMonth() + 1}, ${d.getFullYear()}`;
  }
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function NewsPage() {
  const { lang } = useLang();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [apiArticles, setApiArticles] = useState<ArticleItem[] | null>(null);

  const isVi = lang === "vi";

  useEffect(() => {
    import("../lib/apiClient").then(({ fetchArticles }) =>
      fetchArticles({ published: true, limit: 20 })
    ).then(data => {
      if (!data?.items) return;
      const items: ArticleItem[] = data.items.map((a, i) => ({
        id:          a._id || a.id || i,
        slug:        a.slug,
        category:    a.category,
        categoryEn:  a.categoryEn || a.category,
        date:        a.createdAt ? a.createdAt.slice(0, 10) : "",
        readTime:    a.readTime || 5,
        emoji:       a.emoji || "📰",
        bg:          a.bg || "linear-gradient(135deg,#1a6fc4,#00b4d8)",
        title:       a.title,
        titleEn:     a.titleEn || a.title,
        excerpt:     a.excerpt || "",
        excerptEn:   a.excerptEn || a.excerpt || "",
      }));
      setApiArticles(items);
    }).catch(() => { /* fallback sang hardcode */ });
  }, []);

  const articles = apiArticles ?? hardcodedArticles;

  const categories = [...new Set(articles.map(a => isVi ? a.category : a.categoryEn))];

  const filtered = articles.filter(a => {
    const title   = isVi ? a.title   : a.titleEn;
    const cat     = isVi ? a.category : a.categoryEn;
    const matchQ  = title.toLowerCase().includes(search.toLowerCase());
    const matchCat = !activeCategory || cat === activeCategory;
    return matchQ && matchCat;
  });

  const featured = filtered[0];
  const rest     = filtered.slice(1);

  return (
    <div className={styles.page}>
      {/* ── Page header ── */}
      <div className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <Link href="/">{isVi ? "Trang chủ" : "Home"}</Link>
          <span>/</span>
          <span>{isVi ? "Tin tức" : "News"}</span>
        </div>
        <h1 className={styles.pageTitle}>{isVi ? "Tin tức & Công nghệ" : "News & Technology"}</h1>
        <p className={styles.pageDesc}>
          {isVi
            ? "Cập nhật những thông tin mới nhất về công nghệ, dịch vụ và giải pháp CNTT từ GVN"
            : "Stay updated with the latest technology, services and IT solutions from GVN"}
        </p>
      </div>

      <div className={styles.layout}>
        {/* ── Main content ── */}
        <main className={styles.main}>

          {/* Featured article */}
          {featured && (
            <Link href={`/news/${featured.slug}`} className={styles.featured}>
              <div className={styles.featuredImg} style={{ background: featured.bg }}>
                <span className={styles.featuredEmoji}>{featured.emoji}</span>
                <span className={styles.featuredBadge}>
                  {isVi ? featured.category : featured.categoryEn}
                </span>
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.meta}>
                  <span className={styles.metaDate}>
                    📅 {formatDate(featured.date, lang)}
                  </span>
                  <span className={styles.metaRead}>
                    ⏱ {featured.readTime} {isVi ? "phút đọc" : "min read"}
                  </span>
                </div>
                <h2 className={styles.featuredTitle}>
                  {isVi ? featured.title : featured.titleEn}
                </h2>
                <p className={styles.featuredExcerpt}>
                  {isVi ? featured.excerpt : featured.excerptEn}
                </p>
                <span className={styles.readMore}>
                  {isVi ? "Đọc thêm →" : "Read more →"}
                </span>
              </div>
            </Link>
          )}

          {/* Article grid */}
          <div className={styles.grid}>
            {rest.map(article => (
              <Link key={article.id} href={`/news/${article.slug}`} className={styles.card}>
                <div className={styles.cardImg} style={{ background: article.bg }}>
                  <span className={styles.cardEmoji}>{article.emoji}</span>
                  <span className={styles.cardBadge}>
                    {isVi ? article.category : article.categoryEn}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>📅 {formatDate(article.date, lang)}</span>
                    <span>⏱ {article.readTime} {isVi ? "phút" : "min"}</span>
                  </div>
                  <h3 className={styles.cardTitle}>
                    {isVi ? article.title : article.titleEn}
                  </h3>
                  <p className={styles.cardExcerpt}>
                    {isVi ? article.excerpt : article.excerptEn}
                  </p>
                  <span className={styles.cardLink}>
                    {isVi ? "Xem thêm →" : "Read more →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.empty}>
              <span>🔍</span>
              <p>{isVi ? "Không tìm thấy bài viết nào." : "No articles found."}</p>
            </div>
          )}
        </main>

        {/* ── Sidebar ── */}
        <aside className={styles.sidebar}>
          {/* Search */}
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>{isVi ? "TÌM KIẾM" : "SEARCH"}</h3>
            <div className={styles.searchBox}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder={isVi ? "Tìm kiếm..." : "Search articles..."}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className={styles.searchBtn}>🔍</button>
            </div>
          </div>

          {/* Categories */}
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>{isVi ? "DANH MỤC" : "CATEGORIES"}</h3>
            <div className={styles.catList}>
              <button
                className={`${styles.catItem} ${!activeCategory ? styles.catActive : ""}`}
                onClick={() => setActiveCategory(null)}
              >
                <span>{isVi ? "Tất cả" : "All"}</span>
                <span className={styles.catCount}>{articles.length}</span>
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.catItem} ${activeCategory === cat ? styles.catActive : ""}`}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                >
                  <span>{cat}</span>
                  <span className={styles.catCount}>
                    {articles.filter(a => (isVi ? a.category : a.categoryEn) === cat).length}
                  </span>
                </button>
              ))}

            </div>
          </div>

          {/* Recent posts */}
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>{isVi ? "BÀI VIẾT MỚI" : "RECENT POSTS"}</h3>
            <div className={styles.recentList}>
              {articles.slice(0, 4).map(post => (
                <Link key={post.id} href={`/news/${post.slug}`} className={styles.recentItem}>
                  <div className={styles.recentIcon} style={{ background: post.bg }}>
                    {post.emoji}
                  </div>
                  <div className={styles.recentText}>
                    <p className={styles.recentTitle}>
                      {isVi ? post.title : post.titleEn}
                    </p>
                    <span className={styles.recentDate}>
                      {formatDate(post.date, lang)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA widget */}
          <div className={styles.ctaWidget}>
            <span className={styles.ctaIcon}>💬</span>
            <h4>{isVi ? "Cần tư vấn?" : "Need advice?"}</h4>
            <p>{isVi ? "Liên hệ chuyên gia GVN ngay hôm nay!" : "Contact GVN experts today!"}</p>
            <Link href="/contact" className={styles.ctaWidgetBtn}>
              {isVi ? "Liên hệ ngay" : "Contact Us"}
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
