import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, MessageCircle } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { marked } from "marked";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked(post.content);
  const WA_URL = `https://wa.me/5519995517477?text=${encodeURIComponent(`Olá Heverton! Li o artigo "${post.title}" e quero saber mais sobre consultoria.`)}`;

  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-manrope text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold text-navy font-manrope text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-white/40 font-manrope text-xs">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            {post.title}
          </h1>
          <p className="text-white/60 font-manrope text-lg mt-4 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose prose-lg prose-navy max-w-none font-manrope"
            style={{
              "--tw-prose-body": "#1e3a5f",
              "--tw-prose-headings": "#0F2D5C",
              "--tw-prose-links": "#C9A84C",
              "--tw-prose-bold": "#0F2D5C",
              "--tw-prose-quotes": "#0F2D5C",
            } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* CTA final */}
          <div className="mt-14 bg-navy rounded-2xl p-8 text-center space-y-4">
            <p className="slogan text-xl">Amar, Vender para Abençoar</p>
            <p className="text-white/70 font-manrope">
              Quer aplicar isso no seu negócio? Fale com Heverton.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-manrope font-bold px-6 py-3 rounded-lg hover:bg-[#1ebe5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Heverton no WhatsApp
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
