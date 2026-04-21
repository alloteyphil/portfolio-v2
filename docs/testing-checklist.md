# Testing and Pre-Merge Checklist

Use this checklist for every merge into `main`.

## Automated Checks

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] Required test suites pass

## Functional Validation

## Projects

- [ ] `/projects` shows only curated featured repos.
- [ ] Repos without valid live URLs are excluded.
- [ ] Each card shows description, stack tags, and live link.
- [ ] Projects list supports stack/category filtering without empty-state regressions.
- [ ] Search input (if enabled) returns expected projects by title/description/tag.
- [ ] Case-study route (`/projects/[slug]`) loads for eligible projects and has no broken links.

## Admin

- [ ] `/admin` is blocked for unauthenticated users.
- [ ] Authorized owner/admin can select and unselect featured repos.
- [ ] Curation updates persist to Convex.

## Screenshot Pipeline

- [ ] Refresh endpoint rejects invalid token.
- [ ] Unchanged projects are skipped.
- [ ] Changed projects refresh screenshot successfully.
- [ ] Failed screenshot refresh preserves prior Cloudinary image URL.
- [ ] Workflow-triggered refresh reports processed/skipped/failed counts.

## Contact

- [ ] Contact form rejects invalid input.
- [ ] Turnstile token is required and verified.
- [ ] Successful submission sends via Resend.
- [ ] Failed submission path surfaces safe error message.

## SEO and Analytics

- [ ] Metadata is present on key routes.
- [ ] `sitemap.xml` is generated and accessible.
- [ ] `robots.txt` is accessible and valid.
- [ ] PostHog events fire for:
  - [ ] page views
  - [ ] project live-link clicks
  - [ ] contact submit success/failure

## Manual QA

- [ ] Desktop layout remains consistent with minimal purple design.
- [ ] Animation behavior is subtle and non-blocking.
- [ ] `prefers-reduced-motion` behavior is respected.
- [ ] No broken images or dead links in primary navigation.
- [ ] Skills section is readable and each skill links to at least one concrete project/example.
- [ ] Resume links from nav and homepage CTA open `/cv/resume.pdf` successfully.

## Deployment Readiness

- [ ] Production secrets configured for all active integrations.
- [ ] CI secrets configured for screenshot workflow.
- [ ] Rollback path confirmed (previous deploy available).
- [ ] Release notes updated with user-visible changes.
