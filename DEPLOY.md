# Deploy Your Portfolio → Get Your Canvas Link

Follow these steps. When you're done, your portfolio will live at a URL like  
**`https://cmchen22.github.io/portfolio/`** — that's the link you submit to Canvas.

---

## Step 1: Open GitHub and create a new repository

1. Go to **[github.com](https://github.com)** and sign in (or create an account).
2. Click the **+** in the top-right → **New repository**.
3. **Repository name:** type `portfolio` (or any name you like — you’ll use it in the URL).
4. Leave everything else as default. **Do not** check “Add a README file.”
5. Click **Create repository**.

---

## Step 2: Upload your portfolio file

1. On the new repo page, you’ll see “…or push an existing repository from the command line” and “…or upload an existing file.”
2. Click **“uploading an existing file”**.
3. Open File Explorer and go to:
   ```
   C:\Users\chenc\portfolio
   ```
4. **Drag only `index.html`** into the GitHub upload area (or click **choose your files** and select it). Everything—styling and scripts—is in that one file.
5. Scroll down and click **Commit changes**.

---

## Step 3: Turn on GitHub Pages

1. In your repo, click **Settings** (top menu, next to the green Code button).
2. In the left sidebar, click **Pages** (under “Code and automation” or “Build and deployment”).
3. Under **“Build and deployment”**:
   - **Source:** choose **Deploy from a branch**.
   - **Branch:** select `main` from the dropdown.
   - **Folder:** select **/ (root)**.
4. Click **Save**.

---

## Step 4: Get your link and submit to Canvas

1. Wait **1–2 minutes** for GitHub to build and deploy.
2. Your portfolio URL will be:
   ```
   https://cmchen22.github.io/portfolio/
   ```
   (Use `portfolio` as the repo name when you create it. If you used a different name, replace `portfolio` in the URL.)
3. Open that URL in your browser to confirm the site loads.
4. **Copy that URL** and paste it into the Canvas assignment where it asks for your portfolio link.
5. Submit the assignment.

---

## 404 / “There isn’t a GitHub Pages site here” — fix it

Do these in order:

### 1. Use the correct URL

- If your repo is named **`portfolio`**, the site is **`https://cmchen22.github.io/portfolio/`** (with `/portfolio`).
- **Do not** use `https://cmchen22.github.io/` alone — that’s only for a special repo named `cmchen22.github.io`.

### 2. Turn on GitHub Pages (or fix the source)

1. Open **https://github.com/cmchen22/portfolio** (use your actual repo name if it’s different).
2. Click **Settings**.
3. In the left sidebar, click **Pages**.
4. Under **“Build and deployment”**:
   - **Source:** must be **Deploy from a branch** (not “GitHub Actions”).
   - **Branch:** choose **main**.
   - **Folder:** choose **/ (root)**.
5. Click **Save**.
6. Wait **2–3 minutes**, then open **https://cmchen22.github.io/portfolio/** again (with your repo name).

### 3. Check that `index.html` is in the repo root

1. Go to **https://github.com/cmchen22/portfolio**.
2. On the main repo page you should see **`index.html`** in the file list (same level as README, not inside a folder).
3. If it’s inside a folder (e.g. `portfolio/index.html`), move it to the root: create a new file at root, paste the contents, delete the old one.

### 4. Check the Pages status

- In **Settings → Pages**, at the top you’ll see something like: *“Your site is published at https://cmchen22.github.io/portfolio/”*.
- If it says *“GitHub Pages is currently disabled”*, follow step 2 again and pick **Deploy from a branch** + **main** + **/ (root)**.

---

- **Page is blank or broken:** Make sure you uploaded `index.html` at the **root** of the repo (not inside a subfolder).

---

## Verification checklist (INFO 490 rubric)

After pushing changes:

1. **Build/preview locally:** Open `index.html` in a browser (or run a local server from the repo root) and confirm the page loads.
2. **Deploy:** Push to GitHub; wait 1–2 minutes for Pages to update.
3. **Live site:** Open **https://cmchen22.github.io/portfolio/** (or your repo name, e.g. …/Portfolio/ if the repo is capitalized).
4. **Project links:** Click each “View project →” link (Bookmarked, SoccerSim, Fantasy Football) and confirm you land on the correct section with no 404.
5. **Rubric labels:** On each project section, confirm these headings are visible: *Name of Project*, *Goals of Project*, *Your role in the project*, *Problem and/or opportunity*, *Your process and solution*, *Outcome and next steps*, *The takeaways*, *URL(s)*.
6. **URL(s):** Confirm each project has a working GitHub repo link (and add live demo / docs links in the content if you have them).
