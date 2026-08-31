import Image from "next/image";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative border-t border-line px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#top" aria-label={`${site.name} — home`}>
            <Image
              src="/logoImages/problexa-wordmark-transparent_1.png"
              alt={site.name}
              width={150}
              height={19}
              className="h-[19px] w-auto"
            />
          </a>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted">
            {site.positioning}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 font-mono text-[0.7rem] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-solve" aria-hidden="true" />
            {site.status}
          </p>
        </div>

        <div className="flex gap-12">
          <nav className="flex flex-col gap-2">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline font-mono text-xs text-muted hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono text-xs text-muted hover:text-text"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-line pt-6 font-mono text-[0.7rem] text-muted">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href="#top" className="link-underline hover:text-text">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
