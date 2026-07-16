const bookmarks = [
  {
    title: "MDN Web Docs",
    description: "Referensi lengkap untuk HTML, CSS, dan JavaScript.",
    url: "https://developer.mozilla.org",
  },
  {
    title: "Next.js Documentation",
    description: "Dokumentasi resmi Next.js, App Router, dan API-nya.",
    url: "https://nextjs.org/docs",
  },
  {
    title: "Tailwind CSS Docs",
    description: "Panduan lengkap utility class Tailwind CSS.",
    url: "https://tailwindcss.com/docs",
  },
];

export default function BookmarksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-2xl font-medium">Bookmarks</h1>
      <p className="mt-2 text-muted-foreground">
        Kumpulan resource dan tools favorit yang sering saya pakai.
      </p>

      <div className="mt-10 space-y-3">
        {bookmarks.map((b) => (
          <a
            key={b.url}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-border bg-muted p-5 transition-colors hover:border-accent"
          >
            <p className="font-medium">{b.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
