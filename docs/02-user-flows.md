# User Flows & Information Architecture
## Nagrik Sewa — Nepal Citizen e-Services Portal
**Project:** Nagrik Sewa Digital Government Portal  
**Client:** SDOC Nepal  
**Prepared by:** UX Design Team  
**Date:** November 2026  
**Version:** 1.2 — Final  

---

## Table of Contents

1. [Information Architecture](#information-architecture)
2. [Flow 1 — New User Registration & Identity Verification](#flow-1--new-user-registration--identity-verification)
3. [Flow 2 — Citizenship Certificate Application](#flow-2--citizenship-certificate-application)
4. [Flow 3 — Application Status Check](#flow-3--application-status-check)
5. [Flow 4 — Service Discovery](#flow-4--service-discovery)
6. [Error States & Edge Cases](#error-states--edge-cases)
7. [Low-Bandwidth & Offline Flow Variants](#low-bandwidth--offline-flow-variants)
8. [Flow Annotations & Design Notes](#flow-annotations--design-notes)

---

## Information Architecture

### Sitemap — Full Portal Structure

```
NAGRIK SEWA PORTAL
│
├── 🏠 HOME
│   ├── Featured Services (Top 6)
│   ├── Search Bar (Unified)
│   ├── Announcements / Notices
│   ├── Application Status Quick-Check (Token entry)
│   └── Language Toggle (नेपाली / English)
│
├── 🔐 AUTH
│   ├── Login
│   │   ├── Phone + OTP
│   │   ├── NID Number + Password
│   │   └── Biometric (app only)
│   ├── Register
│   │   ├── Step 1: Phone Verification
│   │   ├── Step 2: Personal Details
│   │   ├── Step 3: Identity Verification (NID / Citizenship)
│   │   └── Step 4: Create Password
│   └── Forgot Password / Account Recovery
│
├── 🗂️ SERVICES (Browse All)
│   ├── Civil Registration
│   │   ├── Citizenship Certificate (नागरिकता प्रमाणपत्र)
│   │   │   ├── New Application
│   │   │   ├── Renewal / Update
│   │   │   └── Lost / Replacement
│   │   ├── Birth Certificate
│   │   ├── Marriage Certificate
│   │   ├── Death Certificate
│   │   └── Migration Certificate
│   │
│   ├── Land & Property
│   │   ├── Land Ownership Certificate (लालपुर्जा)
│   │   ├── Land Transaction (Transfer)
│   │   ├── Property Valuation
│   │   └── Map / Boundary Record
│   │
│   ├── Passport & Travel
│   │   ├── Passport Application (New)
│   │   ├── Passport Renewal
│   │   ├── Emergency Travel Document
│   │   └── Visa Recommendation Letter
│   │
│   ├── Business & Revenue
│   │   ├── Business Registration (PAN)
│   │   ├── Tax Clearance Certificate
│   │   ├── VAT Registration
│   │   └── Business Renewal
│   │
│   ├── Social Security & Welfare
│   │   ├── Senior Citizen ID
│   │   ├── Disability Certificate
│   │   ├── Social Security Allowance
│   │   └── Widow/Single Women Support
│   │
│   ├── Education & Employment
│   │   ├── Academic Certificate Verification
│   │   ├── Police Clearance Certificate
│   │   ├── Character Certificate
│   │   └── Employment Recommendation
│   │
│   └── Utility & Local Services
│       ├── Electricity Connection
│       ├── Drinking Water Application
│       ├── Ward-Level Services (directed to Palika portal)
│       └── Waste Management Registration
│
├── 📋 MY APPLICATIONS (Authenticated)
│   ├── Active Applications
│   │   ├── Application Detail
│   │   ├── Status Timeline
│   │   ├── Required Actions
│   │   └── Download Receipt
│   ├── Completed Applications
│   │   ├── Issued Documents (Download)
│   │   └── History Log
│   └── Saved Drafts
│
├── 📁 MY DOCUMENTS (Authenticated)
│   ├── Issued Digital Documents (QR-verified)
│   ├── Uploaded Documents (Personal archive)
│   └── Document Sharing (Generate time-limited link)
│
├── 🔔 NOTIFICATIONS (Authenticated)
│   ├── Application Updates
│   ├── Government Notices
│   └── Deadline Reminders
│
├── ❓ HELP & SUPPORT
│   ├── FAQ (category-based)
│   ├── How-To Guides (video + text)
│   ├── Glossary (Government terms in plain Nepali)
│   ├── Contact Us
│   │   ├── Helpline: 1166 (toll-free)
│   │   ├── Chat Support (office hours)
│   │   └── Email Support
│   └── Grievance / Complaint Submission
│
└── ⚙️ ACCOUNT SETTINGS (Authenticated)
    ├── Profile & Contact Info
    ├── Security (Password, 2FA)
    ├── Linked ID Documents
    ├── Notification Preferences (SMS / Push / Email)
    ├── Language Preference
    ├── Accessibility Settings (Font size, Contrast)
    └── Delegated Access (Assisted Mode)
```

---

### Navigation Priority (Mobile)

On mobile (< 768px), the bottom navigation bar shows the 5 most critical destinations:

```
┌──────────────────────────────────────────────────┐
│  🏠 Home  |  🗂️ Services  |  📋 My Apps  |  🔔  |  👤 │
└──────────────────────────────────────────────────┘
```

---

## Flow 1 — New User Registration & Identity Verification

### Overview

| Attribute | Detail |
|---|---|
| **Goal** | Create a verified Nagrik Sewa account tied to a Nepal citizen identity |
| **Entry Points** | Homepage CTA ("Register" button), Service page gate (unauthenticated), App store download → onboarding |
| **Authentication Required** | No (this IS the auth creation flow) |
| **Estimated Time** | 5–10 minutes (happy path) |
| **Supported Devices** | Mobile (primary), Desktop |
| **Supported Languages** | Nepali (default), English |

---

### Step-by-Step Flow (Happy Path)

```
┌─────────────────────────────────────────────────────────────────────┐
│ ENTRY: User taps "Register" on Homepage                             │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│ SCREEN 1: Welcome / Language Selection                              │
│ • "Select your language" prompt shown first                         │
│ • Options: नेपाली | English                                         │
│ • Selection persists across session and account                     │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│ SCREEN 2: Phone Number Entry                                        │
│ • Field: Mobile Number (Nepal +977 prefix fixed)                    │
│ • Helper text: "We'll send a one-time code to verify your number"   │
│ • Terms & Conditions link (Nepali + English)                        │
│ • CTA: "Send OTP Code" button                                       │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
              ┌───────────┴───────────┐
              │ API: Send OTP via SMS  │
              │ (Nepal Telecom / Ncell)│
              └───────────┬───────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│ SCREEN 3: OTP Verification                                          │
│ • 6-digit OTP entry (auto-advance between digits)                   │
│ • Timer: 3:00 countdown                                             │
│ • "Resend OTP" available after 60 seconds                           │
│ • "Did not receive? Call 1166" help link                            │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
              ┌───────────┴───────────────┐
    [OTP Correct]               [OTP Wrong / Expired]
              │                           │
              ▼                           ▼
┌─────────────────────────┐   ┌──────────────────────────────────────┐
│ SCREEN 4: Personal       │   │ ERROR STATE: Invalid OTP             │
│ Details Entry            │   │ • Inline error below OTP field       │
│                         │   │ • "Code is incorrect. Try again."    │
│ • Full Name (Nepali)    │   │ • After 3 failures: account locked   │
│ • Full Name (English)   │   │   for 10 min with explanation        │
│ • Date of Birth         │   └──────────────────────────────────────┘
│ • Gender                │
│ • Province / District   │
│ • Municipality / Ward   │
│                         │
│ Progress: Step 1 of 3   │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│ SCREEN 5: Identity Verification                                     │
│                                                                     │
│ Choose ID type:                                                     │
│   ○ Citizenship Certificate (नागरिकता प्रमाणपत्र)                   │
│   ○ National Identity Card (राष्ट्रिय परिचयपत्र)                    │
│   ○ Passport                                                        │
│                                                                     │
│ Enter ID Number: [__________________]                               │
│ Issue Date:      [DD / MM / YYYY]                                   │
│ Issued By (District): [Dropdown]                                    │
│                                                                     │
│ Upload ID Photo (front + back):                                     │
│   [Camera icon] Take Photo | [Upload icon] Choose File             │
│   Accepted: JPEG, PNG | Max: 2MB per image                          │
│   Compression guidance: auto-compressed if over 500KB              │
│                                                                     │
│ Progress: Step 2 of 3                                               │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
              ┌───────────┴────────────────────────┐
              │ API: Verify against DOFE / NID DB   │
              │ (Asynchronous — may take 30–60 sec) │
              └───────────┬────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
    [Verified]     [Partial Match]    [Not Found]
          │               │               │
          ▼               ▼               ▼
   ┌────────────┐ ┌──────────────┐ ┌─────────────────────────┐
   │ SCREEN 6:  │ │ Review Screen│ │ ERROR: ID not verified  │
   │ Create     │ │ Ask user to  │ │ • Option 1: Re-enter    │
   │ Password   │ │ confirm/     │ │   ID details            │
   │            │ │ correct      │ │ • Option 2: Manual      │
   │ Password   │ │ mismatched   │ │   verification request  │
   │ strength   │ │ fields       │ │   (physical office)     │
   │ meter      │ └──────────────┘ │ • Option 3: Help: 1166  │
   │            │                  └─────────────────────────┘
   │ Confirm    │
   │ Password   │
   │            │
   │ Prog: 3/3  │
   └─────┬──────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────┐
│ SCREEN 7: Success — Account Created                                 │
│                                                                     │
│ ✅ "Your Nagrik Sewa account has been created successfully!"        │
│    आफ्नो नागरिक सेवा खाता सफलतापूर्वक बनाइयो!                      │
│                                                                     │
│ • SMS confirmation sent to registered number                        │
│ • Show: Account summary (name, phone, ID type)                     │
│ • CTA: "Go to Dashboard" | "Apply for a Service"                   │
└─────────────────────────────────────────────────────────────────────┘
```

### Decision Points Summary

| Decision Point | Paths | Handling |
|---|---|---|
| OTP correct/incorrect | 2 paths | Incorrect: inline error, 3-strike lockout |
| ID verified/not found | 3 paths | Not found: retry, manual fallback, help |
| Photo quality check | 2 paths | Blur/glare detected: re-capture prompt |
| Duplicate account check | 2 paths | Existing account: "Already registered, Login" |

---

## Flow 2 — Citizenship Certificate Application

### Overview

| Attribute | Detail |
|---|---|
| **Goal** | Submit a complete citizenship certificate application online |
| **Entry Points** | Services > Civil Registration > Citizenship Certificate; Search result |
| **Authentication Required** | Yes — must be logged in |
| **Estimated Time** | 15–25 minutes (happy path, documents ready) |
| **Service Fee** | NPR 50 (official) |
| **Processing Time** | 7–21 working days |

---

### Pre-Application Checklist (Entry Gate)

Before the form begins, users see a **Document Checklist Screen**:

```
BEFORE YOU BEGIN — CHECK YOU HAVE THESE READY:
नागरिकता आवेदन गर्नु अघि, तपाईंसँग यी दस्तावेजहरू छन् भनी जाँच्नुहोस्:

✅ Required Documents:
   □ Birth Certificate (जन्म दर्ता प्रमाणपत्र) — issued by your municipality
   □ Your parents' citizenship certificates (बुवा र आमाको नागरिकता प्रमाणपत्र)
   □ Recent passport-size photo (२ inch × २ inch, white background)
   □ School Leaving Certificate (SLC/SEE) if applicable

📌 Optional (speeds up processing):
   □ Recommendation letter from Ward Office (टोल विकास संस्था)
   □ Land ownership certificate if claiming by descent

OFFICIAL FEE: NPR 50  |  PROCESSING TIME: 7–21 working days

[✔ I have all documents — Start Application]   [Need Help?]
```

---

### Happy Path — Step-by-Step

```
ENTRY: User selects "Citizenship Certificate — New Application"
         │
         ▼
SCREEN 1: Application Type Selection
  • New Citizenship (नया नागरिकता)
  • By Descent (वंशज आधारमा)         ← most common
  • By Birth (जन्म आधारमा)
  • Naturalization (प्राकृतिकीकरण)
         │ [User selects "By Descent"]
         ▼
SCREEN 2: Applicant Personal Details  [STEP 1/6]
  ┌──────────────────────────────────────────────────────┐
  │ Full Name (Nepali): [________________]                │
  │ Full Name (English): [________________]               │
  │ Date of Birth: [DD/MM/YYYY]                          │
  │ Gender: ○ Male ○ Female ○ Other                      │
  │ Ethnicity/Caste (जाति): [Dropdown - 150+ options]   │
  │ Religion: [Dropdown]                                  │
  │ Grandfather's Name (Nepali): [________________]      │
  │ Grandfather's Name (English): [________________]     │
  └──────────────────────────────────────────────────────┘
  [Save & Continue]   [Save as Draft]
         │
         ▼
SCREEN 3: Family Information  [STEP 2/6]
  ┌──────────────────────────────────────────────────────┐
  │ Father's Full Name (Nepali): [________________]       │
  │ Father's Citizenship Number: [________________]      │
  │ Father's Citizenship District: [Dropdown]            │
  │ Mother's Full Name (Nepali): [________________]       │
  │ Mother's Citizenship Number: [________________]      │
  │ Mother's Citizenship District: [Dropdown]            │
  │ Marital Status: ○ Single ○ Married ○ Divorced        │
  │   [If Married] Spouse Name: [________________]       │
  │   [If Married] Spouse Citizenship No.: [________]   │
  └──────────────────────────────────────────────────────┘
  [Back]   [Save & Continue]   [Save as Draft]
         │
         ▼
SCREEN 4: Address Information  [STEP 3/6]
  ┌──────────────────────────────────────────────────────┐
  │ PERMANENT ADDRESS (स्थायी ठेगाना)                     │
  │ Province: [Dropdown]                                 │
  │ District: [Dropdown — filtered by Province]         │
  │ Municipality/VDC: [Dropdown — filtered by District] │
  │ Ward No.: [1–33 Dropdown]                            │
  │ Tole/Settlement: [________________]                  │
  │                                                      │
  │ TEMPORARY ADDRESS (अस्थायी ठेगाना) [if different]   │
  │ ☐ Same as permanent address                         │
  │ [If unchecked, repeat address fields]               │
  └──────────────────────────────────────────────────────┘
  [Back]   [Save & Continue]
         │
         ▼
SCREEN 5: Document Upload  [STEP 4/6]
  ┌──────────────────────────────────────────────────────┐
  │ 1. Birth Certificate                                 │
  │    [📷 Take Photo] [📁 Upload File]                  │
  │    Status: ○ Not uploaded                           │
  │                                                      │
  │ 2. Father's Citizenship (Front)                      │
  │    [📷 Take Photo] [📁 Upload File]                  │
  │    Status: ✅ Uploaded (compressed to 340KB)         │
  │                                                      │
  │ 3. Father's Citizenship (Back)                       │
  │    [📷 Take Photo] [📁 Upload File]                  │
  │                                                      │
  │ 4. Mother's Citizenship (Front + Back)               │
  │    [📷 Take Photo] [📁 Upload File]                  │
  │                                                      │
  │ 5. Passport Photo                                    │
  │    [📷 Take Photo] [📁 Upload File]                  │
  │    Requirements: White bg, face 70–80% of frame     │
  │                                                      │
  │ 6. SLC/SEE Certificate (optional)                    │
  │    [📁 Upload File (optional)]                       │
  └──────────────────────────────────────────────────────┘
  [Back]   [Save & Continue]
         │
         ▼
SCREEN 6: Submission Office Selection  [STEP 5/6]
  ┌──────────────────────────────────────────────────────┐
  │ WHERE DO YOU WANT TO SUBMIT?                         │
  │                                                      │
  │ Based on your permanent address:                     │
  │ ● Kavre District Administration Office (Dhulikhel)  │
  │   📍 14.2 km from your address                      │
  │   🕘 Mon–Fri, 10:00 AM – 5:00 PM                   │
  │   📞 011-490123                                      │
  │                                                      │
  │ ○ Panauti Municipality Office                        │
  │   (For ward-level document collection only)          │
  │                                                      │
  │ 📅 SCHEDULE APPOINTMENT (optional)                  │
  │    [Calendar: Select date and time slot]             │
  │    Slots available: Mon, Nov 10 — 10:00, 11:00, 2:00│
  └──────────────────────────────────────────────────────┘
  [Back]   [Save & Continue]
         │
         ▼
SCREEN 7: Review & Submit  [STEP 6/6]
  ┌──────────────────────────────────────────────────────┐
  │ REVIEW YOUR APPLICATION                              │
  │                                                      │
  │ Personal Details:                                    │
  │   Name: राम बहादुर श्रेष्ठ / Ram Bahadur Shrestha   │
  │   DOB: 2041-05-15 (B.S.)                            │
  │   [Edit]                                             │
  │                                                      │
  │ Family Details:                [Edit]                │
  │ Address:                       [Edit]                │
  │ Documents: 5/5 uploaded ✅     [Edit]                │
  │ Submission Office: Dhulikhel   [Edit]                │
  │                                                      │
  │ APPLICATION FEE: NPR 50                              │
  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                  │
  │ Pay via:                                             │
  │   [eSewa] [Khalti] [Connect IPS] [Debit Card]        │
  │                                                      │
  │ ☑ I confirm all information is correct              │
  │ ☑ I have read the terms and conditions              │
  └──────────────────────────────────────────────────────┘
  [Back]   [PAY & SUBMIT APPLICATION]
         │
         ├── [Payment Success]
         │         │
         │         ▼
         │   SCREEN 8: Confirmation
         │   ┌────────────────────────────────────────────┐
         │   │ ✅ APPLICATION SUBMITTED SUCCESSFULLY!      │
         │   │                                            │
         │   │ Application No: NSC-2081-0045721           │
         │   │ Date: 2081 Kartik 16                       │
         │   │ Service: Citizenship Certificate           │
         │   │ Office: Kavre DAO                          │
         │   │ Expected: 7–21 working days                │
         │   │                                            │
         │   │ 📱 SMS sent to 98XXXXXXXX                  │
         │   │                                            │
         │   │ [Download Receipt (PDF)]                   │
         │   │ [Track My Application]                     │
         │   │ [Return to Home]                           │
         │   └────────────────────────────────────────────┘
         │
         └── [Payment Failed]
                   │
                   ▼
             ERROR SCREEN: Payment Failed
             • Application saved as draft
             • "Your application is saved. Try payment again."
             • [Retry Payment] [Pay Later] [Contact Support]
```

---

### Error Paths — Citizenship Application

| Error State | Trigger | System Response |
|---|---|---|
| Session timeout | User inactive 20 min | Warning at 18 min: "Your session expires in 2 minutes. Save?" Autosave activated. |
| Document upload fails (size) | File >5MB | "File too large. Compress or retake photo." + link to in-app compression tool |
| Document upload fails (format) | Non-JPEG/PNG/PDF | "Invalid file type. Accepted: JPEG, PNG, PDF." |
| Photo quality fail | Face not detected / blurry | "Photo not clear. Please retake in good lighting." with visual guide |
| Duplicate application detected | Same ID, same service | "You have an existing application for this service. View existing application?" |
| Office quota full | Selected appointment slot full | Show next 3 available slots; option to walk in without appointment |
| Payment gateway down | All payment methods fail | Save as draft; email + SMS reminder to complete payment within 48 hours |
| ID verification mismatch | Name on form doesn't match ID | Highlight mismatched fields; allow correction before resubmit |
| Network lost mid-upload | Connectivity drop | Resume upload from checkpoint on reconnect; progress bar retained |

---

## Flow 3 — Application Status Check

### Overview

| Attribute | Detail |
|---|---|
| **Goal** | Check the current status of a submitted application |
| **Entry Points** | Homepage quick-check widget, Dashboard "My Applications", SMS link, Direct URL |
| **Authentication Required** | No (for basic status by token); Yes (for full detail) |
| **Estimated Time** | < 1 minute |

### Flow Diagram

```
ENTRY OPTION A (Unauthenticated — Quick Check)
  Homepage → "Check Application Status" widget
     │
     ▼
  Enter Application Number: [NSC-XXXX-XXXXXXX]
  + Enter registered mobile number: [98XXXXXXXX]
     │
     ▼
  Status Summary Screen (Limited View):
  ┌─────────────────────────────────────────────┐
  │ Application: NSC-2081-0045721               │
  │ Service: Citizenship Certificate            │
  │ Status: ● UNDER REVIEW                      │
  │ Submitted: Kartik 16, 2081                  │
  │ Expected completion: by Mangsir 6, 2081     │
  │ Current stage: Document Verification (2/4)  │
  │                                             │
  │ [Login for full details & documents]        │
  │ [Back to Home]                              │
  └─────────────────────────────────────────────┘

ENTRY OPTION B (Authenticated — Dashboard)
  Login → Dashboard → My Applications → Select Application
     │
     ▼
  Full Application Detail Screen:
  ┌─────────────────────────────────────────────┐
  │ NSC-2081-0045721 — Citizenship Certificate  │
  │                                             │
  │ PROGRESS TIMELINE:                          │
  │ ✅ Submitted          — Kartik 16           │
  │ ✅ Fee Received        — Kartik 16           │
  │ ✅ Document Check      — Kartik 18           │
  │ 🔄 Officer Review     — In Progress         │
  │ ○  Approval / Rejection                    │
  │ ○  Ready for Collection / Dispatch         │
  │                                             │
  │ REQUIRED ACTION (if any):                  │
  │ ⚠️ "Please provide original birth           │
  │     certificate at Dhulikhel DAO            │
  │     by Mangsir 5, 2081"                    │
  │                                             │
  │ Documents Submitted:     [View]             │
  │ Official Receipt:        [Download PDF]     │
  │ Appointment Details:     [View / Reschedule]│
  │                                             │
  │ [📞 Contact Office]  [🚨 File Complaint]   │
  └─────────────────────────────────────────────┘

STATUS TYPES:
  ● Submitted (grey)
  ● Under Review (blue)
  ● Action Required (orange — triggers SMS alert)
  ● Approved — Ready for Collection (green)
  ● Rejected (red — with reason and appeal option)
  ● Dispatched (green — if postal delivery selected)
```

---

## Flow 4 — Service Discovery

### Overview

| Attribute | Detail |
|---|---|
| **Goal** | Find the correct service for a citizen's need |
| **Entry Points** | Homepage search bar, Browse Services menu, "I need help with..." guided finder |
| **Authentication Required** | No |
| **Key Challenge** | Users often don't know the official name of the service they need |

### Flow A — Search

```
ENTRY: User types query in search bar
  Query: "आफ्नो जग्गाको कागज" (my land document)  ← natural language
         │
         ▼
  Search Results Page:
  ┌────────────────────────────────────────────────────────────┐
  │ Results for: "जग्गाको कागज"                                │
  │                                                            │
  │ 🏆 Best Match:                                            │
  │   Land Ownership Certificate (लालपुर्जा प्रमाण)            │
  │   Department of Land Management & Archive                 │
  │   Fee: NPR 100 | Time: 5–10 working days                  │
  │   [Apply Now]                                              │
  │                                                            │
  │ Related Services:                                          │
  │   • Land Transfer (जग्गा नामसारी) — Land Mgt. Dept.       │
  │   • Land Map / Boundary Certificate — Survey Dept.         │
  │   • Property Valuation Certificate — Revenue Office        │
  │                                                            │
  │ Not what you're looking for? [Browse all services]         │
  │ Still confused? [Chat with support]                        │
  └────────────────────────────────────────────────────────────┘
```

### Flow B — Browse by Category

```
ENTRY: User taps "Browse Services" from navigation
         │
         ▼
  Category Grid (6 primary categories with icons):
  ┌──────────────────────────────────────────────┐
  │  📝 Civil         🏠 Land &      🌍 Passport │
  │  Registration     Property       & Travel    │
  │                                              │
  │  💼 Business      👴 Social       🎓 Edu &   │
  │  & Revenue        Security       Employment  │
  └──────────────────────────────────────────────┘
         │ [User taps "Civil Registration"]
         ▼
  Sub-category List:
  ┌────────────────────────────────────────────────────────┐
  │ CIVIL REGISTRATION SERVICES                           │
  │                                                        │
  │ 🔵 Citizenship Certificate     → 2 service types      │
  │ 🔵 Birth Certificate           → 3 service types      │
  │ 🔵 Marriage Certificate        → Apply / Renew        │
  │ 🔵 Death Certificate           → Apply / Correct      │
  │ 🔵 Migration Certificate       → Apply                │
  │                                                        │
  │ Most Popular in your district:                        │
  │ ⭐ Citizenship Renewal/Correction (Season: High)      │
  └────────────────────────────────────────────────────────┘
         │ [User taps "Citizenship Certificate"]
         ▼
  Service Detail Page:
  ┌────────────────────────────────────────────────────────┐
  │ CITIZENSHIP CERTIFICATE (नागरिकता प्रमाणपत्र)           │
  │ Ministry of Home Affairs — District Administration    │
  │                                                        │
  │ WHAT IT IS: Official government proof of citizenship  │
  │             required for most government services     │
  │                                                        │
  │ WHO CAN APPLY:                                        │
  │   • Nepali citizens by birth or descent               │
  │   • Age 16 or above                                   │
  │                                                        │
  │ REQUIRED DOCUMENTS: [Expandable checklist]           │
  │ FEE: NPR 50   |   TIME: 7–21 working days            │
  │ DELIVERY: Collect in person at DAO                   │
  │                                                        │
  │ ⚠️ IMPORTANT: You must visit the DAO once for        │
  │     biometric verification after submission           │
  │                                                        │
  │ [START APPLICATION]                                   │
  │ [Check if I'm Eligible] (Guided questionnaire)        │
  │ [Download Document Checklist (PDF)]                   │
  └────────────────────────────────────────────────────────┘
```

### Flow C — Guided Finder ("I Need Help With...")

For low-literacy users unfamiliar with service names:

```
ENTRY: Homepage → "I need help with..." button (large, prominent)
         │
         ▼
  Question 1: "What do you need to do?"
    ○ Get a government document or certificate
    ○ Register something (birth, marriage, business)
    ○ Pay a government fee or fine
    ○ Check status of my application
    ○ I'm not sure — explain options
         │
         ▼
  Question 2 (conditional): "Which type of certificate?"
    ○ Prove I am a Nepali citizen
    ○ Prove where I live / my address
    ○ Prove ownership of land
    ○ Travel abroad (passport)
    ○ Other
         │
         ▼
  RESULT: Matched Service Card with [Apply Now] CTA
```

---

## Error States & Edge Cases

### Global Error States

| Error Type | Trigger | UI Response | Recovery Path |
|---|---|---|---|
| **Session Expired** | No activity for 20 min | Inline banner: "Your session has expired. Please log in again. Your draft has been saved." | Re-login → resume draft |
| **Server Error (500)** | Backend failure | Full-page friendly error: "Something went wrong on our end. We're working on it." + App status link | Retry button; support number |
| **Network Offline** | Device loses internet | Top banner: "You're offline. Some features are unavailable." | Auto-retry on reconnect |
| **Service Unavailable** | Scheduled maintenance | Maintenance page with expected restoration time in Nepali + English | Email/SMS notification option |
| **Page Not Found (404)** | Bad URL | Friendly 404 with search bar and link to home | Search or browse |
| **Payment Declined** | Bank/gateway rejection | "Your payment was not processed. Application saved as draft." | Retry / alternate payment method |

### Edge Cases — Registration

| Edge Case | Handling |
|---|---|
| Citizen has no smartphone | "Assisted Mode" — Ward office staff can register on behalf |
| Duplicate phone number | "This number is already registered. Log in or use a different number." |
| Expired ID document | Warning shown, allowed to proceed; flag sent to processing officer |
| Name in Nepali doesn't match English | Auto-transliteration suggested; user can override |
| User closes browser mid-form | LocalStorage autosave; resume prompt on return visit |
| Low-quality camera on phone | Manual file upload alternative always available |

---

## Low-Bandwidth & Offline Flow Variants

### Principles

1. **Progressive loading:** Core content (text, form fields) loads first; images load after.
2. **Service Worker caching:** App shell, static assets, and previously viewed pages cached via PWA service worker.
3. **Form data persistence:** All form inputs saved to IndexedDB every 30 seconds; survives network loss.
4. **SMS fallback:** Critical notifications (status updates, required actions) sent via SMS regardless of app/internet connectivity.
5. **Lightweight mode:** User can toggle "Light Mode" — disables all images and non-essential CSS; reduces page to <50KB.

### Offline Capability Matrix

| Feature | Online | Offline (cached) | No cache |
|---|---|---|---|
| Browse service categories | ✅ Full | ✅ Last cached version | ❌ Error with retry |
| View service detail | ✅ Full | ✅ Last cached | ❌ Error |
| Fill application form | ✅ Full | ✅ Fills locally, submits on reconnect | ❌ Shows error |
| Upload documents | ✅ Full | ✅ Queued locally, uploads on reconnect | ❌ Error |
| View application status | ✅ Real-time | ✅ Last cached status + "Last updated" timestamp | ❌ Error |
| Submit application | ✅ Full | ❌ Must be online | N/A |
| Download receipt (PDF) | ✅ | ✅ If previously opened | ❌ |

### SMS Fallback Flow (Feature-Phone / No Internet Users)

```
USSD / SMS flow for basic status check:
  User sends SMS: STATUS [Application Number]
  To: 1166
  
  Response (within 60 seconds):
  "Nagrik Sewa: Aapko darkhast NSC-2081-0045721
   aile 'Adhikrit Samiksha' charan ma cha.
   Thap jankari: nagriksewa.gov.np va 1166"
  
  (Translation: "Your application NSC-... is currently
   in the 'Officer Review' stage. For more info: [URL] or 1166")
```

---

## Flow Annotations & Design Notes

### Key UX Decisions

1. **Progress indicators on all multi-step forms:** Step X of Y shown persistently. Users in research expressed anxiety about not knowing how long a process would be.

2. **Save as Draft on every step:** Users should never lose work. Draft saved to cloud (if authenticated) or localStorage (if guest).

3. **Back navigation never destroys data:** Tapping "Back" saves current step data; users can freely navigate between steps.

4. **Appointment scheduling is optional, not mandatory:** Walk-in remains possible; appointment reduces wait time but is not a barrier.

5. **Document upload compression is automatic:** Users should not need to know about file size limits; compression happens client-side before upload.

6. **Language toggle is persistent and accessible from every screen:** Placed in header (desktop) and accessible via Settings > Language on mobile.

7. **Grievance button visible on status screen:** Reduce the need for in-person complaint filing — integrated into the same portal.

8. **All time/date displays use Bikram Sambat (BS) as default:** With AD equivalent shown in parentheses for younger/bilingual users.

---

*Document prepared for SDOC Nepal — Internal Use*  
*Version 1.2 | November 2026*
