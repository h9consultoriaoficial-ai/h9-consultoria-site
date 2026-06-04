"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

// Rotas sem navbar, footer e botão WhatsApp (área privada do cliente)
const NO_CHROME_PATHS = ["/cliente"];

// Rotas que mostram só o navbar (sem footer nem WhatsApp)
const NAVBAR_ONLY_PATHS = ["/auth"];

export default function ConditionalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (NO_CHROME_PATHS.some((p) => pathname.startsWith(p))) {
    return <>{children}</>;
  }

  if (NAVBAR_ONLY_PATHS.some((p) => pathname.startsWith(p))) {
    return (
      <>
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
