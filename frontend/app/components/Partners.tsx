import styles from "./Partners.module.css";

const partners = [
  { name: "SHINHAN BANK VIETNAM", emoji: "🏦", color: "#003087" },
  { name: "WOORI BANK VIETNAM",   emoji: "🏦", color: "#005baa" },
  { name: "IBK VIETNAM",          emoji: "🏦", color: "#c8102e" },
  { name: "BNK 부산은행",           emoji: "🏦", color: "#00457c" },
  { name: "POSCO ICT",            emoji: "🏭", color: "#00529b" },
  { name: "LG Display",           emoji: "📺", color: "#a50034" },
  { name: "GS 건설",               emoji: "🏗️", color: "#006400" },
  { name: "KEB 하나은행",           emoji: "🏦", color: "#00653a" },
  { name: "CJ 올리브네트웍스",      emoji: "🍔", color: "#e60012" },
  { name: "HYOSUNG",              emoji: "⚙️", color: "#003087" },
  { name: "DOOSAN",               emoji: "🏭", color: "#c8102e" },
  { name: "COMET",                emoji: "🔧", color: "#f47c3c" },
  { name: "ORION",                emoji: "🍫", color: "#d40000" },
  { name: "GS E&C",               emoji: "🏗️", color: "#006400" },
  { name: "KOTRA",                emoji: "🌐", color: "#003087" },
  { name: "JEVISCO",              emoji: "🔩", color: "#00529b" },
  { name: "한국문화원",              emoji: "🎭", color: "#c8102e" },
  { name: "Gap International",    emoji: "📈", color: "#003087" },
  { name: "HENG SUNG",            emoji: "🏭", color: "#5a6a8a" },
  { name: "Dorydo Electronics",   emoji: "🔌", color: "#1a6fc4" },
];

export default function Partners() {
  return (
    <section className={styles.section} id="partners">
      {/* Testimonial */}
      <div className={styles.testimonial}>
        <h2>Khách hàng nói về gvntmc.com</h2>
        <p className={styles.sub}>Chất lượng dịch vụ tận tâm đã giúp doanh nghiệp an tâm phát triển cùng gvntmc.com</p>
        <div className={styles.avatar}>👩</div>
        <div className={styles.stars}>★★★★★</div>
        <p className={styles.quote}>
          &quot;Chúng tôi đã chọn gvntmc.com vì dịch vụ lắp đặt hệ thống mạng, điện, máy tính vô cùng nhanh chóng và
          chuyên nghiệp. Đội ngũ hỗ trợ rất tận tâm, giúp công ty ổn định vận hành ngay từ ngày đầu. Địa chỉ dễ
          tìm, thiết bị hiện đại, chi phí hợp lý. Tôi hoàn toàn hài lòng và sẽ tiếp tục đồng hành lâu dài!&quot;
        </p>
        <div className={styles.author}>Linh CEO, InnovateTech Solutions</div>
      </div>

      {/* Partners grid */}
      <h2 className={`section-label ${styles.partnersTitle}`}>Đối tác tin cậy của chúng tôi</h2>

      <div className={styles.grid}>
        {partners.map((p, i) => (
          <div className={styles.card} key={i}>
            <span className={styles.emoji}>{p.emoji}</span>
            <span className={styles.name} style={{ color: p.color }}>{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}