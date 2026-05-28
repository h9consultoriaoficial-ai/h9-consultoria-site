import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Serviços — H9 Consultoria Estratégica",
  description:
    "Conheça todos os serviços da H9 Consultoria: análise de categoria, consultoria estratégica, ferramentas exclusivas e treinamentos para sellers em marketplaces.",
};

const WA_MSG = encodeURIComponent(
  "Olá Heverton! Vi os serviços no site H9 e quero saber mais sobre como posso contratar."
);
const WA_URL = `https://wa.me/5519995517477?text=${WA_MSG}`;

const services = [
  {
    id: "analise",
    badge: "Entregável",
    title: "Análise de Categoria",
    subtitle: "Inteligência de mercado com dados reais",
    desc: "Antes de entrar em uma categoria — ou escalar dentro dela — você precisa entender o terreno. Nossa análise mapeia os Top 1.000 SKUs mais vendidos da categoria escolhida, revelando quem domina, como precificam, quais palavras-chave utilizam e onde há espaço estratégico para você atuar.",
    includes: [
      "Top 1.000 SKUs mais vendidos na categoria",
      "Ranking de vendedores dominantes com volume estimado",
      "Análise de marcas e share de mercado",
      "Mapeamento de faixa de preço e posicionamento",
      "Palavras-chave estratégicas (título e descrição)",
      "Ângulos de entrada com baixa concorrência",
      "Relatório em HTML + planilha Excel completa",
    ],
    ideal: [
      "Sellers que querem entrar em uma nova categoria",
      "Quem precisa reposicionar produtos existentes",
      "Gestores buscando dados para tomada de decisão",
      "Compradores que querem validar um novo produto",
    ],
    badge2: "HTML + Excel entregues",
    color: "border-l-gold",
  },
  {
    id: "consultoria",
    badge: "Acompanhamento",
    title: "Consultoria Estratégica",
    subtitle: "Operação acompanhada com foco em margem real",
    desc: "Trabalhamos juntos na sua operação, mês a mês. Não é uma assessoria genérica: é um olhar cirúrgico sobre o que está funcionando, o que está sangrando e o que precisa mudar. O modelo é simples — cobramos comissão sobre resultado. Se você não lucra mais, não cobramos mais.",
    includes: [
      "Diagnóstico completo da operação (margem, portfólio, anúncios)",
      "Precificação estratégica com margem real calculada",
      "Análise e otimização do portfólio de produtos",
      "Estratégia de anúncios e posicionamento",
      "Planejamento de crescimento com metas reais",
      "Reuniões periódicas de acompanhamento",
      "Suporte direto via WhatsApp",
    ],
    ideal: [
      "Sellers que faturam mas não lucram",
      "Operações que cresceram mas perderam o controle",
      "Donos de negócio que querem tomar decisões com dados",
      "Quem quer escalar sem quebrar a margem",
    ],
    badge2: "Comissão sobre resultado",
    color: "border-l-gold",
  },
  {
    id: "ferramentas",
    badge: "Exclusivo",
    title: "Ferramentas H9",
    subtitle: "Apps desenvolvidos para a realidade do marketplace",
    desc: "Ferramentas criadas especificamente para sellers de marketplace brasileiro — não adaptações de softwares genéricos. Cada ferramenta resolve um problema real que vemos na operação dos nossos clientes.",
    includes: [
      "Calculadora de precificação com todas as taxas do marketplace",
      "Simulador de ponto de equilíbrio",
      "Gestão de portfólio com ranking de margem",
      "Dashboard de análise de resultados",
      "Acesso exclusivo pela Área do Cliente H9",
      "Atualizações conforme novas plataformas e taxas",
    ],
    ideal: [
      "Clientes H9 em plano de consultoria",
      "Sellers que querem ferramentas específicas para marketplace",
      "Gestores que precisam de dados organizados para decidir",
    ],
    badge2: "Acesso na Área do Cliente",
    color: "border-l-gold",
  },
  {
    id: "treinamentos",
    badge: "Em breve",
    title: "Treinamentos H9",
    subtitle: "Conteúdo prático para você e sua equipe",
    desc: "Módulos de treinamento criados com base nos erros e acertos reais de operações de marketplace. Sem teoria genérica — apenas o que funciona na prática, com dados e exemplos reais.",
    includes: [
      "Fundamentos de lucratividade em marketplace",
      "Precificação estratégica passo a passo",
      "Fluxo de caixa na prática",
      "Como ler e usar uma análise de categoria",
      "Gestão de portfólio com foco em margem",
      "Módulo de propósito e gestão com valores",
    ],
    ideal: [
      "Sellers que querem aprender no próprio ritmo",
      "Equipes que precisam de capacitação em marketplace",
      "Donos de negócio que querem dominar os fundamentos",
    ],
    badge2: "Liberação em breve",
    color: "border-l-navy/30",
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl text-white mb-4">Nossos Serviços</h1>
          <p className="text-white/60 font-manrope text-lg max-w-xl mx-auto">
            Tudo que a H9 entrega — sem contrato longo, sem promessa vazia, com comissão sobre
            resultado.
          </p>
          <p className="slogan text-xl mt-4">Amar, Vender para Abençoar</p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-h9gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((s) => (
            <div
              key={s.id}
              className={`bg-white rounded-2xl p-8 shadow-sm border-l-4 ${s.color} border border-navy/5`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <span className="text-gold font-manrope text-xs font-bold uppercase tracking-wider">
                    {s.badge}
                  </span>
                  <h2 className="font-playfair text-2xl sm:text-3xl text-navy mt-1">{s.title}</h2>
                  <p className="text-navy/50 font-manrope text-sm mt-0.5">{s.subtitle}</p>
                </div>
                <span className="bg-gold/10 text-gold border border-gold/30 font-manrope text-xs font-bold px-3 py-1.5 rounded-full">
                  {s.badge2}
                </span>
              </div>

              <p className="text-navy/70 font-manrope leading-relaxed mb-6">{s.desc}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-manrope font-bold text-navy text-sm uppercase tracking-wide mb-3">
                    O que está incluído
                  </h3>
                  <ul className="space-y-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-navy/70 font-manrope text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-manrope font-bold text-navy text-sm uppercase tracking-wide mb-3">
                    Para quem é ideal
                  </h3>
                  <ul className="space-y-2">
                    {s.ideal.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-navy/70 font-manrope text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-navy/5">
                <Button href={WA_URL} variant="whatsapp" size="md" external>
                  Quero saber mais sobre {s.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <h2 className="font-playfair text-2xl sm:text-3xl text-white">
            Não sabe qual serviço faz mais sentido?
          </h2>
          <p className="text-white/60 font-manrope">
            Fale diretamente com Heverton. Em uma conversa rápida, ele identifica o que sua
            operação precisa.
          </p>
          <Button href={WA_URL} variant="whatsapp" size="lg" external>
            Conversar com Heverton
          </Button>
          <p className="slogan text-lg mt-2">Amar, Vender para Abençoar</p>
        </div>
      </section>
    </>
  );
}
