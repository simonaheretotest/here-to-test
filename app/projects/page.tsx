
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore my software testing and test automation projects.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        My portfolio
      </p>

      <h1 className="mt-5 font-serif text-5xl text-primary md:text-6xl">
        Projects.
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        A collection of practical projects exploring
        software quality, test automation and development.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}
