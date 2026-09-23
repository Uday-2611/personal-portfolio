import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Contact,
  Mail,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/data/portfolio";

const sectionLink =
  "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4";

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12">
        <header className="flex h-20 items-center justify-between border-b border-border/80">
          <a
            href="#top"
            className="group flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            aria-label="Go to the top"
          >
            <span className="grid size-8 place-items-center bg-foreground text-xs font-semibold tracking-[-0.02em] text-background transition-transform group-hover:-rotate-3">
              UA
            </span>
            <span className="hidden text-sm font-medium sm:inline">Uday Agarwal</span>
          </a>

          <nav aria-label="Main navigation" className="flex items-center gap-5 sm:gap-7">
            <a className={sectionLink} href="#work">Work</a>
            <a className={sectionLink} href="#about">About</a>
            <a className={sectionLink} href="#contact">Contact</a>
          </nav>
        </header>

        <section className="grid min-h-[calc(100vh-5rem)] content-center py-20 lg:grid-cols-[1fr_18rem] lg:gap-24 lg:py-28">
          <div className="relative border-s-2 border-primary ps-6 sm:ps-9">
            <p className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              Available for thoughtful work
            </p>
            <h1 className="max-w-4xl text-[clamp(3.2rem,9vw,7.7rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-balance">
              I make the web feel considered.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              I&apos;m Uday, a developer who turns complex ideas into clear,
              reliable digital products. I care about useful interfaces,
              thoughtful details, and software that earns its place.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 rounded-none px-5">
                <a href="#work">
                  View selected work
                  <ArrowDown data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 rounded-none px-5">
                <a href={`mailto:${portfolio.email}`}>
                  Start a conversation
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-16 self-end lg:mt-0 lg:pb-2">
            <dl className="space-y-6 font-mono text-xs">
              <div>
                <dt className="mb-2 uppercase tracking-[0.14em] text-muted-foreground">Based in</dt>
                <dd className="flex items-center gap-2 text-foreground">
                  <MapPin className="size-3.5 text-primary" />
                  India
                </dd>
              </div>
              <div>
                <dt className="mb-2 uppercase tracking-[0.14em] text-muted-foreground">Focus</dt>
                <dd className="leading-5 text-foreground">Product engineering<br />Frontend systems</dd>
              </div>
              <div>
                <dt className="mb-2 uppercase tracking-[0.14em] text-muted-foreground">This portfolio</dt>
                <dd className="text-foreground">Edition 01 / 2026</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="work" className="scroll-mt-8 py-24 sm:py-32">
          <SectionHeading label="Selected work" note="A small index of things I have built and explored." />
          <div className="mt-12 border-t border-border">
            {portfolio.projects.map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noreferrer" : undefined}
                className="group grid gap-5 border-b border-border py-7 transition-colors hover:bg-muted/45 focus-visible:bg-muted/45 focus-visible:outline-none sm:grid-cols-[3rem_1.25fr_1fr_auto] sm:items-center sm:px-4 sm:py-8"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">{project.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground sm:hidden">{project.description}</p>
                </div>
                <p className="hidden max-w-sm text-sm leading-6 text-muted-foreground sm:block">{project.description}</p>
                <div className="flex items-center justify-between gap-5 sm:justify-end">
                  <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-8 py-24 sm:py-32">
          <SectionHeading label="Experience" note="Learning by making, testing, and shipping." />
          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              {portfolio.experience.map((item) => (
                <article key={item.role} className="border-t border-border py-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-medium tracking-[-0.02em]">{item.role}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-muted-foreground">{item.period}</p>
                  </div>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>

            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Education</p>
              <article className="border-t border-border py-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.02em]">{portfolio.education.degree}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{portfolio.education.institution}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-muted-foreground">{portfolio.education.period}</p>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{portfolio.education.description}</p>
              </article>

              <p className="mb-5 mt-12 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Working with</p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 border-t border-border py-7 text-sm text-muted-foreground">
                {portfolio.skills.map((skill, index) => (
                  <span key={skill}>
                    {skill}
                    {index < portfolio.skills.length - 1 && <span className="ms-3 text-border">/</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 py-24 sm:py-32">
          <div className="grid gap-10 border-y border-border py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-primary">Have something in mind?</p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl">Let&apos;s make something useful.</h2>
            </div>
            <Button asChild size="lg" className="h-12 rounded-none px-6">
              <a href={`mailto:${portfolio.email}`}>
                Email me
                <Mail data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </section>

        <footer className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium">Uday Agarwal</p>
            <p className="mt-1 text-sm text-muted-foreground">Designed and built with intent.</p>
          </div>
          <div className="flex items-center gap-5">
            <SocialLink href={portfolio.github} label="GitHub"><Code2 className="size-4" /></SocialLink>
            <SocialLink href={portfolio.linkedin} label="LinkedIn"><Contact className="size-4" /></SocialLink>
            <SocialLink href={`mailto:${portfolio.email}`} label="Email"><Mail className="size-4" /></SocialLink>
          </div>
        </footer>
      </div>
    </main>
  );
}

function SectionHeading({ label, note }: { label: string; note: string }) {
  return (
    <div>
      <div className="flex items-end justify-between gap-8">
        <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{label}</h2>
        <p className="hidden max-w-sm text-right text-sm leading-6 text-muted-foreground sm:block">{note}</p>
      </div>
      <Separator className="mt-5 bg-foreground" />
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >
      {children}
      <span>{label}</span>
    </a>
  );
}
