import { TerminalFrame } from "@/components/terminal-frame";

const SKILLS = ["TypeScript", "Next.js", "Tailwind", "Node.js", "Automation", "API Design"];

export default function AboutPage() {
  return (
    <TerminalFrame title="~/about">
      <p className="text-terminal-accent">$ cat profile.txt</p>
      <p className="mt-4 max-w-3xl text-terminal-text/90">
        I design and ship product-focused web apps with strong engineering fundamentals. My work balances visual craft, reliable data flows, and automation so updates stay low-maintenance.
      </p>

      <h2 className="mt-8 text-lg text-terminal-amber">skills</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span key={skill} className="rounded border border-terminal-border px-2 py-1 text-sm">
            {skill}
          </span>
        ))}
      </div>
    </TerminalFrame>
  );
}
