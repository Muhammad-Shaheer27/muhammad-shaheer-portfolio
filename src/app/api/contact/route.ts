
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: ignore submissions that fill the hidden field.
    const website =
      typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      // Return success without sending an email.
      return Response.json(
        {
          success: true,
          message: "Thanks for reaching out. I've received your message and will get back to you as soon as possible.",
        },
        { status: 200 }
      );
    }

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    // Validate required fields.
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    // Validate field lengths.
    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    // Validate email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Check environment variables before initializing Resend.
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error("Contact form environment variables are missing.");

      return Response.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error.message);

      return Response.json(
        { error: "Unable to send your message right now." },
        { status: 502 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Thanks for reaching out. I've received your message and will get back to you as soon as possible.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact endpoint error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
