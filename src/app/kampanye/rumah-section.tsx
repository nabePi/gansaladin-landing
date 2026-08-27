import { IconBuilding } from "@/components/icons";
import DonationActionCard from "./donation-action-card";
import Reveal from "./reveal";

const BREAKDOWN = [
  { label: "Wakaf Generasi (buku & item)", val: "Rp 150rb – 1 jt" },
  { label: "Wakaf Ibnu Khaldun (fasilitas)", val: "Rp 1 jt – 100 jt" },
  { label: "Wakaf Shalahuddin (ruangan)", val: "Rp 100 jt – 500 jt" },
  { label: "Wakaf Al-Fatih (gedung/lantai)", val: "Rp 500 jt+" },
  { label: "Cicilan Jariyah bulanan", val: "mulai Rp 500rb/bln" },
];

const PILLS = [
  { amount: 150000, label: "Rp 150rb", sub: "1 buku wakaf" },
  { amount: 500000, label: "Rp 500rb", sub: "cicilan jariyah" },
  { amount: 1000000, label: "Rp 1 jt", sub: "1 kursi kelas" },
  { amount: 5000000, label: "Rp 5 jt", sub: "1 rak buku" },
  { amount: 10000000, label: "Rp 10 jt", sub: "1 meja baca" },
  { amount: 100000000, label: "Rp 100 jt", sub: "1 ruangan" },
];

const STATS = [
  { value: "Rp 4 M", label: "total target wakaf", color: "text-[#C9962A]" },
  { value: "±400 m²", label: "lahan di Jatibening", color: "text-[#0E6B54]" },
  { value: "3–5 thn", label: "roadmap pembangunan", color: "text-[#7B1A1A]" },
  { value: "28 mnt", label: "dari Sudirman via LRT", color: "text-[#C9962A]" },
];

export default function RumahSection() {
  return (
    <section id="rumah" className="scroll-mt-[136px] bg-[#F6F0E8] px-5 py-20">
      <div className="mx-auto max-w-[1060px]">
        <Reveal>
          <div className="mb-12 flex items-start gap-5 border-b-2 border-[#FAECC8] pb-8">
            <div className="font-serif text-[64px] leading-[0.8] font-black text-[#C9962A] opacity-[0.12] sm:text-[80px]">
              03
            </div>
            <div>
              <div className="mb-2.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-[#7A5C18] uppercase">
                <span className="block h-0.5 w-4 rounded-sm bg-[#C9962A]" />
                Wakaf Jangka Panjang · Bangun Sekali, Manfaat Selamanya
              </div>
              <h2 className="mb-2.5 font-serif text-[clamp(28px,4.5vw,48px)] leading-[1.02] font-black text-[#7A5C18]">
                Rumah Literasi
                <br />
                GenSa
              </h2>
              <p className="max-w-[580px] text-[15px] leading-relaxed text-[#5C4838]">
                Satu bangunan fisik di Jatibening, Bekasi — dekat Stasiun LRT
                Cikunir 1 — yang menjadi pusat kafe buku, perpustakaan, kelas,
                dan studio dakwah. Dibangun dari wakaf. Beroperasi mandiri dari
                pendapatan kafe dan kelas.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 text-[15px] leading-relaxed text-[#5C4838]">
                Ini bukan proyek jangka pendek. Rumah Literasi GenSa adalah
                ikhtiar 3–5 tahun untuk membangun tempat yang belum ada di
                kawasan Bekasi Barat: ruang belajar yang hangat, studio dakwah
                yang proper, perpustakaan dengan koleksi wakaf buku, dan kafe
                yang menanggung biaya operasionalnya sendiri.
              </p>
              <p className="mb-0 text-[15px] leading-relaxed text-[#5C4838]">
                Setiap rupiah wakaf memiliki &ldquo;rumah&rdquo; yang jelas —
                bukan masuk ke kas umum, tapi tercatat sebagai kontribusi
                terhadap lahan, dinding, atau peralatan yang nama wakif-nya
                terukir permanen.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <ul className="mt-6 mb-0 flex flex-col gap-2">
                {BREAKDOWN.map((b) => (
                  <li
                    key={b.label}
                    className="flex items-center justify-between rounded-lg bg-[#FFF8E8] px-3.5 py-2.5 text-sm"
                  >
                    <span className="text-[#1A1410]">{b.label}</span>
                    <span className="ml-4 font-bold whitespace-nowrap text-[#7A5C18]">
                      {b.val}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border-[1.5px] border-[#FAECC8] bg-[#FFF8E8] p-4 text-center"
                  >
                    <div className={`font-serif text-2xl leading-none font-black ${s.color}`}>
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-[#5C4838]">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-4 rounded-xl border-[1.5px] border-[#FAECC8] bg-[#FFF8E8] p-5">
                <p className="mb-1.5 text-sm font-semibold text-[#7A5C18]">
                  Mengapa wakaf, bukan donasi biasa?
                </p>
                <p className="mb-0 text-sm leading-relaxed text-[#5C4838]">
                  Karena wakaf tidak habis dipakai. Lahan yang diwakafkan tetap
                  menjadi lahan. Bangunan yang diwakafkan tetap menjadi
                  bangunan. Dan selama ada orang yang belajar, bertanya, atau
                  membaca di sana — pahala mengalir terus kepada setiap wakif,
                  bahkan setelah mereka tidak ada.
                </p>
              </div>
            </Reveal>
          </div>

          <DonationActionCard
            accent="gold"
            programKey="rumah"
            totalLabel="Target wakaf total"
            total="Rp 4 Miliar"
            horizon="Roadmap 3–5 tahun · Fase 1 aktif sekarang"
            progressPct={1}
            progressLeft="Fase 1: fondasi kepercayaan"
            progressRight="Target fase 1: Rp 700 jt"
            pillLabel="Mulai dari sini"
            pills={PILLS}
            defaultAmount={500000}
            ctaLabel="Wakaf Rumah Literasi GenSa"
            ctaIcon={<IconBuilding className="h-[18px] w-[18px]" />}
            perks={[
              "Sertifikat wakaf digital (fisik untuk ≥ Rp 1 jt)",
              "Nama terukir permanen sesuai tier wakaf",
              "Laporan triwulanan progress pembangunan",
              "Undangan grand opening sebagai founding member",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
