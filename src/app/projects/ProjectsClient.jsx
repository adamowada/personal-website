'use client'

import { useEffect, useState } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function ProjectsClient() {
  const [theme, setTheme] = useState('vue') // Default to light theme

  useEffect(() => {
    const updateTheme = () => {
      const localStorageTheme = window.localStorage.getItem('theme');

      if (localStorageTheme === 'system') {
        // Check system preference
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(darkModeMediaQuery.matches ? 'dark' : 'vue');

        const handleSystemThemeChange = (e) => {
          setTheme(e.matches ? 'dark' : 'vue');
        };

        darkModeMediaQuery.addEventListener('change', handleSystemThemeChange);

        // Clean up system theme listener on unmount
        return () => {
          darkModeMediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
      } else if (localStorageTheme === 'light') {
        setTheme('vue');
      } else if (localStorageTheme === 'dark') {
        setTheme('dark');
      } else {
        // Fallback to light theme
        setTheme('vue');
      }
    };

    // Initial theme setting
    updateTheme();

    const handleStorageChange = () => {
      updateTheme();
    };

    // Listen for changes in localStorage (works across tabs and windows)
    window.addEventListener('storage', handleStorageChange);

    // Add a manual listener for the same tab to catch localStorage changes
    const manualStorageChange = () => {
      updateTheme();
    };

    // Custom logic for handling theme changes in the same tab
    window.addEventListener('localStorageChange', manualStorageChange);

    // Clean up listeners on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorageChange', manualStorageChange);
    };
  }, []); // Empty dependency array to only run on mount

  return (
    <SimpleLayout
      title="Cool things I'm working on and have finished working on."
      intro="I have projects. I promise!"
    >
      <div
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <a href="https://github.com/codefellows/seattle-code-python-401n8">
          <img
            width="400"
            src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=codefellows&repo=seattle-code-python-401n8&theme=${theme}`}
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
            src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=slides-to-reveal&theme=vue"
            alt="slides-to-reveal"
          />
        </a>
        <a href="https://github.com/adamowada/personal-website">
          <img
            width="400"
            src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=personal-website&theme=vue"
            alt="personal-website"
          />
        </a>
        <a href="https://github.com/adamowada/evals">
          <img
            width="400"
            src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=evals&theme=vue"
            alt="evals"
          />
        </a>
        <a href="https://github.com/adamowada/colorful-leetcode-stats">
          <img
            width="400"
            src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=colorful-leetcode-stats&theme=vue"
            alt="colorful-leetcode-stats"
          />
        </a>
        <a href="https://github.com/adamowada/dump-to-text">
          <img
            width="400"
            src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=dump-to-text&theme=vue"
            alt="dump-to-text"
          />
        </a>
        <a href="https://github.com/adamowada/auto-acp">
          <img
            width="400"
            src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=auto-acp&theme=vue"
            alt="auto-acp"
          />
        </a>
        <a href="https://github.com/adamowada/cba-chatbot-demo">
          <img
            width="400"
            src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=cba-chatbot-demo&theme=vue"
            alt="cba-chatbot-demo"
          />
        </a>
        <a href="https://github.com/adamowada/tflite-test">
          <img
            width="400"
            src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=adamowada&repo=tflite-test&theme=vue"
            alt="tflite-test"
          />
        </a>
      </div>
    </SimpleLayout>
  )
}
