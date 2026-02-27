# Dhruvin Barot — Portfolio

Personal portfolio site with animated bird cursor, feather-on-hover cards, drifting clouds, and a light techie aesthetic.

## 📁 File Structure

```
portfolio/
├── index.html   ← markup & SVG bird cursor
├── style.css    ← all styles, animations, tokens
├── script.js    ← bird cursor, feather system, clouds, typewriter
└── README.md
```

## 🚀 Local Development

**Option A — VS Code Live Server (recommended)**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

**Option B — Python**
```bash
python -m http.server 5500
# visit http://localhost:5500
```

## ☁️ Deploy to Vercel (one-click)

1. Push the folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repo — Vercel auto-detects it as a static site
4. Click **Deploy** — live in ~30 seconds

No build step. No config file needed.

## 🌐 Deploy to GitHub Pages

1. Push to GitHub
2. Repo → **Settings** → **Pages**
3. Source: `main` branch, `/ (root)`
4. Your site will be at `https://<username>.github.io/<repo-name>`

## ✏️ Customisation Cheatsheet

| What                  | Where                        |
|-----------------------|------------------------------|
| Name / bio            | `index.html` → `#about`      |
| Work experience       | `index.html` → `#experience` |
| Projects              | `index.html` → `#projects`   |
| Hackathons            | `index.html` → `#hackathons` |
| Certifications        | `index.html` → `#certifications` |
| Skills chips          | `index.html` → `#skills`     |
| Contact links         | `index.html` → `#contact`    |
| Colour tokens         | `style.css` → `:root`        |
| Bird flap speed       | `index.html` → `dur="0.40s"` on `animateTransform` |
| Cloud density         | `script.js` → initial loop count (`24`) and `setInterval` ms |
| Feather max per card  | `script.js` → `if (n >= 2)`  |
| Feather lifetime      | `script.js` → `9000` ms in `spawnFeather` |

## 🛠️ Tech Stack

- Vanilla HTML5 / CSS3 / JavaScript (ES6+)
- Google Fonts: Space Grotesk, JetBrains Mono, Inter
- SVG animations (SMIL `animateTransform` for bird wings)
- CSS custom properties, `backdrop-filter`, `IntersectionObserver`
- Zero dependencies — no build tooling required