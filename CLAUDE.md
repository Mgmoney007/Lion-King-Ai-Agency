# CLAUDE.md - Lion King AI Agency

## Build & Development
- **Dev Server**: `npm run dev` (Runs on port 3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (Runs `tsc --noEmit`)
- **Preview**: `npm run preview`

## Coding Style Guidelines
- **Framework**: React 18+ with TypeScript.
- **Styling**: Tailwind CSS utility classes exclusively.
- **Animations**: Framer Motion (`motion/react`) for all transitions and interactions.
- **Icons**: `lucide-react` for all UI icons.
- **Components**: Functional components with hooks.
- **Naming**:
  - Components: PascalCase (e.g., `BackgroundGrid.tsx`).
  - Functions/Variables: camelCase.
  - Constants: UPPER_SNAKE_CASE.
- **Types**: Define interfaces for props and data structures. Use `src/types.ts` for shared types.
- **Images**: Use `referrerPolicy="no-referrer"` on all `<img>` tags.
- **Structure**:
  - Reusable components in `src/components/`.
  - Main application logic in `src/App.tsx`.
  - Global styles in `src/index.css`.

## Design Principles
- **Aesthetic**: Apple × Linear × Premium SaaS.
- **Color Palette**: Cream/Off-white background, Near-black text, Gold accents (`#f4c400`).
- **Typography**:
  - **Display**: `Outfit` (sans-serif) for high-impact headlines.
  - **Body**: `Inter` (sans-serif) for general UI and readability.
- **Layout**: Generous whitespace, rounded cards (`rounded-[3rem]`), and strong visual hierarchy.
- **Motion**: Slow, smooth, and intentional animations. Custom animations like `float-cinematic` and `glow-pulse` are defined in `src/index.css`.
