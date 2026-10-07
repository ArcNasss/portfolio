import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  tech: string[];
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block min-w-0 overflow-hidden rounded-xl border border-border bg-neutral-900 transition-colors hover:border-foreground/20 hover:bg-neutral-800"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-fit transition-transform duration-500 group-hover:scale-105 "
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="min-w-0 font-medium">{project.title}</h3>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
