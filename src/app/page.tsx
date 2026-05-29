import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingDown,
  BarChart3,
  Search,
  Swords,
  Play,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "H9 Consultoria Estratégica | Amar, Vender para Abençoar",
  description:
    "Transformamos sellers que crescem mas não lucram em donos de negócio com margem saudável, processos sólidos e propósito.",
};

const WA_MSG = encodeURIComponent(
  "Olá Heverton! Vim pelo site H9 e gostaria de conversar sobre consultoria para minha operação em marketplace."
);
const WA_URL = `https://wa.me/5519995517477?text=${WA_MSG}`;

const problems = [
  {
    icon: TrendingDown,
    title: "Fatura alto, lucra pouco",
    text: "Seus números crescem, mas a margem some. Custos invisíveis devoram o resultado.",
  },
  {
    icon: BarChart3,
    title: "Sem controle do caixa",
    text: "Decisões no achismo, sem projeção. Quando a conta chega, o susto também.",
  },
  {
    icon: Search,
    title: "Perdido na categoria",
    text: "Não sabe quem domina, qual faixa de preço atacar, nem onde há espaço.",
  },
  {
    icon: Swords,
    title: "Concorrente sempre na frente",
    text: "Os anúncios dos outros vendem mais. A estratégia ainda não está clara.",
  },
];

const services: Array<{
  title: string;
  text?: string;
  badge?: string;
  items?: string[];
}> = [
  {
    title: "Análise de Categoria",
    text: "Inteligência de mercado com dados reais. Top 1.000 SKUs analisados, vendedores dominantes, marcas, palavras-chave estratégicas e ângulos de entrada com baixa concorrência.",
    badge: "HTML + Excel entregues",
  },
  {
    title: "Consultoria Estratégica",
    items: [
      "Diagnóstico completo da operação",
      "Estratégia de precificação com margem real",
      "Análise e otimização de portfólio",
      "Posicionamento de anúncios no marketplace",
      "Acompanhamento semanal de métricas",
      "Plano de crescimento sustentável",
    ],
  },
  {
    title: "Ferramentas Exclusivas",
    text: "Calculadora de precificação estratégica, gestão de portfólio e outros apps desenvolvidos para a realidade do marketplace brasileiro.",
    badge: "Acesso na Área do Cliente",
  },
  {
    title: "Treinamentos",
    text: "Conteúdos práticos para você e sua equipe dominarem os marketplaces com método, consistência e resultado medido.",
    badge: "Em breve",
  },
];

const ebookBenefits = [
  "Lucratividade Real — pare de se iludir com o faturamento",
  "Fluxo de Caixa Blindado — chega de decisão no achismo",
  "Precificação estratégica que protege sua margem",
  "Gestão financeira que ama, vende e abençoa",
];

const marketplaces = [
  { name: "Mercado Livre", color: "#FFE600", text: "#333" },
  { name: "Shopee", color: "#EE4D2D", text: "#fff" },
  { name: "TikTok Shop", color: "#000000", text: "#fff" },
  { name: "Magalu", color: "#0052CC", text: "#fff" },
  { name: "Amazon", color: "#FF9900", text: "#131921" },
];

const blogPosts = [
  {
    slug: "faturamento-alto-lucro-zero",
    category: "Lucratividade",
    title: "Faturamento alto, lucro zero: como sair dessa armadilha",
    excerpt:
      "Entenda por que crescer nas vendas não significa crescer no resultado — e como virar esse jogo.",
    date: "Maio 2026",
  },
  {
    slug: "fluxo-de-caixa-intuicao-financeira",
    category: "Gestão Financeira",
    title: "Fluxo de caixa: por que sua intuição financeira te engana",
    excerpt:
      "A conta bancária mentiu para você hoje. Veja como criar clareza real sobre o dinheiro do seu negócio.",
    date: "Maio 2026",
  },
  {
    slug: "como-precificar-mercado-livre-sem-perder-margem",
    category: "Marketplace",
    title: "Como precificar no Mercado Livre sem perder margem",
    excerpt:
      "Um método prático para calcular o preço mínimo viável e ainda ganhar competitividade no Mercado Livre.",
    date: "Maio 2026",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="space-y-7 animate-fade-up">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-manrope font-medium px-3 py-1.5 rounded-full border border-white/20">
                Consultoria Estratégica · Limeira, SP
              </span>

              <h1
                className="font-playfair text-white leading-tight"
                style={{ fontSize: "clamp(2.5rem,5vw,5rem)" }}
              >
                Seu negócio com{" "}
                <span className="text-gold italic">lucro real</span>,<br />
                gestão e propósito.
              </h1>

              <p className="text-white/70 font-manrope text-lg leading-relaxed max-w-lg">
                Transformamos vendedores que crescem mas não lucram em donos de negócio com
                margem saudável, processos sólidos e uma razão de existir que move.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Sem contrato longo", "Comissão sobre resultado", "Ética acima de tudo"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="bg-gold/20 text-gold text-xs font-manrope font-semibold px-3 py-1.5 rounded-full border border-gold/30"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href={WA_URL} variant="whatsapp" size="lg" external>
                  Falar com Heverton
                </Button>
                <Button
                  href="/servicos"
                  variant="outline"
                  size="lg"
                  className="border-white/60 text-white hover:bg-white hover:text-navy"
                >
                  Conhecer os serviços
                </Button>
              </div>

              <p className="slogan text-xl">
                &ldquo;Amar, Vender para Abençoar&rdquo;
              </p>
            </div>

            {/* Right — Video placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-video rounded-2xl border border-gold/30 bg-white/5 flex flex-col items-center justify-center gap-4 shadow-2xl">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center">
                  <Play className="w-7 h-7 text-gold fill-gold ml-1" />
                </div>
                <div className="text-center px-6">
                  <p className="text-white font-manrope font-semibold">
                    Em breve — Heverton apresenta a H9
                  </p>
                  <p className="text-white/50 font-manrope text-sm mt-1">
                    Consultor estratégico de marketplaces
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl text-navy mb-4">
              Você fatura bem. Mas no final do mês, o dinheiro sumiu?
            </h2>
            <p className="text-navy/60 font-manrope text-lg">
              Essa é a realidade de muitos sellers. A H9 existe para mudar isso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-h9gray rounded-xl p-6 hover:shadow-md transition-shadow border border-transparent hover:border-gold/20"
              >
                <div className="w-11 h-11 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-manrope font-bold text-navy mb-2">{title}</h3>
                <p className="text-navy/60 font-manrope text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-navy font-manrope font-semibold mb-4">
              Reconheceu alguma dessas dores?
            </p>
            <Button href={WA_URL} variant="whatsapp" size="md" external>
              Falar com Heverton agora
            </Button>
          </div>
        </div>
      </section>

      {/* ── QUEM É HEVERTON ── */}
      <section className="py-20 bg-h9gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Foto placeholder */}
            <div className="flex justify-center">
              <div className="foto-heverton w-72 h-80 sm:w-80 sm:h-96 rounded-2xl border-4 border-gold bg-navy/10 flex items-center justify-center shadow-lg">
                <div className="text-center text-navy/40 font-manrope text-sm px-6">
                  <div className="w-20 h-20 rounded-full bg-navy/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-navy/40">H</span>
                  </div>
                  Foto de Heverton
                  <br />
                  será adicionada em breve
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair text-3xl sm:text-4xl text-navy">
                  Heverton Marques
                </h2>
                <p className="text-gold font-manrope font-semibold mt-1">
                  Consultor Estratégico de Marketplaces
                </p>
              </div>

              <div className="space-y-4 text-navy/70 font-manrope leading-relaxed">
                <p>
                  Passei pelo que muitos sellers enfrentam — a sensação de vender muito e lucrar
                  pouco, de trabalhar muito e não ter paz. Construí uma empresa, vi ela quebrar,
                  e aprendi na prática o que funciona e o que destrói um negócio.
                </p>
                <p>
                  Hoje, cada cliente que acompanho carrega um pedaço dessa jornada. Não trabalho
                  com fórmulas genéricas. Trabalho com dados reais, estratégia honesta e um
                  compromisso que vai além do resultado: quero que você construa um negócio
                  sustentável, com propósito e paz.
                </p>
              </div>

              <div className="bg-navy rounded-xl p-5 border-l-4 border-gold">
                <p className="slogan text-xl mb-2">
                  &ldquo;Amar, Vender para Abençoar&rdquo;
                </p>
                <p className="text-white/70 font-manrope text-sm leading-relaxed">
                  Essa não é apenas uma frase. É o princípio que guia cada decisão, cada análise
                  e cada orientação que entrego.
                </p>
              </div>

              <div>
                <p className="text-navy/50 font-manrope text-xs uppercase tracking-wider mb-3">
                  Marketplaces atendidos
                </p>
                <div className="flex flex-wrap gap-2">
                  {marketplaces.map((m) => (
                    <span
                      key={m.name}
                      className="px-3 py-1.5 rounded-lg text-xs font-manrope font-bold border border-navy/10"
                      style={{ backgroundColor: m.color, color: m.text }}
                    >
                      {m.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl text-white mb-4">
              O que a H9 entrega
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white/5 border border-white/10 hover:border-gold/50 rounded-xl p-6 transition-all duration-200 group flex flex-col"
              >
                <h3 className="font-playfair text-xl text-white mb-3 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>

                {s.items ? (
                  /* Card com lista — Consultoria Estratégica */
                  <ul className="flex-1 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/70 font-manrope text-[13px]">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  /* Card padrão — texto + badge */
                  <>
                    <p className="text-white/60 font-manrope text-sm leading-relaxed mb-5 flex-1">{s.text}</p>
                    {s.badge && (
                      <span className="inline-block bg-gold/20 text-gold text-xs font-manrope font-semibold px-3 py-1 rounded-full border border-gold/30 self-start">
                        {s.badge}
                      </span>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              href="/servicos"
              variant="outline"
              size="md"
              className="border-gold text-gold hover:bg-gold hover:text-navy"
            >
              Ver todos os serviços
            </Button>
          </div>
        </div>
      </section>

      {/* ── EBOOK ── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0F2D5C 0%, #1A3F78 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-gold text-navy text-xs font-manrope font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Ebook Gratuito
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl text-white leading-snug">
                Os 7 Erros Que Quebram as Empresas
              </h2>
              <p className="text-white/60 font-manrope leading-relaxed">
                O guia prático para dominar custos, margens, ponto de equilíbrio e precificação
                estratégica — com propósito.
              </p>
              <ul className="space-y-3">
                {ebookBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/80 font-manrope text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="font-playfair text-2xl text-navy mb-6">
                Quero receber o ebook gratuito
              </h3>
              <form action="/api/leads" method="POST" className="space-y-4">
                <div>
                  <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                    Nome completo
                  </label>
                  <input
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                    E-mail
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
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
                    className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full font-bold tracking-wide">
                  BAIXAR AGORA
                </Button>
                <p className="text-navy/40 font-manrope text-xs text-center">
                  Sem spam. Seus dados são respeitados.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTEMUNHO ── */}
      <section className="py-20 bg-h9gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl text-navy mb-10">
            Uma história real por trás da consultoria
          </h2>
          <blockquote className="bg-navy rounded-2xl p-8 sm:p-10 text-left relative">
            <div className="absolute top-6 left-8 text-gold text-6xl font-playfair leading-none opacity-40">
              &ldquo;
            </div>
            <p className="text-white/80 font-manrope leading-relaxed text-lg pt-8">
              Em 2025, fiquei sozinho em um barracão de 500m² que antes ocupava doze pessoas. Vi
              uma empresa que construí por anos desmoronar. Passei pelo vale da sombra — sem
              salário, com contas atrasadas, no limite emocional. Mas foi naquele silêncio que
              ouvi a direção mais improvável: focar na consultoria.
              <br />
              <br />
              Hoje entendo que cada cliente que atendo carrega um propósito maior. Não é só
              negócio. É missão.
            </p>
            <footer className="mt-6 font-manrope font-semibold text-gold">
              — Heverton Marques
            </footer>
          </blockquote>
          <div className="mt-8">
            <Button href="/sobre" variant="primary" size="md">
              Conhecer a história completa
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl text-navy mb-3">
              Novidades do marketplace
            </h2>
            <p className="text-navy/60 font-manrope">
              Conteúdo prático para vender mais com método e consistência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-navy/10 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-navy/5 flex items-center justify-center border-b border-navy/10">
                  <span className="text-navy/20 font-playfair text-4xl font-bold">H9</span>
                </div>
                <div className="p-5">
                  <span className="text-gold font-manrope text-xs font-bold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="font-playfair text-lg text-navy mt-2 mb-2 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-navy/60 font-manrope text-sm leading-relaxed">{post.excerpt}</p>
                  <p className="text-navy/30 font-manrope text-xs mt-3">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/blog" variant="outline" size="md">
              Ver todos os artigos
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0F2D5C 0%, #1A3F78 60%, #0F2D5C 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-playfair text-3xl sm:text-4xl text-white leading-snug">
            Pronto para vender com lucro real?
          </h2>
          <p className="text-white/70 font-manrope text-lg">
            Sem contrato longo. Sem promessa vazia. Comissão sobre resultado.
          </p>
          <div className="flex justify-center">
            <Button href={WA_URL} variant="whatsapp" size="lg" external>
              Falar com Heverton agora
            </Button>
          </div>
          <p className="text-white/50 font-manrope text-sm">
            (19) 99551-7477 · Limeira, SP
          </p>
          <p className="slogan text-2xl">Amar, Vender para Abençoar</p>
        </div>
      </section>
    </>
  );
}
