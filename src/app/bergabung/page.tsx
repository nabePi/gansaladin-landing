import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import SectionLabel from "@/components/section-label";
import { IconBook, IconHands, IconMic } from "@/components/icons";
import JoinForm from "./join-form";

export const metadata: Metadata = {
  title: "Bergabung — Yayasan Saladin Peradaban Berilmu",
};

const roles = [
  {
    title: "Pendidik & Peneliti",
    desc: "Merancang kurikulum, menyusun modul, dan melakukan kajian sejarah serta peradaban Islam.",
    skills: ["Penelitian", "Menulis", "Mengajar", "Akademik"],
    Icon: IconBook,
    accent: "border-maroon",
    iconColor: "text-maroon",
  },
  {
    title: "Kreator & Storyteller Digital",
    desc: "Membuat video, podcast, desain, dan media sosial yang menginspirasi.",
    skills: ["Video", "Podcast", "Desain Grafis", "Copywriting"],
    Icon: IconMic,
    accent: "border-gold",
    iconColor: "text-gold",
  },
  {
    title: "Organisator & Penggerak Komunitas",
    desc: "Mengelola kolaborasi, event, kemitraan, dan program lapangan.",
    skills: ["Manajemen", "Networking", "Event", "Kepemimpinan"],
    Icon: IconHands,
    accent: "border-[oklch(55%_0.12_200)]",
    iconColor: "text-[oklch(55%_0.12_200)]",
  },
];

const alasan = [
  {
    title: "Dampak Nyata & Bersejarah",
    desc: "Kontribusimu membangun peradaban yang akan dikenang oleh generasi mendatang.",
  },
  {
    title: "Pengembangan Diri Tanpa Batas",
    desc: "Lingkungan yang mendorongmu tumbuh — secara ilmu, karakter, dan keahlian.",
  },
  {
    title: "Jaringan Bermakna",
    desc: "Terhubung dengan sesama pemuda terbaik yang memiliki visi dan semangat yang sama.",
  },
  {
    title: "Kolaboratif & Inovatif",
    desc: "Budaya kerja yang terbuka, saling mendukung, dan tidak takut mencoba hal baru.",
  },
];

const steps = [
  {
    title: "Pelajari Peran",
    desc: "Kenali tiga peran utama di atas dan tentukan yang paling sesuai denganmu.",
  },
  {
    title: "Isi Formulir",
    desc: "Ceritakan tentang dirimu, latar belakang, dan motivasimu bergabung.",
  },
  {
    title: "Kami Menghubungi",
    desc: "Tim kami akan menghubungimu dalam 3–5 hari kerja untuk langkah selanjutnya.",
  },
];

export default function BergabungPage() {
  return (
    <div className="pt-20">
      <PageHeader
        eyebrow="Bergabung"
        title="Mari Menjadi Bagian"
        titleEmphasis="dari Sejarah"
        desc="Gerakan ini dibangun oleh orang-orang biasa dengan tekad luar biasa. Temukan peranmu di sini."
      />

      {/* SIAPA YANG KAMI CARI */}
      <section className="bg-beige px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>Siapa yang Kami Cari</SectionLabel>
          <div className="mt-10 grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <div
                key={r.title}
                className={`border-t-[3px] ${r.accent} bg-white p-11`}
              >
                <div className={`mb-5 ${r.iconColor}`}>
                  <r.Icon />
                </div>
                <h3 className="mb-3.5 font-serif text-[22px] leading-snug font-bold text-ink">
                  {r.title}
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-ink-mid">
                  {r.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {r.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm bg-beige-mid px-3 py-1 text-xs font-medium text-ink-mid"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA BERGABUNG */}
      <section className="bg-maroon px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 flex items-center gap-3">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
              Mengapa Bergabung
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {alasan.map((a, i) => (
              <div key={a.title} className="bg-white/7 p-8">
                <div className="mb-4 font-serif text-[44px] leading-none font-black text-gold opacity-30">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 font-serif text-[19px] leading-snug font-bold text-white">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEKANISME */}
      <section className="bg-beige-mid px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel>Mekanisme Bergabung</SectionLabel>
            <div className="mt-10 flex flex-col">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className={`relative ml-4 flex gap-6 pl-8 ${
                    i < steps.length - 1
                      ? "border-l border-beige-dark pb-8"
                      : ""
                  }`}
                >
                  <div className="absolute top-0 left-[-16px] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maroon text-[11px] font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="mb-2 font-serif text-lg font-bold text-ink">
                      {s.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-ink-mid">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <JoinForm />
        </div>
      </section>
    </div>
  );
}
