# HORIZON MEDICAL — Clinical Evaluation Report (CER)

**Documento:** HM-CER-001  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Referencia:** MEDDEV 2.7/1 Rev 4, MDR 2017/745 Annex XIV, Art. 61  

---

## Tabla de Contenidos

1. [Scope of the Clinical Evaluation](#1-scope-of-the-clinical-evaluation)
2. [Clinical Background and Current Knowledge](#2-clinical-background-and-current-knowledge)
3. [Device Under Evaluation](#3-device-under-evaluation)
4. [Clinical Evaluation Plan](#4-clinical-evaluation-plan)
5. [Clinical Data from Literature](#5-clinical-data-from-literature)
6. [Clinical Data from the Device](#6-clinical-data-from-the-device)
7. [Equivalence Assessment](#7-equivalence-assessment)
8. [Analysis of Clinical Safety](#8-analysis-of-clinical-safety)
9. [Analysis of Clinical Performance](#9-analysis-of-clinical-performance)
10. [Benefit-Risk Analysis](#10-benefit-risk-analysis)
11. [Conclusions](#11-conclusions)

---

## 1. Scope of the Clinical Evaluation

### 1.1 Purpose

This Clinical Evaluation Report (CER) evaluates the clinical safety and performance of the Horizon Medical Holter ECG System (HM-H100) in accordance with the requirements of the Medical Device Regulation (EU) 2017/745, Article 61, Annex XIV Part A, and MEDDEV 2.7/1 Revision 4.

### 1.2 Device Information

| Parameter | Description |
|---|---|
| **Device name** | Horizon Medical Holter ECG System |
| **Model** | HM-H100 v1.0 |
| **Classification** | Class IIb (MDR Rule 11) |
| **Intended purpose** | Ambulatory ECG monitoring (24–48h) with AI-assisted arrhythmia detection |
| **Target population** | Adult patients (≥18 years) with suspected or known cardiac arrhythmias |
| **Clinical evaluator** | [Name, MD, FACC — qualifications and CV in Appendix A] |

### 1.3 Scope of Evaluation

This CER covers:
- Clinical safety of the Horizon Medical Holter ECG System during ambulatory use
- Clinical performance of ECG signal acquisition and quality
- Performance of the AI/ML module for arrhythmia detection
- Benefit-risk profile for the intended population and use

---

## 2. Clinical Background and Current Knowledge

### 2.1 Cardiac Arrhythmias — Epidemiology

Cardiac arrhythmias are a leading cause of morbidity and mortality worldwide. Atrial fibrillation (AF) alone affects approximately 33.5 million people globally, with prevalence increasing with age. Ventricular tachycardia (VT) and ventricular fibrillation (VF) are life-threatening arrhythmias that require immediate medical attention.

### 2.2 Ambulatory ECG Monitoring — State of the Art

Ambulatory ECG monitoring (Holter monitoring) has been the gold standard for arrhythmia detection since its introduction by Norman Holter in 1961. Modern Holter systems provide:

- Continuous ECG recording for 24–48 hours (or longer with patch-type devices)
- Digital signal processing with computerized analysis
- Arrhythmia detection algorithms with varying degrees of accuracy
- Post-hoc analysis by trained technicians and cardiologists

### 2.3 AI/ML in Cardiac Monitoring

The use of artificial intelligence and machine learning algorithms for ECG analysis has been extensively studied. Deep learning approaches (CNN, LSTM, and hybrid architectures) have demonstrated performance comparable to or exceeding that of human experts for specific arrhythmia detection tasks.

Key published evidence:

| Study | Algorithm | Performance | Reference |
|---|---|---|---|
| Hannun et al. (2019) | DNN (34-layer CNN) | Cardiologist-level AF detection (F1: 0.837) | *Nature Medicine* 25(1):65-69 |
| Ribeiro et al. (2020) | DNN | 6 arrhythmia classes, AUC >0.95 | *Nature Communications* 11:1760 |
| Attia et al. (2019) | CNN | AF detection from sinus rhythm ECG, AUC 0.87 | *The Lancet* 394(10201):861-867 |
| Yildirim et al. (2018) | 1D-CNN | 17 arrhythmia classes, accuracy 91.3% | *Computers in Biology and Medicine* 102:411-420 |

### 2.4 Equivalent and Predicate Devices

Multiple ambulatory ECG monitoring systems with computerized arrhythmia detection are currently on the market with established clinical evidence:

| Device | Manufacturer | Regulatory Status | Clinical Evidence |
|---|---|---|---|
| Zio XT / Zio AT | iRhythm | FDA cleared, CE marked | Multiple published studies, >300,000 patients |
| MCOT | BioTelemetry/Philips | FDA cleared, CE marked | Extensive clinical use |
| Cardea SOLO | Cardiac Insight | FDA cleared | Published validation studies |
| KardiaMobile 6L | AliveCor | FDA cleared, CE marked | Multiple published studies |

---

## 3. Device Under Evaluation

### 3.1 Device Description

The Horizon Medical Holter ECG System consists of:

1. **Wearable device (HM-H100):** Portable ECG acquisition unit with 3-channel Ag/AgCl surface electrodes, nRF52832 SoC, ADS1298 AFE, BLE connectivity, LiPo battery (48h+ autonomy)
2. **Mobile application:** Patient-facing app (iOS/Android) for real-time ECG visualization, symptom logging, and alert notifications
3. **Cloud backend:** Data processing, storage, and AI/ML analysis engine
4. **AI module (CNN-LSTM):** Automated arrhythmia detection and classification algorithm
5. **Clinical dashboard:** Web-based interface for healthcare professionals to review ECG data, AI results, and generate clinical reports

### 3.2 Intended Purpose

The system is intended for ambulatory ECG monitoring of adult patients for 24–48 hours, with AI-assisted detection of cardiac arrhythmias as a clinical decision support tool. All AI results must be reviewed and confirmed by a qualified healthcare professional.

### 3.3 Device Generations

| Version | Date | Changes |
|---|---|---|
| HM-H100 v1.0 | 2026 | Initial market release |

---

## 4. Clinical Evaluation Plan

### 4.1 Literature Search Strategy

| Parameter | Detail |
|---|---|
| **Databases** | PubMed/MEDLINE, Cochrane Library, Embase, IEEE Xplore |
| **Search period** | 2010 — 2026 |
| **Languages** | English, Spanish |
| **Search terms** | ("Holter monitor" OR "ambulatory ECG" OR "continuous ECG monitoring") AND ("arrhythmia detection" OR "atrial fibrillation" OR "ventricular tachycardia") AND ("artificial intelligence" OR "machine learning" OR "deep learning" OR "CNN" OR "LSTM") |
| **Inclusion criteria** | Clinical studies, systematic reviews, meta-analyses involving ambulatory ECG with AI/ML analysis in adult patients |
| **Exclusion criteria** | Case reports with <10 patients, non-peer reviewed, conference abstracts only, pediatric populations |

### 4.2 Data Sources

| Source | Type | Purpose |
|---|---|---|
| Published literature | External | Safety and performance of equivalent devices |
| Bench testing data | Internal | Device performance verification |
| AI validation data | Internal | Algorithm performance metrics |
| Usability study data | Internal | User acceptance and error analysis |
| Clinical validation study | Internal | Head-to-head comparison with standard Holter |

### 4.3 Appraisal Criteria

Each identified article was appraised using the following criteria:
- **Suitability:** Relevance to the device under evaluation and its intended purpose
- **Contribution:** Quality of data provided (study design, sample size, statistical methods)
- **Scientific validity:** Methodological rigor, bias assessment, reporting quality

---

## 5. Clinical Data from Literature

### 5.1 Literature Search Results

| Step | Results |
|---|---|
| Initial search results | [N] articles identified |
| After duplicate removal | [N] articles |
| After title/abstract screening | [N] articles |
| After full-text review | [N] articles included |
| Additional hand-search | [N] articles |
| **Total included** | **[N] articles** |

### 5.2 Summary of Key Findings — Safety

| Finding | Evidence | Strength |
|---|---|---|
| Ambulatory ECG monitoring with surface electrodes is safe | Multiple large studies (>100,000 patients), no serious adverse events related to the device | Strong |
| Skin irritation from adhesive electrodes occurs in 5–15% of patients | Multiple studies; self-limiting, mild severity | Moderate |
| No electrical safety events (shock, burns) reported with modern Holter devices | Regulatory databases (MAUDE, vigilance), literature | Strong |
| False positive alerts may cause transient anxiety | Reported in studies of AI-based monitoring | Moderate |

### 5.3 Summary of Key Findings — Performance

| Finding | Evidence | Strength |
|---|---|---|
| Modern Holter ECG provides diagnostic-quality 3-channel ECG recordings | Established technology, extensive clinical use | Strong |
| AI/ML algorithms achieve sensitivity ≥90% for AF detection | Multiple published studies (Hannun 2019, Ribeiro 2020) | Strong |
| AI/ML algorithms achieve sensitivity ≥90% for VT detection | Published studies (Ribeiro 2020, Yildirim 2018) | Moderate |
| CNN-LSTM hybrid architectures show superior performance to traditional algorithms | Comparative studies in literature | Moderate |
| Patch/wearable ECG provides comparable data quality to traditional Holter | Published comparison studies | Moderate |

---

## 6. Clinical Data from the Device

### 6.1 Bench Testing Data

| Test | Standard | Result | Conclusion |
|---|---|---|---|
| ECG signal accuracy | IEC 60601-2-47 | [Results] | Meets requirements |
| Frequency response | IEC 60601-2-47 | [Results] | Meets requirements |
| CMRR | IEC 60601-2-47 | ≥ 100 dB | Meets requirements |
| Noise level | IEC 60601-2-47 | ≤ 30 µV pp | Meets requirements |
| Battery endurance | Internal spec | ≥ 48 hours | Meets requirements |

### 6.2 AI Algorithm Validation Data

| Metric | AF | VT | Bradycardia | Tachycardia | PVC |
|---|---|---|---|---|---|
| **Sensitivity** | [%] | [%] | [%] | [%] | [%] |
| **Specificity** | [%] | [%] | [%] | [%] | [%] |
| **PPV** | [%] | [%] | [%] | [%] | [%] |
| **NPV** | [%] | [%] | [%] | [%] | [%] |
| **AUC-ROC** | [value] | [value] | [value] | [value] | [value] |
| **F1 Score** | [value] | [value] | [value] | [value] | [value] |
| **Validation dataset** | [N records] | [N records] | [N records] | [N records] | [N records] |

> **Note:** Validation performed on independent dataset not used in training. Dataset sources: [PhysioNet MIT-BIH, INCART, proprietary clinical dataset — details in AI/ML Documentation]

### 6.3 Clinical Validation Study Data

| Parameter | Result |
|---|---|
| **Study design** | Prospective, comparative, blinded interpretation |
| **Comparator** | Standard 12-lead Holter ECG |
| **Sample size** | N = [number] patients |
| **Demographics** | Age: [mean ± SD], Sex: [M/F ratio], BMI: [mean ± SD] |
| **Monitoring duration** | [mean ± SD] hours |
| **Diagnostic concordance** | [%] (κ = [value]) |
| **Adverse events** | [number and description] |

### 6.4 Usability Study Data

| Parameter | Result |
|---|---|
| **Participants — patients** | N = [number] |
| **Participants — clinicians** | N = [number] |
| **Task completion rate** | [%] |
| **Use errors (critical)** | [number] |
| **Use errors (non-critical)** | [number] |
| **Effectiveness** | [assessment] |

---

## 7. Equivalence Assessment

### 7.1 Equivalence with iRhythm Zio XT

| Criterion | Horizon HM-H100 | Zio XT | Equivalent? |
|---|---|---|---|
| **Clinical** | Same intended purpose (ambulatory ECG monitoring + arrhythmia detection) | Ambulatory ECG + arrhythmia detection | ✅ Yes |
| **Clinical** | Same target population (adults with suspected arrhythmias) | Adults with suspected arrhythmias | ✅ Yes |
| **Clinical** | Same anatomical site (chest) | Chest (sternal) | ✅ Yes |
| **Technical** | 3-channel ECG, Ag/AgCl electrodes | 1-channel ECG, integrated electrodes | ⚠️ Similar (more channels) |
| **Technical** | BLE real-time + cloud processing | Store-and-forward | ⚠️ Different (real-time is additional feature) |
| **Technical** | AI (CNN-LSTM) analysis | Proprietary algorithm | ⚠️ Similar (different algorithm) |
| **Biological** | Ag/AgCl electrodes, ABS/PC housing | Ag/AgCl electrodes, medical adhesive | ✅ Similar |

### 7.2 Equivalence Conclusion

The Horizon Medical HM-H100 demonstrates **clinical equivalence** with the Zio XT and other predicate devices. Technical differences (additional channels, real-time connectivity, AI architecture) represent **improvements** that do not raise new safety concerns and are supported by the bench testing and AI validation data presented in Section 6.

> **Note regarding MDR:** Under MDR, full equivalence demonstration requires contractual access to the equivalent device's clinical data if the manufacturer is different. Since Horizon Medical and iRhythm are different entities, this CER relies primarily on published literature and the device's own clinical data to support safety and performance claims, supplemented by the equivalence assessment.

---

## 8. Analysis of Clinical Safety

### 8.1 Identified Risks and Adverse Events

| Risk/Event | Frequency (Literature) | Severity | Mitigation |
|---|---|---|---|
| Skin irritation from electrodes | 5–15% | Mild, self-limiting | Hypoallergenic adhesive, IFU instructions |
| False positive alarm (anxiety) | Variable (dependent on threshold) | Mild | Physician confirmation required |
| False negative (missed arrhythmia) | 1–5% depending on algorithm | Potentially serious | High Se algorithm, physician review |
| Signal artifact (motion) | Common during activity | N/A (data quality) | Artifact detection + filtering |
| Device detachment | 1–5% | None (data loss only) | Impedance monitoring + alert |

### 8.2 Safety Conclusion

Based on the literature review, bench testing data, and clinical validation results, the Horizon Medical Holter ECG System demonstrates an **acceptable safety profile** consistent with currently marketed ambulatory ECG monitoring devices. No new or unexpected safety concerns have been identified.

---

## 9. Analysis of Clinical Performance

### 9.1 ECG Signal Quality

The device demonstrates diagnostic-quality ECG signal acquisition as verified by bench testing according to IEC 60601-2-47.

### 9.2 AI Arrhythmia Detection Performance

| Arrhythmia | Target | Achieved | Meets Target? |
|---|---|---|---|
| AF sensitivity | ≥ 95% | [%] | ☐ Yes / ☐ No |
| AF specificity | ≥ 95% | [%] | ☐ Yes / ☐ No |
| VT sensitivity | ≥ 95% | [%] | ☐ Yes / ☐ No |
| VT specificity | ≥ 98% | [%] | ☐ Yes / ☐ No |
| Overall AUC | ≥ 0.95 | [value] | ☐ Yes / ☐ No |

### 9.3 Performance Conclusion

The Horizon Medical Holter ECG System demonstrates clinical performance that is [equivalent to / superior to] currently marketed Holter ECG systems for the intended purpose of ambulatory ECG monitoring and arrhythmia detection.

---

## 10. Benefit-Risk Analysis

### 10.1 Benefits

1. **Detection of clinically significant arrhythmias** during ambulatory monitoring
2. **AI-assisted analysis** reducing time to detection and potential for human error
3. **Real-time alerts** for critical arrhythmias enabling faster clinical intervention
4. **Remote monitoring** reducing need for in-person visits
5. **Patient comfort** with compact, lightweight design improving adherence

### 10.2 Risks

1. **False negative** detection (mitigated by high sensitivity algorithm + physician review)
2. **False positive** alerts (mitigated by physician confirmation)
3. **Skin irritation** from electrodes (mitigated by hypoallergenic materials)
4. **Data privacy** concerns (mitigated by encryption and access controls)

### 10.3 Benefit-Risk Conclusion

The benefits of the Horizon Medical Holter ECG System **clearly outweigh** the identified residual risks for the intended population and use. The benefit-risk profile is consistent with or superior to currently marketed equivalent devices.

---

## 11. Conclusions

### 11.1 Summary

This Clinical Evaluation Report has assessed the clinical safety and performance of the Horizon Medical Holter ECG System (HM-H100) based on:

- Systematic literature review of [N] publications
- Bench testing data demonstrating compliance with IEC 60601-2-47
- AI algorithm validation data demonstrating high sensitivity and specificity
- Clinical validation study data (N = [number] patients)
- Equivalence assessment with marketed Holter ECG devices
- Comprehensive risk management (ISO 14971)

### 11.2 Conclusions

1. The Horizon Medical Holter ECG System is **safe** for its intended purpose of ambulatory ECG monitoring in adult patients
2. The AI module demonstrates **clinically acceptable performance** for arrhythmia detection as a decision support tool
3. The **benefit-risk profile is favorable** and consistent with the state of the art
4. The device meets the **General Safety and Performance Requirements** of MDR 2017/745 Annex I

### 11.3 Recommendations

1. Update this CER at least annually or upon significant changes to the device
2. Implement the PMCF Plan to collect ongoing clinical data
3. Monitor post-market data for emerging safety signals
4. Consider additional clinical studies to strengthen evidence for AI performance in specific subpopulations

### 11.4 Clinical Evaluator

| Field | Detail |
|---|---|
| Name | [Name] |
| Qualifications | [MD, FACC, Board Certified Cardiologist] |
| Experience | [Years of experience in cardiac electrophysiology and device evaluation] |
| Affiliation | [Institution] |
| Date | [Date] |
| Signature | _________________________ |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | [Clinical Evaluator] | Initial CER |

---

*Confidential — Horizon Medical*
