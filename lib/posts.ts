import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  "content",
  "blog"
);

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  formattedDate: string;
  category: string;
  tags: string[];
  content: string;
  readingTime: number;
};

function calculateReadingTime(content: string): number {
  const words = content
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");

      const fullPath = path.join(
        postsDirectory,
        fileName
      );

      const fileContents = fs.readFileSync(
        fullPath,
        "utf8"
      );

      const { data, content } = matter(
        fileContents.trimStart()
      );

      const date = String(data.date);

      return {
        slug,
        title: data.title,
        description: data.description,
        date,
        formattedDate: formatDate(date),
        category: data.category,
        tags: data.tags ?? [],
        content,
        readingTime: calculateReadingTime(content),
      };
    });

  return posts.sort((a, b) =>
    b.date.localeCompare(a.date)
  );
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find(
    (post) => post.slug === slug
  );
}