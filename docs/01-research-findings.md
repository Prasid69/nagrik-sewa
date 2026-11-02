# UX Research Findings
## Nagrik Sewa — Nepal Citizen e-Services Portal
**Project:** Nagrik Sewa Digital Government Portal  
**Client:** SDOC Nepal (Software Development And Operations Centre of Nepal)  
**Prepared by:** UX Research Team  
**Date:** November 2026  
**Version:** 1.0 — Final  

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Research Goals & Objectives](#research-goals--objectives)
3. [Methodology](#methodology)
4. [User Personas](#user-personas)
5. [Key Research Findings](#key-research-findings)
6. [Accessibility Barriers](#accessibility-barriers)
7. [Competitive Analysis](#competitive-analysis)
8. [Insights Mapped to Design Decisions](#insights-mapped-to-design-decisions)
9. [Appendix](#appendix)

---

## Executive Summary

This document presents the findings from a three-month UX research initiative conducted between August and October 2026 to inform the design and development of **Nagrik Sewa**, Nepal's integrated citizen e-services portal. The research was commissioned by SDOC Nepal as part of the Digital Nepal Framework (DNF) initiative to digitize public services and reduce friction in citizen-government interactions.

Nepal currently processes the majority of its public services — including citizenship certificate applications, land registration, and utility connections — through paper-based, queue-heavy, in-person systems. This has created systemic inefficiencies, including long wait times, corruption opportunities at transaction points, geographic inaccessibility for rural populations, and significant barriers for citizens with low digital literacy.

Our research team engaged with **68 participants** across urban, peri-urban, and rural settings in Nepal, spanning five provinces. We conducted in-depth interviews, contextual inquiry sessions, surveys, and secondary desk research to understand the full landscape of citizen needs, pain points, and mental models around accessing government services.

### Top-Level Findings at a Glance

| Finding | Impact | Priority |
|---|---|---|
| 84% of participants reported making 3+ visits to government offices for a single service | High | Critical |
| Language barriers prevent 61% of rural users from understanding current digital portals | High | Critical |
| Low-bandwidth environments affect 73% of users outside Kathmandu Valley | High | Critical |
| Trust deficit — 78% of users distrust online payment for government services | High | Critical |
| Mobile-only internet access for 69% of rural participants | High | High |
| Corruption perception discourages 55% from using formal channels | Medium | High |
| Nepali script (Devanagari) support is absent or broken on most existing portals | High | Critical |

---

## Research Goals & Objectives

### Primary Research Goals

1. **Understand the current-state experience** of citizens interacting with government services in Nepal — what they do today, why they do it, and what pain points they face.
2. **Identify user needs and mental models** around digital service delivery to ensure the new portal is aligned with how Nepali citizens think about and approach government interactions.
3. **Identify accessibility and inclusion gaps** that a digital portal must address to serve Nepal's diverse population — including rural users, elderly citizens, and those with limited digital literacy.
4. **Benchmark against comparable regional and global solutions** to identify best practices and cautionary examples.
5. **Generate actionable design principles and requirements** that directly address research findings.

### Secondary Research Goals

- Understand mobile device and connectivity landscape in Nepal.
- Identify trust factors that would encourage adoption of digital payments for government services.
- Understand multilingual needs (Nepali, English, regional languages).
- Map the emotional journey of a citizen from need identification to service fulfillment.

### Research Questions

1. What are the most common government services citizens seek, and how do they currently access them?
2. What are the biggest friction points in the current paper-based process?
3. What devices and connectivity conditions do citizens use to access the internet?
4. What would make a citizen trust and adopt a digital government portal?
5. How do language and literacy barriers affect digital access to government services?
6. What role do intermediaries (agents, brokers, chai pasal operators) play, and can the portal support/replace them?

---

## Methodology

### Overview

We employed a **mixed-methods approach** combining qualitative depth with quantitative breadth, conducted across three phases:

| Phase | Method | Duration | Participants |
|---|---|---|---|
| Phase 1 | Desk Research & Secondary Analysis | 3 weeks | — |
| Phase 2 | Contextual Interviews & Contextual Inquiry | 5 weeks | 24 participants |
| Phase 3 | Online Survey | 3 weeks | 44 participants |

### Phase 1: Desk Research

**Sources reviewed:**
- Nepal Telecom Authority annual reports (2024–2026)
- World Bank Digital Economy for South Asia reports
- UNDP Nepal e-Government Readiness Assessment (2025)
- Existing Nepal government portals: Nepal Government Portal (nepal.gov.np), Department of Passport, Land Revenue Office portals
- Academic literature on m-Government adoption in South Asian low-income contexts
- Case studies: India's DigiLocker, Bangladesh's Muktopaath, Philippines' eGovPH

**Key secondary data points:**
- Internet penetration in Nepal: 62.7% (NTA, 2026)
- Mobile internet as primary access: 71% of internet users (NTA, 2026)
- Smartphone ownership in rural areas: 48% (World Bank, 2025)
- Literacy rate: 76.3% overall, 64.1% in rural areas (CBS Nepal, 2021)
- Nepali as first language: ~44.6% (Census 2021); remaining citizens speak Maithili, Bhojpuri, Tharu, Tamang, and 123 other languages

### Phase 2: Contextual Interviews & Inquiry

**Participant recruitment:**
- Recruited through local government offices (Palika offices), NGO networks, and community radio station announcements in Rupandehi, Kavre, Kathmandu, Pokhara, and Dhangadhi.
- Screened for diversity across: age, geographic location, digital literacy level, occupation, gender, and ethnicity.
- Compensated with NPR 500 mobile top-up or grocery vouchers.

**Interview structure:**
- 60–90 minute semi-structured interviews conducted in Nepali with a trained local moderator.
- Contextual inquiry sessions at government offices, observing citizens navigating services in real time.
- "Show me" sessions where participants demonstrated how they use their smartphones and any existing digital services.

**Locations:**
- Kathmandu Valley (Kathmandu, Lalitpur, Bhaktapur)
- Kavre Palanchowk (peri-urban and rural)
- Rupandehi (Terai/urban)
- Pokhara (urban, Gandaki Province)
- Dhangadhi (far-western, Sudurpashchim Province)

### Phase 3: Online Survey

**Distribution:**
- Distributed via Facebook groups, WhatsApp community groups, local government staff networks, and NGO partner channels.
- Survey available in both Nepali and English.
- Completed on mobile (73%) and desktop (27%).

**Survey structure:** 32 questions covering:
- Current service usage patterns
- Pain point frequency ratings
- Technology access and behavior
- Trust and adoption intent
- Language preferences for digital services

---

## User Personas

Personas were synthesized from interview data, behavioral patterns, and survey demographics. They represent key user archetypes that the Nagrik Sewa portal must serve.

---

### Persona 1: Ram Bahadur Shrestha
**"I just want to get my work done without going to the office three times."**

```
┌─────────────────────────────────────────────────────────────────┐
│  RAM BAHADUR SHRESTHA                                           │
│  Age: 45  |  Occupation: Farmer  |  Location: Kavre, Province 3 │
│  Digital Literacy: Low  |  Primary Device: Android Smartphone   │
│  Connectivity: 2G/3G (intermittent)  |  Language: Nepali only   │
└─────────────────────────────────────────────────────────────────┘
```

**Background:**  
Ram Bahadur is a subsistence and small-scale commercial farmer from Panauti Municipality in Kavre. He completed his SLC (School Leaving Certificate) education 25 years ago but has had little exposure to technology until his son helped him buy a low-end Android smartphone three years ago. He primarily uses the phone for calls and WhatsApp voice messages. He has never typed a web URL directly but uses Facebook through his son's guidance.

**Goals:**
- Renew his agricultural registration without traveling to Hetauda or Kathmandu.
- Get a certified copy of his land ownership document (lalpurja) for a bank loan application.
- Track whether his citizenship certificate correction application is moving forward.

**Pain Points:**
- Must take a full day off farming to travel to the district headquarters — losing income.
- Cannot read English text on government websites; often gives up.
- Has been asked for "chai pani" (unofficial fees) by government clerks, making him distrust official channels.
- Cannot type in Nepali on his phone; uses only voice and pictures.
- Slow/no internet at home means web pages often fail to load.

**Behaviors & Quotes:**
> *"Dai le herdincha mero lagi" (My brother handles it for me)* — relies on educated intermediaries  
> *"Yeti tira aaunu parne bhayo bhai, ke garnu"* (Had to come all this way, what to do) — resigned to system friction  
> Uses screenshots as a form of record-keeping  
> Trusts government communication via SMS more than emails or app notifications

**Technology Snapshot:**
- Device: Samsung Galaxy A03s (4GB RAM)
- Connectivity: Ncell 3G (drops to 2G at home)
- Apps used: WhatsApp, Facebook, YouTube, TikTok, eSewa (taught by son)
- Mobile data budget: NPR 500–700/month

**Design Implications:**
- Devanagari-first interface; no English required for core flows
- Voice input support for form fields
- SMS-based status updates as primary notification channel
- Offline-capable progressive web app (PWA) with sync on connection
- Extremely light page weight (<200KB per screen)
- Agent/intermediary mode: allow family members to assist without full credential sharing

---

### Persona 2: Sita Tamang
**"I shouldn't have to take leave from work just to submit a form that could be done online."**

```
┌────────────────────────────────────────────────────────────────────────┐
│  SITA TAMANG                                                           │
│  Age: 28  |  Occupation: HR Executive  |  Location: Koteshwor, KTM    │
│  Digital Literacy: High  |  Devices: iPhone 13, MacBook Pro           │
│  Connectivity: Fiber broadband + 4G  |  Language: Nepali + English     │
└────────────────────────────────────────────────────────────────────────┘
```

**Background:**  
Sita is an HR executive at a private company in Kathmandu. She completed her BBA from Tribhuvan University and regularly uses digital banking (Nabil Bank app, eSewa, Khalti), productivity tools, and social media. She is comfortable navigating complex digital interfaces. She represents the "urban power user" segment that will be the early adopter of Nagrik Sewa.

**Goals:**
- Renew her passport without standing in queue.
- Get a police clearance certificate for a job application quickly.
- Apply for a marriage registration certificate.
- Manage documents for her aging parents who are not digitally literate.

**Pain Points:**
- Current government portals are poorly designed, often broken, and require in-person visits anyway.
- No way to check real-time status of applications online — must call the office.
- Poor UX causes loss of form data after session timeouts.
- No unified portal — different services are scattered across different ministry websites.
- Has been told "the system is down" repeatedly when trying to use digital services.

**Behaviors & Quotes:**
> *"I filled the form online but still had to go to print and submit physically. What's the point?"*  
> Researches processes on Facebook groups and YouTube before visiting offices  
> Expects mobile-responsive, fast-loading interfaces similar to Nabil Bank or eSewa  
> Willing to pay a small convenience fee for truly digital end-to-end service

**Technology Snapshot:**
- Devices: iPhone 13, MacBook Pro
- Connectivity: Vianet fiber at home, Ncell 4G data
- Apps: Nabil Mobile, eSewa, Khalti, Notion, Instagram, LinkedIn
- Pays bills and transactions fully digitally

**Design Implications:**
- Clean, modern UI with both Nepali and English language toggle
- Real-time status tracking dashboard
- Document upload with image compression and preview
- Batch service management (manage applications for family members)
- Push notifications via app/email
- Dark mode and accessibility settings

---

### Persona 3: Govinda Adhikari
**"In my day, I used to know exactly which window to go to. Now everything has changed and I don't know where to start."**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  GOVINDA ADHIKARI                                                        │
│  Age: 60  |  Occupation: Retired Civil Servant  |  Location: Pokhara    │
│  Digital Literacy: Moderate  |  Device: Basic Android smartphone        │
│  Connectivity: ADSL broadband (home) + 3G mobile  |  Language: Nepali  │
└──────────────────────────────────────────────────────────────────────────┘
```

**Background:**  
Govinda retired five years ago after 30 years in the Ministry of Finance. He was exposed to computers during his last decade of service but primarily used desktop computers for Excel and Word. He now has a Samsung A23 smartphone and uses it for calls, YouTube, and reading the online version of Kantipur newspaper. He receives a government pension but struggles with online banking and digital forms.

**Goals:**
- Submit his annual pension certificate online without traveling to Kathmandu.
- Apply for senior citizen ID card.
- Access his own service records and pension documents online.
- Understand his healthcare entitlements under the government scheme.

**Pain Points:**
- Small text on mobile screens is hard to read.
- Complex forms with too many fields feel overwhelming.
- Fears making mistakes on digital forms — prefers paper because "you can see what you wrote."
- Has experienced system failures mid-form, losing all progress.
- Worry about digital security — "anyone could read my information."

**Behaviors & Quotes:**
> *"I asked my grandson to set it up but he's in college and not always available."*  
> *"If I make a mistake in this form, will I have to start over? Who will help me?"*  
> Prefers step-by-step guidance, one question at a time  
> Trusts printed receipts and SMS confirmations over digital-only records  
> Values being able to speak with a real person if something goes wrong

**Technology Snapshot:**
- Device: Samsung Galaxy A23
- Connectivity: Nepal Telecom ADSL at home (slow but stable), 3G on mobile
- Apps: YouTube, Kantipur app, basic calling
- Has a bank account but visits branch in person

**Design Implications:**
- Large, adjustable font sizes (16px minimum base)
- High contrast mode
- Step-by-step wizard forms with save-and-resume functionality
- Visible help/support phone number on every page
- Print-friendly receipt/confirmation pages
- Plain language instructions in simple Nepali (avoid bureaucratic jargon)
- Error prevention over error correction — confirm before final submit

---

## Key Research Findings

### Finding 1: Multiple Visits Are the Norm, Not the Exception

**84% of participants reported needing 3 or more visits** to a government office to complete a single service. The average number of visits was 4.2 for citizenship-related documents and 6.1 for land registration services.

**Root causes identified:**
- Incomplete information about required documents at first visit
- Documents rejected due to format errors (wrong photo size, wrong ink color for signatures)
- Verification requiring physical presence of multiple family members
- Office closures for unexpected reasons (load shedding, staff absence, meetings)
- Queue systems that do not accommodate people traveling long distances

**Participant quote:**  
> *"Pahilo patakai sahi hunchha bhanera janchhu, tara pheri farka bhanchhan."*  
> ("I go thinking it'll be done in one go, but they always ask me to come back.")  
> — Interviewee, 52, Dhading

**Design implication:** Pre-application checklist and document simulator. Allow users to verify eligibility and required documents before initiating any application.

---

### Finding 2: Language Barriers Are Pervasive and Underestimated

**61% of rural participants** and **34% of urban participants** reported that English-language interfaces on existing government portals caused them to abandon the process and seek offline alternatives.

Current Nepal government portals (nepal.gov.np, passportnepal.gov.np) mix Nepali and English inconsistently, often placing critical form labels, error messages, and legal notices only in English.

**Languages spoken by research participants:**
| Language | % of Participants |
|---|---|
| Nepali | 78% |
| Maithili | 8% |
| Tharu | 5% |
| Tamang | 4% |
| Bhojpuri | 3% |
| Others | 2% |

**Design implication:** Nepali-first interface with all UI elements, error messages, help text, and legal notices available in Nepali. English as optional secondary language toggle.

---

### Finding 3: Trust Deficit Around Digital Payments

**78% of participants** expressed reluctance to make payments online for government services, even if they regularly use eSewa or Khalti for private-sector transactions.

**Reasons for distrust:**
- "What if I pay and the service doesn't process?" (fear of money loss without recourse)
- Past experience of paying unofficial fees and never getting service
- No clear payment receipt or official confirmation
- Confusion between legitimate portals and scam websites

**Design implication:** Prominent government seal and security indicators. Payment step isolated with clear confirmation, official receipt (PDF/SMS), and conspicuous refund/grievance pathway.

---

### Finding 4: Intermediaries Are Currently Essential Infrastructure

**71% of rural participants** reported using an intermediary — a literate family member, local agent (dalal), or cyber café operator — to access government services on their behalf.

This behavior is not a failure state — it's an **adapted coping mechanism** to a broken system. The design must accommodate and formalize this pattern rather than ignore it.

**Types of intermediaries:**
| Type | Who | Trust Level |
|---|---|---|
| Family member | Son/daughter, spouse | High |
| Local agent (dalal) | Paid informal broker | Medium-Low |
| Cyber café operator | Computer operator for hire | Medium |
| Ward office staff | Local government employee | Medium-High |

**Design implication:** "Assisted Mode" — a delegated access feature where a trusted family member or ward office staff member can submit on behalf of a citizen, with audit trail and citizen notification via SMS.

---

### Finding 5: Corruption Perception and Bureaucratic Culture

**55% of participants** said they felt compelled to pay chai-pani (informal facilitation fees) to government clerks, and that official processes seemed to exist "on paper only."

A digital portal alone does not solve corruption — but it can reduce discretionary touchpoints, create audit trails, and provide citizens with verified information about required fees so they cannot be overcharged.

**Design implication:** Every service must display official fee, official timeline, and a grievance/complaint button. Application status must be queryable without visiting the office.

---

### Finding 6: Connectivity and Device Constraints Are Severe

**73% of participants outside Kathmandu Valley** reported unreliable internet, and **46%** said web pages frequently failed to load entirely.

**Connectivity breakdown:**
| Connection Type | % of Participants |
|---|---|
| Fiber/ADSL broadband | 18% |
| 4G LTE | 29% |
| 3G | 34% |
| 2G / EDGE | 12% |
| No internet access | 7% |

**Average mobile data speed in rural areas:** 2.3 Mbps (3G), dropping to <0.5 Mbps in mountainous regions.

**Design implication:** Maximum page size target of 150KB per view. Progressive image loading. SMS fallback for critical notifications. Offline-first PWA capability for partially filled forms.

---

### Finding 7: Emotional Experience — Helplessness and Resignation

Beyond functional pain points, participants expressed a pervasive sense of **resignation and helplessness** about government services. Many had internalized inefficiency as inevitable.

**Emotional journey map — Current state:**

```
AWARENESS     PREPARATION    TRAVEL         AT OFFICE      OUTCOME
(Need arises) (Gather docs)  (Journey)      (Wait/Submit)  (Result)
    |              |             |               |              |
  Hopeful      Uncertain     Resigned       Anxious       Relieved OR
               (What docs?)  (Lost time)    (Will they    Frustrated
                             (Cost of       accept it?)   (Come back)
                              transport)
```

---

## Accessibility Barriers

### 1. Low Bandwidth and Slow Connectivity

**Barrier:** Pages over 500KB take 10+ seconds to load on 3G. JavaScript-heavy frameworks (React SPA, Angular) cause blank screens on low-end devices during initial parse.

**Affected users:** ~73% of non-Kathmandu participants; 100% of rural users.

**Mitigation approaches:**
- Progressive Web App (PWA) with service worker caching
- Server-side rendering (SSR) or static generation for all primary content
- Image lazy loading + WebP format
- Remove non-essential third-party scripts
- Target Lighthouse Performance score >85 on simulated 3G

### 2. Small Screen Sizes

**Barrier:** 68% of rural participants use smartphones with screen sizes between 4.5" and 5.5" and resolutions of 720×1280 or lower.

**Affected users:** Primarily rural and low-income urban users.

**Mitigation approaches:**
- Mobile-first responsive design starting at 320px viewport
- Minimum touch target size: 44×44px (iOS HIG) / 48×48dp (Material Design)
- Single-column layouts for 320–480px breakpoints
- Bottom navigation instead of hamburger menus on mobile
- Avoid hover-only interactive elements

### 3. Nepali Script (Devanagari) Support

**Barrier:** Existing government portals use inconsistent encoding, incorrect conjunct character rendering, and broken unicode for Devanagari. Many portals cannot accept Nepali input in form fields.

**Technical requirements:**
- Unicode UTF-8 throughout; no legacy encoding
- Noto Sans Devanagari typeface (Google Fonts) — covers full Unicode Devanagari block
- Input Method Editor (IME) support for Romanized-to-Devanagari transliteration on keyboard
- Line height adjustments: Devanagari requires 1.6–1.8 line-height (vs 1.5 for Latin) due to vowel marks above/below consonants

### 4. Low Digital Literacy

**Barrier:** Users unfamiliar with standard UI patterns (hamburger menus, pagination, modal dialogs) make navigation errors and lose confidence.

**Mitigation approaches:**
- Onboarding tutorial for first-time users
- Consistent, predictable navigation patterns
- Confirmatory dialogs before destructive actions
- Plain language (Flesch-Kincaid equivalent for Nepali: simple sentence structure, common vocabulary)
- Visual iconography to supplement text labels
- Contextual help — expandable "?" tooltips on form fields

### 5. Motor and Visual Accessibility

**Barrier:** Senior citizens (like Persona 3) and users with motor impairments struggle with small targets, time-limited sessions, and inaccessible form controls.

**Requirements:**
- WCAG 2.1 AA compliance minimum; target AAA for text contrast
- Keyboard navigability for all interactions
- Screen reader compatibility (NVDA/JAWS on Windows, TalkBack on Android, VoiceOver on iOS)
- No time-limited interactions without extension option
- Form autosave every 60 seconds

---

## Competitive Analysis

| Dimension | Nagrik Sewa (Goal) | India DigiLocker | Bangladesh MPS | Nepal Gov Portal (Current) | MeroSarkari.com |
|---|---|---|---|---|---|
| **Language Support** | Nepali-first + English | Hindi + English | Bengali + English | English primary | Nepali partial |
| **Mobile Optimization** | Mobile-first PWA | Good native app | Moderate | Poor | Moderate |
| **Services Covered** | 200+ services | 200+ document types | 30+ services | 50+ links | Directory only |
| **Offline Capability** | Planned (PWA) | Partial | None | None | None |
| **Digital Payments** | eSewa/Khalti/Cards | UPI integrated | bKash/Nagad | Not integrated | Not applicable |
| **Document Storage** | Cloud + encrypted | Full digital locker | Limited | None | None |
| **Status Tracking** | Real-time | Real-time | Basic | None | None |
| **Accessibility (WCAG)** | AA target | Partial AA | Basic | Fail | Fail |
| **Intermediary/Agent Mode** | Planned | Not available | Not available | Not available | N/A |
| **Bandwidth Optimization** | Target <150KB/page | Moderate | Poor | Poor (>2MB) | Moderate |
| **Trust Indicators** | Gov seal + SSL | DigiLocker branding | Gov seal | Present but unclear | N/A |
| **Grievance Mechanism** | Integrated | Separate portal | Separate | None visible | N/A |

### Key Lessons from Competitors

**India's DigiLocker:**
- ✅ Strong document issuance integration with issuing departments
- ✅ Large-scale adoption (700M+ users) driven by mandatory integration with driving licenses, Aadhaar
- ⚠️ Complex onboarding requiring Aadhaar — not replicable without equivalent ID infrastructure in Nepal
- ❌ Accessibility for feature phones and low-bandwidth users is limited

**Bangladesh Mobile Public Services (MPS):**
- ✅ SMS-based service delivery for low-connectivity users — excellent model to adapt
- ✅ Agent-based service centers (Digital Centers) for intermediary access
- ⚠️ Web portal is data-heavy and poorly optimized for mobile
- ❌ Limited to 30 services; not comprehensive

**Nepal Gov Portal (nepal.gov.np):**
- ✅ Existing brand recognition
- ❌ Acts as a directory/link aggregator, not an integrated service portal
- ❌ Services redirect to individual ministry portals with inconsistent UX
- ❌ No unified login or document management
- ❌ English-dominant, accessibility failing

---

## Insights Mapped to Design Decisions

| Research Insight | Design Decision | Priority |
|---|---|---|
| 84% make 3+ visits | Pre-application checklist with document simulator | P0 |
| 61% struggle with English interfaces | Nepali-first UI; all text in Devanagari | P0 |
| 73% have poor connectivity | <150KB page target; PWA offline support | P0 |
| 78% distrust online payment | Official receipt + grievance pathway visible at payment | P0 |
| 71% use intermediaries | Delegated/Assisted Access feature | P1 |
| 55% encounter chai-pani | Display official fees + complaint button on every service | P1 |
| Senior users fear form mistakes | Save-and-resume + review-before-submit wizard | P1 |
| Small screen prevalence | Mobile-first design from 320px | P0 |
| Devanagari rendering issues | Noto Sans Devanagari + Unicode compliance | P0 |
| Low digital literacy | Onboarding tutorial + contextual help | P1 |
| Trust via familiar brands | Integrate eSewa/Khalti payment; link to national newspaper coverage | P1 |
| Sessions expire mid-form | Autosave every 60 seconds; session extension prompt | P1 |

---

## Appendix

### A. Survey Questions Used

**Section 1: Demographics**
1. What is your age?
2. Which district do you currently live in?
3. What is your primary occupation?
4. What is your highest level of education completed?
5. What is your monthly household income range?

**Section 2: Government Service Usage**
6. Which government services have you accessed in the past 2 years? (checkbox list)
7. How many times did you visit a government office to complete your most recent service request?
8. How long did your most recent government service interaction take (from start to completion)?
9. Did you use any online platform/portal for any part of this service?
10. If yes, which platform did you use? If no, why not?

**Section 3: Digital Access**
11. What device do you primarily use to access the internet?
12. What is your primary internet connection type (WiFi, 4G, 3G, 2G)?
13. Approximately how much do you spend on mobile data per month (in NPR)?
14. Have you ever experienced a webpage not loading due to slow internet?
15. Which apps do you use regularly? (eSewa, Khalti, Facebook, YouTube, etc.)

**Section 4: Pain Points**
16. On a scale of 1–5, how would you rate your experience accessing government services? (1=Very Poor, 5=Excellent)
17. What was the biggest challenge you faced? (open text)
18. Have you ever had to pay unofficial fees to get a government service processed?
19. Have you ever abandoned a government service request partway through? If yes, why?
20. Have you ever used someone else (agent, family member) to submit a government service on your behalf?

**Section 5: Language & Literacy**
21. What language do you prefer to read in?
22. Can you read and understand English text on a government website?
23. Have you had difficulty filling a form because the labels were in English?
24. Would you use a government portal that was fully in Nepali?

**Section 6: Trust & Adoption**
25. Have you ever made a payment online (eSewa, Khalti, bank transfer)?
26. Would you trust paying government service fees online?
27. What would make you more confident using a digital government service? (open text)
28. Have you heard of any digital government services in Nepal? (Yes/No + name them)
29. What concerns do you have about using a digital government portal? (open text)
30. If a fully digital government portal was available in Nepali, how likely would you be to use it? (1–5 scale)

**Section 7: Accessibility Needs**
31. Do you have any difficulty reading small text on a phone screen?
32. Do you have any difficulty using a touchscreen for long periods?

---

### B. Participant Recruitment Criteria

**Inclusion Criteria:**
- Nepali citizen aged 18–75
- Has accessed at least one government service in the past 24 months
- Resides in Nepal (urban, peri-urban, or rural)

**Stratification targets:**
| Dimension | Target |
|---|---|
| Gender | 50% female, 50% male |
| Age 18–30 | 30% |
| Age 31–50 | 40% |
| Age 51–75 | 30% |
| Urban (Kathmandu Valley) | 35% |
| Peri-urban | 25% |
| Rural | 40% |
| High digital literacy | 30% |
| Medium digital literacy | 40% |
| Low digital literacy | 30% |

**Exclusion Criteria:**
- Current government employees (conflict of interest)
- UX/UI or technology industry professionals
- Unable to participate in Nepali language interview

---

### C. Research Limitations

1. **Geographic scope:** Fieldwork concentrated in Province 3, Gandaki, and Lumbini. Coverage of Karnali and Sudurpashchim was limited to Dhangadhi; remote mountain districts (Humla, Mugu, Dolpa) not covered.
2. **Gender representation in rural areas:** Female participation in rural contextual interviews was lower than target (38%) due to social access constraints; mitigated by involving female researchers and NGO intermediaries.
3. **Self-reported data bias:** Survey responses on income and literacy may be subject to social desirability bias.
4. **Recency:** Data collected August–October 2026; technology landscape (connectivity, smartphone penetration) is evolving rapidly.

---

*Document prepared for SDOC Nepal internal use. Not for public distribution.*  
*Version 1.0 | November 2026*
