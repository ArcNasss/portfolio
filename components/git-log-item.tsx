function shortHash(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padEnd(7, "0").slice(0, 7);
}

export default function GitLogItem({
  title,
  subtitle,
  year,
  author,
}: {
  title: string;
  subtitle: string;
  year: string;
  author: string;
}) {
  const hash = shortHash(title + year);

  return (
    <div className="border-b border-border py-4 font-mono text-sm last:border-none">
      <p className="text-amber-400">commit {hash}</p>
      <p className="text-muted-foreground">Author: {author}</p>
      <p className="text-muted-foreground">Date:   {year}</p>
      <p className="mt-2 pl-4 text-foreground">feat: {title.toLowerCase()}</p>
      <p className="pl-4 text-muted-foreground">{subtitle}</p>
    </div>
  );
}