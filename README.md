# Portfolio — Shahla Gharibi

A bilingual (English / Persian) single-page portfolio built from real GitHub and
Kaggle work. Static HTML, CSS and vanilla JavaScript: no framework, no build step,
no dependencies to install.

```
index.html            markup and section structure
assets/css/style.css  all styling, light + dark themes
assets/js/main.js     renders the page from the data file
assets/img/profile.jpg the portrait in the hero
data/site.js          ← everything you edit lives here
```

The theme, layout and renderer are the same ones used for the Akam team site and
Zhaleh Manbari's portfolio, so a fix made in one can be carried to the others.

## Run it

Open `index.html` in a browser. That is the whole workflow — the content is loaded
from `data/site.js` as a plain script, so it works over `file://` too.

If you prefer a local server:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Edit the content

Everything the page shows comes from `data/site.js`. The shape:

| Key | What it controls |
|---|---|
| `ui` | Every interface string — nav, section headings, button labels, footer |
| `tagLabels` | Display names for the project filter tags, keyed by tag id |
| `profile` | Name, role, tagline, avatar, about paragraphs, hero stat tiles |
| `profile.links` | Buttons in the hero and contact sections. Remove a key and its button disappears |
| `skills` | The skill cards; each entry is `{ group, items[] }` |
| `projects` | The project cards |
| `kaggle` | Blurb, stat tiles, and the notebook / model / dataset columns |

### Two languages

Any string a visitor reads is written as an object:

```js
role: { en: "Backend & Computer Vision Engineer",
        fa: "مهندس بک‌اند و بینایی ماشین" }
```

A plain string (a URL, `"PyTorch"`, `"FastAPI"`) is shown as-is in both languages —
so only prose needs translating. If you add a key in one language and forget the
other, the site falls back to `defaultLang` rather than showing a blank.

Switching to Persian sets `dir="rtl"` on the document, swaps in the Vazirmatn
typeface, and mirrors the layout through CSS logical properties. The visitor's
choice is remembered in `localStorage`; a first-time visitor whose browser is set
to Persian lands on the Persian version.

A project entry:

```js
{
  name: "Project name",
  subtitle: "One line under the title",
  description: "A paragraph.",
  tags: ["cv", "kyc"],         // tag ids — labels live in `tagLabels`
  tech: ["Python", "FastAPI"], // small monospace chips
  repo: "https://github.com/...",
  demo: "https://...",         // optional — "Live demo" link
  kaggle: "https://www.kaggle.com/...", // optional — "On Kaggle" link
  private: true,               // optional — shows a lock badge instead of a repo link
  privateNote: { en: "…", fa: "…" },   // optional label for that badge
  cover: "layers",             // the line motif drawn faintly behind the title
  year: "2026",
  featured: true,              // featured cards span two columns
  highlights: ["bullet", "bullet"]
}
```

Filter buttons are generated from the tag ids used across all projects, and their
visible names come from `tagLabels` — so filtering keeps working when the language
changes.

`cover` picks one of seven line drawings rendered as inline SVG behind the card
title: `waveform`, `scan`, `chart`, `network`, `layers`, `track`, `stack`. They are
deliberately faint and fade out toward the text. Omit the key for no drawing; the
motifs are defined in `COVERS` in `assets/js/main.js`.

## Publishing to GitHub Pages

The repository `shahla2022.github.io` does not exist yet — create it empty on
GitHub (no README, no .gitignore), then:

```bash
git remote add origin https://github.com/shahla2022/shahla2022.github.io.git
git push -u origin main
```

A repository named `<username>.github.io` is served at `https://<username>.github.io`
automatically, within a minute or two of the first push. For any other repository
name, enable Pages under **Settings → Pages → Source: main / root**; the site then
appears at `https://shahla2022.github.io/<repo-name>/` and the `og:url` meta tags in
`index.html` need the same path added.

The `.nojekyll` file stops GitHub from running the content through Jekyll, which is
unnecessary here and only slows the deploy.

## Notes on the content

Written in November 2026 from the public repositories under
[github.com/shahla2022](https://github.com/shahla2022), the `sshahla` and
`rahagaribi` Kaggle profiles, and the project descriptions on the Akam team site.
Worth checking before the site is shared widely:

- **The Brain MRI entry is private work** — an IAAA contest submission with no
  repository link, described from the published Kaggle datasets and models. Check it
  is not covered by a confidentiality agreement; deleting the entry means removing
  its block from `data/site.js`.
- **The React demo has no live link.** `react-vercel-akam-team.vercel.app` is behind
  Vercel's deployment protection, so only the source is linked. Turn protection off
  in the Vercel project settings and add a `demo:` key to that project.
- **Kaggle links point at profile tabs**, not individual notebooks and models — swap
  in direct URLs if per-item links are wanted.
- **The stat tiles** in the hero (26 datasets, 6 models, ~8 GB of data) were counted
  across both Kaggle profiles in November 2026, and will drift as new work is
  published.
