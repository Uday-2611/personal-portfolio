import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/data/portfolio";

const linkClass =
  "underline decoration-foreground/35 underline-offset-[3px] transition-colors hover:decoration-foreground focus-visible:rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[680px] px-5 py-5 sm:px-7 sm:py-7">
      <header className="flex items-start justify-between gap-6 text-[14px] leading-5">
        <a href="#top" className="font-medium tracking-[-0.015em]">
          Uday Agarwal
        </a>
        <nav aria-label="Main navigation" className="flex gap-4 text-muted-foreground">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
      </header>

      <div id="top" className="pt-[24vh] sm:pt-[28vh]">
        <section aria-labelledby="intro-heading" className="max-w-[590px]">
          <h1 id="intro-heading" className="sr-only">About Uday Agarwal</h1>
          <p>
            I&apos;m Uday, a developer, designer, and data analyst building purposeful
            digital products at the intersection of design, technology, and analytics.
          </p>
          <p className="mt-4">
            I&apos;m drawn to fintech, financial markets, cinema, art, and books. I care
            about thoughtful experiences, clear systems, and solving the right problem.
          </p>
          <p className="mt-4">
            I&apos;ll soon join <span className="font-medium">Capgemini</span> as a Senior
            Analyst. Until then, I&apos;m continuing to make, learn, and refine the work.
          </p>
        </section>

        <section id="work" aria-labelledby="work-heading" className="scroll-mt-8 pt-28 sm:pt-36">
          <SectionTitle id="work-heading">Selected work</SectionTitle>
          <ol>
            {portfolio.projects.map((project, index) => (
              <li key={project} className="group flex items-baseline justify-between gap-8 border-b border-border py-3 first:border-t">
                <span className="font-medium tracking-[-0.01em] transition-transform duration-150 group-hover:translate-x-1">
                  {project}
                </span>
                <span className="shrink-0 text-[12px] tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-[12px] leading-5 text-muted-foreground">
            Case studies and project links will be added as they are ready.
          </p>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-8 pt-28 sm:pt-36">
          <SectionTitle id="experience-heading">Experience</SectionTitle>
          <div>
            {portfolio.experience.map((item) => (
              <article key={item.company} className="border-b border-border py-4 first:border-t">
                <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-8">
                  <div>
                    <h3 className="font-medium tracking-[-0.01em]">{item.company}</h3>
                    <p className="text-muted-foreground">{item.role}</p>
                  </div>
                  <p className="text-[12px] tabular-nums text-muted-foreground sm:text-right">
                    {item.period}
                  </p>
                </div>
                <p className="mt-3 max-w-[550px] text-[13px] leading-[1.55] text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-8 pt-28 sm:pt-36">
          <SectionTitle id="contact-heading">Elsewhere</SectionTitle>
          <p className="max-w-[570px]">
            You can reach me at{" "}
            <a href={`mailto:${portfolio.email}`} className={linkClass}>{portfolio.email}</a>
            , or find me on{" "}
            {portfolio.socials.map((social, index) => (
              <span key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" className={linkClass}>
                  {social.label}
                </a>
                {index < portfolio.socials.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </section>
      </div>

      <footer className="pt-32 pb-3 text-[12px] text-muted-foreground sm:pt-44">
        <Separator className="mb-3" />
        <div className="flex justify-between gap-5">
          <p>Uday Agarwal</p>
          <p>Delhi, India · 2026</p>
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-3 text-[12px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
      {children}
    </h2>
  );
}
