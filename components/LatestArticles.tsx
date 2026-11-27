
import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function LatestArticles() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Learning in public
            </p>

            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
              Latest from the journal.
            </h2>

            <p className="mt-4 text-muted">
              Practical lessons, challenges and discoveries.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all articles →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                  {post.category}
                </span>

                <time dateTime={post.date}>
                  {post.date}
                </time>
              </div>

              <h3 className="mt-6 font-serif text-2xl leading-tight text-primary group-hover:text-accent">
                {post.title}
              </h3>

              <p className="mb-6 mt-4 text-sm leading-relaxed text-muted">
                {post.description}
              </p>

              <span className="mt-auto pt-4 text-sm font-medium text-primary">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
