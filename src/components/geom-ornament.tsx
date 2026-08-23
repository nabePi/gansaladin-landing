export default function GeomOrnament({
  size = 120,
  color = "currentColor",
  opacity = 0.08,
  className,
}: {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ opacity, pointerEvents: "none", flexShrink: 0 }}
    >
      <polygon
        points="60,4 116,34 116,86 60,116 4,86 4,34"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <polygon
        points="60,16 104,40 104,80 60,104 16,80 16,40"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
      <circle cx="60" cy="60" r="18" stroke={color} strokeWidth="1" fill="none" />
      <line x1="60" y1="4" x2="60" y2="116" stroke={color} strokeWidth="0.5" />
      <line x1="4" y1="60" x2="116" y2="60" stroke={color} strokeWidth="0.5" />
    </svg>
  );
}
