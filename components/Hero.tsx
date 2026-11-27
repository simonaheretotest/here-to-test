
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center
      gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

      <div>
        <p className="text-xs font-semibold uppercase
          tracking-[0.2em] text-muted">
          Software testing · Automation · Quality
        </p>

        <h1 className="mt-6 font-serif text-6xl
          leading-[1.05] text-primary md:text-7xl">
          Learn. Build.
          <br />
          Test with{" "}
          <span className="italic text-accent">
            purpose.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-lg
          leading-relaxed text-muted">
          A learning space for curious testers.
          Explore Playwright, TypeScript, software quality
          and practical test automation.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="rounded-lg bg-primary px-6 py-3
              text-sm font-medium text-white
              transition hover:opacity-90"
          >
           Explore the blog →
          </Link>

          <Link
            href="/projects"
            className="rounded-lg border border-border
              px-6 py-3 text-sm font-medium text-primary
              transition hover:bg-white"
          >
            View my projects
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl
        bg-primary shadow-xl">

        <div className="flex items-center gap-2
          border-b border-white/10 px-5 py-4">

          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />

          <span className="ml-auto font-mono text-xs
            text-white/60">
            first-test.spec.ts
          </span>
        </div>

        <pre className="overflow-x-auto p-6 text-sm
          leading-8 text-green-100">
          <code>{`import { test, expect } from
  "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1 })
  ).toBeVisible();
});`}</code>
        </pre>

        <div className="border-t border-white/10
          px-6 py-4 font-mono text-sm text-green-300">
          Example Playwright test
        </div>
      </div>
    </section>
  );
}
