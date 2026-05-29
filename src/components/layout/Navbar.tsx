"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/ebook", label: "Ebook" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname.startsWith("/cliente")) return null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://h9-assets.netlify.app/logo-branco.png"
              alt="H9 Consultoria Estratégica"
              width={180}
              height={60}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-manrope text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/auth/login"
              className="font-manrope text-sm font-semibold border border-gold text-gold px-4 py-2 rounded-lg hover:bg-gold hover:text-navy transition-all duration-200"
            >
              Área do Cliente
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy-dark border-t border-white/10 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 font-manrope text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-gold" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/auth/login"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-3 text-center border border-gold text-gold px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-gold hover:text-navy transition-all"
            >
              Área do Cliente
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
