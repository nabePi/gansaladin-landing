"use client";

import { useEffect, useState } from "react";
import { smoothScrollToHash } from "@/lib/smooth-scroll";

const PILLS = [
  { href: "#studio", label: "Studio Dakwah", border: "border-[#7B1A1A] text-[#7B1A1A] hover:bg-[#7B1A1A] hover:text-white" },
  { href: "#class", label: "GenSa Class", border: "border-[#0E6B54] text-[#0E6B54] hover:bg-[#0E6B54] hover:text-white" },
  { href: "#rumah", label: "Rumah Literasi", border: "border-[#C9962A] text-[#7A5C18] hover:bg-[#C9962A] hover:text-white" },
];

export default function PillNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 56);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-20 z-[300] flex h-14 items-center justify-between border-b px-5 transition-colors duration-300 ${
        scrolled
          ? "border-[#5C4838]/15 bg-[#F6F0E8]/96 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#hero"
        onClick={(e) => smoothScrollToHash(e, "hero")}
        className="flex items-center gap-1.5 font-serif text-lg font-bold text-[#7B1A1A]"
      >
        <span>☽✦</span> GenSa
      </a>
      <div className="hidden items-center gap-2 sm:flex">
        {PILLS.map((p) => (
          <a
            key={p.href}
            href={p.href}
            onClick={(e) => smoothScrollToHash(e, p.href.slice(1))}
            className={`rounded-full border-[1.5px] px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${p.border}`}
          >
            {p.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
