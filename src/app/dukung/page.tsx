import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import GeomOrnament from "@/components/geom-ornament";
import { IconArrow } from "@/components/icons";
import DonationPanel from "./donation-panel";

export const metadata: Metadata = {
  title: "Dukung Kami — Yayasan Saladin Peradaban Berilmu",
};

const fundraisingItems = [
  {
    label: "Produksi Konten Dakwah",
    desc: "Biaya produksi video, podcast, dan konten edukatif digital.",
  },
  {
    label: "Pendidikan & Pembinaan",
    desc: "Beasiswa, modul, dan program pembinaan pemuda.",
  },
  {
    label: "Program Sosial",
    desc: "Santunan, bakti sosial, dan pemberdayaan masyarakat.",
  },
  {
    label: "Rumah Literasi",
    desc: "Pengadaan ruang baca, koleksi buku, dan kegiatan literasi.",
  },
];

export default function DukungPage() {
  return (
    <div className="pt-20">
      <PageHeader
        eyebrow="Dukung Kami"
        title="Dukung Lahirnya Generasi"
        titleEmphasis="Pembawa Peradaban"
        desc="Setiap kontribusimu — sekecil apapun — menjadi bagian dari perjalanan panjang membangun kembali peradaban Islam yang berilmu."
      />

      <section className="bg-beige px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-[2px] lg:grid-cols-2">
            {/* Store */}
            <div className="relative overflow-hidden bg-maroon p-11 lg:p-14">
              <div className="absolute -top-10 -right-10 text-white opacity-10">
                <GeomOrnament size={240} color="currentColor" opacity={1} />
              </div>
              <div className="mb-5 text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">
                Store
              </div>
              <h3 className="mb-5 font-serif text-[30px] leading-tight font-bold text-white">
                Produk Bermakna, Dukungan Nyata
              </h3>
              <p className="mb-8 text-[15px] leading-relaxed text-white/70">
                Dapatkan buku, merchandise, modul, dan poster kampanye.
                Setiap pembelian mendukung program yayasan secara langsung.
              </p>
              <div className="mb-9 flex flex-wrap gap-2.5">
                {["Buku", "Merchandise", "Modul", "Poster"].map((s) => (
                  <span
                    key={s}
                    className="rounded-sm bg-white/12 px-3.5 py-1.5 text-xs font-medium text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href="https://gensaberilmu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 bg-white px-8 py-3.5 text-[15px] font-bold text-maroon hover:bg-beige"
              >
                Kunjungi Store <IconArrow />
              </a>
            </div>

            {/* Fundraising */}
            <DonationPanel items={fundraisingItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
