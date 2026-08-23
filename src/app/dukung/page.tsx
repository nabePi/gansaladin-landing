import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import SectionLabel from "@/components/section-label";
import GeomOrnament from "@/components/geom-ornament";
import { IconArrow } from "@/components/icons";
import DonationPanel from "./donation-panel";

export const metadata: Metadata = {
  title: "Dukung Kami — Yayasan Saladin Peradaban Berilmu",
};

const fundraisingItems = [
  {
    label: "Operasional Program",
    target: 10000000,
    raised: 3200000,
    desc: "Mendukung kelangsungan program kajian dan seminar rutin.",
  },
  {
    label: "Produksi Konten Dakwah",
    target: 7500000,
    raised: 4100000,
    desc: "Biaya produksi video, podcast, dan konten edukatif digital.",
  },
  {
    label: "Pendidikan & Pembinaan",
    target: 15000000,
    raised: 2800000,
    desc: "Beasiswa, modul, dan program pembinaan pemuda.",
  },
  {
    label: "Program Sosial",
    target: 8000000,
    raised: 5600000,
    desc: "Santunan, bakti sosial, dan pemberdayaan masyarakat.",
  },
];

const formatRupiah = (n: number) => "Rp " + n.toLocaleString("id-ID");

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
          <div className="mb-20 grid grid-cols-1 gap-[2px] lg:grid-cols-2">
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
              <button className="flex items-center gap-2 bg-white px-8 py-3.5 text-[15px] font-bold text-maroon hover:bg-beige">
                Kunjungi Store <IconArrow />
              </button>
            </div>

            {/* Fundraising */}
            <DonationPanel items={fundraisingItems} />
          </div>

          {/* TRANSPARANSI */}
          <div>
            <SectionLabel>Transparansi Dana</SectionLabel>
            <p className="mt-3 mb-10 max-w-[520px] text-base leading-relaxed text-ink-mid">
              Kami percaya kepercayaanmu dibangun melalui keterbukaan.
              Berikut update progres setiap program:
            </p>
            <div className="grid gap-[2px]">
              {fundraisingItems.map((f) => {
                const pct = Math.round((f.raised / f.target) * 100);
                const barColor =
                  pct >= 60
                    ? "bg-[oklch(55%_0.12_145)]"
                    : pct >= 30
                      ? "bg-gold"
                      : "bg-maroon";
                return (
                  <div key={f.label} className="bg-white p-7">
                    <div className="mb-2.5 flex items-start justify-between gap-6">
                      <div>
                        <div className="mb-1 font-serif text-lg font-bold text-ink">
                          {f.label}
                        </div>
                        <div className="text-[13px] text-ink-light">
                          {f.desc}
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className="font-serif text-xl font-bold text-maroon">
                          {pct}%
                        </div>
                        <div className="text-xs text-ink-light">
                          {formatRupiah(f.raised)} / {formatRupiah(f.target)}
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-1.5 overflow-hidden rounded-full bg-beige-mid"
                      role="progressbar"
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Progres donasi ${f.label}`}
                    >
                      <div
                        className={`h-full rounded-full ${barColor} transition-[width] duration-1000`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
