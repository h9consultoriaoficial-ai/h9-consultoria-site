import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Download } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Obrigado! Seu ebook está pronto — H9 Consultoria",
  description: "Baixe agora o ebook Os 7 Erros Que Quebram as Empresas.",
};

const WA_URL = "https://wa.me/5519995517477";

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-h9gray flex flex-col">
      <header className="bg-navy py-4 px-6 flex justify-center">
        <Link href="/">
          <Image
            src="https://h9-assets.netlify.app/logo-branco.png"
            alt="H9 Consultoria"
            width={110}
            height={36}
            className="h-9 w-auto"
          />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full text-center space-y-7">
          <div className="w-20 h-20 rounded-full bg-success/10 border-2 border-success flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>

          <div>
            <h1 className="font-playfair text-3xl sm:text-4xl text-navy mb-3">
              Ebook enviado com sucesso!
            </h1>
            <p className="text-navy/60 font-manrope text-lg">
              Obrigado pela sua confiança. O PDF está disponível para download abaixo e também
              será enviado para o seu e-mail.
            </p>
          </div>

          <a
            href="/ebook/os-7-erros-h9.pdf"
            download
            className="inline-flex items-center gap-3 bg-gold text-navy font-manrope font-bold text-lg px-8 py-4 rounded-xl hover:bg-gold-light transition-colors shadow-lg"
          >
            <Download className="w-6 h-6" />
            Baixar o Ebook Agora
          </a>

          <div className="bg-navy rounded-xl p-6 text-left">
            <p className="text-white/70 font-manrope text-sm leading-relaxed mb-4">
              Quer ir além do ebook e aplicar esses conceitos na sua operação real? Heverton
              atende um número limitado de clientes com acompanhamento personalizado.
            </p>
            <Button href={WA_URL} variant="whatsapp" size="md" external className="w-full justify-center">
              Falar com Heverton pelo WhatsApp
            </Button>
          </div>

          <p className="slogan text-xl">Amar, Vender para Abençoar</p>
        </div>
      </main>
    </div>
  );
}
