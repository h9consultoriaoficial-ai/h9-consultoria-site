import type { Metadata } from "next";
import { Lock, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Treinamentos | Área do Cliente H9",
};

const modules = [
  {
    number: "01",
    title: "Fundamentos de Lucratividade",
    desc: "Como calcular sua margem real e parar de se iludir com o faturamento.",
    duration: "45 min",
    available: false,
  },
  {
    number: "02",
    title: "Precificação Estratégica",
    desc: "O método para definir preços que vendem e ainda protegem sua margem.",
    duration: "60 min",
    available: false,
  },
  {
    number: "03",
    title: "Fluxo de Caixa na Prática",
    desc: "Monte um fluxo de caixa funcional em menos de uma hora.",
    duration: "55 min",
    available: false,
  },
  {
    number: "04",
    title: "Análise de Categoria",
    desc: "Como ler um relatório de categoria e tomar decisões baseadas em dados.",
    duration: "70 min",
    available: false,
  },
  {
    number: "05",
    title: "Gestão de Portfólio",
    desc: "Identifique seus melhores e piores produtos — e o que fazer com cada um.",
    duration: "50 min",
    available: false,
  },
  {
    number: "06",
    title: "Negócio com Propósito",
    desc: "Como alinhar resultado financeiro com valores e razão de existir.",
    duration: "40 min",
    available: false,
  },
];

export default function TreinamentosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-playfair text-2xl sm:text-3xl text-navy">Treinamentos</h1>
        <p className="text-navy/50 font-manrope text-sm mt-1">
          Conteúdos práticos para dominar os marketplaces com método e resultado.
        </p>
      </div>

      <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-navy font-bold text-sm">!</span>
        </div>
        <div>
          <p className="font-manrope font-semibold text-navy text-sm">
            Módulos em produção
          </p>
          <p className="text-navy/60 font-manrope text-sm mt-0.5">
            Os treinamentos estão sendo gravados e serão liberados em breve. Você será notificado
            assim que o primeiro módulo estiver disponível.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod) => (
          <div
            key={mod.number}
            className="bg-white rounded-xl overflow-hidden border border-navy/5 opacity-70"
          >
            <div className="h-32 bg-navy/5 flex items-center justify-center relative">
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-navy/30" />
              </div>
              <span className="absolute top-3 left-3 bg-navy/10 text-navy/40 font-manrope text-xs font-bold px-2 py-0.5 rounded">
                Módulo {mod.number}
              </span>
              <span className="absolute top-3 right-3 bg-navy/10 text-navy/40 font-manrope text-xs px-2 py-0.5 rounded">
                Em breve
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-manrope font-bold text-navy/50 mb-1 text-sm">{mod.title}</h3>
              <p className="text-navy/40 font-manrope text-xs leading-relaxed mb-3">{mod.desc}</p>
              <div className="flex items-center gap-1 text-navy/30 font-manrope text-xs">
                <Play className="w-3 h-3" />
                {mod.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
