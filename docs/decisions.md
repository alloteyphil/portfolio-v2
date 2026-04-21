# Portfolio V2 Decisions Log

This file is the source of truth for product and technical decisions agreed so far.

## Finalized Decisions

## Product

- Portfolio shows only live/deployed projects.
- `/blog` is not shipped in this phase.
- Contact form is included in this phase.
- Design direction is minimal and purple-forward.
- Light animations are included.

## Data and Backend

- Convex is the backend for application data and server-side workflows.
- Clerk is used for private admin authentication.
- Admin can choose which repos are featured on the portfolio.
- Featured projects are curated in app data, not only by GitHub topic.

## Screenshots

- Screenshot source is ScreenshotOne.
- Storage and delivery is Cloudinary.
- Refresh runs only when relevant featured repo data changes.
- If screenshot capture fails or quota is exceeded, keep the previous image.
- Screenshot format for this phase is desktop only.

## Communications and Tracking

- Contact form delivery uses Resend.
- Contact form bot protection uses Cloudflare Turnstile.
- Analytics uses PostHog.

## SEO

- Basic SEO is in scope:
  - page metadata
  - `sitemap.xml`
  - `robots.txt`
  - Open Graph defaults

## Quality and Delivery

- Tests are required in this phase.
- Pre-merge checklist is required in this phase.

## Pending Decisions

- Primary purple shade token values.
- Final animation set (which components animate and by how much).
- Admin role model details beyond owner-only baseline.

## Defaults While Pending

- Use a conservative purple palette and keep contrast AAA/AA-friendly where possible.
- Use subtle motion only (short duration, reduced distance, and `prefers-reduced-motion` support).
- Treat authenticated owner/admin as authorized until expanded role definitions are added.

## Change Protocol

When a new decision is made:

1. Update this file first.
2. Mirror changes in `docs/implementation-plan.md` if execution changes.
3. Mirror changes in `docs/integrations.md` if secrets/contracts change.
