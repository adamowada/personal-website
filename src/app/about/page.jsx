import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'About Adam Owada, a Seattle-based applied AI / full-stack engineer focused on agentic developer tooling.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Adam Owada"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I build practical AI-enabled software, not demos for their own sake.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Adam Owada, a Seattle-based applied AI / full-stack
              engineer focused on agentic developer tooling. My work sits at the
              intersection of backend systems, product engineering, LLM
              workflows, MCP integrations, and data-heavy applications.
            </p>
            <p>
              I work mostly in Python and TypeScript, with recent projects
              spanning FastAPI, Django, Next.js, React, PostgreSQL, SQLite,
              CI/testing systems, Codex plugins, and local MCP tool surfaces. I
              care about software that is useful, inspectable, and defensible in
              the real world.
            </p>
            <p>
              Before focusing more heavily on applied AI and product systems, I
              was a Lead Instructor at Code Fellows, where I taught advanced
              Python, Django, REST APIs, PostgreSQL, Docker, React/Next.js, data
              science, testing, and software engineering fundamentals. That
              teaching background still shapes how I build: clear interfaces,
              readable code, strong documentation, and technical decisions that
              hold up under scrutiny.
            </p>
            <p>
              Current work includes Observe Safety, an alpha-stage construction
              safety SaaS I&apos;m building with my father, and several
              Codex-native projects exploring how AI-assisted engineering can
              become more auditable, repeatable, and useful.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.github.com/adamowada"
              icon={GitHubIcon}
            >
              GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/adamowada/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:adamowada@gmail.com"
              icon={MailIcon}
              className="mt-4"
            >
              adamowada@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
