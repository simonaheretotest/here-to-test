
import { projects } from "../lib/projects";

type Project = (typeof projects)[number];

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-8 transition hover:shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          {project.category}
        </span>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
          {project.status}
        </span>
      </div>

      <h3 className="mt-6 font-serif text-3xl text-primary">
        {project.title}
      </h3>

      <p className="mt-4 leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mb-8 mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-border px-3 py-1 text-xs text-muted"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-sm font-medium text-primary hover:underline"
      >
        View GitHub repository ↗
      </a>
    </article>
  );
}
