"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, Mail, MessageCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("E-mail ou senha incorretos. Verifique seus dados.");
      setLoading(false);
    } else {
      router.push("/cliente/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href="/">
            <Image
              src="https://h9-assets.netlify.app/logo-branco.png"
              alt="H9 Consultoria Estratégica"
              width={140}
              height={48}
              className="h-12 w-auto mx-auto"
            />
          </Link>
          <h1 className="font-playfair text-2xl sm:text-3xl text-white mt-6">
            Área do Cliente H9
          </h1>
          <p className="text-white/50 font-manrope text-sm mt-2">
            Acesse seus relatórios, ferramentas e treinamentos.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full border border-navy/20 rounded-lg pl-10 pr-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-navy font-manrope text-sm font-semibold mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-navy/20 rounded-lg pl-10 pr-4 py-3 font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            {error && (
              <div className="bg-danger/10 border border-danger/20 text-danger text-sm font-manrope rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-navy font-manrope font-bold py-3.5 rounded-lg hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Entrando..." : "Entrar na minha área"}
            </button>
          </form>
        </div>

        {/* Sem acesso */}
        <div className="text-center">
          <p className="text-white/40 font-manrope text-sm mb-3">
            Não tem acesso ainda?
          </p>
          <a
            href="https://wa.me/5519995517477?text=Olá%20Heverton!%20Gostaria%20de%20acesso%20à%20Área%20do%20Cliente%20H9."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#25D366] font-manrope font-semibold text-sm hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            Entre em contato com Heverton
          </a>
        </div>

        <div className="text-center">
          <p className="slogan text-base">Amar, Vender para Abençoar</p>
        </div>
      </div>
    </div>
  );
}
