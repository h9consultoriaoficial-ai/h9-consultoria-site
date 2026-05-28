"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { LayoutDashboard, BarChart3, Wrench, GraduationCap, LogOut } from "lucide-react";

const clientLinks = [
  { href: "/cliente/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/cliente/analises", label: "Análises", icon: BarChart3 },
  { href: "/cliente/apps", label: "Ferramentas", icon: Wrench },
  { href: "/cliente/treinamentos", label: "Treinamentos", icon: GraduationCap },
];

export default function ClienteNavbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <header className="bg-navy shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/cliente/dashboard">
            <Image
              src="https://h9-assets.netlify.app/logo-branco.png"
              alt="H9 Consultoria"
              width={100}
              height={34}
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {clientLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-manrope font-medium transition-colors ${
                  pathname === href
                    ? "bg-white/10 text-gold"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {session?.user?.name && (
              <span className="text-white/60 font-manrope text-sm hidden sm:block">
                Olá, {session.user.name.split(" ")[0]}
              </span>
            )}
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-1.5 text-white/50 hover:text-white font-manrope text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>

        {/* Mobile links */}
        <div className="flex md:hidden gap-1 pb-2 overflow-x-auto">
          {clientLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-manrope font-medium whitespace-nowrap transition-colors ${
                pathname === href
                  ? "bg-white/10 text-gold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
