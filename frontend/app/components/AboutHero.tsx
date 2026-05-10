export default function AboutHero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12"> {/* Căn giữa và giới hạn độ rộng */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-2 border-gvn-blue pb-2 inline-block">
        Giới thiệu
      </h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg"> {/* Tạo khoảng cách dòng và cỡ chữ */}
        <p className="text-justify font-medium">
          <span className="text-gvn-blue font-bold">GVN</span> được thành lập vào năm 2013...
        </p>
        <p className="text-justify">
          Với nhiều năm kinh nghiệm triển khai và bảo trì hạ tầng CNTT cho các tổ chức tài chính, tập đoàn lớn...
        </p>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Nhà cung cấp tổng thể hạ tầng & dịch vụ CNTT
        </h2>
        <div className="flex justify-center gap-6"> {/* Tạo 2 nút bấm nằm ngang */}
          <button className="bg-gvn-blue hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition">
            Nhận báo giá
          </button>
          <button className="border-2 border-gvn-blue text-gvn-blue hover:bg-blue-50 font-bold py-3 px-10 rounded-lg transition">
            Dự án tiêu biểu
          </button>
        </div>
      </div>
    </section>
  )
}