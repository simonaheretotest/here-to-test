"use client";

import { useState } from "react";
import Link from "next/link";
import type { Post } from "../lib/posts";
import PostMeta from "./PostMeta";

type BlogListProps = {
  posts: Post[];
};

export default function BlogList({ posts }: BlogListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All articles");

  const categories = [
    "All articles",
    ...Array.from(
      new Set(posts.map((post) => post.category))
    ).sort(),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      category === "All articles" ||
      post.category === category;

    const searchText = [
      post.title,
      post.description,
      post.category,
      ...post.tags,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchText.includes(
      search.toLowerCase().trim()
    );

    return matchesCategory && matchesSearch;
  });

  function clearFilters() {
    setSearch("");
    setCategory("All articles");
  }

  return (
    <div>
      <div className="mb-8">
        <label htmlFor="article-search" className="sr-only">
          Search articles
        </label>

        <input
          id="article-search"
          type="search"
          placeholder="Search articles..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-sm text-primary outline-none placeholder:text-muted focus:border-accent"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
              category === item
                ? "border-primary bg-primary text-white"
                : "border-border bg-surface text-muted hover:border-accent"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p
        className="mb-5 text-xs text-muted"
        aria-live="polite"
      >
        {filteredPosts.length}{" "}
        {filteredPosts.length === 1 ? "article" : "articles"} found
      </p>

      <div className="border-t border-border">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-border py-8"
          >
            <PostMeta post={post} />

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

        {filteredPosts.length === 0 && (
          <div className="py-16 text-center">
            <h2 className="font-serif text-3xl text-primary">
              No articles found.
            </h2>

            <p className="mt-4 text-muted">
              Try a different search term or category.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 cursor-pointer rounded-lg bg-primary px-5 py-3 text-sm text-white"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}