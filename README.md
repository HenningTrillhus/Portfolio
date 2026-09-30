# Henning Trillhus – Portfolio

Personal portfolio for **Henning Trillhus**, a student of Informatics: Programming and System Architecture at the University of Oslo (UiO).

**Live site:** [henningtrillhus.no](https://henningtrillhus.no)

The site is available in **English and Norwegian**, follows your light/dark preference, and shows my projects on a timeline split into what I coded by hand and what I vibe-coded with AI.

## Features

- **Bilingual (EN / NO).** One click on the header switch translates all text, including project descriptions. The choice is remembered, and the first visit follows the browser language.
- **Project timelines.** Projects are grouped into *Hand-coded* and *Vibe-coded*, then by year, newest first. Older work from before GitHub and from my earlier account is included, with notes where it predates AI coding tools.
- **Live data from GitHub.** Repositories are loaded from the GitHub API and cached for an hour. If GitHub can't be reached, a built-in fallback list is shown instead.
- **Project pages with README.** Clicking a project opens its README inside the site (`#/p/owner/repo`). Repositories without a README go straight to GitHub. README HTML is rebuilt from an allow-list before it is shown.
- **Code viewer.** A few small projects (listed in `CODE_VIEWER_REPOS`) can show their source code on their project page (files from every folder, shown as a tree whose folders open and close), with line numbers, simple syntax highlighting and a copy button. When a project has both a README and code, two buttons switch between them. With only code, the code is shown alone. With only a README, only the README is shown. With neither, the visitor goes straight to the repository on GitHub. An empty README, or an unedited template README, counts as no README.
- **Degree curriculum.** A semester-by-semester view of the programme, with links to the UiO course pages.
- **Background.** Education, and a note on the break from development during military service.
- **Contact form** powered by [Web3Forms](https://web3forms.com), with validation, a consent checkbox, a spam honeypot and sending/success/error states.
- **Privacy policy** page in English and Norwegian, written for what the site actually does (no cookies, no analytics, no third-party fonts).
- **Custom 404 page** that works both at the site root and under a subpath.
- **Accessible and responsive.** Skip link, keyboard focus styles, reduced-motion support, phone-friendly layout and a print stylesheet.

## Tech

Plain **HTML, CSS and JavaScript**. There is no build step, framework or package manager. Everything is served from the site itself (system fonts, no third-party scripts), so the browser only contacts the GitHub API to load projects, and Web3Forms when a message is sent.

```
.
├── index.html    # Page structure and default (English) text
├── style.css     # Design tokens, layout, light/dark themes, print styles
├── script.js     # Translations, GitHub data, timelines, README pages, routing, contact form
├── privacy.html  # Privacy policy (English and Norwegian)
├── legal.js      # Language and theme switch for the privacy page
├── 404.html      # Self-contained "page not found" page
├── vercel.json   # Clean URLs and security headers for Vercel
├── favicon.ico, icon-32.png, icon-192.png, apple-touch-icon.png   # Site icons
├── og-image.png  # Preview image for shared links
├── robots.txt, sitemap.xml   # Search engine files
└── README.md
```

## Run locally

Any static file server works:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Customise

Most content lives at the top of `script.js`:

| What | Where |
| --- | --- |
| Which repos are hand-coded or vibe-coded | `HAND_CODED` and `VIBE_CODED` |
| Hide a repo from the site | `HIDDEN_REPOS` |
| Projects that show their code on the site | `CODE_VIEWER_REPOS` |
| Nicer project descriptions (EN and NO) | `DESCRIPTIONS` |
| Projects that aren't on this GitHub account | `OLDER_PROJECTS` |
| Courses to mark as completed | `COMPLETED_COURSES` |
| Contact form key (public, from web3forms.com) | `WEB3FORMS_ACCESS_KEY` |
| All page text, in both languages | `I18N` |

A repo that is in neither `HAND_CODED` nor `VIBE_CODED` is listed under *More projects*, so AI-written code is never labelled as hand-coded by accident.

Colours and fonts are CSS variables at the top of `style.css`.

## Deploy

The site is static and hosted on [Vercel](https://vercel.com). To publish changes:

```bash
npx vercel deploy --prod
```

It also works on GitHub Pages: the 404 page detects the `/<repo>/` subpath.

## Notes

- GitHub allows 60 unauthenticated API requests per hour per network. Project data is cached in the browser for an hour and README pages for the session, so normal browsing stays well within that. If the limit is hit, project pages show a link to GitHub instead.
- README pages only open for repositories owned by `HenningTrillhus` or `HenningT05`.
- The Web3Forms access key is meant to be public: it can only be used to email the address it was created for. If you change what data the site collects or which services it uses, update `privacy.html` too.

## Contact

- Email: [henningtrillhus05@gmail.com](mailto:henningtrillhus05@gmail.com)
- LinkedIn: [henning-trillhus](https://www.linkedin.com/in/henning-trillhus-253632396/)
- GitHub: [HenningTrillhus](https://github.com/HenningTrillhus)

---

## På norsk

Personlig portefølje for Henning Trillhus, som studerer Informatikk: programmering og systemarkitektur ved Universitetet i Oslo. Siden finnes på norsk og engelsk, viser prosjektene på en tidslinje delt i håndkodet og vibekodet, og er laget med ren HTML, CSS og JavaScript uten byggesteg. Se ovenfor for hvordan du kjører den lokalt og publiserer den.
