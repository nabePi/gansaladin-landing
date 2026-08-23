import Image from "next/image";
import Link from "next/link";
import GeomOrnament from "@/components/geom-ornament";
import { IconArrow, IconBook, IconGlobe, IconHands } from "@/components/icons";

const pillars = [
  {
    num: "01",
    Icon: IconBook,
    title: "Pendidikan & Karakter",
    desc: "Program terstruktur untuk mencetak intelektual berakhlak mulia dan berwawasan luas.",
    detail: "Kajian non-formal · Seminar & workshop · Pembinaan komunitas pemuda",
  },
  {
    num: "02",
    Icon: IconGlobe,
    title: "Literasi & Dakwah Digital",
    desc: "Pemanfaatan teknologi untuk menyebarkan ilmu pengetahuan dan nilai-nilai Islam secara relevan.",
    detail: "Konten multi-platform · Podcast & video edukasi · Arsip digital peradaban",
  },
  {
    num: "03",
    Icon: IconHands,
    title: "Kolaborasi & Aksi Sosial",
    desc: "Membangun jaringan kebaikan dan menghadirkan dampak nyata di tengah masyarakat.",
    detail: "Kemitraan strategis · Beasiswa & santunan · Pembinaan komunitas",
  },
];

const ctas = [
  {
    label: "Bergabung",
    title: "Jadilah Bagian dari Sejarah",
    desc: "Pendidik, kreator, atau penggerak komunitas — gerakan ini membutuhkan kontribusimu.",
    btn: "Lihat Peran",
    href: "/bergabung",
    accent: "border-maroon",
    accentBg: "bg-maroon text-white",
  },
  {
    label: "Dukung Kami",
    title: "Dukung Lahirnya Generasi Pembawa Peradaban",
    desc: "Setiap kontribusimu menjadi bagian dari perjalanan panjang membangun kembali peradaban Islam.",
    btn: "Dukung Sekarang",
    href: "/dukung",
    accent: "border-gold",
    accentBg: "bg-gold text-ink",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-maroon-dark px-[5vw] pt-[112px] pb-20">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(28,8,6,0.85)_0%,rgba(90,20,15,0.78)_50%,rgba(28,8,6,0.72)_100%)]" />

        <div className="absolute -bottom-10 -left-10 text-white opacity-5">
          <GeomOrnament size={240} color="currentColor" opacity={1} />
        </div>

        <div className="relative z-10 w-full max-w-[780px]">
          <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="text-xs text-gold">&#10022;</span>
            <span className="text-xs font-medium tracking-[0.12em] text-white/85 uppercase">
              Learn History, Repeat Victory
            </span>
          </div>

          <h1 className="mb-7 font-serif text-[clamp(38px,5.5vw,76px)] leading-[1.05] font-black text-white">
            Membangun Kembali
            <br />
            <span className="text-gold italic">Peradaban Berilmu</span>
          </h1>

          <p className="mb-12 max-w-[520px] text-[clamp(15px,1.8vw,18px)] leading-relaxed font-light text-white/78">
            Bayangkan sebuah generasi muda yang kokoh karakternya, dalam
            ilmunya, dan terinspirasi oleh nilai-nilai peradaban Islam.
            Mereka bukan hanya menjadi penonton, tetapi pelaku utama dalam
            membangun peradaban.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/tentang"
              className="flex items-center gap-2.5 bg-white px-9 py-4 text-[15px] font-semibold tracking-wide text-maroon hover:bg-beige"
            >
              Tentang Kami <IconArrow />
            </Link>
            <Link
              href="/program"
              className="border border-white/50 px-9 py-4 text-[15px] font-medium tracking-wide text-white hover:border-white"
            >
              Mulai Belajar
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50">
          <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline
              points="2 3 8 9 14 3"
              className="animate-scroll-chevron"
            />
            <polyline
              points="2 12 8 18 14 12"
              className="animate-scroll-chevron [animation-delay:0.25s]"
            />
          </svg>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="relative overflow-hidden bg-beige px-[5vw] py-[clamp(80px,10vw,140px)]">
        <div className="pointer-events-none absolute top-1/2 right-[-80px] z-0 h-[520px] w-[520px] -translate-y-1/2 opacity-35">
          <Image
            src="/images/bg-logo-sketch.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-[1200px]">
          <div className="mb-18 max-w-[480px]">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-0.5 w-8 bg-maroon" />
              <span className="text-xs font-semibold tracking-[0.14em] text-maroon uppercase">
                Tiga Pilar Aktivitas
              </span>
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-[1.15] font-bold text-ink">
              Gerakan yang Berakar,
              <br />
              <span className="text-maroon italic">Berdampak Nyata</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <Link
                key={p.num}
                href="/program"
                className="group relative overflow-hidden bg-white p-10 hover:bg-maroon"
              >
                <div className="mb-6 text-[11px] font-semibold tracking-[0.12em] text-ink-light group-hover:text-white/50">
                  {p.num}
                </div>
                <div className="mb-5 text-maroon group-hover:text-gold">
                  <p.Icon />
                </div>
                <h3 className="mb-4 font-serif text-[22px] leading-tight font-bold text-ink group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-ink-mid group-hover:text-white/75">
                  {p.desc}
                </p>
                <p className="text-xs leading-relaxed text-ink-light group-hover:text-white/50">
                  {p.detail}
                </p>
                <div className="absolute right-6 bottom-6 text-beige-dark group-hover:text-gold">
                  <IconArrow />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="relative overflow-hidden bg-maroon px-[5vw] py-20">
        <Image
          src="/images/about-visual.png"
          alt=""
          fill
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-maroon opacity-70" />
        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <div className="mb-6 text-5xl leading-none text-gold opacity-60">
            &rdquo;
          </div>
          <blockquote className="mb-6 font-serif text-[clamp(24px,4vw,42px)] leading-[1.3] font-semibold text-white italic">
            Learn History, Repeat Victory.
          </blockquote>
          <p className="text-sm tracking-[0.1em] text-white/55 uppercase">
            — Jejak Menuju Kemenangan
          </p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-beige-mid px-[5vw] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">
          {ctas.map((c) => (
            <div key={c.label} className={`border-t-[3px] ${c.accent} bg-white p-10`}>
              <div className="mb-4 text-[11px] font-semibold tracking-[0.12em] text-maroon uppercase">
                {c.label}
              </div>
              <h3 className="mb-4 font-serif text-2xl leading-snug font-bold text-ink">
                {c.title}
              </h3>
              <p className="mb-7 text-[15px] leading-relaxed text-ink-mid">
                {c.desc}
              </p>
              <Link
                href={c.href}
                className={`inline-flex items-center gap-2 ${c.accentBg} px-7 py-3 text-sm font-semibold`}
              >
                {c.btn} <IconArrow />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
