import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    return [];
  }

  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.7,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = posts.map(
    (post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date,
      priority: 0.8,
    })
  );

  return [...staticPages, ...articlePages];
}