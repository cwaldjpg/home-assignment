
# Home Assignment Overview

This repository contains a home assignment which built from scratch with Next 14 using App Router. Designed to assess proficiency in specific technical skills and problem-solving abilities. Below is a summary of the contents and objectives of the assignment:

## Requirement

Node.js 18+ or later (Using 20.12.0 during the assignment).

## Installation

To set up the project, clone the repository and install dependencies using your preferred package manager (npm, yarn, pnpm, or bun). 

```bash
npm install
```

To start the development server with:

```bash
npm run dev
```

To start the production server we need to run the "build" and "start" scripts by doing:

```bash
npm run build
# Built successfully then run start script
npm start 
```

## Repository Structure

```bash
├── README.md                       # A brief explanation about repository
├── .vscode                         # VSCode configuration
├── .storybook                      # Storybook configuration
├── public                          # Static assets like images and fonts
├── messages                        # Internationalization messages defined
├── src
│   ├── components                  # Usable components
│   ├── app                         # Next app routing
│   ├── stories                     # Stories define
│   ├── utils                       # Containing config, helperful utilities function
│   ├── globals.css                 # Global css + tailwind
│   ├── i18n.ts                     # Internalization request-scoped configuration
│   ├── middleware.ts               # Routing middleware
│   └── navigation.ts               # Next.js navigation APIs that handle the user locale
├── .gitignore                      # Specifies files and directories for Git to ignore
├── tsconfig.json                   # Configuration for TypeScript
├── next.config.mjs                 # Next.js configuration settings
└── tailwind.config.ts              # Tailwind theme configuration
```

## Techonologies used

- Language: Typescript.
- Framework: NextJS 14 App Router.
- CSS utility framework: TailwindCSS.
- State management with Zustand.

And here are few extra tech that I used in the assignment (if there is any libraries that i'm not allowed to use, I could change to another solutaion solving without it):
- [react-hook-form](https://react-hook-form.com/): Hook based, lightweight, isolate re-renders combining with code splitting and generic typescript would create field component with the reusability, type-safety, easier to read and maintain.
- [next-intl](https://next-intl-docs.vercel.app/): Preferred by NextJS itself, hook based, supporting both internationalized routing and non-routing, handles server-side redirects and rewrites based on the detected user locale.

## Storybook

Adding storybook to showcase UI component in this assignment:
- Button
- InputField
- Page

To start storybook with: 

```bash
npm run storybook
```