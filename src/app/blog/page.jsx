import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Blog',
  description: 'Technical writing by Adam Owada.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ArticlesIndex() {
  return (
    <SimpleLayout
      title="Writing"
      intro="Longer technical writing is temporarily hidden while I refresh the site."
    />
  )
}
