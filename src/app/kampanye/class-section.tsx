import { IconGraduationCap } from "@/components/icons";
import DonationActionCard from "./donation-action-card";
import Reveal from "./reveal";

const BREAKDOWN = [
  { label: "Satu tiket kelas (subsidi penuh)", val: "Rp 250rb" },
  { label: "Satu batch penuh (20 orang)", val: "Rp 5 jt" },
  { label: "Satu batch penuh (40 orang)", val: "Rp 10 jt" },
  { label: "Sponsor satu sesi bulanan", val: "Rp 15–25 jt" },
  { label: "Sponsor program 1 kuartal", val: "Rp 40–75 jt" },
];

const PILLS = [
  { amount: 100000, label: "Rp 100rb", sub: "subsidi 40%" },
  { amount: 250000, label: "Rp 250rb", sub: "1 tiket penuh" },
  { amount: 500000, label: "Rp 500rb", sub: "2 tiket" },
  { amount: 2500000, label: "Rp 2,5 jt", sub: "10 peserta" },
  { amount: 5000000, label: "Rp 5 jt", sub: "1 batch kecil" },
  { amount: 10000000, label: "Rp 10 jt", sub: "1 batch penuh" },
];

const CURRICULUM = [
  "The Fitrah Code",
  "The Legacy Code",
  "Sejarah Al-Aqsa",
  "+ kelas baru segera",
];

export default function ClassSection() {
  return (
    <section id="class" className="scroll-mt-[136px] bg-white px-5 py-20">
      <div className="mx-auto max-w-[1060px]">
        <Reveal>
          <div className="mb-12 flex items-start gap-5 border-b-2 border-[#C4EDDF] pb-8">
            <div className="font-serif text-[64px] leading-[0.8] font-black text-[#0E6B54] opacity-[0.12] sm:text-[80px]">
              02
            </div>
            <div>
              <div className="mb-2.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-[#0E6B54] uppercase">
                <span className="block h-0.5 w-4 rounded-sm bg-[#0E6B54]" />
                Beasiswa Kelas · Ilmu yang Bisa Dirasakan Langsung
              </div>
              <h2 className="mb-2.5 font-serif text-[clamp(28px,4.5vw,48px)] leading-[1.02] font-black text-[#0E6B54]">
                GenSa
                <br />
                Class
              </h2>
              <p className="max-w-[580px] text-[15px] leading-relaxed text-[#5C4838]">
                GenSa Class adalah program kelas intensif sejarah Islam dan
                pembentukan karakter. Tidak semua yang ingin hadir bisa membayar
                tiket. Donasi kamu memungkinkan mereka tetap bisa belajar.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 text-[15px] leading-relaxed text-[#5C4838]">
                Setiap batch GenSa Class diikuti 20–40 peserta — mahasiswa, ibu
                rumah tangga, profesional muda. Mereka datang bukan karena
                tidak ada tempat lain, tapi karena di sini materi disampaikan
                dengan jujur, mendalam, dan penuh konteks sejarah yang jarang
                diajarkan di tempat lain.
              </p>
              <p className="mb-0 text-[15px] leading-relaxed text-[#5C4838]">
                Tapi tiket kelas adalah penghalang bagi sebagian orang. Program
                beasiswa GenSa Class memungkinkan siapa saja dengan semangat
                belajar yang kuat untuk hadir — tanpa harus memikirkan biaya.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <ul className="mt-6 mb-0 flex flex-col gap-2">
                {BREAKDOWN.map((b) => (
                  <li
                    key={b.label}
                    className="flex items-center justify-between rounded-lg bg-[#E8F8F2] px-3.5 py-2.5 text-sm"
                  >
                    <span className="text-[#1A1410]">{b.label}</span>
                    <span className="ml-4 font-bold whitespace-nowrap text-[#0E6B54]">
                      {b.val}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-7 rounded-xl border-[1.5px] border-[#C4EDDF] bg-[#E8F8F2] p-5">
                <p className="mb-1.5 text-sm font-semibold text-[#0E6B54]">
                  Model berkelanjutan
                </p>
                <p className="mb-0 text-sm text-[#5C4838]">
                  2–3 batch per bulan, masing-masing 20–40 peserta. Peserta
                  berbayar mensubsidi peserta beasiswa — sehingga satu donasi
                  kamu bisa menjangkau lebih dari satu orang. Target awal: 30%
                  kursi tiap batch adalah kursi beasiswa.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-4 rounded-xl border border-[#EDE4D6] bg-[#F6F0E8] p-5">
                <p className="mb-2 text-sm font-semibold text-[#5C4838]">
                  Kurikulum yang sudah berjalan:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {CURRICULUM.map((c, i) => (
                    <span
                      key={c}
                      className={`rounded-full px-3 py-1.5 text-[13px] font-medium ${
                        i === CURRICULUM.length - 1
                          ? "bg-[#EDE4D6] text-[#5C4838]"
                          : "bg-[#E8F8F2] text-[#0E6B54]"
                      }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <DonationActionCard
            accent="teal"
            programKey="class"
            totalLabel="Target per batch"
            total="Rp 50–100 jt"
            horizon="Berkelanjutan · 2–3 batch per bulan"
            progressPct={5}
            progressLeft="Beasiswa aktif dibuka"
            progressRight="Target: 30% kursi subsidi"
            pillLabel="Pilih kontribusi"
            pills={PILLS}
            defaultAmount={250000}
            ctaLabel="Sponsori Peserta GenSa Class"
            ctaIcon={<IconGraduationCap className="h-[18px] w-[18px]" />}
            perks={[
              `Sertifikat "Sponsor Ilmu" per donasi tiket`,
              "Update jumlah peserta yang kamu sponsori",
              "Undangan hadir sebagai tamu kehormatan di satu batch",
              "Nama di materi kelas sebagai sponsor beasiswa",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
