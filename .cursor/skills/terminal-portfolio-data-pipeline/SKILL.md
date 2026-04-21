---
name: terminal-portfolio-data-pipeline
description: Handles GitHub topic filtering and screenshot refresh flow (ScreenshotOne to Cloudinary to rendered project cards). Use when modifying repo ingestion, screenshot behavior, API refresh route, or related environment variables.
---

# Terminal Portfolio Data Pipeline

## Data Flow

1. `lib/github.ts` fetches user repos through Octokit.
2. `lib/projects.ts` filters repos by `portfolio` topic and normalizes project data.
3. `lib/screenshot-store.ts` generates deterministic screenshot public IDs.
4. `lib/cloudinary.ts` uploads/reads screenshot assets.
5. `app/api/refresh-screenshots/route.ts` orchestrates refresh pipeline.
6. `app/projects/page.tsx` renders project cards with available screenshot URLs.

## Environment Contract

- Core: `GITHUB_TOKEN`, `GITHUB_USERNAME`
- Refresh auth: `REFRESH_SCREENSHOTS_SECRET`
- Screenshot capture: `SCREENSHOTONE_API_KEY`
- Cloudinary: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- Optional deploy trigger: `VERCEL_DEPLOY_HOOK_URL`

Keep `.env.example` aligned with any env contract changes.

## Pipeline Rules

- Keep topic filtering strict: only repos tagged `portfolio`.
- Skip invalid/missing homepage URLs rather than failing full render.
- Keep Cloudinary public ID stable: `portfolio/<repo-name>`.
- API refresh route must stay secret-protected.
- Avoid crashing build when optional runtime integrations are not configured.

## Safe Editing Checklist

- Update types in `types/project.ts` first when data shape changes.
- Keep integration code in `lib/*`; keep routes/components thin.
- Verify `npm run lint` and `npm run build`.
- Confirm `/projects` still renders with empty/missing external data.
