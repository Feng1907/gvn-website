"use client";
import { useState } from "react";
import Link from "next/link";
import { useLang } from "../components/LangContext";
import styles from "./page.module.css";

/* ── Category tree (mirrors hình 1) ── */
const categoryTree = [
  {
    label: "Giải pháp - Phần mềm cho doanh nghiệp",
    labelEn: "Software Solutions for Business",
    slug: "giai-phap-phan-mem",
    children: [
      { label: "Phần mềm", labelEn: "Software", slug: "phan-mem" },
    ],
  },
  {
    label: "Sản phẩm",
    labelEn: "Products",
    slug: "san-pham-chung",
    children: [],
  },
  {
    label: "Sản phẩm CNTT - Công Trình",
    labelEn: "IT & Construction Products",
    slug: "cntt-cong-trinh",
    children: [
      { label: "Các loại cáp tín hiệu",    labelEn: "Signal Cables",        slug: "cap-tin-hieu" },
      { label: "Linh kiện máy tính",        labelEn: "Computer Components",  slug: "linh-kien-may-tinh" },
      { label: "Màn hình máy tính",         labelEn: "Monitors",             slug: "man-hinh" },
      { label: "Máy tính xách tay",         labelEn: "Laptops",              slug: "laptop" },
      { label: "Ổ cứng HDD, SSD",          labelEn: "HDD, SSD Drives",      slug: "o-cung" },
      { label: "PC-Máy tính để bàn",       labelEn: "Desktop PCs",          slug: "pc-de-ban" },
      { label: "Sản phẩm công trình",       labelEn: "Construction Products",slug: "san-pham-cong-trinh" },
      { label: "Thiết bị âm thanh, ghi hình", labelEn: "Audio & Recording", slug: "am-thanh-ghi-hinh" },
      { label: "Thiết bị văn phòng",        labelEn: "Office Equipment",     slug: "van-phong" },
    ],
  },
  {
    label: "Thiết Bị Chuyên Dụng Cho Ngân Hàng",
    labelEn: "Specialized Banking Equipment",
    slug: "ngan-hang",
    children: [
      { label: "Máy in số",   labelEn: "Queue Number Printers", slug: "may-in-so" },
      { label: "Pinpad",      labelEn: "Pinpad",                slug: "pinpad" },
      { label: "Máy đếm tiền", labelEn: "Cash Counters",       slug: "may-dem-tien" },
      { label: "Máy in hoá đơn", labelEn: "Receipt Printers",  slug: "may-in-hoa-don" },
      { label: "Thiết bị xếp hàng", labelEn: "Queue Systems",  slug: "xep-hang" },
    ],
  },
];

/* ── Products data ── */
/* img: dùng ảnh thật từ /public/images/products/. Nếu chưa có thì hiện placeholder */
const allProducts = [
  { id:1,  cat:"linh-kien-may-tinh", catLabel:"LINH KIỆN MÁY TÍNH", catLabelEn:"COMPUTER COMPONENTS", name:"Bàn phím A4TECH USB KK-3",                              nameEn:"A4TECH USB Keyboard KK-3",                         img:"/images/products/ban-phim-a4tech-kk3.jpg",     bg:"#f8faff" },
  { id:2,  cat:"linh-kien-may-tinh", catLabel:"LINH KIỆN MÁY TÍNH", catLabelEn:"COMPUTER COMPONENTS", name:"Bàn Phím Logitech K120",                                  nameEn:"Logitech K120 Keyboard",                           img:"/images/products/ban-phim-logitech-k120.jpg",  bg:"#f8faff" },
  { id:3,  cat:"linh-kien-may-tinh", catLabel:"LINH KIỆN MÁY TÍNH", catLabelEn:"COMPUTER COMPONENTS", name:"Bảng mạch chính Asus B760M-AYW WIFI DDR4",                nameEn:"Asus B760M-AYW WIFI DDR4 Motherboard",             img:"/images/products/mainboard-asus-b760m.jpg",    bg:"#f0f4ff" },
  { id:4,  cat:"linh-kien-may-tinh", catLabel:"LINH KIỆN MÁY TÍNH", catLabelEn:"COMPUTER COMPONENTS", name:"Bảng mạch chính Gigabyte A520M-K V2",                     nameEn:"Gigabyte A520M-K V2 Motherboard",                  img:"/images/products/mainboard-gigabyte-a520m.jpg",bg:"#f0f4ff" },
  { id:5,  cat:"linh-kien-may-tinh", catLabel:"LINH KIỆN MÁY TÍNH", catLabelEn:"COMPUTER COMPONENTS", name:"Bảng mạch chính Gigabyte B760M DS3H AX DDR4 (Wifi+BT)",  nameEn:"Gigabyte B760M DS3H AX DDR4 (Wifi+BT)",           img:"/images/products/mainboard-gigabyte-b760m.jpg",bg:"#f0f4ff" },
  { id:6,  cat:"linh-kien-may-tinh", catLabel:"LINH KIỆN MÁY TÍNH", catLabelEn:"COMPUTER COMPONENTS", name:"Bảng mạch chính Gigabyte Z790 D DDR4",                    nameEn:"Gigabyte Z790 D DDR4 Motherboard",                 img:"/images/products/mainboard-gigabyte-z790.jpg", bg:"#f0f4ff" },
  { id:7,  cat:"linh-kien-may-tinh", catLabel:"LINH KIỆN MÁY TÍNH", catLabelEn:"COMPUTER COMPONENTS", name:"Bộ 3 quạt máy tính Corsair RS120 ARGB",                   nameEn:"Corsair RS120 ARGB 3-Fan Kit",                     img:"/images/products/fan-corsair-rs120.jpg",       bg:"#fff0f8" },
  { id:8,  cat:"linh-kien-may-tinh", catLabel:"LINH KIỆN MÁY TÍNH", catLabelEn:"COMPUTER COMPONENTS", name:"Bộ bàn phím chuột không dây Logitech MK295",               nameEn:"Logitech MK295 Wireless Keyboard & Mouse",         img:"/images/products/combo-logitech-mk295.jpg",    bg:"#f8faff" },
  { id:9,  cat:"o-cung",             catLabel:"Ổ CỨNG HDD, SSD",    catLabelEn:"HDD, SSD DRIVES",      name:"Ổ cứng SSD Synology SAT5221-960G 960GB Enterprise",        nameEn:"Synology SAT5221-960G 960GB Enterprise SSD",       img:"/images/products/ssd-synology-sat5221.jpg",    bg:"#f0f8ff" },
  { id:10, cat:"o-cung",             catLabel:"Ổ CỨNG HDD, SSD",    catLabelEn:"HDD, SSD DRIVES",      name:"Ổ cứng HDD Synology Plus Series 3.5\" 16TB HAT3310-16T", nameEn:"Synology Plus Series 3.5\" 16TB HDD HAT3310-16T", img:"/images/products/hdd-synology-16tb.jpg",       bg:"#f0f8ff" },
  { id:11, cat:"san-pham-cong-trinh",catLabel:"SẢN PHẨM CÔNG TRÌNH",catLabelEn:"CONSTRUCTION PRODUCTS",name:"Bộ lưu điện APC UPS 10KVA SRT10000XLI",                  nameEn:"APC UPS 10KVA SRT10000XLI",                       img:"/images/products/ups-apc-10kva.jpg",           bg:"#f0fff4" },
  { id:12, cat:"san-pham-cong-trinh",catLabel:"SẢN PHẨM CÔNG TRÌNH",catLabelEn:"CONSTRUCTION PRODUCTS",name:"Bộ lưu điện APC UPS 20KVA SRTG20KXLI",                   nameEn:"APC UPS 20KVA SRTG20KXLI",                        img:"/images/products/ups-apc-20kva.jpg",           bg:"#f0fff4" },
  { id:13, cat:"san-pham-cong-trinh",catLabel:"SẢN PHẨM CÔNG TRÌNH",catLabelEn:"CONSTRUCTION PRODUCTS",name:"Bộ lưu điện UPS 30KVA APC GVSUPS30KB4HS",                nameEn:"APC 30KVA UPS GVSUPS30KB4HS",                     img:"/images/products/ups-apc-30kva.jpg",           bg:"#f0fff4" },
  { id:14, cat:"ngan-hang",          catLabel:"THIẾT BỊ NGÂN HÀNG", catLabelEn:"BANKING EQUIPMENT",    name:"Máy đếm tiền RIBAO BC-2000V",                             nameEn:"RIBAO BC-2000V Cash Counter",                     img:"/images/products/may-dem-tien-ribao.jpg",      bg:"#fffbf0" },
  { id:15, cat:"ngan-hang",          catLabel:"THIẾT BỊ NGÂN HÀNG", catLabelEn:"BANKING EQUIPMENT",    name:"Máy in hóa đơn nhiệt Epson TM-T82III",                    nameEn:"Epson TM-T82III Thermal Receipt Printer",          img:"/images/products/may-in-epson-tmt82.jpg",      bg:"#fffbf0" },
];

const PER_PAGE = 12;

const sortOptions = [
  { value: "default",   label: "Default sorting",  labelEn: "Default sorting" },
  { value: "name_asc",  label: "Tên: A → Z",       labelEn: "Name: A → Z"    },
  { value: "name_desc", label: "Tên: Z → A",       labelEn: "Name: Z → A"    },
];

/* Placeholder khi không có ảnh thật */
function ProductImage({ src, name, bg }: { src: string; name: string; bg: string }) {
  return (
    <div className={styles.cardImgWrap} style={{ background: bg }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="w-full h-full object-contain"
        onError={(e) => {
          // Nếu ảnh không tồn tại, ẩn và hiện placeholder emoji
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const placeholder = target.nextElementSibling as HTMLElement;
          if (placeholder) placeholder.style.display = "flex";
        }}
      />
      <div className={styles.cardImgPlaceholder} style={{ display: "none" }}>
        🖥️
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const { lang } = useLang();
  const isVi = lang === "vi";

  const [expanded,       setExpanded]       = useState<Record<string, boolean>>({ "cntt-cong-trinh": true, "ngan-hang": true });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page,           setPage]           = useState(1);
  const [sort,           setSort]           = useState("default");

  /* Filter */
  let filtered = activeCategory
    ? allProducts.filter(p => {
        const cat = categoryTree.find(c => c.slug === activeCategory);
        if (!cat) return false;
        // Match parent slug hoặc child slug
        const childSlugs = cat.children.map(c => c.slug);
        return p.cat === activeCategory || childSlugs.includes(p.cat);
      })
    : allProducts;

  /* Sort */
  if (sort === "name_asc")  filtered = [...filtered].sort((a, b) => (isVi ? a.name : a.nameEn).localeCompare(isVi ? b.name : b.nameEn));
  if (sort === "name_desc") filtered = [...filtered].sort((a, b) => (isVi ? b.name : b.nameEn).localeCompare(isVi ? a.name : a.nameEn));

  const total      = filtered.length;
  const totalPages = Math.ceil(total / PER_PAGE);
  const start      = (page - 1) * PER_PAGE;
  const visible    = filtered.slice(start, start + PER_PAGE);

  const goPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Pagination numbers */
  const pageNums: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pageNums.push(i);
  } else {
    if (page <= 4) {
      pageNums.push(1,2,3,4,"...",totalPages-1,totalPages);
    } else if (page >= totalPages - 3) {
      pageNums.push(1,2,"...",totalPages-3,totalPages-2,totalPages-1,totalPages);
    } else {
      pageNums.push(1,"...",page-1,page,page+1,"...",totalPages);
    }
  }

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/" className={styles.breadLink}>{isVi ? "Home" : "Home"}</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.breadCurrent}>{isVi ? "Sản phẩm" : "Products"}</span>
      </div>

      <div className={styles.layout}>
        {/* ── Sidebar ── */}
        <aside className={styles.sidebar}>
          <h3 className={styles.sideTitle}>{isVi ? "DANH MỤC SẢN PHẨM" : "PRODUCT CATEGORIES"}</h3>
          <div className={styles.sideDivider} />

          {categoryTree.map(cat => (
            <div key={cat.slug}>
              <div
                className={`${styles.catRow} ${activeCategory === cat.slug ? styles.catActive : ""}`}
                onClick={() => { setActiveCategory(activeCategory === cat.slug ? null : cat.slug); setPage(1); }}
              >
                <span className={styles.catLabel}>{isVi ? cat.label : cat.labelEn}</span>
                {cat.children.length > 0 && (
                  <button
                    className={styles.expandBtn}
                    onClick={e => { e.stopPropagation(); setExpanded(prev => ({ ...prev, [cat.slug]: !prev[cat.slug] })); }}
                  >
                    {expanded[cat.slug] ? "−" : "+"}
                  </button>
                )}
              </div>

              {cat.children.length > 0 && expanded[cat.slug] && (
                <div className={styles.childList}>
                  {cat.children.map(child => (
                    <div
                      key={child.slug}
                      className={`${styles.childItem} ${activeCategory === child.slug ? styles.childActive : ""}`}
                      onClick={() => { setActiveCategory(activeCategory === child.slug ? null : child.slug); setPage(1); }}
                    >
                      {isVi ? child.label : child.labelEn}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* ── Main ── */}
        <main className={styles.main}>
          {/* Top bar */}
          <div className={styles.topBar}>
            <span className={styles.showing}>
              {isVi
                ? `Hiển thị ${start + 1}–${Math.min(start + PER_PAGE, total)} trong ${total} kết quả`
                : `Showing ${start + 1}–${Math.min(start + PER_PAGE, total)} of ${total} results`}
            </span>
            <select
              className={styles.sortSelect}
              value={sort}
              onChange={e => { setSort(e.target.value); setPage(1); }}
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>
                  {isVi ? o.label : o.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {visible.map(p => (
              <Link href={`/products/${p.id}`} key={p.id} className={styles.card}>
                <ProductImage src={p.img} name={isVi ? p.name : p.nameEn} bg={p.bg} />
                <div className={styles.cardBody}>
                  <span className={styles.cardCat}>{isVi ? p.catLabel : p.catLabelEn}</span>
                  <p className={styles.cardName}>{isVi ? p.name : p.nameEn}</p>
                </div>
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <div className={styles.empty}>
              <span>📦</span>
              <p>{isVi ? "Không tìm thấy sản phẩm nào." : "No products found."}</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button className={styles.pgBtn} onClick={() => goPage(page - 1)} disabled={page === 1}>‹</button>
              {pageNums.map((n, i) =>
                n === "..." ? (
                  <span key={`e${i}`} className={styles.pgEllipsis}>…</span>
                ) : (
                  <button
                    key={n}
                    className={`${styles.pgBtn} ${page === n ? styles.pgActive : ""}`}
                    onClick={() => goPage(n as number)}
                  >{n}</button>
                )
              )}
              <button className={styles.pgBtn} onClick={() => goPage(page + 1)} disabled={page === totalPages}>›</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}