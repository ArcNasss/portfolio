import ProjectCard from "@/components/project-card";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-2xl font-medium">Projects</h1>
      <p className="mt-2 text-muted-foreground">
       From late-night experiments to real-world collaborations, here's a collection of projects I've had the opportunity to build.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
