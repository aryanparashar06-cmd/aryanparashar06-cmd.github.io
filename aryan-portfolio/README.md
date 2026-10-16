# Aryan Parashar — Portfolio Website

A modern, responsive one-page portfolio for a second-year B.Tech CSE student, built with **HTML, CSS, and vanilla JavaScript**. No framework, API key, backend, or paid hosting is required.

## Included

- `index.html` — all text and sections (about, projects, skills, journey, contact)
- `styles.css` — colors, typography, layout, responsive behavior, animations
- `script.js` — accessible mobile menu, dark/light theme toggle, project filters, scroll reveals
- `favicon.svg` — small logo used in the browser tab

## Preview locally

**Fastest:** double-click `index.html` to open it in your browser.

**Recommended:** open this folder in VS Code, install the *Live Server* extension, then right-click `index.html` → **Open with Live Server**.

Alternatively, if Python is available:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Publish for free with GitHub Pages

1. Create a new public GitHub repository named **`aryanparashar06-cmd.github.io`** (for a homepage URL), or `portfolio` (for a project-style URL).
2. Upload these files to the root of the repository.
3. Go to **Settings → Pages → Build and deployment**.
4. Select **Deploy from a branch**, choose branch **main** and folder **/(root)**, then save.
5. Your URL will be `https://aryanparashar06-cmd.github.io/` for the first name or `https://aryanparashar06-cmd.github.io/portfolio/` for the second, after Pages publishes the site.

The site uses only relative local file references and works under either URL format.

## Personalize in 5 minutes

- **Name, bio and college:** find `Hey there, I'm Aryan` in `index.html`; update the hero and About sections.
- **Projects:** find `PROJECT 01` and `PROJECT 02`; update the headings, descriptions, technology tags and repo links. Add additional project cards when you have more work to showcase.
- **Social links:** search in `index.html` for `github.com/aryanparashar06-cmd`, `linkedin.com/in/aryan-parashar-023370362/`, and `leetcode.com/u/AryanParashar2113/`.
- **Colors:** edit the custom properties inside `:root` and `[data-theme="light"]` at the top of `styles.css`.
- **Resume:** after creating a PDF, put it in this folder, and add an anchor like `<a href="resume.pdf" download>Download resume</a>` in the hero or contact section. (No resume download button is included until you actually add a file.)
- **Email:** add your email using a `mailto:` link if you want recruiters to contact you directly. No email address is invented here.

## Content verification notes (October 16, 2026)

- GitHub currently shows the public `freelance-escrow` and `ieee-ras-website` repositories. `smart-urban-logistics-engine` is currently empty, so it was intentionally **not** featured.
- The escrow repo describes a university project using Solidity, Hardhat, React and MetaMask. It does **not** claim a professional security audit, decentralized arbitration, or mainnet deployment.
- The IEEE RAS website README describes it as a **student club recruitment concept**, not the official IEEE RAS website.
- The provided LeetCode profile shows Java, C and MySQL solutions and a 2026 100 Days badge. We show **200+ solved**, rather than a brittle exact total.
- LinkedIn blocked public profile scraping; its URL is included as provided, but unverified career claims were not invented.
- College name **VIT Chennai** is based on the academic information previously shared. Check it before publishing.

## Accessibility / engineering

Semantic headings and sections; keyboard-friendly controls; an accessible expandable menu; aria-pressed on project filters; visible focus styles; reduced-motion support; responsive layouts; no third-party JavaScript.
