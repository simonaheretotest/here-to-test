import GitHubSlugger from "github-slugger";

type Heading = {
  id: string;
  text: string;
  level: number;
};

function getHeadings(content: string): Heading[] {
  const slugger = new GitHubSlugger();

  const cleanContent = content.replace(
    /```[\s\S]*?```|~~~[\s\S]*?~~~/g,
    ""
  );

  const matches = cleanContent.matchAll(
    /^(#{2,6})[ \t]+(.+?)[ \t]*#*[ \t]*$/gm
  );

  const headings = Array.from(matches).map((match) => {
    const text = match[2].trim();

    return {
      id: slugger.slug(text),
      text,
      level: match[1].length,
    };
  });

  return headings.filter(
    (heading) => heading.level <= 3
  );
}

export default function TableOfContents({
  content,
}: {
  content: string;
}) {
  const headings = getHeadings(content);

  if (headings.length < 2) {
    return null;
  }

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-xl border border-border bg-surface p-6 lg:sticky lg:top-8 lg:rounded-none lg:border-0 lg:border-l lg:bg-transparent"
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
        On this page
      </p>

      <ul className="space-y-3">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={
              heading.level === 3 ? "pl-4" : ""
            }
          >
            <a
              href={`#${heading.id}`}
              className="text-sm leading-relaxed text-muted transition hover:text-primary hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}