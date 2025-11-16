// api/contact.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Template de email moderno y elegante con tu paleta de colores
const generateEmailHTML = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      @media only screen and (max-width: 600px) {
        .container { width: 100% !important; }
        .content { padding: 24px !important; }
        .header { padding: 24px !important; }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif;">

    <!-- Wrapper -->
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
      <tr>
        <td align="center">

          <!-- Container -->
          <table class="container" width="600" cellpadding="0" cellspacing="0" style="background: rgba(32, 32, 32, 0.8); backdrop-filter: blur(10px); border-radius: 16px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);">

            <!-- Header con gradiente killua -->
            <tr>
              <td class="header" style="background: linear-gradient(135deg, oklch(0.8006 0.095 268.35) 0%, oklch(0.4881 0.2889 269.11) 100%); padding: 40px; text-align: center; position: relative;">
                <!-- Decorative elements -->
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 100%; opacity: 0.1; background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);"></div>

                <div style="position: relative; z-index: 1;">
                  <!-- Icon -->
                  <div style="width: 64px; height: 64px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px; border: 1px solid rgba(255, 255, 255, 0.3);">
                    <span style="font-size: 32px;">📬</span>
                  </div>

                  <h1 style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0 0 8px; letter-spacing: -0.5px; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);">
                    Nuevo Mensaje
                  </h1>

                  <p style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500; margin: 0; text-transform: uppercase; letter-spacing: 2px;">
                    Portfolio · Brian Ramírez
                  </p>
                </div>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td class="content" style="padding: 40px; background: rgba(20, 20, 20, 0.6);">

                <!-- Intro text -->
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 16px; line-height: 24px; margin: 0 0 32px;">
                  Has recibido un nuevo mensaje desde tu portfolio. Aquí están los detalles:
                </p>

                <!-- Info Cards -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                  <!-- Name Card -->
                  <tr>
                    <td style="padding-bottom: 16px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; overflow: hidden;">
                        <tr>
                          <td style="padding: 20px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="40" valign="top">
                                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, oklch(0.8006 0.095 268.35), oklch(0.4881 0.2889 269.11)); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                    <span style="font-size: 20px;">👤</span>
                                  </div>
                                </td>
                                <td style="padding-left: 16px;">
                                  <p style="color: rgba(255, 255, 255, 0.6); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px;">Remitente</p>
                                  <p style="color: rgba(255, 255, 255, 0.95); font-size: 18px; font-weight: 600; margin: 0;">${name}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Email Card -->
                  <tr>
                    <td style="padding-bottom: 16px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; overflow: hidden;">
                        <tr>
                          <td style="padding: 20px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="40" valign="top">
                                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, oklch(0.8006 0.095 268.35), oklch(0.4881 0.2889 269.11)); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                    <span style="font-size: 20px;">📧</span>
                                  </div>
                                </td>
                                <td style="padding-left: 16px;">
                                  <p style="color: rgba(255, 255, 255, 0.6); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px;">Email</p>
                                  <a href="mailto:${email}" style="color: oklch(0.8006 0.095 268.35); font-size: 16px; font-weight: 500; text-decoration: none; display: block;">${email}</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Message Section -->
                <div style="margin-bottom: 32px;">
                  <p style="color: rgba(255, 255, 255, 0.6); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">💬 Mensaje</p>

                  <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255, 255, 255, 0.03); border-left: 3px solid oklch(0.8006 0.095 268.35); border-radius: 0 12px 12px 0; overflow: hidden;">
                    <tr>
                      <td style="padding: 24px;">
                        <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; line-height: 26px; margin: 0; white-space: pre-wrap;">${message}</p>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- CTA Button -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding-top: 8px;">
                      <a href="mailto:${email}?subject=Re:%20Contacto%20desde%20Portfolio" style="display: inline-block; background: linear-gradient(135deg, oklch(0.8006 0.095 268.35) 0%, oklch(0.4881 0.2889 269.11) 100%); color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; padding: 16px 32px; border-radius: 10px; box-shadow: 0 4px 12px rgba(128, 119, 255, 0.3); transition: all 0.3s ease;">
                        ↩️ Responder a ${name}
                      </a>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 32px; background: rgba(10, 10, 10, 0.8); border-top: 1px solid rgba(255, 255, 255, 0.05);">

                <!-- Divider line -->
                <div style="width: 100%; height: 1px; background: linear-gradient(90deg, transparent, oklch(0.8006 0.095 268.35), transparent); margin-bottom: 24px;"></div>

                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center">
                      <p style="color: rgba(255, 255, 255, 0.5); font-size: 13px; line-height: 20px; margin: 0 0 8px;">
                        Este mensaje fue enviado desde el formulario de contacto de
                      </p>
                      <a href="https://brianramirez.dev" style="color: oklch(0.8006 0.095 268.35); font-size: 14px; font-weight: 600; text-decoration: none; display: inline-block; margin-bottom: 12px;">
                        brianramirez.dev
                      </a>
                      <p style="color: rgba(255, 255, 255, 0.3); font-size: 12px; margin: 0;">
                        ${new Date().toLocaleDateString('es-ES', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                      </p>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`;

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        // Generar HTML del email
        const emailHtml = generateEmailHTML(name, email, message);

        const { error } = await resend.emails.send({
            from: 'Portfolio Contact <contact@mail.brianramirez.dev>',
            to: ['brianramirezdelgadodev@gmail.com'],
            replyTo: email,
            subject: `✨ Nuevo mensaje de ${name}`,
            html: emailHtml,
        });

        if (error) {
            console.error(error);
            return res.status(400).json({ message: 'Error sending email', error });
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
