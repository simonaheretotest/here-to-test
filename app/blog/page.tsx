import { getAllPosts } from "../../lib/posts";
import BlogList from "../../components/BlogList";

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

      <BlogList posts={posts} />
    </main>
  );
}