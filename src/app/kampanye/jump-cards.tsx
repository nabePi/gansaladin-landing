"use client";

import { IconBuilding, IconGraduationCap, IconPlay } from "@/components/icons";
import { smoothScrollToHash } from "@/lib/smooth-scroll";

const CARDS = [
  {
    href: "#studio",
    Icon: IconPlay,
    name: "Studio Dakwah",
    range: "Target Rp 75–150 jt · 90 hari",
    border:
      "border-[rgba(168,40,40,0.5)] bg-[rgba(123,26,26,0.2)] hover:shadow-[0_10px_32px_rgba(123,26,26,0.3)]",
  },
  {
    href: "#class",
    Icon: IconGraduationCap,
    name: "GenSa Class",
    range: "Target Rp 50–100 jt per batch",
    border:
      "border-[rgba(14,107,84,0.5)] bg-[rgba(14,107,84,0.18)] hover:shadow-[0_10px_32px_rgba(14,107,84,0.25)]",
  },
  {
    href: "#rumah",
    Icon: IconBuilding,
    name: "Rumah Literasi",
    range: "Target Rp 4 M · 3–5 tahun",
    border:
      "border-[rgba(201,150,42,0.4)] bg-[rgba(122,92,24,0.18)] hover:shadow-[0_10px_32px_rgba(201,150,42,0.2)]",
  },
];

export default function JumpCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {CARDS.map((c) => (
        <a
          key={c.href}
          href={c.href}
          onClick={(e) => smoothScrollToHash(e, c.href.slice(1))}
          className={`block rounded-xl border-[1.5px] p-5 transition-transform hover:-translate-y-1 ${c.border}`}
        >
          <div className="mb-2.5 text-[#C9962A]">
            <c.Icon className="h-6 w-6" />
          </div>
          <div className="mb-1 text-[13px] font-bold text-white">
            {c.name}
          </div>
          <div className="text-xs text-white/45">{c.range}</div>
          <span className="mt-2 block text-[13px] text-white/30">
            ↓ Lihat program
          </span>
        </a>
      ))}
    </div>
  );
}
