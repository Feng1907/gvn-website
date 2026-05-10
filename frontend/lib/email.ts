import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "support@gvntmc.com";
const FROM_EMAIL   = "GVN Website <noreply@gvntmc.com>";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

// Gửi thông báo nội bộ cho team GVN
export async function sendContactNotification(data: ContactPayload) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to:   NOTIFY_EMAIL,
    subject: `[GVN] Liên hệ mới: ${data.subject}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#1a6fc4">Liên hệ mới từ website GVN</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px;font-weight:bold;width:120px">Họ tên</td><td style="padding:8px">${data.name}</td></tr>
          <tr style="background:#f8faff"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Điện thoại</td><td style="padding:8px">${data.phone || "—"}</td></tr>
          <tr style="background:#f8faff"><td style="padding:8px;font-weight:bold">Công ty</td><td style="padding:8px">${data.company || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Chủ đề</td><td style="padding:8px">${data.subject}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#f0f5ff;border-radius:8px">
          <strong>Nội dung:</strong>
          <p style="margin-top:8px;white-space:pre-wrap">${data.message}</p>
        </div>
      </div>
    `,
  });
}

// Gửi email xác nhận cho khách hàng
export async function sendContactConfirmation(data: ContactPayload) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to:   data.email,
    subject: "GVN đã nhận được yêu cầu của bạn",
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <div style="background:linear-gradient(135deg,#1a6fc4,#3d8fd5);padding:32px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:white;margin:0;font-size:24px">GVN Technology</h1>
        </div>
        <div style="padding:32px;background:#ffffff;border:1px solid #e0ecfa;border-radius:0 0 12px 12px">
          <p style="color:#1a2340">Kính gửi <strong>${data.name}</strong>,</p>
          <p style="color:#475569;line-height:1.7">
            Chúng tôi đã nhận được yêu cầu liên hệ của bạn về chủ đề <strong>"${data.subject}"</strong>.
            Đội ngũ GVN sẽ phản hồi trong vòng <strong>24 giờ</strong> làm việc.
          </p>
          <div style="margin:24px 0;padding:16px;background:#f0f8ff;border-left:4px solid #1a6fc4;border-radius:4px">
            <p style="color:#475569;margin:0;font-size:14px">Nếu cần hỗ trợ khẩn cấp, vui lòng gọi:</p>
            <p style="color:#1a6fc4;font-size:18px;font-weight:bold;margin:4px 0">028 62515094 – 091 970 4433</p>
          </div>
          <p style="color:#475569">Trân trọng,<br/><strong>Đội ngũ GVN Technology</strong></p>
        </div>
      </div>
    `,
  });
}
