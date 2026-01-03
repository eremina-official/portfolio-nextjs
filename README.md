# Portfolio

Demo: [https://portfolio-marinaeremina.vercel.app/](https://portfolio-marinaeremina.vercel.app/).

This repository is a portfolio built with Next.js (App Router). It demonstrates a responsive, accessible, and themeable personal site for showcasing projects, writing and contact details.

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- PostCSS
- Modern CSS (OKLCH / CSS custom properties for theming)
- Vercel (recommended for deployment)
- EsLint
- Prettier
- Animations with Motion (Framer Motion)
- next-intl for internationalization

## Features

- Responsive layout and components
- Tailwind utility-first styling
- SEO-friendly pages (meta tags, canonical URLs)
- Language change via next-intl
- Animated components with Framer Motion

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


TODO
- Light / dark / custom theme support via CSS variables
- Use Motion to animate side menu on mobile
- Add tests (test for most important translations, tests for error boundaries)
- Add readme files for projects
- Analyze ai-generated code in the projects, remove redundant code
- Handle loading states

- Add github icon as link to project cards - done
- Add projects to menu - done
- Add error.tsx to handle routing/server errors - done
- Add custom ErrorBoundary to handle component errors - done

