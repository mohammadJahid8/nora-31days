# Nora Capital Group

## 31-Day Protocol Application - Complete Technical & Business Overview

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Platform:** Web Application (React)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Mission & Philosophy](#mission--philosophy)
3. [Core Terminology](#core-terminology)
4. [User Journey & Flow](#user-journey--flow)
5. [Dashboard Modules](#dashboard-modules)
6. [The 31-Day Protocol](#the-31-day-protocol)
7. [Key Metrics & Scoring](#key-metrics--scoring)
8. [Special Features](#special-features)
9. [Technical Architecture](#technical-architecture)
10. [Design System](#design-system)
11. [Data Models](#data-models)
12. [Route Structure](#route-structure)

---

## Executive Summary

**Nora Capital Group** is a faith-based financial stewardship and wealth-building platform that guides users through a structured 31-day protocol. The platform combines biblical wisdom with institutional-grade financial strategy to help users:

- Build personal and business credit profiles
- Form legal business entities ("vessels")
- Access institutional funding sources
- Build and preserve generational wealth

The application serves as a comprehensive "Wealth Operating System" that transforms users from financial seekers into fully-equipped business architects ready for institutional capital.

---

## Mission & Philosophy

### Core Principle

> "Jesus Christ is the Cornerstone"

The platform operates on the intersection of:

- **Biblical Stewardship** - Treating wealth as a trust to be managed faithfully
- **Institutional Finance** - Applying doctorate-level financial strategies
- **Systematic Execution** - Following proven protocols for wealth building

### Target Audience

- Entrepreneurs seeking business funding
- Individuals repairing or building credit
- Business owners structuring entities for growth
- Wealth builders seeking generational strategies

---

## Core Terminology

The platform uses specialized terminology that blends financial concepts with stewardship language:

| Platform Term           | Standard Meaning                              |
| ----------------------- | --------------------------------------------- |
| **Architect**           | User/Client enrolled in the program           |
| **Steward**             | User actively executing the protocol          |
| **Vessel**              | Business entity (LLC, Corporation, etc.)      |
| **Neural Council**      | AI-powered advisory system with personas      |
| **Dominion**            | Financial control and ownership               |
| **Mandate**             | Daily task or action item                     |
| **Institutional Delta** | Key metric: Income vs. Expenses ratio         |
| **Velocity Score**      | Gamification points earned through progress   |
| **Paydex Index**        | Business credit score (D&B)                   |
| **Trade Lines**         | Business credit accounts for building history |
| **Funding Vector**      | Specific type of capital/financing source     |
| **EIN Node**            | Employer Identification Number                |
| **DUNS Protocol**       | D&B Universal Numbering System                |

---

## User Journey & Flow

### Overview Diagram

```
Authentication
      ↓
Season Selection → Goal Selection → Accord Selection → Blueprint Selection
      ↓
Fiduciary Audit (Financial Assessment)
      ↓
Dashboard (31-Day Protocol Execution)
```

### Phase 1: Onboarding

#### Step 1: Authentication (`/auth`)

Users register as "Architects" or log in as "Stewards"

- **Data Captured:** Legal name, primary email
- **Auth Method:** Firebase Anonymous + Custom Token

#### Step 2: Season Selection (`/onboarding/season`)

Users identify their current financial stage:

| Season           | Description              | Focus Area           |
| ---------------- | ------------------------ | -------------------- |
| The Seeker       | Starting from $0         | Credit repair        |
| The Laborer      | Active W-2 employment    | Capital stacking     |
| The Vessel Owner | Business owner           | Revenue optimization |
| The Governor     | Executive/High net worth | Asset protection     |

#### Step 3: Goal Selection (`/onboarding/goal`)

Users select their primary wealth-building objective:

| Goal                | Description                          |
| ------------------- | ------------------------------------ |
| Business Enterprise | Dominion through scalable systems    |
| Real Estate Empire  | Dominion through asset portfolios    |
| Capital Multiplier  | Dominion through high-tier arbitrage |
| Kingdom Legacy      | Dominion through preservation        |
| Institutional OS    | Dominion through technology          |

#### Step 4: Accord Selection (`/onboarding/accord`)

Users align with one of three strategic paths:

**The Builder's Accord** - Create and launch new institutional systems

- AI Agency Node
- SaaS Venture
- E-Com Supply Chain
- Service OS

**The Investor's Accord** - Acquire and leverage existing assets

- Fix & Flip Forge
- M&A Acquisition
- Forex Scalp Node
- Land Banking

**The Governor's Accord** - Preserve and shield generational wealth

- Legacy Trust Hub
- Sovereign Gold Preservation
- IP Portfolio
- Family Office

#### Step 5: Blueprint Selection (`/onboarding/blueprint`)

Users select their specific execution blueprint based on their Accord. Each blueprint includes:

- 3-Gate progression system
- Specific milestones and exit criteria
- Tailored curriculum modules

#### Step 6: Fiduciary Audit (`/onboarding/audit`)

Comprehensive financial assessment capturing:

**Personal Ledger:**

- Monthly net income
- Total monthly burden (expenses)
- Housing allocation
- Savings rate
- Health costs
- Kingdom tithing

**Vessel (Business) Ledger:**

- Annual entity revenue
- Operational burn rate
- Payroll allocation
- Marketing spend
- COGS (Cost of Goods Sold)
- Total liabilities

**Computed Metrics:**

- Personal Fiduciary Score
- Vessel Command Score
- Institutional Delta
- Estimated Tax Shield

---

## Dashboard Modules

### Module 1: Command Hub (`/dashboard/canvas`)

The central overview displaying:

- **Baseline Delta** - Primary health metric
- **Velocity Score** - Progress gamification points
- **Target Horizon** - User's selected goal
- **Sync Status** - System health indicator
- **Active Protocol Mandate** - Current day's task
- **Net Worth Trajectory Chart** - 90-day projection
- **Debt Decay Projection Chart** - Liability reduction forecast

### Module 2: Sovereign Profile (`/dashboard/profile`)

Three sub-sections for comprehensive data management:

**Personal Identity Vault:**

- Legal name, email, date of birth
- SSN (last 4), passport, citizenship
- Physical address, phone numbers
- Occupation, employer, years in field
- Marital status, dependents
- Emergency contacts

**Credit Forensic Baseline:**

- Experian, Equifax, TransUnion scores
- Total utilization percentage
- 6-month inquiry count
- Average account age

**Vessel Entity Registry:**

- Entity name, EIN, DUNS
- Paydex index, entity type
- Formation jurisdiction
- Registered agent, SOS ID
- Trade lines count
- Annual revenue, operational burn
- Bank information, insurance

**Evidence & Document Nodes:**

- Articles of Organization
- IRS SS-4 Stamp
- Operating Accord
- Passport verification

**Legacy Vault:**

- Successor designation
- Dead man's switch trigger (30/60/90 days)
- Succession protocol sealing

### Module 3: Funding Bridge (`/dashboard/bridge`)

Capital access center featuring:

**Live Market Ticker:**

- Prime Rate
- SBA 7(a) Peg
- 10Y Treasury
- CPI Inflation
- Fed Funds Rate
- SOFR

**Funding Readiness Analysis:**

- Composite readiness score
- Projected horizon to funding

**8 Funding Vectors:**

| Vector                        | Limit    | Description                          |
| ----------------------------- | -------- | ------------------------------------ |
| Institutional Credit Stacking | $250k+   | Sequential personal/business credit  |
| SBA Node                      | $5M+     | Government-backed commercial capital |
| Private Equity / Angel        | Variable | Strategic investor capital           |
| Revenue Based                 | $1M+     | Liquidity against gross inflow       |
| Asset-Backed Bridge Loans     | $10M+    | Collateralized short-term funding    |
| Neural Venture Debt           | $2M+     | High-growth debt for proven models   |
| Equipment Financing           | $500k+   | Physical infrastructure funding      |
| Tier 3 Corporate Tradelines   | $100k+   | Uncollateralized spending expansion  |

**Neural Capital Audit:**
AI-powered gap analysis and strategy recommendations

### Module 4: Wealth Station (`/dashboard/wealth`)

Blueprint-specific execution center:

- Active Accord Node display
- Strategic Blueprint display
- 3-Gate roadmap with progress indicators
- Exit criteria for each gate
- Kingdom Curriculum modules

### Module 5: 31-Day Protocol (`/dashboard/protocol`)

The core execution engine (see detailed section below)

### Module 6: 90-Day Horizon (`/dashboard/horizon`)

Extended roadmap with three phases:

**Month 1: Stabilization & Cleansing**

- Forensic Credit Audit
- Behavioral Leak Plugging
- Cash Flow Baseline
- Debt Snowball Initiation

**Month 2: Formation & Bridge**

- Vessel (LLC) Formation
- EIN/DUNS Calibration
- Bank Relationship Stacking
- Funding Vector Selection

**Month 3: Acquisition & Scaling**

- Capital Deployment
- Blueprint Launch
- Asset Management OS
- Legacy Shield Setup

### Module 7: The Armory (`/dashboard/armory`)

Document generation and legal resources:

**Institutional Output Engines:**

- SBA Business Plan Architect (15-page compliant plan)
- Investor Pitch Deck Forge
- Grant Proposal Narrative
- Automated P&L Statement

**Letter of Law Database:**

- Independent Contractor Agreement
- Non-Disclosure Agreement (NDA)
- Cease & Desist Order
- Corporate Resolution
- LOI (Real Estate)
- LOI (Business M&A)
- Asset Purchase Agreement
- Seller Finance Note

**Strategic Uplinks:**

- Secretary of State (TX)
- Dun & Bradstreet
- IRS.gov EIN Assistant

**Vendor Tier List:**

- Uline, Quill, Grainger (Tier 1 vendors for tradeline building)

### Module 8: The Academy (`/dashboard/academy`)

Educational content hub:

- Blueprint-specific video curriculum
- Sovereign Library (educational resources)
- Module tracking and completion

### Module 9: Neural Council (`/dashboard/council`)

AI-powered advisory system with 5 personas:

| Persona      | Role              | Focus Areas                                       |
| ------------ | ----------------- | ------------------------------------------------- |
| Dr. Solomon  | Order & Structure | Wisdom, debt elimination, financial hygiene       |
| Dr. Abraham  | Offense & Growth  | Land acquisition, aggressive capital, inheritance |
| Queen Esther | Legal Position    | Diplomatic defense, legal protection              |
| Deborah      | Decisive Judgment | Leadership, conflict resolution                   |
| Ruth         | Legacy Loyalty    | Lineage, humble service, inheritance              |

Each persona provides contextual advice based on:

- User's Institutional Delta
- Personal Fiduciary Score
- Vessel Command Score

### Module 10: Admin Command (`/dashboard/admin`)

Administrative oversight features:

- Ecosystem Dominion (God Mode) analytics
- Total Capital Under Management
- Active Architects count
- Average Institutional Delta
- Master Directory (all users)
- Health Heatmap visualization
- Forensic Oversight View
- Direct Governance Override

### Module 11: Commonwealth (`/dashboard/commonwealth`)

Community features (locked until protocol completion):

**Barter Exchange:**

- Legal Contract Review
- Brand Identity Design
- Tax Strategy Consult
- SEO Audit

**Capital Pool Deal Room:**

- Syndication opportunities
- Seed round investments

**Iron Sharpens Iron:**

- Community discussion forum
- Peer-to-peer knowledge sharing

---

## The 31-Day Protocol

### Structure

Each day ("mandate") includes:

- **Title** - The mandate name
- **Devotion** - Biblical scripture reference
- **Logic** - Institutional reasoning
- **Tasks** - 5 actionable items
- **Score** - XP points earned upon completion

### Days 1-10: Stabilization & Formation

| Day | Title                  | Key Focus                                            |
| --- | ---------------------- | ---------------------------------------------------- |
| 1   | Covenant Alignment     | Bank statement audit, behavioral leak identification |
| 2   | Fiduciary Cleanse      | LexisNexis disclosure, address node updates          |
| 3   | Capital Architecture   | DTI calculation, EIN jurisdiction mapping            |
| 4   | Neural Node Audit      | Liability interest rates, utilization thresholds     |
| 5   | Compliance Alignment   | Phone/address node synchronization                   |
| 6   | Vessel Formation I     | Operating Accord, Articles of Org, SS-4              |
| 7   | Banking Infrastructure | Tier 1 Bank selection, business credit card          |
| 8   | Vendor Stacking I      | Uline, Quill, Grainger Net-30 applications           |
| 9   | Digital Footprint      | Domain, Google Business Profile, 411 listing         |
| 10  | Forensic Review I      | First checkpoint audit and seal                      |

### Days 11-31

Continue with:

- Advanced vendor stacking
- Credit optimization
- Funding application preparation
- Document completion
- Final protocol sealing

### Scoring System

| XP Range  | Rank               |
| --------- | ------------------ |
| 0-500     | Initiate           |
| 500-2000  | Vessel Builder     |
| 2000-5000 | Master Architect   |
| 5000+     | Sovereign Governor |

---

## Key Metrics & Scoring

### Institutional Delta (Primary Metric)

```
Delta = ((Income - Burden) / Income) × 100
```

- **Target:** 30%+ for funding readiness
- **Warning:** Below 20% triggers critical alert

### Personal Fiduciary Score

```
Score = ((Income - Burden) / Income) × 100
```

Measures personal cash flow efficiency

### Vessel Command Score

```
Score = ((Annual Revenue - Operational Burn) / Annual Revenue) × 100
```

Measures business operational efficiency

### Funding Readiness Score

Composite score based on:

- Credit Score > 720: +25%
- Annual Revenue > $50k: +20%
- Trade Lines ≥ 5: +15%
- Paydex ≥ 80: +15%
- EIN + SOS Verified: +15%
- Documents Verified: +10%

**Horizon Calculation:**

- Score > 85%: 48-72 Hours (Ready Now)
- Score 60-85%: 30-90 Days
- Score 30-60%: 120-180 Days
- Score < 30%: 6-8 Months

### Gate Progress

```
Progress = (Sealed Days / 31) × 100
```

---

## Special Features

### The Habakkuk Board

Vision mapping tool based on Habakkuk 2:2 ("Write the vision, make it plain")

- Add target assets with acquisition costs
- Calculate months to acquisition based on cash flow
- Track vision progress visually

### War Room

Collaboration feature for team access:

- Generate "Lieutenant Access" keys
- Read-only access for stakeholders (Spouse, CFO, Legal)
- View-only Wealth Station and Protocol access

### War Game Simulator

Financial scenario modeling:

- Adjust projected revenue (+$0-100k)
- Adjust projected debt (+$0-50k)
- Real-time Institutional Delta recalculation

### Proactive Neural Briefing

Automated AI alerts based on:

- Critical Delta warnings (< 20%)
- Optimal readiness notifications (> 80%)
- Status updates on velocity progress

### Audio Intelligence

Listen mode for briefing narration (text-to-speech capability)

---

## Technical Architecture

### Technology Stack

| Layer              | Technology         |
| ------------------ | ------------------ |
| Frontend Framework | React 19           |
| Build Tool         | Vite 7             |
| Styling            | Tailwind CSS 4     |
| Charts             | Recharts 3         |
| Icons              | Lucide React       |
| Routing            | React Router DOM   |
| Authentication     | Firebase Auth      |
| Database           | Firebase Firestore |
| AI Integration     | Google Gemini API  |

### Project Structure

```
src/
├── App.jsx                 # Main router configuration
├── main.jsx               # Application entry point
├── index.css              # Global styles
├── context/
│   └── AppContext.jsx     # Centralized state management
├── routes/
│   └── ProtectedRoute.jsx # Route guards
├── pages/
│   ├── AuthPage.jsx
│   ├── DashboardPage.jsx
│   └── onboarding/
│       ├── SeasonPage.jsx
│       ├── GoalPage.jsx
│       ├── AccordPage.jsx
│       ├── BlueprintPage.jsx
│       └── AuditPage.jsx
├── components/
│   ├── auth.jsx
│   ├── loading.jsx
│   ├── glass-panel.jsx
│   ├── fiduciary-input.jsx
│   ├── global-styles.jsx
│   ├── season-selection.jsx
│   ├── goal-selection.jsx
│   ├── accord-selection.jsx
│   ├── blueprint-selection.jsx
│   ├── fiduciary-audit.jsx
│   └── dashboard/
│       ├── index.jsx      # Main dashboard component
│       ├── Sidebar.jsx
│       ├── Header.jsx
│       ├── overlays/
│       │   ├── GeneratorOverlay.jsx
│       │   ├── SimulatorOverlay.jsx
│       │   ├── LessonOverlay.jsx
│       │   ├── HabakkukOverlay.jsx
│       │   ├── WarRoomOverlay.jsx
│       │   ├── ComplianceOverlay.jsx
│       │   ├── MandateOverlay.jsx
│       │   └── LogicLabelOverlay.jsx
│       └── tabs/
│           ├── CanvasTab.jsx
│           ├── ProfileTab.jsx
│           ├── BridgeTab.jsx
│           ├── WealthTab.jsx
│           ├── ProtocolTab.jsx
│           ├── HorizonTab.jsx
│           ├── ArmoryTab.jsx
│           ├── AcademyTab.jsx
│           ├── CouncilTab.jsx
│           ├── AdminTab.jsx
│           └── CommonwealthTab.jsx
└── utils/
    └── data.js            # Static data and configurations
```

---

## Design System

### Color Palette

| Color                | Hex     | Usage                         |
| -------------------- | ------- | ----------------------------- |
| Primary Background   | #0A1128 | Main app background           |
| Secondary Background | #0D1642 | Panels, cards                 |
| Gold Accent          | #D4AF37 | Primary accent, CTAs          |
| Success              | #22C55E | Positive indicators           |
| Error                | #EF4444 | Negative indicators, warnings |
| White                | #FFFFFF | Text (various opacities)      |

### Typography

- **Primary Font:** Urbanist
- **Mono Font:** System monospace (for numbers, metrics)
- **Tracking:** Extended letter-spacing for headers

### Component Patterns

- **Glass Morphism:** Semi-transparent panels with blur
- **Gold Gradients:** Header text treatments
- **Scanning Lines:** Animated security aesthetic
- **Audio Bars:** Sound wave visualizations

---

## Data Models

### User Profile Schema

```javascript
{
  // Identity
  name: String,
  email: String,
  dob: String,
  ssnLast4: String,
  citizenship: String,
  passportNo: String,

  // Onboarding
  season: String,      // 'Seeker' | 'Laborer' | 'Owner' | 'Governor'
  goal: String,        // 'BUS' | 'RE' | 'CAP' | 'LEG' | 'OS'
  accord: String,      // 'BUILDER' | 'INVESTOR' | 'GOVERNOR'
  blueprint: String,   // Selected blueprint name

  // Personal Finance
  income: Number,
  burden: Number,
  creditScoreExpe: Number,
  creditScoreEqui: Number,
  creditScoreTrans: Number,
  totalUtilization: Number,

  // Business Entity
  bizName: String,
  ein: String,
  duns: String,
  entityType: String,
  jurisdiction: String,
  annualRevenue: Number,
  operationalBurn: Number,
  paydex: Number,
  tradeLines: Number,

  // Documents
  docArticles: Boolean,
  docSS4: Boolean,
  docOpAccord: Boolean,
  docPassport: Boolean,

  // Legacy
  successorName: String,
  successorEmail: String,
  legacyTrigger: String,

  // Metadata
  lastUpdated: ISO8601 String
}
```

### Protocol Schema

```javascript
{
  currentDay: Number,        // 1-31
  sealedDays: Array<Number>, // Completed days
  velocityScore: Number      // Total XP
}
```

---

## Route Structure

### Public Routes

| Path    | Component | Description          |
| ------- | --------- | -------------------- |
| `/`     | Redirect  | Redirects to `/auth` |
| `/auth` | AuthPage  | Login/Registration   |

### Onboarding Routes (Protected)

| Path                    | Component     | Required Data      |
| ----------------------- | ------------- | ------------------ |
| `/onboarding/season`    | SeasonPage    | Authenticated      |
| `/onboarding/goal`      | GoalPage      | Season selected    |
| `/onboarding/accord`    | AccordPage    | Goal selected      |
| `/onboarding/blueprint` | BlueprintPage | Accord selected    |
| `/onboarding/audit`     | AuditPage     | Blueprint selected |

### Dashboard Routes (Protected + Onboarded)

| Path                      | Component     | Tab               |
| ------------------------- | ------------- | ----------------- |
| `/dashboard`              | DashboardPage | Default (canvas)  |
| `/dashboard/canvas`       | DashboardPage | Command Hub       |
| `/dashboard/profile`      | DashboardPage | Sovereign Profile |
| `/dashboard/bridge`       | DashboardPage | Funding Bridge    |
| `/dashboard/wealth`       | DashboardPage | Wealth Station    |
| `/dashboard/protocol`     | DashboardPage | 31-Day Protocol   |
| `/dashboard/horizon`      | DashboardPage | 90-Day Horizon    |
| `/dashboard/armory`       | DashboardPage | The Armory        |
| `/dashboard/academy`      | DashboardPage | The Academy       |
| `/dashboard/council`      | DashboardPage | Neural Council    |
| `/dashboard/admin`        | DashboardPage | Admin Command     |
| `/dashboard/commonwealth` | DashboardPage | Commonwealth      |

---

## Appendix: Blueprint Gate Details

### AI Agency Node

| Gate | Title                     | Nodes                                                   | Exit Criteria      |
| ---- | ------------------------- | ------------------------------------------------------- | ------------------ |
| G1   | Niche & Offer             | Market Demand Audit, High-Ticket Offer, Outreach System | 3 Signed Retainers |
| G2   | Acquisition & Fulfillment | Sales Scripting, Onboarding Auto, Service Delivery      | $10k/mo MRR        |
| G3   | Agency Scaling            | Team Delegation, Ad Spend Scale, Operational OS         | Manager Installed  |

### M&A Acquisition

| Gate | Title         | Nodes                                               | Exit Criteria      |
| ---- | ------------- | --------------------------------------------------- | ------------------ |
| G1   | Deal Sourcing | Industry Selection, Broker Net, Financial Audit     | LOI Accepted       |
| G2   | Due Diligence | SBA 7(a) App, Legal Review, Asset Purchase Agmt     | Funding Secured    |
| G3   | Closing & Ops | 90-Day Transition, Culture Integrate, Cash Flow Opt | Operator Installed |

### Legacy Trust Hub

| Gate | Title              | Nodes                                          | Exit Criteria    |
| ---- | ------------------ | ---------------------------------------------- | ---------------- |
| G1   | Asset Inventory    | Net Worth Map, Liability Audit, Trustee Select | Assets Cataloged |
| G2   | Trust Architecture | Jurisdiction Select, Drafting, EIN Obtainment  | Trust Executed   |
| G3   | Funding            | Asset Retitling, Bank Funding, Corp Governance | Assets Shielded  |

---

**End of Document**

---

_Nora Capital Group - Absolute Stewardship Command | Doctorate Tier_

_"Jesus Christ is the Cornerstone"_
