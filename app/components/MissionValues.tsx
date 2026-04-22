import Image from 'next/image'

export default function MissionValues() {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
             {/* Bạn thay src bằng ảnh thực tế của bạn */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">Ảnh thi công (Hình 15)</div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gvn-sky mb-4">Về chúng tôi</h2>
            <p className="text-gray-700 mb-6 italic">&quot;Nhà cung cấp giải pháp CNTT số 1&quot;</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gvn-orange mr-2">●</span> Đề xuất cấu hình thiết bị tối ưu
              </li>
              <li className="flex items-start">
                <span className="text-gvn-orange mr-2">●</span> Vận hành mạng lưới hiệu quả
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}