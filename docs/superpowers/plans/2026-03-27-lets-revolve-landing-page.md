# Lets Revolve Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page landing page for Lets Revolve using React + Vite + Tailwind CSS v4, following the brandbook in `docs/brandbook.html`.

**Architecture:** Five React components (Navbar, Hero, About, Services, Footer) composed in a single App. Tailwind handles all styling — no additional CSS framework. Navbar has a scroll-based transparency effect managed via a `useEffect` scroll listener.

**Tech Stack:** Vite, React 19, TypeScript, Tailwind CSS v4, Google Fonts (DM Sans)

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`, `.gitignore`

- [ ] **Step 1: Scaffold Vite + React + TypeScript project**

Run:
```bash
npm create vite@latest . -- --template react-ts
```

When prompted, confirm overwriting the existing directory (it only contains `docs/`).

- [ ] **Step 2: Install Tailwind CSS v4**

Run:
```bash
npm install
npm install tailwindcss @tailwindcss/vite
```

- [ ] **Step 3: Configure Vite with Tailwind plugin**

Replace `vite.config.ts` with:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

- [ ] **Step 4: Set up Tailwind CSS entry with brand tokens**

Replace `src/index.css` with:

```css
@import "tailwindcss";

@theme {
  --font-sans: "DM Sans", sans-serif;
  --color-primary: #0EA5E9;
  --color-primary-dark: #0284C7;
  --color-primary-light: #38BDF8;
  --color-slate-dark: #0F172A;
  --color-cloud: #F8FAFC;
  --color-heading: #0F172A;
  --color-body: #334155;
  --color-muted: #64748B;
}
```

- [ ] **Step 5: Add DM Sans font to index.html**

Replace the `<head>` section of `index.html` with:

```html
<!doctype html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
    <title>Lets Revolve</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Set up minimal App component**

Replace `src/App.tsx` with:

```tsx
export default function App() {
  return (
    <div className="font-sans text-body">
      <h1 className="text-4xl font-bold text-heading text-center py-20">
        Lets Revolve
      </h1>
    </div>
  );
}
```

- [ ] **Step 7: Set up React entry point**

Replace `src/main.tsx` with:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 8: Verify dev server runs**

Run:
```bash
npm run dev
```

Expected: Browser shows "Lets Revolve" centered in DM Sans. Tailwind classes work (font, color, spacing all apply).

- [ ] **Step 9: Clean up scaffolded files and add .superpowers to .gitignore**

Delete files that came with the Vite template that we don't need:

```bash
rm -f src/App.css src/assets/react.svg public/vite.svg
```

Add `.superpowers/` to `.gitignore`:

```bash
echo ".superpowers/" >> .gitignore
```

- [ ] **Step 10: Commit**

```bash
git add .
git commit -m "feat: scaffold Vite + React + Tailwind with brand tokens"
```

---

## Task 2: Hero Component

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Hero component**

Create `src/components/Hero.tsx`:

```tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-linear-135 from-slate-dark via-primary-dark to-primary">
      <p className="text-primary-light text-xs font-medium tracking-[3px] uppercase mb-8">
        Lets Revolve
      </p>
      <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] max-w-3xl mb-6">
        Met passie voor ons vak
      </h1>
      <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
        Wij streven ernaar om iedere ondernemer binnen ons netwerk te
        ondersteunen met een persoonlijke, passende en pragmatische aanpak.
      </p>
      <div className="absolute bottom-10 animate-pulse">
        <svg
          className="w-6 h-6 text-white/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Hero to App**

Replace `src/App.tsx` with:

```tsx
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="font-sans text-body">
      <Hero />
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev` (if not already running).

Expected: Full-screen gradient hero with "LETS REVOLVE" label, large heading, subtitle, and pulsing down arrow at the bottom.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/App.tsx
git commit -m "feat: add Hero section with gradient and scroll indicator"
```

---

## Task 3: About Component

**Files:**
- Create: `src/components/About.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create About component**

Create `src/components/About.tsx`:

```tsx
export default function About() {
  return (
    <section id="over-ons" className="bg-white py-20 md:py-28 lg:py-32 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-primary text-xs font-medium tracking-[3px] uppercase mb-3">
          Over ons
        </p>
        <h2 className="text-heading text-3xl md:text-4xl font-semibold leading-[1.2] mb-4">
          Wie zijn wij?
        </h2>
        <div className="w-12 h-[3px] bg-primary rounded-full mx-auto mb-10" />
        <p className="text-body text-base md:text-lg leading-[1.7] max-w-[700px] mx-auto">
          Onze waarden vormen de basis van onze identiteit en de manier waarop
          wij werken. Wat voor onze klanten belangrijk is, staat bij Lets Revolve
          altijd centraal. Wij werken vanuit de belangen en principes van onze
          klanten. Onze adviseurs nemen eigenaarschap en staan persoonlijk achter
          hun werk. Zo zorgen wij ervoor dat jij als ondernemer altijd samenwerkt
          met een adviseur die écht bij jou en je onderneming past.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to App**

Update `src/App.tsx`:

```tsx
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  return (
    <div className="font-sans text-body">
      <Hero />
      <About />
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Scrolling past the hero reveals the About section — centered label, heading, blue divider, body text.

- [ ] **Step 4: Commit**

```bash
git add src/components/About.tsx src/App.tsx
git commit -m "feat: add About section with brand copy"
```

---

## Task 4: Services Component

**Files:**
- Create: `src/components/Services.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Services component**

Create `src/components/Services.tsx`:

```tsx
const services = [
  { icon: "📊", name: "Boekhouding en administratie" },
  { icon: "💰", name: "Salarisadministratie" },
  { icon: "📈", name: "Financiële administratie" },
  { icon: "📄", name: "Facturatie en debiteurenbeheer" },
];

export default function Services() {
  return (
    <section
      id="dienstverlening"
      className="bg-cloud py-20 md:py-28 lg:py-32 px-6"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-primary text-xs font-medium tracking-[3px] uppercase mb-3">
          Wat wij doen
        </p>
        <h2 className="text-heading text-3xl md:text-4xl font-semibold leading-[1.2] mb-4">
          Onze dienstverlening
        </h2>
        <div className="w-12 h-[3px] bg-primary rounded-full mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[800px] mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,165,233,0.12)]"
            >
              <div className="w-12 h-12 bg-linear-135 from-sky-100 to-sky-200 rounded-xl mx-auto mb-4 flex items-center justify-center text-xl">
                {service.icon}
              </div>
              <h3 className="text-heading text-base font-semibold">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Services to App**

Update `src/App.tsx`:

```tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="font-sans text-body">
      <Hero />
      <About />
      <Services />
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Services section on light grey background, 2×2 grid of cards with icons. Cards lift on hover with blue shadow.

- [ ] **Step 4: Commit**

```bash
git add src/components/Services.tsx src/App.tsx
git commit -m "feat: add Services section with 2x2 card grid"
```

---

## Task 5: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Footer component**

Create `src/components/Footer.tsx`:

```tsx
export default function Footer() {
  return (
    <footer className="bg-slate-dark py-16 px-6 text-center">
      <div className="text-2xl font-bold mb-2">
        <span className="text-primary-light">Lets</span>{" "}
        <span className="text-white">Revolve</span>
      </div>
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Lets Revolve
      </p>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer to App**

Update `src/App.tsx`:

```tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-body">
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Dark footer at the bottom with two-tone wordmark and copyright year.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx src/App.tsx
git commit -m "feat: add Footer with inverted wordmark"
```

---

## Task 6: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Navbar component with scroll effect**

Create `src/components/Navbar.tsx`:

```tsx
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-bold"
        >
          <span className={scrolled ? "text-primary" : "text-primary-light"}>
            Lets
          </span>{" "}
          <span className={scrolled ? "text-heading" : "text-white"}>
            Revolve
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollTo("over-ons")}
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? "text-muted hover:text-heading"
                : "text-white/70 hover:text-white"
            }`}
          >
            Wie zijn wij
          </button>
          <button
            onClick={() => scrollTo("dienstverlening")}
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? "text-muted hover:text-heading"
                : "text-white/70 hover:text-white"
            }`}
          >
            Dienstverlening
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${scrolled ? "text-heading" : "text-white"}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          <button
            onClick={() => scrollTo("over-ons")}
            className="text-sm font-medium text-muted hover:text-heading text-left"
          >
            Wie zijn wij
          </button>
          <button
            onClick={() => scrollTo("dienstverlening")}
            className="text-sm font-medium text-muted hover:text-heading text-left"
          >
            Dienstverlening
          </button>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Add Navbar to App**

Update `src/App.tsx`:

```tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-body">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected:
- On the hero: navbar is transparent with white text
- Scrolling past ~50px: navbar gets white background + shadow, text turns dark
- Clicking "Wie zijn wij" scrolls smoothly to the About section
- Clicking "Dienstverlening" scrolls smoothly to the Services section
- On mobile viewport: hamburger icon toggles a dropdown menu

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/App.tsx
git commit -m "feat: add Navbar with scroll effect and mobile menu"
```

---

## Task 7: Add smooth scroll CSS and final polish

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add smooth scroll behavior to CSS**

Add to the top of `src/index.css` (after the `@import`):

```css
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

@theme {
  --font-sans: "DM Sans", sans-serif;
  --color-primary: #0EA5E9;
  --color-primary-dark: #0284C7;
  --color-primary-light: #38BDF8;
  --color-slate-dark: #0F172A;
  --color-cloud: #F8FAFC;
  --color-heading: #0F172A;
  --color-body: #334155;
  --color-muted: #64748B;
}
```

- [ ] **Step 2: Verify full page flow**

Run `npm run dev` and check:
- Page loads with hero at full viewport height
- Navbar transitions from transparent to white on scroll
- Smooth scrolling works for all nav links
- About section shows centered content
- Services shows 2×2 grid (1 column on mobile)
- Footer renders at the bottom
- Mobile menu opens/closes correctly

- [ ] **Step 3: Build for production to verify no errors**

Run:
```bash
npm run build
```

Expected: Build completes with no errors. Output in `dist/`.

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "feat: add smooth scroll and finalize landing page"
```
