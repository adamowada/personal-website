import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

const selectedProjects = [
  {
    name: 'Observe Safety',
    category: 'B2B SaaS',
    href: 'https://observesafety.com',
    description:
      'Alpha-stage construction safety platform with Next.js, Expo React Native, FastAPI, PostgreSQL, tenant-scoped RBAC/RLS, analytics, mobile reporting workflows, CI, and AWS production-pilot infrastructure.',
  },
  {
    name: 'Codex Supervisor',
    category: 'Agentic developer tooling',
    href: 'https://github.com/adamowada/codex-supervisor',
    description:
      'Python-first control plane for Codex-driven engineering workflows, including durable task state, worker evidence, isolated worktrees, MCP/plugin surfaces, and review loops.',
  },
  {
    name: 'nlp-stock-prediction',
    category: 'Python research systems',
    href: 'https://github.com/adamowada/nlp-stock-prediction',
    description:
      'Evidence-backed market research/reporting system with provenance, SQLite-backed artifacts, provider-health handling, MCP tooling, and evaluation workflows. It is not a trading app.',
  },
  {
    name: 'Agentify / Sports Business Technologies',
    category: 'Paid client work',
    href: 'https://agentify.co',
    description:
      'Sports data ingestion, reconciliation, salary-comparable analysis, and owner-facing admin workflows for MLS/NWSL player data.',
  },
]

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link
      className="group -m-1 p-1"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Contact() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Open to applied AI, full-stack, Python backend, developer tooling, and
        AI-assisted product engineering roles.
      </p>
      <Button
        href="mailto:adamowada@gmail.com"
        variant="secondary"
        className="mt-6"
      >
        Email Adam
      </Button>
    </div>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  if (role.summary) {
    return (
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <CompanyMark mark={role.mark} />
        </div>
        <div className="min-w-0 flex-auto">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {role.href ? (
                <Link
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                >
                  {role.company}
                </Link>
              ) : (
                role.company
              )}
            </h3>
            <p
              className="ml-auto shrink-0 text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${startLabel} until ${endLabel}`}
            >
              <time dateTime={startDate}>{startLabel}</time>{' '}
              <span aria-hidden="true">-</span>{' '}
              <time dateTime={endDate}>{endLabel}</time>
            </p>
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </p>
          <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            {role.summary}
          </p>
        </div>
      </li>
    )
  }

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <CompanyMark mark={role.mark} />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function CompanyMark({ mark }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-8 w-8">
      <rect width="40" height="40" rx="12" className={mark.background} />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="11.5"
        fill="none"
        className={mark.border}
      />
      <path d={mark.shape} className={mark.accent} fillOpacity="0.18" />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fontWeight="700"
        className={mark.text}
      >
        {mark.initials}
      </text>
    </svg>
  )
}

function Resume() {
  let currentYear = new Date().getFullYear().toString()
  let resume = [
    {
      company: 'Observe Safety, LLC',
      title: 'Co-Founder and Full-Stack Engineer',
      href: 'https://observesafety.com',
      mark: {
        initials: 'OS',
        background: 'fill-teal-50 dark:fill-teal-950/40',
        border: 'stroke-teal-200 dark:stroke-teal-700/70',
        accent: 'fill-teal-500',
        text: 'fill-teal-700 dark:fill-teal-300',
        shape: 'M8 21c6.5-10 17.5-10 24 0-6.5 10-17.5 10-24 0Z',
      },
      start: {
        label: 'Apr 2024',
        dateTime: '2024-04',
      },
      end: {
        label: 'Present',
        dateTime: currentYear,
      },
      summary:
        'Building an alpha-stage construction safety SaaS with Next.js, Expo React Native, FastAPI, PostgreSQL, tenant-scoped RBAC/RLS, analytics, mobile reporting, CI, and AWS production-pilot infrastructure.',
    },
    {
      company: 'Self-employed',
      title: 'Independent Applied AI / Full-Stack Engineer',
      href: 'https://github.com/adamowada',
      mark: {
        initials: 'AI',
        background: 'fill-zinc-50 dark:fill-zinc-800',
        border: 'stroke-zinc-200 dark:stroke-zinc-700',
        accent: 'fill-zinc-500',
        text: 'fill-zinc-700 dark:fill-zinc-200',
        shape: 'M10 10h20v20H10z',
      },
      start: '2021',
      end: {
        label: 'Present',
        dateTime: currentYear,
      },
      summary:
        'Selected independent software work across Codex-native developer tools, MCP integrations, Python research systems, evaluation infrastructure, and full-stack product experiments.',
    },
    {
      company: 'Sports Business Technologies / Agentify',
      title: 'Contract Full-Stack Developer & Data Engineer',
      href: 'https://agentify.co',
      mark: {
        initials: 'AG',
        background: 'fill-yellow-50 dark:fill-yellow-950/30',
        border: 'stroke-yellow-200 dark:stroke-yellow-700/60',
        accent: 'fill-yellow-500',
        text: 'fill-zinc-900 dark:fill-yellow-200',
        shape: 'M8 12h24v16H8z',
      },
      start: {
        label: 'Dec 2024',
        dateTime: '2024-12',
      },
      end: {
        label: 'May 2026',
        dateTime: '2026-05',
      },
      summary:
        'Delivered sports data ingestion, reconciliation, salary-comparable analysis, and owner-facing admin workflows for MLS/NWSL player data.',
    },
    {
      company: 'Outlier.ai',
      title: 'AI Model Evaluation Contributor',
      href: 'https://outlier.ai',
      mark: {
        initials: 'O',
        background: 'fill-violet-50 dark:fill-violet-950/30',
        border: 'stroke-violet-200 dark:stroke-violet-700/60',
        accent: 'fill-violet-500',
        text: 'fill-violet-700 dark:fill-violet-200',
        shape: 'M20 7a13 13 0 1 0 0 26 13 13 0 0 0 0-26Z',
      },
      start: {
        label: 'Oct 2024',
        dateTime: '2024-10',
      },
      end: {
        label: 'Dec 2024',
        dateTime: '2024-12',
      },
      summary:
        'Evaluated and rewrote model outputs for coding, function-calling, and tool-use tasks using detailed rubrics and quality criteria.',
    },
    {
      company: 'Code Fellows, Inc.',
      title: 'Lead Instructor, Python',
      href: 'https://www.codefellows.org',
      mark: {
        initials: 'CF',
        background: 'fill-red-50 dark:fill-red-950/30',
        border: 'stroke-red-200 dark:stroke-red-700/60',
        accent: 'fill-red-500',
        text: 'fill-red-700 dark:fill-red-200',
        shape: 'M9 9h22v22H9z',
      },
      start: {
        label: 'Apr 2022',
        dateTime: '2022-04',
      },
      end: {
        label: 'Mar 2024',
        dateTime: '2024-03',
      },
      summary:
        'Taught advanced Python, Django, REST APIs, PostgreSQL, Docker, React/Next.js, data science, testing, and software engineering fundamentals.',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-6">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectPreview({ project }) {
  return (
    <Card as="article">
      <Card.Eyebrow decorate>{project.category}</Card.Eyebrow>
      <Card.Title href={project.href} newWindow={Boolean(project.href)}>
        {project.name}
      </Card.Title>
      <Card.Description>{project.description}</Card.Description>
      {project.href && <Card.Cta>View project</Card.Cta>}
    </Card>
  )
}

function SelectedWork() {
  return (
    <section>
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Selected work
      </h2>
      <div className="mt-6 flex flex-col gap-12">
        {selectedProjects.map((project) => (
          <ProjectPreview key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Applied AI / full-stack engineer focused on agentic developer
            tooling.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Adam Owada, a Seattle-based Python and TypeScript engineer.
            I build practical software systems around LLMs, data pipelines,
            APIs, and developer workflows. My recent work includes Codex-native
            tooling, MCP integrations, applied LLM evaluation infrastructure,
            and Observe Safety, an alpha-stage B2B construction safety SaaS.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects">View projects</Button>
            <Button
              href="https://www.linkedin.com/in/adamowada/"
              variant="secondary"
            >
              LinkedIn
            </Button>
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.github.com/adamowada"
              aria-label="GitHub profile"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/adamowada/"
              aria-label="LinkedIn profile"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <SelectedWork />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}
