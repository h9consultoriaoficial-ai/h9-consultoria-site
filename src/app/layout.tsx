import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "H9 Consultoria Estratégica | Amar, Vender para Abençoar",
    template: "%s | H9 Consultoria Estratégica",
  },
  description:
    "Consultoria estratégica para sellers em marketplaces. Análise de categoria, precificação com margem real e acompanhamento personalizado. Limeira, SP.",
  keywords: [
    "consultoria marketplace",
    "Mercado Livre",
    "Shopee",
    "sellers",
    "precificação",
    "análise de categoria",
    "Limeira SP",
  ],
  openGraph: {
    title: "H9 Consultoria Estratégica",
    description: "Amar, Vender para Abençoar — Consultoria para sellers em marketplaces.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
