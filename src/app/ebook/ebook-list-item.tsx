"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EbookListItem({
  judul,
  penulis,
  abstrak,
  cover,
  href,
}: {
  judul: string;
  penulis: string;
  abstrak: string;
  cover: string;
  href: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-6 bg-white p-7">
      <Image
        src={cover}
        alt={judul}
        width={90}
        height={135}
        className="h-[135px] w-[90px] shrink-0 object-cover"
      />
      <div className="flex-1">
        <h3 className="mb-1.5 font-serif text-xl font-bold text-ink">
          {judul}
        </h3>
        <div className="mb-3 text-[13px] text-ink-light">
          Penulis: {penulis}
        </div>
        {open && (
          <p className="mb-4 text-sm leading-relaxed text-ink-mid">
            {abstrak}
          </p>
        )}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setOpen((v) => !v)}
            className="cursor-pointer text-[13px] font-semibold text-maroon"
          >
            {open ? "Tutup Detail ↑" : "Lihat Detail →"}
          </button>
          <Link
            href={href}
            className="bg-maroon px-4.5 py-2 text-[13px] font-semibold text-white"
          >
            Baca
          </Link>
        </div>
      </div>
    </div>
  );
}
