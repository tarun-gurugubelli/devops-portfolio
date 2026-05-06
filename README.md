# DevOps Knowledge Board

DevOps Knowledge Board is a static Next.js web application that collects DevOps learning resources in one place. It includes topic-based modules, frequently asked DevOps questions, installation guides, command cheatsheets, and a contact page for reaching the maintainer.

The application is designed as a personal DevOps portfolio and knowledge base by Tarun Gurugubelli.

## Web App Summary

The site helps learners and engineers quickly explore practical DevOps content:

- Browse DevOps modules such as Docker, Kubernetes, Linux, Shell Scripting, CI/CD, Git, AWS, Ansible, Jenkins, Security, Monitoring, and managerial questions.
- Read categorized Q&A content from local JSON data.
- View installation steps for common tools such as Docker, Jenkins, Git, Node.js, PostgreSQL, and Kubernetes.
- Open command cheatsheets for quick reference.
- Contact the maintainer through a mailto-based contact form.

## Tech Stack

- **Framework:** Next.js with App Router
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **Components:** Radix UI primitives and shadcn-style reusable UI components
- **Icons:** Lucide React
- **Forms and validation packages:** React Hook Form, Zod, and Hookform Resolvers
- **Charts and UI utilities:** Recharts, Sonner, Vaul, Embla Carousel, CMDK, React Day Picker
- **Build output:** Static export for GitHub Pages
- **Package manager:** npm

## Main Modules

- **Home:** Landing page with project introduction, engineer profile, and DevOps pipeline animation.
- **Modules:** Topic cards that link users to related DevOps Q&A sections.
- **Questions:** Accordion-based FAQ page powered by `public/data/questionsv2.json`.
- **Installations:** Tool installation cards with OS-specific command steps.
- **Cheatsheets:** Command reference cards loaded from `public/data/cheatsheets.json`.
- **Contact:** Contact form that opens the user's email client with a prefilled message.
- **Reusable Components:** Shared UI components under `components/ui`, plus custom components for mobile navigation, modals, and pipeline animation.

## Prerequisites

Install the following before running the project:

- Node.js 22 or newer
- npm

The GitHub Actions deployment workflow also uses Node.js 22.

## Install Packages

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd devops-portfolio
npm install
```

For clean, reproducible installs in CI or deployment environments, use:

```bash
npm ci
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Next.js, usually:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

This project is configured with `output: "export"` in `next.config.mjs`, so the production build generates a static site in the `out` directory.

## Preview Production Build Locally

After building, preview the static export by serving the generated `out` directory with a static file server:

```bash
npx serve out
```

You can use any equivalent static server if you already have one installed.

## Deployment

This app is deployed as a static Next.js export to GitHub Pages using `.github/workflows/deploy.yml`.

Deployment flow:

1. Push changes to the `main` branch, or manually run the **Deploy to GitHub Pages** workflow from GitHub Actions.
2. GitHub Actions checks out the repository.
3. Node.js 22 is installed.
4. Dependencies are installed with `npm ci`.
5. The app is built with `npm run build`.
6. A `.nojekyll` file is added to the exported `out` folder.
7. The `out` folder is uploaded and deployed to GitHub Pages.

In GitHub, make sure **Settings > Pages > Build and deployment > Source** is set to **GitHub Actions**.

## Custom Domain

The `public/CNAME` file configures GitHub Pages to serve the site at:

```text
devops.tarun.win
```

In the DNS provider for `tarun.win`, add this CNAME record:

```text
devops CNAME tarun-gurugubelli.github.io
```

## Useful Scripts

```bash
npm run dev      # Start the local development server
npm run build    # Build and export the static production site
npm run start    # Start Next.js production server, mainly for non-export setups
npm run lint     # Run linting
npm run export   # Legacy export command; static export is already handled by npm run build
```
