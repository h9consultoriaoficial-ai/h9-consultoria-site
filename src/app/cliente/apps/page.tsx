import type { Metadata } from "next";
import { ExternalLink, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Ferramentas | Área do Cliente H9",
};

const apps = [
  {
    title: "Calculadora de Precificação",
    desc: "Calcule sua margem real com todos os custos do marketplace. Suporte a Mercado Livre, Shopee, Magalu e Amazon.",
    badge: "Disponível",
    available: true,
    url: "https://lovable.app", // substituir pela URL real
    color: "bg-navy",
  },
  {
    title: "Gestão de Portfólio",
    desc: "Analise quais produtos estão gerando margem, quais estão sugando caixa e onde focar sua energia.",
    badge: "Em breve",
    available: false,
    color: "bg-navy/40",
  },
  {
    title: "Simulador de Ponto de Equilíbrio",
    desc: "Descubra quanto você precisa vender mensalmente para cobrir todas as despesas fixas.",
    badge: "Em breve",
    available: false,
    color: "bg-navy/40",
  },
  {
    title: "Análise de Concorrência",
    desc: "Compare sua operação com os maiores vendedores da categoria e identifique brechas de entrada.",
    badge: "Em breve",
    available: false,
    color: "bg-navy/40",
  },
];

export default function AppsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-playfair text-2xl sm:text-3xl text-navy">Ferramentas</h1>
        <p className="text-navy/50 font-manrope text-sm mt-1">
          Apps exclusivos para sua operação em marketplace.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {apps.map((app) => (
          <div
            key={app.title}
            className={`bg-white rounded-xl p-6 border transition-all ${
              app.available
                ? "border-navy/10 hover:border-gold/30 hover:shadow-md"
                : "border-navy/5 opacity-70"
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div
                className={`${app.color} w-10 h-10 rounded-lg flex items-center justify-center`}
              >
                {app.available ? (
                  <ExternalLink className="w-5 h-5 text-gold" />
                ) : (
                  <Lock className="w-5 h-5 text-white/50" />
                )}
              </div>
              <span
                className={`text-xs font-manrope font-bold px-2.5 py-1 rounded-full border ${
                  app.available
                    ? "bg-success/10 text-success border-success/20"
                    : "bg-navy/5 text-navy/40 border-navy/10"
                }`}
              >
                {app.badge}
              </span>
            </div>

            <h3
              className={`font-manrope font-bold mb-2 ${
                app.available ? "text-navy" : "text-navy/40"
              }`}
            >
              {app.title}
            </h3>
            <p className="text-navy/50 font-manrope text-sm leading-relaxed mb-4">{app.desc}</p>

            {app.available && app.url ? (
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy text-white font-manrope text-sm font-semibold px-4 py-2 rounded-lg hover:bg-navy-light transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Acessar ferramenta
              </a>
            ) : (
              <span className="text-navy/30 font-manrope text-sm italic">Em desenvolvimento</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
