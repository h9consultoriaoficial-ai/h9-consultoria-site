import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Conteúdo estratégico para sellers",
  description:
    "Artigos práticos sobre lucratividade, precificação, gestão financeira e estratégia em marketplaces. Por Heverton Marques, H9 Consultoria.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl sm:text-5xl text-white mb-4">
            Blog H9
          </h1>
          <p className="text-white/60 font-manrope text-lg max-w-xl mx-auto">
            Conteúdo prático para sellers que querem vender com método, margem e propósito.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-h9gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-navy/50 font-manrope">Nenhum post publicado ainda.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row gap-6 bg-white rounded-xl p-6 shadow-sm border border-navy/5 hover:border-gold/30 hover:shadow-md transition-all"
                >
                  <div className="sm:w-40 h-28 sm:h-auto bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-navy/20 font-playfair text-3xl font-bold">H9</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gold font-manrope text-xs font-bold uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-navy/30 font-manrope text-xs">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="font-playfair text-xl text-navy group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-navy/60 font-manrope text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-gold font-manrope text-sm font-semibold">
                      Ler artigo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy text-center">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <h2 className="font-playfair text-2xl text-white">
            Gostou do conteúdo?
          </h2>
          <p className="text-white/60 font-manrope">
            Baixe o ebook gratuito ou fale diretamente com Heverton.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/ebook"
              className="bg-gold text-navy font-manrope font-bold px-6 py-3 rounded-lg hover:bg-gold-light transition-colors"
            >
              Baixar Ebook Grátis
            </Link>
            <a
              href="https://wa.me/5519995517477"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-manrope font-bold px-6 py-3 rounded-lg hover:bg-[#1ebe5a] transition-colors"
            >
              Falar com Heverton
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
