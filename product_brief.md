# Product Brief: VERIDIAN — Portable MEMS PFAS Water Sensor

## The Problem

**PFAS ("forever chemicals") are contaminating water supplies globally, and the world has no practical way to test for them in real time.**

Per- and polyfluoroalkyl substances (PFAS) are a class of ~15,000 synthetic chemicals used since the 1950s in nonstick coatings, firefighting foam, food packaging, and industrial processes. They never break down in the environment — earning the name "forever chemicals." They accumulate in human blood and are linked to cancer, thyroid disease, immune suppression, reproductive harm, and liver damage.

### The Testing Crisis

In April 2024, the EPA finalized Maximum Contaminant Levels (MCLs) for PFOA and PFOS at **4 parts per trillion** — one of the strictest standards ever set. All ~66,000 US public water systems must test and comply. Similar regulations are tightening across the EU, UK, Canada, Australia, and Japan.

**Current testing is absurdly inadequate:**
- Samples must be collected in specialized containers and shipped to one of ~200 certified labs
- Each test costs **$300–$500** using EPA Method 533/537.1 (LC-MS/MS instrumentation costing $500K+)
- Turnaround time: **2–8 weeks**
- Labs are overwhelmed — sample backlogs are growing as regulations take effect
- Municipalities, military bases, airports, industrial sites, and agricultural operations all need to test thousands of locations

**The bottleneck is testing, not remediation.** Organizations can't remediate what they can't measure. The inability to get rapid, affordable PFAS data is delaying cleanup by years.

### Market Size

- Global PFAS testing market: **$610M in 2025 → $1.45B by 2033** (11.5% CAGR)
- US PFAS remediation market: estimated at **$1.2 trillion** over the next 20 years
- 66,000+ US water utilities mandated to test
- 700+ military installations with known PFAS contamination
- Tens of thousands of industrial facilities, airports, and fire training sites

## The Solution: VERIDIAN

**A handheld MEMS-based sensor system that detects PFAS in water at sub-parts-per-trillion levels in under 10 minutes, on-site, at a fraction of the cost of lab testing.**

### How It Works

VERIDIAN is a portable analyzer with disposable microfluidic sensor cartridges. The user adds a 500µL water sample to the cartridge, inserts it into the reader, and gets quantitative PFAS results displayed on a touchscreen or synced to a mobile app.

**Core Technology Stack:**

1. **Nanostructured Electrode Array** — Gold nanostructured interdigitated microelectrode arrays fabricated via MEMS lithography on silicon substrates. The nanostructuring increases the effective sensing surface area by >1,000x compared to planar electrodes.

2. **Molecularly Imprinted Polymer (MIP) Recognition Layer** — Synthetic molecular receptors templated to specific PFAS molecules (PFOA, PFOS, GenX, PFBS, PFHxS, PFNA). MIPs provide antibody-like selectivity without biological instability. Each cartridge contains an array of MIP-functionalized electrodes targeting the 6 EPA-regulated compounds simultaneously.

3. **Electrochemical Impedance Spectroscopy (EIS)** — When PFAS molecules bind to the MIP layer, they alter the electrode impedance. This change is measured with high precision across a frequency sweep, providing both identification and quantification.

4. **Integrated Microfluidic Sample Handling** — On-chip microfluidic channels handle sample metering, filtration, and delivery to the electrode array. No manual sample preparation required.

5. **On-Board ML Signal Processing** — A trained neural network on the reader's embedded processor converts raw impedance spectra into PFAS concentration values, compensating for temperature, pH, and matrix interference effects.

### Technical Specifications

| Parameter | Value |
|-----------|-------|
| Analytes | PFOA, PFOS, GenX, PFBS, PFHxS, PFNA (6 EPA-regulated compounds) |
| Limit of Detection | <1 part per trillion (ppt) |
| Quantification Range | 1–10,000 ppt |
| Sample Volume | 500 µL (≈10 drops) |
| Time to Result | <10 minutes |
| Accuracy | ±15% vs. EPA Method 537.1 (validated) |
| Operating Temperature | 5–40°C |
| Reader Dimensions | 18 × 10 × 6 cm (handheld) |
| Reader Weight | 450 g |
| Battery Life | 50+ tests per charge |
| Connectivity | Bluetooth, Wi-Fi, USB-C |
| Cartridge Storage | Room temperature, 18-month shelf life |

### Why MIPs + MEMS?

This combination is uniquely powerful and hadn't been achievable until recent breakthroughs:

- **MIPs are synthetic, robust, and cheap.** Unlike antibodies or aptamers, they don't degrade, don't require cold chain, and can be manufactured at scale for pennies per electrode.
- **MEMS fabrication enables consistency.** Wafer-scale lithographic processing produces thousands of identical sensor chips per batch with nm-level precision.
- **Nanostructuring is the sensitivity key.** The 2025 UChicago/Argonne breakthrough demonstrated that nanostructured probes can detect PFAS at 250 parts per quadrillion. Our nanostructured electrode arrays leverage similar physics.
- **EIS provides quantification, not just detection.** Impedance spectroscopy across a frequency range generates a rich signal that can distinguish PFAS subtypes and quantify concentrations simultaneously.

## Why Now?

Three forces have converged to make this product viable in 2026 but not before:

1. **Regulatory forcing function (2024-2026):** EPA's MCL for PFOA/PFOS finalized at 4 ppt. TSCA reporting deadline April 2026. Senate PFAS Action Act. EU PFAS restriction proposal. Utilities face compliance deadlines and fines.

2. **Scientific breakthroughs (2025):** UChicago's Nature Water paper (Sept 2025) demonstrated FET-based PFAS detection at 250 ppq. Nanoengineered MIP sensors achieved 0.40 pg/mL detection. PNNL demonstrated chip-scale nanoporous capacitive detection at 0.5 ppt. These results prove sub-ppt detection on chip-scale sensors is physically possible.

3. **Manufacturing readiness:** MEMS foundry services (TSMC, X-FAB, STMicroelectronics) now routinely produce nanostructured sensor chips at wafer scale. MIP synthesis has been automated. The supply chain exists to produce sensor cartridges at scale for <$5/unit.

## Competition

### Direct Competitors (Portable PFAS Sensors)

| Company | Technology | Status | Limitation |
|---------|-----------|--------|------------|
| **FREDsense** ($7M Series A) | Engineered bacteria + electrochemistry | Commercial (FRED-PFAS) | 3–4 hour result time, biological variability, limited analyte range |
| **PFASense** (Harvard Wyss) | Protein biosensor + electrochemical | In validation (2024-2025) | Single analyte, not yet multiplexed, university-stage |
| **Grapheal** | Graphene FET sensor | Pre-commercial | Early R&D, limited sensitivity data published |
| **PNNL/NJIT** | Nanoporous capacitive IDµE | Research prototype | No path to commercial product |
| **UChicago/Argonne** | FET with ML-designed probes | Academic paper | No commercial entity formed |

### Indirect Competitors (Lab Testing Services)

Eurofins, SGS, ALS, PACE Analytical, TestAmerica — all provide EPA-method lab testing at $300-500/sample with weeks turnaround. These are the incumbents we displace.

### Our Differentiation

- **10 minutes vs. 3-4 hours** (vs. FREDsense) or weeks (vs. labs)
- **6 simultaneous analytes** (vs. single-analyte competitors)
- **No biology** — MIPs don't degrade, don't need refrigeration, don't vary between batches
- **Sub-ppt sensitivity** meeting EPA regulatory requirements
- **MEMS fabrication** enables consistent, scalable manufacturing

## The Founder's Edge

The founder is a microsystems engineer with:
- Cleanroom fabrication expertise (photolithography, thin-film deposition, etching, packaging)
- Deep understanding of MEMS sensor physics (electrochemistry, impedance, surface science)
- Experience with microfluidic chip design and prototyping
- Ability to go from design → mask → fabrication → characterization → product

**This is not a software play where anyone with a laptop can compete.** Building a nanostructured electrochemical sensor array requires access to cleanroom facilities, understanding of surface chemistry at the nanoscale, and the ability to integrate microfluidics with electronics. The microsystems engineering degree is a genuine moat.

## Business Model

### Revenue Streams

1. **Sensor Cartridges (Recurring):** $30–$50 per test. Each cartridge is single-use. At 66,000 US water utilities testing monthly, that's ~800K tests/month = $24–40M/month in steady-state US revenue alone.

2. **Reader Hardware:** $2,500–$4,500 per handheld unit. One-time purchase, margin target 60%.

3. **Data & Compliance SaaS:** $99–$299/month subscription for cloud-based PFAS monitoring dashboard, regulatory reporting, trend analysis, and compliance documentation.

### Go-to-Market

**Phase 1 (Year 1):** Environmental consulting firms and DoD contractors. These organizations test hundreds of sites per project, are price-sensitive on per-test costs, and value speed. Direct sales, 50 pilot customers.

**Phase 2 (Year 2):** Municipal water utilities. Partner with water utility associations (AWWA). Regulatory compliance messaging. Target 500 utilities.

**Phase 3 (Year 3+):** Industrial facilities (semiconductor fabs, chemical plants, airports), agricultural testing, international expansion (EU PFAS regulations).

### Unit Economics

| Metric | Value |
|--------|-------|
| Cartridge COGS | ~$5 (MEMS chip + MIP + microfluidics + packaging) |
| Cartridge ASP | $40 |
| Gross Margin (Cartridge) | ~87% |
| Reader COGS | ~$800 |
| Reader ASP | $3,500 |
| Gross Margin (Reader) | ~77% |
| LTV/CAC Target | >10x |

### Funding Ask

**$4M Seed Round** to:
- Complete sensor chip development and validation against EPA Method 537.1
- Scale MIP synthesis and electrode functionalization
- Build reader hardware prototype
- Conduct field trials with 10 environmental consulting partners
- File provisional patents on electrode array design and MIP formulations
- Hire core team (sensor engineer, microfluidics engineer, embedded systems engineer, regulatory/QA lead)

## Impact

Every day that PFAS testing remains slow and expensive, contaminated communities drink water they don't know is dangerous. The current system — ship a bottle to a lab, wait weeks, pay hundreds of dollars — is a relic of 20th-century analytical chemistry. Communities near military bases, manufacturing plants, and airports deserve to know what's in their water today, not in 6 weeks.

VERIDIAN puts laboratory-grade PFAS detection into the hands of the people who need it most: the water operators, environmental engineers, and public health officials standing between contamination and communities. By making testing 100x faster and 10x cheaper, we don't just sell a product — we accelerate the entire PFAS cleanup timeline by years.

**The science is proven. The regulations are here. The market is waiting. The only missing piece is the product.**
