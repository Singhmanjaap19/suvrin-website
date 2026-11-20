import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Target WhatsApp notification number (Admin / Client)
const ADMIN_WHATSAPP_NUMBER = "919306695594";

export interface ContactInquiryPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
  engagementType?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactInquiryPayload = await request.json();

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();
    const engagementType = body.engagementType?.trim() || "Dedicated Odoo Development";

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // 1. Format the alert message for WhatsApp
    const whatsappText = [
      "🚀 *New Lead: Suvrin Technologies*",
      "━━━━━━━━━━━━━━━━━━━━",
      `👤 *Name:* ${name}`,
      `📱 *Phone:* ${phone}`,
      `✉️ *Email:* ${email}`,
      `💼 *Service:* ${engagementType}`,
      `📝 *Requirements:*`,
      `${message || "No specific requirements mentioned."}`,
      "━━━━━━━━━━━━━━━━━━━━",
      `⏰ *Time:* ${timestamp} IST`,
    ].join("\n");

    // 2. Persist lead locally so no inquiry is ever lost
    try {
      const dataDir = path.join(process.cwd(), ".data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, "inquiries.json");
      const existing: unknown[] = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
        : [];
      existing.push({
        name,
        phone,
        email,
        message,
        engagementType,
        timestamp,
        receivedAt: new Date().toISOString(),
      });
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");
    } catch (saveErr) {
      console.warn("Could not save inquiry to local store:", saveErr);
    }

    // 3. Dispatch WhatsApp Notification to Admin (+91-9306695594)
    // Supports CallMeBot (free 1-step personal WhatsApp bot) or Twilio
    const callmebotKey =
      process.env.CALLMEBOT_API_KEY || process.env.WHATSAPP_API_KEY;

    let whatsappSent = false;
    let gatewayNotice = "";

    if (callmebotKey) {
      try {
        const botUrl = `https://api.callmebot.com/whatsapp.php?phone=${ADMIN_WHATSAPP_NUMBER}&text=${encodeURIComponent(
          whatsappText
        )}&apikey=${callmebotKey}`;
        const botRes = await fetch(botUrl, { method: "GET" });
        if (botRes.ok) {
          whatsappSent = true;
          gatewayNotice = "Delivered via CallMeBot gateway";
        }
      } catch (waErr) {
        console.error("CallMeBot dispatch error:", waErr);
      }
    } else {
      // If no API key is configured yet, print the lead to server log
      console.log("\n==========================================");
      console.log(`[WHATSAPP ALERT FOR: +${ADMIN_WHATSAPP_NUMBER}]`);
      console.log(whatsappText);
      console.log("==========================================\n");
      gatewayNotice =
        "Lead logged. Add CALLMEBOT_API_KEY in .env.local to activate automated WhatsApp push.";
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully.",
      whatsappSent,
      gatewayNotice,
    });
  } catch (error) {
    console.error("Error processing contact inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
