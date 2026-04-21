---
name: terminal-portfolio-automation
description: Maintains CI automation for screenshot refresh and deploy triggering. Use when editing GitHub Actions workflow, refresh endpoint contracts, secrets, or operational reliability behavior.
---

# Terminal Portfolio Automation

## Workflow Scope

- Workflow file: `.github/workflows/refresh-portfolio-screenshots.yml`
- Trigger: push to `main`
- Action: send authenticated POST request to `/api/refresh-screenshots`

## Secrets Contract

- `SCREENSHOT_REFRESH_URL` must point to deployed `/api/refresh-screenshots`
- `REFRESH_SCREENSHOTS_SECRET` must match `REFRESH_SCREENSHOTS_SECRET` in app env

## Guardrails

- Keep workflow idempotent and simple.
- Fail early if required secrets are missing.
- Use authenticated calls only; never expose token in logs.
- Keep refresh route response structured so workflow failures are debuggable.

## When Updating Automation

1. Confirm route auth header format still matches workflow request.
2. Keep route backward-compatible if possible when changing request format.
3. Validate workflow YAML syntax and command quoting.
4. Re-check `README.md` setup docs for new/changed secrets.
