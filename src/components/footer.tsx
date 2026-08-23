import Image from "next/image";
import Link from "next/link";
import { IconInstagram, IconMail, IconWhatsApp } from "@/components/icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/bergabung", label: "Bergabung" },
  { href: "/dukung", label: "Dukung Kami" },
];

const contact = [
  {
    label: "Email",
    Icon: IconMail,
    href: "mailto:info@gensaladin.id",
    text: "info@gensaladin.id",
  },
  {
    label: "WhatsApp",
    Icon: IconWhatsApp,
    href: "https://wa.me/6281944233210",
    text: "0819 4423 3210",
    external: true,
  },
];

const instagramHandles = [
  { handle: "@gensaladin.id", href: "https://instagram.com/gensaladin.id" },
  { handle: "@gen.saladin", href: "https://instagram.com/gen.saladin" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-[5vw] pt-[clamp(60px,8vw,100px)] pb-10 text-white">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="GenSa — Generasi Shalahuddin"
              width={386}
              height={145}
              className="mb-5 h-16 w-auto"
            />
            <p className="mb-6 max-w-[320px] text-sm leading-relaxed text-white/50">
              Membangun kembali peradaban Islam yang berlandaskan ilmu
              pengetahuan, karakter mulia, dan aksi nyata di tengah
              masyarakat.
            </p>
            <div className="font-serif text-base italic text-gold/80">
              &ldquo;Learn History, Repeat Victory.&rdquo;
            </div>
          </div>

          <div>
            <div className="mb-5 text-[11px] font-semibold tracking-[0.1em] text-white/35 uppercase">
              Navigasi
            </div>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-left text-sm font-normal text-white/60 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 text-[11px] font-semibold tracking-[0.1em] text-white/35 uppercase">
              Kontak
            </div>
            <div className="flex flex-col gap-3">
              {contact.map((c) => (
                <div key={c.label}>
                  <div className="mb-[3px] text-[11px] text-white/30">
                    {c.label}
                  </div>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
                  >
                    <c.Icon className="shrink-0" />
                    {c.text}
                  </a>
                </div>
              ))}
              <div>
                <div className="mb-[3px] text-[11px] text-white/30">
                  Instagram
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/70">
                  <IconInstagram className="shrink-0" />
                  {instagramHandles.map((ig, i) => (
                    <span key={ig.handle}>
                      {i > 0 && <span className="mx-1.5">·</span>}
                      <a
                        href={ig.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        {ig.handle}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-7">
          <div className="text-[13px] text-white/30">
            &copy; 2025 Yayasan Saladin Peradaban Berilmu. Hak cipta
            dilindungi.
          </div>
          <div className="text-[13px] text-white/30">
            Terdaftar sebagai yayasan non-profit di Indonesia.
          </div>
        </div>
      </div>
    </footer>
  );
}
