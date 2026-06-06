import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Adam Owada',
    default: 'Adam Owada - Applied AI / Full-Stack Engineer',
  },
  description:
    'Seattle-based applied AI / full-stack engineer focused on agentic developer tooling, Python/TypeScript systems, MCP integrations, data pipelines, and B2B SaaS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
