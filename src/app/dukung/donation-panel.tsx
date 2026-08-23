"use client";

import { useState } from "react";
import { IconArrow } from "@/components/icons";

type FundraisingItem = {
  label: string;
  target: number;
  raised: number;
  desc: string;
};

const formatRupiah = (n: number) => "Rp " + n.toLocaleString("id-ID");

export default function DonationPanel({
  items,
}: {
  items: FundraisingItem[];
}) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="bg-white p-11 lg:p-14">
      <div className="mb-5 text-[11px] font-semibold tracking-[0.14em] text-maroon uppercase">
        Fundraising
      </div>
      <h3 className="mb-5 font-serif text-[30px] leading-tight font-bold text-ink">
        Donasi untuk Program Pilihan
      </h3>
      <p className="mb-8 text-[15px] leading-relaxed text-ink-mid">
        Pilih program yang paling kamu yakini dan dukung secara langsung
        dengan transparansi penuh.
      </p>
      <div className="mb-8 flex flex-col gap-3">
        {items.map((f, i) => (
          <button
            key={f.label}
            onClick={() => setActiveCategory(i)}
            className={`flex cursor-pointer items-center justify-between border px-4 py-3 text-left text-sm font-medium text-ink ${
              activeCategory === i
                ? "border-maroon bg-beige-mid"
                : "border-beige-dark"
            }`}
          >
            <span>{f.label}</span>
            {activeCategory === i && (
              <span className="font-bold text-maroon">→</span>
            )}
          </button>
        ))}
      </div>
      <p className="mb-6 text-xs text-ink-light">
        Program dipilih:{" "}
        <span className="font-semibold text-ink-mid">
          {items[activeCategory].label}
        </span>{" "}
        — {formatRupiah(items[activeCategory].raised)} terkumpul dari
        target {formatRupiah(items[activeCategory].target)}.
      </p>
      <button className="flex items-center gap-2 bg-maroon px-8 py-3.5 text-[15px] font-bold text-white hover:bg-maroon-light">
        Dukung Sekarang <IconArrow />
      </button>
    </div>
  );
}
