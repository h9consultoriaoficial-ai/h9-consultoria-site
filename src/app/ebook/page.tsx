import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ebook Gratuito — Os 7 Erros Que Quebram as Empresas",
  description:
    "Baixe gratuitamente o guia prático de Heverton Marques sobre lucratividade real, fluxo de caixa e precificação estratégica para sellers em marketplaces.",
};

const erros7 = [
  "Lucratividade Real — pare de se iludir com o faturamento alto",
  "O Fantasma da Conta Vazia — fluxo de caixa que sangra em silêncio",
  "Precificação Estratégica — calcule o preço que protege sua margem",
  "Gestão de Custos — identifique os custos invisíveis que destroem o resultado",
  "Ponto de Equilíbrio — saiba exatamente quanto precisa vender para não perder",
  "Margem de Contribuição — entenda o que cada produto realmente dá de lucro",
  "Gestão com Propósito — construa um negócio sustentável com razão de existir",
];

const testimonials = [
  {
    name: "João P.",
    role: "Seller no Mercado Livre",
    text: "O ebook me fez entender que meu problema não era vender mais — era parar de vazar dinheiro. Mudou completamente minha visão.",
    stars: 5,
  },
  {
    name: "Fernanda A.",
    role: "Loja na Shopee",
    text: "Simples, direto e cheio de verdades que ninguém quer falar. Recomendo para qualquer seller que está confuso com os números.",
    stars: 5,
  },
  {
    name: "Rodrigo M.",
    role: "Marketplace Magalu",
    text: "Depois de ler, implementei o ponto de equilíbrio e finalmente sei quanto preciso vender. Parece óbvio, mas ninguém ensinou antes.",
    stars: 5,
  },
];

/* ── Capa mockup do ebook — coluna direita (desktop) ── */
function EbookCover() {
  return (
    <>
      <style>{`
        .ebook-3d {
          border-radius: 6px;
          overflow: hidden;
          transform: perspective(1000px) rotateY(-6deg);
          box-shadow:
            -5px 0 10px rgba(0,0,0,0.3),
            0 10px 30px rgba(0,0,0,0.45),
            0 2px 6px rgba(0,0,0,0.2);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: block;
          width: 100%;
          height: auto;
        }
        .ebook-3d-wrap:hover .ebook-3d {
          transform: perspective(1000px) rotateY(0deg) translateY(-4px);
          box-shadow:
            0 4px 8px rgba(0,0,0,0.25),
            0 20px 40px rgba(0,0,0,0.4);
        }
      `}</style>
      <div className="ebook-3d-wrap w-full">
        <Image
          src="/images/capa-ebook.png"
          alt="Capa do ebook Os 7 Erros Que Quebram as Empresas — Heverton Marques"
          width={400}
          height={563}
          priority
          className="ebook-3d"
        />
      </div>
    </>
  );
}

export default function EbookPage() {
  return (
    <>
      {/* ── Hero + Form ── */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-start">

            {/* Coluna esquerda — badge, título, (mobile: capa), lista, formulário */}
            <div className="space-y-6">
              <span
                className="inline-block text-white text-xs font-manrope font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
                style={{ backgroundColor: "#C9A84C" }}
              >
                Ebook 100% Gratuito
              </span>

              <h1
                className="font-playfair leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "#0F2D5C" }}
              >
                Os 7 Erros Que{" "}
                <span className="font-bold" style={{ color: "#C9A84C" }}>Quebram</span>{" "}
                as Empresas
              </h1>

              <p className="font-manrope text-lg leading-relaxed" style={{ color: "#3D3D3D" }}>
                O guia prático para dominar custos, margens, ponto de equilíbrio e precificação
                estratégica — com propósito.
              </p>

              {/* Capa — mobile only, entre subtítulo e lista */}
              <div className="block lg:hidden">
                <div style={{ maxWidth: "280px", margin: "0 auto" }}>
                  <Image
                    src="/images/capa-ebook.png"
                    alt="Capa do ebook Os 7 Erros Que Quebram as Empresas"
                    width={280}
                    height={394}
                    style={{ borderRadius: "6px", width: "100%", height: "auto" }}
                  />
                </div>
              </div>

              {/* Lista dos 7 erros */}
              <div className="space-y-3">
                <p className="font-manrope font-bold text-sm uppercase tracking-wider" style={{ color: "#0F2D5C" }}>
                  O que você vai aprender:
                </p>
                <ul className="space-y-2.5">
                  {erros7.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-manrope text-sm" style={{ color: "#3D3D3D" }}>
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Formulário */}
              <div
                id="form"
                className="shadow-md"
                style={{ marginTop: "32px", backgroundColor: "white", borderRadius: "12px", padding: "32px" }}
              >
                <h2 className="font-playfair text-2xl mb-2" style={{ color: "#0F2D5C" }}>
                  Quero o ebook gratuito
                </h2>
                <p className="font-manrope text-sm mb-6" style={{ color: "#9CA3AF" }}>
                  Preencha e receba o PDF imediatamente.
                </p>
                <form action="/api/leads" method="POST" className="space-y-4">
                  <input type="hidden" name="origem" value="ebook-page" />
                  <div>
                    <label className="block font-manrope text-sm font-semibold mb-1.5" style={{ color: "#0F2D5C" }}>
                      Nome completo *
                    </label>
                    <input
                      name="nome"
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block font-manrope text-sm font-semibold mb-1.5" style={{ color: "#0F2D5C" }}>
                      E-mail *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block font-manrope text-sm font-semibold mb-1.5" style={{ color: "#0F2D5C" }}>
                      WhatsApp
                    </label>
                    <input
                      name="whatsapp"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-manrope font-bold text-base"
                    style={{
                      backgroundColor: "#C9A84C",
                      color: "#FFFFFF",
                      padding: "16px 32px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    BAIXAR AGORA — GRÁTIS
                  </button>
                  <p className="font-manrope text-xs text-center" style={{ color: "#9CA3AF" }}>
                    Sem spam. Seus dados são respeitados e nunca serão vendidos.
                  </p>
                </form>
              </div>
            </div>

            {/* Coluna direita — APENAS a capa (desktop) */}
            <div className="hidden lg:flex items-start justify-center pt-8">
              <EbookCover />
            </div>

          </div>
        </div>
      </section>

      {/* ── Sobre o autor ── */}
      <section className="py-20 bg-h9gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            <div className="foto-heverton w-48 h-56 rounded-2xl border-4 border-gold bg-navy/10 flex items-center justify-center mx-auto sm:mx-0">
              <div className="text-center text-navy/30 font-manrope text-xs px-4">
                <div className="w-14 h-14 rounded-full bg-navy/20 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-xl font-bold text-navy/30">H</span>
                </div>
                Foto do Heverton
              </div>
            </div>
            <div className="sm:col-span-2 space-y-4">
              <h2 className="font-playfair text-2xl sm:text-3xl text-navy">Heverton Marques</h2>
              <p className="text-gold font-manrope font-semibold">
                Consultor Estratégico de Marketplaces · Limeira, SP
              </p>
              <p className="text-navy/70 font-manrope leading-relaxed">
                Vivenciei na prática tudo que está neste ebook — tanto os erros quanto as
                soluções. Depois de construir e ver uma empresa quebrar, entendi que a diferença
                entre crescer e prosperar está nos fundamentos financeiros que poucos ensinam.
              </p>
              <p className="text-navy/70 font-manrope leading-relaxed">
                Hoje, com esse conhecimento, ajudo sellers a transformarem operações que faturam
                muito mas lucram pouco em negócios com margem saudável e propósito.
              </p>
              <Button href="/sobre" variant="outline" size="sm">
                Conhecer a história completa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-navy text-center mb-10">
            Quem já leu recomenda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-h9gray rounded-xl p-6 border border-navy/10">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-navy/70 font-manrope text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-manrope font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-navy/40 font-manrope text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0F2D5C 0%, #1A3F78 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-playfair text-2xl sm:text-3xl text-white">
            Pronto para descobrir os 7 erros?
          </h2>
          <p className="text-white/60 font-manrope">É gratuito. Sem compromisso.</p>
          <a
            href="#form"
            className="inline-flex items-center justify-center bg-gold text-navy font-manrope font-bold text-lg px-8 py-4 rounded-lg hover:bg-gold-light transition-colors"
          >
            QUERO O EBOOK GRATUITO
          </a>
          <p className="slogan text-lg">Amar, Vender para Abençoar</p>
        </div>
      </section>
    </>
  );
}
