import Link from "next/link";
import { TerminalFrame } from "@/components/terminal-frame";

export default function HomePage() {
  return (
    <TerminalFrame title="~/home">
      <p className="typing max-w-max text-xl text-terminal-accent">$ whoami</p>
      <h1 className="mt-4 text-3xl font-semibold text-terminal-text">I build web experiences with clean systems.</h1>
      <p className="mt-4 max-w-3xl text-terminal-text/85">
        This portfolio auto-syncs featured work from GitHub repos tagged with <span className="text-terminal-amber">portfolio</span>, then refreshes screenshots through ScreenshotOne and Cloudinary.
      </p>

      <div className="mt-8 flex gap-3 text-sm">
        <Link href="/projects" className="rounded border border-terminal-accent px-4 py-2 text-terminal-accent">
          cd ~/projects
        </Link>
        <Link href="/about" className="rounded border border-terminal-amber px-4 py-2 text-terminal-amber">
          cat ~/about
        </Link>
      </div>
    </TerminalFrame>
  );
}
