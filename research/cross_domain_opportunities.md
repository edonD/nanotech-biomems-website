# Cross-Domain Opportunities: Nanotechnology, BioMEMS, and Microsystems

## Gaps Between Academic Breakthroughs and Commercial Products

*Research Date: March 11, 2026*

---

## Executive Summary

This report maps the landscape across 14 high-potential domains at the intersection of nanotechnology, BioMEMS, and microsystems engineering. The goal is to identify gaps where recent academic breakthroughs have not yet been commercialized -- areas ripe for a microsystems engineer to build a defensible product. After exhaustive search across each domain, we identify the most promising white-space opportunities ranked by technical feasibility, market pain, recency of enabling breakthroughs, defensibility, and competitive landscape.

---

## 1. Organ-on-Chip for Drug Testing

### State of the Field
The organ-on-chip market is growing rapidly, projected from ~$390M (2025) to ~$510M (2026), driven by the FDA Modernization Act 2.0 and the October 2025 FDA decision to phase out compulsory animal studies for monoclonal antibodies. Drug discovery platforms account for 57% of market share, while disease modeling is expanding at 33% CAGR.

### The Gap
Despite growing adoption, organ-on-chip systems have **not yet been integrated into standard drug-development pipelines**. The technology remains largely in validation phases at pharmaceutical labs. Key barriers include reproducibility across batches, standardization of readouts, and the lack of multi-organ interconnected systems that model systemic drug effects. Only 1 in 1,000 drug candidates survives preclinical testing, and 90% of those still fail in clinical trials -- indicating that current preclinical models (including early organ-on-chip) remain inadequate.

### Competitive Landscape
Emulate, TissUse, Hesperos, and CN Bio are established players. The space is **moderately crowded** but fragmented -- most companies focus on single-organ models (liver, lung, kidney). Interconnected multi-organ systems and standardized readout platforms remain underserved.

### Opportunity Assessment
- Technical feasibility: Medium-high (requires biology expertise beyond pure MEMS)
- Market pain: Very high ($2.6B wasted annually on failed drug candidates)
- Competitive density: Moderate -- 5+ well-funded startups already active
- **Verdict: Interesting but crowded. Better as a component supplier than as a platform play.**

---

## 2. Next-Generation Continuous Glucose Monitors (CGMs)

### State of the Field
The CGM market is dominated by Abbott (FreeStyle Libre), Dexcom, and Medtronic. Next-gen developments include plasmonic nanopillar arrays for sweat-based detection (Nature, 2025), coin-sized OECT-based systems with microneedle patches (Science Advances), and implantable devices lasting up to 3 years (Glucotrack, pivotal trial expected 2026).

### The Gap
The frontier is moving **beyond glucose to multi-analyte monitoring**. Sava is developing a wearable patch tracking glucose, cortisol, lactate, and ketones simultaneously. Abbott is working on dual glucose-ketone sensing. Project Gemini (CES 2025) showed a self-powered implant. However, **no commercial product yet offers continuous, simultaneous multi-biomarker monitoring from a single MEMS sensor**.

Non-invasive detection remains the holy grail. Sweat-based plasmonic nanopillar sensors demonstrated at lab scale have not been productized. The correlation between sweat glucose and blood glucose remains a scientific challenge.

### Competitive Landscape
Extremely crowded with deep-pocketed incumbents (Abbott, Dexcom, Medtronic) and well-funded startups (Glucotrack, Sava, Senseonics/Eversense).

### Opportunity Assessment
- Technical feasibility: High for MEMS engineer
- Market pain: Massive ($30B+ diabetes management market)
- Competitive density: Very high
- **Verdict: Too crowded for a new entrant unless targeting a very specific niche (e.g., multi-analyte implantable for clinical research).**

---

## 3. Liquid Biopsy via Microfluidic Chip for Cancer Detection

### State of the Field
Liquid biopsy is moving beyond mutation-centric cfDNA assays toward multimodal frameworks integrating CTCs, extracellular vesicles (EVs), and multiple analyte types. Microfluidic platforms use immunoaffinity capture, nanostructured surfaces, and acoustofluidics for processing. Multi-cancer early detection (MCED) tests are a major trend.

### The Gap
EV/exosome-based detection faces challenges of **low sensitivity, subtype heterogeneity, and isolation purity**. A fully integrated centrifugal microfluidic disc (iExoDisc) achieved 3-6x higher purity than ultracentrifugation and can process samples in 45 minutes. Another system (Exo-CMDS) achieved 91% lung cancer diagnostic accuracy with detection in 8 minutes. These are **lab demonstrations not yet in commercial products**.

The market for exosome diagnostics is projected to grow from $41.3M (2025) to $401.7M by 2032 (31% CAGR). mdxhealth acquired Exosome Diagnostics in September 2025. While ~110 clinical studies on ClinicalTrials.gov involve exosome biomarkers, **no microfluidic-based exosome isolation device is commercially available as a standardized clinical product**.

### Competitive Landscape
Exosome Diagnostics (acquired), Bio-Techne, and several academic spin-outs. The microfluidic isolation hardware is the missing piece -- most companies focus on downstream analysis.

### Opportunity Assessment
- Technical feasibility: High (microfluidic chip design is core MEMS)
- Market pain: Extreme (cancer early detection is a $50B+ opportunity)
- Recent breakthroughs: iExoDisc, Exo-CMDS (2024-2025)
- Competitive density: Low for the hardware/chip itself
- **Verdict: STRONG OPPORTUNITY. Microfluidic exosome isolation chip as a platform component.**

---

## 4. Rapid Sepsis Diagnostics at Point of Care

### State of the Field
The sepsis diagnostics market is ~$510M and growing at 9% CAGR. Stanford Medicine received FDA clearance (January 2026) for a test reducing diagnosis to ~30 minutes. A machine learning + centrifugal microfluidic platform achieved ~90% prediction accuracy. Multiplexed biomarker detection (PCT, IL-6, CRP) on magnetic droplet microfluidic chips has been demonstrated. Digital ELISA on microfluidics can profile cytokines from just 3.5 uL of whole blood in 2 hours.

### The Gap
There is a **lack of validated POCT platforms capable of delivering real-time omics-based diagnostics in sepsis**. Current rapid tests measure single biomarkers (procalcitonin, CRP) or use deformability cytometry (Cytovale). **No commercial product simultaneously quantifies multiple sepsis biomarkers from a single drop of blood at the bedside in under 30 minutes.**

Key startups: Cytovale (IntelliSep, FDA-cleared, deformability-based), Melio ($3.5M CARB-X funding, molecular + microfluidic, 3-hour pathogen ID), Cellectric (Austrian, pathogen isolation, commercial target 2027), Inflammatix (gene expression-based). The NRC developed the PowerBlade platform (RNA extraction + amplification + detection from <50 uL blood), but it remains a research prototype.

### Competitive Landscape
Active but fragmented. Most solutions address only part of the problem (pathogen ID OR host response, not both). No single chip does multiplexed host biomarker quantification + pathogen identification.

### Opportunity Assessment
- Technical feasibility: High (microfluidic chip + immunoassay integration)
- Market pain: Critical (sepsis kills 11M/year globally, every hour of delay increases mortality 7%)
- Recent breakthroughs: ML + centrifugal microfluidics (Nature Comms, 2025), multiplexed droplet CLIA (2025)
- Competitive density: Moderate but no dominant player in multiplexed POCT
- **Verdict: STRONG OPPORTUNITY. Multiplexed sepsis biomarker chip combining host response + pathogen markers.**

---

## 5. Rapid Antibiotic Susceptibility Testing (AST) via Microfluidics

### State of the Field
Antimicrobial resistance is a critical global health threat. Over 90 rapid AST technologies have been characterized. The Selux DX system received FDA clearance in 2023. The AutoEnricher system (2026) combines microfluidics + ML for 20-minute pathogen diagnosis at 95% accuracy. Droplet microfluidic platforms detect rare resistant subpopulations in bloodstream infections (Science Advances, 2025). Single-cell resolution phenotypic AST in microfluidic droplets achieved MIC determination using convolutional neural networks.

### The Gap
Despite many academic demonstrations, **the gap between lab-demonstrated single-cell AST and clinical deployment remains wide**. Most rapid AST systems still require overnight culture before testing. The SDFAST (Self-Diluting SlipChip) device enables seconds-fast antibiotic dilution but is not commercialized. Direct-from-blood phenotypic AST without culture remains an unsolved commercial challenge.

### Competitive Landscape
Selux (FDA-cleared), Accelerate Diagnostics (PhenoTest), Specific Diagnostics, and several pre-commercial academic platforms. The space is **moderately crowded** with well-funded players.

### Opportunity Assessment
- Technical feasibility: High (droplet microfluidics + optical detection)
- Market pain: Extreme (AMR costs $55B/year in US alone)
- Competitive density: Moderate-high
- **Verdict: Promising but requires differentiation. Direct-from-blood, culture-free AST in <2 hours would be transformative if achievable.**

---

## 6. Environmental Microplastic/Nanoplastic Detection Sensors

### State of the Field
Microplastics have been found in human blood, placenta, and lungs, causing inflammation, DNA damage, and potentially cancer. The microplastics sensor market is projected to reach $450M by 2033 (15.5% CAGR). Current detection relies on expensive lab equipment (FTIR, Raman spectroscopy, pyrolysis-GC-MS). Academic advances include AI-enabled plasmonic probes detecting nanoplastics in 3 minutes from 2 uL samples, portable Raman spectrometers, and microfluidic capture systems.

### The Gap
The market is **dominated by large analytical instrument companies** (Thermo Fisher, Agilent, Bruker, PerkinElmer) selling lab-grade equipment costing $50K-$500K. **There is no portable, affordable (<$5K), real-time microplastic sensor available commercially.** Academic prototypes exist (portable optical sensors, smartphone-integrated devices, MEMS-based mass sensors for sparse particle analysis) but none have been productized. The gap between a $200K Raman microscope and a field-deployable sensor is entirely unfilled.

For health monitoring specifically, no device can quantify microplastics/nanoplastics in blood or biological samples outside a research lab. This is a massive unmet need given the growing health concerns.

### Competitive Landscape
No startups have commercialized a portable microplastic sensor. The field is entirely occupied by large instrument companies selling research-grade equipment. This is **wide open** for a MEMS/microsystems approach.

### Opportunity Assessment
- Technical feasibility: Medium-high (MEMS resonator + microfluidic pre-concentration)
- Market pain: Growing rapidly (regulatory pressure, public health concern)
- Recent breakthroughs: AI + plasmonic nanoprobes (2024), portable Raman (2025), MEMS mass sensing (2025)
- Competitive density: Very low for portable/affordable devices
- **Verdict: VERY STRONG OPPORTUNITY. Portable, affordable microplastic sensor is a wide-open gap.**

---

## 7. Personal Air Quality Monitors with MEMS Nanosensors

### State of the Field
Commercial products exist from Sensirion (SEN6x platform), Bosch (BME688 with AI), and consumer devices like Atmotube PRO 2. MEMS-based particulate matter sensors are mature. The BME688 combines gas, humidity, temperature, and pressure sensing with on-chip AI.

### Competitive Landscape
Well-served market with established MEMS companies. Consumer products exist at $100-300 price points.

### Opportunity Assessment
- Competitive density: High
- **Verdict: Too crowded. Incremental improvements possible but not a white-space opportunity.**

---

## 8. Food Safety Rapid Biosensors

### State of the Field
CRISPR/Cas biosensors can detect Salmonella DNA/RNA within 1 hour. Nanotechnology-enhanced biosensors use quantum dots and MXenes for ultra-sensitive detection. Smartphone-integrated platforms are emerging. Integration of AI, IoT, and nanotechnology is a key trend.

### The Gap
The gap is in **integration and field deployment**. Academic demonstrations of rapid pathogen detection are abundant, but **no single integrated device combines sample prep, multiplexed pathogen detection, and toxin screening in a handheld format for food industry use**. Current commercial rapid tests (lateral flow assays) are single-analyte and less sensitive than lab methods.

### Competitive Landscape
3M, bioMerieux, Neogen, Romer Labs dominate with conventional rapid tests. Few startups address the MEMS/microfluidic angle.

### Opportunity Assessment
- Technical feasibility: High
- Market pain: High ($15.6B food safety testing market)
- Competitive density: Moderate (incumbents use older technology)
- **Verdict: Moderate opportunity. Regulatory pathway is long for food safety devices.**

---

## 9. Real-Time Water Contamination Sensors (PFAS Focus)

### State of the Field
PFAS ("forever chemicals") detection is a rapidly emerging field. The University of Chicago/Argonne developed ML-designed probes detecting PFAS at 250 parts per quadrillion in minutes. Harvard's Wyss Institute has PFASense (electrochemical platform). La Trobe University demonstrated a portable biosensor. UCF received $300K for a handheld electrochemical nanosensor (<2 hours, <$50/test). Grapheal (French startup) uses graphene sensors the size of a credit card. A February 2026 publication described a trap-based microfluidic chip for one-step PFAS detection.

### The Gap
Despite multiple academic demonstrations, **no commercial portable PFAS sensor is available**. All products on the market require sending samples to certified labs (EPA Method 533/537.1), costing $200-500 per sample with 2-4 week turnaround. The gap between lab-demonstrated portable sensors and commercial products is enormous. PFASense is in validation. Grapheal is pre-commercial. UCF's device is in development.

Microfluidic electrochemical detection with molecularly imprinted polymers (MIPs) has achieved detection limits of 150 ng/L -- below Health Canada's maximum allowable concentration. This is technically sufficient for a commercial product.

### Competitive Landscape
**Almost zero commercial competition for portable PFAS sensors.** Cyclopure, Eurofins, and SGS provide lab testing services but no portable devices. This is a massive gap.

### Opportunity Assessment
- Technical feasibility: High (electrochemical + MIP on microfluidic chip)
- Market pain: Extreme (EPA regulations tightening, municipalities legally required to test, $1.2T remediation market)
- Recent breakthroughs: MIP-based detection at regulatory limits (2025), ML-designed probes (2025), one-step microfluidic chip (Feb 2026)
- Competitive density: Near zero for portable devices
- **Verdict: EXCEPTIONALLY STRONG OPPORTUNITY. First-to-market portable PFAS sensor could capture a massive, regulation-driven market.**

---

## 10. Brain-Computer Interface (BCI) MEMS Neural Probes

### State of the Field
The BISC implant (December 2025) packs tens of thousands of electrodes on an ultra-thin chip as thick as a human hair. Neuralink plans high-volume production in 2026 using MEMS fabrication on silicon wafers. Flexible high-density microelectrode arrays are advancing rapidly. Clinical trials are expanding from single digits to dozens of patients.

### The Gap
Manufacturing scale-up is the primary bottleneck. Neuralink's manual fabrication processes cannot support thousands of implants per year. The gap is in **scalable MEMS fabrication of flexible neural electrode arrays** with high channel counts.

### Competitive Landscape
Neuralink and Synchron dominate. Regulatory barriers are extreme. Capital requirements are massive.

### Opportunity Assessment
- Competitive density: Low but barriers astronomical
- **Verdict: Not suitable for a startup without $100M+ and 10-year timeline. Could be a contract manufacturing opportunity.**

---

## 11. Synthetic Biology Microfluidic Tools

### State of the Field
Droplet microfluidics enables single-cell encapsulation for high-throughput screening. Programmable platforms automate DNA assembly, transformation, and functional analysis. The synbio tools market is growing but dominated by established companies (Twist Bioscience, Ginkgo Bioworks platform).

### The Gap
Moderate. Automated droplet-based screening platforms for directed evolution are mostly custom-built in academic labs. A turnkey system could find a market.

### Opportunity Assessment
- **Verdict: Niche opportunity. Addressable market may be too small (<$500M) for a venture-scale company.**

---

## 12. Cell Therapy Microfluidic Manufacturing

### State of the Field
CellFE ($26.8M raised, microfluidic transfection platform), Cellular Origins ($40M Series A, Dec 2025), and Astraveus (first end-to-end CAR-T production on microfluidic benchtop, Jan 2025) are all active. The three critical manufacturing steps -- isolation, transfection/transduction, and expansion -- are being addressed by microfluidics with demonstrated >60% gene editing efficiency and >80% viability.

### The Gap
Despite impressive academic results, **clinical-grade, GMP-compatible, fully integrated microfluidic CAR-T manufacturing remains pre-commercial**. Astraveus's demonstration is first-of-kind but not yet a product. The gap between benchtop demonstration and GMP-certified manufacturing system is 2-3 years.

### Competitive Landscape
CellFE, Cellular Origins, Astraveus -- at least 3 well-funded startups. **Moderately crowded.**

### Opportunity Assessment
- **Verdict: Active space with funded competitors. Late to enter unless bringing a differentiated fabrication approach.**

---

## 13. Exosome Isolation on Microfluidic Chips

### State of the Field
As detailed in Section 3, microfluidic exosome isolation achieves 3-6x higher purity than ultracentrifugation. The iExoDisc processes 400 uL blood in 45 minutes. Exo-CMDS achieves detection in 8 minutes. ~110 clinical trials use exosome biomarkers. The market is projected at 31% CAGR through 2032.

### The Gap
**No standardized, commercially available microfluidic chip for clinical exosome isolation exists.** Current commercial methods (ultracentrifugation, precipitation kits) are slow (4-12 hours), low-purity, and not suitable for point-of-care. The microfluidic approach is demonstrably superior but trapped in academic labs. This is a classic technology transfer gap.

### Opportunity Assessment
- **Verdict: STRONG OPPORTUNITY -- overlaps with liquid biopsy gap identified in Section 3.**

---

## 14. Multiplexed Diagnostics on a Single Chip

### State of the Field
CRISPR-on-chip integrates CRISPR-Cas with microfluidics for portable biomolecule detection. Digital microfluidics (DMF) enables automated multiplexed IVD assays. Single-chip metabolomic platforms can assay 4 metabolites from a drop of plasma in under 2 minutes. Multiplexed respiratory pathogen detection (SARS-CoV-2, influenza, RSV) from a single sample has been demonstrated. CMOS-integrated photodetector arrays with monolithic microfluidic channels are emerging.

### The Gap
While multiplexed respiratory panels exist commercially (BioFire, Cepheid), **multiplexed metabolomic/proteomic POCT on a single chip is not yet commercial**. The monolithic CMOS + microfluidic approach demonstrated for prostate cancer metabolomics is a compelling academic result with no commercial equivalent. The gap is particularly acute for **multiplexed protein biomarker quantification** (not just nucleic acid detection) at the point of care.

### Opportunity Assessment
- Technical feasibility: High (MEMS + microfluidics + immunoassay)
- Market pain: High (protein biomarkers are critical for most diseases)
- **Verdict: STRONG OPPORTUNITY, especially if focused on a specific clinical application (e.g., sepsis, cardiac, or cancer biomarker panels).**

---

## Top-Ranked Opportunities (Composite Score)

Based on analysis across all five criteria (technical feasibility, market pain, recency of breakthrough, defensibility, competitive landscape), the opportunities rank as follows:

### Tier 1: Wide-Open Gaps with Massive Market Pull

1. **Portable PFAS/Forever Chemical Sensor** (Section 9)
   - Zero commercial competition for portable devices
   - Regulation-driven demand ($1.2T remediation market)
   - Enabling breakthroughs in 2025-2026 (MIP + microfluidic chip, ML-designed probes)
   - Perfect fit for a microsystems engineer (electrochemical MEMS sensor + microfluidic sample handling)
   - First-mover advantage is enormous

2. **Portable Microplastic/Nanoplastic Sensor** (Section 6)
   - No commercial portable product exists
   - Growing regulatory and public health pressure
   - MEMS resonator + microfluidic pre-concentration is a natural fit
   - Less immediate regulatory pull than PFAS but larger long-term TAM

### Tier 2: Strong Technical Gaps with Significant Markets

3. **Microfluidic Exosome Isolation Chip for Liquid Biopsy** (Sections 3 & 13)
   - Demonstrated 3-6x superiority over conventional methods
   - No commercial microfluidic product despite 110+ clinical trials using exosomes
   - 31% CAGR market growth
   - Classic MEMS/microfluidic design challenge

4. **Multiplexed Sepsis Biomarker POCT Chip** (Section 4)
   - 11M deaths/year, every hour of delay = 7% mortality increase
   - No product combines host response + pathogen markers on one chip
   - Recent Nature Communications paper validates centrifugal microfluidic approach
   - Strong IP potential in chip design

5. **Multiplexed Protein Biomarker Quantification Chip** (Section 14)
   - Platform technology applicable across multiple disease areas
   - CMOS + microfluidic monolithic integration is a defensible technical approach
   - Requires choosing a beachhead clinical application

### Tier 3: Viable but Competitive or Niche

6. Culture-free rapid AST from blood (Section 5)
7. Multi-analyte implantable biosensor (Section 2)
8. Cell therapy microfluidic manufacturing components (Section 12)
9. Food safety multiplexed biosensor (Section 8)
10. Synbio droplet screening platform (Section 11)

---

## Key Insight: The PFAS Sensor Opportunity

The single most compelling gap identified in this research is the **portable PFAS detection sensor**. The convergence of factors is remarkable:

- **Regulatory forcing function**: EPA's PFAS National Primary Drinking Water Regulation (April 2024) sets maximum contaminant levels at 4 parts per trillion for PFOA and PFOS. All US public water systems must test and comply. This creates immediate, non-discretionary demand.
- **Current testing is absurd**: Samples must be shipped to certified labs, costing $200-500 each with 2-4 week turnaround. Municipalities, industrial facilities, and military bases need to test thousands of sites.
- **Technology is ready**: Microfluidic electrochemical sensors with molecularly imprinted polymers have demonstrated detection at regulatory limits (150 ng/L, below Canada's MAC). ML-designed probes achieve 250 parts per quadrillion sensitivity. A February 2026 paper demonstrated one-step PFAS + co-pollutant detection on a single microfluidic chip.
- **Zero commercial portable products**: PFASense (Harvard) is in validation. Grapheal is pre-commercial. UCF's device is in development. The market is entirely unserved.
- **Perfect MEMS fit**: The product is an electrochemical MEMS sensor integrated with microfluidic sample preparation -- exactly what a microsystems engineer designs.
- **Massive market**: The PFAS remediation market alone is estimated at $1.2 trillion. Testing is the prerequisite for remediation. A portable sensor at $2K-5K with $20-50/test consumables could capture a multi-billion dollar testing market.

The second most compelling opportunity -- portable microplastic detection -- shares many characteristics but lacks the immediate regulatory forcing function that makes PFAS so urgent.

---

## Sources

- [Organ-on-Chip Market Size, Growth Drivers & Forecast Report 2026-2031](https://www.mordorintelligence.com/industry-reports/organs-on-chips-market)
- [Organs-on-Chips Market Landscape Research 2025-2035](https://www.globenewswire.com/news-release/2025/03/25/3048573/28124/en/Organs-on-Chips-Market-Landscape-Research-2025-2035-1-Out-of-1-000-Drug-Candidates-Proceed-to-Clinical-Trials-Post-Preclinical-Testing-Of-these-90-Fail-to-Enter-the-Market.html)
- [Portable label-free optical detection of sweat glucose using plasmonic nanopillar array](https://www.nature.com/articles/s41378-025-01152-6)
- [8 Next-Gen CGMs In Development](https://www.diabetech.info/p/8-next-gen-cgms-in-development-you-need-to-know-about)
- [Microfluidic Liquid Biopsy by Nano-Plasmonic Label-Free Detection of EVs](https://www.mdpi.com/1422-0067/26/13/6352)
- [Fully Integrated Centrifugal Microfluidics for Rapid Exosome Isolation (iExoDisc)](https://pubs.acs.org/doi/abs/10.1021/acsnano.4c16988)
- [Sepsis Diagnostics Market: Advancing Rapid Detection](https://www.pharmiweb.com/press-release/2026-02-25/sepsis-diagnostics-market-advancing-rapid-detection-for-better-patient-outcomes)
- [A better, faster sepsis test - Stanford Medicine](https://med.stanford.edu/news/insights/2025/02/sepsis-infection-new-test-genetic.html)
- [Machine learning and centrifugal microfluidics for bedside sepsis prediction](https://www.nature.com/articles/s41467-025-59227-x)
- [Rapid AST by self-diluting microfluidic chips](https://www.nature.com/articles/s41378-025-00938-y)
- [AutoEnricher: System diagnoses infections in 20 minutes](https://phys.org/news/2026-01-infections-minutes-aiding-drug-resistance.html)
- [Droplet microfluidics detection of rare antibiotic-resistant subpopulations](https://www.science.org/doi/10.1126/sciadv.adv4558)
- [Electrochemical sensors for microplastic detection: state-of-the-art review](https://link.springer.com/article/10.1186/s12302-025-01138-1)
- [Microplastic Detection Market Research 2024-2029](https://www.businesswire.com/news/home/20250408697800/en/Microplastic-Detection-Market-Research-2024-2029-Advancements-in-Spectroscopy-Microscopy-and-Sensor-Technologies-Rising-Public-Concerns-Over-Effects-of-Plastic-Pollution-on-Ecosystems-and-Health---ResearchAndMarkets.com)
- [PFASense: Fast, In-Field Testing for Forever Chemicals (Wyss Institute)](https://wyss.harvard.edu/technology/pfasense-fast-in-field-testing-for-forever-chemicals/)
- [Tiny sensors rapidly detect forever chemicals in water (UChicago)](https://news.uchicago.edu/story/tiny-sensors-rapidly-detect-forever-chemicals-water)
- [Microfluidic chip for one-step detection of PFAS](https://phys.org/news/2026-02-microfluidic-chip-pfas-pollutants.html)
- [Portable biosensor enables on-site PFAS detection (La Trobe)](https://phys.org/news/2026-01-portable-biosensor-enable-site-pfas.html)
- [Trace Detection of PFOA using Microfluidic Electrochemical Sensor with MIP](https://chemrxiv.org/doi/full/10.26434/chemrxiv-2025-m27j4)
- [UCF to Develop Mobile Device for Forever Chemicals Detection](https://www.cece.ucf.edu/2025/12/10/ucf-to-develop-a-mobile-device-that-detects-forever-chemicals/)
- [Grapheal portable graphene sensor for PFAS](https://www.aquatechtrade.com/news/pfas/portable-sensor-on-site-pfas-detection)
- [BISC ultra-thin brain implant](https://www.sciencedaily.com/releases/2025/12/251209234139.htm)
- [Neuralink 2026 High-Volume Brain-Implant Plan](https://applyingai.com/2026/01/neuralinks-2026-high-volume-brain-implant-plan-scaling-bci-production-automation-and-market-impact/)
- [CellFE microfluidic cell engineering platform](https://www.cellfebiotech.com/cellfe-secures-22-million-in-series-a-financing-to-advance-microfluidics-based-cellular-engineering-platform/)
- [Cellular Origins $40M Series A](https://cellularorigins.com/resource/raise-release/)
- [Microfluidics for cell therapy and manufacturing (Lab on a Chip, 2026)](https://pubs.rsc.org/en/content/articlehtml/2026/lc/d5lc00492f)
- [Exosome Diagnostic and Therapeutics Market to $401.7M by 2032](https://www.prnewswire.com/news-releases/exosome-diagnostic-and-therapeutics-market-to-reach-usd-401-70-million-by-2032-amid-rapid-advances-in-liquid-biopsy-precision-medicine-and-exosome-based-drug-delivery--credence-research-302706318.html)
- [Cytovale IntelliSep Sepsis Test](https://cytovale.com/our-solution/intellisep-sepsis-test/)
- [CARB-X funds Melio for neonatal sepsis diagnostic](https://carb-x.org/carb-x-news/carb-x-funds-melio-to-develop-rapid-diagnostic-to-detect-neonatal-sepsis/)
- [CRISPR-on-Chip for Point-of-Care Diagnostics](https://pubs.acs.org/doi/10.1021/acsnano.5c19771)
- [Monolithic single-chip POC platform for metabolomic cancer detection](https://www.nature.com/articles/s41378-021-00243-4)
- [Advancements in Wearable and Implantable BioMEMS Devices](https://www.mdpi.com/2072-666X/16/5/522)
- [Microfluidic magnetic droplet CLIA for multiplex sepsis biomarker screening](https://pubs.rsc.org/en/content/articlelanding/2025/an/d4an01253d)
- [Multiplexed POC Testing IVD Solution](https://www.labmedica.com/molecular-diagnostics/articles/294799862/multiplexed-poc-testing-ivd-solution-performs-molecular-and-immunoassays-from-various-body-fluids-on-single-platform.html)
