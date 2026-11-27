"use client";

import {
  Children,
  isValidElement,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";

type CodeBlockProps = {
  children: ReactNode;
};

export default function CodeBlock({
  children,
}: CodeBlockProps) {
  const codeRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  const codeElement = Children.toArray(children).find(
    isValidElement
  );

  const className = isValidElement<{ className?: string }>(
    codeElement
  )
    ? codeElement.props.className ?? ""
    : "";

  const language =
    className.match(/language-([\w-]+)/)?.[1] ?? "code";

  const languageNames: Record<string, string> = {
    typescript: "TypeScript",
    javascript: "JavaScript",
    ts: "TypeScript",
    js: "JavaScript",
    bash: "Terminal",
    json: "JSON",
    html: "HTML",
    css: "CSS",
    code: "Code example",
  };

  const languageLabel =
    languageNames[language] ?? language;

  async function copyCode() {
    const code = codeRef.current?.textContent;

    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);
      setFailed(false);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
      setFailed(true);
    }
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-4 py-3">
        <span className="text-xs font-medium text-gray-400">
          {languageLabel}
        </span>

        <button
          type="button"
          onClick={copyCode}
          className="cursor-pointer rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          {copied
            ? "✓ Copied!"
            : failed
              ? "Try again"
              : "Copy code"}
        </button>

        <span className="sr-only" aria-live="polite">
          {copied ? "Code copied to clipboard" : ""}
          {failed ? "Unable to copy code" : ""}
        </span>
      </div>

      <pre ref={codeRef} className="m-0! rounded-none!">
        {children}
      </pre>
    </div>
  );
}