// src/emails/ContactEmail.js
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text, Link } from '@react-email/components';

export default function ContactEmail({ name = 'Usuario', email = 'email@ejemplo.com', message = 'Mensaje de ejemplo' }) {
    return (
        <Html>
            <Head />
            <Preview>Nuevo mensaje de {name} desde tu portfolio</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header con gradiente killua */}
                    <Section style={header}>
                        <div style={iconContainer}>
                            <span style={{ fontSize: '32px' }}>📬</span>
                        </div>

                        <Heading style={h1}>Nuevo Mensaje</Heading>

                        <Text style={headerSubtitle}>Portfolio · Brian Ramírez</Text>
                    </Section>

                    {/* Content */}
                    <Section style={content}>
                        <Text style={intro}>Has recibido un nuevo mensaje desde tu portfolio:</Text>

                        {/* Name Card */}
                        <Section style={infoCard}>
                            <table width="100%" cellPadding="0" cellSpacing="0">
                                <tbody>
                                    <tr>
                                        <td width="40" valign="top">
                                            <div style={iconBox}>
                                                <span style={{ fontSize: '20px' }}>👤</span>
                                            </div>
                                        </td>
                                        <td style={{ paddingLeft: '16px' }}>
                                            <Text style={infoLabel}>Remitente</Text>
                                            <Text style={infoValue}>{name}</Text>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Section>

                        {/* Email Card */}
                        <Section style={infoCard}>
                            <table width="100%" cellPadding="0" cellSpacing="0">
                                <tbody>
                                    <tr>
                                        <td width="40" valign="top">
                                            <div style={iconBox}>
                                                <span style={{ fontSize: '20px' }}>📧</span>
                                            </div>
                                        </td>
                                        <td style={{ paddingLeft: '16px' }}>
                                            <Text style={infoLabel}>Email</Text>
                                            <Link href={`mailto:${email}`} style={emailLink}>
                                                {email}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Section>

                        {/* Message */}
                        <Text style={messageLabel}>💬 Mensaje</Text>
                        <Section style={messageBox}>
                            <Text style={messageText}>{message}</Text>
                        </Section>

                        {/* CTA */}
                        <Section style={ctaSection}>
                            <Link href={`mailto:${email}?subject=Re:%20Contacto%20desde%20Portfolio`} style={button}>
                                ↩️ Responder a {name}
                            </Link>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Hr style={divider} />
                        <Text style={footerText}>
                            Este mensaje fue enviado desde{' '}
                            <Link href="https://brianramirez.dev" style={footerLink}>
                                brianramirez.dev
                            </Link>
                        </Text>
                        <Text style={footerDate}>
                            {new Date().toLocaleDateString('es-ES', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

// ============================================
// ESTILOS (Con tu paleta de colores killua)
// ============================================

const main = {
    backgroundColor: '#0a0a0a',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    padding: '40px 0',
};

const container = {
    backgroundColor: 'rgba(32, 32, 32, 0.8)',
    margin: '0 auto',
    maxWidth: '600px',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
};

const header = {
    background: 'linear-gradient(135deg, #c8b6ff 0%, #8077ff 100%)',
    padding: '40px',
    textAlign: 'center',
    position: 'relative',
};

const iconContainer = {
    width: '64px',
    height: '64px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
};

const h1 = {
    color: '#ffffff',
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 8px',
    letterSpacing: '-0.5px',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
};

const headerSubtitle = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '14px',
    fontWeight: '500',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '2px',
};

const content = {
    padding: '40px',
    background: 'rgba(20, 20, 20, 0.6)',
};

const intro = {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0 0 32px',
};

const infoCard = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '16px',
    overflow: 'hidden',
};

const iconBox = {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #c8b6ff, #8077ff)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const infoLabel = {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 0 4px',
};

const infoValue = {
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: '18px',
    fontWeight: '600',
    margin: '0',
};

const emailLink = {
    color: '#c8b6ff',
    fontSize: '16px',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'block',
};

const messageLabel = {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 0 12px',
    display: 'block',
};

const messageBox = {
    background: 'rgba(255, 255, 255, 0.03)',
    borderLeft: '3px solid #c8b6ff',
    borderRadius: '0 12px 12px 0',
    padding: '24px',
    marginBottom: '32px',
};

const messageText = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0',
    whiteSpace: 'pre-wrap',
};

const ctaSection = {
    textAlign: 'center',
    paddingTop: '8px',
};

const button = {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #c8b6ff 0%, #8077ff 100%)',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    padding: '16px 32px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(128, 119, 255, 0.3)',
};

const footer = {
    padding: '32px',
    background: 'rgba(10, 10, 10, 0.8)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
};

const divider = {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    margin: '0 0 24px',
};

const footerText = {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '13px',
    lineHeight: '20px',
    textAlign: 'center',
    margin: '0 0 8px',
};

const footerLink = {
    color: '#c8b6ff',
    fontWeight: '600',
    textDecoration: 'none',
};

const footerDate = {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '12px',
    textAlign: 'center',
    margin: '0',
};
