import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import SectionLabel from "@/components/section-label";

export const metadata: Metadata = {
  title: "Tentang Kami — Yayasan Saladin Peradaban Berilmu",
};

const misi = [
  "Menyelenggarakan kegiatan dakwah Islam yang bersifat edukatif, historis, dan inspiratif kepada masyarakat.",
  "Mendorong peningkatan kualitas generasi muda melalui pembinaan akhlak, karakter, dan keilmuan berbasis nilai-nilai Islam.",
  "Mengembangkan kajian dan publikasi yang berkaitan dengan sejarah dan peradaban Islam sebagai upaya membangun kesadaran umat.",
  "Menjadi wadah kolaborasi antar komunitas dakwah dan pendidikan, khususnya yang memiliki fokus pada sejarah dan pengembangan umat.",
  "Menyelenggarakan pelatihan, seminar, workshop, dan kegiatan sosial keislaman lainnya yang mendukung terbentuknya masyarakat madani.",
  "Meningkatkan literasi keislaman dan wawasan sejarah Islam melalui media digital dan platform edukatif lainnya.",
];

const nilai = [
  { word: "Ilmu", desc: "Menjadikan pengetahuan sebagai fondasi setiap langkah dan keputusan." },
  { word: "Amanah", desc: "Mengemban kepercayaan dengan integritas dan tanggung jawab penuh." },
  { word: "Adab", desc: "Menjunjung tinggi akhlak mulia dalam setiap interaksi dan karya." },
  { word: "Kolaborasi", desc: "Membangun kekuatan bersama demi dampak yang lebih besar." },
  { word: "Keunggulan", desc: "Mendorong standar tertinggi dalam setiap program dan produksi." },
  { word: "Kebermanfaatan", desc: "Mengukur keberhasilan dari nyatanya manfaat bagi umat." },
];

export default function TentangPage() {
  return (
    <div className="pt-20">
      <PageHeader
        eyebrow="Tentang Kami"
        title="Bukan Sekadar Yayasan."
        titleEmphasis="Ini Gerakan."
        desc="Yayasan Saladin hadir untuk berkontribusi dalam dakwah Islam, pendidikan karakter, dan pelestarian nilai-nilai peradaban Islam yang berlandaskan ilmu pengetahuan dan digerakkan oleh semangat generasi muda."
      />

      {/* VISI */}
      <section className="bg-beige px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_380px]">
          <div>
            <SectionLabel>Visi</SectionLabel>
            <blockquote className="mt-7 border-l-[3px] border-maroon pl-8 font-serif text-[clamp(20px,2.5vw,30px)] leading-relaxed font-semibold text-ink italic">
              Menjadi lembaga yang berkontribusi dalam pengembangan dakwah
              Islam, pendidikan karakter, dan pelestarian nilai-nilai
              peradaban Islam yang berlandaskan ilmu pengetahuan dan
              semangat generasi muda.
            </blockquote>
          </div>
          <div className="relative mx-auto w-full max-w-[380px]">
            <Image
              src="/images/about-visual.png"
              alt="Kubah Batu dilihat melalui jendela arabesque"
              width={543}
              height={608}
              className="h-auto w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* MISI */}
      <section className="bg-beige-mid px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>Misi</SectionLabel>
          <div className="mt-10 grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
            {misi.map((m, i) => (
              <div key={m} className="bg-white p-8">
                <div className="mb-4 font-serif text-4xl leading-none font-black text-beige-dark">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-[15px] leading-relaxed text-ink-mid">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NILAI INTI */}
      <section className="bg-beige px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>Nilai Inti</SectionLabel>
          <h2 className="mt-4 mb-12 font-serif text-[clamp(28px,3.5vw,44px)] leading-tight font-bold text-ink">
            Prinsip yang Menggerakkan Kami
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nilai.map((n) => (
              <div
                key={n.word}
                className="border-b-[3px] border-maroon bg-beige-mid p-8"
              >
                <div className="mb-3 font-serif text-[28px] font-bold text-maroon">
                  {n.word}
                </div>
                <p className="text-sm leading-relaxed text-ink-mid">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
