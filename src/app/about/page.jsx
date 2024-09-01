import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
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
    "I'm Adam Owada. I build tools to empower people.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Adam Owada. I build tools to empower people.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve loved making (and breaking) things since I was a kid. It
              started with legos, and creating my own mechs by combining
              Bionicle lego sets together into ever more complex iterations and
              of course having them fight each other. I took apart broken
              electronics, played around with BASIC, and told my parents I
              wanted to be an inventor. I liked reading about codes and ciphers,
              and I wrote a report in high school based largely on Simon Singh&apos;s
              "The Code Book" where I learned about the math behind public-key
              cryptography. The idea that one-way functions operated like
              "locks" blew my mind. 🤯
            </p>
            <p>
              I was interested in everything but lacked a clear vision. I loved
              the intellectual challenge of the legal profession and tried law
              school. It wasn&apos;t until IBM&apos;s Watson years later that my creative
              mind really saw the possibility of programming and the potential
              of AI. I bought a GTX 1070 graphics card, watched a few tutorials,
              and even got an MNIST digit recognizer model working. I thought
              this code thing was pretty cool! I quickly realized that I lacked
              the basics and foundation to really understand what I was doing,
              and the whole self-taught route just wasn&apos;t working for me.
            </p>
            <p>
              Having a goal is great, and mine was learning how to code.
              Properly this time. My buddy told me about a coding bootcamp
              called Code Fellows, and I learned web development in JavaScript
              and Python in 2020. I built a stock prediction model using Keras
              and Tensorflow for my final project. I love code because I can
              build tools and apps to be more productive in less time; "tools
              that can build other tools".
            </p>
            <p>
              Since learning to code, I&apos;ve built tech companies, taught coding
              classes, and developed a wide range of applications, APIs, and web
              scrapers—covering the full spectrum of software development.
              Currently, I&apos;m the co-founder and sole developer of Observe
              Safety, an app and company I&apos;m creating with my dad to help
              construction companies efficiently record and manage their safety
              data. We&apos;ve recently begun the alpha testing phase.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.github.com/adamowada"
              icon={GitHubIcon}
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/adamowada/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/adamowada/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://www.x.com/AdamOwada"
              icon={XIcon}
              className="mt-4"
            >
              Follow on X
            </SocialLink>
            {/* <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink> */}
          </ul>
        </div>
      </div>
    </Container>
  )
}
