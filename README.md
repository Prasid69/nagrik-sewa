# नागरिक सेवा — Nagrik Sewa
### Citizen Digital Services Portal · UX Design Case Study

> **Portfolio Project** by Prasoddha Aryal — UI/UX Designer  
> Submitted in consideration for the UI/UX Designer role at **Software Development And Operations Centre of Nepal (SDOC Nepal)**

---

## 🗂️ Project Overview

**Nagrik Sewa** is a citizen-facing digital services portal designed to help Nepali citizens access government services — from citizenship certificates to land records — without standing in queues or making multiple office visits.

This repository is a **complete UX design case study** demonstrating the full design process: research → information architecture → wireframes → interactive prototype → usability testing → developer handoff.

| | |
|---|---|
| **Project Type** | Government Digital Service Portal |
| **Platform** | Web (Mobile-first, Responsive) |
| **Languages** | Nepali (देवनागरी) + English |
| **Accessibility** | WCAG 2.1 AA compliant |
| **Duration** | 6 weeks (simulated sprint) |
| **Role** | Solo UX Designer |

---

## 🎯 The Problem

Nepal's citizens must visit multiple government offices, stand in long queues, and navigate complex paper-based processes to access even basic services like obtaining a citizenship certificate or checking land records. This results in:

- **High time cost** — Average 3–5 office visits per application
- **Low accessibility** — Rural citizens with limited mobility are disproportionately affected
- **Language barriers** — Limited Nepali-language digital interfaces
- **Low trust** — Opaque processes with no status visibility

---

## 🔍 Design Process

```
Research → Define → Ideate → Prototype → Test → Iterate → Handoff
```

| Phase | Deliverable | Location |
|-------|------------|----------|
| 1. User Research | Research Findings & Personas | [`docs/01-research-findings.md`](docs/01-research-findings.md) |
| 2. Information Architecture | User Flows & IA | [`docs/02-user-flows.md`](docs/02-user-flows.md) |
| 3. Design System | Component Specs | [`docs/03-design-specifications.md`](docs/03-design-specifications.md) |
| 4. Prototype | Interactive HTML/CSS/JS | [`prototype/index.html`](prototype/index.html) |
| 5. Usability Testing | Test Report & Findings | [`docs/04-usability-test-report.md`](docs/04-usability-test-report.md) |
| 6. Developer Handoff | Implementation Review | [`docs/05-implementation-review.md`](docs/05-implementation-review.md) |

---

## 🖥️ Prototype

**→ Open [`prototype/index.html`](prototype/index.html) in any browser — no server needed.**

The prototype works fully offline and demonstrates:

| Screen | What It Shows |
|--------|--------------|
| 🏠 **Home / Dashboard** | Navigation, search, service categories |
| 📋 **Service Catalog** | Filterable service grid |
| 📝 **Application Form** | 4-step multi-step form with all states |
| 📍 **Status Tracker** | Application status with timeline |
| 🧩 **Component Library** | All reusable UI components |

### Prototype Features
- ♿ **Accessibility controls** — Font size (S/M/L), High Contrast mode
- 🌐 **Language toggle** — Switch between English and Nepali (देवनागरी)
- 📱 **Fully responsive** — Works on 320px mobile to 1440px desktop
- ⌨️ **Keyboard navigable** — All interactions reachable by keyboard
- 🔋 **Low-bandwidth** — Zero external dependencies, works offline
- 💾 **Save Progress** — Form state saved to localStorage

---

## 📐 Design System Highlights

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#8B0000` | Primary actions, links |
| `--color-primary-light` | `#C0392B` | Hover states |
| `--color-accent` | `#D4A017` | Highlights, badges |
| `--color-success` | `#1E7E34` | Success states |
| `--color-warning` | `#856404` | Warning states |
| `--color-error` | `#721C24` | Error states |
| `--color-neutral-900` | `#1A1A1A` | Body text |

### Typography
- **Nepali text**: Noto Sans Devanagari → system fallback
- **English text**: System UI stack (Roboto → Arial → sans-serif)
- **Scale**: 12px → 14px → 16px → 20px → 24px → 32px → 48px

### Spacing
- **Base unit**: 4px
- **Scale**: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64px

---

## 👥 User Research Summary

Three primary personas were defined through research:

| Persona | Profile | Key Need |
|---------|---------|----------|
| **Ram Bahadur** | 45, rural farmer, low digital literacy | Simple, Nepali-language, mobile-first |
| **Sita Tamang** | 28, urban professional, tech-savvy | Fast, efficient, reliable status tracking |
| **Govinda Adhikari** | 60, retired official, moderate literacy | Clear language, accessible text size |

**See full research:** [`docs/01-research-findings.md`](docs/01-research-findings.md)

---

## ♿ Accessibility Approach

This design meets **WCAG 2.1 Level AA** standards:

- ✅ Minimum 4.5:1 contrast ratio for all text
- ✅ All interactive elements keyboard accessible
- ✅ ARIA labels on all icons and complex widgets
- ✅ Screen reader tested (NVDA + Chrome)
- ✅ Font size adjustable (user preference preserved)
- ✅ High contrast mode available
- ✅ Focus indicators always visible
- ✅ No reliance on color alone for state communication
- ✅ Skip-to-main-content link
- ✅ Form errors announced via `aria-live` regions

---

## 🌏 Multilingual & Low-Bandwidth

- All UI strings available in both **Nepali** and **English**
- Language preference stored in `localStorage`
- **Zero external fonts** — uses `@font-face` local stack
- **No CDN dependencies** — fully offline-capable
- CSS respects `prefers-reduced-motion`
- Images replaced with inline SVG

---

## 📊 Usability Test Results

| Metric | Result | Target |
|--------|--------|--------|
| Task Completion Rate | 87.5% | >80% |
| Average SUS Score | 78.3 / 100 | >70 |
| Mean Time on Task (Form) | 4m 12s | <5m |
| Critical Issues Found | 2 | 0 |
| Issues Resolved Before Handoff | 100% | 100% |

**See full report:** [`docs/04-usability-test-report.md`](docs/04-usability-test-report.md)

---

## 📁 Repository Structure

```
nagrik-sewa/
├── README.md                          ← This file
├── prototype/
│   ├── index.html                     ← Main interactive prototype
│   ├── styles/
│   │   ├── main.css                   ← Global layout & theme
│   │   ├── components.css             ← Reusable component styles
│   │   └── accessibility.css         ← A11y overrides & high contrast
│   └── js/
│       ├── main.js                    ← App logic & interactivity
│       └── prototype-nav.js          ← Page/screen routing
├── docs/
│   ├── 01-research-findings.md        ← User research & personas
│   ├── 02-user-flows.md              ← IA & user flow documentation
│   ├── 03-design-specifications.md   ← Design system & component specs
│   ├── 04-usability-test-report.md   ← Usability test findings
│   └── 05-implementation-review.md   ← Developer handoff & review
└── wireframes/
    └── README.md                      ← Wireframe descriptions & links
```

---

## 🛠️ How to Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/nagrik-sewa.git

# Open the prototype
cd nagrik-sewa/prototype
# Double-click index.html OR:
start index.html   # Windows
open index.html    # macOS
```

**No build step, no npm install, no server required.** Open `prototype/index.html` directly.

---

## 🎓 Skills Demonstrated

| SDOC Requirement | Demonstrated In |
|---|---|
| User research & service journeys | `docs/01-research-findings.md` |
| Information architecture & user flows | `docs/02-user-flows.md` |
| Wireframes & interactive prototypes | `prototype/index.html` |
| Responsive interfaces & components | `prototype/styles/components.css` |
| Form states, errors & feedback | Prototype — Application Form screen |
| Accessibility & low-bandwidth design | `prototype/styles/accessibility.css` |
| Nepali/multilingual presentation | Language toggle in prototype |
| Usability testing & findings | `docs/04-usability-test-report.md` |
| Developer specs & review | `docs/03-design-specifications.md`, `docs/05-implementation-review.md` |

---

## 📬 Contact

**Prasoddha Aryal**  
UI/UX Designer  
📧 your.email@example.com  
🔗 [Portfolio](#) · [LinkedIn](#)

---

<p align="center">
  <em>Designed with ❤️ for Nepal's citizens</em><br>
  <strong>नागरिक सेवा — नागरिककै लागि</strong><br>
  <em>(Citizen Service — For the Citizens)</em>
</p>

