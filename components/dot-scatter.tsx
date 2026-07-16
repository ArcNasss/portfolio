// Titik-titik acak tapi konsisten antara server & client (seeded),
// supaya tidak beda hasil render dan tidak error hydration.
function seeded(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export default function DotScatter({ count = 60 }: { count?: number }) {
  const dots = Array.from({ length: count }, (_, i) => ({
    left: `${seeded(i) * 100}%`,
    top: `${seeded(i + 100) * 100}%`,
    size: seeded(i + 200) > 0.7 ? 2 : 1,
    opacity: 0.2 + seeded(i + 300) * 0.5,
  }));

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000_0%,transparent_85%)]"
    >
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-foreground"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
        />
      ))}
    </div>
  );
}
