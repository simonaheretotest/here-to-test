
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
  category: string;
  tags: string[];
  content: string;
};

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

      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: String(data.date),
        category: data.category,
        tags: data.tags ?? [],
        content,
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
