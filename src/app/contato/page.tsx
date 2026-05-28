"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const WA_URL =
  "https://wa.me/5519995517477?text=Olá%20Heverton!%20Vim%20pelo%20site%20H9%20e%20quero%20tirar%20uma%20dúvida.";

const assuntos = [
  "Análise de Categoria",
  "Consultoria Estratégica",
  "Ferramentas H9",
  "Treinamentos",
  "Dúvida geral",
  "Outro assunto",
];

export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    assunto: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Erro ao enviar mensagem. Tente pelo WhatsApp.");
      }
    } catch {
      setError("Erro de conexão. Use o WhatsApp abaixo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl text-white mb-4">Fale com a H9</h1>
          <p className="text-white/60 font-manrope text-lg">
            Temos a resposta mais rápida via WhatsApp. Mas o formulário também funciona.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 bg-h9gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-navy/5 space-y-5">
                <h2 className="font-playfair text-xl text-navy">Informações de contato</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-manrope text-xs text-navy/40 uppercase tracking-wide">
                        WhatsApp
                      </p>
                      <a
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-manrope font-semibold text-navy hover:text-gold transition-colors"
                      >
                        (19) 99551-7477
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-manrope text-xs text-navy/40 uppercase tracking-wide">
                        E-mail
                      </p>
                      <a
                        href="mailto:h9consultoriaoficial@gmail.com"
                        className="font-manrope font-semibold text-navy hover:text-gold transition-colors text-sm break-all"
                      >
                        h9consultoriaoficial@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-manrope text-xs text-navy/40 uppercase tracking-wide">
                        Localização
                      </p>
                      <p className="font-manrope font-semibold text-navy">Limeira, SP</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-navy/5">
                  <Button href={WA_URL} variant="whatsapp" size="md" external className="w-full justify-center">
                    Falar pelo WhatsApp agora
                  </Button>
                </div>
              </div>

              <div className="bg-navy rounded-xl p-5 text-center">
                <p className="slogan text-lg mb-2">Amar, Vender para Abençoar</p>
                <p className="text-white/50 font-manrope text-xs">
                  Respondemos em até 4 horas úteis.
                </p>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-navy/5 h-full flex flex-col items-center justify-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-success/10 border-2 border-success flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <h2 className="font-playfair text-2xl text-navy mb-2">Mensagem enviada!</h2>
                    <p className="text-navy/60 font-manrope">
                      Heverton retornará em breve. Se precisar de resposta urgente, use o
                      WhatsApp.
                    </p>
                  </div>
                  <Button href={WA_URL} variant="whatsapp" size="md" external>
                    Falar pelo WhatsApp
                  </Button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 border border-navy/5">
                  <h2 className="font-playfair text-xl text-navy mb-6">Enviar mensagem</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                          Nome *
                        </label>
                        <input
                          name="nome"
                          required
                          value={form.nome}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                          WhatsApp
                        </label>
                        <input
                          name="whatsapp"
                          value={form.whatsapp}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                        E-mail *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                        Assunto *
                      </label>
                      <select
                        name="assunto"
                        required
                        value={form.assunto}
                        onChange={handleChange}
                        className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                      >
                        <option value="">Selecione um assunto</option>
                        {assuntos.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                        Mensagem *
                      </label>
                      <textarea
                        name="mensagem"
                        required
                        rows={5}
                        value={form.mensagem}
                        onChange={handleChange}
                        placeholder="Conte um pouco sobre sua situação e o que você precisa..."
                        className="w-full border border-navy/20 rounded-lg px-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      />
                    </div>

                    {error && (
                      <div className="bg-danger/10 border border-danger/20 text-danger text-sm font-manrope rounded-lg px-4 py-3">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Enviando..." : "Enviar mensagem"}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
