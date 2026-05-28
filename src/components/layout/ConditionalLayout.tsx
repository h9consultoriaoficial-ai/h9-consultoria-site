"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const NO_CHROME_PATHS = ["/cliente", "/auth", "/ebook"];

export default function ConditionalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const noChrome = NO_CHROME_PATHS.some((p) => pathname.startsWith(p));

  if (noChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
