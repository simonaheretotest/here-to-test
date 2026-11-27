
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Practical Playwright tutorials, TypeScript exercises and software testing insights.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Learning in public
        </p>

        <h1 className="mt-5 font-serif text-5xl text-primary md:text-6xl">
          The testing journal.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Practical tutorials, discoveries and lessons
          from my journey into software testing
          and test automation.
        </p>
      </div>

      <div className="border-t border-border">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-border py-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                {post.category}
              </span>

              <time dateTime={post.date}>
                {post.date}
              </time>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h2 className="mt-4 font-serif text-3xl text-primary transition hover:text-accent">
                {post.title}
              </h2>
            </Link>

            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              {post.description}
            </p>

            <div className="mt-5">
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
