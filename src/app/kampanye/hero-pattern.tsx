export default function HeroPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.06]"
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="kampanye-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kampanye-grid)" />
      <circle cx="200" cy="350" r="250" fill="rgba(123,26,26,0.3)" />
      <circle cx="800" cy="200" r="180" fill="rgba(14,107,84,0.2)" />
      <circle cx="600" cy="600" r="200" fill="rgba(201,150,42,0.12)" />
    </svg>
  );
}
