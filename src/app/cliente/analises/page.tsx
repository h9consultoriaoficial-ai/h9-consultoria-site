"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabase";
import { ExternalLink, Clock, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import type { ClienteProduto } from "@/types";

const statusConfig = {
  ativo: { label: "Disponível", icon: CheckCircle2, color: "text-success bg-success/10 border-success/20" },
  pendente: { label: "Pendente", icon: Clock, color: "text-gold bg-gold/10 border-gold/20" },
  expirado: { label: "Expirado", icon: AlertCircle, color: "text-danger bg-danger/10 border-danger/20" },
};

export default function AnalisesPage() {
  const { data: session } = useSession();
  const [analises, setAnalises] = useState<ClienteProduto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!session?.user) return;
      const { data } = await supabase
        .from("cliente_produtos")
        .select("*")
        .eq("tipo", "analise")
        .order("criado_em", { ascending: false });
      setAnalises((data as ClienteProduto[]) ?? []);
      setLoading(false);
    }
    load();
  }, [session]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-playfair text-2xl sm:text-3xl text-navy">Minhas Análises</h1>
        <p className="text-navy/50 font-manrope text-sm mt-1">
          Relatórios de categoria entregues pela H9 Consultoria.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-32 bg-white rounded-xl animate-pulse border border-navy/5" />
          ))}
        </div>
      ) : analises.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center border border-navy/5">
          <BarChart3Icon className="w-12 h-12 text-navy/20 mx-auto mb-4" />
          <h2 className="font-playfair text-xl text-navy mb-2">
            Nenhuma análise disponível ainda
          </h2>
          <p className="text-navy/50 font-manrope text-sm mb-6">
            Solicite sua primeira análise de categoria e receba um relatório completo com dados
            reais do mercado.
          </p>
          <a
            href="https://wa.me/5519995517477?text=Olá%20Heverton!%20Quero%20solicitar%20uma%20análise%20de%20categoria."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-manrope font-semibold px-5 py-2.5 rounded-lg hover:bg-[#1ebe5a] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar análise agora
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {analises.map((a) => {
            const status = statusConfig[a.status];
            const StatusIcon = status.icon;
            return (
              <div
                key={a.id}
                className="bg-white rounded-xl p-6 border border-navy/5 hover:border-gold/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-manrope font-bold text-navy">{a.nome}</h3>
                    {a.mes_referencia && (
                      <p className="text-navy/40 font-manrope text-xs mt-0.5">{a.mes_referencia}</p>
                    )}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-manrope font-semibold px-2.5 py-1 rounded-full border ${status.color}`}
                  >
                    <StatusIcon className="w-3.5 h-3.5" />
                    {status.label}
                  </span>
                </div>
                {a.descricao && (
                  <p className="text-navy/50 font-manrope text-sm mb-4">{a.descricao}</p>
                )}
                {a.url && a.status === "ativo" ? (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-navy text-white font-manrope text-sm font-semibold px-4 py-2 rounded-lg hover:bg-navy-light transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visualizar
                  </a>
                ) : (
                  <span className="text-navy/30 font-manrope text-sm">
                    Disponível em breve
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function BarChart3Icon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
