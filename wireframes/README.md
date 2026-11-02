# Wireframes

This directory documents the wireframe phase of the Nagrik Sewa design process.

## Wireframe Approach

Wireframes were created at **low fidelity** first (paper sketches → digital grayscale), then evolved to **mid-fidelity** before moving to the interactive prototype. This document captures the key wireframe decisions and screen structures.

---

## Screen Inventory

| # | Screen | Fidelity | Status |
|---|--------|----------|--------|
| 1 | Home / Dashboard | Mid-fi | ✅ Prototyped |
| 2 | Service Catalog | Mid-fi | ✅ Prototyped |
| 3 | Application Form — Step 1: Personal Info | Mid-fi | ✅ Prototyped |
| 4 | Application Form — Step 2: Family Details | Mid-fi | ✅ Prototyped |
| 5 | Application Form — Step 3: Document Upload | Mid-fi | ✅ Prototyped |
| 6 | Application Form — Step 4: Review & Submit | Mid-fi | ✅ Prototyped |
| 7 | Application Status Tracker | Mid-fi | ✅ Prototyped |
| 8 | Component Library | Mid-fi | ✅ Prototyped |
| 9 | Login / Register | Lo-fi | 🔄 Iteration 2 |
| 10 | My Applications Dashboard | Lo-fi | 🔄 Iteration 2 |
| 11 | Service Detail Page | Lo-fi | 🔄 Iteration 2 |

---

## Screen Wireframe Annotations

### 1. Home / Dashboard

```
┌─────────────────────────────────────────────────────┐
│ [LOGO] नागरिक सेवा        [EN|NP] [A+] [Login]     │  ← Header / Nav
├─────────────────────────────────────────────────────┤
│                                                     │
│   Your Government Services, Digitally.              │  ← Hero
│   सरकारी सेवाहरू, डिजिटल रूपमा।                    │
│                                                     │
│   [ 🔍 Search for a service...              ]       │  ← Search
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Popular Services                                   │  ← Services Grid
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│  │  👤  │ │  📘  │ │  🏡  │ │  💼  │ │  🏥  │    │
│  │ Citi-│ │Pass- │ │ Land │ │ Tax  │ │Hlth  │    │
│  │ zens │ │ port │ │ Rec. │ │      │ │      │    │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘    │
│                                                     │
├─────────────────────────────────────────────────────┤
│  Announcements          │   Quick Stats             │  ← Info strips
│  • Notice 1             │   12,450 applications     │
│  • Notice 2             │   today                   │
└─────────────────────────────────────────────────────┘
```

**Key Decisions:**
- Language toggle placed top-right, always visible — validated in usability testing
- Search is primary entry point (not category browse) based on research finding that users know what they need but don't know the department
- 5-card grid chosen over list to reduce vertical scrolling on mobile

---

### 3–6. Application Form (Multi-step)

```
┌─────────────────────────────────────────────────────┐
│  Step 1 of 4: Personal Information                  │
│  ●─────────○─────────○─────────○                   │  ← Progress bar
│  Personal  Family   Upload   Review                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Full Name (नाम थर) *                               │
│  ┌───────────────────────────────────────────────┐  │
│  │ Enter your full name as per citizenship       │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  Date of Birth *        Gender *                    │
│  ┌──────────────┐       ┌──────────────────────┐   │
│  │ DD/MM/YYYY   │       │ Select...         ▾  │   │
│  └──────────────┘       └──────────────────────┘   │
│                                                     │
│  ⚠️ Full Name is required / पूरा नाम आवश्यक छ      │  ← Error state
│                                                     │
│              [ Save Draft ]  [ Next → ]             │
└─────────────────────────────────────────────────────┘
```

**Key Decisions:**
- Progress indicator uses both position (●○○○) and text label — avoids color-only cues
- Error messages shown in both languages — covers bilingual users
- "Save Draft" always visible — addresses fear of data loss (key research finding)
- Date picker uses text input with format hint instead of calendar widget — better for screen readers and keyboard users

---

### 7. Status Tracker

```
┌─────────────────────────────────────────────────────┐
│  Track Your Application                             │
│                                                     │
│  Application ID / NID Number                        │
│  ┌──────────────────────────────────┐ [ Track ]    │
│  │ Enter your application number   │               │
│  └──────────────────────────────────┘               │
├─────────────────────────────────────────────────────┤
│  Application #APP-2024-001234                       │
│  Citizenship Certificate · Submitted 15 Oct 2024    │
│                                                     │
│  ✅ Submitted          Oct 15, 2024                 │
│  │                                                  │
│  ✅ Under Review       Oct 17, 2024                 │
│  │                                                  │
│  🔵 Verification       In Progress                  │
│  │                                                  │
│  ○  Approved/Rejected  Pending                      │
│                                                     │
│              [ Download Certificate (disabled) ]    │
└─────────────────────────────────────────────────────┘
```

**Key Decisions:**
- Status communicated via icon + text + color (not color alone) — WCAG 1.4.1
- Download disabled until approval — prevents user confusion
- Application summary always visible — provides context without user needing to remember

---

## Wireframe Iteration Log

| Version | Change Made | Reason |
|---------|-------------|--------|
| v1.0 | Category-first home page | Initial assumption |
| v1.1 | Added search as primary | Research: users think in task, not department |
| v1.2 | Moved language toggle to header | Low discoverability in footer |
| v2.0 | Added Save Draft button | Usability test: users feared losing data |
| v2.1 | Added bilingual error messages | Usability test: Nepali-first users missed English-only errors |
| v2.2 | Added progress text labels under step dots | Usability test: step indicators alone were unclear |
| v3.0 | Increased touch target sizes to 48px min | Accessibility audit finding |

---

## Mobile Wireframe Notes

On screens ≤ 768px:
- Navigation collapses to hamburger menu
- Service grid becomes 2-column
- Form labels stack above inputs (not inline)
- Step progress bar shows current step only ("Step 1 of 4")
- Footer links collapse into accordion

---

## Tools Used

- **Initial sketches**: Paper and pen
- **Digital wireframes**: Figma (low-fi → mid-fi)
- **Interactive prototype**: HTML/CSS/JS (see `prototype/index.html`)
- **Annotations**: This document

---

*See [`prototype/index.html`](../prototype/index.html) for the interactive high-fidelity prototype.*

