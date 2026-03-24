# CLAUDE.md - Lion King AI Agency

---

## 🧱 Build & Development

- **Dev Server**: `npm run dev` (Runs on port 3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (Runs `tsc --noEmit`)
- **Preview**: `npm run preview`

---

## 🧑‍💻 Coding Style Guidelines

### Stack
- React 18+ with TypeScript
- Tailwind CSS (utility classes only)
- Framer Motion (`motion/react`) for animations
- `lucide-react` for icons

### Components
- Functional components with hooks
- Reusable components → `src/components/`
- App logic → `src/App.tsx`
- Global styles → `src/index.css`

### Naming
- Components → PascalCase
- Variables/functions → camelCase
- Constants → UPPER_SNAKE_CASE

### Types
- Define interfaces for props/data
- Shared types → `src/types.ts`

### Images
- Always use `referrerPolicy="no-referrer"`

---

# 🎨 Design System (STRICT)

## Aesthetic
Apple × Linear × Premium SaaS

## Color Palette
- Background → cream / off-white
- Text → near-black
- Accent → gold `#f4c400`
- Must include strong dark sections for contrast

---

# 🔤 Typography System (SATOSHI-FIRST)

## Font Stack
- Display → `Satoshi` (primary brand voice)
- Body → `Inter`

---

## Display Typography (CRITICAL)

Satoshi is the defining visual element of the brand.

Claude MUST:

- use Satoshi for all major headlines
- use strong weights (600–900)
- create dense, high-impact typography
- keep line-height tight and controlled
- maintain short, punchy line lengths

Claude MUST NOT:

- use thin or light-weight headlines
- create airy or weak hero text
- over-space letters or lines
- reduce visual authority of headlines

---

## Body Typography

- Use Inter for readability
- Maintain clean spacing and legibility
- Ensure strong contrast with display text

---

## Typography Hierarchy Rules

- Hero headline → dominant, bold, high contrast
- Subheadline → supportive, lighter, but still clear
- Body text → readable, structured, not oversized

---

# 🎯 Hero Typography Priority (VERY IMPORTANT)

The hero section defines the entire product perception.

Hero MUST:

- use Satoshi in bold/black weights
- feel immediate, confident, and high-value
- dominate the viewport visually
- clearly separate headline, subtext, and CTA

The hero should feel:

> Expensive, decisive, and impossible to ignore

---

## Layout
- Generous whitespace
- Strong visual hierarchy
- Large rounded cards → `rounded-[3rem]`

## Motion
- Slow, smooth, intentional
- Never flashy or distracting
- Always use Framer Motion

---

# 🛡️ Design Protection Rules (NON-NEGOTIABLE)

Claude MUST NOT:

- Reduce visual contrast
- Remove or weaken dark sections
- Flatten the UI into a generic SaaS design
- Simplify bold typography
- Weaken headline dominance
- Introduce random or off-brand colors

Claude MUST:

- Preserve visual tension and hierarchy
- Maintain a premium, high-end feel
- Enhance — NOT replace — the design direction

---

# 🎨 Controlled Creativity

Claude MAY introduce:

- subtle gradients
- glow effects
- depth layering
- minimal floating elements
- micro-interactions

ONLY IF:

- they enhance premium feel
- they do not introduce clutter
- they do not reduce clarity or hierarchy

Claude MUST NOT:

- introduce playful or cartoon-like UI
- add excessive floating elements
- create visual noise
- shift toward creator-tool aesthetics

Goal:

> Increase richness WITHOUT losing sophistication

---

# 🧠 Refinement Philosophy

Default behavior:

> Refine, elevate, and enrich — NOT redesign

Claude must:

- improve existing components
- preserve layout structure
- maintain brand identity

Claude must NOT:

- rebuild sections from scratch
- replace layouts unless explicitly instructed
- simplify strong design elements

Focus on:

- spacing
- hierarchy
- polish
- depth
- consistency

---

# 🧠 Inspiration Handling

When given external references:

Claude MUST:

- extract principles (depth, hierarchy, motion)
- adapt to current system

Claude MUST NOT:

- copy styles directly
- change design category
- introduce conflicting aesthetics

Rule:

> Adapt inspiration — never imitate

---

# ⚙️ Execution Rules (QUALITY + COST CONTROL)

## Always Inspect First

- identify relevant components
- trace render tree from `App.tsx`
- confirm actual usage

---

## Scope Discipline

- work on ONE section at a time
- do NOT modify unrelated sections

---

## Reuse Over Rebuild

- update existing components
- avoid duplication

---

## No Redundant Work

- do NOT reprocess unchanged areas
- do NOT restyle already-correct components

---

# 💰 Prompt Efficiency Rules

Claude MUST:

- keep responses concise
- avoid repeating CLAUDE.md context
- prioritize implementation over explanation

---

## Delta Updates Only

- change only what is necessary
- avoid full rewrites unless required
- focus on high-impact edits

---

# 🧩 Component Standards

## Cards
- premium and layered
- subtle gradients
- soft borders (`border-white/10`)
- depth via shadows

---

## Buttons / CTAs
- primary CTA must dominate
- gold accent used intentionally
- strong hierarchy

---

## Sections
- clear rhythm:
  - light ↔ dark contrast
- avoid blending sections

---

# 🎬 Motion Guidelines

Use Framer Motion for:

- hero entrance
- hover interactions
- scroll transitions

Motion must:

- feel smooth and premium
- enhance quality
- never distract

---

# 🚀 System Goal

Every change should move toward:

> High-conviction, premium AI agency quality

NOT:

- generic SaaS template
- overdesigned startup aesthetic
- playful creator UI

