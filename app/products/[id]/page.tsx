"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "../../components/LangContext";
import styles from "./page.module.css";

/* ── Full product database (same IDs as products list page) ── */
const productDatabase: Record<number, {
  id: number;
  name: string; nameEn: string;
  category: string; categoryEn: string;
  categoryPath: string[]; categoryPathEn: string[];
  images: string[]; imageFallbacks: string[];
  bg: string;
  description: string; descriptionEn: string;
  specs: { label: string; labelEn: string; value: string; valueEn: string }[];
  features: string[]; featuresEn: string[];
  relatedIds: number[];
}> = {
  1: {
    id: 1,
    name: "Bàn phím A4TECH USB KK-3",
    nameEn: "A4TECH USB Keyboard KK-3",
    category: "Linh kiện máy tính",
    categoryEn: "Computer Components",
    categoryPath: ["Sản phẩm", "Sản phẩm CNTT - Công Trình", "Linh kiện máy tính"],
    categoryPathEn: ["Products", "IT & Construction Products", "Computer Components"],
    images: [
      "/images/products/ban-phim-a4tech-kk3.jpg",
      "/images/products/ban-phim-a4tech-kk3-2.jpg",
      "/images/products/ban-phim-a4tech-kk3-3.jpg",
    ],
    imageFallbacks: [
      "https://product.hstatic.net/200000722513/product/71in3pzlwtl._ac_sl1500__6c8e2d83a1d0476d9a4c5eb066d14da4_grande.jpg",
      "https://product.hstatic.net/200000722513/product/a4tech-kk-3-2_grande.jpg",
      "https://product.hstatic.net/200000722513/product/a4tech-kk-3-3_grande.jpg",
    ],
    bg: "#f8faff",
    description: `<p><strong>Bàn phím FN Đa phương tiện</strong></p>
<p><strong>THÔNG SỐ KỸ THUẬT</strong></p>
<p>Bàn phím: KK-3</p>
<p>Keycaps:</p>
<ul>
  <li>Phím nóng truyền thống: 12</li>
  <li>Phím nóng đa phương tiện FN</li>
</ul>
<p>Đặc tính: Khắc laser</p>
<p>Chiều dài cáp: 150 cm</p>
<p>Kết nối phần cứng</p>
<p>Windows 7/8 / 8.1 / 10</p>`,
    descriptionEn: `<p><strong>FN Multimedia Keyboard</strong></p>
<p><strong>TECHNICAL SPECIFICATIONS</strong></p>
<p>Keyboard: KK-3</p>
<p>Keycaps:</p>
<ul>
  <li>Traditional hotkeys: 12</li>
  <li>FN multimedia hotkeys</li>
</ul>
<p>Feature: Laser engraving</p>
<p>Cable length: 150 cm</p>
<p>Hardware connection</p>
<p>Windows 7/8 / 8.1 / 10</p>`,
    specs: [
      { label: "Model",       labelEn: "Model",        value: "KK-3",     valueEn: "KK-3" },
      { label: "Kết nối",     labelEn: "Connection",   value: "USB",      valueEn: "USB" },
      { label: "Chiều dài cáp", labelEn: "Cable length", value: "150 cm", valueEn: "150 cm" },
      { label: "Phím nóng",   labelEn: "Hotkeys",      value: "12 phím",  valueEn: "12 keys" },
      { label: "Đặc tính",    labelEn: "Feature",      value: "Khắc laser", valueEn: "Laser engraving" },
      { label: "Hệ điều hành", labelEn: "OS Support",  value: "Windows 7/8/8.1/10", valueEn: "Windows 7/8/8.1/10" },
      { label: "Thương hiệu", labelEn: "Brand",        value: "A4TECH",   valueEn: "A4TECH" },
      { label: "Bảo hành",    labelEn: "Warranty",     value: "12 tháng", valueEn: "12 months" },
    ],
    features: ["Phím nóng đa phương tiện FN", "Khắc laser bền bỉ", "Cáp USB dài 150cm", "Tương thích Windows 7/8/10"],
    featuresEn: ["FN multimedia hotkeys", "Durable laser engraving", "150cm USB cable", "Compatible with Windows 7/8/10"],
    relatedIds: [2, 8, 3],
  },
  2: {
    id: 2,
    name: "Bàn Phím Logitech K120",
    nameEn: "Logitech K120 Keyboard",
    category: "Linh kiện máy tính",
    categoryEn: "Computer Components",
    categoryPath: ["Sản phẩm", "Sản phẩm CNTT - Công Trình", "Linh kiện máy tính"],
    categoryPathEn: ["Products", "IT & Construction Products", "Computer Components"],
    images: ["/images/products/ban-phim-logitech-k120.jpg"],
    imageFallbacks: ["https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k120-business/gallery/k120-keyboard-top-view.png"],
    bg: "#f8faff",
    description: `<p><strong>Bàn phím văn phòng Logitech K120</strong></p>
<p>Bàn phím có dây Logitech K120 thiết kế mỏng nhẹ, gõ êm, phù hợp cho văn phòng.</p>
<p><strong>Đặc điểm nổi bật:</strong></p>
<ul>
  <li>Phím gõ êm, chắc chắn</li>
  <li>Thiết kế mỏng nhẹ</li>
  <li>Kết nối USB đáng tin cậy</li>
  <li>Chịu được nước đổ</li>
</ul>`,
    descriptionEn: `<p><strong>Logitech K120 Business Keyboard</strong></p>
<p>The Logitech K120 wired keyboard features a slim design with quiet keystrokes, ideal for office use.</p>
<p><strong>Key features:</strong></p>
<ul>
  <li>Quiet and sturdy keystrokes</li>
  <li>Slim, lightweight design</li>
  <li>Reliable USB connection</li>
  <li>Spill-resistant design</li>
</ul>`,
    specs: [
      { label: "Model",       labelEn: "Model",        value: "K120",        valueEn: "K120" },
      { label: "Kết nối",     labelEn: "Connection",   value: "USB",         valueEn: "USB" },
      { label: "Chiều dài cáp", labelEn: "Cable length", value: "150 cm",   valueEn: "150 cm" },
      { label: "Số phím",     labelEn: "Keys",         value: "104 phím",    valueEn: "104 keys" },
      { label: "Thương hiệu", labelEn: "Brand",        value: "Logitech",    valueEn: "Logitech" },
      { label: "Bảo hành",    labelEn: "Warranty",     value: "36 tháng",    valueEn: "36 months" },
    ],
    features: ["Gõ êm ái", "Chống nước đổ", "Kết nối USB ổn định", "Bảo hành 3 năm"],
    featuresEn: ["Quiet keystrokes", "Spill-resistant", "Stable USB connection", "3-year warranty"],
    relatedIds: [1, 8, 3],
  },
  3: {
    id: 3,
    name: "Bảng mạch chính Asus B760M-AYW WIFI DDR4",
    nameEn: "Asus B760M-AYW WIFI DDR4 Motherboard",
    category: "Linh kiện máy tính",
    categoryEn: "Computer Components",
    categoryPath: ["Sản phẩm", "Sản phẩm CNTT - Công Trình", "Linh kiện máy tính"],
    categoryPathEn: ["Products", "IT & Construction Products", "Computer Components"],
    images: ["/images/products/mainboard-asus-b760m.jpg"],
    imageFallbacks: ["https://dlcdnwebimgs.asus.com/gain/A2B53C47-9C84-4B8B-9F45-BC2DF1BC3B30/"],
    bg: "#f0f4ff",
    description: `<p><strong>Main Asus B760M-AYW WIFI DDR4</strong></p>
<p>Bo mạch chủ Micro-ATX hỗ trợ CPU Intel thế hệ 12/13, DDR4, tích hợp WiFi.</p>
<ul>
  <li>Socket: LGA1700</li>
  <li>Chipset: Intel B760</li>
  <li>RAM: DDR4, tối đa 128GB</li>
  <li>WiFi 6 tích hợp</li>
</ul>`,
    descriptionEn: `<p><strong>Asus B760M-AYW WIFI DDR4 Motherboard</strong></p>
<p>Micro-ATX motherboard supporting Intel 12th/13th Gen CPUs, DDR4 memory with built-in WiFi.</p>
<ul>
  <li>Socket: LGA1700</li>
  <li>Chipset: Intel B760</li>
  <li>RAM: DDR4, up to 128GB</li>
  <li>Built-in WiFi 6</li>
</ul>`,
    specs: [
      { label: "Socket",      labelEn: "Socket",      value: "LGA1700",       valueEn: "LGA1700" },
      { label: "Chipset",     labelEn: "Chipset",     value: "Intel B760",    valueEn: "Intel B760" },
      { label: "Form factor", labelEn: "Form factor", value: "Micro-ATX",     valueEn: "Micro-ATX" },
      { label: "Khe RAM",     labelEn: "RAM Slots",   value: "4x DDR4",       valueEn: "4x DDR4" },
      { label: "RAM tối đa",  labelEn: "Max RAM",     value: "128GB",         valueEn: "128GB" },
      { label: "Kết nối",     labelEn: "Connectivity",value: "WiFi 6, BT 5.2",valueEn: "WiFi 6, BT 5.2" },
      { label: "Thương hiệu", labelEn: "Brand",       value: "ASUS",          valueEn: "ASUS" },
      { label: "Bảo hành",    labelEn: "Warranty",    value: "36 tháng",      valueEn: "36 months" },
    ],
    features: ["Hỗ trợ Intel Gen 12/13", "WiFi 6 tích hợp", "DDR4 tốc độ cao", "PCIe 4.0"],
    featuresEn: ["Supports Intel Gen 12/13", "Built-in WiFi 6", "High-speed DDR4", "PCIe 4.0"],
    relatedIds: [4, 5, 6],
  },
  9: {
    id: 9,
    name: "Ổ cứng SSD Synology SAT5221-960G 960GB Enterprise",
    nameEn: "Synology SAT5221-960G 960GB Enterprise SSD",
    category: "Ổ cứng HDD, SSD",
    categoryEn: "HDD, SSD Drives",
    categoryPath: ["Sản phẩm", "Sản phẩm CNTT - Công Trình", "Ổ cứng HDD, SSD"],
    categoryPathEn: ["Products", "IT & Construction Products", "HDD, SSD Drives"],
    images: ["/images/products/ssd-synology-sat5221.jpg"],
    imageFallbacks: ["https://global.synologycdn.com/package/5009/images/synology-sat5221-960g.png"],
    bg: "#f0f8ff",
    description: `<p><strong>SSD Doanh nghiệp Synology SAT5221-960G</strong></p>
<p>Ổ cứng SSD SATA Enterprise được thiết kế đặc biệt cho NAS Synology, đảm bảo hiệu suất và độ tin cậy cao.</p>
<ul>
  <li>Dung lượng: 960GB</li>
  <li>Chuẩn: SATA 6Gb/s 2.5 inch</li>
  <li>Tốc độ đọc tuần tự: 530MB/s</li>
  <li>Tốc độ ghi tuần tự: 500MB/s</li>
</ul>`,
    descriptionEn: `<p><strong>Synology SAT5221-960G Enterprise SSD</strong></p>
<p>Enterprise-grade SATA SSD designed specifically for Synology NAS, ensuring high performance and reliability.</p>
<ul>
  <li>Capacity: 960GB</li>
  <li>Interface: SATA 6Gb/s 2.5 inch</li>
  <li>Sequential read: 530MB/s</li>
  <li>Sequential write: 500MB/s</li>
</ul>`,
    specs: [
      { label: "Dung lượng",  labelEn: "Capacity",      value: "960GB",     valueEn: "960GB" },
      { label: "Chuẩn kết nối",labelEn: "Interface",    value: "SATA 6Gb/s",valueEn: "SATA 6Gb/s" },
      { label: "Form factor", labelEn: "Form factor",   value: "2.5 inch",  valueEn: "2.5 inch" },
      { label: "Đọc tuần tự", labelEn: "Sequential Read",value: "530MB/s",  valueEn: "530MB/s" },
      { label: "Ghi tuần tự", labelEn: "Sequential Write",value: "500MB/s", valueEn: "500MB/s" },
      { label: "MTBF",        labelEn: "MTBF",          value: "1.5M giờ",  valueEn: "1.5M hours" },
      { label: "Thương hiệu", labelEn: "Brand",         value: "Synology",  valueEn: "Synology" },
      { label: "Bảo hành",    labelEn: "Warranty",      value: "5 năm",     valueEn: "5 years" },
    ],
    features: ["Enterprise-grade", "Tối ưu cho Synology NAS", "Tốc độ đọc 530MB/s", "Bảo hành 5 năm"],
    featuresEn: ["Enterprise-grade", "Optimized for Synology NAS", "530MB/s read speed", "5-year warranty"],
    relatedIds: [10, 5, 11],
  },
};

/* Fallback cho các ID không có trong DB */
function getProduct(id: number) {
  if (productDatabase[id]) return productDatabase[id];
  // Generic fallback
  return {
    id,
    name: `Sản phẩm #${id}`,
    nameEn: `Product #${id}`,
    category: "Sản phẩm",
    categoryEn: "Products",
    categoryPath: ["Sản phẩm"],
    categoryPathEn: ["Products"],
    images: [],
    imageFallbacks: [],
    bg: "#f0f5fb",
    description: "<p>Thông tin sản phẩm đang được cập nhật.</p>",
    descriptionEn: "<p>Product information is being updated.</p>",
    specs: [],
    features: [],
    featuresEn: [],
    relatedIds: [],
  };
}

/* ── Related product mini-card ── */
const relatedProducts: Record<number, { name: string; nameEn: string; img: string; fallback: string; bg: string }> = {
  1:  { name:"Bàn phím A4TECH USB KK-3",          nameEn:"A4TECH Keyboard KK-3",        img:"/images/products/ban-phim-a4tech-kk3.jpg",       fallback:"https://product.hstatic.net/200000722513/product/71in3pzlwtl._ac_sl1500__6c8e2d83a1d0476d9a4c5eb066d14da4_grande.jpg", bg:"#f8faff" },
  2:  { name:"Bàn Phím Logitech K120",             nameEn:"Logitech K120 Keyboard",       img:"/images/products/ban-phim-logitech-k120.jpg",    fallback:"https://resource.logitech.com/w_386,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k120-business/gallery/k120-keyboard-top-view.png", bg:"#f8faff" },
  3:  { name:"Main Asus B760M-AYW WIFI DDR4",      nameEn:"Asus B760M-AYW Motherboard",  img:"/images/products/mainboard-asus-b760m.jpg",      fallback:"https://dlcdnwebimgs.asus.com/gain/A2B53C47-9C84-4B8B-9F45-BC2DF1BC3B30/", bg:"#f0f4ff" },
  4:  { name:"Main Gigabyte A520M-K V2",            nameEn:"Gigabyte A520M-K V2",         img:"/images/products/mainboard-gigabyte-a520m.jpg",  fallback:"https://www.gigabyte.com/FileUpload/Global/KeyFeature/3214/images/a520m-k-v2-kv.png", bg:"#f0f4ff" },
  5:  { name:"Main Gigabyte B760M DS3H AX DDR4",   nameEn:"Gigabyte B760M DS3H AX DDR4", img:"/images/products/mainboard-gigabyte-b760m.jpg",  fallback:"https://www.gigabyte.com/FileUpload/Global/KeyFeature/3311/images/b760m-ds3h-ax-kv.png", bg:"#f0f4ff" },
  6:  { name:"Main Gigabyte Z790 D DDR4",           nameEn:"Gigabyte Z790 D DDR4",        img:"/images/products/mainboard-gigabyte-z790.jpg",   fallback:"https://www.gigabyte.com/FileUpload/Global/KeyFeature/3199/images/z790-d-ddr4-kv.png", bg:"#f0f4ff" },
  8:  { name:"Combo Logitech MK295",                nameEn:"Logitech MK295 Combo",        img:"/images/products/combo-logitech-mk295.jpg",      fallback:"https://resource.logitech.com/w_386,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/combos/mk295/gallery/mk295-combo-top-view.png", bg:"#f8faff" },
  10: { name:"HDD Synology Plus 16TB HAT3310",      nameEn:"Synology Plus 16TB HDD",      img:"/images/products/hdd-synology-16tb.jpg",         fallback:"https://global.synologycdn.com/package/5009/images/synology-hat3310-16t.png", bg:"#f0f8ff" },
  11: { name:"UPS APC 10KVA SRT10000XLI",          nameEn:"APC UPS 10KVA SRT10000XLI",  img:"/images/products/ups-apc-10kva.jpg",             fallback:"https://www.apc.com/us/en/faqs/img/SRT10KXLI.png", bg:"#f0fff4" },
};

function SmartImg({ src, fallback, alt, className, bg }: { src:string; fallback:string; alt:string; className:string; bg?:string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [failed, setFailed] = useState(false);
  return (
    <div className={className} style={bg ? { background: bg } : undefined}>
      {!failed
        // eslint-disable-next-line @next/next/no-img-element
        ? <img src={imgSrc} alt={alt} style={{width:"100%",height:"100%",objectFit:"contain",padding:"12px"}}
            onError={() => { if (imgSrc === src && fallback) { setImgSrc(fallback); } else { setFailed(true); } }} />
        : <span style={{fontSize:48,display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>🖥️</span>
      }
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { lang } = useLang();
  const isVi = lang === "vi";
  const slug = params.id;

  // Thử fetch từ API, fallback sang productDatabase cũ nếu thất bại
  const [apiProduct, setApiProduct] = useState<null | typeof productDatabase[1]>(null);
  const [loading, setLoading]       = useState(true);
  const [notFoundApi, setNotFoundApi] = useState(false);

  useEffect(() => {
    fetch(`/api/products/${slug}`)
      .then(r => {
        if (r.status === 404) { setNotFoundApi(true); return null; }
        return r.ok ? r.json() : null;
      })
      .then(data => {
        if (data?.success && data.data) {
          const d = data.data;
          setApiProduct({
            id: 0,
            name: d.name || "",
            nameEn: d.nameEn || d.name || "",
            category: d.category || "",
            categoryEn: d.category || "",
            categoryPath: ["Sản phẩm", d.category || ""],
            categoryPathEn: ["Products", d.category || ""],
            images: d.images || [],
            imageFallbacks: d.imageFallbacks || [],
            bg: d.bg || "#f8faff",
            description: d.description || "<p>Đang cập nhật.</p>",
            descriptionEn: d.descriptionEn || d.description || "<p>Being updated.</p>",
            specs: d.specs || [],
            features: d.features || [],
            featuresEn: d.featuresEn || [],
            relatedIds: [],
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  // Fallback sang productDatabase cũ theo numeric ID
  const numericId = parseInt(slug);
  const fallbackProduct = !isNaN(numericId) && productDatabase[numericId]
    ? productDatabase[numericId]
    : getProduct(0);

  const product = apiProduct || fallbackProduct;

  const [activeImg,    setActiveImg]    = useState(0);
  const [activeTab,    setActiveTab]    = useState<"desc" | "specs" | "reviews">("desc");
  const [copySuccess,  setCopySuccess]  = useState(false);

  const mainImg     = product.images[activeImg]     || "";
  const mainFallback= product.imageFallbacks[activeImg] || "";

  if (loading) {
    return <div className={styles.page} style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-light)" }}>Đang tải...</div>;
  }

  if (notFoundApi && !apiProduct && isNaN(numericId)) {
    return <div className={styles.page} style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
      <span style={{ fontSize: 48 }}>😕</span>
      <p style={{ color: "var(--text)" }}>Sản phẩm không tồn tại</p>
      <Link href="/products" className="btn-primary">← Quay lại danh sách</Link>
    </div>;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className={styles.page}>
      {/* ── Breadcrumb ── */}
      <div className={styles.breadcrumb}>
        <Link href="/" className={styles.bLink}>{isVi ? "Home" : "Home"}</Link>
        <span className={styles.bSep}>/</span>
        <Link href="/products" className={styles.bLink}>{isVi ? "Sản phẩm" : "Products"}</Link>
        {product.categoryPath.slice(1).map((p, i) => (
          <span key={i} className={styles.bCrumb}>
            <span className={styles.bSep}>/</span>
            <span>{isVi ? p : (product.categoryPathEn[i + 1] || p)}</span>
          </span>
        ))}
        <span className={styles.bSep}>/</span>
        <span className={styles.bCurrent}>{isVi ? product.name : product.nameEn}</span>
      </div>

      {/* ── Product main block ── */}
      <div className={styles.productBlock}>

        {/* Left: Gallery */}
        <div className={styles.gallery}>
          {/* Main image */}
          <div className={styles.mainImgWrap} style={{ background: product.bg }}>
            {mainImg || mainFallback ? (
              <SmartImg
                src={mainImg}
                fallback={mainFallback}
                alt={isVi ? product.name : product.nameEn}
                className={styles.mainImg}
                bg={product.bg}
              />
            ) : (
              <div className={styles.mainImgPlaceholder}>🖥️</div>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className={styles.thumbRow}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${activeImg === i ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <SmartImg
                    src={img}
                    fallback={product.imageFallbacks[i] || ""}
                    alt={`${product.name} ${i + 1}`}
                    className={styles.thumbImg}
                    bg={product.bg}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div className={styles.info}>
          {/* Nav back */}
          <div className={styles.navPrevNext}>
            <Link href="/products" className={styles.navBtn} title={isVi ? "Quay lại danh sách" : "Back to list"}>‹ {isVi ? "Danh sách" : "All Products"}</Link>
          </div>

          <h1 className={styles.productName}>{isVi ? product.name : product.nameEn}</h1>

          <div className={styles.divider} />

          {/* Category */}
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>{isVi ? "Danh mục:" : "Category:"}</span>
            <Link href="/products" className={styles.metaLink}>
              {isVi ? product.category : product.categoryEn}
            </Link>
          </div>

          {/* Features quick list */}
          {(isVi ? product.features : product.featuresEn).length > 0 && (
            <ul className={styles.featureList}>
              {(isVi ? product.features : product.featuresEn).map((f, i) => (
                <li key={i}><span className={styles.checkMark}>✓</span>{f}</li>
              ))}
            </ul>
          )}

          {/* CTA buttons */}
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.btnQuote}>
              📋 {isVi ? "Yêu cầu báo giá" : "Request a Quote"}
            </Link>
            <a href="tel:0123456789" className={styles.btnCall}>
              📞 {isVi ? "Gọi tư vấn" : "Call Us"}
            </a>
          </div>

          <div className={styles.divider} />

          {/* Share */}
          <div className={styles.shareRow}>
            <span className={styles.shareLabel}>{isVi ? "Chia sẻ:" : "Share:"}</span>
            <div className={styles.shareBtns}>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank" rel="noopener noreferrer" className={`${styles.shareBtn} ${styles.shareFb}`} title="Facebook">f</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                target="_blank" rel="noopener noreferrer" className={`${styles.shareBtn} ${styles.shareX}`} title="X/Twitter">✕</a>
              <a href={`mailto:?subject=${encodeURIComponent(isVi ? product.name : product.nameEn)}&body=${encodeURIComponent(shareUrl)}`}
                className={`${styles.shareBtn} ${styles.shareMail}`} title="Email">✉</a>
              <button onClick={handleCopyLink} className={`${styles.shareBtn} ${styles.shareLink} ${copySuccess ? styles.shareCopied : ""}`}
                title={isVi ? "Sao chép liên kết" : "Copy link"}>
                {copySuccess ? "✓" : "🔗"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className={styles.tabsSection}>
        <div className={styles.tabBar}>
          <button className={`${styles.tab} ${activeTab === "desc"    ? styles.tabActive : ""}`} onClick={() => setActiveTab("desc")}>
            {isVi ? "MÔ TẢ" : "DESCRIPTION"}
          </button>
          <button className={`${styles.tab} ${activeTab === "specs"   ? styles.tabActive : ""}`} onClick={() => setActiveTab("specs")}>
            {isVi ? "THÔNG SỐ KỸ THUẬT" : "SPECIFICATIONS"}
          </button>
          <button className={`${styles.tab} ${activeTab === "reviews" ? styles.tabActive : ""}`} onClick={() => setActiveTab("reviews")}>
            {isVi ? "ĐÁNH GIÁ (0)" : "REVIEWS (0)"}
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "desc" && (
            <div
              className={styles.descContent}
              dangerouslySetInnerHTML={{ __html: isVi ? product.description : product.descriptionEn }}
            />
          )}

          {activeTab === "specs" && (
            <table className={styles.specsTable}>
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? styles.specRowEven : ""}>
                    <td className={styles.specLabel}>{isVi ? s.label : s.labelEn}</td>
                    <td className={styles.specValue}>{isVi ? s.value : s.valueEn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === "reviews" && (
            <div className={styles.reviewsEmpty}>
              <p>⭐ {isVi ? "Chưa có đánh giá nào. Hãy là người đầu tiên!" : "No reviews yet. Be the first!"}</p>
              <Link href="/contact" className={styles.btnReview}>
                {isVi ? "Gửi đánh giá" : "Write a review"}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* ── Related products ── */}
      {product.relatedIds.length > 0 && (
        <div className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>{isVi ? "Sản phẩm liên quan" : "Related Products"}</h2>
          <div className={styles.relatedGrid}>
            {product.relatedIds
              .filter(rid => relatedProducts[rid])
              .map(rid => {
                const rp = relatedProducts[rid];
                return (
                  <Link key={rid} href={`/products/${rid}`} className={styles.relatedCard}>
                    <SmartImg
                      src={rp.img}
                      fallback={rp.fallback}
                      alt={isVi ? rp.name : rp.nameEn}
                      className={styles.relatedImg}
                      bg={rp.bg}
                    />
                    <div className={styles.relatedName}>{isVi ? rp.name : rp.nameEn}</div>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}