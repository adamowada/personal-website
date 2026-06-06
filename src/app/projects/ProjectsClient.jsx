import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Observe Safety',
    category: 'B2B SaaS',
    href: 'https://observesafety.com',
    stack: 'Next.js, Expo React Native, FastAPI, PostgreSQL, AWS CDK',
    description:
      'Alpha-stage construction safety SaaS for reporting, evidence organization, analytics, corrective actions, media attachments, mobile workflows, and tenant-scoped access control.',
  },
  {
    name: 'Codex Supervisor',
    category: 'Agentic developer tooling',
    href: 'https://github.com/adamowada/codex-supervisor',
    stack: 'Python, SQLite, MCP, Codex plugin surfaces, pytest, ruff, mypy',
    description:
      'Python-first control plane for Codex-driven engineering workflows with task contracts, worker-run evidence, isolated worktrees, review loops, and repo-local learning memory.',
  },
  {
    name: 'nlp-stock-prediction',
    category: 'Applied AI / research tooling',
    href: 'https://github.com/adamowada/nlp-stock-prediction',
    stack: 'Python, Pydantic, SQLite, MCP, pytest, mypy, ruff',
    description:
      'Evidence-backed market research and reporting system with provenance, provider-health handling, Markdown/JSON artifacts, evaluation workflows, and an opt-in Codex MCP path. It does not execute trades.',
  },
  {
    name: 'Agentify / Sports Business Technologies',
    category: 'Paid client work',
    stack: 'FastAPI, MongoDB, pandas, BeautifulSoup, RapidFuzz, Next.js',
    description:
      'Sports data scraping, reconciliation, salary-comparable analysis, and owner/admin tooling for MLS/NWSL player data. Business impact is qualitative: reliable data and daily owner-used workflows.',
  },
  {
    name: 'Codex Subagent Testing',
    category: 'Coding-agent evaluation',
    href: 'https://github.com/adamowada/codex-subagent-testing',
    stack: 'Python, PowerShell, Playwright, TypeScript/Python benchmark tasks',
    description:
      'Reproducible benchmark harness for comparing Codex subagent coding topologies with isolated runs, public/hidden test scoring, token accounting, validation, and HTML/PDF reports.',
  },
  {
    name: 'Web Design Templates',
    category: 'Codex plugin development',
    href: 'https://github.com/adamowada/templates',
    stack: 'Codex plugin, skills, recipes, pattern docs, indexes, validation',
    description:
      'Frontend design retrieval plugin that routes Codex website work through curated recipes, pattern docs, source-backed exemplars, validation guides, and smoke-test discipline.',
  },
  {
    name: 'Merry Men',
    category: 'MCP experiment',
    href: 'https://github.com/adamowada/merry-men',
    stack: 'Python, MCP, SQLite, local dashboard, pytest',
    description:
      'Paper-only Robinhood-compatible MCP experiment where Codex can inspect a simulated account, review paper orders, persist portfolio state locally, and generate repeatable artifacts.',
  },
  {
    name: 'slides-to-reveal',
    category: 'Automation / technical instruction',
    href: 'https://github.com/adamowada/slides-to-reveal',
    stack: 'Python, Playwright, BeautifulSoup, reveal.js',
    description:
      'Automation tool built at Code Fellows to convert Google Slides into reveal.js markdown and slide images, supporting large-scale curriculum migration work.',
  },
  {
    name: 'WA Driver Guide Practice',
    category: 'GPT application',
    href: 'https://github.com/adamowada/wa-driver-guide-practice-api',
    stack: 'FastAPI, OpenAI API, Turso, Next.js',
    description:
      'Study app that used GPT-4/OpenAI to generate practice questions from the Washington Driver Guide for a real personal use case.',
  },
]

function Project({ project }) {
  return (
    <Card as="article">
      <Card.Eyebrow decorate>{project.category}</Card.Eyebrow>
      <Card.Title href={project.href} newWindow={Boolean(project.href)}>
        {project.name}
      </Card.Title>
      <Card.Description>{project.description}</Card.Description>
      <p className="relative z-10 mt-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {project.stack}
      </p>
      {project.href && <Card.Cta>View project</Card.Cta>}
    </Card>
  )
}

export default function ProjectsClient() {
  return (
    <SimpleLayout
      title="Selected projects"
      intro="A focused set of projects that show how I build: product systems, agentic developer tools, data pipelines, applied LLM workflows, and technical automation."
    >
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </SimpleLayout>
  )
}
