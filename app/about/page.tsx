import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Meet Simona, an ISTQB-certified software tester exploring Playwright, TypeScript and test automation.",
};

const skills = [
  {
    number: "01",
    title: "Test automation",
    technologies: [
      "Playwright",
      "End-to-end testing",
      "Page Object Model",
      "Test assertions",
    ],
  },
  {
    number: "02",
    title: "Programming",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Asynchronous programming",
    ],
  },
  {
    number: "03",
    title: "Software testing",
    technologies: [
      "Test case design",
      "Exploratory testing",
      "Bug reporting",
      "Risk-based testing",
    ],
  },
  {
    number: "04",
    title: "Web development",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          The person behind Here to Test
        </p>

        <h1 className="mt-6 font-serif text-5xl leading-tight text-primary md:text-7xl">
          Curiosity meets{" "}
          <span className="italic text-accent">
            quality.
          </span>
        </h1>

        <p className="mt-8 text-xl leading-relaxed text-muted">
          I'm Simona, an ISTQB-certified tester with
          a background in front-end development and
          digital entrepreneurship, building my
          expertise in test automation.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/simonaheretotest"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-primary transition hover:bg-surface"
          >
            GitHub ↗
          </a>

          <Link
            href="/projects"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore my projects →
          </Link>
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <h2 className="font-serif text-4xl text-primary">
          My journey.
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          <p>
            My interest in software quality comes
            from a curiosity about how digital
            products work and how they can be
            improved.
          </p>

          <p>
            With a background in front-end
            development and digital products,
            I bring a perspective that combines
            user experience, analytical thinking
            and attention to detail.
          </p>

          <p>
            After earning my ISTQB Foundation
            Level certification, I began developing
            practical automation skills through
            hands-on projects with Playwright
            and TypeScript.
          </p>

          <p>
            Here to Test is where I document
            that journey, share what I learn,
            explore testing challenges and
            build practical solutions.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-border bg-surface p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Professional certification
        </p>

        <h2 className="mt-4 font-serif text-3xl text-primary">
          ISTQB Certified Tester
        </h2>

        <p className="mt-3 text-muted">
          Foundation Level — CTFL v4.0
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
            September 2026
          </span>

          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
            85% exam result
          </span>
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Skills and tools
        </p>

        <h2 className="mt-4 font-serif text-4xl text-primary">
          My technical toolkit.
        </h2>

        <p className="mt-4 text-muted">
          Technologies and testing practices I am
          actively developing through practical
          projects.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <article
              key={skill.number}
              className="rounded-xl border border-border bg-surface p-7"
            >
              <span className="font-mono text-sm text-accent">
                {skill.number}
              </span>

              <h3 className="mt-4 font-serif text-2xl text-primary">
                {skill.title}
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-muted">
                {skill.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="flex items-center gap-3"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />

                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl bg-primary p-8 text-white md:p-12">
        <h2 className="font-serif text-4xl">
          Always learning.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
          My next goals include building more
          advanced automation frameworks,
          exploring API testing, continuous
          integration and AI-driven software
          testing.
        </p>

        <Link
          href="/blog"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-medium text-primary transition hover:bg-white/90"
        >
          Follow my learning journey →
        </Link>
      </section>
    </main>
  );
}