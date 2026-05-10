/**
 * Script seed dữ liệu mẫu vào MongoDB
 * Chạy: npx tsx lib/seed.ts
 */
import { connectDB } from "./mongodb";
import { Product, Article, Service, ProductSpec } from "./types";

// ── Helpers ──────────────────────────────────────────────────────────────────
function p(
  name: string, nameEn: string, slug: string,
  category: string, catSlug: string,
  tag: string, tagColor: string,
  emoji: string, bg: string,
  images: string[], imageFallbacks: string[],
  description: string, descriptionEn: string,
  specs: ProductSpec[], features: string[], featuresEn: string[],
  relatedSlugs: string[],
  inStock = true, featured = false, price?: number
): Omit<Product, "_id"> {
  return {
    name, nameEn, slug, category, catSlug, tag, tagColor, emoji, bg,
    images, imageFallbacks, description, descriptionEn,
    specs, features, featuresEn, relatedSlugs,
    inStock, featured, price,
    createdAt: new Date(), updatedAt: new Date(),
  };
}

async function seed() {
  console.log("🌱 Bắt đầu seed dữ liệu...");
  const mongoose = await connectDB();
  const db = mongoose.connection.db!;

  // ── 1. Products ──────────────────────────────────────────────────────────────
  await db.collection("products").deleteMany({});

  const products: Omit<Product, "_id">[] = [
    // ── LINH KIỆN MÁY TÍNH ──────────────────────────────────────────────────
    p(
      "Bàn phím A4TECH USB KK-3", "A4TECH USB Keyboard KK-3",
      "ban-phim-a4tech-kk3",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "Keyboard", "#1a6fc4", "⌨️",
      "linear-gradient(135deg,#f0f5ff,#e0eaff)",
      ["/images/products/ban-phim-a4tech-kk3.jpg"],
      ["https://product.hstatic.net/200000722513/product/71in3pzlwtl._ac_sl1500__6c8e2d83a1d0476d9a4c5eb066d14da4_grande.jpg"],
      `<p><strong>Bàn phím FN Đa phương tiện A4TECH KK-3</strong></p>
<p>Bàn phím USB KK-3 sử dụng kết nối USB tiêu chuẩn, tương thích với mọi hệ điều hành Windows. Phím được khắc laser bền bỉ, chống mờ theo thời gian.</p>
<ul><li>12 phím nóng đa phương tiện FN</li><li>Khắc laser bền bỉ</li><li>Cáp USB dài 150cm</li></ul>`,
      `<p><strong>A4TECH KK-3 FN Multimedia Keyboard</strong></p>
<p>The USB KK-3 keyboard uses a standard USB connection, compatible with all Windows operating systems. Keys are laser-engraved for durability against fading over time.</p>
<ul><li>12 FN multimedia hotkeys</li><li>Durable laser engraving</li><li>150cm USB cable</li></ul>`,
      [
        { label: "Model", labelEn: "Model", value: "KK-3", valueEn: "KK-3" },
        { label: "Kết nối", labelEn: "Connection", value: "USB", valueEn: "USB" },
        { label: "Chiều dài cáp", labelEn: "Cable length", value: "150 cm", valueEn: "150 cm" },
        { label: "Phím nóng", labelEn: "Hotkeys", value: "12 phím FN", valueEn: "12 FN keys" },
        { label: "Đặc tính", labelEn: "Feature", value: "Khắc laser", valueEn: "Laser engraving" },
        { label: "Thương hiệu", labelEn: "Brand", value: "A4TECH", valueEn: "A4TECH" },
        { label: "Bảo hành", labelEn: "Warranty", value: "12 tháng", valueEn: "12 months" },
      ],
      ["Phím nóng đa phương tiện FN", "Khắc laser bền bỉ", "Cáp USB 150cm", "Windows 7/8/10"],
      ["FN multimedia hotkeys", "Durable laser engraving", "150cm USB cable", "Windows 7/8/10 compatible"],
      ["ban-phim-logitech-k120", "combo-logitech-mk220"],
      true, true
    ),

    p(
      "Bàn Phím Logitech K120", "Logitech K120 Keyboard",
      "ban-phim-logitech-k120",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "Keyboard", "#1a6fc4", "⌨️",
      "linear-gradient(135deg,#f0f5ff,#e0eaff)",
      ["/images/products/ban-phim-logitech-k120.jpg"],
      ["https://resource.logitech.com/w_386,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k120/gallery/k120-keyboard-top-view.png"],
      `<p><strong>Bàn phím Logitech K120</strong></p>
<p>Bàn phím có dây Logitech K120 với thiết kế tối giản, gõ êm và bền bỉ. Chống tràn nước cơ bản, bảo hành 3 năm.</p>`,
      `<p><strong>Logitech K120 Keyboard</strong></p>
<p>The Logitech K120 wired keyboard with minimal design, quiet and durable typing. Basic spill resistance, 3-year warranty.</p>`,
      [
        { label: "Model", labelEn: "Model", value: "K120", valueEn: "K120" },
        { label: "Kết nối", labelEn: "Connection", value: "USB", valueEn: "USB" },
        { label: "Chiều dài cáp", labelEn: "Cable length", value: "150 cm", valueEn: "150 cm" },
        { label: "Số phím", labelEn: "Keys", value: "104 phím", valueEn: "104 keys" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Logitech", valueEn: "Logitech" },
        { label: "Bảo hành", labelEn: "Warranty", value: "36 tháng", valueEn: "36 months" },
      ],
      ["Gõ êm, chống ồn", "Chống tràn nước", "USB cắm dùng ngay", "Bảo hành 3 năm"],
      ["Quiet keystrokes", "Spill resistant", "Plug-and-play USB", "3-year warranty"],
      ["ban-phim-a4tech-kk3", "combo-logitech-mk220"],
      true, true
    ),

    p(
      "Bảng mạch chính Asus B760M-AYW WIFI DDR4", "ASUS B760M-AYW WIFI DDR4 Motherboard",
      "mainboard-asus-b760m-ayw",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "Mainboard", "#7c5cbf", "🖥️",
      "linear-gradient(135deg,#f0f0ff,#e0e0f8)",
      ["/images/products/mainboard-asus-b760m.jpg"],
      ["https://dlcdnwebimgs.asus.com/gain/B7B9B6B5-B7B9-B6B5-B7B9-B6B5B7B9B6B5/w800"],
      `<p><strong>Mainboard ASUS B760M-AYW WIFI DDR4</strong></p>
<p>Bo mạch chủ Micro-ATX tích hợp WiFi 6 và Bluetooth 5.2, hỗ trợ Intel Gen 12/13, 4 khe RAM DDR4 tối đa 128GB.</p>`,
      `<p><strong>ASUS B760M-AYW WIFI DDR4 Motherboard</strong></p>
<p>Micro-ATX motherboard with integrated WiFi 6 and Bluetooth 5.2, supports Intel Gen 12/13, 4 DDR4 RAM slots up to 128GB.</p>`,
      [
        { label: "Socket", labelEn: "Socket", value: "LGA1700", valueEn: "LGA1700" },
        { label: "Chipset", labelEn: "Chipset", value: "Intel B760", valueEn: "Intel B760" },
        { label: "Form factor", labelEn: "Form factor", value: "Micro-ATX", valueEn: "Micro-ATX" },
        { label: "RAM", labelEn: "RAM Slots", value: "4x DDR4, tối đa 128GB", valueEn: "4x DDR4, up to 128GB" },
        { label: "Kết nối", labelEn: "Connectivity", value: "WiFi 6, Bluetooth 5.2", valueEn: "WiFi 6, Bluetooth 5.2" },
        { label: "Thương hiệu", labelEn: "Brand", value: "ASUS", valueEn: "ASUS" },
        { label: "Bảo hành", labelEn: "Warranty", value: "36 tháng", valueEn: "36 months" },
      ],
      ["Hỗ trợ Intel Gen 12/13", "WiFi 6 tích hợp", "PCIe 4.0", "128GB DDR4"],
      ["Supports Intel Gen 12/13", "Built-in WiFi 6", "PCIe 4.0", "128GB DDR4"],
      ["mainboard-gigabyte-b760m-ds3h", "mainboard-gigabyte-a520m-k"],
      true, false
    ),

    p(
      "Bảng mạch chính Gigabyte A520M-K V2", "Gigabyte A520M-K V2 Motherboard",
      "mainboard-gigabyte-a520m-k",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "Mainboard", "#7c5cbf", "🖥️",
      "linear-gradient(135deg,#f0f0ff,#e0e0f8)",
      ["/images/products/mainboard-gigabyte-a520m.jpg"],
      ["https://www.gigabyte.com/FileUpload/Global/KeyFeature/3033/images/mb-a520m-k.png"],
      "<p>Bo mạch chủ Gigabyte A520M-K V2, socket AM4, hỗ trợ AMD Ryzen Series, Micro-ATX.</p>",
      "<p>Gigabyte A520M-K V2 motherboard, AM4 socket, supports AMD Ryzen Series, Micro-ATX form factor.</p>",
      [
        { label: "Socket", labelEn: "Socket", value: "AM4", valueEn: "AM4" },
        { label: "Chipset", labelEn: "Chipset", value: "AMD A520", valueEn: "AMD A520" },
        { label: "Form factor", labelEn: "Form factor", value: "Micro-ATX", valueEn: "Micro-ATX" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Gigabyte", valueEn: "Gigabyte" },
        { label: "Bảo hành", labelEn: "Warranty", value: "36 tháng", valueEn: "36 months" },
      ],
      ["AMD Ryzen AM4", "Micro-ATX", "DDR4 hỗ trợ", "PCIe 3.0"],
      ["AMD Ryzen AM4", "Micro-ATX", "DDR4 support", "PCIe 3.0"],
      ["mainboard-asus-b760m-ayw", "mainboard-gigabyte-b760m-ds3h"],
      true, false
    ),

    p(
      "Bảng mạch chính Gigabyte B760M DS3H AX DDR4 (Wifi+BT)", "Gigabyte B760M DS3H AX DDR4 Motherboard",
      "mainboard-gigabyte-b760m-ds3h",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "Mainboard", "#7c5cbf", "🖥️",
      "linear-gradient(135deg,#f0f0ff,#e0e0f8)",
      ["/images/products/mainboard-gigabyte-b760m.jpg"],
      ["https://www.gigabyte.com/FileUpload/Global/KeyFeature/3283/images/b760m-ds3h-ax-ddr4.png"],
      "<p>Gigabyte B760M DS3H AX DDR4, socket LGA1700, WiFi+BT tích hợp, hỗ trợ Intel Gen 12/13.</p>",
      "<p>Gigabyte B760M DS3H AX DDR4, LGA1700 socket, built-in WiFi+BT, supports Intel Gen 12/13.</p>",
      [
        { label: "Socket", labelEn: "Socket", value: "LGA1700", valueEn: "LGA1700" },
        { label: "Chipset", labelEn: "Chipset", value: "Intel B760", valueEn: "Intel B760" },
        { label: "WiFi", labelEn: "WiFi", value: "WiFi 6E + BT 5.2", valueEn: "WiFi 6E + BT 5.2" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Gigabyte", valueEn: "Gigabyte" },
        { label: "Bảo hành", labelEn: "Warranty", value: "36 tháng", valueEn: "36 months" },
      ],
      ["Intel Gen 12/13", "WiFi 6E + BT 5.2", "DDR4 tối đa 128GB", "PCIe 4.0"],
      ["Intel Gen 12/13", "WiFi 6E + BT 5.2", "DDR4 up to 128GB", "PCIe 4.0"],
      ["mainboard-asus-b760m-ayw", "mainboard-gigabyte-z790-d"],
      true, false
    ),

    p(
      "Bảng mạch chính Gigabyte Z790 D DDR4", "Gigabyte Z790 D DDR4 Motherboard",
      "mainboard-gigabyte-z790-d",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "Mainboard", "#7c5cbf", "🖥️",
      "linear-gradient(135deg,#f0f0ff,#e0e0f8)",
      ["/images/products/mainboard-gigabyte-z790.jpg"],
      ["https://www.gigabyte.com/FileUpload/Global/KeyFeature/3198/images/z790-d-ddr4.png"],
      "<p>Gigabyte Z790 D DDR4, socket LGA1700, chipset Z790 cao cấp, hỗ trợ ép xung.</p>",
      "<p>Gigabyte Z790 D DDR4, LGA1700 socket, premium Z790 chipset, supports overclocking.</p>",
      [
        { label: "Socket", labelEn: "Socket", value: "LGA1700", valueEn: "LGA1700" },
        { label: "Chipset", labelEn: "Chipset", value: "Intel Z790", valueEn: "Intel Z790" },
        { label: "Form factor", labelEn: "Form factor", value: "ATX", valueEn: "ATX" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Gigabyte", valueEn: "Gigabyte" },
        { label: "Bảo hành", labelEn: "Warranty", value: "36 tháng", valueEn: "36 months" },
      ],
      ["Chipset Z790 cao cấp", "Hỗ trợ ép xung", "Intel Gen 12/13", "PCIe 5.0"],
      ["Premium Z790 chipset", "Overclocking support", "Intel Gen 12/13", "PCIe 5.0"],
      ["mainboard-gigabyte-b760m-ds3h", "mainboard-asus-b760m-ayw"],
      true, false
    ),

    p(
      "Bộ 3 quạt máy tính Corsair RS120 ARGB Black", "Corsair RS120 ARGB 3-Pack Case Fan",
      "fan-corsair-rs120-argb",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "Cooling", "#f97316", "🌀",
      "linear-gradient(135deg,#fff0e8,#ffe0d0)",
      ["/images/products/fan-corsair-rs120.jpg"],
      ["https://www.corsair.com/medias/sys_master/images/images/h3a/hf5/9533965713438/CO-9050181-WW-Gallery-RS120-ARGB-3-Pack-01.png"],
      "<p>Bộ 3 quạt 120mm Corsair RS120 ARGB với đèn LED RGB 16 triệu màu, kết nối qua hub iCUE.</p>",
      "<p>Corsair RS120 ARGB 3-pack 120mm fans with 16 million color RGB LEDs, connected via iCUE hub.</p>",
      [
        { label: "Kích thước", labelEn: "Size", value: "120mm x 3", valueEn: "120mm x 3" },
        { label: "Đèn", labelEn: "Lighting", value: "ARGB 16M màu", valueEn: "ARGB 16M colors" },
        { label: "Tốc độ", labelEn: "Speed", value: "600–1500 RPM", valueEn: "600–1500 RPM" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Corsair", valueEn: "Corsair" },
        { label: "Bảo hành", labelEn: "Warranty", value: "24 tháng", valueEn: "24 months" },
      ],
      ["ARGB 16 triệu màu", "3 quạt trong 1 hộp", "Tương thích iCUE", "Airflow tối ưu"],
      ["ARGB 16 million colors", "3 fans in 1 pack", "iCUE compatible", "Optimized airflow"],
      ["mainboard-asus-b760m-ayw", "mainboard-gigabyte-b760m-ds3h"],
      true, false
    ),

    p(
      "Bộ bàn phím chuột không dây Logitech MK220 wireless", "Logitech MK220 Wireless Keyboard & Mouse Combo",
      "combo-logitech-mk220",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "Combo", "#1a6fc4", "🖱️",
      "linear-gradient(135deg,#f0f5ff,#e0eaff)",
      ["/images/products/combo-logitech-mk295.jpg"],
      ["https://resource.logitech.com/w_386,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/combos/mk220/gallery/mk220-combo-top-view.png"],
      "<p>Bộ bàn phím + chuột không dây Logitech MK220, kết nối USB Nano receiver, pin dùng 24 tháng.</p>",
      "<p>Logitech MK220 wireless keyboard + mouse combo, USB Nano receiver connection, battery lasts 24 months.</p>",
      [
        { label: "Kết nối", labelEn: "Connection", value: "USB Nano 2.4GHz", valueEn: "USB Nano 2.4GHz" },
        { label: "Pin bàn phím", labelEn: "Keyboard battery", value: "24 tháng", valueEn: "24 months" },
        { label: "Pin chuột", labelEn: "Mouse battery", value: "12 tháng", valueEn: "12 months" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Logitech", valueEn: "Logitech" },
        { label: "Bảo hành", labelEn: "Warranty", value: "12 tháng", valueEn: "12 months" },
      ],
      ["Không dây 2.4GHz", "Pin bền 24 tháng", "Tiếp nhận Nano USB", "Chuột 1000DPI"],
      ["Wireless 2.4GHz", "Battery lasts 24 months", "Nano USB receiver", "1000DPI mouse"],
      ["ban-phim-logitech-k120", "ban-phim-a4tech-kk3"],
      true, false
    ),

    p(
      "CPU Intel Core i7-13700K Raptor Lake", "Intel Core i7-13700K Raptor Lake Processor",
      "cpu-intel-i7-13700k",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "CPU", "#0ea5e9", "⚡",
      "linear-gradient(135deg,#e8f8ff,#d0f0ff)",
      ["/images/products/cpu-intel-i7-13700k.svg"],
      ["https://www.intel.com/content/dam/products/sku/230494/intel-core-i7-13700k-processor/intel-core-i7-13700k-processor-boxshot.png"],
      `<p><strong>Intel Core i7-13700K — Raptor Lake</strong></p>
<p>Bộ vi xử lý Intel Core i7-13700K thế hệ 13 (Raptor Lake) với kiến trúc hybrid 16 nhân (8 Performance + 8 Efficient), 24 luồng xử lý. Xung nhịp boost tối đa 5.4GHz, phù hợp cho gaming, đồ họa và workstation hiệu suất cao.</p>
<ul>
  <li>Kiến trúc hybrid P-core + E-core tối ưu hiệu năng/watt</li>
  <li>Hỗ trợ DDR4 và DDR5 linh hoạt</li>
  <li>PCIe 5.0 và PCIe 4.0 song song</li>
  <li>Intel UHD Graphics 770 tích hợp</li>
</ul>`,
      `<p><strong>Intel Core i7-13700K — Raptor Lake</strong></p>
<p>13th Gen Intel Core i7-13700K with hybrid architecture: 16 cores (8P+8E), 24 threads, up to 5.4GHz boost. Ideal for gaming, creative workloads, and workstation tasks.</p>
<ul>
  <li>Hybrid P-core + E-core architecture</li>
  <li>Supports both DDR4 and DDR5</li>
  <li>PCIe 5.0 and PCIe 4.0</li>
  <li>Intel UHD Graphics 770 integrated</li>
</ul>`,
      [
        { label: "Nhân/Luồng", labelEn: "Cores/Threads", value: "16 nhân / 24 luồng", valueEn: "16 cores / 24 threads" },
        { label: "Xung nhịp", labelEn: "Base clock", value: "3.4GHz (boost 5.4GHz)", valueEn: "3.4GHz (boost 5.4GHz)" },
        { label: "Cache", labelEn: "Cache", value: "30MB Intel Smart Cache", valueEn: "30MB Intel Smart Cache" },
        { label: "Socket", labelEn: "Socket", value: "LGA1700", valueEn: "LGA1700" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Intel", valueEn: "Intel" },
        { label: "Bảo hành", labelEn: "Warranty", value: "36 tháng", valueEn: "36 months" },
      ],
      ["16 nhân 24 luồng", "Boost 5.4GHz", "Hỗ trợ PCIe 5.0", "Tương thích DDR4/DDR5"],
      ["16 cores 24 threads", "5.4GHz boost", "PCIe 5.0 support", "DDR4/DDR5 compatible"],
      ["mainboard-gigabyte-z790-d", "mainboard-asus-b760m-ayw"],
      true, false
    ),

    p(
      "RAM Kingston 8GB DDR4 3200MHz", "Kingston 8GB DDR4 3200MHz RAM",
      "ram-kingston-8gb-ddr4-3200",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "RAM", "#10b981", "🎴",
      "linear-gradient(135deg,#e8fff5,#d0ffe8)",
      ["/images/products/ram-kingston-8gb-ddr4.svg"],
      ["https://www.kingston.com/images/products/kvr_large/KVR32N22S6_8.jpg"],
      `<p><strong>RAM Kingston ValueRAM 8GB DDR4 3200MHz</strong></p>
<p>Bộ nhớ Kingston KVR32N22S6/8 dung lượng 8GB, chuẩn DDR4 tốc độ 3200MHz, CL22. Thiết kế 1 thanh SODIMM không tản nhiệt, điện áp thấp 1.2V, tương thích rộng rãi với mọi mainboard hỗ trợ DDR4.</p>
<ul>
  <li>Dung lượng 8GB, nâng cấp dễ dàng lên dual-channel 16GB</li>
  <li>Bảo hành trọn đời từ Kingston</li>
  <li>Tương thích Intel và AMD platform</li>
  <li>Tiêu thụ điện năng thấp 1.2V</li>
</ul>`,
      `<p><strong>Kingston ValueRAM 8GB DDR4 3200MHz</strong></p>
<p>Kingston KVR32N22S6/8 8GB DDR4-3200MHz CL22 memory. Single stick, no heatspreader, low voltage 1.2V design. Wide compatibility across Intel and AMD DDR4 motherboards.</p>
<ul>
  <li>8GB capacity, easy dual-channel 16GB upgrade</li>
  <li>Lifetime warranty from Kingston</li>
  <li>Compatible with Intel and AMD platforms</li>
  <li>Low power 1.2V consumption</li>
</ul>`,
      [
        { label: "Dung lượng", labelEn: "Capacity", value: "8GB", valueEn: "8GB" },
        { label: "Xung nhịp", labelEn: "Speed", value: "3200MHz", valueEn: "3200MHz" },
        { label: "CAS Latency", labelEn: "CAS Latency", value: "CL22", valueEn: "CL22" },
        { label: "Điện áp", labelEn: "Voltage", value: "1.2V", valueEn: "1.2V" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Kingston", valueEn: "Kingston" },
        { label: "Bảo hành", labelEn: "Warranty", value: "Trọn đời", valueEn: "Lifetime" },
      ],
      ["DDR4 3200MHz", "Tương thích rộng", "Bảo hành trọn đời", "1.2V thấp điện"],
      ["DDR4 3200MHz", "Wide compatibility", "Lifetime warranty", "Low 1.2V power"],
      ["mainboard-asus-b760m-ayw", "mainboard-gigabyte-b760m-ds3h"],
      true, false
    ),

    p(
      "SSD Samsung 870 EVO 1TB 2.5 inch SATA III", "Samsung 870 EVO 1TB 2.5\" SATA III SSD",
      "ssd-samsung-870-evo-1tb",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "SSD", "#f97316", "💿",
      "linear-gradient(135deg,#fff8e8,#ffedd0)",
      ["/images/products/ssd-samsung-870-evo-1tb.svg"],
      ["https://images.samsung.com/is/image/samsung/p6pim/uk/mz-77e1t0b-eu/gallery/uk-870-evo-sata-iii-2-5-1tb-mz-77e1t0b-eu-frontblack-thumb-534873041"],
      `<p><strong>Samsung 870 EVO 1TB — SATA SSD</strong></p>
<p>Ổ cứng thể rắn Samsung 870 EVO 1TB sử dụng chuẩn SATA III 6Gb/s, công nghệ V-NAND 3-bit MLC thế hệ mới. Tốc độ đọc tuần tự 560MB/s, ghi 530MB/s. Đây là lựa chọn lý tưởng để nâng cấp từ HDD truyền thống.</p>
<ul>
  <li>Công nghệ Samsung V-NAND 3-bit MLC bền bỉ</li>
  <li>Tốc độ đọc/ghi ngẫu nhiên 98K/88K IOPS</li>
  <li>Bộ nhớ đệm thông minh Samsung Intelligent TurboWrite</li>
  <li>Bảo hành 5 năm hoặc 600TBW</li>
</ul>`,
      `<p><strong>Samsung 870 EVO 1TB — SATA SSD</strong></p>
<p>Samsung 870 EVO 1TB SATA III 6Gb/s SSD with V-NAND 3-bit MLC technology. Sequential read 560MB/s, write 530MB/s. Ideal upgrade from traditional HDD.</p>
<ul>
  <li>Samsung V-NAND 3-bit MLC technology</li>
  <li>98K/88K random read/write IOPS</li>
  <li>Samsung Intelligent TurboWrite cache</li>
  <li>5-year warranty or 600TBW</li>
</ul>`,
      [
        { label: "Dung lượng", labelEn: "Capacity", value: "1TB", valueEn: "1TB" },
        { label: "Giao tiếp", labelEn: "Interface", value: "SATA III 6Gb/s", valueEn: "SATA III 6Gb/s" },
        { label: "Đọc/Ghi TT", labelEn: "Seq Read/Write", value: "560/530 MB/s", valueEn: "560/530 MB/s" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Samsung", valueEn: "Samsung" },
        { label: "Bảo hành", labelEn: "Warranty", value: "60 tháng", valueEn: "60 months" },
      ],
      ["560MB/s đọc", "V-NAND thế hệ mới", "Bảo hành 5 năm", "Form factor 2.5\""],
      ["560MB/s read", "New-gen V-NAND", "5-year warranty", "2.5\" form factor"],
      ["ssd-synology-sat5221-960g", "hdd-synology-plus-3-5inch"],
      true, false
    ),

    p(
      "Ổ cứng SSD Synology SAT5221-960G 960GB Enterprise", "Synology SAT5221-960G 960GB Enterprise SATA SSD",
      "ssd-synology-sat5221-960g",
      "Linh kiện máy tính", "cntt-cong-trinh",
      "SSD", "#f47c3c", "💿",
      "linear-gradient(135deg,#e8f0fb,#d0e4f8)",
      ["/images/products/ssd-synology-sat5221.jpg"],
      ["https://www.synology.com/img/products/detail/SAT5221/heading.png"],
      "<p>Synology SAT5221-960G Enterprise SSD, SATA 6Gb/s, đọc 530MB/s, ghi 500MB/s, MTBF 1.5M giờ, tối ưu cho NAS Synology.</p>",
      "<p>Synology SAT5221-960G Enterprise SSD, SATA 6Gb/s, 530MB/s read, 500MB/s write, 1.5M hour MTBF, optimized for Synology NAS.</p>",
      [
        { label: "Dung lượng", labelEn: "Capacity", value: "960GB", valueEn: "960GB" },
        { label: "Giao tiếp", labelEn: "Interface", value: "SATA 6Gb/s", valueEn: "SATA 6Gb/s" },
        { label: "Đọc TT", labelEn: "Seq Read", value: "530 MB/s", valueEn: "530 MB/s" },
        { label: "Ghi TT", labelEn: "Seq Write", value: "500 MB/s", valueEn: "500 MB/s" },
        { label: "MTBF", labelEn: "MTBF", value: "1.5M giờ", valueEn: "1.5M hours" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Synology", valueEn: "Synology" },
        { label: "Bảo hành", labelEn: "Warranty", value: "60 tháng", valueEn: "60 months" },
      ],
      ["Enterprise Grade", "Tối ưu NAS Synology", "530MB/s đọc", "Bảo hành 5 năm"],
      ["Enterprise Grade", "Synology NAS optimized", "530MB/s read", "5-year warranty"],
      ["hdd-synology-16tb-hat3310", "ssd-samsung-870-evo-1tb"],
      true, true
    ),

    // ── SẢN PHẨM CÔNG TRÌNH ─────────────────────────────────────────────────
    p(
      "Bộ điều khiển thuộc hệ máy lấy số DAVISOFT", "DAVISOFT Queue Management Controller",
      "davisoft-qms-controller",
      "Sản phẩm công trình", "cntt-cong-trinh",
      "QMS", "#0f4f9e", "🔢",
      "linear-gradient(135deg,#e8f0fb,#d0e4f8)",
      ["/images/products/davisoft-qms-controller.svg"],
      ["https://davisoft.vn/wp-content/uploads/2020/07/qms-pro.jpg"],
      `<p><strong>Bộ điều khiển hệ thống lấy số DAVISOFT</strong></p>
<p>Bộ điều khiển trung tâm cho hệ thống quản lý hàng đợi (QMS) DAVISOFT, tích hợp màn hình LED hiển thị số thứ tự, loa phát thanh thông báo tự động và phần mềm quản lý. Phù hợp cho ngân hàng, bệnh viện, cơ quan hành chính.</p>
<ul>
  <li>Màn hình LED matrix hiển thị số thứ tự rõ nét</li>
  <li>Loa thông báo âm thanh chất lượng cao</li>
  <li>Kết nối LAN/WiFi quản lý từ xa</li>
  <li>Phần mềm thống kê và báo cáo</li>
</ul>`,
      `<p><strong>DAVISOFT Queue Management Controller</strong></p>
<p>Central controller for DAVISOFT Queue Management System (QMS), integrates LED matrix display, automatic announcement speaker, and management software. Suitable for banks, hospitals, and government offices.</p>
<ul>
  <li>Clear LED matrix ticket number display</li>
  <li>High-quality audio announcement speaker</li>
  <li>LAN/WiFi remote management</li>
  <li>Statistics and reporting software</li>
</ul>`,
      [
        { label: "Thương hiệu", labelEn: "Brand", value: "DAVISOFT", valueEn: "DAVISOFT" },
        { label: "Bảo hành", labelEn: "Warranty", value: "12 tháng", valueEn: "12 months" },
      ],
      ["Tự động lấy số", "Màn hình LED", "Loa thông báo", "Quản lý hàng đợi"],
      ["Automatic ticketing", "LED display", "Announcement speaker", "Queue management"],
      ["may-dem-tien-ribao-bc2000v", "ups-apc-10kva-srt10000xli"],
      true, false
    ),

    p(
      "Bộ lưu điện APC UPS 10KVA SRT10000XLI", "APC Smart-UPS SRT 10KVA 230V",
      "ups-apc-10kva-srt10000xli",
      "Sản phẩm công trình", "cntt-cong-trinh",
      "UPS", "#f97316", "🔋",
      "linear-gradient(135deg,#fff0e8,#ffe0d0)",
      ["/images/products/ups-apc-10kva.jpg"],
      ["https://www.apc.com/shop/us/en/media/images/SRT10000XLI-front.png"],
      "<p>APC Smart-UPS SRT 10KVA, điện áp 230V, online double-conversion, LCD display, phù hợp trung tâm dữ liệu.</p>",
      "<p>APC Smart-UPS SRT 10KVA, 230V, online double-conversion, LCD display, suitable for data centers.</p>",
      [
        { label: "Công suất", labelEn: "Power", value: "10KVA / 10000W", valueEn: "10KVA / 10000W" },
        { label: "Loại", labelEn: "Type", value: "Online Double-Conversion", valueEn: "Online Double-Conversion" },
        { label: "Điện áp vào", labelEn: "Input voltage", value: "220/230/240V", valueEn: "220/230/240V" },
        { label: "Thương hiệu", labelEn: "Brand", value: "APC by Schneider", valueEn: "APC by Schneider" },
        { label: "Bảo hành", labelEn: "Warranty", value: "24 tháng", valueEn: "24 months" },
      ],
      ["10KVA Online UPS", "LCD display", "Double conversion", "Runtime extendable"],
      ["10KVA Online UPS", "LCD display", "Double conversion", "Runtime extendable"],
      ["ups-apc-20kva-srtg20kxli", "davisoft-qms-controller"],
      true, true
    ),

    p(
      "Bộ lưu điện APC UPS 20KVA SRTG20KXLI", "APC Smart-UPS SRT 20KVA 230V",
      "ups-apc-20kva-srtg20kxli",
      "Sản phẩm công trình", "cntt-cong-trinh",
      "UPS", "#f97316", "🔋",
      "linear-gradient(135deg,#fff0e8,#ffe0d0)",
      ["/images/products/ups-apc-20kva.jpg"],
      ["https://www.apc.com/shop/us/en/media/images/SRTG20KXLI-front.png"],
      "<p>APC Smart-UPS SRT 20KVA, online double-conversion, phù hợp cho trung tâm dữ liệu và hạ tầng lớn.</p>",
      "<p>APC Smart-UPS SRT 20KVA, online double-conversion, suitable for data centers and large infrastructure.</p>",
      [
        { label: "Công suất", labelEn: "Power", value: "20KVA / 20000W", valueEn: "20KVA / 20000W" },
        { label: "Loại", labelEn: "Type", value: "Online Double-Conversion", valueEn: "Online Double-Conversion" },
        { label: "Thương hiệu", labelEn: "Brand", value: "APC by Schneider", valueEn: "APC by Schneider" },
        { label: "Bảo hành", labelEn: "Warranty", value: "24 tháng", valueEn: "24 months" },
      ],
      ["20KVA Online UPS", "Double conversion", "Hot-swappable battery", "SNMP monitoring"],
      ["20KVA Online UPS", "Double conversion", "Hot-swappable battery", "SNMP monitoring"],
      ["ups-apc-10kva-srt10000xli", "ups-apc-30kva"],
      true, false
    ),

    p(
      "Bộ lưu điện APC UPS 30KVA SRTG30KXLI", "APC Smart-UPS SRT 30KVA 230V",
      "ups-apc-30kva",
      "Sản phẩm công trình", "cntt-cong-trinh",
      "UPS", "#f97316", "🔋",
      "linear-gradient(135deg,#fff0e8,#ffe0d0)",
      ["/images/products/ups-apc-30kva.jpg"],
      [],
      "<p>APC Smart-UPS SRT 30KVA, cho trung tâm dữ liệu và hạ tầng doanh nghiệp lớn nhất.</p>",
      "<p>APC Smart-UPS SRT 30KVA, for the largest enterprise data centers and infrastructure.</p>",
      [
        { label: "Công suất", labelEn: "Power", value: "30KVA / 30000W", valueEn: "30KVA / 30000W" },
        { label: "Thương hiệu", labelEn: "Brand", value: "APC by Schneider", valueEn: "APC by Schneider" },
        { label: "Bảo hành", labelEn: "Warranty", value: "24 tháng", valueEn: "24 months" },
      ],
      ["30KVA Enterprise UPS", "Online double-conversion", "Parallel ready", "SNMP monitoring"],
      ["30KVA Enterprise UPS", "Online double-conversion", "Parallel ready", "SNMP monitoring"],
      ["ups-apc-20kva-srtg20kxli", "ups-apc-10kva-srt10000xli"],
      true, false
    ),

    p(
      "Ổ cứng HDD Synology Plus Series 3.5 inch 16TB", "Synology Plus Series 3.5\" 16TB HDD",
      "hdd-synology-plus-3-5inch",
      "Sản phẩm công trình", "cntt-cong-trinh",
      "HDD", "#1a6fc4", "🖴",
      "linear-gradient(135deg,#e4f4fa,#c8e9f5)",
      ["/images/products/hdd-synology-16tb.jpg"],
      ["https://www.synology.com/img/products/detail/HAT3310_16T/heading.png"],
      "<p>Synology HAT3310-16T 16TB, SATA 6Gb/s, tối ưu cho hệ thống NAS 24/7, bảo hành 3 năm.</p>",
      "<p>Synology HAT3310-16T 16TB, SATA 6Gb/s, optimized for 24/7 NAS systems, 3-year warranty.</p>",
      [
        { label: "Dung lượng", labelEn: "Capacity", value: "16TB", valueEn: "16TB" },
        { label: "Giao tiếp", labelEn: "Interface", value: "SATA 6Gb/s", valueEn: "SATA 6Gb/s" },
        { label: "Vòng quay", labelEn: "RPM", value: "7200 RPM", valueEn: "7200 RPM" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Synology", valueEn: "Synology" },
        { label: "Bảo hành", labelEn: "Warranty", value: "36 tháng", valueEn: "36 months" },
      ],
      ["16TB dung lượng lớn", "NAS 24/7 optimized", "7200 RPM", "Bảo hành 3 năm"],
      ["16TB large capacity", "NAS 24/7 optimized", "7200 RPM", "3-year warranty"],
      ["ssd-synology-sat5221-960g", "ups-apc-10kva-srt10000xli"],
      true, true
    ),

    p(
      "Camera IP Hikvision DS-2CD2143G2-I 4MP", "Hikvision DS-2CD2143G2-I 4MP IP Camera",
      "camera-hikvision-ds-2cd2143g2",
      "Sản phẩm công trình", "cntt-cong-trinh",
      "Camera", "#10b981", "📷",
      "linear-gradient(135deg,#e8fff5,#d0ffe8)",
      ["/images/products/camera-hikvision-4mp.svg"],
      ["https://www.hikvision.com/content/dam/hikvision/en/marketing/image/latest-image/2020/fixed-dome/DS-2CD2143G2-I_1500500.jpg"],
      `<p><strong>Camera IP Hikvision DS-2CD2143G2-I 4MP AcuSense</strong></p>
<p>Camera dome cố định Hikvision 4MP tích hợp công nghệ AI AcuSense thế hệ 2, cho phép phân biệt người và xe từ xa, giảm thiểu cảnh báo sai. Phạm vi hồng ngoại 40m, chống nước IP67, chống va đập IK10.</p>
<ul>
  <li>Độ phân giải 4MP (2560×1440) ban ngày lẫn ban đêm</li>
  <li>AI AcuSense phát hiện người/xe chính xác</li>
  <li>Hồng ngoại thông minh 40m, tự điều chỉnh cường độ</li>
  <li>IP67 chống bụi/nước, IK10 chống phá hoại</li>
  <li>Wide Dynamic Range (WDR) 120dB</li>
</ul>`,
      `<p><strong>Hikvision DS-2CD2143G2-I 4MP AcuSense IP Camera</strong></p>
<p>Fixed dome IP camera with 2nd generation AcuSense AI for accurate human/vehicle detection, minimizing false alarms. 40m IR range, IP67 weather-proof, IK10 vandal-proof.</p>
<ul>
  <li>4MP (2560×1440) day and night resolution</li>
  <li>AcuSense AI for precise human/vehicle detection</li>
  <li>40m smart IR with auto-intensity adjustment</li>
  <li>IP67 dust/water proof, IK10 vandal resistant</li>
  <li>120dB Wide Dynamic Range (WDR)</li>
</ul>`,
      [
        { label: "Độ phân giải", labelEn: "Resolution", value: "4MP (2560×1440)", valueEn: "4MP (2560×1440)" },
        { label: "IR", labelEn: "IR Range", value: "40m", valueEn: "40m" },
        { label: "Chống nước", labelEn: "Protection", value: "IP67, IK10", valueEn: "IP67, IK10" },
        { label: "AI", labelEn: "AI", value: "AcuSense", valueEn: "AcuSense" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Hikvision", valueEn: "Hikvision" },
        { label: "Bảo hành", labelEn: "Warranty", value: "24 tháng", valueEn: "24 months" },
      ],
      ["4MP AcuSense AI", "IR 40m ban đêm", "IP67 chống nước", "IK10 chống va đập"],
      ["4MP AcuSense AI", "40m night IR", "IP67 waterproof", "IK10 vandal-proof"],
      ["switch-cisco-sg350-28p", "davisoft-qms-controller"],
      true, false
    ),

    p(
      "Switch PoE 24 cổng Cisco SG350-28P", "Cisco SG350-28P 28-Port PoE Managed Switch",
      "switch-cisco-sg350-28p",
      "Sản phẩm công trình", "cntt-cong-trinh",
      "Switch", "#0f4f9e", "🔌",
      "linear-gradient(135deg,#e8f0fb,#d0e4f8)",
      ["/images/products/switch-cisco-sg350-28p.svg"],
      ["https://www.cisco.com/c/dam/en/us/products/collateral/switches/small-business-smart-switches/product-image-sg350-28p.png"],
      `<p><strong>Cisco SG350-28P — 28-Port Gigabit PoE Managed Switch</strong></p>
<p>Switch Gigabit quản lý Cisco SG350-28P với 24 cổng PoE+ Gigabit và 4 cổng combo SFP/Gigabit. Tổng công suất PoE 195W, phù hợp cấp nguồn cho camera IP, điện thoại VoIP và Access Point WiFi. Hỗ trợ VLAN, QoS, ACL và IPv6.</p>
<ul>
  <li>24 cổng PoE+ Gigabit (tổng 195W) + 4 cổng SFP combo</li>
  <li>Quản lý web-based, CLI và SNMP</li>
  <li>Hỗ trợ VLAN 802.1Q, QoS, ACL, STP/RSTP</li>
  <li>Switching capacity 56Gbps, throughput 41.67Mpps</li>
  <li>Bảo hành trọn đời (Limited Lifetime)</li>
</ul>`,
      `<p><strong>Cisco SG350-28P — 28-Port Gigabit PoE Managed Switch</strong></p>
<p>Cisco SG350-28P managed Gigabit switch with 24 PoE+ Gigabit ports and 4 combo SFP/Gigabit ports. Total PoE budget 195W, ideal for powering IP cameras, VoIP phones, and WiFi access points. Supports VLAN, QoS, ACL, and IPv6.</p>
<ul>
  <li>24x PoE+ Gigabit ports (195W total) + 4x SFP combo</li>
  <li>Web-based, CLI and SNMP management</li>
  <li>802.1Q VLAN, QoS, ACL, STP/RSTP support</li>
  <li>56Gbps switching capacity, 41.67Mpps throughput</li>
  <li>Limited Lifetime warranty</li>
</ul>`,
      [
        { label: "Số cổng", labelEn: "Ports", value: "24x PoE+ + 4 SFP", valueEn: "24x PoE+ + 4 SFP" },
        { label: "Tổng PoE", labelEn: "Total PoE", value: "195W", valueEn: "195W" },
        { label: "Tốc độ", labelEn: "Speed", value: "Gigabit 10/100/1000", valueEn: "Gigabit 10/100/1000" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Cisco", valueEn: "Cisco" },
        { label: "Bảo hành", labelEn: "Warranty", value: "Trọn đời", valueEn: "Lifetime" },
      ],
      ["24 cổng PoE+ Gigabit", "195W tổng PoE", "Web managed", "Bảo hành trọn đời"],
      ["24x Gigabit PoE+ ports", "195W total PoE", "Web managed", "Lifetime warranty"],
      ["camera-hikvision-ds-2cd2143g2", "ups-apc-10kva-srt10000xli"],
      true, false
    ),

    // ── THIẾT BỊ NGÂN HÀNG ──────────────────────────────────────────────────
    p(
      "Máy đếm tiền RIBAO BC-2000V", "RIBAO BC-2000V Currency Counter",
      "may-dem-tien-ribao-bc2000v",
      "Thiết bị ngân hàng", "ngan-hang",
      "Máy đếm tiền", "#0f4f9e", "💵",
      "linear-gradient(135deg,#e8f0fb,#d0e4f8)",
      ["/images/products/may-dem-tien-ribao-bc2000v.svg"],
      ["https://ribao-technology.com/wp-content/uploads/2020/10/BC-2000V-600x600.jpg"],
      `<p><strong>Máy đếm tiền RIBAO BC-2000V</strong></p>
<p>Máy đếm tiền chuyên dụng RIBAO BC-2000V tốc độ cao 1000 tờ/phút, tích hợp 3 phương pháp phát hiện tiền giả: UV (tia cực tím), MG (từ tính) và IR (hồng ngoại). Màn hình LED hiển thị rõ ràng, phù hợp cho ngân hàng, siêu thị và doanh nghiệp.</p>
<ul>
  <li>Tốc độ đếm 1000 tờ/phút</li>
  <li>Phát hiện tiền giả 3 lớp: UV + MG + IR</li>
  <li>Dung tích khay nhập 300 tờ, khay xuất 200 tờ</li>
  <li>Màn hình LED 2 mặt hiển thị số lượng</li>
  <li>Tự động dừng khi phát hiện tiền giả hoặc tiền đôi</li>
</ul>`,
      `<p><strong>RIBAO BC-2000V Currency Counter</strong></p>
<p>High-speed RIBAO BC-2000V currency counter at 1000 notes/min with triple counterfeit detection: UV (ultraviolet), MG (magnetic) and IR (infrared). Clear LED display, suitable for banks, supermarkets, and businesses.</p>
<ul>
  <li>1000 notes/minute counting speed</li>
  <li>Triple counterfeit detection: UV + MG + IR</li>
  <li>300-note input hopper, 200-note output stacker</li>
  <li>Dual-sided LED display showing count</li>
  <li>Auto-stop on counterfeit or double-note detection</li>
</ul>`,
      [
        { label: "Tốc độ đếm", labelEn: "Counting speed", value: "1000 tờ/phút", valueEn: "1000 notes/min" },
        { label: "Phát hiện tiền giả", labelEn: "Counterfeit detection", value: "UV, MG, IR", valueEn: "UV, MG, IR" },
        { label: "Dung tích", labelEn: "Hopper capacity", value: "300 tờ", valueEn: "300 notes" },
        { label: "Thương hiệu", labelEn: "Brand", value: "RIBAO", valueEn: "RIBAO" },
        { label: "Bảo hành", labelEn: "Warranty", value: "12 tháng", valueEn: "12 months" },
      ],
      ["1000 tờ/phút", "UV+MG+IR tiền giả", "Màn hình LED", "Dung tích 300 tờ"],
      ["1000 notes/min", "UV+MG+IR counterfeit", "LED display", "300-note capacity"],
      ["may-kiem-tra-tien-gia-oudis-9988t", "may-in-nhiet-epson-tm-t82iii"],
      true, true
    ),

    p(
      "Máy in hóa đơn nhiệt Epson TM-T82III", "Epson TM-T82III Thermal Receipt Printer",
      "may-in-nhiet-epson-tm-t82iii",
      "Thiết bị ngân hàng", "ngan-hang",
      "Máy in nhiệt", "#1a6fc4", "🖨️",
      "linear-gradient(135deg,#e8f0fb,#d0e4f8)",
      ["/images/products/may-in-nhiet-epson-tm-t82iii.svg"],
      ["https://www.epson.com.sg/content/dam/epson/common/products/printers/pos/tm-t82iii.jpg"],
      `<p><strong>Máy in hóa đơn nhiệt Epson TM-T82III</strong></p>
<p>Máy in hóa đơn nhiệt Epson TM-T82III chuyên dụng cho POS, ngân hàng và bán lẻ. Tốc độ in 250mm/s, khổ giấy 80mm chuẩn, hỗ trợ đa kết nối USB + Serial + LAN. Tương thích ESC/POS và các phần mềm bán hàng phổ biến.</p>
<ul>
  <li>Tốc độ in nhiệt 250mm/s</li>
  <li>Khổ giấy 80mm, đường kính cuộn tối đa 83mm</li>
  <li>3 cổng kết nối: USB, Serial, Ethernet LAN</li>
  <li>Tự động cắt giấy (auto-cutter)</li>
  <li>Hỗ trợ in logo, QR code, mã vạch</li>
</ul>`,
      `<p><strong>Epson TM-T82III Thermal Receipt Printer</strong></p>
<p>Epson TM-T82III thermal receipt printer for POS, banking and retail. 250mm/s print speed, 80mm standard paper, multi-interface USB + Serial + LAN. Compatible with ESC/POS and popular POS software.</p>
<ul>
  <li>250mm/s thermal print speed</li>
  <li>80mm paper width, max 83mm roll diameter</li>
  <li>3 interfaces: USB, Serial, Ethernet LAN</li>
  <li>Auto-cutter for clean receipt cuts</li>
  <li>Logo, QR code, and barcode printing support</li>
</ul>`,
      [
        { label: "Tốc độ in", labelEn: "Print speed", value: "250 mm/s", valueEn: "250 mm/s" },
        { label: "Khổ giấy", labelEn: "Paper width", value: "80mm", valueEn: "80mm" },
        { label: "Kết nối", labelEn: "Interface", value: "USB + Serial + LAN", valueEn: "USB + Serial + LAN" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Epson", valueEn: "Epson" },
        { label: "Bảo hành", labelEn: "Warranty", value: "12 tháng", valueEn: "12 months" },
      ],
      ["250mm/s tốc độ cao", "Giấy 80mm chuẩn", "USB/LAN đa cổng", "ESC/POS chuẩn"],
      ["High-speed 250mm/s", "Standard 80mm paper", "USB/LAN multi-port", "ESC/POS standard"],
      ["may-dem-tien-ribao-bc2000v", "davisoft-qms-controller"],
      true, false
    ),

    p(
      "Máy kiểm tra tiền giả UV + MG Oudis 9988T", "Oudis 9988T UV + MG Counterfeit Detector",
      "may-kiem-tra-tien-gia-oudis-9988t",
      "Thiết bị ngân hàng", "ngan-hang",
      "Kiểm tra tiền giả", "#0f4f9e", "🔍",
      "linear-gradient(135deg,#e8f0fb,#d0e4f8)",
      ["/images/products/may-kiem-tra-tien-gia-oudis.svg"],
      ["https://oudis.vn/wp-content/uploads/2021/03/may-kiem-tra-tien-gia-9988t.jpg"],
      `<p><strong>Máy kiểm tra tiền giả Oudis 9988T</strong></p>
<p>Máy kiểm tra tiền giả để bàn Oudis 9988T với 4 phương pháp kiểm tra đồng thời: UV (tia cực tím), MG (từ tính), WM (watermark – hình chìm) và IR (hồng ngoại). Thiết kế nhỏ gọn, đèn LED trắng giúp kiểm tra hình ảnh chi tiết trên tờ tiền.</p>
<ul>
  <li>4 phương pháp kiểm tra: UV + MG + WM + IR</li>
  <li>Đèn LED trắng kiểm tra hoa văn và hình ảnh</li>
  <li>Thiết kế nhỏ gọn, đặt vừa mọi quầy giao dịch</li>
  <li>Không cần cài đặt, cắm là dùng ngay</li>
  <li>Kiểm tra được VND, USD, EUR và nhiều loại tiền khác</li>
</ul>`,
      `<p><strong>Oudis 9988T Counterfeit Detector</strong></p>
<p>Compact desktop counterfeit detector with simultaneous 4-method verification: UV (ultraviolet), MG (magnetic), WM (watermark) and IR (infrared). White LED for detailed banknote inspection.</p>
<ul>
  <li>4-method detection: UV + MG + WM + IR</li>
  <li>White LED light for pattern and image inspection</li>
  <li>Compact design fits any transaction counter</li>
  <li>Plug-and-use, no installation required</li>
  <li>Detects VND, USD, EUR and other currencies</li>
</ul>`,
      [
        { label: "Phương pháp", labelEn: "Detection method", value: "UV + MG + WM + IR", valueEn: "UV + MG + WM + IR" },
        { label: "Đèn", labelEn: "Light", value: "UV + LED trắng", valueEn: "UV + white LED" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Oudis", valueEn: "Oudis" },
        { label: "Bảo hành", labelEn: "Warranty", value: "12 tháng", valueEn: "12 months" },
      ],
      ["4 phương pháp kiểm tra", "Nhỏ gọn tiện lợi", "UV + MG + WM + IR", "Đèn LED trắng"],
      ["4 detection methods", "Compact and convenient", "UV + MG + WM + IR", "White LED light"],
      ["may-dem-tien-ribao-bc2000v", "may-in-nhiet-epson-tm-t82iii"],
      true, false
    ),

    p(
      "Bộ điều khiển thu phí DaviSoft QMS Pro", "DaviSoft QMS Pro Queue Management System",
      "davisoft-qms-pro",
      "Thiết bị ngân hàng", "ngan-hang",
      "QMS", "#0f4f9e", "📋",
      "linear-gradient(135deg,#e8f0fb,#d0e4f8)",
      ["/images/products/davisoft-qms-pro.svg"],
      ["https://davisoft.vn/wp-content/uploads/2020/07/qms-pro.jpg"],
      `<p><strong>DaviSoft QMS Pro — Hệ thống quản lý xếp hàng</strong></p>
<p>Giải pháp quản lý hàng đợi toàn diện DaviSoft QMS Pro dành cho ngân hàng và tổ chức tài chính. Bao gồm máy lấy số, màn hình LED đa chiều, phần mềm quản lý và báo cáo thống kê thời gian thực. Kết nối LAN/WiFi, dễ mở rộng quy mô.</p>
<ul>
  <li>Máy lấy số in vé tự động, hiển thị thông tin đầy đủ</li>
  <li>Màn hình LED đa chiều hiển thị số thứ tự tại nhiều quầy</li>
  <li>Phần mềm quản lý trên PC/tablet theo dõi thời gian thực</li>
  <li>Báo cáo thống kê: thời gian chờ, số lượt phục vụ/ngày</li>
  <li>Mở rộng không giới hạn số quầy và màn hình</li>
</ul>`,
      `<p><strong>DaviSoft QMS Pro — Queue Management System</strong></p>
<p>Comprehensive DaviSoft QMS Pro queue management solution for banks and financial institutions. Includes ticket dispenser, multi-directional LED displays, management software, and real-time reporting. LAN/WiFi connected, easily scalable.</p>
<ul>
  <li>Automatic ticket dispenser with full information printout</li>
  <li>Multi-directional LED displays at multiple service counters</li>
  <li>PC/tablet management software for real-time monitoring</li>
  <li>Statistical reports: wait times, daily service counts</li>
  <li>Unlimited expansion of counters and displays</li>
</ul>`,
      [
        { label: "Kết nối", labelEn: "Connection", value: "LAN / WiFi", valueEn: "LAN / WiFi" },
        { label: "Màn hình", labelEn: "Display", value: "LED đa chiều", valueEn: "Multi-directional LED" },
        { label: "Thương hiệu", labelEn: "Brand", value: "DaviSoft", valueEn: "DaviSoft" },
        { label: "Bảo hành", labelEn: "Warranty", value: "12 tháng", valueEn: "12 months" },
      ],
      ["Quản lý hàng đợi thông minh", "Màn hình LED", "Phần mềm quản lý", "Kết nối LAN/WiFi"],
      ["Smart queue management", "LED display", "Management software", "LAN/WiFi connection"],
      ["may-dem-tien-ribao-bc2000v", "may-in-nhiet-epson-tm-t82iii"],
      true, false
    ),

    // ── GIẢI PHÁP PHẦN MỀM ──────────────────────────────────────────────────
    p(
      "Windows 11 Pro", "Windows 11 Pro",
      "windows-11-pro",
      "Giải pháp phần mềm", "giai-phap-phan-mem",
      "OS", "#0078d4", "🪟",
      "linear-gradient(135deg,#e0f0ff,#c8e4ff)",
      ["/images/products/windows-11-pro.svg"],
      ["https://cdn.mos.cms.futurecdn.net/3Aa6RXCJFDgeFgGGfzSEeN.jpg"],
      `<p><strong>Windows 11 Pro — Bản quyền chính hãng</strong></p>
<p>Windows 11 Pro bản quyền Microsoft chính hãng, phiên bản doanh nghiệp với đầy đủ tính năng bảo mật và quản trị. Phù hợp cho doanh nghiệp vừa và nhỏ cần quản lý tập trung, bảo mật dữ liệu và kết nối từ xa.</p>
<ul>
  <li>Hỗ trợ kết nối Active Directory và Azure AD</li>
  <li>BitLocker mã hóa toàn bộ ổ đĩa bảo vệ dữ liệu</li>
  <li>Remote Desktop cho phép truy cập từ xa</li>
  <li>Hyper-V ảo hóa tích hợp sẵn</li>
  <li>Windows Sandbox chạy ứng dụng an toàn</li>
  <li>Bản quyền vĩnh viễn, kích hoạt 1 lần dùng mãi mãi</li>
</ul>`,
      `<p><strong>Windows 11 Pro — Genuine License</strong></p>
<p>Genuine Microsoft Windows 11 Pro license with full enterprise features for security and management. Ideal for SMBs needing centralized management, data security, and remote access.</p>
<ul>
  <li>Active Directory and Azure AD domain join support</li>
  <li>BitLocker full-disk encryption for data protection</li>
  <li>Remote Desktop Protocol (RDP) for remote access</li>
  <li>Built-in Hyper-V virtualization</li>
  <li>Windows Sandbox for safe app testing</li>
  <li>Perpetual license, activate once, use forever</li>
</ul>`,
      [
        { label: "Phiên bản", labelEn: "Version", value: "Windows 11 Pro", valueEn: "Windows 11 Pro" },
        { label: "Loại", labelEn: "Type", value: "Bản quyền vĩnh viễn", valueEn: "Perpetual license" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Microsoft", valueEn: "Microsoft" },
        { label: "Bảo hành", labelEn: "Warranty", value: "Vĩnh viễn", valueEn: "Lifetime" },
      ],
      ["Bản quyền chính hãng", "BitLocker mã hóa", "Remote Desktop", "Active Directory"],
      ["Genuine license", "BitLocker encryption", "Remote Desktop", "Active Directory"],
      ["kaspersky-internet-security", "microsoft-office-365-business"],
      true, false
    ),

    p(
      "Kaspersky Internet Security", "Kaspersky Internet Security",
      "kaspersky-internet-security",
      "Giải pháp phần mềm", "giai-phap-phan-mem",
      "Antivirus", "#00a651", "🛡️",
      "linear-gradient(135deg,#e8fff0,#d0ffe0)",
      ["/images/products/kaspersky-internet-security.svg"],
      ["https://www.kaspersky.com/content/en-global/images/repository/isc/2020/kaspersky-internet-security-box.png"],
      `<p><strong>Kaspersky Internet Security — Bảo vệ toàn diện</strong></p>
<p>Kaspersky Internet Security cung cấp bảo vệ đa lớp chống lại virus, spyware, ransomware, phishing và các mối đe dọa mạng hiện đại. Được đánh giá cao nhất trong các bài kiểm tra độc lập AV-TEST và AV-Comparatives. Giao diện thân thiện, hiệu suất hệ thống ảnh hưởng tối thiểu.</p>
<ul>
  <li>Bảo vệ thời gian thực chống virus và malware</li>
  <li>Anti-ransomware ngăn chặn mã hóa dữ liệu trái phép</li>
  <li>Anti-phishing bảo vệ khi duyệt web và email</li>
  <li>VPN miễn phí 200MB/ngày tích hợp</li>
  <li>Quản lý mật khẩu và bảo vệ thanh toán trực tuyến</li>
  <li>Bản quyền 1 năm / 1 thiết bị, gia hạn dễ dàng</li>
</ul>`,
      `<p><strong>Kaspersky Internet Security — Comprehensive Protection</strong></p>
<p>Kaspersky Internet Security delivers multi-layer protection against viruses, spyware, ransomware, phishing, and modern cyber threats. Top-rated by independent AV-TEST and AV-Comparatives. Minimal system performance impact.</p>
<ul>
  <li>Real-time protection against viruses and malware</li>
  <li>Anti-ransomware preventing unauthorized data encryption</li>
  <li>Anti-phishing protection during browsing and email</li>
  <li>Free built-in VPN 200MB/day</li>
  <li>Password manager and online payment protection</li>
  <li>1-year / 1-device license, easy renewal</li>
</ul>`,
      [
        { label: "Loại", labelEn: "Type", value: "Internet Security", valueEn: "Internet Security" },
        { label: "Thời hạn", labelEn: "Duration", value: "1 năm", valueEn: "1 year" },
        { label: "Thiết bị", labelEn: "Devices", value: "1 PC", valueEn: "1 PC" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Kaspersky", valueEn: "Kaspersky" },
      ],
      ["Chống virus & malware", "Chống ransomware", "Bảo vệ phishing", "VPN tích hợp"],
      ["Anti-virus & malware", "Anti-ransomware", "Phishing protection", "Built-in VPN"],
      ["windows-11-pro", "microsoft-office-365-business"],
      true, false
    ),

    p(
      "Microsoft Office 365 Business", "Microsoft 365 Business",
      "microsoft-office-365-business",
      "Giải pháp phần mềm", "giai-phap-phan-mem",
      "Office", "#d83b01", "📊",
      "linear-gradient(135deg,#fff0e8,#ffe0d0)",
      ["/images/products/microsoft-office-365.svg"],
      ["https://store-images.s-microsoft.com/image/apps.31571.9007199266245523.b389292a-fa67-4b5c-a534-5f4a74b81e81.bc9c5b58-9c67-4f5c-a53b-7dbd0e20ca58"],
      `<p><strong>Microsoft 365 Business — Gói ứng dụng văn phòng</strong></p>
<p>Microsoft 365 Business cung cấp bộ ứng dụng văn phòng đầy đủ Word, Excel, PowerPoint, Outlook, Teams cùng 1TB lưu trữ OneDrive. Luôn được cập nhật phiên bản mới nhất, hỗ trợ cộng tác nhóm và làm việc từ xa hiệu quả.</p>
<ul>
  <li>Word, Excel, PowerPoint, OneNote — phiên bản mới nhất</li>
  <li>Microsoft Teams chat, gọi video và họp trực tuyến</li>
  <li>1TB OneDrive lưu trữ đám mây cho mỗi người dùng</li>
  <li>Outlook email client chuyên nghiệp</li>
  <li>Cài đặt trên tối đa 5 thiết bị (PC, Mac, tablet, điện thoại)</li>
  <li>Bản quyền 1 năm / 1 người dùng, cập nhật liên tục</li>
</ul>`,
      `<p><strong>Microsoft 365 Business — Office Suite</strong></p>
<p>Microsoft 365 Business provides a complete suite of Word, Excel, PowerPoint, Outlook, Teams plus 1TB OneDrive storage. Always up-to-date with the latest version, supports team collaboration and remote work.</p>
<ul>
  <li>Word, Excel, PowerPoint, OneNote — always latest version</li>
  <li>Microsoft Teams for chat, video calls, and online meetings</li>
  <li>1TB OneDrive cloud storage per user</li>
  <li>Professional Outlook email client</li>
  <li>Install on up to 5 devices (PC, Mac, tablet, phone)</li>
  <li>1-year / 1-user license, continuously updated</li>
</ul>`,
      [
        { label: "Ứng dụng", labelEn: "Apps", value: "Word, Excel, PowerPoint, Teams", valueEn: "Word, Excel, PowerPoint, Teams" },
        { label: "Lưu trữ", labelEn: "Storage", value: "1TB OneDrive", valueEn: "1TB OneDrive" },
        { label: "Thời hạn", labelEn: "Duration", value: "1 năm / 1 người", valueEn: "1 year / 1 user" },
        { label: "Thương hiệu", labelEn: "Brand", value: "Microsoft", valueEn: "Microsoft" },
      ],
      ["Word/Excel/PowerPoint", "Microsoft Teams", "1TB OneDrive", "Cập nhật liên tục"],
      ["Word/Excel/PowerPoint", "Microsoft Teams", "1TB OneDrive", "Always up-to-date"],
      ["windows-11-pro", "kaspersky-internet-security"],
      true, false
    ),
  ];

  await db.collection("products").insertMany(products as Product[]);
  console.log(`✅ Đã thêm ${products.length} sản phẩm`);

  // ── 2. Articles ──────────────────────────────────────────────────────────────
  await db.collection("articles").deleteMany({});

  const articles: Omit<Article, "_id">[] = [
    {
      title: "Chiến lược an ninh vật lý hiệu quả cho doanh nghiệp và cơ sở hạ tầng",
      titleEn: "Effective Physical Security Strategy for Enterprises and Infrastructure",
      slug: "chien-luoc-an-ninh-vat-ly",
      excerpt: "Trong môi trường kinh doanh hiện đại, an ninh vật lý đóng vai trò then chốt trong việc bảo vệ tài sản, con người và thông tin của doanh nghiệp...",
      excerptEn: "In today's modern business environment, physical security plays a key role in protecting assets, people and corporate information...",
      content: `<p>Trong môi trường kinh doanh và xã hội hiện đại, <strong>an ninh vật lý</strong> đóng vai trò then chốt trong việc bảo vệ tài sản, con người và thông tin của doanh nghiệp.</p><h2>1. Đánh giá rủi ro và phân vùng bảo mật</h2><p>Bước đầu tiên là đánh giá toàn diện các rủi ro tiềm ẩn và xác định phân vùng bảo mật phù hợp với từng khu vực.</p><h2>2. Hệ thống camera giám sát AI</h2><p>Camera CCTV thế hệ mới tích hợp AI giúp phát hiện hành vi bất thường và cảnh báo tức thời.</p><h2>3. Kiểm soát ra vào thông minh</h2><p>Hệ thống Access Control hiện đại sử dụng thẻ từ, vân tay hoặc nhận diện khuôn mặt để quản lý quyền truy cập.</p>`,
      contentEn: `<p>In today's modern business environment, <strong>physical security</strong> plays a key role in protecting assets, people and corporate information.</p><h2>1. Risk Assessment and Security Zoning</h2><p>The first step is a comprehensive risk assessment and identifying appropriate security zones for each area.</p><h2>2. AI Surveillance Camera Systems</h2><p>Next-generation CCTV cameras with AI integration detect abnormal behaviors and provide instant alerts.</p><h2>3. Smart Access Control</h2><p>Modern Access Control systems using smart cards, fingerprints or facial recognition to manage access rights.</p>`,
      category: "Bảo mật", categoryEn: "Security",
      emoji: "🔐", bg: "linear-gradient(135deg,#1a6fc4,#00b4d8)",
      readTime: 5, published: true,
      createdAt: new Date("2025-03-15"), updatedAt: new Date("2025-03-15"),
    },
    {
      title: "Dịch vụ Helpdesk & IT Outsourcing – Cho thuê nhân sự IT Onsite",
      titleEn: "Helpdesk & IT Outsourcing – Onsite IT Staffing Services",
      slug: "dich-vu-helpdesk-it-outsourcing",
      excerpt: "Giải pháp thuê ngoài nhân sự IT onsite giúp doanh nghiệp tiết kiệm chi phí vận hành, đảm bảo hệ thống hoạt động liên tục 24/7...",
      excerptEn: "Onsite IT outsourcing solutions help businesses reduce operational costs while ensuring 24/7 continuous system uptime...",
      content: `<p>Trong bối cảnh cạnh tranh ngày càng khốc liệt, các doanh nghiệp đang tìm kiếm giải pháp tối ưu hóa chi phí vận hành CNTT. <strong>IT Outsourcing</strong> là giải pháp được nhiều doanh nghiệp lớn lựa chọn.</p><h2>Tại sao chọn IT Outsourcing?</h2><ul><li>Tiết kiệm chi phí tuyển dụng và đào tạo</li><li>Tiếp cận kỹ thuật viên có chứng chỉ quốc tế</li><li>Linh hoạt điều chỉnh quy mô dịch vụ</li></ul><h2>Helpdesk 24/7</h2><p>GVN cung cấp dịch vụ Helpdesk đa kênh với cam kết SLA rõ ràng và phản hồi trong 2 giờ cho sự cố nghiêm trọng.</p>`,
      contentEn: `<p>In an increasingly competitive landscape, businesses are seeking solutions to optimize IT operational costs. <strong>IT Outsourcing</strong> is the solution chosen by many large enterprises.</p><h2>Why Choose IT Outsourcing?</h2><ul><li>Save on recruitment and training costs</li><li>Access internationally certified technicians</li><li>Flexibly scale services up or down</li></ul><h2>24/7 Helpdesk</h2><p>GVN provides multi-channel Helpdesk with clear SLA commitments and 2-hour response for critical incidents.</p>`,
      category: "Dịch vụ IT", categoryEn: "IT Services",
      emoji: "💻", bg: "linear-gradient(135deg,#43c99b,#00b4d8)",
      readTime: 4, published: true,
      createdAt: new Date("2025-03-08"), updatedAt: new Date("2025-03-08"),
    },
    {
      title: "Dịch vụ bảo trì và nâng cấp hệ thống CNTT cho doanh nghiệp",
      titleEn: "IT System Maintenance & Upgrade Services for Enterprises",
      slug: "dich-vu-bao-tri-nang-cap-cntt",
      excerpt: "Hệ thống CNTT là xương sống của mọi doanh nghiệp hiện đại. Bảo trì định kỳ và nâng cấp đúng thời điểm giúp tối ưu hiệu suất...",
      excerptEn: "IT systems are the backbone of every modern enterprise. Regular maintenance and timely upgrades help optimize performance...",
      content: `<p>Hệ thống CNTT là <strong>xương sống</strong> của mọi doanh nghiệp hiện đại. 80% sự cố có thể phòng ngừa bằng bảo trì định kỳ.</p><h2>Quy trình bảo trì của GVN</h2><ol><li>Kiểm tra toàn diện hệ thống</li><li>Vệ sinh thiết bị và kiểm tra nhiệt độ</li><li>Cập nhật firmware và bản vá bảo mật</li><li>Báo cáo tình trạng và đề xuất nâng cấp</li></ol>`,
      contentEn: `<p>IT systems are the <strong>backbone</strong> of every modern enterprise. 80% of incidents can be prevented through periodic maintenance.</p><h2>GVN Maintenance Process</h2><ol><li>Comprehensive system inspection</li><li>Equipment cleaning and temperature checks</li><li>Firmware and security patch updates</li><li>Status report and upgrade recommendations</li></ol>`,
      category: "Bảo trì", categoryEn: "Maintenance",
      emoji: "⚙️", bg: "linear-gradient(135deg,#f47c3c,#ff9a5c)",
      readTime: 6, published: true,
      createdAt: new Date("2025-02-20"), updatedAt: new Date("2025-02-20"),
    },
    {
      title: "Giải pháp camera giám sát CCTV toàn diện cho nhà máy và văn phòng",
      titleEn: "Comprehensive CCTV Surveillance Solutions for Factories and Offices",
      slug: "giai-phap-camera-giam-sat-cctv",
      excerpt: "Hệ thống camera CCTV hiện đại tích hợp AI phân tích hành vi, nhận diện khuôn mặt và cảnh báo thông minh...",
      excerptEn: "Modern CCTV systems integrate AI for behavior analysis, facial recognition and smart alerts...",
      content: `<p>Camera CCTV thế hệ mới đã trở thành <strong>nền tảng bảo mật thông minh</strong> với khả năng AI tiên tiến.</p><h2>Công nghệ AI Edge</h2><p>Camera Hikvision tích hợp chip AI xử lý trực tiếp trên thiết bị cho nhận diện khuôn mặt, phân tích hành vi và đếm người.</p>`,
      contentEn: `<p>Next-generation CCTV cameras have become <strong>intelligent security platforms</strong> with advanced AI capabilities.</p><h2>Edge AI Technology</h2><p>Hikvision cameras with built-in AI chips process facial recognition, behavior analysis and people counting directly on the device.</p>`,
      category: "Camera & An ninh", categoryEn: "CCTV & Security",
      emoji: "📷", bg: "linear-gradient(135deg,#7c5cbf,#a37de8)",
      readTime: 5, published: true,
      createdAt: new Date("2025-02-10"), updatedAt: new Date("2025-02-10"),
    },
    {
      title: "Tư vấn – Thiết kế – Thi công công trình CNTT từ A đến Z",
      titleEn: "IT Construction Consulting – Design – Implementation from A to Z",
      slug: "tu-van-thiet-ke-thi-cong-cong-trinh",
      excerpt: "Từ tư vấn thiết kế đến thi công và bàn giao, GVN cung cấp giải pháp trọn gói cho hạ tầng CNTT...",
      excerptEn: "From design consulting to implementation and handover, GVN provides complete turnkey IT infrastructure solutions...",
      content: `<p>GVN cung cấp dịch vụ <strong>tư vấn, thiết kế và thi công</strong> toàn diện cho hạ tầng CNTT doanh nghiệp.</p><h2>Phạm vi dịch vụ</h2><ul><li>Thiết kế tổng mặt bằng và sơ đồ kỹ thuật</li><li>Thi công hệ thống điện công nghiệp và điện nhẹ</li><li>Lắp đặt mạng cấu trúc (structured cabling)</li><li>Xây dựng phòng máy chủ chuẩn Tier II</li></ul>`,
      contentEn: `<p>GVN provides comprehensive <strong>consulting, design and construction</strong> services for enterprise IT infrastructure.</p><h2>Service Scope</h2><ul><li>General layout design and technical drawings</li><li>Industrial and low-voltage electrical construction</li><li>Structured cabling installation</li><li>Tier II standard server room construction</li></ul>`,
      category: "Thi công", categoryEn: "Construction",
      emoji: "🏗️", bg: "linear-gradient(135deg,#1a2340,#3a5080)",
      readTime: 7, published: true,
      createdAt: new Date("2025-01-25"), updatedAt: new Date("2025-01-25"),
    },
    {
      title: "Thiết bị chuyên dụng dành cho ngân hàng và tổ chức tài chính",
      titleEn: "Specialized Equipment for Banks and Financial Institutions",
      slug: "thiet-bi-chuyen-dung-ngan-hang",
      excerpt: "GVN cung cấp đầy đủ thiết bị chuyên dụng cho ngân hàng như máy đếm tiền, máy kiểm tra tiền giả, hệ thống xếp hàng...",
      excerptEn: "GVN supplies complete specialized banking equipment including cash counters, counterfeit detectors, and queue management systems...",
      content: `<p>Ngành ngân hàng có yêu cầu đặc thù về <strong>độ chính xác cao và tin cậy tuyệt đối</strong>. GVN đã phục vụ nhiều chi nhánh ngân hàng lớn tại Việt Nam.</p><h2>Danh mục thiết bị</h2><ul><li>Máy đếm tiền RIBAO – 1000 tờ/phút</li><li>Máy kiểm tra tiền giả UV+MG+IR</li><li>Hệ thống QMS lấy số tự động</li><li>Máy in nhiệt Epson TM series</li></ul>`,
      contentEn: `<p>The banking sector requires <strong>high precision and absolute reliability</strong>. GVN has served many major bank branches in Vietnam.</p><h2>Equipment Catalog</h2><ul><li>RIBAO cash counters – 1000 notes/min</li><li>UV+MG+IR counterfeit detectors</li><li>Automatic queue management systems</li><li>Epson TM series thermal printers</li></ul>`,
      category: "Ngân hàng", categoryEn: "Banking",
      emoji: "🏦", bg: "linear-gradient(135deg,#0f4f9e,#1a6fc4)",
      readTime: 4, published: true,
      createdAt: new Date("2025-01-12"), updatedAt: new Date("2025-01-12"),
    },
  ];
  await db.collection("articles").insertMany(articles as Article[]);
  console.log(`✅ Đã thêm ${articles.length} bài viết`);

  // ── 3. Services ──────────────────────────────────────────────────────────────
  await db.collection("services").deleteMany({});

  const services: Omit<Service, "_id">[] = [
    { title: "Dịch vụ bảo trì nâng cấp hệ thống CNTT cho doanh nghiệp", titleEn: "IT System Maintenance & Upgrade for Enterprises", slug: "bao-tri-nang-cap", description: "Bảo trì định kỳ, nâng cấp phần cứng/phần mềm, đảm bảo hệ thống vận hành ổn định 24/7.", descriptionEn: "Periodic maintenance, hardware/software upgrades, ensuring 24/7 stable operation.", emoji: "🖥️", bg: "linear-gradient(135deg,#e4eefa,#cfe0f8)", order: 1, active: true, createdAt: new Date() },
    { title: "Cung cấp Linh kiện CNTT & Thiết bị công trình", titleEn: "IT Components Supply & Construction Equipment", slug: "linh-kien-cntt", description: "Cung cấp linh kiện máy tính, thiết bị mạng, camera chính hãng với giá cạnh tranh.", descriptionEn: "Supply of genuine computer components, network equipment at competitive prices.", emoji: "🖨️", bg: "linear-gradient(135deg,#e4f4fa,#c8e9f5)", order: 2, active: true, createdAt: new Date() },
    { title: "Các thiết bị chuyên dụng dành cho Ngân hàng", titleEn: "Specialized Equipment for Banking", slug: "thiet-bi-ngan-hang", description: "Máy đếm tiền, máy kiểm tra tiền giả, hệ thống xếp hàng, thiết bị POS.", descriptionEn: "Cash counters, counterfeit detectors, queue management systems, POS devices.", emoji: "💳", bg: "linear-gradient(135deg,#e8f0fb,#d0e4f8)", order: 3, active: true, createdAt: new Date() },
    { title: "Dịch vụ Helpdesk & IT Outsourcing – Cho thuê nhân sự IT Onsite", titleEn: "Helpdesk & IT Outsourcing – Onsite IT Staffing", slug: "it-outsourcing", description: "Helpdesk 24/7, kỹ thuật viên onsite, quản lý hạ tầng CNTT theo hợp đồng.", descriptionEn: "24/7 Helpdesk, onsite technicians, contract-based IT infrastructure management.", emoji: "👨‍💻", bg: "linear-gradient(135deg,#e4faf0,#c8f0df)", order: 4, active: true, createdAt: new Date() },
    { title: "Hệ thống Camera giám sát CCTV & Mạng nội bộ", titleEn: "CCTV Surveillance System & Internal Network", slug: "camera-cctv", description: "Thiết kế, lắp đặt hệ thống camera IP, mạng LAN/WAN, WiFi doanh nghiệp tích hợp AI.", descriptionEn: "Design and installation of IP camera systems, LAN/WAN networks, enterprise WiFi.", emoji: "📷", bg: "linear-gradient(135deg,#faf0e4,#f5e0c8)", order: 5, active: true, createdAt: new Date() },
    { title: "Tư vấn – Thiết kế – Thi công công trình", titleEn: "Consulting – Design – Construction", slug: "tu-van-thi-cong", description: "Tư vấn, thiết kế và thi công toàn bộ hạ tầng CNTT, điện, mạng cho nhà máy và văn phòng.", descriptionEn: "Consulting, design and construction of complete IT, electrical and network infrastructure.", emoji: "🏗️", bg: "linear-gradient(135deg,#fae8e4,#f5d0c8)", order: 6, active: true, createdAt: new Date() },
  ];
  await db.collection("services").insertMany(services as Service[]);
  console.log(`✅ Đã thêm ${services.length} dịch vụ`);

  // ── 4. Indexes ───────────────────────────────────────────────────────────────
  await db.collection("products").createIndex({ slug: 1 }, { unique: true });
  await db.collection("products").createIndex({ category: 1 });
  await db.collection("products").createIndex({ catSlug: 1 });
  await db.collection("products").createIndex({ featured: 1 });

  await db.collection("articles").createIndex({ slug: 1 }, { unique: true });
  await db.collection("articles").createIndex({ category: 1 });
  await db.collection("articles").createIndex({ published: 1 });
  await db.collection("articles").createIndex({ createdAt: -1 });

  await db.collection("contacts").createIndex({ status: 1 });
  await db.collection("contacts").createIndex({ createdAt: -1 });

  await db.collection("services").createIndex({ slug: 1 }, { unique: true });
  await db.collection("services").createIndex({ order: 1 });

  console.log("✅ Đã tạo indexes");
  console.log(`🎉 Seed hoàn tất! ${products.length} sản phẩm, ${articles.length} bài viết, ${services.length} dịch vụ`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Lỗi seed:", err);
  process.exit(1);
});
