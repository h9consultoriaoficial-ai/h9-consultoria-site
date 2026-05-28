import type { ReactNode } from "react";
import ClienteNavbar from "@/components/layout/ClienteNavbar";
import SessionProvider from "@/components/providers/SessionProvider";

export default function ClienteLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-h9gray flex flex-col">
        <ClienteNavbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-navy py-3 text-center">
          <p className="text-white/30 font-manrope text-xs">
            © 2026 H9 Consultoria Estratégica
          </p>
        </footer>
      </div>
    </SessionProvider>
  );
}
