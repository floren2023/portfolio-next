
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(req,res) {
  const { name, email, message } = req
  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact <florendesign@florenwebdesign.com>',
      to: ['florentavakar@gmail.com'],
      subject: 'Contact Form',
      react: <>
      <p>Email:{email}</p>
      <p>Name:{name}</p>
      <p>Message:{message}</p></>,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}