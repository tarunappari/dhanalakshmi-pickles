import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request) {
  try {
    const { name, phone, orderId } = await request.json();

    if (!name || !phone || !orderId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER; // e.g. 'whatsapp:+14155238886'

    if (!accountSid || !authToken || !fromWhatsAppNumber) {
      return NextResponse.json(
        { error: "Twilio credentials not configured" },
        { status: 500 },
      );
    }

    const client = twilio(accountSid, authToken);

    // Ensure phone has country code. Prefix +91 if purely numbers are sent.
    let formattedPhone = phone.replace(/[^0-9+]/g, "");
    if (!formattedPhone.startsWith("+")) {
      formattedPhone = `+91${formattedPhone}`;
    }

    const messageBody = `Hi ${name}

Great news—your order ${orderId} is confirmed. 🚀

Our crew is on it, and it will reach you in 3–7 days.

💌 For assistance: support@tarun.com

Team VenkatraoVantillu`;

    // Extract raw number if the user included 'whatsapp:' prefix in the env variable, to prevent double suffix
    const sender = fromWhatsAppNumber.startsWith("whatsapp:")
      ? fromWhatsAppNumber
      : `whatsapp:${fromWhatsAppNumber}`;

    const message = await client.messages.create({
      body: messageBody,
      from: sender,
      to: `whatsapp:${formattedPhone}`,
    });

    return NextResponse.json({ success: true, messageId: message.sid });
  } catch (error) {
    console.error("Twilio Error:", error);
    return NextResponse.json(
      { error: "Failed to send WhatsApp message", details: error.message },
      { status: 500 },
    );
  }
}
