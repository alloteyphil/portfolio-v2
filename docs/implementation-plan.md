# Portfolio V2 Implementation Plan

## Scope

Build the production-ready V2 portfolio with admin curation, selective screenshot refresh, contact delivery, baseline SEO, and analytics.

## Architecture

```mermaid
flowchart TD
  adminLogin["AdminLoginClerk"] --> adminSelect["AdminSelectFeaturedRepos"]
  adminSelect --> featuredStore["ConvexFeaturedProjectsTable"]
  featuredStore --> projectsPage["ProjectsPageRenderLiveOnly"]

  pushMain["PushMain"] --> workflow["GitHubActionsRefreshWorkflow"]
  workflow --> refreshApi["RefreshScreenshotsApiRoute"]
  refreshApi --> compareHash["RelevantChangeDetection"]
  compareHash -->|"changed"| screenshotOne["ScreenshotOneDesktopCapture"]
  screenshotOne --> cloudinary["CloudinaryUploadOverwrite"]
  compareHash -->|"unchanged_or_failed"| keepOld["PreserveExistingImage"]
  cloudinary --> featuredStore
  keepOld --> featuredStore

  contactPage["ContactPage"] --> turnstile["TurnstileVerification"]
  turnstile --> resend["ResendEmailSend"]
  resend --> posthog["PostHogTrackContactSubmit"]
  projectsPage --> posthog
```

## Phases

## Phase 1: Documentation and Contracts

- Finalize decision and integration docs.
- Freeze environment variable contract.
- Define event names for analytics.

Exit criteria:

- `docs/decisions.md` reflects latest scope.
- `docs/integrations.md` includes all providers and secrets.

## Phase 2: Convex Foundation

- Add Convex schema for featured projects and screenshot state.
- Add server functions for:
  - featured project CRUD
  - repo sync metadata
  - screenshot fingerprint comparison

Exit criteria:

- Convex tables and server functions compile.
- Admin and public routes can read featured project records.

## Phase 3: Clerk-Protected Admin Curation

- Add private admin route.
- Authenticate with Clerk.
- Add selection/toggle controls for featured repos.
- Persist curation to Convex.

Exit criteria:

- Non-authenticated users cannot access admin route.
- Owner/admin can curate featured repos and save changes.

## Phase 4: Public Projects and Screenshot Policy

- Update project page to render curated live projects only.
- Implement relevant-change detection before screenshot refresh.
- Preserve existing Cloudinary URL on failures/quota limits.

Exit criteria:

- `/projects` never displays non-live or unfeatured repos.
- Screenshot job skips unchanged projects.
- Failed refresh keeps previous screenshot URL.

## Phase 5: Contact, SEO, Analytics

- Add `/contact` route and submission endpoint.
- Validate Turnstile token and send via Resend.
- Add PostHog page view and key event tracking.
- Add metadata, sitemap, robots, OG defaults.

Exit criteria:

- Contact submissions succeed with valid Turnstile token.
- PostHog receives page and conversion events.
- SEO files/routes are generated and valid.

## Phase 6: Cleanup, Quality, Release

- Exclude blog from shipped route surface for this phase.
- Keep future blog plan documented only.
- Add test coverage for critical paths.
- Execute pre-merge quality checklist.

Exit criteria:

- `npm run lint`, `npm run typecheck`, and `npm run build` pass.
- Required tests pass.
- Release checklist is complete.

## Acceptance Criteria

- Portfolio displays only curated repos with valid live URLs.
- Resume/CV is reachable in one click from global navigation.
- Homepage includes a secondary CTA to view/download resume.
- Resume asset is available at `/cv/resume.pdf` and opens without auth.
- Admin curation is private and auth-gated.
- Screenshot refresh runs only for relevant changes.
- Previous screenshot is preserved when refresh fails.
- Contact form is protected by Turnstile and delivered via Resend.
- PostHog captures page views and key funnel events.
- Basic SEO outputs are present and valid.

## Planned Code Areas

- Existing:
  - `app/page.tsx`
  - `app/projects/page.tsx`
  - `app/api/refresh-screenshots/route.ts`
  - `components/site-nav.tsx`
  - `lib/github.ts`
  - `lib/projects.ts`
  - `lib/cloudinary.ts`
  - `lib/screenshotone.ts`
  - `lib/screenshot-store.ts`
- New:
  - `public/cv/resume.pdf`
  - `convex/**`
  - `app/admin/**`
  - `app/contact/**`
  - `lib/analytics/**` (or equivalent)

## Open Visual Tokens

- Purple palette values are pending final confirmation.
- Animation timing and targets are pending final confirmation.
