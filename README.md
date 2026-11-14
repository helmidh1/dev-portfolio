# Developer Portfolio Website

A fast, responsive developer portfolio built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and TypeScript, featuring a "tech-vibe" aesthetic, zero-JS default runtime, and smooth anchor navigation.

## 🚀 Overview

This site is a personal portfolio showcasing professional experience, software projects, and technical skills. Built following Matt Pocock's agentic engineering methodology, it delivers instant First Contentful Paint, perfect Lighthouse accessibility, and dark/light mode theming with JetBrains Mono typography.

> [!NOTE]
> The original Flutter implementation is preserved permanently in the `flutter_00` branch. See [ADR-0001](docs/adr/0001-switch-to-astro.md) for the decision rationale.

## ✨ Key Features

- **Zero-JS Static Performance**: Built on Astro for sub-100ms load times and 100/100 Lighthouse performance.
- **Tech-Centric UI**: JetBrains Mono typography, custom dark-slate and teal palette, and persistent dark/light theme toggle.
- **Responsive Layout**: Fluid single-page design scaling across mobile, tablet, and desktop viewports.
- **Interactive Project Cards**: Hover-scaling cards with live demo links and GitHub repository access.
- **One-Click Contact**: Direct mailto integration and clipboard copy with visual confirmation.
- **Typed Data Layer**: Centralized, type-safe data schema in `src/data/portfolio.ts`.

## 🛠️ Built With

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Language**: TypeScript
- **Deployment**: [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 📂 Project Structure

- `src/components/`: Modular Astro components for `NavBar`, `SectionBlurDivider`, `Footer`, and section views.
- `src/data/`: Centralized `portfolio.ts` single source of truth for resume, projects, and skills.
- `src/layouts/`: Global HTML shell, SEO metadata, and theme persistence scripts.
- `src/pages/`: Single-page entrypoint (`index.astro`).
- `public/assets/`: Static image assets for logos and project previews.
- `docs/adr/`: Architecture Decision Records (`0001-switch-to-astro.md`).

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```

### 3. Run test suite
```bash
npm test
```

### 4. Build for production
```bash
npm run build
```

### 5. Deploy to Firebase Hosting
```bash
firebase deploy --only hosting
```

---

_Built with ❤️ and Antigravity AI_
