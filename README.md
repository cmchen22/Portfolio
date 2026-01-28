# Portfolio

Professional portfolio for INFO 490 Capstone. Includes About, Projects, Skills, and Contact sections, plus links to resume and LinkedIn.

## Setup

1. Replace placeholder content in `index.html` with your own (bio, projects, skills, LinkedIn, email, GitHub).
2. Add `resume.pdf` to `assets/` and fix the link if you use a different path or filename.
3. Add project images or screenshots to `assets/images/` as needed.

## Easiest deployment (GitHub Pages, no Git needed)

1. **Create a new repo** on [github.com](https://github.com) → New repository. Name it `portfolio` (or anything). Leave it empty, no README.

2. **Upload this folder**: On the new repo page, click **“uploading an existing file”**. Drag in everything *inside* `portfolio` (all the files and folders: `index.html`, `css/`, `js/`, `assets/`, `README.md`, `.gitignore`). Commit.

3. **Turn on Pages**: Repo → **Settings** → **Pages** (left sidebar). Under “Build and deployment”, set **Source** to **Deploy from a branch**. Branch: `main`, folder: **/ (root)**. Save.

4. **Wait 1–2 minutes**, then open **https://YOUR_USERNAME.github.io/portfolio/** (use your GitHub username and repo name). That’s your portfolio URL — submit this link in Canvas.

## Run locally (optional)

Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000

## Folder structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
└── README.md
```
