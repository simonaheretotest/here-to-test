import Link from "next/link";
import { getAllPosts } from "../lib/posts";

type ArticleNavigationProps = {
  currentSlug: string;
};

export default function ArticleNavigation({
  currentSlug,
}: ArticleNavigationProps) {
  const posts = getAllPosts();

  const currentIndex = posts.findIndex(
    (post) => post.slug === currentSlug
  );

  if (currentIndex === -1) {
    return null;
  }

  const previousPost = posts[currentIndex + 1];
  const nextPost = posts[currentIndex - 1];

  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <section className="mt-12 border-t border-border pt-8">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">
        Continue reading
      </h2>

      <nav
        aria-label="Article navigation"
        className="grid gap-4 sm:grid-cols-2"
      >
        {previousPost ? (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="group rounded-xl border border-border bg-surface p-6 transition hover:shadow-md"
          >
            <p className="text-xs text-muted">
              ← Previous article
            </p>

            <h3 className="mt-3 font-serif text-xl text-primary group-hover:text-accent">
              {previousPost.title}
            </h3>

            <p className="mt-3 text-xs text-muted">
              {previousPost.category} ·{" "}
              {previousPost.readingTime} min read
            </p>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextPost && (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group rounded-xl border border-border bg-surface p-6 text-right transition hover:shadow-md"
          >
            <p className="text-xs text-muted">
              Next article →
            </p>

            <h3 className="mt-3 font-serif text-xl text-primary group-hover:text-accent">
              {nextPost.title}
            </h3>

            <p className="mt-3 text-xs text-muted">
              {nextPost.category} ·{" "}
              {nextPost.readingTime} min read
            </p>
          </Link>
        )}
      </nav>
    </section>
  );
}