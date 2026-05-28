"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { BarChart3, Wrench, GraduationCap, MessageCircle, ArrowRight } from "lucide-react";

const quickLinks = [
  {
    href: "/cliente/analises",
    icon: BarChart3,
    title: "Análises",
    desc: "Relatórios de categoria disponíveis",
    color: "bg-navy",
  },
  {
    href: "/cliente/apps",
    icon: Wrench,
    title: "Ferramentas",
    desc: "Calculadora e gestão de portfólio",
    color: "bg-[#1A3F78]",
  },
  {
    href: "/cliente/treinamentos",
    icon: GraduationCap,
    title: "Treinamentos",
    desc: "Módulos de conteúdo e aulas",
    color: "bg-navy",
  },
  {
    href: "https://wa.me/5519995517477",
    icon: MessageCircle,
    title: "Falar com Heverton",
    desc: "Suporte direto via WhatsApp",
    color: "bg-[#25D366]",
    external: true,
  },
];

const recentPosts = [
  {
    slug: "faturamento-alto-lucro-zero",
    title: "Faturamento alto, lucro zero: como sair dessa armadilha",
    category: "Lucratividade",
  },
  {
    slug: "fluxo-de-caixa-intuicao-financeira",
    title: "Fluxo de caixa: por que sua intuição financeira te engana",
    category: "Gestão Financeira",
  },
  {
    slug: "como-precificar-mercado-livre-sem-perder-margem",
    title: "Como precificar no Mercado Livre sem perder margem",
    category: "Marketplace",
  },
];

export default function DashboardPage() {
  const { data: session } = useSession();
  const nome = session?.user?.name?.split(" ")[0] ?? "Cliente";

  const now = new Date();
  const dateStr = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-navy rounded-2xl p-6 sm:p-8">
        <h1 className="font-playfair text-2xl sm:text-3xl text-white mb-1">
          Olá, {nome}! 👋
        </h1>
        <p className="text-white/50 font-manrope text-sm capitalize">{dateStr}</p>
        <p className="slogan text-lg mt-3">Amar, Vender para Abençoar</p>
      </div>

      {/* Quick links */}
      <div>
        <h2 className="font-manrope font-bold text-navy text-lg mb-4">Acesso rápido</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const cardClass =
              "group bg-white rounded-xl p-5 border border-navy/5 hover:border-gold/30 hover:shadow-md transition-all";
            const inner = (
              <>
                <div className={`${item.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-manrope font-bold text-navy mb-1 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-navy/50 font-manrope text-xs">{item.desc}</p>
              </>
            );

            return item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className={cardClass}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Blog recente */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-manrope font-bold text-navy text-lg">Últimas do blog</h2>
          <Link
            href="/blog"
            className="text-gold font-manrope text-sm font-semibold hover:underline flex items-center gap-1"
          >
            Ver todos <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy/5 hover:border-gold/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                <span className="text-navy/30 font-playfair font-bold text-sm">H9</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-gold font-manrope text-xs font-bold">{post.category}</span>
                <p className="font-manrope font-semibold text-navy text-sm truncate group-hover:text-gold transition-colors">
                  {post.title}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-navy/20 group-hover:text-gold transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
