
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <div>
          <Link href="/" className="text-lg font-bold text-primary">
            here<span className="text-accent">to</span>test.
          </Link>

          <p className="mt-2 text-sm text-muted">
            Learn. Build. Test. Repeat.
          </p>
        </div>

        <a
          href="https://github.com/simonaheretotest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted"
        >
          GitHub ↗
        </a>

        <p className="text-sm text-muted">
          © 2026 Here to Test.
        </p>
      </div>
    </footer>
  );
}
