import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import "highlight.js/styles/github-dark.css";

import CodeBlock from "../../../components/CodeBlock";
import PostMeta from "../../../components/PostMeta";
import TableOfContents from "../../../components/TableOfContents";
import ArticleNavigation from "../../../components/ArticleNavigation";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function ArticlePage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-6 py-16 text-muted">
          Loading article...
        </div>
      }
    >
      <ArticleContent params={params} />
    </Suspense>
  );
}

async function ArticleContent({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="lg:pr-[280px]">
        <Link
          href="/blog"
          className="text-sm text-muted hover:text-primary"
        >
          ← Back to the journal
        </Link>

        <header className="mt-10 border-b border-border pb-10">
          <PostMeta post={post} />

          <h1 className="mt-6 font-serif text-5xl leading-tight text-primary md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-muted">
            {post.description}
          </p>
        </header>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
        <aside className="lg:order-2">
          <TableOfContents content={post.content} />
        </aside>

        <div className="min-w-0 lg:order-1">
          <article className="blog-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug, rehypeHighlight]}
              components={{
                pre: ({ children }) => (
                  <CodeBlock>{children}</CodeBlock>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>

          <ArticleNavigation currentSlug={post.slug} />

          <div className="mt-12">
            <Link
              href="/blog"
              className="font-medium text-primary hover:underline"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}