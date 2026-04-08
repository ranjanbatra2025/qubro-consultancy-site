import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs/promises';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);
const subscribersFile = path.join(process.cwd(), 'data', 'subscribers.json');

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
    }

    const b = body as Record<string, unknown>;
    const email = typeof b.email === 'string' ? b.email : null;

    // Server-side validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    // Store subscriber in JSON file
    let subscribers: string[] = [];
    try {
      const data = await fs.readFile(subscribersFile, 'utf-8');
      subscribers = JSON.parse(data) as string[];
    } catch {
      // File doesn't exist yet, create it
      await fs.mkdir(path.dirname(subscribersFile), { recursive: true });
    }

    if (email && subscribers.includes(email)) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 400 });
    }

    subscribers.push(email);
    await fs.writeFile(subscribersFile, JSON.stringify(subscribers, null, 2));

    // Send email notification via Resend
    await resend.emails.send({
      from: 'noreply@absoluteaiconsulting.com',
      to: 'hello@absoluteaiconsulting.com',
      subject: 'New Newsletter Subscriber',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json({ message: 'Failed to subscribe' }, { status: 500 });
  }
}