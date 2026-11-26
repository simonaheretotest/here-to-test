
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-stone-900"
        >
          here<span className="text-emerald-700">to</span>test.
        </Link>

        <div className="flex flex-wrap gap-6 text-sm text-stone-600">
          <Link href="/blog">Blog</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>

          <a
            href="https://github.com/simonaheretotest"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>

      </nav>
    </header>
  );
}
