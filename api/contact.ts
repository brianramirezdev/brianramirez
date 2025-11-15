import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const { error } = await resend.emails.send({
            from: 'Portfolio Contact <contacto@mail.brianramirez.dev>',
            to: ['brianramirezdelgadodev@gmail.com'],
            replyTo: email,
            subject: `Nuevo mensaje de ${name}`,
            html: `
                <h2>Nuevo mensaje desde tu portfolio 🚀</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong> ${message}</p>
            `,
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
