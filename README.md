# Typography-First Website Template

A handcrafted, modern website template designed with a strong focus on typography, modular layout, visual clarity, and performance. Built from the ground up with semantic HTML, logical class-based CSS, and custom design tokens—this template avoids framework bloat while adhering to responsive design and accessibility standards.

## Typography System

This template features a sophisticated typography system using a high-end Google Fonts pairing:

- **Headings:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) - An elegant serif typeface with beautiful contrast and classical proportions
- **Body:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) - A versatile, modern sans-serif with excellent readability and comprehensive multilingual support

This pairing creates a sophisticated, professional aesthetic suitable for design agencies, studios, and creative businesses while maintaining excellent readability and accessibility.

## Core Design Goals

- **Typography-first** philosophy rooted in journalistic standards (optimal line-length, vertical rhythm, fluid scale).
- **Responsive design** from **360px (mobile)** to **1920px+ (desktop)** using fluid containers and adaptive breakpoints.
- **Built-in Light/Dark Mode** with both `prefers-color-scheme` and a manual override toggle.
- **Grid-aligned vertical and horizontal layout**, locked to a base spacing unit (8px baseline).
- **Logical, minimal class structure**—not class-less, but sensibly classed and reusable.
- **No framework dependencies**—CSS is fully custom and cleanly organized.
- **Robust design token system** used throughout for consistency and easy customization.
- **Accessibility-first (a11y)** with WCAG 2.1 AA compliance.
- **Minimal JavaScript**, limited to essential interactivity only (theme switching, modals, etc.).

## Project Folder Structure

```
/typography-first-template/
├── /css/
│   ├── tokens.css         # Design tokens (spacing, colors, fonts, z-index, transitions, etc.)
│   ├── reset.css          # CSS reset
│   ├── base.css           # Typography, headings, body styles, media, etc.
│   ├── modules.css        # Layout utilities (grid, flex) and all component classes
│   ├── themes.css         # Light/dark mode variables and overrides
│   └── style.css          # Main entry that imports all CSS files in order
│
├── /js/
│   ├── theme-toggle.js    # Light/dark mode toggle with localStorage support
│   └── modal.js           # Minimal JS for modal/accordion functionality
│
├── /demo/
│   └── index.html         # A complete showcase of all styles, tokens, layouts, and components
│
└── README.md              # Framework overview, usage instructions, and customization guide
```

## Usage Instructions

1. Include the CSS file in your HTML:
   ```html
   <link rel="stylesheet" href="css/style.css">
   ```

2. Include the JavaScript files at the end of your HTML document:
   ```html
   <script src="js/theme-toggle.js"></script>
   <script src="js/modal.js"></script>
   ```

3. Add the theme toggle button to your HTML:
   ```html
   <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
     <span id="theme-icon">🌙</span>
   </button>
   ```

4. View the demo page at `/demo/index.html` for examples of all components and styles.

## Customization

### Modifying Design Tokens

To customize the appearance of your site, edit the variables in `tokens.css`. This includes:

- Spacing scale
- Typography (fonts, sizes, line heights)
- Colors
- Z-index values
- Transitions

### Adding Custom Components

1. Define your component styles in `modules.css`
2. Use the existing design tokens for consistency
3. Follow the established class naming patterns

### Theme Customization

To add or modify themes:

1. Edit the variables in `themes.css`
2. Add new theme variations with the `[data-theme="your-theme-name"]` selector

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Focus management for interactive elements
- ARIA attributes where appropriate
- Color contrast meeting WCAG 2.1 AA standards
- Support for prefers-reduced-motion

## Browser Support

This template supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is available under the MIT License.