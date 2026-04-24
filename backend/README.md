# GVN Backend — Spring Boot REST API

Java 21 + Spring Boot 3.3 + Spring Data MongoDB

## Chạy local

```bash
# Yêu cầu: Java 21, MongoDB đang chạy tại localhost:27017
cd backend
./mvnw spring-boot:run
# hoặc: mvn spring-boot:run

# Server khởi động tại http://localhost:8080
```

## Env variables

| Biến | Mặc định | Mô tả |
|------|----------|-------|
| `MONGODB_URI` | `mongodb://localhost:27017/gvntmc` | MongoDB connection string |
| `PORT` | `8080` | Server port |

## Endpoints

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `/api/v1/products` | Danh sách sản phẩm (page, size, category, featured) |
| GET | `/api/v1/products/{slug}` | Chi tiết sản phẩm |
| POST | `/api/v1/products` | Tạo sản phẩm |
| PUT | `/api/v1/products/{id}` | Cập nhật sản phẩm |
| DELETE | `/api/v1/products/{id}` | Xóa sản phẩm |
| GET | `/api/v1/services` | Danh sách dịch vụ (active) |
| GET | `/api/v1/services/{slug}` | Chi tiết dịch vụ |
| GET | `/api/v1/projects` | Danh sách dự án |
| GET | `/api/v1/projects/{slug}` | Chi tiết dự án |
| GET | `/api/v1/news` | Danh sách bài viết (published, category) |
| GET | `/api/v1/news/{slug}` | Nội dung đầy đủ bài viết |
| POST | `/api/v1/contacts` | Gửi form liên hệ |
| GET | `/api/v1/search?q=cisco` | Tìm kiếm toàn bộ |

## Response format

```json
{ "success": true,  "data": { ... } }
{ "success": true,  "data": { "items": [...], "total": 25, "page": 0, "totalPages": 3 } }
{ "success": false, "error": "Mô tả lỗi" }
```

## Deploy (Railway.app)

1. Connect GitHub repo → Railway detects Java/Maven tự động
2. Set env var `MONGODB_URI` (MongoDB Atlas)
3. Set env var `PORT=8080`
