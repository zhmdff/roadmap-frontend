# Project Important Information

## Project: Roadmap AI
## Purpose: AI-powered career guidance platform for Azerbaijani students

## Globals
- `styles`: `app/globals.css` — design tokens (colors, gradients, animations)
- `translations`: `lib/translations.ts` — centralized i18n for AZ/EN (every UI string must be here)
- `context`: `lib/context.tsx` — AppProvider with language, theme, and `t` translation object
- `groups`: `lib/groups.ts` — local education system data with custom icons per group

## Components
- `components/ui/Loading.tsx` — Premium glassmorphic loading spinner. Use everywhere instead of custom loaders. Props: `title`, `description`, `icon`. Created 2026-02-23.
- `components/layout/Header.tsx` — App header with logo.png, nav, language switcher, theme toggle. Created 2026-02-22.
- `components/layout/Footer.tsx` — App footer with logo.png and social links. Created 2026-02-22.

## Decisions
- [2026-02-23T01:25:00Z] agent: Created `components/ui/Loading.tsx` as reusable loading screen. Reason: eliminate duplicated loading UIs across pages.
- [2026-02-23T01:37:00Z] agent: Massively expanded `lib/translations.ts` with full az/en coverage for every page. Reason: user requested zero static/hardcoded text.
- [2026-02-23T02:13:00Z] agent: Replaced material icon placeholders in Header/Footer with actual `/logo.png`. Added favicon metadata to `layout.tsx`. Updated `site.webmanifest` with app name and brand color.

## Rules for Future Changes
1. **No hardcoded text**: Every user-visible string MUST use `t.*` from `lib/translations.ts`. Add new keys when needed.
2. **Use Loading component**: For any loading/spinner state, import and use `components/ui/Loading.tsx`.
3. **Use logo.png**: The project logo is at `/public/logo.png`. Use `next/image` to render it.
4. **Icon design**: Never use flat `bg-primary/10` circles. Use gradient glassmorphic icon containers with hover effects.
5. **Education data**: All speciality/group data lives in `lib/groups.ts`. Each group has a `groupIcon` and altgroups have `altIcon`.

## Action-check
last-updated: 2026-02-23T02:13:00Z by agent
