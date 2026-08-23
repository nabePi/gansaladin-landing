"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrow } from "@/components/icons";

type ProgramItem = {
  name: string;
  status: "berjalan" | "segera";
  manfaat: string;
  output: string;
  cara: string;
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
                  <div className="text-[13px] text-ink-light">
                    <span className="mr-4">👥 {item.manfaat}</span>
                    <span>📦 {item.output}</span>
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
                <Link
                  href="/bergabung"
                  className="flex w-fit items-center gap-1.5 bg-maroon px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-white"
                >
                  Ikut Serta <IconArrow />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
