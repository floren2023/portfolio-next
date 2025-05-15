 "use server";
import EmailForm from "@/components/EmailForm";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(form) {
  const { name, email, message } = form;

  try {
    const { data, error } = await resend.emails.send({
    //    from: "acme <onboarding@resend.dev>",
     from:"florendesign@florenwebdesign.com",
      to: ["florentavakar@gmail.com"],
      subject: "Contact Form",
      text:`Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: (
       <EmailForm name={name} email={email} message={message}/>
      ),
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
