"use client";
import { useState } from "react";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Dịch vụ",   href: "#services" },
  { label: "Sản phẩm",  href: "#products" },
  { label: "Dự án",     href: "#projects" },
  { label: "Tin tức",   href: "#" },
  { label: "Liên hệ",   href: "#" },
];

const contacts = [
  { icon: "📍", text: "123 Nguyễn Văn Linh, Q.7, TP.HCM" },
  { icon: "📞", text: "0123 456 789" },
  { icon: "✉️", text: "info@gvntmc.com" },
  { icon: "🕐", text: "Thứ 2 – Thứ 7: 8:00 – 17:30" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaText}>
          <h2>Bạn sẵn sàng nâng tầm môi trường làm việc?</h2>
          <p>Liên hệ để nhận báo giá và tư vấn giải pháp thiết bị, lắp đặt, dịch vụ toàn diện cho doanh nghiệp bạn hôm nay!</p>
        </div>
        <div className={styles.ctaImg}>🌐</div>
        <button className={styles.btnWhite}>Liên hệ ngay</button>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <div className={styles.logo}>
              <div className={styles.logoCircle}>GVN</div>
              <div>
                <div className={styles.logoName}>CÔNG TY TNHH BẢO DƯỠNG</div>
                <div className={styles.logoSub}>CÔNG NGHỆ TOÀN CẦU VN</div>
              </div>
            </div>
            <p className={styles.desc}>
              Nhà cung cấp tổng thể hạ tầng & dịch vụ CNTT uy tín, chuyên nghiệp tại Việt Nam.
              Đồng hành cùng doanh nghiệp phát triển bền vững.
            </p>
            <div className={styles.socials}>
              {["📘","💼","▶️","💬"].map((s, i) => (
                <button key={i} className={styles.socialBtn}>{s}</button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Liên kết nhanh</h4>
            <nav className={styles.links}>
              {quickLinks.map((l) => (
                <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.colTitle}>Thông tin liên hệ</h4>
            <div className={styles.contacts}>
              {contacts.map((c, i) => (
                <div key={i} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={styles.colTitle}>Đăng ký nhận bản tin</h4>
            <p className={styles.newsletterDesc}>
              Nhận thông tin chi tiết, mẹo và cập nhật mới nhất về cách mạng hóa không gian làm việc.
            </p>
            <div className={styles.newsletterRow}>
              <input
                className={styles.input}
                type="email"
                placeholder="Nhập email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              />
              <button className={styles.subscribeBtn} onClick={handleSubscribe}>ĐĂNG KÝ</button>
            </div>
            {subscribed && <p className={styles.successMsg}>✓ Đăng ký thành công!</p>}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© Copyright 2025 | Thiết kế website bởi <a href="#" className={styles.bottomLink}>Mắt Bão WS</a>.</span>
          <span>GVN – Giải pháp CNTT chuyên biệt tại Việt Nam</span>
        </div>
      </footer>

      {/* Floating buttons */}
      <div className={styles.floatBtns}>
        <button className={`${styles.floatBtn} ${styles.phone}`} title="Gọi điện">📞</button>
        <button className={`${styles.floatBtn} ${styles.zalo}`}  title="Zalo">💬</button>
      </div>
      <button
        className={styles.backTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Lên đầu trang"
      >
        ↑
      </button>
    </>
  );
}