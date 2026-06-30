# Guru Saran Kannan — Portfolio

Personal portfolio for [Guru Saran Kannan](https://gurusarank.site): AI research projects, software engineering work, and interactive 3D presentation.

Live site: [gurusarank.site](https://gurusarank.site)

## Features

- **3D animations**: Interactive Spline keyboard with skills as keycaps
- **Motion design**: GSAP and Framer Motion for scroll, hover, and reveal effects
- **Space theme**: Particle background with dark-mode-first layout
- **Responsive**: Works across desktop and mobile
- **Content sections**: Projects, articles, quotes, timeline, and blog

## Tech stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn, Aceternity UI
- **Animations**: GSAP, Framer Motion, Spline Runtime
- **Other**: Resend, Socket.io, Zod, MDX

## Getting started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BigSmoKe07/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Copy environment variables (see [ENV_SETUP.md](ENV_SETUP.md)):

   ```bash
   cp .env.example .env
   ```

4. Run the development server:

   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Deployment

This site is deployed on Vercel. To deploy your own copy:

1. Push the repo to GitHub
2. Import the repository in Vercel
3. Add the required environment variables from `ENV_SETUP.md`
