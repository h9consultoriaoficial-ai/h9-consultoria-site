"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "whatsapp" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-light",
  gold: "bg-gold text-navy hover:bg-gold-light",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe5a]",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white bg-transparent",
  ghost: "bg-transparent text-navy hover:bg-navy/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-manrope font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {variant === "whatsapp" && <MessageCircle className="w-5 h-5" />}
      {children}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
