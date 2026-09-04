# Agent instructions

Vite + React 19 SPA for https://www.scndgen.com. Deployed as static files on Apache (client-side routing via `.htaccess`). There is no SSR: crawlers that do not run JS only see `index.html`.

Import with `@/` (`src/*`). Routing is `react-router` (not `react-router-dom`). Keep TypeScript strict and `npm run lint` at zero warnings.

## SEO — keep these in lockstep

When you add, rename, or remove a public URL, update **all** of:

1. Routes: `src/App.tsx`, `src/pages/Legends/LegendRoutes.tsx`, `src/pages/Comics/ComicRoutes.tsx`
2. Nav enums: `Tab` / `LegendTab` in `src/constants/index.ts`, plus `AppLink` / `withTabContext` callers
3. **`SeoContent`**: `pageSeo` (and `comicIssueLabels` for `/comics/:pageId`) in `src/constants/index.ts`. `getSeoForPath` must return a unique title and description for every indexable path. Titles use `` `${MetaTitle} …` ``. Never fall through to the `SITE_TITLE` default for a real page.
4. **`public/sitemap.xml`**: one `<loc>` per indexable URL, using `https://www.scndgen.com` with no trailing slash except `/`.
5. `public/robots.txt` if the sitemap URL or host changes.

Do not put `<title>` or SEO `<meta>` tags in page components. `Layout` renders a single `<Seo path={pathname} />`. React 19 hoists `<title>`, `<meta>`, and `<link>` — render **one** `<title>` (never `<meta name="title">`). `<title>` children must be a single string: `<title>{title}</title>`, not mixed text and expressions.

Homepage crawler fallbacks live in `index.html`. Keep them valid and aligned with `SITE_URL`, `SITE_NAME`, `SITE_TITLE`, `DEFAULT_DESCRIPTION`, and `DEFAULT_OG_IMAGE`:

- Description is `name="description"`, not `property="description"`
- `og:image` / `twitter:image` must be absolute URLs
- JSON-LD `WebSite.url` matches `SITE_URL`

## Stack notes

- Functional components. Nav highlighting goes through `withTabContext`, not ad-hoc active state in links.
- Static assets in `public/` are copied into `dist/` as-is by Vite. Site images live in `public/media/images` and deploy as `/media/images/...`.
- jQuery 3.x on the CDN is required by lightbox; do not bump to jQuery 4.
- TypeScript 7 and ESLint 10 are not compatible with current lint plugins; stay on the versions in `package.json`.
- Production deploys run from `.github/workflows/deploy.yml` on **git tag push**. Tags must use `vYYYY.MM.DD.REV_NO` (example: `v2026.09.04.1`). `YYYY.MM.DD` is the release date in UTC+2 / local calendar date; `REV_NO` is the nth release that day, starting at `1`. The tag is baked into the footer as `VITE_APP_VERSION`. Never commit FTP credentials; they live in GitHub Actions secrets. Use `FTP_SERVER=ftp.scndgen.com` (not `www` and not a stale IP), `FTPS_PORT=21`, `FTP_USERNAME`, `FTP_PASSWORD`. Optional: `FTP_REMOTE_DIR` (must end with `/`; defaults to `public_html/`). The FTP action is incremental: new and changed files upload, unchanged files are skipped via `.ftp-deploy-sync-state.json`. Do not enable `dangerous-clean-slate`. The FTPS certificate is a shared-host name, so the workflow uses `security: loose`.
