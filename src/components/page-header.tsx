import GeomOrnament from "@/components/geom-ornament";

export default function PageHeader({
  eyebrow,
  title,
  titleEmphasis,
  desc,
}: {
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  desc?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-beige-dark bg-beige-mid px-[5vw] py-[clamp(60px,8vw,100px)]">
      <div className="pointer-events-none absolute top-1/2 right-[5vw] -translate-y-1/2 text-maroon opacity-[0.07]">
        <GeomOrnament size={260} color="currentColor" opacity={1} />
      </div>
      <div className="relative z-10 max-w-[700px]">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-0.5 w-8 bg-maroon" />
          <span className="text-xs font-semibold tracking-[0.14em] text-maroon uppercase">
            {eyebrow}
          </span>
        </div>
        <h1 className="mb-5 font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] font-black text-ink">
          {title}
          <br />
          <span className="text-maroon italic">{titleEmphasis}</span>
        </h1>
        {desc && (
          <p className="max-w-[560px] text-[clamp(16px,1.8vw,18px)] leading-relaxed font-light text-ink-mid">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
