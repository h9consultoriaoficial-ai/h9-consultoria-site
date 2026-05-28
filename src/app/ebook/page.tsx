import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ebook Gratuito — Os 7 Erros Que Quebram as Empresas",
  description:
    "Baixe gratuitamente o guia prático de Heverton Marques sobre lucratividade real, fluxo de caixa e precificação estratégica para sellers em marketplaces.",
};

const topics = [
  { num: "01", title: "Lucratividade Real", desc: "Pare de se iludir com faturamento. Descubra o que é lucro de verdade." },
  { num: "02", title: "O Fantasma da Conta Vazia", desc: "Por que o dinheiro some mesmo quando as vendas vão bem." },
  { num: "03", title: "Ponto de Equilíbrio", desc: "Saiba exatamente quanto você precisa vender para não ter prejuízo." },
  { num: "04", title: "Precificação Estratégica", desc: "Como definir o preço certo sem destruir a margem ou perder vendas." },
  { num: "05", title: "Controle de Custos", desc: "Identifique os custos invisíveis que estão corroendo seu resultado." },
  { num: "06", title: "Fluxo de Caixa Blindado", desc: "Monte um fluxo de caixa que te dá clareza e paz para decidir." },
  { num: "07", title: "Negócio com Propósito", desc: "Como alinhar resultado financeiro com valores e razão de existir." },
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

export default function EbookPage() {
  return (
    <div className="min-h-screen">
      {/* Logo only header */}
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

      {/* Hero + Form */}
      <section
        className="py-16 sm:py-24"
        style={{ background: "linear-gradient(135deg, #0F2D5C 0%, #1A3F78 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-gold text-navy text-xs font-manrope font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Ebook 100% Gratuito
              </span>
              <h1
                className="font-playfair text-white leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
              >
                Os 7 Erros Que{" "}
                <span className="text-gold italic">Quebram</span> as Empresas
              </h1>
              <p className="text-white/70 font-manrope text-lg leading-relaxed">
                O guia prático para dominar custos, margens, ponto de equilíbrio e precificação
                estratégica — com propósito.
              </p>
              <ul className="space-y-3">
                {[
                  "Lucratividade Real — pare de se iludir com o faturamento",
                  "Fluxo de Caixa Blindado — chega de decisão no achismo",
                  "Precificação estratégica que protege sua margem",
                  "Gestão financeira que ama, vende e abençoa",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/80 font-manrope text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="slogan text-xl">&ldquo;Amar, Vender para Abençoar&rdquo;</p>
            </div>

            {/* Form */}
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
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl text-navy mb-3">
              O que você vai aprender
            </h2>
            <p className="text-navy/60 font-manrope">
              7 capítulos práticos que transformam a forma como você vê seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((t) => (
              <div key={t.num} className="flex gap-4 p-5 rounded-xl border border-navy/10 hover:border-gold/30 transition-colors bg-h9gray">
                <span className="text-gold font-playfair font-bold text-2xl flex-shrink-0 w-8">{t.num}</span>
                <div>
                  <h3 className="font-manrope font-bold text-navy mb-1">{t.title}</h3>
                  <p className="text-navy/60 font-manrope text-sm">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o autor */}
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

      {/* Depoimentos */}
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

      {/* CTA final repetido */}
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

      {/* Footer mínimo */}
      <footer className="bg-navy-dark py-4 text-center">
        <p className="text-white/30 font-manrope text-xs">
          © 2026 H9 Consultoria Estratégica · Limeira, SP
        </p>
      </footer>
    </div>
  );
}
