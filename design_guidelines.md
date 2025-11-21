# Design Guidelines: AI-Augmented Developer Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Linear (clean typography, modern tech aesthetic) + Stripe (professional restraint) + modern developer portfolios (Vercel, Next.js showcase sites). Focus on technical credibility with sophisticated, animation-enhanced presentation.

## Core Design Principles
1. **Technical Sophistication**: Modern, professional aesthetic that positions the portfolio owner as a senior-level developer/architect
2. **Dark Theme Foundation**: Dark backgrounds throughout with strategic content hierarchy
3. **Smooth Motion**: Subtle, purposeful animations that enhance without distracting
4. **Content-First**: Typography and layout prioritize readability and professional presentation

---

## Layout System

**Spacing Units**: Use Tailwind spacing of 4, 8, 12, 16, 20, 24, 32 (p-4, p-8, gap-12, py-16, py-20, py-24, py-32)

**Container Strategy**:
- Full-width dark sections with inner `max-w-6xl mx-auto px-6`
- Content sections: `py-20` desktop, `py-12` mobile
- Component spacing: `space-y-8` to `space-y-16` between major elements

**Grid Patterns**:
- Skills: 2-column grid on desktop (`md:grid-cols-2`)
- Projects: 2-column masonry-style grid (`md:grid-cols-2 gap-8`)
- Single column on mobile for all sections

---

## Typography Hierarchy

**Font Stack**: 
- Primary: Inter or Outfit (clean, modern sans-serif via Google Fonts)
- Monospace: JetBrains Mono for code/technical elements

**Hierarchy**:
- Hero Name: `text-5xl md:text-7xl font-bold tracking-tight`
- Hero Subtitle: `text-xl md:text-2xl font-medium`
- Tagline: `text-lg md:text-xl font-light`
- Section Headings: `text-3xl md:text-4xl font-bold mb-12`
- Subsection Headings: `text-xl md:text-2xl font-semibold`
- Body Text: `text-base md:text-lg leading-relaxed`
- Skill Items: `text-sm md:text-base`

---

## Component Structure

### Navigation
Fixed top navigation with blur backdrop effect
- Logo/Name on left
- Nav links (About, Skills, Projects, Philosophy, Contact) on right
- Smooth scroll behavior to sections
- Height: `h-16` with `px-6` padding

### Hero Section
**Layout**: Full viewport height (`min-h-screen`) with centered content
- Stacked vertical layout: Name → Title → Tagline → CTA buttons
- Fade-in animation sequence (name first, then cascade down)
- CTA buttons: Primary GitHub + Secondary Twitter, side-by-side with `gap-4`
- Add subtle gradient backdrop effect or minimal geometric shapes (optional)

**No Hero Image Required** - Pure typography focus with dark theme treatment

### About/Professional Identity Section
**Layout**: Single column, centered, `max-w-4xl`
- Professional description paragraph with generous line-height (`leading-relaxed`)
- Emphasize key phrases with font weight variations
- Fade-in on scroll animation

### Skills Section
**Layout**: Grid of skill category cards
- Each card: Icon/Emoji + Category Title + Bullet list
- Cards have subtle border, padding `p-6`, rounded corners `rounded-xl`
- Hover effect: subtle lift (`hover:translate-y-[-4px]`) with transition
- Stagger animation on scroll (each card fades in with delay)
- Icons: Use Heroicons for technical symbols or emojis as specified

**5 Skill Cards** (exact names from requirements):
1. ⚙️ AI-Assisted Development
2. 🔁 Workflow Automation  
3. 💻 Development & Frontend
4. 📊 Data & Insights
5. 🧩 Problem Solving & System Design

### Projects Section
**Layout**: 2-column masonry grid on desktop
- Each project card: Title + Description + Tech Stack tags + Status badge
- Cards with `p-8` padding, `rounded-2xl`, subtle border
- Tech stack: Inline flex tags with `rounded-full px-3 py-1 text-sm`
- Hover: Scale up slightly (`hover:scale-[1.02]`)
- "In Progress" badge for AI Trading Journal
- Slide-in from bottom animation on scroll

**4 Projects** (exact as specified):
1. AI Trading Journal (In Progress)
2. Tekla MCP Automation Concept
3. X Automation System
4. Web3 Gaming Concept

### Philosophy Section
**Layout**: Featured quote block, centered
- Large quote text: `text-2xl md:text-3xl font-light italic leading-relaxed max-w-4xl`
- Supporting paragraph below
- Decorative quotation marks or accent element
- Fade-in animation

**Content**:
- "I believe AI is not a tool — it is a co-developer."
- Secondary text about designing solutions and working structurally

### Contact Section
**Layout**: Centered, clean presentation
- Heading: "Let's Collaborate"
- Button row: GitHub + Twitter buttons with external link icons
- Email placeholder text below
- Buttons: `px-8 py-3` with `rounded-lg`, icon + text layout
- Minimal form if desired, or just contact methods

### Footer
Simple, minimal: Copyright/name + social links repeat
- Height: `py-8`, centered content

---

## Animation Guidelines

**Use Framer Motion for**:
- Hero sequence: Fade-in cascade (name → subtitle → tagline → buttons) with `0.2s` stagger
- Scroll animations: Fade-in + slide-up for sections (`y: 20` to `y: 0`)
- Card hovers: Smooth lift transitions (`duration: 0.2s`)
- Skill cards: Stagger animation when entering viewport
- Navigation: Smooth scroll behavior

**Timing**: Keep animations subtle, 0.2-0.4s duration, ease-out curves

**Critical**: Animations should enhance, not distract. Avoid excessive motion.

---

## Accessibility & Polish

- Keyboard navigation for all interactive elements
- Focus states with visible outlines
- Sufficient contrast ratios for all text (handled by dark theme implementation)
- External link icons for GitHub/Twitter buttons
- Smooth scroll with `scroll-behavior: smooth` or Framer Motion scroll
- Responsive breakpoints: mobile-first, md (768px), lg (1024px)

---

## Images

**No hero image required** - this portfolio uses typography-first hero design

**Optional**: Small profile photo/avatar could be added to About section or hero (128x128, circular, subtle border) - but not mandatory

**Project Cards**: No project images specified - focus on clean text presentation with tech stack tags and descriptions