"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/components/LangContext";
import styles from "./page.module.css";

const allProducts = [
  // ── LINH KIỆN MÁY TÍNH ──
  {
    id: 1, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "Bàn phím A4TECH USB KK-3",
    image: "https://product.hstatic.net/1000026716/product/ban-phim-a4tech-kk-3_f6e8e8c0814a4c1e9be4e8e8c0814a4c.jpg",
  },
  {
    id: 2, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "Bàn Phím Logitech K120",
    image: "https://resource.logitech.com/w_386,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k120/gallery/k120-keyboard-top-view.png",
  },
  {
    id: 3, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "Bảng mạch chính Asus B760M-AYW WIFI DDR4",
    image: "https://dlcdnwebimgs.asus.com/gain/B7B9B6B5-B7B9-B6B5-B7B9-B6B5B7B9B6B5/w185/h185",
  },
  {
    id: 4, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "Bảng mạch chính Gigabyte A520M-K V2",
    image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3033/images/mb-a520m-k.png",
  },
  {
    id: 5, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "Bảng mạch chính Gigabyte B760M DS3H AX DDR4 (Wifi+BT)",
    image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3283/images/b760m-ds3h-ax-ddr4.png",
  },
  {
    id: 6, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "Bảng mạch chính Gigabyte Z790 D DDR4",
    image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3198/images/z790-d-ddr4.png",
  },
  {
    id: 7, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "Bộ 3 quạt máy tính Corsair RS120 ARGB Black CO-9050181-WW",
    image: "https://www.corsair.com/medias/sys_master/images/images/h3a/hf5/9533965713438/CO-9050181-WW-Gallery-RS120-ARGB-3-Pack-01.png",
  },
  {
    id: 8, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "Bộ bàn phím chuột không dây Logitech MK220 wireless",
    image: "https://resource.logitech.com/w_386,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/combos/mk220/gallery/mk220-combo-top-view.png",
  },
  {
    id: 9, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "CPU Intel Core i7-13700K Raptor Lake",
    image: "https://www.intel.com/content/dam/products/sku/230494/intel-core-i7-13700k-processor/intel-core-i7-13700k-processor-boxshot.png",
  },
  {
    id: 10, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "RAM Kingston 8GB DDR4 3200MHz",
    image: "https://www.kingston.com/dataSheets/KVR32N22S6_8_en.pdf",
  },
  {
    id: 11, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "SSD Samsung 870 EVO 1TB 2.5 inch SATA III",
    image: "https://images.samsung.com/is/image/samsung/p6pim/uk/mz-77e1t0b-eu/gallery/uk-870-evo-sata-iii-2-5-1tb-mz-77e1t0b-eu-frontblack-thumb-534873041",
  },
  {
    id: 12, cat: "LINH KIỆN MÁY TÍNH", catSlug: "cntt-cong-trinh",
    name: "Ổ cứng SSD Synology SAT5221-960G 960GB Enterprise",
    image: "https://www.synology.com/img/products/detail/SAT5221/heading.png",
  },
  // ── SẢN PHẨM CÔNG TRÌNH ──
  {
    id: 13, cat: "SẢN PHẨM CÔNG TRÌNH", catSlug: "cntt-cong-trinh",
    name: "Bộ điều khiển thuộc hệ máy lấy số DAVISOFT",
    image: "https://davisoft.vn/wp-content/uploads/2020/07/qms-pro.jpg",
  },
  {
    id: 14, cat: "SẢN PHẨM CÔNG TRÌNH", catSlug: "cntt-cong-trinh",
    name: "Bộ lưu điện APC UPS 10KVA SRT10000XLI",
    image: "https://www.apc.com/shop/us/en/media/images/SRT10000XLI-front.png",
  },
  {
    id: 15, cat: "SẢN PHẨM CÔNG TRÌNH", catSlug: "cntt-cong-trinh",
    name: "Bộ lưu điện APC UPS 20KVA SRTG20KXLI",
    image: "https://www.apc.com/shop/us/en/media/images/SRTG20KXLI-front.png",
  },
  {
    id: 16, cat: "SẢN PHẨM CÔNG TRÌNH", catSlug: "cntt-cong-trinh",
    name: "Ổ cứng HDD Synology Plus Series 3.5 inch",
    image: "https://www.synology.com/img/products/detail/HAT3310_16T/heading.png",
  },
  {
    id: 17, cat: "SẢN PHẨM CÔNG TRÌNH", catSlug: "cntt-cong-trinh",
    name: "Camera IP Hikvision DS-2CD2143G2-I 4MP",
    image: "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/latest-image/2020/fixed-dome/DS-2CD2143G2-I_1500500.jpg",
  },
  {
    id: 18, cat: "SẢN PHẨM CÔNG TRÌNH", catSlug: "cntt-cong-trinh",
    name: "Switch PoE 24 cổng Cisco SG350-28P",
    image: "https://www.cisco.com/c/dam/en/us/products/collateral/switches/small-business-smart-switches/product-image-sg350-28p.png",
  },
  // ── THIẾT BỊ NGÂN HÀNG ──
  {
    id: 19, cat: "THIẾT BỊ NGÂN HÀNG", catSlug: "ngan-hang",
    name: "Máy đếm tiền RIBAO BC-2000V",
    image: "https://ribao-technology.com/wp-content/uploads/2020/10/BC-2000V-600x600.jpg",
  },
  {
    id: 20, cat: "THIẾT BỊ NGÂN HÀNG", catSlug: "ngan-hang",
    name: "Máy in hóa đơn nhiệt Epson TM-T82III",
    image: "https://www.epson.com.sg/content/dam/epson/common/products/printers/pos/tm-t82iii.jpg",
  },
  {
    id: 21, cat: "THIẾT BỊ NGÂN HÀNG", catSlug: "ngan-hang",
    name: "Máy kiểm tra tiền giả UV + MG Oudis 9988T",
    image: "https://oudis.vn/wp-content/uploads/2021/03/may-kiem-tra-tien-gia-9988t.jpg",
  },
  {
    id: 22, cat: "THIẾT BỊ NGÂN HÀNG", catSlug: "ngan-hang",
    name: "Bộ điều khiển thu phí DaviSoft QMS Pro",
    image: "https://davisoft.vn/wp-content/uploads/2020/07/qms-pro.jpg",
  },
  // ── GIẢI PHÁP PHẦN MỀM ──
  {
    id: 23, cat: "GIẢI PHÁP PHẦN MỀM", catSlug: "giai-phap-phan-mem",
    name: "Windows 11 Pro",
    image: "https://cdn.mos.cms.futurecdn.net/3Aa6RXCJFDgeFgGGfzSEeN.jpg",
  },
  {
    id: 24, cat: "GIẢI PHÁP PHẦN MỀM", catSlug: "giai-phap-phan-mem",
    name: "Kaspersky Internet Security",
    image: "https://www.kaspersky.com/content/en-global/images/repository/isc/2020/kaspersky-internet-security-box.png",
  },
  {
    id: 25, cat: "GIẢI PHÁP PHẦN MỀM", catSlug: "giai-phap-phan-mem",
    name: "Microsoft Office 365 Business",
    image: "https://store-images.s-microsoft.com/image/apps.31571.9007199266245523.b389292a-fa67-4b5c-a534-5f4a74b81e81.bc9c5b58-9c67-4f5c-a53b-7dbd0e20ca58",
  },
];

const categories = [
  { label: "Giải pháp - Phần mềm cho doanh nghiệp", slug: "giai-phap-phan-mem", children: ["Windows 11 Pro", "Kaspersky", "Office 365"] },
  { label: "Sản phẩm",                               slug: "san-pham",           children: [] },
  { label: "Sản phẩm CNTT - Công Trình",             slug: "cntt-cong-trinh",    children: ["Các loại cáp tín hiệu", "Linh kiện máy tính", "Màn hình máy tính", "Máy tính xách tay", "Ổ cứng HDD, SSD", "PC-Máy tính để bàn", "Sản phẩm công trình", "Thiết bị âm thanh, ghi hình", "Thiết bị văn phòng"] },
  { label: "Thiết Bị Chuyên Dụng Cho Ngân Hàng",    slug: "ngan-hang",          children: ["Máy in số", "Pinpad", "Thiết bị kiểm đếm tiền"] },
];

const PER_PAGE = 12;
const sortOptions = [
  { value: "default", label: "Default sorting" },
  { value: "name_asc",  label: "Name: A → Z" },
  { value: "name_desc", label: "Name: Z → A" },
];

// Fallback nếu ảnh bị lỗi load
const FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='160' viewBox='0 0 200 160'%3E%3Crect width='200' height='160' fill='%231e2535'/%3E%3Ctext x='100' y='88' text-anchor='middle' font-size='36' fill='%23334155'%3E📦%3C/text%3E%3C/svg%3E";

export default function ProductsPage() {
  const { t } = useLang();
  const p = t.productsPage;

  const [expanded, setExpanded]           = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage]                   = useState(1);
  const [sort, setSort]                   = useState("default");
  const [imgErrors, setImgErrors]         = useState<Record<number, boolean>>({});

  let filtered = activeCategory
    ? allProducts.filter(prod => prod.catSlug === activeCategory)
    : allProducts;

  if (sort === "name_asc")  filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "name_desc") filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));

  const total      = filtered.length;
  const totalPages = Math.ceil(total / PER_PAGE);
  const start      = (page - 1) * PER_PAGE;
  const visible    = filtered.slice(start, start + PER_PAGE);

  const goPage = (pg: number) => {
    if (pg < 1 || pg > totalPages) return;
    setPage(pg);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNums: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pageNums.push(i);
  } else {
    pageNums.push(1, 2, 3, 4, "...", totalPages - 1, totalPages);
  }

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/" className={styles.breadLink}>{p.home}</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.breadCurrent}>{p.current}</span>
      </div>

      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3 className={styles.sideTitle}>{p.sideTitle}</h3>
          <div className={styles.sideDivider} />

          {categories.map((cat) => (
            <div key={cat.slug}>
              <div
                className={`${styles.catRow} ${activeCategory === cat.slug ? styles.catActive : ""}`}
                onClick={() => { setActiveCategory(activeCategory === cat.slug ? null : cat.slug); setPage(1); }}
              >
                <span className={styles.catLabel}>{cat.label}</span>
                {cat.children.length > 0 && (
                  <button
                    className={styles.expandBtn}
                    onClick={(e) => { e.stopPropagation(); setExpanded(prev => ({ ...prev, [cat.slug]: !prev[cat.slug] })); }}
                  >
                    {expanded[cat.slug] ? "−" : "+"}
                  </button>
                )}
              </div>

              {cat.children.length > 0 && expanded[cat.slug] && (
                <div className={styles.childList}>
                  {cat.children.map(child => (
                    <div key={child} className={styles.childItem}>{child}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className={styles.main}>
          <div className={styles.topBar}>
            <span className={styles.showing}>
              {p.showing} {start + 1}–{Math.min(start + PER_PAGE, total)} {p.of} {total} {p.results}
            </span>
            <select
              className={styles.sortSelect}
              value={sort}
              onChange={(e) => { setSort(e.target.value); setPage(1); }}
            >
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {visible.length === 0 ? (
            <div className={styles.empty}>
              <span>📦</span>
              <p>Không có sản phẩm nào.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {visible.map(prod => (
                <Link href={`/san-pham/${prod.id}`} key={prod.id} className={styles.card}>
                  <div className={styles.cardImgWrap}>
                    <Image
                      src={imgErrors[prod.id] ? FALLBACK : prod.image}
                      alt={prod.name}
                      fill
                      className={styles.cardImg}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      style={{ objectFit: "contain", padding: "16px" }}
                      onError={() => setImgErrors(prev => ({ ...prev, [prod.id]: true }))}
                      unoptimized
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardCat}>{prod.cat}</span>
                    <p className={styles.cardName}>{prod.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button className={styles.pgBtn} onClick={() => goPage(page - 1)} disabled={page === 1}>‹</button>
              {pageNums.map((n, i) =>
                n === "..." ? (
                  <span key={`e-${i}`} className={styles.pgEllipsis}>…</span>
                ) : (
                  <button key={n} className={`${styles.pgBtn} ${page === n ? styles.pgActive : ""}`} onClick={() => goPage(n as number)}>{n}</button>
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