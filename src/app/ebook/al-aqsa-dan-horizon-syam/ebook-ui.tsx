import type { ReactNode } from "react";
import Link from "next/link";
import { smoothScrollToHash } from "@/lib/smooth-scroll";

const ARABIC_FONT =
  "'Traditional Arabic','Scheherazade New','Amiri',Arial,serif";

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="mb-[18px] text-justify text-[1.1em] text-[#4a0d16]">
      {children}
    </p>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-[18px] text-justify">{children}</p>;
}

export function IntroLine({ children }: { children: ReactNode }) {
  return <p className="mb-1.5 font-semibold text-[#8a1a1a]">{children}</p>;
}

export function SectionHead({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-9 mb-4 text-[clamp(19px,3vw,23px)] font-bold text-[#7A1524]">
      {children}
    </h3>
  );
}

export function PullIdea({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 rounded-md border border-[#cfae5c] border-l-4 border-l-[#A8842B] bg-[linear-gradient(135deg,#F3EAD6,#efe2c4)] px-6 py-5 text-[1.02em] text-[#4a0d16] italic">
      <span className="mb-2 block text-[10.5px] font-bold tracking-[1.5px] text-[#A8842B] uppercase not-italic">
        {label}
      </span>
      {children}
    </div>
  );
}

export function QuoteBlock({
  arabic,
  children,
  cite,
}: {
  arabic?: string;
  children: ReactNode;
  cite?: string;
}) {
  return (
    <div className="my-[22px] rounded-md border border-[#e8c9c9] bg-[#fff8f0] px-6 py-[22px] shadow-[0_8px_30px_rgba(74,13,22,0.12)]">
      {arabic && (
        <div
          dir="rtl"
          className="mb-3.5 text-right text-[1.35em] leading-[2.1] text-[#8a1a1a]"
          style={{ fontFamily: ARABIC_FONT }}
        >
          {arabic}
        </div>
      )}
      <div className="text-[1.02em] text-[#8a1a1a] italic [&_p]:mb-2 [&_p]:text-justify [&_p:last-child]:mb-0">
        {children}
      </div>
      {cite && (
        <span className="mt-2.5 block text-[.85em] font-normal text-[#666] not-italic">
          {cite}
        </span>
      )}
    </div>
  );
}

export function ReflectBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-9 mb-2 rounded-lg bg-[#7A1524] px-[26px] py-[26px] text-[#fdf6ea]">
      <span className="mb-2.5 block text-[10.5px] font-bold tracking-[2px] text-[#cfae5c] uppercase">
        Pertanyaan Reflektif
      </span>
      <p className="m-0 text-left text-[#fdf6ea] italic">{children}</p>
    </div>
  );
}

export function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-md border border-dashed border-[#A8842B] bg-white px-5 py-4 text-[.92em] text-[#666] [&_b]:text-[#7A1524]">
      {children}
    </div>
  );
}

export function LayerGrid({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 mb-[30px] grid grid-cols-1 gap-3.5 sm:grid-cols-2">
      {children}
    </div>
  );
}

export function LayerCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#e4d7ba] border-t-[3px] border-t-[#A8842B] bg-white px-5 py-4.5">
      <h4 className="mb-2 text-[15px] font-bold text-[#7A1524]">{title}</h4>
      <p className="mb-0 text-left text-[.94em] text-[#231F20]">{children}</p>
    </div>
  );
}

export type TimelineItem = {
  time: string;
  event: string;
  desc: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="my-[30px] border-l-2 border-[#cfae5c] pl-[26px]">
      {items.map((item) => (
        <div key={item.time + item.event} className="relative pb-[26px]">
          <div className="absolute top-1 -left-[32px] h-3 w-3 rounded-full border-2 border-[#A8842B] bg-[#7A1524]" />
          <div className="text-[13px] font-bold tracking-[.3px] text-[#7A1524]">
            {item.time}
          </div>
          <div className="my-0.5 font-bold text-[#231F20]">{item.event}</div>
          <div className="text-left text-[.93em] text-[#666]">
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

export function GlossEntry({
  term,
  children,
}: {
  term: string;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-[#e4d7ba] py-4 last:border-none">
      <div className="mb-1 text-[1.05em] font-bold text-[#7A1524]">
        {term}
      </div>
      {children}
    </div>
  );
}

export function RefCat({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-2">
      <h4 className="mt-6 mb-2.5 text-[15px] tracking-[.3px] text-[#7A1524]">
        {title}
      </h4>
      {children}
    </div>
  );
}

export function RefItem({ children }: { children: ReactNode }) {
  return (
    <div className="mb-1.5 border-l-2 border-[#cfae5c] py-2 pl-4 text-[.95em] text-[#231F20]">
      {children}
    </div>
  );
}

type ChapterLink = { href: string; label: string; title: string };

export function ChapterNav({
  prev,
  next,
}: {
  prev?: ChapterLink;
  next?: ChapterLink;
}) {
  return (
    <div className="mt-[50px] flex gap-3.5 border-t border-[#e4d7ba] pt-6">
      {prev && (
        <a
          href={prev.href}
          onClick={(e) => smoothScrollToHash(e, prev.href.slice(1))}
          className="flex-1 rounded-lg border border-[#e4d7ba] bg-white px-4 py-3.5 no-underline transition-colors hover:border-[#A8842B]"
        >
          <span className="text-[10px] font-bold tracking-[1px] text-[#A8842B] uppercase">
            {"← " + prev.label}
          </span>
          <div className="mt-1 text-sm font-bold text-[#7A1524]">
            {prev.title}
          </div>
        </a>
      )}
      {next && (
        <a
          href={next.href}
          onClick={(e) => smoothScrollToHash(e, next.href.slice(1))}
          className="flex-1 rounded-lg border border-[#e4d7ba] bg-white px-4 py-3.5 text-right no-underline transition-colors hover:border-[#A8842B]"
        >
          <span className="text-[10px] font-bold tracking-[1px] text-[#A8842B] uppercase">
            {next.label + " →"}
          </span>
          <div className="mt-1 text-sm font-bold text-[#7A1524]">
            {next.title}
          </div>
        </a>
      )}
    </div>
  );
}

export function ContactRow({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="flex gap-2.5 border-b border-[#e4d7ba] py-2.5 text-[.95em] last:border-none">
      <div className="w-[110px] shrink-0 text-[.85em] font-bold tracking-[.5px] text-[#7A1524] uppercase">
        {k}
      </div>
      <div>{children}</div>
    </div>
  );
}

export function ChapterHero({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="mb-[30px] aspect-[5/7] max-h-[420px] w-full rounded-[10px] bg-[linear-gradient(135deg,#4a0d16,#7A1524_60%,#cfae5c)] shadow-[0_8px_30px_rgba(74,13,22,0.12)]"
    />
  );
}

export function EbookSection({
  id,
  kicker,
  title,
  sub,
  children,
  paper,
}: {
  id: string;
  kicker: string;
  title: string;
  sub?: string;
  children: ReactNode;
  paper?: boolean;
}) {
  return (
    <section
      id={id}
      className={`border-b border-[#e4d7ba] py-16 last-of-type:border-none ${
        paper ? "bg-[#FFFEFB] pt-[60px]" : ""
      }`}
    >
      <div className="mx-auto max-w-[700px] px-6">
        <div className="mb-2.5 text-[11px] font-bold tracking-[2px] text-[#A8842B] uppercase">
          {kicker}
        </div>
        <h1 className="mb-2 text-[clamp(28px,5vw,42px)] leading-[1.15] font-black text-[#7A1524]">
          {title}
        </h1>
        {sub && (
          <h2 className="mb-[34px] border-b-2 border-[#cfae5c] pb-[30px] text-[clamp(15px,2.4vw,18px)] text-[#666] italic">
            {sub}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

export function EbookLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-[#7A1524] underline">
      {children}
    </Link>
  );
}
