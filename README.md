# Doublewit Consultancy Limited — Website

Production-ready marketing site built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (entrance + scroll animations)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint the project

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Homepage composition
│   └── globals.css       # Tailwind base + global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── MissionVision.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Newsletter.tsx
│   ├── MapSection.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── AnimatedGrid.tsx
│       ├── SectionHeading.tsx
│       └── Reveal.tsx
└── lib/
    └── utils.ts
```

## Customizing

- Brand palette lives in `tailwind.config.ts` under `theme.extend.colors`.
- Replace contact placeholders inside `src/components/Contact.tsx` and `src/components/Footer.tsx`.
- Drop a real logo into `/public/logo.svg` and swap the wordmark in `Navbar.tsx`.
# Doublewit.eu
