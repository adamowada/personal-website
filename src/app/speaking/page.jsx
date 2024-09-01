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
      <Card.Title as="h3" href={href}>
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
  description:
    "A short collection of public presentations I've given",
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="A short collection of public presentations I've given."
      intro="I've been a wedding DJ and MC, bass guitarist, coding instructor, presenter, and more. I'm perfectly comfortable with a microphone and an attentive audience. Here are just a few of the coding related recordings I have."
    >
      <div className="space-y-20">
        <SpeakingSection title="Tech Talks">
          <Appearance
            href="https://youtu.be/ej0SY1qOTsU"
            title="Harnessing ChatGPT: Prompt Engineering for Developers and Ops"
            description="A Partner Power Presentation given at Code Fellows covering the basics of ChatGPT and prompt engineering."
            event="Code Fellows, May 2023"
            cta="Watch video"
          />
        </SpeakingSection>
        {/* <SpeakingSection title="Podcasts">
          <Appearance
            href="#"
            title="Using design as a competitive advantage"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Encoding Design, July 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Bootstrapping an aerospace company to $17M ARR"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            event="The Escape Velocity Show, March 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Programming your company operating system"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
            cta="Listen to podcast"
          />
        </SpeakingSection> */}
      </div>
    </SimpleLayout>
  )
}
