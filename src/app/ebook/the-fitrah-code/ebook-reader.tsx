"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FrontMatter } from "./sections/front-matter";
import { Hari1 } from "./sections/hari1";
import { Hari2 } from "./sections/hari2";
import { Hari3 } from "./sections/hari3";
import { Hari4 } from "./sections/hari4";
import { Hari5 } from "./sections/hari5";
import { Hari6 } from "./sections/hari6";
import { Checkpoint } from "./sections/checkpoint";
import { smoothScrollToHash } from "@/lib/smooth-scroll";

const SERIF = "Georgia, 'Noto Serif', 'Times New Roman', serif";

type TocEntry = { href: string; label: string; sub?: boolean } | "divider";

const TOC: TocEntry[] = [
  { href: "#cover", label: "Sampul" },
  { href: "#prolog", label: "Prolog" },
  { href: "#cara-membaca", label: "Cara Membaca Buku Ini" },
  "divider",
  { href: "#fase1", label: "Fase 1 — The Blueprint" },
  { href: "#hari1", label: "Hari 1 — Fathara", sub: true },
  { href: "#hari2", label: "Hari 2 — Ruh dan Nafs", sub: true },
  { href: "#hari3", label: "Hari 3 — Insan", sub: true },
  { href: "#hari4", label: "Hari 4 — Alast", sub: true },
  { href: "#hari5", label: "Hari 5 — Hanif", sub: true },
  { href: "#hari6", label: "Hari 6 — Basyar dan Ruh", sub: true },
  { href: "#checkpoint1", label: "Checkpoint Fase 1", sub: true },
];

const FONT_SIZE_CLASS: Record<"sm" | "md" | "lg", string> = {
  sm: "text-[15.5px]",
  md: "text-[17px]",
  lg: "text-[19px]",
};

export default function EbookReader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">(() => {
    if (typeof window === "undefined") return "md";
    const saved = window.localStorage.getItem("fitrah-fontsize");
    return saved === "sm" || saved === "md" || saved === "lg" ? saved : "md";
  });
  const [progress, setProgress] = useState(0);
  const [showToTop, setShowToTop] = useState(false);
  const [activeId, setActiveId] = useState("cover");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0);
      setShowToTop(h.scrollTop > 600);

      const sections = mainRef.current?.querySelectorAll("section[id]");
      sections?.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) setActiveId(sec.id);
      });
    }
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  function handleFontSize(size: "sm" | "md" | "lg") {
    setFontSize(size);
    window.localStorage.setItem("fitrah-fontsize", size);
  }

  return (
    <div style={{ fontFamily: SERIF }} className="bg-[#FBF6EC] text-[#231F20]">
      {/* Scroll progress */}
      <div
        className="fixed top-20 left-0 z-[900] h-[3px] bg-[linear-gradient(90deg,#7A1524,#A8842B)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />

      {/* Top bar */}
      <header className="fixed inset-x-0 top-20 z-[850] flex h-14 items-center justify-between border-b border-[#e4d7ba] bg-[#FBF6EC]/92 px-3.5 backdrop-blur-sm">
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label="Buka daftar isi"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1 rounded-lg border border-[#e4d7ba] bg-[#FFFEFB] md:hidden"
        >
          <span className="block h-[2px] w-[18px] bg-[#7A1524]" />
          <span className="block h-[2px] w-[18px] bg-[#7A1524]" />
          <span className="block h-[2px] w-[18px] bg-[#7A1524]" />
        </button>
        <button
          onClick={() =>
            document.getElementById("cover")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 overflow-hidden text-[15px] font-black tracking-[.5px] text-[#7A1524]"
        >
          THE FITRAH CODE{" "}
          <small className="font-normal text-[#666]">Fase I · Tim GenSa</small>
        </button>
        <div className="flex items-center gap-1 overflow-hidden rounded-lg border border-[#e4d7ba] bg-[#FFFEFB]">
          <button
            onClick={() => handleFontSize("sm")}
            title="Teks kecil"
            className={`h-[34px] w-[34px] text-[11px] font-bold ${fontSize === "sm" ? "bg-[#F3EAD6]" : ""} text-[#7A1524]`}
          >
            A
          </button>
          <button
            onClick={() => handleFontSize("md")}
            title="Teks sedang"
            className={`h-[34px] w-[34px] text-[15px] font-bold ${fontSize === "md" ? "bg-[#F3EAD6]" : ""} text-[#7A1524]`}
          >
            A
          </button>
          <button
            onClick={() => handleFontSize("lg")}
            title="Teks besar"
            className={`h-[34px] w-[34px] text-[17px] font-bold ${fontSize === "lg" ? "bg-[#F3EAD6]" : ""} text-[#7A1524]`}
          >
            A
          </button>
        </div>
      </header>

      {/* Overlay (mobile sidebar) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-[700] bg-[rgba(30,10,10,0.4)]"
        />
      )}

      <div className="flex min-h-screen pt-[136px]">
        {/* Sidebar */}
        <aside
          className={`fixed top-[136px] bottom-0 left-0 z-[800] w-[82%] max-w-[320px] overflow-y-auto border-r border-[#e4d7ba] bg-[#FFFEFB] py-[22px] pb-[60px] transition-transform duration-300 md:sticky md:top-[136px] md:bottom-auto md:h-[calc(100vh-136px)] md:w-[300px] md:max-w-none md:shrink-0 md:translate-x-0 md:self-start ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-[22px] pb-3 text-[11px] font-bold tracking-[1.5px] text-[#A8842B] uppercase">
            Daftar Isi
          </div>
          <nav>
            {TOC.map((entry, i) =>
              entry === "divider" ? (
                <div key={`divider-${i}`} className="my-3.5 mx-[22px] h-px bg-[#e4d7ba]" />
              ) : (
                <a
                  key={entry.href}
                  href={entry.href}
                  onClick={(e) => {
                    smoothScrollToHash(e, entry.href.slice(1));
                    setSidebarOpen(false);
                  }}
                  className={`block border-l-[3px] py-2.5 text-[14.5px] ${entry.sub ? "pr-[22px] pl-[38px]" : "px-[22px]"} transition-colors hover:bg-[#F3EAD6] ${
                    activeId === entry.href.slice(1)
                      ? "border-l-[#7A1524] bg-[#F3EAD6] font-semibold text-[#7A1524]"
                      : "border-l-transparent text-[#231F20]"
                  }`}
                >
                  {entry.label}
                </a>
              ),
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main ref={mainRef} className="min-w-0 flex-1">
          <section
            id="cover"
            className="relative flex min-h-[calc(100vh-136px)] flex-col items-center justify-center overflow-hidden px-5 py-10 text-center text-white"
            style={{
              background:
                "radial-gradient(ellipse at center, #2a0d10 0%, #17070a 70%, #0d0405 100%)",
            }}
          >
            <div className="relative mx-auto w-full max-w-[min(92vw,460px)] overflow-hidden rounded-md shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/ebook-cover-fitrah-code.png"
                alt="The Fitrah Code — I. The Blueprint"
                width={460}
                height={690}
                className="block h-auto w-full"
                priority
              />
            </div>
            <div className="relative z-10 mt-7 max-w-[560px]">
              <div className="text-[clamp(14px,2.2vw,17px)] tracking-[1px] text-[#e9d9b4]">
                30 Hari Merancang Peta Kemenanganmu
              </div>
              <div className="mt-2.5 text-[13px] text-[#cbb78a]">
                Oleh <b className="text-[#e9d9b4]">Tim GenSa</b>
              </div>
              <a
                href="#prolog"
                onClick={(e) => smoothScrollToHash(e, "prolog")}
                className="mt-[34px] inline-flex items-center gap-2.5 rounded-full bg-[#A8842B] px-[30px] py-3.5 text-sm font-bold tracking-[.5px] text-[#2a1a05] shadow-[0_10px_30px_rgba(0,0,0,.3)] transition-transform hover:-translate-y-0.5"
              >
                Mulai Membaca &nbsp;→
              </a>
            </div>
          </section>

          <div
            className={`${FONT_SIZE_CLASS[fontSize]} transition-[font-size]`}
          >
            <FrontMatter />
            <Hari1 />
            <Hari2 />
            <Hari3 />
            <Hari4 />
            <Hari5 />
            <Hari6 />
            <Checkpoint />
          </div>

          <footer className="px-6 py-[50px] pb-[70px] text-center text-[13px] text-[#666]">
            <div className="font-bold text-[#7A1524]">GENSALADIN.ID</div>
            <div className="mt-1.5">Learn History. Repeat Victory.</div>
            <div className="mt-4 opacity-70">
              &copy; 2026 Yayasan Saladin Peradaban Berilmu
            </div>
          </footer>
        </main>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Kembali ke atas"
        className={`fixed right-6 bottom-6 z-[850] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#7A1524] text-lg text-white shadow-[0_6px_20px_rgba(0,0,0,.3)] transition-opacity ${
          showToTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        ↑
      </button>
    </div>
  );
}
