import type { ReactNode } from "react";

export function ReflectBox({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-9 mb-2 rounded-lg bg-[#7A1524] px-[26px] py-[26px] text-[#fdf6ea] [&_p]:mb-2.5 [&_p]:text-left [&_p]:italic [&_p:last-child]:mb-0">
      <span className="mb-2.5 block text-[10.5px] font-bold tracking-[2px] text-[#cfae5c] uppercase">
        {label}
      </span>
      {children}
    </div>
  );
}

export function CheckpointList({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-2.5 mb-[26px] ml-[22px] list-decimal [&_li]:mb-2.5 [&_li]:pl-1">
      {children}
    </ol>
  );
}
