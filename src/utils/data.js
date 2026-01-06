import { BriefcaseBusiness, Building2, Coins, Rocket, Shield } from "lucide-react";

export const ACCORDS = [
  {
    id: 'BUILDER',
    title: 'The Builder’s Accord',
    desc: 'Create and launch new institutional systems.',
    blueprints: [
      'AI Agency Node',
      'SaaS Venture',
      'E-Com Supply Chain',
      'Service OS',
    ],
  },
  {
    id: 'INVESTOR',
    title: 'The Investor’s Accord',
    desc: 'Acquire and leverage existing assets.',
    blueprints: [
      'Fix & Flip Forge',
      'M&A Acquisition',
      'Forex Scalp Node',
      'Land Banking',
    ],
  },
  {
    id: 'GOVERNOR',
    title: 'The Governor’s Accord',
    desc: 'Preserve and shield generational wealth.',
    blueprints: [
      'Legacy Trust Hub',
      'Sovereign Gold Preservation',
      'IP Portfolio',
      'Family Office',
    ],
  },
];

export const BLUEPRINT_LOGIC = {
  'AI Agency Node': {
    gates: [
      {
        id: 'G1',
        title: 'Niche & Offer',
        nodes: ['Market Demand Audit', 'High-Ticket Offer', 'Outreach System'],
        exit: '3 Signed Retainers',
      },
      {
        id: 'G2',
        title: 'Acquisition & Fulfillment',
        nodes: ['Sales Scripting', 'Onboarding Auto', 'Service Delivery'],
        exit: '$10k/mo MRR',
      },
      {
        id: 'G3',
        title: 'Agency Scaling',
        nodes: ['Team Delegation', 'Ad Spend Scale', 'Operational OS'],
        exit: 'Manager Installed',
      },
    ],
  },
  'SaaS Venture': {
    gates: [
      {
        id: 'G1',
        title: 'Validation & MVP',
        nodes: ['Problem/Solution Fit', 'No-Code Prototype', 'Beta Waitlist'],
        exit: '50 Beta Users',
      },
      {
        id: 'G2',
        title: 'Launch & Traction',
        nodes: ['Product Hunt Launch', 'Churn Optimization', 'Feedback Loop'],
        exit: '$5k MRR',
      },
      {
        id: 'G3',
        title: 'Growth & Funding',
        nodes: ['Venture Debt', 'ARR Scaling', 'Enterprise Sales'],
        exit: 'Seed Round / Series A',
      },
    ],
  },
  'E-Com Supply Chain': {
    gates: [
      {
        id: 'G1',
        title: 'Product & Sourcing',
        nodes: ['Niche Profitability', 'Supplier Neg', 'Sample Verify'],
        exit: 'Inventory Secured',
      },
      {
        id: 'G2',
        title: 'Storefront & Logistics',
        nodes: ['Shopify Setup', '3PL Integration', 'Launch Traffic'],
        exit: '100 Unit Sales',
      },
      {
        id: 'G3',
        title: 'Brand Dominance',
        nodes: ['AOV Optimization', 'Global Expansion', 'Retail Distrib'],
        exit: '7-Figure Run Rate',
      },
    ],
  },
  'Service OS': {
    gates: [
      {
        id: 'G1',
        title: 'Skill Productization',
        nodes: ['Service-to-Product', 'Pricing Arch', 'Lead Flow'],
        exit: 'Offer Validated',
      },
      {
        id: 'G2',
        title: 'Delivery Automation',
        nodes: ['SOP Creation', 'VA Hiring', 'CRM Integration'],
        exit: '20hr Work Week',
      },
      {
        id: 'G3',
        title: 'Market Authority',
        nodes: ['Thought Leadership', 'Partnership Net', 'Equity Licensing'],
        exit: 'Market Leader Status',
      },
    ],
  },
  'Fix & Flip Forge': {
    gates: [
      {
        id: 'G1',
        title: 'Market & Deal Flow',
        nodes: ['Zip Code Forensics', 'Wholesaler Net', 'ARV Analysis'],
        exit: 'Property Under Contract',
      },
      {
        id: 'G2',
        title: 'Acquisition & Rehab',
        nodes: ['Hard Money Lock', 'Contractor Mgmt', 'Draw Schedule'],
        exit: 'Rehab Complete',
      },
      {
        id: 'G3',
        title: 'Disposition & Scale',
        nodes: ['Staging Strategy', 'Listing Opt', 'Profit Redeploy'],
        exit: 'Sale Closed / 20% ROI',
      },
    ],
  },
  'M&A Acquisition': {
    gates: [
      {
        id: 'G1',
        title: 'Deal Sourcing',
        nodes: ['Industry Selection', 'Broker Net', 'Financial Audit'],
        exit: 'LOI Accepted',
      },
      {
        id: 'G2',
        title: 'Due Diligence',
        nodes: ['SBA 7(a) App', 'Legal Review', 'Asset Purchase Agmt'],
        exit: 'Funding Secured',
      },
      {
        id: 'G3',
        title: 'Closing & Ops',
        nodes: ['90-Day Transition', 'Culture Integrate', 'Cash Flow Opt'],
        exit: 'Operator Installed',
      },
    ],
  },
  'Forex Scalp Node': {
    gates: [
      {
        id: 'G1',
        title: 'Technical Mastery',
        nodes: ['Strategy Backtest', 'Risk Rules', 'Demo Verify'],
        exit: '10% Demo Profit',
      },
      {
        id: 'G2',
        title: 'Prop Firm Challenge',
        nodes: ['Eval Phase 1', 'Eval Phase 2', 'Funded Access'],
        exit: '$100k Funded',
      },
      {
        id: 'G3',
        title: 'Capital Scaling',
        nodes: ['Payout Mgmt', 'Multi-Account Copy', 'Tax Efficiency'],
        exit: '$10k/mo Payout',
      },
    ],
  },
  'Land Banking': {
    gates: [
      {
        id: 'G1',
        title: 'Parcel ID',
        nodes: ['Path of Progress', 'Zoning Analysis', 'Tax Lien Search'],
        exit: 'Parcel Under Contract',
      },
      {
        id: 'G2',
        title: 'Acquisition',
        nodes: ['Cash Purchase', 'Seller Finance', 'Title Insurance'],
        exit: 'Deed Recorded',
      },
      {
        id: 'G3',
        title: 'Entitlement',
        nodes: ['Re-Zoning App', 'Utility Feasibility', 'Developer Opt'],
        exit: 'Value 2x Increase',
      },
    ],
  },
  'Legacy Trust Hub': {
    gates: [
      {
        id: 'G1',
        title: 'Asset Inventory',
        nodes: ['Net Worth Map', 'Liability Audit', 'Trustee Select'],
        exit: 'Assets Cataloged',
      },
      {
        id: 'G2',
        title: 'Trust Architecture',
        nodes: ['Jurisdiction Select', 'Drafting', 'EIN Obtainment'],
        exit: 'Trust Executed',
      },
      {
        id: 'G3',
        title: 'Funding',
        nodes: ['Asset Retitling', 'Bank Funding', 'Corp Governance'],
        exit: 'Assets Shielded',
      },
    ],
  },
  'Sovereign Gold Preservation': {
    gates: [
      {
        id: 'G1',
        title: 'Market Entry',
        nodes: ['Spot Analysis', 'Dealer Verify', 'Storage Security'],
        exit: 'Dealer Account Open',
      },
      {
        id: 'G2',
        title: 'Acquisition',
        nodes: ['Dollar Cost Avg', 'Mint Select', 'Vault Logistics'],
        exit: '10oz Secured',
      },
      {
        id: 'G3',
        title: 'Liquidity',
        nodes: ['Asset Lending', 'Generational Transfer', 'Tax Reporting'],
        exit: 'Loans Initialized',
      },
    ],
  },
  'IP Portfolio': {
    gates: [
      {
        id: 'G1',
        title: 'Creation Audit',
        nodes: ['Idea Validation', 'Prior Art', 'Copyright Reg'],
        exit: 'IP Registered',
      },
      {
        id: 'G2',
        title: 'Monetization',
        nodes: ['Licensing Model', 'Royalty Struct', 'Distribution'],
        exit: 'First Royalty Check',
      },
      {
        id: 'G3',
        title: 'Valuation',
        nodes: ['Catalog Val', 'Broker Select', 'Annuity Stream'],
        exit: 'Catalog Sale',
      },
    ],
  },
  'Family Office': {
    gates: [
      {
        id: 'G1',
        title: 'Governance',
        nodes: ['Family Constitution', 'Inv Policy', 'Mission Def'],
        exit: 'Board Seated',
      },
      {
        id: 'G2',
        title: 'Operations',
        nodes: ['CIO Selection', 'Legal Counsel', 'Tax Strategy'],
        exit: 'Office Staffed',
      },
      {
        id: 'G3',
        title: 'Direct Inv',
        nodes: ['Deal Flow Pipe', 'Co-Invest Strat', 'Impact Inv'],
        exit: 'First Deal Closed',
      },
    ],
  },
};

export const BLUEPRINT_CURRICULUM = {
  'AI Agency Node': {
    title: 'Agency Architecture',
    modules: [
      'High-Ticket Offer Creation',
      'Outreach Automation',
      'Fulfillment Systems',
    ],
  },
  'SaaS Venture': {
    title: 'Software Sovereignty',
    modules: ['No-Code MVP Build', 'Churn Reduction Logic', 'Enterprise Sales'],
  },
  'Fix & Flip Forge': {
    title: 'Rehab Forensics',
    modules: [
      'ARV Calculation',
      'Contractor Management',
      'Hard Money Leverage',
    ],
  },
  'M&A Acquisition': {
    title: 'Corporate Raider',
    modules: [
      'Balance Sheet Auditing',
      'Seller Finance Negotiation',
      'SBA 7(a) Mastery',
    ],
  },
  'Legacy Trust Hub': {
    title: 'Dynastic Shielding',
    modules: [
      'Irrevocable Trust Structure',
      'Trustee Selection',
      'Asset Retitling',
    ],
  },
  'Forex Scalp Node': {
    title: 'Market Structure',
    modules: ['Liquidity Sweeps', 'Risk Management', 'Prop Firm Rules'],
  },
  'Land Banking': {
    title: 'Raw Earth Value',
    modules: ['Zoning Laws', 'Entitlement Process', 'Tax Lien Investing'],
  },
  'Sovereign Gold Preservation': {
    title: 'Hard Money',
    modules: ['Bullion Storage', 'Dealer Verification', 'Asset-Backed Lending'],
  },
  'IP Portfolio': {
    title: 'Intellectual Property',
    modules: ['Trademark Filing', 'Licensing Agreements', 'Royalty Streams'],
  },
  'Family Office': {
    title: 'Generational Governance',
    modules: [
      'Family Constitution',
      'Investment Policy',
      'Philanthropic Strategy',
    ],
  },
  'E-Com Supply Chain': {
    title: 'Global Trade Logistics',
    modules: [
      'Supplier Negotiation',
      '3PL Management',
      'Inventory Forecasting',
    ],
  },
  'Service OS': {
    title: 'Service Productization',
    modules: ['SOP Development', 'VA Delegation', 'Client Retention'],
  },
  default: {
    title: 'Stewardship Foundations',
    modules: [
      'Credit Repair Forensics',
      'Entity Structuring 101',
      'Capital Velocity',
    ],
  },
};

export const GENERAL_GOALS = [
  {
    id: 'BUS',
    title: 'Business Enterprise',
    desc: 'Dominion through scalable systems.',
    icon: BriefcaseBusiness,
  },
  {
    id: 'RE',
    title: 'Real Estate Empire',
    desc: 'Dominion through asset portfolios.',
    icon: Building2,
  },
  {
    id: 'CAP',
    title: 'Capital Multiplier',
    desc: 'Dominion through high-tier arbitrage.',
    icon: Coins,
  },
  {
    id: 'LEG',
    title: 'Kingdom Legacy',
    desc: 'Dominion through preservation.',
    icon: Shield,
  },
  {
    id: 'OS',
    title: 'Institutional OS',
    desc: 'Dominion through technology.',
    icon: Rocket,
  },
];

export const SEASONS = [
  {
    id: 'Seeker',
    label: 'The Seeker',
    desc: '$0 Foundation. Credit focus.',
    border: 'border-red-500',
  },
  {
    id: 'Laborer',
    label: 'The Laborer',
    desc: 'Active 9-to-5. Stacking focus.',
    border: 'border-blue-400',
  },
  {
    id: 'Owner',
    label: 'The Vessel Owner',
    desc: 'Business Owner. Revenue focus.',
    border: 'border-[#D4AF37]',
  },
  {
    id: 'Governor',
    label: 'The Governor',
    desc: 'Executive. Protection focus.',
    border: 'border-white',
  },
];

export const FUNDING_VECTORS = [
  {
    id: 'CS',
    title: 'Institutional Credit Stacking',
    limit: '$250k+',
    desc: 'Sequential personal/business credit liquidity protocol.',
  },
  {
    id: 'SBA',
    title: 'SBA Node',
    limit: '$5M+',
    desc: 'Government-backed commercial capital.',
  },
  {
    id: 'PE',
    title: 'Private Equity / Angel Link',
    limit: 'Variable',
    desc: 'Dilutive or non-dilutive strategic investor capital.',
  },
  {
    id: 'RB',
    title: 'Revenue Based',
    limit: '$1M+',
    desc: 'Immediate liquidity leveraged against gross inflow.',
  },
  {
    id: 'BL',
    title: 'Asset-Backed Bridge Loans',
    limit: '$10M+',
    desc: 'Short-term hard asset collateralized funding.',
  },
  {
    id: 'VD',
    title: 'Neural Venture Debt',
    limit: '$2M+',
    desc: 'High-growth debt nodes for proven OS models.',
  },
  {
    id: 'EQ',
    title: 'Equipment Fin',
    limit: '$500k+',
    desc: 'Securing high-yield physical infrastructure nodes.',
  },
  {
    id: 'CT',
    title: 'Tier 3 Corporate Tradelines',
    limit: '$100k+',
    desc: 'Uncollateralized corporate spending power expansion.',
  },
];

export const COUNCIL_PERSONAS = [
  {
    id: 'solomon',
    name: 'Dr. Solomon',
    task: 'Order & Structure',
    focus: 'wisdom, debt elimination, hygiene',
    prompt:
      'You are Dr. Solomon. Focus on institutional order, wisdom, and debt elimination. Speak with authoritative weight.',
  },
  {
    id: 'abraham',
    name: 'Dr. Abraham',
    task: 'Offense & Growth',
    focus: 'land, aggressive capital, inheritance',
    prompt:
      'You are Dr. Abraham. Focus on growth, land acquisition, and multi-generational inheritance.',
  },
  {
    id: 'esther',
    name: 'Queen Esther',
    task: 'Legal Position',
    focus: 'diplomatic defense, legal interests',
    prompt:
      'You are Queen Esther. Focus on strategic positioning and the legal protection of the household.',
  },
  {
    id: 'deborah',
    name: 'Deborah',
    task: 'Decisive Judgment',
    focus: 'leadership, conflict resolution',
    prompt:
      'You are Deborah. Focus on decisive leadership and conflict resolution.',
  },
  {
    id: 'ruth',
    name: 'Ruth',
    task: 'Legacy Loyalty',
    focus: 'lineage, humble service, inheritance',
    prompt:
      'You are Ruth. Focus on loyalty and the preservation of the family lineage.',
  },
];

export const MASTER_PROTOCOL_DATA = {
  // Days 1-10 (Stabilization & Formation)
  1: {
    title: 'Covenant Alignment',
    devotion: 'Proverbs 21:5',
    logic:
      'Order is the first law. Baseline calibration ensures zero energy loss.',
    tasks: [
      'Perform bank statement audit (90 days)',
      'Identify 3 recurring behavioral leaks',
      'Synchronize initial Ledger in Terminal',
      'Verify Credit Baseline score',
      'Isolate grocery/subscription leakage nodes',
    ],
    score: 100,
  },
  2: {
    title: 'Fiduciary Cleanse',
    devotion: 'Romans 12:2',
    logic: 'Clean identity is the only recognized currency.',
    tasks: [
      'Order LexisNexis Consumer Disclosure',
      'Update address nodes on all 3 bureaus',
      'Opt-out of promotional data',
      'Identify 2-4 static retail anchors',
      'Challenge non-residential address flags',
    ],
    score: 150,
  },
  3: {
    title: 'Capital Architecture',
    devotion: 'Luke 14:28',
    logic: 'Structural integrity determines the height of your tower.',
    tasks: [
      'Calculate current Debt-to-Inflow (DTI)',
      'Map specific EIN jurisdiction',
      'Initialize SOS node',
      'Audit NAICS code for high-risk flags',
      'Verify Entity Name availability',
    ],
    score: 200,
  },
  4: {
    title: 'Neural Node Audit',
    devotion: 'Matthew 25:21',
    logic: 'The steward must account for every talent.',
    tasks: [
      'List liability interest rates',
      'Map repayment velocity',
      'Audit utilization thresholds',
      'Isolate credit inquiries (6mo)',
      'Verify personal DTI < 40%',
    ],
    score: 120,
  },
  5: {
    title: 'Compliance Alignment',
    devotion: '1 Corinthians 14:40',
    logic: 'Lenders look for institutional consistency.',
    tasks: [
      'Align phone/address nodes',
      'Verify USPS formatting',
      'Sync entity name spelling',
      'Init professional email domain',
      'Check directory listings',
    ],
    score: 180,
  },
  6: {
    title: 'Vessel Formation I',
    devotion: 'Isaiah 54:2',
    logic: 'The legal vessel contains the blessing.',
    tasks: [
      'Finalize Operating Accord',
      'Submit Articles of Org',
      'Init Registered Agent',
      'Define ownership %',
      'Secure IRS SS-4',
    ],
    score: 300,
  },
  7: {
    title: 'Banking Infrastructure',
    devotion: 'Proverbs 22:7',
    logic: 'The bank account is the heart of the vessel.',
    tasks: [
      'Select Tier 1 Bank partner',
      'Schedule banker appointment',
      'Prepare initial deposit',
      'Bring Articles & EIN',
      'Request business credit card',
    ],
    score: 250,
  },
  8: {
    title: 'Vendor Stacking I',
    devotion: 'Proverbs 31:16',
    logic: 'Trade lines build the Paydex score.',
    tasks: [
      'Apply Uline Net-30',
      'Apply Quill Net-30',
      'Apply Grainger Net-30',
      'Purchase initial $50 supplies',
      'Set payment reminders',
    ],
    score: 200,
  },
  9: {
    title: 'Digital Footprint',
    devotion: 'Matthew 5:14',
    logic: 'Underwriters verify via digital presence.',
    tasks: [
      'Secure professional domain',
      'Init Google Business Profile',
      'List on 411 directory',
      'Create landing page',
      'Verify 411 phone',
    ],
    score: 150,
  },
  10: {
    title: 'Forensic Review I',
    devotion: '2 Corinthians 13:5',
    logic: 'First checkpoint audit.',
    tasks: [
      'Verify SOS active status',
      'Confirm bank operational',
      'Check LexisNexis status',
      'Review credit score shift',
      'Seal Month 1 Phase',
    ],
    score: 500,
  },
  // ... Days 11-31 implied as populated
};

export const DOCTORATE_LOGIC = {
  'Paydex Index':
    'A Paydex of 80 is the institutional floor. It signals that your vessel pays 10-30 days ahead of terms, triggering uncollateralized corporate limits.',
  'Institutional Delta':
    "Velocity is determined by the spread between inflow and burden. A delta below 30% indicates a 'leak' in stewardship hygiene.",
  'EIN Node':
    'The Employer Identification Number is the neural key for non-dilutive capital. It must be paired with an IRS-stamped SS-4 for verification.',
  'Annual Revenue':
    'Verified gross inflow determines your Tier 1 and Tier 2 bankability. Revenue-based financing protocols require 6-12 months of consistent nodes.',
  'Trade Lines Node':
    "A minimum of 5 Tier-1 tradelines are required to build a neural credit bridge. Without these, the EIN remains 'thin' and high-risk.",
  'Entity Architecture':
    'LLC or C-Corp positioning is required for legal shielding. Sole proprietorships are viewed as high-risk by institutional underwriters.',
  'Personal Ledger Score':
    'Measures the surplus efficiency of your personal cash flow node. Higher scores unlock personal-to-business credit stacking vectors.',
  'Vessel Command Score':
    'Measures the operational efficiency of your entity. It calculates profit margins against operational burn nodes.',
};

export const HORIZON_GATES = [
  {
    id: 'GATE1',
    month: 'Month 1',
    title: 'Stabilization & Cleansing',
    nodes: [
      'Forensic Credit Audit',
      'Behavioral Leak Plugging',
      'Cash Flow Baseline',
      'Debt Snowball Initiation',
    ],
  },
  {
    id: 'GATE2',
    month: 'Month 2',
    title: 'Formation & Bridge',
    nodes: [
      'Vessel (LLC) Formation',
      'EIN/DUNS Calibration',
      'Bank Relationship Stacking',
      'Funding Vector Selection',
    ],
  },
  {
    id: 'GATE3',
    month: 'Month 3',
    title: 'Acquisition & Scaling',
    nodes: [
      'Capital Deployment',
      'Blueprint Launch',
      'Asset Management OS',
      'Legacy Shield Setup',
    ],
  },
];

export const FIDUCIARY_INPUTS = [
  { label: 'Registered Entity Name', key: 'bizName' },
  { label: 'Employer ID (EIN)', key: 'ein' },
  { label: 'DUNS Protocol', key: 'duns' },
  {
    label: 'Paydex Index',
    key: 'paydex',
    type: 'number',
    fiduciary: true,
  },
  {
    label: 'Formation Jurisdiction',
    key: 'jurisdiction',
  },
  { label: 'Entity Architecture', key: 'entityType' },
  { label: 'Registered Agent', key: 'agent' },
  { label: 'SOS ID Node', key: 'sosID' },
  {
    label: 'Trade Lines Node',
    key: 'tradeLines',
    type: 'number',
  },
  {
    label: 'Annual Gross Revenue',
    key: 'annualRevenue',
    type: 'number',
    fiduciary: true,
  },
  {
    label: 'Operational Burn',
    key: 'operationalBurn',
    type: 'number',
    fiduciary: true,
  },
  {
    label: 'Profit Margin',
    key: 'profitMargin',
    type: 'number',
  },
  {
    label: 'Liability Total Node',
    key: 'liabilityTotal',
    type: 'number',
  },
  { label: 'Entity Website', key: 'website' },
  {
    label: 'Formation Date',
    key: 'bizDate',
    type: 'date',
  },
  { label: 'Bank Institution', key: 'bankName' },
  {
    label: 'Bank Seniority',
    key: 'bankAccountAge',
    type: 'number',
  },
  {
    label: 'SOS Active Status',
    key: 'secretaryOfStateStatus',
  },
  {
    label: 'Corporate Minutes',
    key: 'corporateMinutesStatus',
  },
  { label: 'Insurance Carrier', key: 'insuranceCarrier' },
  { label: 'Policy Protocol No', key: 'policyNo' },
  {
    label: 'Asset Total Node',
    key: 'assetTotal',
    type: 'number',
  },
]

export const ARMORY = [
  {
    title: 'SBA Business Plan Architect',
    desc: 'Generate 15-page compliant vessel plan.',
  },
  {
    title: 'Investor Pitch Deck Forge',
    desc: 'Format institutional delta into slide deck.',
  },
  {
    title: 'Grant Proposal Narrative',
    desc: 'Draft non-profit funding request.',
  },
  {
    title: 'Automated P&L Statement',
    desc: 'Export forensic audit to ledger CSV.',
  },
]