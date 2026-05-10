# GVN Website — Project Plan & Progress

> **Stack:** Next.js 16 (App Router, TypeScript, CSS Modules) + Spring Boot 3.3 (Java 21) + MongoDB
> **Mục tiêu:** Website B2B song ngữ (Việt/Anh) cho công ty IT services GVN TMC

---

## Tổng quan tiến độ

| Hạng mục | Trạng thái | Hoàn thành |
|----------|-----------|-----------|
| Cấu trúc dự án & DevOps | ✅ Hoàn thành | 100% |
| Frontend — Trang chủ | ✅ Hoàn thành | 100% |
| Frontend — Sản phẩm | ✅ Hoàn thành | 100% |
| Frontend — Dịch vụ | ✅ Hoàn thành | 100% |
| Frontend — Tin tức/Blog | ✅ Hoàn thành | 100% |
| Frontend — Dự án | ✅ Hoàn thành | 100% |
| Frontend — Giới thiệu | ✅ Hoàn thành | 100% |
| Frontend — Liên hệ | ✅ Hoàn thành | 100% |
| Hệ thống song ngữ | ✅ Hoàn thành | 100% |
| API Layer (Next.js routes) | ✅ Hoàn thành | 100% |
| Spring Boot Backend | ✅ Hoàn thành | 100% |
| Database Models | ✅ Hoàn thành | 100% |
| Dữ liệu sản phẩm (25 sản phẩm) | ✅ Hoàn thành | 100% |
| Kết nối MongoDB (production) | ⬜ Chưa làm | 0% |
| Admin Panel | ⬜ Chưa làm | 0% |
| Authentication | ⬜ Chưa làm | 0% |
| Deploy / CI-CD | ⬜ Chưa làm | 0% |

---

## Phase 1 — Cấu trúc dự án ✅

- [x] Monorepo: `frontend/` (Next.js 16) + `backend/` (Spring Boot 3.3)
- [x] TypeScript cấu hình cho frontend
- [x] `CLAUDE.md` + `AGENTS.md` — tài liệu hướng dẫn cho AI agents
- [x] `.env.local` — biến môi trường (`MONGODB_URI`, `RESEND_API_KEY`)
- [x] ESLint cấu hình với Next.js rules
- [x] CSS Modules + Tailwind (kết hợp song song)
- [x] Path alias `@/` → `frontend/app/`

---

## Phase 2 — Hệ thống song ngữ ✅

File chính: `frontend/app/components/LangContext.tsx`

- [x] React Context `LangContext` cho toàn site
- [x] Hook `useLang()` → `{ lang, setLang, t }`
- [x] Object translations đầy đủ với nhánh `vi` / `en`
- [x] Language switcher trong Navbar
- [x] Dual-field trong DB: `title`/`titleEn`, `description`/`descriptionEn`, `specs[].value`/`specs[].valueEn`

---

## Phase 3 — Frontend Pages ✅

### Trang chủ (`/`) ✅
- [x] Hero section với thống kê công ty
- [x] Featured products carousel (`ProductCarousel.tsx`)
- [x] 6 dịch vụ chính showcase
- [x] Partners / Testimonials section
- [x] Footer với địa chỉ HCM & Hà Nội

### Sản phẩm (`/products`) ✅
- [x] Grid 25+ sản phẩm hardcoded (fallback từ API)
- [x] 4 danh mục lọc với subcategories mở rộng:
  - IT Components (bàn phím, bo mạch, CPU, RAM, SSD, tản nhiệt)
  - IT & Construction (mạng, camera, switch)
  - Banking Equipment (đếm tiền, phát hiện tiền giả, máy in nhiệt)
  - Software Solutions (Windows 11, Kaspersky, Office 365)
- [x] Sidebar filter với checkbox subcategory
- [x] Phân trang (12 sản phẩm/trang)
- [x] Sort: mặc định / A-Z / Z-A
- [x] Skeleton loading state
- [x] Image fallback (local → CDN URL → emoji)

### Chi tiết sản phẩm (`/products/[id]`) ✅
- [x] Gallery ảnh với thumbnails
- [x] Tab interface: Mô tả / Thông số kỹ thuật / Đánh giá
- [x] Bảng thông số kỹ thuật song ngữ
- [x] Danh sách tính năng với checkmarks
- [x] Sản phẩm liên quan (≥3 sản phẩm)
- [x] CTA: Yêu cầu báo giá / Gọi ngay
- [x] Social sharing: Facebook, Twitter, Email, Copy Link
- [x] Light theme (white) — khác với dark glassmorphism phần còn lại
- [x] `SmartImg` component với 3-tier fallback

### Dịch vụ (`/services`) ✅
- [x] 6 dịch vụ chính với card layout + hover overlay
- [x] Grid responsive

### Chi tiết dịch vụ (`/services/[slug]`) ✅
- [x] Hero section với category badge
- [x] Mô tả đầy đủ + danh sách tính năng
- [x] Sidebar dịch vụ liên quan + CTA
- [x] Nội dung song ngữ

### Tin tức (`/news`) ✅
- [x] 6 bài viết hardcoded (fallback từ API)
- [x] Featured article (hiển thị lớn)
- [x] Grid các bài còn lại
- [x] 5 danh mục: Bảo mật, IT Services, Bảo trì, Camera & An ninh, Xây dựng, Banking
- [x] Tìm kiếm bài viết
- [x] Filter theo danh mục
- [x] Sidebar: Recent posts + CTA widget

### Chi tiết tin tức (`/news/[slug]`) ✅
- [x] Hero với emoji + gradient background
- [x] Metadata: danh mục, ngày, thời gian đọc
- [x] Nội dung HTML đầy đủ (song ngữ)
- [x] Social sharing: Facebook, LinkedIn, Copy Link
- [x] Sidebar CTA tư vấn + bài viết liên quan

### Dự án (`/projects`) ✅
- [x] 8 dự án nổi bật (Shinhan Bank, Comet Vina, CJ Foods, Hyosung, v.v.)
- [x] Filter theo danh mục dự án
- [x] Load more
- [x] Card layout song ngữ

### Chi tiết dự án (`/projects/[slug]`) ✅
- [x] Hero image với overlay + breadcrumb
- [x] Scope of work (checklist)
- [x] Sidebar: Client, Danh mục, Năm hoàn thành
- [x] CTA + dự án liên quan

### Giới thiệu (`/about`) ✅
- [x] 7 section: Giới thiệu, Về chúng tôi, Phương châm, Chiến lược, Khách hàng, Triết lý kinh doanh, CTA banner
- [x] Emoji-based visuals, nội dung song ngữ

### Liên hệ (`/contact`) ✅
- [x] Form: Tên, Email, SĐT, Nội dung (có validation)
- [x] States: mặc định / đang gửi / đã gửi thành công
- [x] Info: SĐT, Email, Địa chỉ HCM & Hà Nội
- [x] API gửi email (Resend)

---

## Phase 4 — Components ✅

| Component | Chức năng | Trạng thái |
|-----------|-----------|-----------|
| `Navbar.tsx` | Navigation + language switcher | ✅ |
| `Hero.tsx` | Homepage hero + stats | ✅ |
| `Products.tsx` | Featured products section | ✅ |
| `Services.tsx` | 6 services showcase | ✅ |
| `ProductCard.tsx` | Card sản phẩm | ✅ |
| `ServiceCard.tsx` | Card dịch vụ | ✅ |
| `ProjectCard.tsx` | Card dự án | ✅ |
| `Partners.tsx` | Testimonials section | ✅ |
| `Footer.tsx` | Site footer | ✅ |
| `ProductCarousel.tsx` | Carousel ảnh sản phẩm | ✅ |
| `SmartImg.tsx` | Image với 3-tier fallback | ✅ |
| `LangContext.tsx` | Bilingual context provider | ✅ |
| `AboutHero.tsx` | About page hero | ✅ |
| `MissionValues.tsx` | Mission/values section | ✅ |
| `StrategyClient.tsx` | Strategy section (client component) | ✅ |

---

## Phase 5 — Database Models ✅

File: `frontend/lib/types.ts` + `frontend/lib/models/`

| Model | Fields chính | Trạng thái |
|-------|-------------|-----------|
| `Product` | name, slug, category, images[], specs[], features[], price, emoji, bg | ✅ |
| `Service` | title, slug, description, emoji, bg, order, active | ✅ |
| `Article` | title, slug, excerpt, content, category, emoji, readTime, published | ✅ |
| `Project` | title, slug, category, images[], client, location, completedYear, featured | ✅ |
| `Contact` | name, email, phone, company, subject, message, status | ✅ |

---

## Phase 6 — API Routes (Next.js) ✅

Helper: `frontend/lib/apiHelper.ts` — `ok()`, `created()`, `notFound()`, `badRequest()`, `serverError()`

| Route | Method | Chức năng | Trạng thái |
|-------|--------|-----------|-----------|
| `/api/products` | GET, POST | Danh sách & tạo sản phẩm | ✅ |
| `/api/products/[id]` | GET, PUT, DELETE | CRUD sản phẩm | ✅ |
| `/api/services` | GET | Danh sách dịch vụ active | ✅ |
| `/api/services/[slug]` | GET | Chi tiết dịch vụ theo slug | ✅ |
| `/api/news` | GET | Danh sách bài đã publish | ✅ |
| `/api/news/[slug]` | GET | Chi tiết bài viết | ✅ |
| `/api/contacts` | POST | Gửi form liên hệ + email | ✅ |
| `/api/projects` | GET | Danh sách dự án | ✅ |
| `/api/projects/[slug]` | GET | Chi tiết dự án | ✅ |

> **Known bug:** Một số route single-item nằm trong folder tĩnh `id/` thay vì `[id]/` — cần sửa.

---

## Phase 7 — Spring Boot Backend ✅

Base URL: `http://localhost:8080/api/v1/`

| Controller | Endpoints | Trạng thái |
|-----------|-----------|-----------|
| `ProductController` | GET /products, GET /products/{slug}, POST, PUT/{id}, DELETE/{id} | ✅ |
| `ArticleController` | GET /news, GET /news/{slug} | ✅ |
| `ServiceController` | GET /services, GET /services/{slug} | ✅ |
| `ProjectController` | GET /projects, GET /projects/{slug} | ✅ |
| `ContactController` | POST /contacts, GET /contacts | ✅ |
| `SearchController` | GET /search?q=xxx (toàn site) | ✅ |

**Features:**
- [x] Standard response: `{ success, data }`
- [x] Paginated: `{ content[], totalElements, totalPages, currentPage, size }`
- [x] CORS config cho frontend (localhost:3000)
- [x] Global exception handler
- [x] Spring Security cấu hình
- [x] MongoDB integration

---

## Phase 8 — API Abstraction Layer ✅

File: `frontend/lib/apiClient.ts`

- [x] Abstraction layer cho phép Next.js gọi cả internal API route lẫn Spring Boot
- [x] Config-based switching giữa hai backend
- [x] Type-safe responses

---

## Phase 9 — Dữ liệu sản phẩm (25 sản phẩm) ✅

- [x] 25 sản phẩm hardcoded trong `products/page.tsx` và `products/[id]/page.tsx`
- [x] Ảnh sản phẩm tại `frontend/public/images/products/`
- [x] External CDN URL fallbacks cho mỗi sản phẩm
- [x] Mô tả HTML song ngữ đầy đủ
- [x] Thông số kỹ thuật song ngữ
- [x] Related products mapping

---

## Backlog — Việc còn lại

### Admin Panel ⬜
- [ ] Trang quản trị sản phẩm (CRUD với UI)
- [ ] Quản lý bài viết / tin tức
- [ ] Quản lý dự án
- [ ] Xem & xử lý liên hệ (status: new → reading → replied → closed)
- [ ] Dashboard thống kê (số liên hệ mới, v.v.)

### Authentication ⬜
- [ ] Login admin
- [ ] JWT / Session management
- [ ] Route protection (middleware)
- [ ] Role-based access (admin / editor)

### Kết nối dữ liệu thực (MongoDB) ⬜
- [ ] Migrate 25 sản phẩm hardcoded → MongoDB collection
- [ ] Migrate 6 bài viết hardcoded → articles collection
- [ ] Migrate 8 dự án hardcoded → projects collection
- [ ] Seed script đầy đủ (`npx tsx lib/seed.ts`)
- [ ] Pages đọc từ DB thay vì hardcode

### Bug Fixes ⬜
- [ ] Sửa API route tĩnh: folder `id/` → `[id]/` cho products, news, projects, contacts

### Deploy ⬜
- [ ] Vercel deploy cho frontend
- [ ] VPS / Cloud deploy cho Spring Boot backend
- [ ] MongoDB Atlas setup + migrate data
- [ ] Domain + SSL
- [ ] CI/CD pipeline (GitHub Actions)

### Cải thiện ⬜
- [ ] SEO: sitemap.xml + robots.txt đầy đủ
- [ ] Tính năng tìm kiếm toàn site trên frontend (gọi `/api/v1/search`)
- [ ] Analytics integration (Google Analytics / Plausible)
- [ ] Image optimization + lazy loading

---

## Kiến trúc tổng quan

```
Browser
  │
  ▼
Next.js 16 (localhost:3000)
  ├── App Router Pages (/about, /services, /products, /news, /projects, /contact)
  ├── API Routes (/api/*)  ──────────────────────┐
  └── CSS Modules + Tailwind                     │
                                                  ▼
                                        Spring Boot (localhost:8080)
                                          └── /api/v1/*
                                                  │
                                                  ▼
                                             MongoDB
                                    (products, services, articles,
                                     projects, contacts)
```

---

*Cập nhật lần cuối: 2026-05-10*
