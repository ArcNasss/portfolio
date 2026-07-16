import Link from "next/link";
import { Send } from "lucide-react";
import TextReveal from "@/components/text-reveal";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import ContributionGraph from "@/components/contribution-graph";
import Clock from "@/components/clock";
import GridPattern from "@/components/grid-pattern";
import DotScatter from "@/components/dot-scatter";
import Meteors from "@/components/meteors";
import Marquee from "@/components/marquee";
import { profile, skills, projects, achievements, closingQuote } from "@/data/profile";
import GitLogItem from "@/components/git-log-item";
import AchievementItem from "@/components/achievement-item";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <GridPattern />
        <DotScatter />
        <Meteors number={12} />
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
          <p className="text-sm text-muted-foreground">{profile.greeting}</p>

          <h1 className="mt-4 bg-gradient-to-b from-foreground to-neutral-500 bg-repeat-y bg-clip-text text-3xl font-medium leading-tight text-balance text-transparent [background-size:100%_1.25em] sm:text-5xl">
            <TextReveal text={profile.headline} />
          </h1>

          <p className="mt-6 max-w-xl text-muted-foreground">{profile.tagline}</p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-800"
            >
              <Send className="h-3.5 w-3.5" />
              Contact Me
            </Link>
            <Clock className="text-sm text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-xl font-medium">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View All →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-medium">Who I Am</h2>
            <Link
              href="/services"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              What I Do →
            </Link>
          </div>
          <div className="space-y-4 text-muted-foreground">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

     <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-8 text-xl font-medium">
            My Skills
          </h2>

          <Marquee baseSpeed={0.4} fastSpeed={2.2}>
            {skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </Marquee>

          <Marquee direction="right" className="mt-4" baseSpeed={0.4} fastSpeed={2.2}>
            {[...skills].reverse().map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </Marquee>
        </div>
      </section>

      {/* Achievement */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-6 text-xl font-medium">Achievement</h2>
          <div className="rounded-xl border border-border bg-muted/20 px-5">
            {achievements.map((a) => (
              <AchievementItem key={a.title} {...a} />
            ))}
          </div>
        </div>
      </section>
      {/* Contribution Graph */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-10 py-6">
          <ContributionGraph />
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm text-muted-foreground">
            Ending on a note I try to live by
          </p>
          <p className="mt-2 text-lg italic">&ldquo;{closingQuote}&rdquo;</p>
        </div>
      </section>
    </div>
  );
}
