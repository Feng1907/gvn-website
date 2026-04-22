"use client";
import { useState } from "react";
import { useLang } from "@/components/LangContext";
import styles from "./page.module.css";

export default function ContactPage() {
  const { t } = useLang();
  const p = t.contactPage;

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: kết nối API gửi mail
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className={styles.page}>

      {/* ── FORM SECTION ── */}
      <section className={styles.formSection}>
        <h1 className={styles.title}>{p.title}</h1>

        <div className={styles.formCard}>
          {/* Họ và Tên */}
          <input
            className={styles.input}
            type="text"
            placeholder={p.name}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          {/* Email + Phone */}
          <div className={styles.row}>
            <input
              className={styles.input}
              type="email"
              placeholder={p.email}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={styles.input}
              type="tel"
              placeholder={p.phone}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          {/* Nội dung */}
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            placeholder={p.message}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={6}
          />

          {/* Submit */}
          <button className={styles.submitBtn} onClick={handleSubmit}>
            {sent ? p.sent : p.submit}
          </button>
        </div>
      </section>

      {/* ── INFO SECTION xanh ── */}
      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>

          {/* Điện thoại */}
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📞</div>
            <h3 className={styles.infoTitle}>{p.phoneTitle}</h3>
            <p className={styles.infoDesc}>{p.phoneDesc}</p>
            <p className={styles.infoValue}>028 62515094 – 091 970 4433</p>
          </div>

          {/* Chat */}
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>✉️</div>
            <h3 className={styles.infoTitle}>{p.chatTitle}</h3>
            <p className={styles.infoDesc}>{p.chatDesc}</p>
            <p className={styles.infoValue}>support@gvntmc.com</p>
          </div>

          {/* Địa chỉ */}
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>🏢</div>
            <h3 className={styles.infoTitle}>{p.addressTitle}</h3>
            <p className={styles.infoDesc}>{p.addressDesc}</p>
            <p className={styles.infoValue}>
              <strong>HCM:</strong> 51 Đường số 9, Khu Dân Cư Him Lam, Phường Tân Hưng, TP. HCM, Việt Nam
            </p>
            <p className={styles.infoValue} style={{ marginTop: 8 }}>
              <strong>HN:</strong> F9 tòa nhà Kim Ánh, 78/1 Duy Tân, Cầu Giấy, Hà Nội
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}