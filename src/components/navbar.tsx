"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconClose, IconMenu } from "@/components/icons";

const links = [
  { href: "/program", label: "Program" },
  { href: "/bergabung", label: "Bergabung" },
  { href: "/dukung", label: "Dukung Kami" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] flex h-20 items-center justify-between border-b px-[5vw] backdrop-blur-md transition-colors duration-300 ${
        transparent
          ? "border-transparent bg-transparent"
          : "border-beige-dark bg-beige/95"
      }`}
    >
      <Link href="/" className="flex items-center" aria-label="Beranda GenSa">
        <Image
          src={transparent ? "/images/logo-white.png" : "/images/logo-color.png"}
          alt="GenSa — Generasi Shalahuddin"
          width={386}
          height={145}
          priority
          className="h-12 w-auto"
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden items-center gap-2 md:flex">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                active
                  ? "border-maroon text-maroon"
                  : `border-transparent ${transparent ? "text-white" : "text-ink"} hover:text-maroon`
              }`}
            >
              {l.label}
            </Link>
          );
        })}
        <Link
          href="/tentang"
          className={`ml-2 rounded border px-5 py-2 text-sm font-medium transition-colors ${
            pathname === "/tentang"
              ? "border-maroon bg-maroon text-white"
              : transparent
                ? "border-white/60 text-white hover:border-white"
                : "border-maroon text-maroon hover:bg-maroon hover:text-white"
          }`}
        >
          Tentang Kami
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={mobileOpen}
        className={`flex cursor-pointer items-center justify-center rounded p-2 md:hidden ${
          transparent ? "text-white" : "text-ink"
        }`}
      >
        {mobileOpen ? <IconClose /> : <IconMenu />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-[99] flex flex-col gap-6 bg-beige px-[5vw] py-8 md:hidden">
          {[...links, { href: "/tentang", label: "Tentang Kami" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b border-beige-dark pb-2 text-left font-serif text-xl font-semibold ${
                pathname === l.href ? "text-maroon" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
