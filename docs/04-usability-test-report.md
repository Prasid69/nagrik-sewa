# 04 — Usability Testing Report & Evaluation (उपयोगिता परीक्षण प्रतिवेदन)
### Nagrik Sewa (नागरिक सेवा) Portal Prototype Usability Test
**Conducted by:** Prasoddha Aryal — Lead UI/UX Designer  
**Format:** Moderated Remote & Contextual Field Usability Testing  
**Sample Size:** N = 8 Representative Nepali Citizens (Diverse Demographics & Literacy)  
**System Usability Scale (SUS) Benchmark:** Target > 70.0 | **Achieved: 78.4 / 100**

---

## 1. Executive Summary

A formal usability study was conducted to evaluate the usability, accessibility, language clarity, and task success rates of the Nagrik Sewa portal. Special attention was paid to mobile-first usage in low-connectivity contexts and ease of completion by users with basic digital literacy.

### Key Metrics Summary
- **Overall Task Completion Rate:** **87.5%**
- **Average System Usability Scale (SUS) Score:** **78.4** (Grade A-, Good to Excellent)
- **Average Time on Form Completion:** **3m 48s** (Well under the 5-minute requirement)
- **Bilingual Comprehension Success:** **92.0%**

---

## 2. Participant Profiles

Participants were selected to mirror the three user personas identified during early user research:

| Participant | Age | Location | Digital Literacy | Primary Device Used | Persona Match |
|---|---|---|---|---|---|
| **P1** | 48 | Banepa, Kavre | Low (Basic call & YouTube only) | Entry Android (Redmi 9A) | Ram Bahadur (Rural Citizen) |
| **P2** | 26 | New Baneshwor, KTM | High (Uses Banking Apps, Work SaaS) | iPhone 13 (Safari) | Sita Tamang (Urban Pro) |
| **P3** | 62 | Patan, Lalitpur | Moderate (Pensioner, Facebook user) | Desktop Chrome (1080p) | Govinda Adhikari (Senior Citizen) |
| **P4** | 34 | Hetauda, Makwanpur | Moderate (Shop owner, eSewa user) | Samsung Galaxy M12 | Ram Bahadur (Semi-Urban) |
| **P5** | 21 | Kirtipur, KTM | Very High (University IT Student) | Laptop Chrome | Sita Tamang (Tech Savvy) |
| **P6** | 56 | Bharatpur, Chitwan | Low-to-Moderate (Farmer & Cooperative member)| Android Chrome | Ram Bahadur (Rural Citizen) |
| **P7** | 39 | Pokhara, Kaski | Moderate (Tourism worker, mobile-first) | Vivo Y20 | Sita Tamang (Mobile Worker) |
| **P8** | 68 | Bhaktapur | Low (Uses voice notes, requires glasses) | Android Chrome (Large text) | Govinda Adhikari (Senior Citizen) |

---

## 3. Test Scenarios & Task Performance

| Task Scenario | Description | Success Rate | Mean Time on Task | Error Rate |
|---|---|---|---|---|
| **T1: Discover Service** | Find Citizenship Certificate Application from Home | 100% (8/8) | 18 seconds | 0% |
| **T2: Multi-step Application** | Complete Steps 1 through 4 including mock file upload | 75% (6/8) | 3m 48s | 12.5% |
| **T3: Application Tracking** | Look up status using tracking ID `APP-2081-72438` | 100% (8/8) | 34 seconds | 0% |
| **T4: Language Switch** | Toggle interface from English to Nepali | 87.5% (7/8) | 12 seconds | 12.5% |
| **T5: Text Size Adjustment** | Increase font size for readability | 75% (6/8) | 22 seconds | 25% |

---

## 4. Key Findings & Usability Issues Matrix

### Issue 1: Date Format Confusion (BS vs AD) [Severity: High]
- **Observation:** Participants P1, P4, and P6 were confused when asked to enter their Date of Birth using the native HTML5 date picker because it expects Gregorian calendar dates (AD), whereas their citizenship documents use Bikram Sambat (BS).
- **Participant Quote:** *"नागरिकतामा २०३८ साल छ, यहाँ त 1981 खोज्छ, कसरी बदल्ने थाहा भएन।"* (My citizenship says year 2038, here it asks for 1981, I don't know how to convert.)
- **Design Iteration:** Added dual-mode date input guidelines with explicit helper text explaining AD/BS conversion and placeholder hints (`YYYY-MM-DD`).

### Issue 2: Fear of Losing Progress During Uploads [Severity: Medium]
- **Observation:** On 3G connections, P1 and P6 hesitated before pressing "Next" on the Document Upload screen, fearing they would lose previously typed family details.
- **Participant Quote:** *"कागजात हाल्दा अगाडिको मेटियो कि भनेर डर लाग्यो।"* (I was afraid earlier fields were wiped when uploading documents.)
- **Design Iteration:** Introduced an explicit **"Save Draft (मस्यौदा सुरक्षित)"** button with persistent `localStorage` and a clear confirmation toast notifications.

### Issue 3: Text Size Discoverability on Small Screens [Severity: Low]
- **Observation:** P8 did not notice the font size toggles in the top bar on mobile screens because they were condensed into the utility bar.
- **Design Iteration:** Styled font control icons with explicit outline states and added text enlargement shortcuts within the mobile drawer menu.

---

## 5. System Usability Scale (SUS) Results

$$SUS = \left( \sum (\text{Odd items} - 1) + \sum (5 - \text{Even items}) \right) \times 2.5$$

- **Individual Scores:**
  - P1: 72.5
  - P2: 90.0
  - P3: 77.5
  - P4: 75.0
  - P5: 87.5
  - P6: 70.0
  - P7: 82.5
  - P8: 72.5
- **Aggregate SUS Score:** **78.4 / 100**  
  *Interpretation:* Exceeds standard industry average (68.0), placing Nagrik Sewa in the top 15th percentile of civic public service systems.

