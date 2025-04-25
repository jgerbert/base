# Typography-First Website Template

[Live Demo](https://stokewell.github.io/base/demo/) · [Use this Template](https://github.com/stokewell/base/generate)

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Responsive](https://img.shields.io/badge/responsive-yes-brightgreen)
![Status](https://img.shields.io/badge/status-template--ready-blueviolet)

A handcrafted, modern website starter built with a strong focus on **typography**, **modular layout**, **visual clarity**, and **performance**.  
No framework bloat — just semantic HTML, custom design tokens, and clean CSS structured for elegance and reuse.

## 👤 Who It's For

This template is ideal for:

- Designers and developers building typographically expressive websites
- Studios and agencies seeking high-end presentation without extra frameworks
- Creators who value performance, clarity, and maintainability
- Anyone tired of overengineered boilerplates

## ✍️ Typography System

This template includes a flexible typography system with an optional starter pairing:

- **Headings** — [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- **Body** — [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

Fonts are easily configurable using CSS variables (`--font-heading`, `--font-body`).

An optional built-in **font pairing preview tool** is included to experiment with alternative combinations before committing changes.

To change fonts permanently, update the `--font-heading` and `--font-body` variables in `tokens.css`.

## 🛠️ Core Design Goals

- **Typography-first** layout with fluid rhythm, optimal line length, and scale
- **Responsive design** from 360px to 1920px+
- **Built-in Light/Dark Mode**, using `prefers-color-scheme` + manual toggle
- **Modular layout utilities**, grid/flex locked to an 8px baseline
- **Minimal, reusable classes** — no utility clutter or third-party dependencies
- **Design tokens** for color, spacing, typography, transitions, and more
- **Accessibility-first (WCAG 2.1 AA)** — keyboard nav, contrast, ARIA
- **Minimal JavaScript** — just enough for interactivity, no framework overhead

## 📂 Folder Structure

```
/typography-first-template/
├── /css/
│   ├── tokens.css         # Design tokens: spacing, colors, typography, z-index, etc.
│   ├── reset.css          # CSS reset (or normalize)
│   ├── base.css           # Core styles: typography, layout scaffolding
│   ├── modules.css        # Reusable utilities: grid, flexbox, components
│   ├── themes.css         # Light/dark theme variables & overrides
│   └── style.css          # Entrypoint file importing all others in order
│
├── /js/
│   ├── theme-toggle.js    # Theme switcher with localStorage
│   └── modal.js           # Minimal modals or accordion behavior
│
├── /demo/
│   └── index.html         # Showcase of all styles, tokens, layout, and components
│
└── README.md              # You're here
```

## ⚙️ Usage Instructions

### 1. Include styles and scripts

In your `<head>`:

```html
<link rel="stylesheet" href="css/style.css">
```

At the end of your `<body>`:

```html
<script src="js/theme-toggle.js"></script>
<script src="js/modal.js"></script>
```

### 2. Add the theme toggle (optional)

```html
<button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
  <span id="theme-icon">🌙</span>
</button>
```

### 3. Explore the demo

Open [`/demo/index.html`](https://jgerbert.github.io/base/demo/) to preview all tokens, layouts, and components in action.

## 🧹 Customization Guide

### Modify Design Tokens

Edit `css/tokens.css` to change:

- Spacing scale
- Color scheme
- Font stack and sizing
- Z-index layers
- Transition timing

### Add Custom Components

1. Define styles in `modules.css`
2. Use variables from `tokens.css` for alignment
3. Match the naming pattern of existing utilities

### Customize Themes

1. Modify or extend `css/themes.css`
2. Add `[data-theme="your-theme-name"]` blocks
3. Control theme via JS or `prefers-color-scheme`

## ♿ Accessibility Features

- Semantic HTML throughout
- Keyboard-friendly navigation
- Focus styles for all interactives
- ARIA attributes where needed
- Respects `prefers-reduced-motion`
- Meets or exceeds WCAG 2.1 AA contrast standards

## 🌐 Browser Support

Tested in all modern evergreen browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🔮 Use as a Template

Want to start your next project with this foundation?

→ [Click here to generate your own copy](https://github.com/stokewell/base/generate)
