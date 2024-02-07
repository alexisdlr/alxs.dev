// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Alexis De Leon - Blogsite';
export const SITE_DESCRIPTION = 'Welcome to my personal blog, where you can find a lot content of Web technologies such as JavaScript, TypeScript, React.js, Next.js and much more!';
import wordleImg from './images/wordle.png'
import devjobs from './images/devjobs.png'

export const projects = [
  {
    name: 'Wordle', 
    desc: 'A web application of a fully functional clone of the popular "wordle" game built with React.js.',
    img: wordleImg, 
    code: 'https://github.com/alexisdlr/wordle',
    demo: 'https://wordle-alxs.vercel.app/',
    technologies: [
      
       'React + TypeScript',
       'Redux Toolkit',
       'Tailwind CSS'
      
    ]
  },
  {
    name: 'Devjobs', 
    desc: 'This actual project is a challenge from @frontendmentor. This challenge consists of creating an application that extracts data from a local JSON file and renders it into a job listing.',
    img: devjobs, 
    code: 'https://github.com/alexisdlr/devjobs',
    demo: 'https://devjobs-dun.vercel.app/',
    technologies: [
      
       'Next.js',
       'Zustand',
       'Tailwind'
      
    ]
  },
  {
    name: 'Evently', 
    desc: 'This actual project is a challenge from @frontendmentor. This challenge consists of creating an application that extracts data from a local JSON file and renders it into a job listing.',
    img: devjobs, 
    code: 'https://github.com/alexisdlr/devjobs',
    demo: 'https://devjobs-dun.vercel.app/',
    technologies: [
      
       'Next.js',
       'Zustand',
       'Tailwind'
      
    ]
  }
]