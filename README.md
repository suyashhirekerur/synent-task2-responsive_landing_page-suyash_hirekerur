# Aero AI Landing Page

A premium, fully responsive single-page landing page designed for **Aero AI** — a next-generation ambient development workspace and AI productivity companion. 

This project features a high-fidelity modern dark aesthetic using dark royal blue themes, glassmorphism, responsive grids, and highly optimized layouts.

## Key Features
- **Hero Mockup**: A simulated visual IDE window featuring sidebar nav list, code editor tabs with custom syntax highlighting, active agent status indicators, and a floating AI suggestion inspector panel.
- **Pulsing Live Status Beacon**: An active live badge with a continuous halo animation (`pulse-live`) highlighting version status.
- **Features Grid**: A responsive grid containing custom-designed SVG icons showcasing the core features (Ambient Intellect, Instant Sync, Visual Debugging, and Secure Vault).
- **Interactive Design Canvas**: A workspace showcase with toggle buttons that let the user switch between a visual visual preview layout ("Preview") and its compiled React/Tailwind source code representation ("Code").
- **Header & Mobile Navigation**: A sticky header containing a slide-down mobile menu drawer triggered by a CSS-animated hamburger toggle.
- **Multi-column Footer**: A footer column layout with newsletter subscription form validation, social links, and privacy policy sections.

## Technology Stack
- **Structure**: Semantic HTML5 markup
- **Styling**: Vanilla CSS3 (Grid, Flexbox, custom design system variables, keyframes, transitions)
- **Logic**: Native Vanilla JavaScript (DOM manipulation, mobile menu toggle, live state switches, and email validation)
- **Typography**: Outfit (display) & Inter (body) Google Fonts

## Performance & Mobile Optimizations
- **GPU Hardware Layer Acceleration**: The fixed header uses `transform: translate3d(0,0,0)` and `will-change: transform` to force hardware layers, preventing flickering or lagging scroll behavior on mobile viewports.
- **Reduced Paint Overhead**: Large blurred background ambient glows are disabled on mobile viewports (widths under `767px`) to ensure touch scrolling runs smoothly without performance drops.
- **Stable Scroll Coordinates**: Fixed layout heights are maintained during scroll state updates, preventing layout jumps or coordinate shifts during momentum touch scrolling (specifically tested on 412x915 viewports).

## How to Run Locally
1. Clone or navigate to the workspace directory.
2. Launch a local web server bound to IPv4:
   ```bash
   python -m http.server 3000 --bind 127.0.0.1
   ```
3. Open your web browser and navigate to:
   ```
   http://127.0.0.1:3000
   ```