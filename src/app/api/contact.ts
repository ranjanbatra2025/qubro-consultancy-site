import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
    }

    const { name, email, message } = body as { name?: unknown; email?: unknown; message?: unknown };

    // Server-side validation
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }
    if (typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ message: 'Message is required' }, { status: 400 });
    }

    // Send email via Resend
    const safeName = typeof name === 'string' ? name : 'Not provided';
    const safeEmail = email;
    const safeMessage = message;

    await resend.emails.send({
      from: 'noreply@absoluteaiconsulting.com',
      to: 'hello@absoluteaiconsulting.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong> ${safeMessage}</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}