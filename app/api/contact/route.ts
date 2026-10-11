import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "developmentappstean@gmail.com";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, company, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const safeMsg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const initial = name.charAt(0).toUpperCase();

  const infoRows = [
    phone   ? { label: "📞 Phone",   value: phone   } : null,
    company ? { label: "🏢 Company", value: company } : null,
    subject ? { label: "💬 Subject", value: subject } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  const infoHtml = infoRows.map(row => `
    <tr>
      <td style="padding:0 0 14px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#EFF6FC;border-radius:10px;overflow:hidden;">
          <tr>
            <td width="4" style="background:#2563A6;font-size:0;">&nbsp;</td>
            <td style="padding:12px 16px;">
              <p style="margin:0 0 2px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;font-weight:600;">${row.label}</p>
              <p style="margin:0;font-size:14px;color:#1f2937;font-weight:500;">${row.value}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`).join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:40px 16px;">
    <tr><td align="center">

      <!-- Card -->
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">

        <!-- ── HEADER ── -->
        <tr>
          <td style="background:#2563A6;padding:36px 40px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0 0 6px;font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.75);text-transform:uppercase;font-weight:600;">Portfolio Contact</p>
                  <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;line-height:1.2;">New Message Received</h1>
                </td>
                <td align="right" valign="top">
                  <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.2);border:2px solid rgba(255,255,255,0.4);text-align:center;line-height:56px;font-size:24px;font-weight:700;color:#ffffff;">
                    ${initial}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── SENDER BANNER ── -->
        <tr>
          <td style="background:#172B4D;padding:18px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:17px;font-weight:600;color:#ffffff;">${name}</p>
                  <p style="margin:3px 0 0;font-size:13px;color:#BBD0E8;">${email}</p>
                </td>
                <td align="right">
                  <span style="display:inline-block;background:rgba(110,168,230,0.25);border:1px solid rgba(110,168,230,0.4);border-radius:20px;padding:4px 12px;font-size:11px;color:#DCEAF7;font-weight:600;letter-spacing:1px;">NEW MESSAGE</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── BODY ── -->
        <tr>
          <td style="background:#ffffff;padding:32px 40px 8px;">

            <!-- Info rows -->
            ${infoRows.length > 0 ? `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
              ${infoHtml}
            </table>` : ""}

            <!-- Message label -->
            <p style="margin:0 0 10px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;font-weight:600;">✉️ Message</p>

            <!-- Message box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td width="4" style="background:#2563A6;border-radius:4px 0 0 4px;font-size:0;">&nbsp;</td>
                <td style="background:#EFF6FC;border-radius:0 10px 10px 0;padding:18px 20px;border:1px solid #E2E8F0;border-left:none;">
                  <p style="margin:0;font-size:15px;line-height:1.8;color:#374151;white-space:pre-wrap;">${safeMsg}</p>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- ── CTA ── -->
        <tr>
          <td style="background:#ffffff;padding:0 40px 36px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:10px;background:#2563A6;box-shadow:0 4px 20px rgba(37,99,166,0.35);">
                  <a href="mailto:${email}?subject=Re%3A ${encodeURIComponent(subject || "Your portfolio message")}"
                     style="display:inline-block;padding:13px 32px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
                    ↩ Reply to ${name}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── DIVIDER ── -->
        <tr>
          <td style="background:#ffffff;padding:0 40px;">
            <div style="height:1px;background:linear-gradient(90deg,#2563A633,#2563A633,transparent);"></div>
          </td>
        </tr>

        <!-- ── FOOTER ── -->
        <tr>
          <td style="background:#ffffff;border-radius:0 0 20px 20px;padding:20px 40px 28px;">
            <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;line-height:1.6;">
              Sent via the contact form on
              <a href="https://portfolio-harendra.vercel.app" style="color:#2563A6;text-decoration:none;font-weight:500;">portfolio-harendra.vercel.app</a>
              <br/>Reply directly to this email or click the button above.
            </p>
          </td>
        </tr>

      </table>
      <!-- /Card -->

    </td></tr>
  </table>
</body>
</html>`;

  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject || "New message"} — from ${name}`,
    html,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: error.message, detail: error }, { status: 500 });
  }

  console.log("Email sent, id:", data?.id);
  return NextResponse.json({ success: true, id: data?.id });
}
