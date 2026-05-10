import styles from "./Services.module.css";

const services = [
  { icon: "🖥️", title: "Dịch vụ bảo trì nâng cấp\nhệ thống CNTT cho doanh nghiệp", bg: "linear-gradient(135deg,#e4eefa,#cfe0f8)" },
  { icon: "🖨️", title: "Cung cấp Linh kiện CNTT\nThiết bị công trình",              bg: "linear-gradient(135deg,#e4f4fa,#c8e9f5)" },
  { icon: "💳", title: "Các thiết bị chuyên dụng dành cho\nNgân hàng",              bg: "linear-gradient(135deg,#e8f0fb,#d0e4f8)" },
  { icon: "👨‍💻", title: "Cho thuê nhân sự IT onsite\nchuyên nghiệp",                bg: "linear-gradient(135deg,#e4faf0,#c8f0df)" },
  { icon: "📷", title: "Hệ thống camera giám sát\nCCTV và mạng nội bộ",             bg: "linear-gradient(135deg,#faf0e4,#f5e0c8)" },
  { icon: "🏗️", title: "Thi công, xây dựng\nhạ tầng công trình",                   bg: "linear-gradient(135deg,#fae8e4,#f5d0c8)" },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="section-header">
        <h2 className="section-label">Dịch vụ của Chúng tôi</h2>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.imgBox} style={{ background: s.bg }}>
              <span className={styles.icon}>{s.icon}</span>
            </div>
            <div className={styles.label}>{s.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}