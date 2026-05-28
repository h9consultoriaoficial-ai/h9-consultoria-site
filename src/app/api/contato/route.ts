import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { z } from "zod";

const ContatoSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  whatsapp: z.string().optional(),
  assunto: z.string().min(3),
  mensagem: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = ContatoSchema.parse(body);

    const { error } = await supabase.from("contatos").insert([data]);

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Dados inválidos" }, { status: 400 });
  }
}
