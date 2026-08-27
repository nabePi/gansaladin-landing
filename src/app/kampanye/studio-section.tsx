import { IconPlay } from "@/components/icons";
import DonationActionCard from "./donation-action-card";
import Reveal from "./reveal";

const BREAKDOWN = [
  { label: "Kamera & lensa utama", val: "Rp 15–25 jt" },
  { label: "Lighting rig profesional", val: "Rp 8–15 jt" },
  { label: "Mikrofon & audio interface", val: "Rp 5–10 jt" },
  { label: "Workstation editing", val: "Rp 20–35 jt" },
  { label: "Backdrop & set dressing", val: "Rp 5–12 jt" },
  { label: "Aksesoris & cadangan", val: "Rp 7–15 jt" },
  { label: "Produksi 90 hari pertama", val: "Rp 15–38 jt" },
];

const PILLS = [
  { amount: 200000, label: "Rp 200rb", sub: "1 hari produksi" },
  { amount: 500000, label: "Rp 500rb", sub: "1 lampu" },
  { amount: 1000000, label: "Rp 1 jt", sub: "1 mikrofon" },
  { amount: 5000000, label: "Rp 5 jt", sub: "satu lensa" },
  { amount: 15000000, label: "Rp 15 jt", sub: "satu kamera" },
  { amount: 25000000, label: "Rp 25 jt", sub: "workstation" },
];

export default function StudioSection() {
  return (
    <section id="studio" className="scroll-mt-[136px] bg-[#F6F0E8] px-5 py-20">
      <div className="mx-auto max-w-[1060px]">
        <Reveal>
          <div className="mb-12 flex items-start gap-5 border-b-2 border-[#FCDEDE] pb-8">
            <div className="font-serif text-[64px] leading-[0.8] font-black text-[#7B1A1A] opacity-[0.12] sm:text-[80px]">
              01
            </div>
            <div>
              <div className="mb-2.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-[#7B1A1A] uppercase">
                <span className="block h-0.5 w-4 rounded-sm bg-[#7B1A1A]" />
                Sprint 90 Hari · Satu Kamera, Jutaan Penonton
              </div>
              <h2 className="mb-2.5 font-serif text-[clamp(28px,4.5vw,48px)] leading-[1.02] font-black text-[#7B1A1A]">
                Studio Dakwah
                <br />
                GenSa TV
              </h2>
              <p className="max-w-[580px] text-[15px] leading-relaxed text-[#5C4838]">
                GenSa TV sudah memproduksi konten sejarah Islam yang
                menginspirasi jutaan orang — tapi masih dengan peralatan yang
                terbatas. Bantu kami membangun studio dakwah yang layak, agar
                konten berkualitas bisa diproduksi setiap hari.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 text-[15px] leading-relaxed text-[#5C4838]">
                Setiap video yang tayang di GenSa TV dibuat dengan segala
                keterbatasan — pencahayaan seadanya, kamera yang dipinjam, dan
                ruang yang bukan untuk rekaman. Tapi penonton terus bertambah
                karena kontennya menyentuh: sejarah Islam yang disampaikan
                dengan cara yang jujur, kritis, dan relevan.
              </p>
              <p className="mb-0 text-[15px] leading-relaxed text-[#5C4838]">
                Studio Dakwah adalah fase berikutnya. Dengan peralatan yang
                proper, GenSa bisa melipatgandakan produksi — dari satu video
                seminggu menjadi konten harian yang menemani jutaan orang
                belajar sejarah Islam.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <ul className="mt-6 mb-0 flex flex-col gap-2">
                {BREAKDOWN.map((b) => (
                  <li
                    key={b.label}
                    className="flex items-center justify-between rounded-lg bg-[#FFF0F0] px-3.5 py-2.5 text-sm"
                  >
                    <span className="text-[#1A1410]">{b.label}</span>
                    <span className="ml-4 font-bold whitespace-nowrap text-[#7B1A1A]">
                      {b.val}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-7 rounded-xl border-[1.5px] border-[#FCDEDE] bg-[#FFF0F0] p-5">
                <p className="mb-1.5 text-sm font-semibold text-[#7B1A1A]">
                  Kenapa 90 hari?
                </p>
                <p className="mb-0 text-sm text-[#5C4838]">
                  Ini sprint, bukan maraton. Target: studio siap pakai dalam 90
                  hari, episode pertama tayang di hari ke-91. Setelah itu
                  operasional berjalan dari pendapatan konten dan sponsorship —
                  bukan terus bergantung donasi.
                </p>
              </div>
            </Reveal>
          </div>

          <DonationActionCard
            accent="red"
            programKey="studio"
            totalLabel="Target pendanaan"
            total="Rp 75–150 jt"
            horizon="Sprint 90 hari · Dimulai segera"
            progressPct={2}
            progressLeft="Mulai mengumpulkan"
            progressRight="Target: Rp 150 jt"
            pillLabel="Donasi cepat"
            pills={PILLS}
            defaultAmount={500000}
            ctaLabel="Dukung Studio Dakwah"
            ctaIcon={<IconPlay className="h-[18px] w-[18px]" />}
            perks={[
              `Sertifikat digital "Batu Bata Studio GenSa" untuk setiap donatur`,
              "Nama di rolling kredit episode perdana",
              "Update mingguan progress pengadaan peralatan",
              "Akses nobar premiere episode perdana (online)",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
