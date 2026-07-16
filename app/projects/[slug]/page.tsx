import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/profile";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Projects
      </Link>

      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-2xl font-medium">{project.title}</h1>
        <span className="text-sm text-muted-foreground">{project.year}</span>
      </div>

      <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl border border-border bg-neutral-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-6 text-muted-foreground">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Visit Project ↗
        </a>
      )}
    </div>
  );
}
