# HORIZON MEDICAL — 510(k) Premarket Notification

**Documento:** HM-510K-001  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**510(k) Number:** [To be assigned by FDA]  
**Referencia:** 21 CFR Part 807 Subpart E  

---

## Cover Letter

[Date]

Document Mail Center (HFZ-401)  
Center for Devices and Radiological Health  
Food and Drug Administration  
10903 New Hampshire Avenue  
Silver Spring, MD 20993-0002  

**Re: 510(k) Premarket Notification for Horizon Medical Holter ECG System (HM-H100)**

Dear Sir/Madam:

Enclosed please find a 510(k) Premarket Notification for the Horizon Medical Holter ECG System (HM-H100), an ambulatory electrocardiographic monitoring system with AI-assisted arrhythmia detection, manufactured by [Manufacturer Name].

This submission is being made pursuant to Section 510(k) of the Federal Food, Drug, and Cosmetic Act. The device is classified under 21 CFR 870.2340, Product Code DRX (Electrocardiograph, Ambulatory), as a Class II medical device.

The predicate device is the iRhythm Zio XT Patch System (K142497). Additional reference devices include BioTelemetry MCOT (K162604) and Cardiac Insight Cardea SOLO (K173437).

A User Fee has been submitted as required under MDUFA.

We certify that the information provided in this submission is truthful and accurate, and that no material fact has been omitted.

Please contact the undersigned with any questions regarding this submission.

Respectfully submitted,

_________________________  
[Name], [Title]  
[Company Name]  
[Address]  
[Phone] | [Email]  
Contact Person for FDA Communications: [Name], [Title]

---

## Section 1: 510(k) Summary (21 CFR 807.92)

### 1.1 Submitter Information

| Field | Detail |
|---|---|
| Submitter | [Company Name] |
| Address | [Full Address] |
| Contact Person | [Name, Title] |
| Phone | [Phone Number] |
| Email | [Email Address] |
| Date Prepared | [Date] |

### 1.2 Device Information

| Field | Detail |
|---|---|
| Device Trade Name | Horizon Medical Holter ECG System |
| Device Common Name | Ambulatory Electrocardiographic Monitoring System |
| Device Model | HM-H100 |
| Regulatory Class | Class II |
| Product Code | DRX |
| Regulation Number | 21 CFR 870.2340 |
| Panel | Cardiovascular |

### 1.3 Predicate Device

| Field | Detail |
|---|---|
| Predicate Trade Name | Zio XT Patch System |
| Predicate 510(k) Number | K142497 |
| Predicate Manufacturer | iRhythm Technologies, Inc. |

### 1.4 Device Description Summary

The Horizon Medical Holter ECG System is a prescription-use ambulatory electrocardiographic monitoring system intended for continuous recording and analysis of ECG signals for up to 48 hours. The system consists of a wearable ECG acquisition device (3-channel, Ag/AgCl surface electrodes), a mobile application (iOS/Android), a cloud-based analysis backend incorporating an AI/ML-based arrhythmia detection algorithm (CNN-LSTM), and a clinical web dashboard.

### 1.5 Substantial Equivalence Summary

The Horizon Medical Holter ECG System has the same intended use as the predicate device (ambulatory ECG monitoring with arrhythmia detection). Technological differences (3-channel vs. 1-channel ECG, real-time BLE connectivity, CNN-LSTM algorithm) do not raise new questions of safety or effectiveness, as demonstrated by bench testing, software verification and validation, AI algorithm validation, biocompatibility evaluation, and usability testing.

---

## Section 2: Indications for Use (FDA Form 3881)

### Indications for Use Statement

**510(k) Number:** [To be assigned]  
**Device Name:** Horizon Medical Holter ECG System  
**Indications for Use:**

The Horizon Medical Holter ECG System is a prescription-use device intended for use by healthcare professionals for the continuous recording, storage, analysis, and display of ambulatory electrocardiographic (ECG) data from adult patients (≥18 years) for up to 48 hours.

The device records 3-channel ECG signals using surface electrodes placed on the patient's chest. The system includes an AI-based software function that provides automated detection and classification of cardiac arrhythmias, including atrial fibrillation, ventricular tachycardia, bradycardia, and premature complexes, as a clinical decision support tool.

The AI-based arrhythmia detection results are intended to assist, not replace, the clinical judgment of a qualified healthcare professional. All AI-generated results must be reviewed and confirmed by a physician before any clinical action is taken.

**Prescription Use** ☑  
**Over-The-Counter Use** ☐

---

## Section 3: Device Description

### 3.1 System Overview

[See detailed description in 00-CLASIFICACION-DISPOSITIVO.md, Section 1]

The system comprises:
1. **Wearable ECG Device (HM-H100):** Portable 3-channel ECG recorder with nRF52832 SoC, ADS1298 AFE, BLE 5.0 connectivity, LiPo battery (≥48h)
2. **Mobile Application:** iOS/Android app for real-time ECG display, data relay, symptom logging
3. **Cloud Backend:** Secure data processing, storage, AI/ML inference engine
4. **AI Module:** CNN-LSTM model for automated arrhythmia detection (11 classes)
5. **Clinical Dashboard:** Web-based interface for physician review and report generation

### 3.2 Principles of Operation

The device acquires surface ECG signals via Ag/AgCl electrodes, digitizes them at 500 Hz with 24-bit resolution, applies digital filtering, and transmits data via BLE to a mobile device. The mobile app relays data to the cloud backend via HTTPS/TLS 1.3. The AI module analyzes ECG segments using a CNN-LSTM architecture to detect and classify arrhythmias. Results are presented on the clinical dashboard for physician review.

---

## Section 4: Substantial Equivalence Discussion

### 4.1 Comparison Table

| Feature | Horizon HM-H100 (Subject) | Zio XT (Predicate K142497) | Difference Raises New Q? |
|---|---|---|---|
| **Intended Use** | Ambulatory ECG monitoring + arrhythmia detection | Ambulatory ECG monitoring + arrhythmia detection | No — Same |
| **Patient Contact** | Ag/AgCl electrodes on chest | Ag/AgCl electrodes on chest | No — Same |
| **Number of Channels** | 3 channels | 1 channel | No — More channels provide more diagnostic information |
| **Recording Duration** | Up to 48 hours | Up to 14 days | No — Shorter duration, same diagnostic purpose |
| **Data Transmission** | Real-time via BLE + cloud | Store and forward (mail-in device) | No — Real-time provides earlier detection |
| **Arrhythmia Analysis** | AI/ML (CNN-LSTM) | Proprietary algorithm | No — Both use computerized analysis |
| **Power Source** | Rechargeable LiPo | Non-rechargeable battery | No — Same function |
| **Biocompatibility** | Ag/AgCl, ABS/PC housing | Ag/AgCl, medical adhesive | No — Same material class |
| **Prescription Use** | Yes | Yes | No — Same |
| **Patient Population** | Adults ≥18 years | Adults ≥18 years | No — Same |

### 4.2 Technological Differences and Justification

**Difference 1: Real-time BLE connectivity (vs. store-and-forward)**
- This represents an improvement that enables earlier detection of critical arrhythmias
- BLE communication is a well-established technology with known safety profile
- Does not raise new safety or effectiveness questions

**Difference 2: AI/ML algorithm (CNN-LSTM vs. proprietary)**
- Both devices use computerized arrhythmia detection algorithms
- The CNN-LSTM architecture has been validated to achieve performance comparable to or exceeding the predicate's algorithm (see Performance Data section)
- The AI module functions as a clinical decision support tool, same as the predicate
- Comprehensive AI/ML documentation provided per FDA guidance

**Difference 3: 3-channel ECG (vs. 1-channel)**
- Additional channels provide more diagnostic information
- This is a clinical improvement, not a new safety concern
- 3-channel Holter is the traditional standard configuration

### 4.3 Conclusion

The Horizon Medical Holter ECG System is **substantially equivalent** to the predicate device (Zio XT, K142497). The identified technological differences do not raise new questions of safety or effectiveness, as demonstrated by the non-clinical and clinical data presented in this submission.

---

## Section 5: Performance Data

### 5.1 Non-Clinical (Bench) Testing

| Test | Standard | Result |
|---|---|---|
| Electrical Safety | IEC 60601-1:2020 | PASS — Report #[XXX] |
| EMC | IEC 60601-1-2:2014+AMD1 | PASS — Report #[XXX] |
| Holter-specific | IEC 60601-2-47:2012+AMD1 | PASS — Report #[XXX] |
| ECG Accuracy | AHA/AAMI EC38 | Meets all accuracy requirements |
| Battery Safety | IEC 62133-2:2017 | PASS — Report #[XXX] |
| Biocompatibility | ISO 10993-5, -10 | PASS — Report #[XXX] |
| BLE Performance | Bluetooth SIG | PASS — Range ≥10m, stable throughput |

### 5.2 Software Testing Summary

| Test Level | Test Cases | Pass | Fail | Coverage |
|---|---|---|---|---|
| Unit Testing | [N] | [N] | 0 | [%] |
| Integration Testing | [N] | [N] | 0 | — |
| System Testing | [N] | [N] | 0 | — |
| Regression Testing | [N] | [N] | 0 | — |

### 5.3 AI/ML Algorithm Performance

| Arrhythmia | Sensitivity | Specificity | AUC-ROC |
|---|---|---|---|
| Atrial Fibrillation | [≥95%] | [≥95%] | [≥0.97] |
| Ventricular Tachycardia | [≥95%] | [≥98%] | [≥0.98] |
| Bradycardia | [≥90%] | [≥95%] | [≥0.95] |
| PVC | [≥85%] | [≥95%] | [≥0.93] |

[Full AI/ML documentation provided as separate exhibit]

### 5.4 Usability Testing Summary

| Population | N | Critical Use Errors | Task Completion |
|---|---|---|---|
| Patients | [N] | 0 | [≥95%] |
| Clinicians (dashboard) | [N] | 0 | [≥95%] |
| Technicians (placement) | [N] | 0 | [100%] |

---

## Section 6: Labeling

### 6.1 Instructions for Use (Summary)

The complete Instructions for Use (IFU) are provided as Exhibit [X] and include:
- Device description and components
- Indications for use and contraindications
- Warnings and precautions
- Patient preparation and electrode placement instructions
- Mobile app setup and operation
- Troubleshooting guide
- Technical specifications
- Explanation of AI/ML functionality and limitations
- Symbol glossary (ISO 15223-1)
- Maintenance and disposal instructions

### 6.2 Key Warnings and Precautions

- **Rx Only** — Federal law restricts this device to sale by or on the order of a physician
- The AI-based arrhythmia detection is intended as a decision support tool only. All results must be reviewed and confirmed by a qualified healthcare professional.
- Not intended for real-time patient monitoring in acute care settings (ICU, ER)
- Not validated for pediatric patients (<18 years)
- Patients with implanted electronic devices should consult their physician before use

---

## Section 7: Standards and Declarations of Conformity

| Standard | Title | Declaration |
|---|---|---|
| IEC 60601-1:2020 | General safety and essential performance | Full conformity declared |
| IEC 60601-1-2:2014+AMD1 | EMC requirements | Full conformity declared |
| IEC 60601-1-6:2010+AMD1+AMD2 | Usability | Full conformity declared |
| IEC 60601-1-11:2015+AMD1 | Home healthcare environment | Full conformity declared |
| IEC 60601-2-47:2012+AMD1 | Ambulatory ECG | Full conformity declared |
| IEC 62304:2006+AMD1 | Medical device software lifecycle | Full conformity declared |
| IEC 62366-1:2015+AMD1 | Usability engineering | Full conformity declared |
| ISO 10993-1:2018 | Biocompatibility evaluation | Full conformity declared |
| ISO 14971:2019 | Risk management | Full conformity declared |

---

## Section 8: Truthful and Accuracy Statement

I certify that, in my capacity as [Title] of [Company Name], this submission includes all information, published or known to me, that is relevant to the evaluation of safety and effectiveness of the device. I further certify that no material fact has been omitted, and that the information presented is truthful and accurate to the best of my knowledge.

Signature: _________________________  
Name: [Name]  
Title: [Title]  
Date: [Date]

---

## Exhibits List

| Exhibit | Document | Pages |
|---|---|---|
| A | Indications for Use (FDA Form 3881) | 1 |
| B | Device Description and Specifications | [N] |
| C | Substantial Equivalence Comparison | [N] |
| D | Electrical Safety Test Report (IEC 60601-1) | [N] |
| E | EMC Test Report (IEC 60601-1-2) | [N] |
| F | Holter ECG Test Report (IEC 60601-2-47) | [N] |
| G | Biocompatibility Evaluation (ISO 10993) | [N] |
| H | Battery Safety Test Report (IEC 62133-2) | [N] |
| I | Software Documentation (IEC 62304) | [N] |
| J | AI/ML Documentation | [N] |
| K | Cybersecurity Documentation | [N] |
| L | SBOM | [N] |
| M | Risk Management Summary (ISO 14971) | [N] |
| N | Usability Summary (IEC 62366-1) | [N] |
| O | Clinical Performance Data | [N] |
| P | Labeling (IFU) | [N] |
| Q | Standards Declarations of Conformity | [N] |
| R | Financial Certification (FDA Form 3674) | [N] |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Regulatory Affairs | Creación inicial |

---

*Documento confidencial — Horizon Medical*
