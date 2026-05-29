import type { Metadata } from "next";
import Image from "next/image";
import { AudioPlayerHero } from "@/components/ui/AudioPlayerHero";

export const metadata: Metadata = {
  title: "Testemunho & Música | H9 Consultoria Estratégica",
  description:
    "A história real de fé, recomeço e propósito que deu origem à H9 Consultoria — e a canção que nasceu da obediência.",
};

const WA_URL = "https://wa.me/5519995517477";

export default function TestemunhoMusicaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: "#0F2D5C", padding: "80px 24px 48px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              background: "#C9A84C",
              color: "white",
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: "999px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "24px",
              fontFamily: "var(--font-manrope)",
            }}
          >
            Testemunho Real
          </span>

          <h1
            className="font-playfair"
            style={{
              color: "white",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            A Espera da Voz do Pai
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "var(--font-manrope)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
            }}
          >
            Uma história real de fé, recomeço e propósito —
            <br />a cicatriz que se tornou a fundação da H9 Consultoria.
          </p>
        </div>
      </section>

      {/* ── Player de áudio ── */}
      <section style={{ background: "#0F2D5C", padding: "0 24px 64px" }}>
        <AudioPlayerHero />
      </section>

      {/* ── Infográfico ── */}
      <section style={{ background: "#F5F0E8", padding: "64px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h2
            className="font-playfair"
            style={{
              color: "#0F2D5C",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              marginBottom: "12px",
            }}
          >
            A Jornada em 6 Capítulos
          </h2>
          <p
            style={{
              color: "#6B7280",
              fontFamily: "var(--font-manrope)",
              lineHeight: 1.7,
            }}
          >
            Do barracão vazio ao nascimento de uma canção —
            <br />
            veja a linha do tempo completa do testemunho.
          </p>

          <Image
            src="/images/testemunho-infografico.png"
            alt="Infográfico: Testemunho Real — Heverton Marques — A Espera da Voz do Pai"
            width={480}
            height={800}
            style={{
              maxWidth: "480px",
              width: "100%",
              height: "auto",
              margin: "32px auto 0",
              display: "block",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          />
        </div>
      </section>

      {/* ── Versículo ── */}
      <section style={{ background: "#0F2D5C", padding: "64px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          {/* Separador superior */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#C9A84C",
              margin: "0 auto 24px",
            }}
          />

          <p
            style={{
              color: "white",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              fontSize: "1.25rem",
              lineHeight: 1.8,
            }}
          >
            &ldquo;Espera pelo Senhor: anima-te e fortalece teu coração;
            <br />
            espera, pois, pelo Senhor.&rdquo;
          </p>

          <p
            style={{
              color: "#C9A84C",
              fontWeight: 600,
              marginTop: "16px",
              fontFamily: "var(--font-manrope)",
            }}
          >
            — Salmos 27:14
          </p>

          {/* Separador inferior */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#C9A84C",
              margin: "24px auto 0",
            }}
          />
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ background: "#F5F0E8", padding: "64px 24px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <h2
            className="font-playfair"
            style={{
              color: "#0F2D5C",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: "16px",
            }}
          >
            Essa história também é sobre o seu negócio
          </h2>

          <p
            style={{
              color: "#6B7280",
              fontFamily: "var(--font-manrope)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            A H9 nasceu da cicatriz. Se você está num momento difícil na sua
            operação — sem margem, sem clareza, sem direção — vamos conversar.
            Sem enrolação.
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#C9A84C",
              color: "white",
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "16px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              width: "100%",
              maxWidth: "400px",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            Falar com Heverton no WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
