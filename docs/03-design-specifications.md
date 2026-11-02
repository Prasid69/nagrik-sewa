# 03 — Design Specifications & Component Library (डिजाइन विशिष्टीकरण)
### Nagrik Sewa (नागरिक सेवा) · Design System & Specifications v1.0
**Author:** Prasoddha Aryal — UI/UX Designer  
**Scope:** Government of Nepal Digital Public Services Standard (SDOC Nepal Alignment)  
**WCAG Compliance:** WCAG 2.1 Level AA Compliant  

---

## 1. Design Principles & Governance

1. **Inclusive by Default (समावेशी डिजाइन)**  
   Interfaces must cater to all 77 districts, addressing users with varying digital literacy levels, low-cost Android smartphones, and multilingual needs (Devanagari script + English).

2. **Bandwidth Resilient & Offline Graceful (न्यूनतम ब्यान्डविथ अनुकूल)**  
   Assets must minimize payload size (<150KB initial render). Native CSS geometries, SVGs, and system font fallbacks ensure seamless operation across 2G/3G rural networks.

3. **Trust & Institutional Dignity (विश्वसनीयता र सरकारी पहिचान)**  
   Civic color harmonies inspired by Nepal’s national symbols (Crimson `#8B0000`, Deep Gold `#D4A017`, and Slate `#1A1A1A`) establishing official authenticity and legitimacy.

4. **Progressive Disclosure & Clear Affordance (क्रमिक प्रकटीकरण)**  
   Complex administrative procedures (e.g., citizenship certification, land surveys) are modularized into intuitive multi-step flows with persistent contextual feedback.

---

## 2. Design Tokens & Visual Architecture

### 2.1 Color Tokens & Contrast Ratios

All foreground/background combinations exceed the WCAG 2.1 AA requirement of **4.5:1** for regular text and **3:1** for large elements/controls.

| Token Name | Hex Code | Purpose | Contrast Ratio vs White |
|---|---|---|---|
| `--color-primary` | `#8B0000` | Nepal Crimson; Primary actions, active headers | **8.1:1** (Pass AAA) |
| `--color-primary-light` | `#C0392B` | Hover & active state accents | **4.9:1** (Pass AA) |
| `--color-primary-dark` | `#5A0000` | Pressed states, high-contrast borders | **12.4:1** (Pass AAA) |
| `--color-accent` | `#D4A017` | Heritage Gold; Highlights, alerts, focus rings | **2.2:1** (Used on dark backgrounds or non-text borders) |
| `--color-neutral-900` | `#1A1A1A` | Primary typography & headings | **17.2:1** (Pass AAA) |
| `--color-neutral-700` | `#3D3D3D` | Secondary body text & form labels | **10.5:1** (Pass AAA) |
| `--color-neutral-500` | `#767676` | Hints, placeholders, disabled indicators | **4.54:1** (Pass AA) |
| `--color-neutral-200` | `#E8E8E8` | Component borders & dividers | Subtle container isolation |
| `--color-success` | `#1E7E34` | Approved statuses, completed checks | **5.2:1** (Pass AA) |
| `--color-warning` | `#856404` | Pending verification, action required | **6.1:1** (Pass AA) |
| `--color-error` | `#721C24` | Form errors, validation blocks | **8.6:1** (Pass AAA) |

---

### 2.2 Typography Scale

- **Primary Font Family:** `'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Nepali (Devanagari) Family:** `'Noto Sans Devanagari', 'Mangal', sans-serif`
- **Monospace (Reference/ID tokens):** `'Cascadia Code', 'Consolas', monospace`

| Scale Token | Font Size (rem / px) | Line Height | Weight | Applied Usage |
|---|---|---|---|---|
| `--font-size-xs` | `0.75rem` (12px) | 1.4 | 500 / Medium | Badges, timestamps, legal footnotes |
| `--font-size-sm` | `0.875rem` (14px) | 1.5 | 400 / 600 | Form labels, helper hints, sub-nav |
| `--font-size-base` | `1.00rem` (16px) | 1.6 | 400 / Regular | Default body copy, form inputs |
| `--font-size-md` | `1.125rem` (18px) | 1.5 | 600 / Semibold | Subheadings, card titles |
| `--font-size-lg` | `1.25rem` (20px) | 1.4 | 600 / Semibold | Modal titles, form step headings |
| `--font-size-xl` | `1.50rem` (24px) | 1.3 | 700 / Bold | Section titles, dashboard cards |
| `--font-size-2xl` | `2.00rem` (32px) | 1.25 | 700 / Bold | Category banners, stat callouts |
| `--font-size-3xl` | `2.50rem` (40px) | 1.2 | 700 / Bold | Hero section primary heading |

---

### 2.3 4px Grid Spacing System

All components, form margins, padding, and layout wrappers conform to an incremental 4px spacing model:
- `var(--space-1)`: **4px** (Micro-spacing, icon-to-label gaps)
- `var(--space-2)`: **8px** (Input padding internal vertical, badge margins)
- `var(--space-3)`: **12px** (Standard grouping, list item gaps)
- `var(--space-4)`: **16px** (Component padding, button horizontal padding)
- `var(--space-6)`: **24px** (Card inner padding, form field vertical separation)
- `var(--space-8)`: **32px** (Section internal margins, layout dividers)
- `var(--space-12)`: **48px** (Section vertical gutters on tablet/mobile)
- `var(--space-16)`: **64px** (Desktop page level padding)

---

## 3. Component Anatomy & State Definitions

### 3.1 Buttons (`.btn`)
- **Minimum Target Size:** `44px` height (meets WCAG 2.5.5 touch target size).
- **Focus Indicator:** 3px solid `--color-primary` offset by 2px (`:focus-visible`).
- **Variants:**
  - **Primary (`.btn--primary`):** Solid crimson background, white text. Primary call to action.
  - **Secondary (`.btn--secondary`):** Transparent background, 2px crimson outline. Secondary actions.
  - **Ghost (`.btn--ghost`):** Borderless or neutral border; subtle hover treatment.
  - **Danger (`.btn--danger`):** Red background for irreversible operations (cancellation, document deletion).
- **States:** Default, Hover, Active, Focus-Visible, Disabled (`opacity: 0.5`, `aria-disabled="true"`).

### 3.2 Form Inputs (`.form-input`, `.form-select`)
- **Height & Touch Geometry:** Minimum `48px` input box height for easy thumb tap on low-cost touch devices.
- **Labeling Standard:** All inputs paired via explicit `<label for="...">` linking.
- **States:**
  - **Default:** Neutral border (`#D0D0D0`).
  - **Focus:** 2px solid crimson border + box shadow (`rgba(139, 0, 0, 0.2)`).
  - **Error (`.form-input--error`):** Crimson border, red background tint, paired with `<p class="form-error" role="alert">`.
  - **Success (`.form-input--success`):** Emerald border, green check confirmation icon.
  - **Disabled:** Background `#F5F5F5`, cursor not-allowed.

### 3.3 Status Badges (`.badge`)
- Color is never used as the single signifier. Badges include text descriptors and distinctive glyph indicators.
- **Approved / सम्पन्न:** Green pill (`.badge--success`)
- **Pending / समीक्षाधीन:** Amber pill (`.badge--warning`)
- **Rejected / अस्वीकृत:** Red pill (`.badge--danger`)
- **Under Review / प्रमाणीकरण:** Cyan/Info pill (`.badge--info`)

---

## 4. Accessibility & Multilingual Implementation Specs

### 4.1 Accessibility Standards (WCAG 2.1 AA)
- **Skip Links:** Primary anchor at the very top of HTML targeting `#main-content`.
- **High-Contrast Mode:** Toggled via CSS variable overrides (`.high-contrast`) forcing pure black `#000000`, white `#FFFFFF`, and high-visibility yellow `#FFD700` focus outlines.
- **Text Scaling:** Scalable root font size (`14px`, `16px`, `19px`) responding to direct header controls without horizontal page overflow.
- **Keyboard Navigation Order:** Natural DOM progression without negative `tabindex`. Modals and drawers capture keyboard focus loops.

### 4.2 Multilingual Handling (Devanagari + English)
- Standard bilingual field titles: `Full Name (नाम थर) *`.
- Error messages dynamically adapt based on active language toggle:
  - English: `This field is required.`
  - Nepali: `यो फिल्ड आवश्यक छ।`
- Devanagari line-height adjusted to **1.6–1.8** to prevent matra/vowel sign clipping (मात्रा नकाटिने गरी लाइन उचाइ व्यवस्थापन).

