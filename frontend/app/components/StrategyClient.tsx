'use client'

export default function StrategyClient() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Cột Chiến lược */}
        <div>
          <h2 className="text-2xl font-bold text-gvn-blue mb-6">Chiến lược</h2>
          <div className="space-y-4 text-gray-700">
            <p className="border-l-4 border-gvn-orange pl-4">
              Tập trung vào khách hàng: Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu.
            </p>
            <p className="border-l-4 border-gvn-orange pl-4">
              Cải tiến liên tục: Luôn cập nhật những công nghệ mới nhất từ các đối tác Hàn Quốc và thế giới.
            </p>
          </div>
        </div>

        {/* Cột Khách hàng */}
        <div>
          <h2 className="text-2xl font-bold text-gvn-blue mb-6">Khách hàng</h2>
          <p className="text-gray-700 leading-relaxed">
            GVN tự hào là đối tác tin cậy của các tập đoàn lớn như <strong>Shinhan Bank, LG Display, Hyosung</strong> và nhiều doanh nghiệp FDI tại Việt Nam.
          </p>
        </div>
      </div>
    </section>
  )
}