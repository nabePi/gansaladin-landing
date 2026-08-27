"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconArrow,
  IconBook,
  IconInstagram,
  IconPackage,
  IconPlay,
  IconUsers,
} from "@/components/icons";
import SectionLabel from "@/components/section-label";

type ProgramItem = {
  name: string;
  status: "berjalan" | "segera";
  manfaat: string;
  output: string;
  cara: string;
  link?: string;
};

type Pillar = {
  num: string;
  title: string;
  tagline: string;
  items: ProgramItem[];
};

export default function ProgramTabs({ pillars }: { pillars: Pillar[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const active = pillars[activeTab];

  return (
    <>
      {/* Tab Navigation */}
      <section className="border-b border-beige-dark bg-beige">
        <div className="mx-auto flex max-w-[1100px] overflow-x-auto px-[5vw]">
          {pillars.map((p, i) => (
            <button
              key={p.num}
              onClick={() => setActiveTab(i)}
              className={`cursor-pointer border-b-[3px] px-8 pt-5 pb-4.5 text-sm font-semibold whitespace-nowrap ${
                activeTab === i
                  ? "border-maroon text-maroon"
                  : "border-transparent text-ink-light hover:text-ink"
              }`}
            >
              <span className="mr-2 font-serif opacity-50">{p.num}</span>
              {p.title}
            </button>
          ))}
        </div>
      </section>

      {/* Pilar Content */}
      <section className="bg-beige px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12">
            <h2 className="mb-3 font-serif text-[clamp(28px,4vw,44px)] leading-tight font-bold text-ink">
              {active.title}
            </h2>
            <p className="text-[17px] text-ink-mid italic">{active.tagline}</p>
          </div>

          {active.items.length > 0 && (
          <div className="grid gap-[2px]">
            {active.items.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-1 items-center gap-4 bg-white p-7 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-6"
              >
                <div>
                  <div className="mb-1.5 font-serif text-[19px] font-bold text-ink">
                    {item.name}
                  </div>
                  <div className="flex items-center gap-4 text-[13px] text-ink-light">
                    <span className="inline-flex items-center gap-1.5">
                      <IconUsers /> {item.manfaat}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <IconPackage /> {item.output}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-fit rounded-sm px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] whitespace-nowrap uppercase ${
                    item.status === "berjalan"
                      ? "bg-[oklch(92%_0.08_145)] text-[oklch(40%_0.12_145)]"
                      : "bg-[oklch(95%_0.05_70)] text-[oklch(52%_0.10_60)]"
                  }`}
                >
                  {item.status === "berjalan" ? "● Berjalan" : "◌ Segera Hadir"}
                </div>
                <div className="text-[13px] whitespace-nowrap text-ink-mid">
                  {item.cara}
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-1.5 bg-maroon px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-white"
                  >
                    Ikut Serta <IconArrow />
                  </a>
                ) : (
                  <Link
                    href="/bergabung"
                    className="flex w-fit items-center gap-1.5 bg-maroon px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-white"
                  >
                    Ikut Serta <IconArrow />
                  </Link>
                )}
              </div>
            ))}
          </div>
          )}

          {active.num === "02" && (
            <div className={active.items.length > 0 ? "mt-14" : ""}>
              <SectionLabel>Konten Terbaru</SectionLabel>
              <div className="mt-6 grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-8">
                  <div className="mb-4 text-maroon">
                    <IconBook />
                  </div>
                  <div className="mb-2 text-xs font-bold tracking-[0.08em] text-gold uppercase">
                    Ebook
                  </div>
                  <h3 className="mb-2.5 font-serif text-xl font-bold text-ink">
                    Ebook GenSa
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-ink-mid">
                    Unduh koleksi ebook terbaru dari GenSa seputar sejarah dan
                    peradaban Islam.
                  </p>
                  <Link
                    href="/ebook"
                    className="border-b-[1.5px] border-maroon pb-0.5 text-[13px] font-semibold text-maroon"
                  >
                    Lihat Koleksi Ebook →
                  </Link>
                </div>
                <div className="bg-white p-8">
                  <div className="mb-4 text-maroon">
                    <IconPlay />
                  </div>
                  <div className="mb-2 text-xs font-bold tracking-[0.08em] text-gold uppercase">
                    GenSa TV
                  </div>
                  <h3 className="mb-2.5 font-serif text-xl font-bold text-ink">
                    Video Terbaru
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-ink-mid">
                    Tonton episode dan konten edukatif terbaru dari kanal
                    YouTube GenSa TV.
                  </p>
                  <a
                    href="https://www.youtube.com/@gensa_tv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-[1.5px] border-maroon pb-0.5 text-[13px] font-semibold text-maroon"
                  >
                    Kunjungi GenSa TV →
                  </a>
                </div>
                <div className="bg-white p-8">
                  <div className="mb-4 text-maroon">
                    <IconInstagram className="h-7 w-7" />
                  </div>
                  <div className="mb-2 text-xs font-bold tracking-[0.08em] text-gold uppercase">
                    Instagram
                  </div>
                  <h3 className="mb-2.5 font-serif text-xl font-bold text-ink">
                    Update Terbaru
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-ink-mid">
                    Ikuti kabar dan cuplikan kegiatan GenSa melalui Instagram.
                  </p>
                  <a
                    href="https://www.instagram.com/gen.saladin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-[1.5px] border-maroon pb-0.5 text-[13px] font-semibold text-maroon"
                  >
                    Kunjungi Instagram →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
