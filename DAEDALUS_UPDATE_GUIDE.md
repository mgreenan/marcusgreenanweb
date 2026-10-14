# Updating the Daedalus portfolio page

The existing route is `/projects/rocket-propulsion-lab-daedalus`. Its project content lives in `lib/portfolio-copy.ts` (search for that slug); the layout and engineering calculation block live in `components/project-detail.tsx`. Keep historical project work distinct from the October 2026 reconstruction and do not present the conditional 275 N screen as a measured deployment load.

Replace the two public PDFs in place when revisions are approved:

- `public/documents/daedalus-spacex-portfolio.pdf`
- `public/documents/daedalus-engineering-case-study.pdf`

The page's download links use these stable paths. CAD, FBD, nose-section and FEA images live in `public/projects/rpl-daedalus/`; keep the names in `lib/portfolio-copy.ts` aligned with the files. The verified engineering masters and editable sources remain outside this website checkout under `FINAL_SUBMISSION` in the Daedalus workspace.

After an edit, run the project's existing `npm run build` (or the installed Next.js build command) and check the route at `http://127.0.0.1:3000/projects/rocket-propulsion-lab-daedalus` on desktop and mobile. Verify both PDF URLs return the intended new files. Commit only the intended page and asset changes, then push to `main`; the repository's existing Vercel integration deploys that branch. Finally load the public route and both PDF URLs at `https://marcusgreenan.com` to confirm the deployment.
