
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "../lib/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Learning by doing
            </p>

            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
              Featured projects.
            </h2>

            <p className="mt-4 text-muted">
              Practical applications of software testing
              and automation.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
