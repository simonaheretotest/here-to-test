import type { Post } from "../lib/posts";

type PostMetaProps = {
  post: Post;
};

export default function PostMeta({
  post,
}: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
      <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
        {post.category}
      </span>

      <time dateTime={post.date}>
        {post.formattedDate}
      </time>

      <span aria-hidden="true">·</span>

      <span className="flex items-center gap-1.5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>

        {post.readingTime} min read
      </span>
    </div>
  );
}