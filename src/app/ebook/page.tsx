import type { Metadata } from "next";
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

/* ── Capa visual do ebook ── */
function EbookCover() {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: "200px",
        height: "300px",
        background: "linear-gradient(145deg, #0A1F3F 0%, #0F2D5C 60%, #1A3F78 100%)",
        borderRadius: "8px 12px 12px 8px",
        boxShadow:
          "4px 6px 20px rgba(0,0,0,0.5), 8px 12px 40px rgba(0,0,0,0.3), inset -3px 0 8px rgba(0,0,0,0.4)",
        border: "1px solid rgba(201,168,76,0.3)",
        overflow: "hidden",
      }}
    >
      {/* Spine shadow */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "12px",
          background: "rgba(0,0,0,0.3)",
          borderRadius: "8px 0 0 8px",
        }}
      />

      {/* Badge topo */}
      <div className="absolute top-3 right-3">
        <span
          className="bg-gold text-navy text-[9px] font-manrope font-black uppercase px-2 py-0.5 rounded-full tracking-widest"
        >
          GRÁTIS
        </span>
      </div>

      {/* Número 7 decorativo */}
      <div
        className="absolute"
        style={{
          top: "28px",
          left: "18px",
          fontSize: "72px",
          fontFamily: "var(--font-playfair)",
          fontWeight: 700,
          color: "rgba(201,168,76,0.18)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        7
      </div>

      {/* Conteúdo principal */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 pl-5">
        {/* Título */}
        <div className="mt-8">
          <p className="text-gold text-[9px] font-manrope font-bold uppercase tracking-[0.15em] mb-1.5">
            OS 7 ERROS QUE
          </p>
          <p
            className="font-playfair text-white font-bold leading-tight"
            style={{ fontSize: "18px" }}
          >
            Quebram
            <br />
            as
            <br />
            Empresas
          </p>
        </div>

        {/* Divider dourado */}
        <div className="w-10 h-px bg-gold/60 my-1" />

        {/* Avatar + nome */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
              <span className="text-gold font-playfair font-bold text-xs">HM</span>
            </div>
            <div>
              <p className="text-white font-manrope font-bold text-[9px] uppercase tracking-wide">
                Heverton Marques
              </p>
              <p className="text-white/40 font-manrope text-[8px]">
                Consultor de Marketplaces
              </p>
            </div>
          </div>

          {/* Slogan */}
          <p
            className="font-playfair italic text-gold/80 text-[9px] leading-tight"
          >
            &ldquo;Amar, Vender<br />para Abençoar&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EbookPage() {
  return (
    <>
      {/* ── Hero + Form ── */}
      <section
        className="py-16 sm:py-24"
        style={{ background: "linear-gradient(135deg, #0F2D5C 0%, #1A3F78 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Esquerda — conteúdo */}
            <div className="space-y-6">
              <span className="inline-block bg-gold text-navy text-xs font-manrope font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Ebook 100% Gratuito
              </span>

              {/* Correção 3 — sem italic no "Quebram" para evitar swash Q */}
              <h1
                className="font-playfair text-white leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
              >
                Os 7 Erros Que{" "}
                <span className="text-gold font-bold">Quebram</span>{" "}
                as Empresas
              </h1>

              <p className="text-white/70 font-manrope text-lg leading-relaxed">
                O guia prático para dominar custos, margens, ponto de equilíbrio e precificação
                estratégica — com propósito.
              </p>

              {/* Correção 4 — 7 erros completos */}
              <div className="space-y-3">
                <p className="text-white font-manrope font-bold text-sm uppercase tracking-wider">
                  O que você vai aprender:
                </p>
                <ul className="space-y-2.5">
                  {erros7.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 font-manrope text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="slogan text-xl">&ldquo;Amar, Vender para Abençoar&rdquo;</p>
            </div>

            {/* Direita — capa + formulário */}
            <div className="space-y-6">

              {/* Correção 5 — capa visual do livro */}
              <div className="flex justify-center lg:justify-start">
                <EbookCover />
              </div>

              {/* Formulário */}
              <div id="form" className="bg-white rounded-2xl p-8 shadow-2xl">
                <h2 className="font-playfair text-2xl text-navy mb-2">
                  Quero o ebook gratuito
                </h2>
                <p className="text-navy/50 font-manrope text-sm mb-6">
                  Preencha e receba o PDF imediatamente.
                </p>
                <form action="/api/leads" method="POST" className="space-y-4">
                  <input type="hidden" name="origem" value="ebook-page" />
                  <div>
                    <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
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
                    <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
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
                    <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                      WhatsApp
                    </label>
                    <input
                      name="whatsapp"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <Button type="submit" variant="gold" size="lg" className="w-full font-bold tracking-wide">
                    BAIXAR AGORA — GRÁTIS
                  </Button>
                  <p className="text-navy/40 font-manrope text-xs text-center">
                    Sem spam. Seus dados são respeitados e nunca serão vendidos.
                  </p>
                </form>
              </div>
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
