# Portfolio Site: Complete Documentation
*Combined Technical Plan + Copy-Decks for Martin Le Roux*

---

## 📌 Table of Contents
1. [Site Overview](#1-site-overview)
2. [Page Structure](#2-page-structure)
3. [Component Library](#3-component-library)
4. [Section Specifications](#4-section-specifications)
5. [Interaction Behavior](#5-interaction-behavior)
6. [Responsive Breakpoints](#6-responsive-breakpoints)
7. [Coding Standards](#7-coding-standards)
8. [CSS Design System](#8-css-design-system)
9. [Accessibility](#9-accessibility)
10. [Performance](#10-performance)
11. [SEO & Metadata](#11-seo--metadata)
12. [File Structure](#12-file-structure)
13. [Copy Content](#13-copy-content)
14. [Agent Coding Instructions](#14-agent-coding-instructions)
15. [Open Questions](#15-open-questions)
16. [Next Steps](#16-next-steps)

---

---

## 1. Site Overview

**Purpose**: Personal portfolio for Martin Le Roux, Senior Product Designer.
**Primary Goals**:
- Showcase skills, processes, and career history.
- Mobile-first, responsive design.
- Minimalist, lo-fi aesthetic with clear hierarchy.
- Full link visibility for navigation.

**Target Audience**:
- Potential employers (startups, agencies).
- Peers in UX/UI and AI design.
- Recruiters for Senior Product Designer roles.

**Compliance**:
- UK Gambling Commission (UKGC) standards (if applicable).
- WCAG 2.1 AA for accessibility.

---

## 2. Page Structure

### 2.1 Global Elements

| Element          | Description                                                                                     | Interaction Behavior                          | Mobile | Desktop |
|------------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------|--------|---------|
| Header           | Fixed at top: Logo (left), "Get in Touch" and "Share" actions (right, mobile only).               | Logo: Links to home. Actions: Links to be defined later. | ✅     | ✅      |
| Footer           | Fixed at bottom: Section anchors (left), "Get in Touch" and "Share" actions (right, desktop only). | Anchors: **Smooth scroll** to section. Actions: Links to be defined later. | ✅     | ✅      |
| Content Section  | Contains the content for the specific section being displayed.                                | Section-dependent.                            | ✅     | ✅      |

### 2.2 Page Layouts

#### Homepage (`/`)
**Sections**:
1. Hero (Implicit: Large name/title + tagline) - About Me.
2. Skills - Contains content section and two lists.
3. Processes - Contains two cards: **Process 01 (Discover + Define)** and **Process 02 (Design + Deliver)**.
4. Career History - Contains content section with list of history.

**Mobile**: Single-column scroll.
**Desktop**: 2-column grid (left: sticky nav, right: scrollable content).

---

## 3. Component Library

### 3.1 Reusable Components

#### Section Container
- **Purpose**: Container for all content sections (About Me, Skills, etc.).
- **Styles**:
  - Background: White.
  - Padding: 24px (mobile), 32px (desktop).
  - Border Radius: 8px.
  - Box Shadow: 0 4px 12px rgba(0,0,0,0.1).
- **Behavior**:
  - Hover: None (static).
  - Click: None (unless interactive, e.g., Process cards).

#### Section Heading
- **Styles**:
  - Font: H2 (24px mobile / 32px desktop).
  - Color: #1E1E1E.
  - Margin: 0 0 16px 0.
- **Behavior**: Static.

#### Skill Item
- **Structure**:
  - Icon (left) + Label (right).
  - Icon size: 20px.
  - Label: 16px, #333.
- **Behavior**:
  - Hover: Underline label (desktop only).

#### Process Card
- **Structure**:
  - Image (top) + Heading (H3) + Subheading (H4) + Description (body text).
  - Image: 100% width, 16:9 aspect ratio.
- **Behavior**:
  - Click: Navigate to `/process/[id]`.

#### Career History Item
- **Structure**:
  - Title (H4) + Role (subtitle) + Year (right-aligned).
  - Divider: 1px solid #EEEEEE between items.
- **Behavior**: Static.

#### Navigation
- **Header (Mobile)**:
  - Logo (left) + "Get in Touch" and "Share" actions (right).
- **Header (Desktop)**:
  - Logo (left).
- **Footer (Mobile)**:
  - Horizontal list of section anchors (e.g., About Me, Skills, Processes, Career History).
- **Footer (Desktop)**:
  - Section anchors (left) + "Get in Touch" and "Share" actions (right).

---

### 3.2 Unique Components

#### Hero Section
- **Content**:
  - Name: "Hi there, I’m Martin." (H1, 48px mobile / 64px desktop).
  - Subheadline: "UX, UI, Product Design, Consultant" (18px, #666).
  - Key Points: Full paragraph (16px, #333).
  - CTA: `[View My Work](#skills)` (button or link).
- **Behavior**: Static.

---

## 4. Section Specifications

### 4.1 Hero/About Me
- **Mobile**:
  - Headline (top) + Subheadline + Key Points + CTA + Image (centered or left-aligned).
  - Text: Left-aligned, 16px line height.
- **Desktop**:
  - Image (left, 30% width) + Text (right, 70% width).
- **Links**: CTA links to `#skills`.

### 4.2 Skills
- **Layout**:
  - Mobile: 2-column grid (icons + labels).
  - Desktop: 3-column grid.
- **Content**:
  - **Core Skills**: UX/UI, IA, Wireframing, Prototyping, Mobile-First Design, User Testing, Research, Documentation.
  - **Specialization**: AI UX, Agentic Prompts, Heuristics, Gambling Industry Compliance (UKGC).
  - **Tools**: Figma, Miro, HTML/CSS.
  - **Soft Skills**: Stakeholder Management, Cross-Functional Collaboration, Workshop Facilitation.
  - **Industries**: Gambling, Fintech, SAAS, EdTech, Internal Digital Platforms.

### 4.3 Processes
- **Layout**:
  - Mobile: Stacked cards (full width).
  - Desktop: 2-column grid (Process 01 left, Process 02 right).

#### Process 01: Discover + Define
- **Heading**: `1. Discover + Define`
- **Subheading**: `Uncovering User Needs and Business Goals, Translating Insights into Actionable Strategies`
- **Key Points**:
  - Stakeholder Interviews
  - User Research
  - Competitor Analysis
  - Data-Driven Insights
  - Persona Creation
  - User Journeys
  - Problem Definition
  - Strategic Decision-Making

#### Process 02: Design + Deliver
- **Heading**: `2. Design + Deliver`
- **Subheading**: `Crafting Intuitive, Compliant Solutions, Ensuring Seamless Handover and Implementation`
- **Key Points**:
  - Lo-Fi Wireframing
  - Prototyping
  - Usability Testing
  - Rapid Iteration
  - Gamified UX
  - Developer Collaboration
  - Design System Alignment
  - QA
  - User Testing
  - Documentation

### 4.4 Career History
- **Layout**:
  - Mobile: Stacked items.
  - Desktop: Table (Year | Title | Role | Description).
- **Content**:
  - **Current Role (Dec 2024–Present)**: Senior Product Designer at Rank Interactive (Grosvenor Casino).
  - **Kepler + Co (Feb 2022–July 2024)**: UX/UI for a global skills assessment and learning platform.
  - **One Point Four Consulting (March 2017–March 2022)**: UX/UI for Ib’umdlali, WesBank, BankservAfrica.

---

## 5. Interaction Behavior

### 5.1 Navigation
- **Header (Mobile)**:
  - Logo: Links to home.
  - "Get in Touch" and "Share": **Links to be defined later**.
- **Header (Desktop)**:
  - Logo: Links to home.
- **Footer (Mobile)**:
  - Section anchors: **Smooth scroll** to section.
- **Footer (Desktop)**:
  - Section anchors: **Smooth scroll** to section.
  - "Get in Touch" and "Share": **Links to be defined later**.

### 5.2 Process Cards
- **Hover (Desktop)**:
  - Shadow: 0 8px 24px rgba(0,0,0,0.15).
  - Cursor: Pointer.
- **Click**: Navigate to `/process/[id]` with smooth scroll to top.

### 5.3 Links
- **External**: Open in new tab (e.g., "Get in Touch", "Share").
- **Internal**: **Smooth scroll** to section (e.g., footer anchors).

### 5.4 Scrolling
- **Mobile**: Native scroll.
- **Desktop**:
  - Left column (nav): Sticky.
  - Right column (content): Scrollable.

---

## 6. Responsive Breakpoints

| Breakpoint | Width  | Layout Changes                                                                                     |
|------------|--------|------------------------------------------------------------------------------------------------------|
| Mobile     | <768px | Single-column, stacked sections, header with logo + actions, footer with section anchors.          |
| Tablet     | 768px  | 2-column grid for Skills/Process, sticky nav.                                                      |
| Desktop    | ≥1024px| Full 2-column layout (left: sticky nav, right: content), footer with anchors + actions.          |

---

## 7. Coding Standards

### 7.1 HTML
- **Semantic Markup**: Use `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`.
- **Accessibility**:
  - Include `alt` text for images.
  - Use `aria-label` for interactive elements (e.g., logo, action buttons).
  - Ensure logical tab order.
- **Meta Tags**:
  - Mobile-first viewport: `<meta name="viewport" content="width=device-width, initial-scale=1">`.
  - Charset: `<meta charset="UTF-8">`.

### 7.2 CSS
- **Methodology**: BEM (Block, Element, Modifier) for class naming.
- **Structure**:
  - Modular: Separate files for base, components, layout, utilities.
  - Variables: Use CSS custom properties for colors, spacing, and typography.
- **Best Practices**:
  - Avoid `!important`.
  - Use shorthand properties (e.g., `margin: 0 16px;`).
  - Minimize use of IDs for styling.

### 7.3 JavaScript
- **Vanilla JS**: No frameworks or libraries.
- **Event Listeners**: Use `addEventListener` for interactions (e.g., smooth scroll fallback).
- **Performance**:
  - Debounce scroll/resize events.
  - Avoid inline scripts; use external files.

### 7.4 File Naming
- **HTML**: `index.html`, `process/01.html`, `process/02.html`.
- **CSS**: `style.css`, `components.css`, `utilities.css`.
- **JS**: `script.js`, `navigation.js`.
- **Images**: `hero.webp`, `avatar.webp`, `process-01.webp`, `process-02.webp`.

---

## 8. CSS Design System

### 8.1 CSS Variables
```css
:root {
  /* Colors */
  --color-primary: #1E1E1E;
  --color-secondary: #0066CC;
  --color-background: #FFFFFF;
  --color-text: #1E1E1E;
  --color-text-secondary: #666666;
  --color-text-light: #555555;
  --color-border: #EEEEEE;
  --color-white: #FFFFFF;
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  
  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;
  --font-size-xxl: 32px;
  --font-size-xxxl: 48px;
  --font-size-xxxxl: 64px;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --line-height-base: 1.5;
  --line-height-heading: 1.2;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);
  
  /* Border Radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-circle: 50%;
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
}
```

### 8.2 Utility Classes
```css
/* Spacing */
.m-0 { margin: 0; }
.mt-4 { margin-top: var(--spacing-sm); }
.mb-8 { margin-bottom: var(--spacing-md); }
.p-6 { padding: var(--spacing-md); }
.py-4 { padding-top: var(--spacing-sm); padding-bottom: var(--spacing-sm); }

/* Typography */
.text-center { text-align: center; }
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.font-bold { font-weight: var(--font-weight-bold); }
.font-lg { font-size: var(--font-size-lg); }

/* Layout */
.flex { display: flex; }
.grid { display: grid; }
.justify-between { justify-content: space-between; }
.items-center { align-items: center; }
.gap-4 { gap: var(--spacing-sm); }

/* Visibility */
.hidden { display: none; }
.block { display: block; }

/* Borders */
.border { border: 1px solid var(--color-border); }
.border-radius-md { border-radius: var(--border-radius-md); }
```

### 8.3 Component Styles

#### Buttons
```css
.btn {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  text-align: center;
  text-decoration: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn--primary:hover {
  background-color: var(--color-secondary);
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
}

.btn--secondary:hover {
  background-color: rgba(0, 102, 204, 0.1);
}
```

#### Cards
```css
.card {
  background-color: var(--color-white);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
```

#### Header
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-background);
  z-index: 1000;
}

.header__logo {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  text-decoration: none;
}

.header__actions {
  display: flex;
  gap: var(--spacing-sm);
}

@media (min-width: 1024px) {
  .header__actions {
    display: none; /* Actions move to footer on desktop */
  }
}
```

#### Footer
```css
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-background);
  z-index: 1000;
}

.footer__anchors {
  display: flex;
  gap: var(--spacing-md);
}

.footer__actions {
  display: none; /* Hidden on mobile */
}

@media (min-width: 1024px) {
  .footer__actions {
    display: flex;
    gap: var(--spacing-sm);
  }
}
```

#### Section Headings
```css
.section-heading {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-heading);
}

@media (min-width: 1024px) {
  .section-heading {
    font-size: var(--font-size-xxl);
  }
}
```

### 8.4 Responsive Utilities
```css
/* Mobile-first breakpoints */
@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:flex { display: flex; }
  .md\:hidden { display: none; }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:sticky { position: sticky; top: 0; }
  .lg\:w-1/3 { width: 33.333%; }
  .lg\:w-2/3 { width: 66.666%; }
}
```

### 8.5 Animation Classes
```css
.animate-slide-in {
  animation: slideIn 0.3s ease-in-out;
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### 8.6 Accessibility Classes
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.focus-visible:focus {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
}
```

---

## 9. Accessibility
- **Color Contrast**:
  - Text: #1E1E1E on white (AAA).
  - Links: #0066CC on white (AAA).
- **Touch Targets**:
  - Minimum 48x48px (buttons, links).
- **Keyboard Navigation**:
  - Tab order: Logical (header → main content → footer).
  - Focus: Visible outline (2px solid #0066CC).
- **ARIA Labels**:
  - Add for interactive elements (e.g., `aria-label="Get in Touch"`).

---

## 10. Performance
- **Images**:
  - Format: WebP (fallback to PNG).
  - Sizes: `srcset` for responsive images (e.g., 400w, 800w, 1200w).
  - Lazy loading: `loading="lazy"` for offscreen images.
- **Fonts**:
  - System stack: `-apple-system, BlinkMacSystemFont, sans-serif`.
  - Fallback: Arial, Helvetica.

---

## 11. SEO & Metadata
- **Title**: "Martin Le Roux | Senior Product Designer"
- **Description**: "Portfolio of Martin Le Roux, Senior Product Designer specializing in UX/UI and AI heuristics."
- **Open Graph**:
  - Image: Avatar or hero screenshot.
  - Type: `website`.

---

## 12. File Structure (Suggested)
```
portfolio/
├── index.html
├── process/
│   ├── 01.html  /* Discover + Define */
│   └── 02.html  /* Design + Deliver */
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   └── layout.css
│   ├── js/
│   │   ├── script.js
│   │   └── navigation.js
│   ├── images/
│   │   ├── hero.webp
│   │   ├── avatar.webp
│   │   ├── process-01.webp  /* Discover + Define */
│   │   └── process-02.webp  /* Design + Deliver */
│   └── icons/
│       └── lucide/
├── components/
│   ├── header.html
│   ├── footer.html
│   ├── card.html
│   └── skill-item.html
└── README.md
```

---

## 13. Copy Content

### 13.1 CSV Format for Agent Implementation
```csv
"Section","Headline","Subheadline","Key Points","Call-to-Action"
"Hero/About Me","Hi there, I’m Martin.","UX, UI, Product Design, Consultant","I’m a digital creative and product designer with a Bachelor in Visual Communication and 10 years of experience creating digital experiences. I’ve been part of award-winning projects and worked with cross-functional teams in B2B and B2C environments for Websites, Apps, Internal Digital Platforms, and SAAS products. My design philosophy: Blend informed choices and smart design, bringing together business needs and user joy, while hitting those bottom-line goals.","[View My Work](#skills)"
"My Skills","What I Bring to the Table","","**Core Skills:** UX/UI, IA, Wireframing, Prototyping, Mobile-First Design, User Testing, Research, Documentation. **Specialization:** AI UX, Agentic Prompts, Heuristics, Gambling Industry Compliance (UKGC). **Tools:** Figma, Miro, HTML/CSS. **Soft Skills:** Stakeholder Management, Cross-Functional Collaboration, Workshop Facilitation. **Industries:** Gambling, Fintech, SAAS, EdTech, Internal Digital Platforms.",""
"Processes","1. Discover + Define","Uncovering User Needs and Business Goals, Translating Insights into Actionable Strategies","Stakeholder Interviews, User Research, Competitor Analysis, Data-Driven Insights, Persona Creation, User Journeys, Problem Definition, Strategic Decision-Making.",""
"Processes","2. Design + Deliver","Crafting Intuitive, Compliant Solutions, Ensuring Seamless Handover and Implementation","Lo-Fi Wireframing, Prototyping, Usability Testing, Rapid Iteration, Gamified UX, Developer Collaboration, Design System Alignment, QA, User Testing, Documentation.",""
"Career History","My Journey","","**Current Role (Dec 2024–Present):** Senior Product Designer at Rank Interactive (Grosvenor Casino). Responsibilities: UX/UI, Prototyping, Research, User Testing, Documentation. Achievements: Championed user-centric design, aligned strategic goals with customer satisfaction, led workshops, streamlined development.",""
"Career History","","","**Kepler + Co (Feb 2022–July 2024):** UX/UI for a global skills assessment and learning platform. Developed UI/UX patterns for a robust design system, made data-driven decisions, and maintained documentation for user testing and research.",""
"Career History","","","**One Point Four Consulting (March 2017–March 2022):** UX/UI for Ib’umdlali (gamified financial literacy app), WesBank (marketing website & internal systems), BankservAfrica (brand identity, marketing site, internal platforms). Responsibilities: Cross-functional collaboration, user testing, animation, illustration. **Awards:** Ib’umdlali - Gold: UX, Interface & Navigation; Bronze: Apps & Innovative Solutions; Finalist: MTN App of the Year.",""
"Global Elements","Header (Mobile): Logo","Martin Le Roux","Links to home (`/`)","H1, 24px mobile / 32px desktop"
"Global Elements","Header (Mobile): Action 1","Get in Touch","Link to be defined later","Button or text link"
"Global Elements","Header (Mobile): Action 2","Share","Link to be defined later","Button or text link"
"Global Elements","Footer (Mobile/Desktop): Anchor 1","About Me","Smooth scroll to `#about`",""
"Global Elements","Footer (Mobile/Desktop): Anchor 2","Skills","Smooth scroll to `#skills`",""
"Global Elements","Footer (Mobile/Desktop): Anchor 3","Processes","Smooth scroll to `#processes`",""
"Global Elements","Footer (Mobile/Desktop): Anchor 4","Career History","Smooth scroll to `#career-history`",""
"Global Elements","Footer (Desktop): Action 1","Get in Touch","Link to be defined later","Button or text link"
"Global Elements","Footer (Desktop): Action 2","Share","Link to be defined later","Button or text link"
```

### 13.2 Visual Layouts for Copy
- **Hero/About Me**:
  - **Mobile**: Stacked (headline, subheadline, key points, CTA, image).
  - **Desktop**: Image (left, 30%) + Text (right, 70%).

- **Skills**:
  - **Mobile**: 2-column grid (icons + labels).
  - **Desktop**: 3-column grid.

- **Processes**:
  - **Mobile**: Stacked cards (Process 01, Process 02).
  - **Desktop**: 2-column grid (Process 01 left, Process 02 right).

- **Career History**:
  - **Mobile**: Stacked list with dividers.
  - **Desktop**: Table (Year | Title | Role | Description).

- **Global Elements**:
  - **Header (Mobile)**: Logo + "Get in Touch" + "Share".
  - **Header (Desktop)**: Logo only.
  - **Footer (Mobile)**: Section anchors only.
  - **Footer (Desktop)**: Section anchors + "Get in Touch" + "Share".

---

## 14. Agent Coding Instructions

### 14.1 Input Requirements
Provide the agent with:
1. This document (single file).
2. **Content**:
   - All copy content is included in [Section 13](#13-copy-content).
   - Images (optimized, named per `File Structure`).
3. **Design Assets**:
   - Color palette (hex codes in [Section 8.1](#81-css-variables)).
   - Font files (if custom).
   - Icons (SVG).

### 14.2 Output Expectations
- **HTML**:
  - Semantic (use `<section>`, `<article>`, `<nav>`).
  - Mobile-first meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`.
  - **Smooth Scroll**: Add `html { scroll-behavior: smooth; }` to CSS.
- **CSS**:
  - Modular (separate files for components, layout, utilities).
  - BEM methodology (e.g., `.card__title`).
  - CSS variables for colors/spacing (see [Section 8.1](#81-css-variables)).
- **JavaScript**:
  - Vanilla JS (no frameworks).
  - Event listeners for interactions (e.g., smooth scroll fallback).
  - Smooth scroll: `behavior: smooth` in CSS (with JS fallback if needed).

### 14.3 Validation Checklist
- [ ] All links work (internal + external).
- [ ] No placeholder text/images.
- [ ] Mobile/desktop layouts match blueprint.
- [ ] **Smooth scroll** works for all anchor links.
- [ ] Accessibility: Keyboard nav, contrast, ARIA.
- [ ] Performance: Images lazy-loaded, fonts system stack.
- [ ] "Get in Touch" and "Share" links are **placeholders** (to be defined later).

---

## 15. Open Questions
1. **Content**:
   - Final images for **Process 01 (Discover + Define)** and **Process 02 (Design + Deliver)**.
   - Avatar image for Hero/About Me.
2. **Design**:
   - Confirm color palette (e.g., primary: #0066CC, secondary: #1E1E1E).
   - Font preferences (system stack or custom)?
3. **Functionality**:
   - Should Process 01/02 cards link to **dedicated pages** or **smooth scroll to sections**?
4. **Hosting**:
   - Domain (e.g., martinleroux.design)?
   - Non-US hosting preference (e.g., Codeberg Pages, Netlify)?

---

## 16. Next Steps
1. **Finalize Assets**: Provide images and confirm links.
2. **Review Documentation**: Confirm all sections align with your vision.
3. **Agent Setup**:
   - Share **this single file** with the agent.
   - Specify: "Code a static, responsive portfolio site using HTML/CSS/JS with **smooth scroll** for anchor links. **Get in Touch** and **Share** links are placeholders."
4. **Iterate**:
   - Test on mobile/desktop.
   - Validate accessibility (e.g., [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)).