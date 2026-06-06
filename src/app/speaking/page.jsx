import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href} newWindow={true}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Speaking',
  description: 'Technical talks and public presentations by Adam Owada.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Speaking and technical communication"
      intro="I enjoy explaining technical systems clearly, whether in a classroom, a talk, project documentation, or a live engineering walkthrough."
    >
      <div className="space-y-20">
        <SpeakingSection title="Tech Talks">
          <Appearance
            href="https://youtu.be/ej0SY1qOTsU"
            title="Harnessing ChatGPT: Prompt Engineering for Developers and Ops"
            description="A Code Fellows Partner Power Hour on practical ChatGPT use, prompt design, iteration, and responsible AI-assisted workflows for developers and operations teams."
            event="Code Fellows, May 2023"
            cta="Watch video"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
