/**
 * Script seed dữ liệu mẫu vào MongoDB
 * Chạy: npx ts-node --project tsconfig.json lib/seed.ts
 * Hoặc: npx tsx lib/seed.ts
 */
import { connectDB } from "./mongodb";
import { Product, Article, Service } from "./types";

async function seed() {
  console.log("🌱 Bắt đầu seed dữ liệu...");
  const mongoose = await connectDB();
  const db = mongoose.connection.db!;

  // ── 1. Products ──────────────────────────────────────────────────────────────
  await db.collection("products").deleteMany({});

  const products: Omit<Product, "_id">[] = [
    { name: "Ổ cứng SSD Synology SAT5221-960G 960GB Enterprise SATA", nameEn: "Synology SAT5221-960G 960GB Enterprise SATA SSD", slug: "ssd-synology-sat5221-960g", category: "Ổ cứng", tag: "SSD", tagColor: "#f47c3c", emoji: "💿", bg: "linear-gradient(135deg,#e8f0fb,#d0e4f8)", inStock: true, featured: true, createdAt: new Date(), updatedAt: new Date() },
    { name: "Ổ cứng HDD Synology Plus SATA 3.5\" 16TB HAT3310-16T", nameEn: "Synology Plus Series SATA 3.5\" 16TB HDD HAT3310-16T", slug: "hdd-synology-16tb-hat3310", category: "Ổ cứng", tag: "16TB", tagColor: "#1a6fc4", emoji: "🖴", bg: "linear-gradient(135deg,#e4f4fa,#c8e9f5)", inStock: true, featured: true, createdAt: new Date(), updatedAt: new Date() },
    { name: "Ổ cứng HDD Synology Plus SATA 3.5\" 12TB HAT3310-12T", nameEn: "Synology Plus Series SATA 3.5\" 12TB HDD HAT3310-12T", slug: "hdd-synology-12tb-hat3310", category: "Ổ cứng", tag: "12TB", tagColor: "#1a6fc4", emoji: "💽", bg: "linear-gradient(135deg,#e4eefa,#cfe0f8)", inStock: true, featured: false, createdAt: new Date(), updatedAt: new Date() },
    { name: "Ổ cứng HDD Synology Plus SATA 8TB HAT3320-8T", nameEn: "Synology Plus Series SATA 8TB HDD 3Y WTY HAT3320-8T", slug: "hdd-synology-8tb-hat3320", category: "Ổ cứng", tag: "8TB", tagColor: "#43c99b", emoji: "🗜️", bg: "linear-gradient(135deg,#e4faf0,#c8f0df)", inStock: true, featured: false, createdAt: new Date(), updatedAt: new Date() },
    { name: "Máy chủ Synology NAS RackStation RS3621xs+ 12-bay", nameEn: "Synology NAS RackStation RS3621xs+ 12-bay Server", slug: "nas-synology-rackstation-rs3621xs", category: "Máy chủ", tag: "NAS", tagColor: "#7c5cbf", emoji: "🖥️", bg: "linear-gradient(135deg,#ede8fb,#d8d0f8)", inStock: true, featured: true, createdAt: new Date(), updatedAt: new Date() },
    { name: "Switch mạng Cisco Catalyst 2960X-48TS-L 48 port", nameEn: "Cisco Catalyst 2960X-48TS-L 48-Port Network Switch", slug: "switch-cisco-2960x-48ts", category: "Thiết bị mạng", tag: "Switch", tagColor: "#0f4f9e", emoji: "🔌", bg: "linear-gradient(135deg,#faf0e4,#f5e0c8)", inStock: true, featured: false, createdAt: new Date(), updatedAt: new Date() },
    { name: "Bộ phát WiFi Ubiquiti UniFi AP-AC-Pro Enterprise", nameEn: "Ubiquiti UniFi AP-AC-Pro Enterprise WiFi Access Point", slug: "wifi-ubiquiti-unifi-ap-ac-pro", category: "Thiết bị mạng", tag: "WiFi", tagColor: "#00b4d8", emoji: "📡", bg: "linear-gradient(135deg,#e4f8fa,#c8f0f5)", inStock: true, featured: false, createdAt: new Date(), updatedAt: new Date() },
    { name: "Laptop Dell Latitude 5540 Core i7-1365U RAM 16GB SSD 512GB", nameEn: "Dell Latitude 5540 Core i7-1365U 16GB RAM 512GB SSD", slug: "laptop-dell-latitude-5540-i7", category: "Laptop", tag: "Laptop", tagColor: "#f47c3c", emoji: "💻", bg: "linear-gradient(135deg,#fae8e4,#f5d0c8)", inStock: false, featured: false, createdAt: new Date(), updatedAt: new Date() },
  ];
  await db.collection("products").insertMany(products as Product[]);
  console.log(`✅ Đã thêm ${products.length} sản phẩm`);

  // ── 2. Articles ──────────────────────────────────────────────────────────────
  await db.collection("articles").deleteMany({});

  const articles: Omit<Article, "_id">[] = [
    { title: "Chiến lược an ninh vật lý hiệu quả cho doanh nghiệp", titleEn: "Effective Physical Security Strategy for Enterprises", slug: "chien-luoc-an-ninh-vat-ly", excerpt: "Trong môi trường kinh doanh hiện đại, an ninh vật lý đóng vai trò then chốt...", excerptEn: "In today's modern business environment, physical security plays a key role...", content: "<p>Nội dung bài viết đầy đủ...</p>", contentEn: "<p>Full article content...</p>", category: "Bảo mật", categoryEn: "Security", emoji: "🔐", bg: "linear-gradient(135deg,#1a6fc4,#00b4d8)", readTime: 5, published: true, createdAt: new Date("2025-03-15"), updatedAt: new Date("2025-03-15") },
    { title: "Dịch vụ Helpdesk & IT Outsourcing – Cho thuê nhân sự IT Onsite", titleEn: "Helpdesk & IT Outsourcing – Onsite IT Staffing Services", slug: "dich-vu-helpdesk-it-outsourcing", excerpt: "Giải pháp thuê ngoài nhân sự IT giúp doanh nghiệp tiết kiệm chi phí...", excerptEn: "IT outsourcing solutions help businesses reduce operational costs...", content: "<p>Nội dung bài viết đầy đủ...</p>", contentEn: "<p>Full article content...</p>", category: "Dịch vụ IT", categoryEn: "IT Services", emoji: "💻", bg: "linear-gradient(135deg,#43c99b,#00b4d8)", readTime: 4, published: true, createdAt: new Date("2025-03-08"), updatedAt: new Date("2025-03-08") },
    { title: "Dịch vụ bảo trì và nâng cấp hệ thống CNTT cho doanh nghiệp", titleEn: "IT System Maintenance & Upgrade Services for Enterprises", slug: "dich-vu-bao-tri-nang-cap-cntt", excerpt: "Hệ thống CNTT là xương sống của mọi doanh nghiệp hiện đại...", excerptEn: "IT systems are the backbone of every modern enterprise...", content: "<p>Nội dung bài viết đầy đủ...</p>", contentEn: "<p>Full article content...</p>", category: "Bảo trì", categoryEn: "Maintenance", emoji: "⚙️", bg: "linear-gradient(135deg,#f47c3c,#ff9a5c)", readTime: 6, published: true, createdAt: new Date("2025-02-20"), updatedAt: new Date("2025-02-20") },
    { title: "Thiết bị chuyên dụng dành cho ngân hàng và tổ chức tài chính", titleEn: "Specialized Equipment for Banks and Financial Institutions", slug: "thiet-bi-chuyen-dung-ngan-hang", excerpt: "GVN cung cấp đầy đủ thiết bị chuyên dụng cho ngân hàng...", excerptEn: "GVN supplies complete specialized banking equipment...", content: "<p>Nội dung bài viết đầy đủ...</p>", contentEn: "<p>Full article content...</p>", category: "Ngân hàng", categoryEn: "Banking", emoji: "🏦", bg: "linear-gradient(135deg,#0f4f9e,#1a6fc4)", readTime: 4, published: true, createdAt: new Date("2025-01-12"), updatedAt: new Date("2025-01-12") },
  ];
  await db.collection("articles").insertMany(articles as Article[]);
  console.log(`✅ Đã thêm ${articles.length} bài viết`);

  // ── 3. Services ──────────────────────────────────────────────────────────────
  await db.collection("services").deleteMany({});

  const services: Omit<Service, "_id">[] = [
    { title: "Dịch vụ bảo trì nâng cấp hệ thống CNTT cho doanh nghiệp", titleEn: "IT System Maintenance & Upgrade for Enterprises", slug: "bao-tri-nang-cap-cntt", description: "Bảo trì định kỳ, nâng cấp phần cứng/phần mềm, đảm bảo hệ thống hoạt động ổn định.", descriptionEn: "Periodic maintenance, hardware/software upgrades, ensuring stable system operation.", emoji: "🖥️", bg: "linear-gradient(135deg,#e4eefa,#cfe0f8)", order: 1, active: true, createdAt: new Date() },
    { title: "Cung cấp Linh kiện CNTT Thiết bị công trình", titleEn: "IT Components Supply & Construction Equipment", slug: "linh-kien-cntt", description: "Cung cấp linh kiện máy tính, thiết bị mạng, camera và thiết bị công trình chính hãng.", descriptionEn: "Supply of genuine computer components, network equipment, cameras and construction devices.", emoji: "🖨️", bg: "linear-gradient(135deg,#e4f4fa,#c8e9f5)", order: 2, active: true, createdAt: new Date() },
    { title: "Các thiết bị chuyên dụng dành cho Ngân hàng", titleEn: "Specialized Equipment for Banking", slug: "thiet-bi-ngan-hang", description: "Máy đếm tiền, máy kiểm tra tiền giả, hệ thống xếp hàng, thiết bị ATM.", descriptionEn: "Cash counters, counterfeit detectors, queue management systems, ATM equipment.", emoji: "💳", bg: "linear-gradient(135deg,#e8f0fb,#d0e4f8)", order: 3, active: true, createdAt: new Date() },
    { title: "Cho thuê nhân sự IT Onsite chuyên nghiệp", titleEn: "Professional Onsite IT Staffing", slug: "it-outsourcing", description: "Dịch vụ Helpdesk, kỹ thuật viên onsite, quản lý hạ tầng CNTT theo hợp đồng.", descriptionEn: "Helpdesk services, onsite technicians, contract-based IT infrastructure management.", emoji: "👨‍💻", bg: "linear-gradient(135deg,#e4faf0,#c8f0df)", order: 4, active: true, createdAt: new Date() },
    { title: "Hệ thống camera giám sát CCTV và mạng nội bộ", titleEn: "CCTV Surveillance System & Internal Network", slug: "camera-cctv-mang", description: "Thiết kế, lắp đặt hệ thống camera IP, mạng LAN/WAN, WiFi cho doanh nghiệp.", descriptionEn: "Design and installation of IP camera systems, LAN/WAN networks, enterprise WiFi.", emoji: "📷", bg: "linear-gradient(135deg,#faf0e4,#f5e0c8)", order: 5, active: true, createdAt: new Date() },
    { title: "Tư vấn – Thiết kế – Thi công công trình", titleEn: "Consulting – Design – Construction", slug: "tu-van-thi-cong", description: "Tư vấn, thiết kế và thi công toàn bộ hạ tầng CNTT, điện, mạng cho công trình.", descriptionEn: "Consulting, design and construction of complete IT, electrical and network infrastructure.", emoji: "🏗️", bg: "linear-gradient(135deg,#fae8e4,#f5d0c8)", order: 6, active: true, createdAt: new Date() },
  ];
  await db.collection("services").insertMany(services as Service[]);
  console.log(`✅ Đã thêm ${services.length} dịch vụ`);

  // ── 4. Tạo indexes ────────────────────────────────────────────────────────────
  await db.collection("products").createIndex({ slug: 1 }, { unique: true });
  await db.collection("products").createIndex({ category: 1 });
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
  console.log("🎉 Seed hoàn tất!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Lỗi seed:", err);
  process.exit(1);
});