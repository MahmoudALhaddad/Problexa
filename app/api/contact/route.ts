import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and a message are all required." },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address doesn't look right." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;

  // No key configured yet — log and succeed so the form is usable in dev.
  if (!apiKey) {
    console.info("[contact] (stub — no RESEND_API_KEY) new enquiry:", {
      name,
      email,
      company,
      message,
    });
    return NextResponse.json({ ok: true, stub: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Problexa site <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "—"}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] resend error:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "We couldn't send that just now. Email us directly?" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send that just now. Email us directly?" },
      { status: 500 },
    );
  }
}
