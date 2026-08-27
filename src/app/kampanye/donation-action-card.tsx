"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { IconWhatsApp } from "@/components/icons";
import Reveal from "./reveal";
import { smoothScrollToHash } from "@/lib/smooth-scroll";

export type Pill = { amount: number; label: string; sub: string };

type Accent = "red" | "teal" | "gold";

const THEME: Record<
  Accent,
  {
    card: string;
    label: string;
    horizon: string;
    track: string;
    fill: string;
    meta: string;
    pillLabel: string;
    pillIdle: string;
    pillOn: string;
    field: string;
    fieldFocus: string;
    cta: string;
    wa: string;
    perkMark: string;
  }
> = {
  red: {
    card: "border-[#FCDEDE] bg-[#FFF0F0]",
    label: "text-[#7B1A1A]",
    horizon: "text-[#9E2828]",
    track: "bg-[#FCDEDE]",
    fill: "bg-[linear-gradient(90deg,#7B1A1A,#9E2828)]",
    meta: "text-[#9E2828]",
    pillLabel: "text-[#7B1A1A]",
    pillIdle: "border-[#FCDEDE] text-[#7B1A1A]",
    pillOn: "border-[#7B1A1A] bg-[#7B1A1A] text-white",
    field: "border-[#FCDEDE]",
    fieldFocus: "focus-within:border-[#7B1A1A]",
    cta: "bg-[#7B1A1A] text-white hover:bg-[#9E2828]",
    wa: "border-[#FCDEDE] text-[#7B1A1A] hover:bg-[#FCDEDE]",
    perkMark: "text-[#7B1A1A]",
  },
  teal: {
    card: "border-[#C4EDDF] bg-[#E8F8F2]",
    label: "text-[#0E6B54]",
    horizon: "text-[#138068]",
    track: "bg-[#C4EDDF]",
    fill: "bg-[linear-gradient(90deg,#0E6B54,#138068)]",
    meta: "text-[#138068]",
    pillLabel: "text-[#0E6B54]",
    pillIdle: "border-[#C4EDDF] text-[#0E6B54]",
    pillOn: "border-[#0E6B54] bg-[#0E6B54] text-white",
    field: "border-[#C4EDDF]",
    fieldFocus: "focus-within:border-[#0E6B54]",
    cta: "bg-[#0E6B54] text-white hover:bg-[#138068]",
    wa: "border-[#C4EDDF] text-[#0E6B54] hover:bg-[#E8F8F2]",
    perkMark: "text-[#0E6B54]",
  },
  gold: {
    card: "border-[#FAECC8] bg-[#FFF8E8]",
    label: "text-[#7A5C18]",
    horizon: "text-[#C9962A]",
    track: "bg-[#FAECC8]",
    fill: "bg-[linear-gradient(90deg,#C9962A,#E8B84A)]",
    meta: "text-[#7A5C18]",
    pillLabel: "text-[#7A5C18]",
    pillIdle: "border-[#FAECC8] text-[#7A5C18]",
    pillOn: "border-[#C9962A] bg-[#C9962A] text-white",
    field: "border-[#FAECC8]",
    fieldFocus: "focus-within:border-[#C9962A]",
    cta: "bg-[#C9962A] text-white hover:bg-[#B8841A]",
    wa: "border-[#FAECC8] text-[#7A5C18] hover:bg-[#FFF8E8]",
    perkMark: "text-[#C9962A]",
  },
};

const PROGRAM_LABEL: Record<string, string> = {
  studio: "Studio Dakwah GenSa TV",
  class: "beasiswa GenSa Class",
  rumah: "Rumah Literasi GenSa",
};

function buildWaHref(programKey: string, amount: number) {
  const formatted = new Intl.NumberFormat("id-ID").format(amount);
  const message = `Assalamualaikum, saya ingin mendukung ${PROGRAM_LABEL[programKey]} dengan nominal Rp ${formatted}.`;
  return `https://wa.me/6281944233210?text=${encodeURIComponent(message)}`;
}

export default function DonationActionCard({
  accent,
  programKey,
  totalLabel,
  total,
  horizon,
  progressPct,
  progressLeft,
  progressRight,
  pillLabel,
  pills,
  defaultAmount,
  ctaLabel,
  ctaIcon,
  perks,
}: {
  accent: Accent;
  programKey: "studio" | "class" | "rumah";
  totalLabel: string;
  total: string;
  horizon: string;
  progressPct: number;
  progressLeft: string;
  progressRight: string;
  pillLabel: string;
  pills: Pill[];
  defaultAmount: number;
  ctaLabel: string;
  ctaIcon: ReactNode;
  perks: string[];
}) {
  const t = THEME[accent];
  const defaultIdx = pills.findIndex((p) => p.amount === defaultAmount);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(
    defaultIdx >= 0 ? defaultIdx : null,
  );
  const [customValue, setCustomValue] = useState("");
  const [amount, setAmount] = useState(defaultAmount);
  const [fillPct, setFillPct] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setFillPct(progressPct), 300);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [progressPct]);

  function pickPill(i: number, amt: number) {
    setSelectedIdx(i);
    setCustomValue("");
    setAmount(amt);
  }

  function onCustomChange(raw: string) {
    const digits = raw.replace(/\D/g, "");
    setCustomValue(digits);
    setSelectedIdx(null);
    const val = parseInt(digits, 10) || 0;
    if (val > 0) setAmount(val);
  }

  return (
    <Reveal delay={1}>
      <div className={`sticky top-[152px] rounded-2xl border-2 p-7 ${t.card}`}>
        <div
          className={`mb-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${t.label}`}
        >
          {totalLabel}
        </div>
        <div
          className={`mb-1 font-serif text-[clamp(28px,4vw,40px)] leading-none font-black ${t.label}`}
        >
          {total}
        </div>
        <div className={`mb-5 text-sm ${t.horizon}`}>{horizon}</div>

        <div ref={trackRef} className={`mb-2.5 h-2 overflow-hidden rounded-full ${t.track}`}>
          <div
            className={`h-full rounded-full transition-[width] duration-[1400ms] ease-out ${t.fill}`}
            style={{ width: `${fillPct}%` }}
          />
        </div>
        <div className={`mb-6 flex justify-between text-xs ${t.meta}`}>
          <span>{progressLeft}</span>
          <span>{progressRight}</span>
        </div>

        <div className={`mb-2.5 text-xs font-bold tracking-[0.12em] uppercase ${t.pillLabel}`}>
          {pillLabel}
        </div>
        <div className="mb-4 grid grid-cols-3 gap-2">
          {pills.map((p, i) => (
            <button
              key={p.amount}
              onClick={() => pickPill(i, p.amount)}
              className={`flex cursor-pointer flex-col gap-0.5 rounded-lg border-[1.5px] px-2 py-2.5 text-center text-[13px] font-semibold transition-colors ${
                selectedIdx === i ? t.pillOn : t.pillIdle
              }`}
            >
              {p.label}
              <small className="text-[11px] font-normal opacity-70">
                {p.sub}
              </small>
            </button>
          ))}
        </div>

        <div
          className={`mb-4 flex items-center gap-2 rounded-lg border-[1.5px] px-3.5 py-2.5 ${t.field} ${t.fieldFocus}`}
        >
          <span className="text-[15px] font-semibold opacity-50">Rp</span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Nominal lain"
            value={customValue}
            onChange={(e) => onCustomChange(e.target.value)}
            className="w-full border-none bg-transparent text-[15px] font-semibold text-[#1A1410] outline-none placeholder:opacity-35"
          />
        </div>

        <a
          href={buildWaHref(programKey, amount)}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-[15px] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5 ${t.cta}`}
        >
          {ctaIcon} {ctaLabel}
        </a>
        <div className="my-3.5 text-center text-xs text-[#B8A898]">
          atau transfer langsung
        </div>
        <a
          href="#bank"
          onClick={(e) => smoothScrollToHash(e, "bank")}
          className={`flex w-full items-center justify-center gap-2 rounded-lg border-[1.5px] py-3 text-[13px] font-semibold transition-colors ${t.wa}`}
        >
          <IconWhatsApp className="h-[17px] w-[17px] shrink-0" />
          Lihat rekening BSI
        </a>

        <ul className="mt-5 flex flex-col gap-2">
          {perks.map((perk) => (
            <li key={perk} className="flex gap-2.5 text-[13px] leading-snug text-[#5C4838]">
              <span className={`shrink-0 font-bold ${t.perkMark}`}>✓</span>
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
