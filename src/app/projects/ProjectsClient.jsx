'use client'

import { useEffect, useState } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function ProjectsClient() {
  const [theme, setTheme] = useState('vue') // Default to light theme

  useEffect(() => {
    const updateTheme = () => {
      // first check if it's dark or light mode in local storage, which override system theme
      if (window.localStorage.theme === 'dark') {
        console.log('setting theme to dark 1')
        setTheme('panda&hide_border=true');
        return
      }
      if (window.localStorage.theme === 'light') {
        console.log('setting theme to light 1')
        setTheme('vue');
        return
      }
      // then check system theme
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('setting theme to dark 2')
        setTheme('panda&hide_border=true');
        return
      }
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        console.log('setting theme to light 2')
        setTheme('vue');
        return
      }
    };

    // Initial theme setting
    updateTheme();

    // Add event listeners
    window.addEventListener('themeChange', updateTheme);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', updateTheme);

    // Clean up listeners on unmount
    return () => {
      window.removeEventListener('themeChange', updateTheme);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateTheme);
      window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', updateTheme);
    };
  }, []);

  return (
    <SimpleLayout
      title="Cool things I'm working on and have finished working on."
      // intro="I have projects. I promise!"
    >
      <div
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <a href="https://github.com/codefellows/seattle-code-python-401n8">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=codefellows&repo=seattle-code-python-401n8&hide&theme=${theme}`}
            alt="seattle-code-python-401n8"
          />
        </a>
        <a href="https://github.com/adamowada/prompt-engineering-patterns">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=prompt-engineering-patterns&theme=${theme}`}
            alt="prompt-engineering-patterns"
          />
        </a>
        <a href="https://github.com/adamowada/slides-to-reveal">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=slides-to-reveal&theme=${theme}`}
            alt="slides-to-reveal"
          />
        </a>
        <a href="https://github.com/adamowada/personal-website">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=personal-website&theme=${theme}`}
            alt="personal-website"
          />
        </a>
        <a href="https://github.com/adamowada/evals">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=evals&theme=${theme}`}
            alt="evals"
          />
        </a>
        <a href="https://github.com/adamowada/colorful-leetcode-stats">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=colorful-leetcode-stats&theme=${theme}`}
            alt="colorful-leetcode-stats"
          />
        </a>
        <a href="https://github.com/adamowada/dump-to-text">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=dump-to-text&theme=${theme}`}
            alt="dump-to-text"
          />
        </a>
        <a href="https://github.com/adamowada/auto-acp">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=auto-acp&theme=${theme}`}
            alt="auto-acp"
          />
        </a>
        <a href="https://github.com/adamowada/cba-chatbot-demo">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=cba-chatbot-demo&theme=${theme}`}
            alt="cba-chatbot-demo"
          />
        </a>
        <a href="https://github.com/adamowada/tflite-test">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=tflite-test&theme=${theme}`}
            alt="tflite-test"
          />
        </a>
      </div>
    </SimpleLayout>
  )
}
