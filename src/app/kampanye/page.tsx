import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PillNav from "./pill-nav";
import HeroPattern from "./hero-pattern";
import JumpCards from "./jump-cards";
import Reveal from "./reveal";
import StudioSection from "./studio-section";
import ClassSection from "./class-section";
import RumahSection from "./rumah-section";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dukung GenSa — Tiga Program, Satu Misi Peradaban",
};

export default function KampanyePage() {
  return (
    <div className={`${inter.className} bg-[#F6F0E8]`}>
      <PillNav />

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-[calc(100svh-80px)] scroll-mt-[136px] flex-col justify-center overflow-hidden bg-[#2C2018] px-5 pt-40 pb-16"
      >
        <HeroPattern />

        <div className="relative z-10 mx-auto w-full max-w-[680px]">
          <div className="mb-8 flex items-center gap-2.5">
            <span className="h-0.5 w-[18px] bg-[#C9962A]" />
            <span className="text-xs font-bold tracking-[0.18em] text-[#C9962A] uppercase">
              Yayasan Saladin Peradaban Berilmu · 2025
            </span>
          </div>

          <h1 className="mb-6 font-serif text-[clamp(38px,8vw,76px)] leading-[0.95] font-black text-white">
            Tiga
            <br />
            Program.
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" }}
            >
              Satu Misi.
            </span>
          </h1>

          <p className="mb-12 max-w-[540px] text-[clamp(15px,2.2vw,18px)] leading-relaxed text-white/60">
            Studio untuk konten dakwah yang menjangkau jutaan. Kelas yang
            membentuk karakter generasi. Rumah yang menjadi pusat peradaban
            Islam. Bantu kami mewujudkan ketiganya — mulai dari langkah yang
            paling kecil.
          </p>

          <JumpCards />
        </div>
      </section>

      <StudioSection />
      <div className="h-0.5 bg-[linear-gradient(90deg,transparent,#E2D6C4,transparent)]" />
      <ClassSection />
      <div className="h-0.5 bg-[linear-gradient(90deg,transparent,#E2D6C4,transparent)]" />
      <RumahSection />

      {/* BANK STRIP */}
      <section id="bank" className="scroll-mt-[136px] bg-[#1A1410] px-5 py-16 text-center">
        <Reveal>
          <div className="mx-auto max-w-[640px]">
            <h2 className="mb-2 font-serif text-[clamp(24px,4vw,36px)] font-bold text-white">
              Satu Rekening
              <br />
              untuk Ketiga Program
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/50">
              Transfer ke rekening wakaf resmi Yayasan Saladin Peradaban
              Berilmu, lalu konfirmasi via WhatsApp dengan menyebutkan program
              yang kamu dukung.
            </p>
            <div className="mb-6 inline-block rounded-2xl border border-[rgba(201,150,42,0.3)] bg-white/[0.06] px-10 py-6">
              <div className="mb-2 text-[11px] tracking-[0.16em] text-[#C9962A] uppercase">
                Bank Syariah Indonesia (BSI) · Rekening Wakaf
              </div>
              <div className="font-serif text-2xl font-bold tracking-[0.12em] text-white">
                7332&nbsp;&nbsp;6101&nbsp;&nbsp;33
              </div>
              <div className="mt-1 text-sm text-white/45">
                a.n. Yayasan Saladin Peradaban Berilmu
              </div>
            </div>
            <p className="mx-auto max-w-[480px] text-sm leading-relaxed text-white/40">
              Setelah transfer, konfirmasi ke WhatsApp{" "}
              <strong className="text-white/70">0819-4423-3210</strong>
              <br />
              Format: Nama · Nominal · Program (Studio / GenSa Class / Rumah
              Literasi) · Nama untuk sertifikat
            </p>
          </div>
        </Reveal>
      </section>

      {/* CAMPAIGN LEGAL STRIP */}
      <div className="bg-[#1A1410] px-5 pt-2 pb-10 text-center">
        <div className="font-serif text-xl font-bold text-[#C9962A]">
          ☽✦ GenSaladin
        </div>
        <div className="mt-1 text-[11px] tracking-[0.18em] text-white/25 uppercase">
          Learn History · Repeat Victory
        </div>
        <div className="mx-auto my-3.5 h-px w-12 bg-white/10" />
        <p className="text-xs leading-relaxed text-white/30">
          Yayasan Saladin Peradaban Berilmu · NO. AHU-0024132.AH.01.04.TAHUN
          2025 · NIB: 2310250075237
          <br />
          <a
            href="https://gensaladin.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9962A]"
          >
            gensaladin.id
          </a>{" "}
          · Instagram{" "}
          <a
            href="https://instagram.com/gen.saladin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9962A]"
          >
            @gen.saladin
          </a>{" "}
          · WA{" "}
          <a href="tel:+6281944233210" className="text-[#C9962A]">
            0819-4423-3210
          </a>
        </p>
      </div>
    </div>
  );
}
