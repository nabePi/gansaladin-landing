export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-0.5 w-8 bg-maroon" />
      <span className="text-xs font-semibold tracking-[0.14em] text-maroon uppercase">
        {children}
      </span>
    </div>
  );
}
