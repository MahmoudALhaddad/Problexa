# Problexa — portfolio

One-page site for the studio. Next.js 15 (App Router), Tailwind v4, Framer Motion.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Editing content

All copy lives in `/content` — plain typed data, no JSX:

| File | What |
|------|------|
| `content/site.ts` | name, hero copy, email, socials, nav |
| `content/services.ts` | the "what we do" cards |
| `content/projects.ts` | the Solve Log — one entry per project |
| `content/studio.ts` | about story, stats, team initials |

### Adding a project

Add an object to `projects` in `content/projects.ts`. For a screenshot,
drop the file in `public/work/` and set `image: "/work/your-file.png"`.
Leave `image: null` to show the generated panel.

## Contact form

Posts to `app/api/contact/route.ts`. With no `RESEND_API_KEY` set it logs
submissions to the server console and returns success, so it works in dev
untouched. To send real email: copy `.env.example` to `.env`, add a
[Resend](https://resend.com) key, set `CONTACT_TO`.

## Design notes

- **Concept:** every project is a solved problem. Work section = "Solve Log",
  `PRB-0xx` refs are a real sequence.
- **Colour:** coral `#FF5A36` = the problem, mint `#7DF9E4` = the resolution.
  Two accents only. Tokens in `app/globals.css` under `@theme`.
- **Type:** Bricolage Grotesque (display) / IBM Plex Sans (body) / IBM Plex Mono (labels).
- Reduced motion is respected — the hero resolve animation shows its end state.

## Deploy

Push to a repo, import on [Vercel](https://vercel.com), add the env vars.
Nothing else to configure.
