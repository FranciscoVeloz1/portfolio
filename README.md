# Portfolio
Personal portfolio

## Resume data

`npm run sync:data` copies `index.json` from the sibling `resume-data-source` repo when that path is available locally (meta-workspace checkout). It updates both:

- `src/data/index.json` — imported at build time by the portfolio app
- `public/resume-data/index.json` — served as a static asset for other apps

When the sibling repo is unavailable, committed copies in both locations are used for dev and build.

After deploy, external apps can fetch resume data from:

`https://franciscoveloz1.github.io/portfolio/resume-data/index.json`
