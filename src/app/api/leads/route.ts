import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { z } from "zod";

const LeadSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  whatsapp: z.string().optional(),
  origem: z.string().optional().default("ebook"),
});

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") ?? "";
    let body: Record<string, string>;

    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const form = await req.formData();
      body = Object.fromEntries(
        Array.from(form.entries()).map(([k, v]) => [k, String(v)])
      );
    }

    const data = LeadSchema.parse(body);

    const { error } = await supabase.from("leads").insert([data]);

    if (error) {
      console.error("Supabase error:", error);
    }

    return NextResponse.redirect(new URL("/ebook/obrigado", req.url));
  } catch {
    return NextResponse.redirect(new URL("/ebook/obrigado", req.url));
  }
}
