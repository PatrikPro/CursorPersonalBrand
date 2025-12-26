# Premium Personal Brand Landing Page

A high-end landing page for a ghostwriter built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern Editorial Design**: Uses Cormorant Garamond for headings and Inter for body text
- **Dark Mode Aesthetic**: Premium dark theme with gold/champagne accents (#D4AF37)
- **Glassmorphism Navigation**: Blurred glass effect navigation bar
- **Asymmetric Hero Layout**: Bold headline with social proof ticker
- **Bento Grid Results**: Modular grid showcasing key metrics
- **Portfolio Section**: Featured work with hover lift animations
- **Sticky Scroll Timeline**: Vertical timeline for the writing process
- **Contact Form**: Email capture with glow effects on focus
- **Scroll Animations**: Fade-in animations on all sections

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All text content is stored in `constants/content.js`. Edit this file to update:
- Navigation links
- Hero headline and CTA
- Results statistics
- Portfolio items
- Process steps
- Contact form labels

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Google Fonts** (Cormorant Garamond, Inter)

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Glassmorphism nav
│   ├── Hero.tsx        # Hero section
│   ├── BentoGrid.tsx   # Results section
│   ├── Portfolio.tsx   # Featured work
│   ├── Process.tsx     # Timeline
│   └── Contact.tsx     # Contact form
└── constants/
    └── content.js      # All text content
```

## Build

```bash
npm run build
```

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

