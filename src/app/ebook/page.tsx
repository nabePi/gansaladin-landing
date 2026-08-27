import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import EbookListItem from "./ebook-list-item";

export const metadata: Metadata = {
  title: "Koleksi Ebook — Yayasan Saladin Peradaban Berilmu",
};

const ebooks = [
  {
    judul: "Al-Aqsa dan Horizon Syam",
    penulis: "Tim GenSa",
    abstrak:
      "Dari simpul risalah, melintasi kiblat awal dan horizon dakwah, hingga estafet peradaban — dari Sirah Nabawiyah menuju estafet Khulafa' al-Rasyidin.",
    cover: "/images/ebook-cover-alaqsa.jpg",
    href: "/ebook/al-aqsa-dan-horizon-syam",
  },
];

export default function EbookPage() {
  return (
    <div className="pt-20">
      <PageHeader
        eyebrow="Literasi & Dakwah Digital"
        title="Koleksi"
        titleEmphasis="Ebook"
        desc="Bacaan gratis seputar sejarah dan peradaban Islam, disusun oleh tim GenSa."
      />

      <section className="bg-beige px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[900px]">
          <div className="grid gap-[2px]">
            {ebooks.map((e) => (
              <EbookListItem key={e.judul} {...e} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
