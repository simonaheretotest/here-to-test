import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap
        items-center justify-between gap-4 px-6 py-8">

        <div>
          <Link href="/" className="text-lg font-bold">
            here<span className="text-emerald-700">to</span>test.
          </Link>
          <p className="mt-2 text-sm text-stone-500">
            Learn. Build. Test. Repeat.
          </p>
        </div>

        <a
          href="https://github.com/simonaheretotest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-stone-600"
        >
          GitHub ↗
        </a>

        <p className="text-sm text-stone-500">
          © {new Date().getFullYear()} Here to Test.
        </p>

      </div>
    </footer>
  );
}