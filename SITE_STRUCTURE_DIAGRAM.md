# Beyond MediSpa Site Structure Diagram

## Overall Site Hierarchy

```
BEYOND MEDISPA (78 Routes Total)
│
├── SHARED ACROSS ALL PAGES (Global)
│   ├── Navigation Component ❌ Hardcoded
│   ├── Footer Component ❌ Hardcoded
│   └── WhatsApp Widget
│
├── MAIN NAVIGATION PAGES (6 Routes)
│   ├── / (Homepage) ✅ Partial CMS (Hero only)
│   ├── /about ❌ Fully Hardcoded
│   ├── /contact ❌ Fully Hardcoded
│   ├── /doctors ❌ Fully Hardcoded
│   ├── /locations ❌ Fully Hardcoded
│   └── /book-treatment ❌ External Integration
│
├── PROCEDURE CATEGORY PAGES (4 Routes)
│   ├── /procedures/facial ❌ Hardcoded
│   ├── /procedures/injectables ❌ Hardcoded
│   ├── /procedures/body ❌ Hardcoded
│   └── /procedures/peels ❌ Hardcoded
│
├── INDIVIDUAL PROCEDURE PAGES (46 Routes)
│   ├── Facial Treatments (11 pages)
│   │   ├── /procedures/facial/hydrafacial-london ❌
│   │   ├── /procedures/facial/hydrafacial-edinburgh ❌
│   │   ├── /procedures/facial/microneedling-london ❌
│   │   ├── /procedures/facial/microneedling-edinburgh ❌
│   │   ├── /procedures/facial/dermaplaning ❌
│   │   ├── /procedures/facial/exosome ❌
│   │   ├── /procedures/facial/hydratite ❌
│   │   ├── /procedures/facial/keravive ❌
│   │   ├── /procedures/facial/led-facial ❌
│   │   ├── /procedures/facial/oxygen-facial ❌
│   │   └── /procedures/facial/skin-scanner ❌
│   │
│   ├── Injectables (13 pages)
│   │   ├── /procedures/injectables/anti-wrinkle-tina ✅ CMS Ready
│   │   ├── /procedures/injectables/dermal-filler ❌
│   │   ├── /procedures/injectables/profhilo ❌
│   │   ├── /procedures/injectables/polynucleotides ❌
│   │   ├── /procedures/injectables/biofiller-london ❌
│   │   ├── /procedures/injectables/biofiller-edinburgh ❌
│   │   ├── /procedures/injectables/prp ❌
│   │   ├── /procedures/injectables/carboxy ❌
│   │   ├── /procedures/injectables/sclerotherapy ❌
│   │   ├── /procedures/injectables/mole-removal ❌
│   │   ├── /procedures/injectables/neofound ❌
│   │   ├── /procedures/injectables/iv-drip ❌
│   │   ├── /procedures/injectables/vitamin-d ❌
│   │   ├── /procedures/injectables/b12 ❌
│   │   ├── /procedures/injectables/biotin ❌
│   │   ├── /procedures/injectables/glutathione ❌
│   │   ├── /procedures/injectables/magnesium ❌
│   │   └── /procedures/injectables/allergy ❌
│   │
│   ├── Body Treatments (6 pages)
│   │   ├── /procedures/body/laser-hair-removal ❌
│   │   ├── /procedures/body/coolsculpting ❌
│   │   ├── /procedures/body/exilis ❌
│   │   ├── /procedures/body/hifu ❌
│   │   ├── /procedures/body/cool-laser ❌
│   │   └── /procedures/body/electrolysis ❌
│   │
│   └── Chemical Peels (5 pages)
│       ├── /procedures/peels/medik8-london ❌
│       ├── /procedures/peels/medik8-edinburgh ❌
│       ├── /procedures/peels/zo-london ❌
│       ├── /procedures/peels/zo-edinburgh ❌
│       └── /procedures/peels/obagi ❌
│
├── LOCATION HUB PAGES (2 Routes)
│   ├── /london ❌ Hardcoded
│   └── /edinburgh ❌ Hardcoded
│
└── LOCATION-CATEGORY PAGES (8 Routes)
    ├── London Pages (5 routes)
    │   ├── /london/facial ❌ Hardcoded
    │   ├── /london/injectables ❌ Hardcoded
    │   ├── /london/body ❌ Hardcoded
    │   ├── /london/peels ❌ Hardcoded
    │   └── /london/fillers ❌ Hardcoded
    │
    └── Edinburgh Pages (4 routes)
        ├── /edinburgh/facial ❌ Hardcoded
        ├── /edinburgh/injectables ❌ Hardcoded
        ├── /edinburgh/body ❌ Hardcoded
        └── /edinburgh/peels ❌ Hardcoded
```

---

## Homepage Content Structure (Current)

```
HOMEPAGE /
│
├── Navigation (Shared) ❌
│
├── Hero Section ✅ CMS-Ready
│   ├── Main Title ✅
│   ├── Highlighted Title ✅
│   ├── Subtitle ✅
│   ├── Description ✅
│   ├── Features List ✅
│   └── Video Background ✅
│
├── Why Choose Us Section ❌ Hardcoded
│   └── 5 Cards (Award, Heart, Users, Shield, Clock icons)
│
├── Services Overview ❌ Hardcoded
│   └── Service cards with descriptions
│
├── Get More Section ❌ Hardcoded
│   └── Benefits/features list
│
├── Program Section ❌ Hardcoded
│   └── Program descriptions with images
│
├── Expert Medicine Section ❌ Hardcoded
│   ├── Title + Description
│   └── Image
│
├── Locations Section ❌ Hardcoded
│   ├── London Location Card
│   └── Edinburgh Location Card
│
├── FAQ Section ❌ Hardcoded
│   └── Multiple Q&A items
│
└── Footer (Shared) ❌
```

---

## About Page Structure

```
ABOUT PAGE /about
│
├── Navigation (Shared) ❌
│
├── Hero Section ❌ Hardcoded
│   ├── Title with highlight
│   ├── Description
│   └── CTA Buttons
│
├── Brand Trust Section ❌ Placeholder
│
├── Mission Section ❌ Hardcoded
│   ├── Sub-title
│   ├── "Elevating Care" Text Block
│   │   ├── Image (left)
│   │   ├── Heading
│   │   └── Description
│   │
│   └── "Your Journey" Text Block
│       ├── Description
│       ├── Image (right)
│       └── CTA Button
│
├── What Makes Us Different ❌ Hardcoded
│   ├── Grid Title with highlight
│   └── 3 Column Cards
│       ├── Award Icon + Title + Description
│       ├── Heart Icon + Title + Description
│       └── Users Icon + Title + Description
│
├── Who We Are ❌ Hardcoded
│   ├── Image (left)
│   ├── Title with highlight
│   ├── Description
│   └── CTA Button
│
├── Team Section ❌ Uses i18n (but hardcoded in layout)
│   ├── Section Title + Subtitle
│   └── Team Member Cards Grid (4 columns)
│       └── Per Member:
│           ├── Photo
│           ├── Role
│           ├── Name
│           └── Description
│
├── Gallery Section Header ❌
│
├── Trust, Honesty, Expertise ❌ Hardcoded
│   ├── Image (left)
│   ├── Title with highlight
│   └── Description
│
├── Personalized Experience ❌ Hardcoded
│   ├── Title with highlight
│   ├── Description
│   └── Image (right)
│
├── Safety & Innovation ❌ Hardcoded
│   ├── Image (left)
│   ├── Title with highlight
│   └── Description
│
├── CTA Section ❌ Hardcoded
│   ├── Dark Gradient Background
│   ├── Title
│   ├── Description
│   └── CTA Button
│
├── Locations Section ❌ Hardcoded
│   └── [same as homepage]
│
└── Footer (Shared) ❌
```

---

## Contact Page Structure

```
CONTACT PAGE /contact
│
├── Navigation (Shared) ❌
│
├── Hero Section ❌ Hardcoded
│   ├── Title with highlight
│   └── Description
│
├── Contact Info Cards Section ❌ Hardcoded
│   ├── Phone Card
│   │   ├── Icon
│   │   ├── Title
│   │   └── Details + Description
│   │
│   ├── Email Card
│   │   ├── Icon
│   │   ├── Title
│   │   └── Details + Description
│   │
│   ├── Locations Card
│   │   ├── Icon
│   │   ├── Title
│   │   └── Details + Description
│   │
│   └── Hours Card
│       ├── Icon
│       ├── Title
│       └── Details + Description
│
├── Contact Form + Locations ❌ Hardcoded
│   ├── Contact Form (left)
│   │   ├── Name field
│   │   ├── Email field
│   │   ├── Message textarea
│   │   └── Submit button
│   │
│   └── Location Cards (right)
│       ├── London Details
│       └── Edinburgh Details
│
└── Footer (Shared) ❌
```

---

## Doctors/Team Page Structure

```
DOCTORS PAGE /doctors
│
├── Navigation (Shared) ❌
│
├── Hero Section ❌ Hardcoded
│
├── Filter/Search ❌ (likely hardcoded)
│
├── Doctor Cards Grid ❌ Hardcoded Data
│   └── Per Doctor Card:
│       ├── Photo
│       ├── Name (Hardcoded)
│       ├── Title (Hardcoded)
│       ├── Location (Hardcoded)
│       ├── Specialties List (Hardcoded)
│       ├── Experience (Hardcoded)
│       ├── Qualifications List (Hardcoded)
│       ├── Bio (Hardcoded)
│       ├── Languages (Hardcoded)
│       └── Contact Icons
│
├── Contact CTA Section ❌
│
└── Footer (Shared) ❌
```

---

## Procedure Page Template Structure

**Used by all 45 individual treatment pages**

```
INDIVIDUAL PROCEDURE PAGE /procedures/[category]/[treatment]
│
├── Navigation (Shared) ❌
│
├── Hero Section ❌ Hardcoded
│   ├── Tagline
│   ├── Title
│   ├── Subtitle (highlight color)
│   ├── Description
│   ├── Background Image
│   ├── Dark Overlay
│   └── CTA Button
│
├── Treatment Details Grid ❌ Hardcoded
│   ├── Duration Card
│   │   ├── Duration value
│   │   └── Label
│   │
│   ├── Results Timeline Card
│   │   ├── Timeline value
│   │   └── Label
│   │
│   └── Price Card
│       ├── Price value
│       └── Label
│
├── Benefits Section ❌ Hardcoded
│   └── Benefits List
│
├── Testimonials Section ❌ (if enabled)
│
├── Spa Welcome Section ❌ Hardcoded
│
├── Expertise Section ❌ Hardcoded
│
├── Professional Products Section ❌ Hardcoded
│
├── Treatment Journey Section ❌ Hardcoded
│
├── Promotions Section ❌ Hardcoded
│
├── FAQ Section ❌ Hardcoded
│
└── Footer (Shared) ❌
```

---

## Category Page Template Structure

**Used by 4 procedure category pages + 8 location-category pages**

```
CATEGORY PAGE /procedures/[category] or /[location]/[category]
│
├── Navigation (Shared) ❌
│
├── Hero Section ❌ Hardcoded
│   ├── Title
│   ├── Subtitle
│   ├── Description
│   └── Background Image (optional)
│
├── Treatments Grid ❌ Hardcoded Arrays
│   ├── Treatment Card 1
│   │   ├── Name
│   │   ├── Description
│   │   ├── Duration
│   │   ├── Price
│   │   ├── Benefits List
│   │   ├── Image (optional)
│   │   └── Link to procedure page
│   │
│   ├── Treatment Card 2
│   │   └── [same structure]
│   │
│   └── ... (multiple cards)
│
├── Process/Journey Section ❌ Hardcoded
│   ├── Step 1: Consultation
│   ├── Step 2: Preparation
│   ├── Step 3: Treatment
│   └── Step 4: Aftercare
│
├── Testimonials Section ❌ (if enabled)
│
└── Footer (Shared) ❌
```

---

## Location Hub Page Structure

**Used by London & Edinburgh pages**

```
LOCATION HUB PAGE /london or /edinburgh
│
├── Navigation (Shared) ❌
│
├── Hero Section ❌ Hardcoded
│   ├── Title with highlight
│   ├── Description
│   └── Background Image
│
├── Why Choose Us Section ❌ Hardcoded
│   └── 5 Feature Cards
│
├── Treatment Categories Section ❌ Hardcoded
│   ├── Facial Category Card
│   ├── Body Contouring Card
│   ├── Skin Treatments Card
│   └── Injectables Card
│
├── Treatment Journey ❌ Hardcoded
│   ├── Step 1: Consultation
│   ├── Step 2: Treatment
│   └── Step 3: Aftercare
│
├── Testimonials Section ❌ Hardcoded
│
├── FAQ Section ❌ Hardcoded
│   └── Location-specific questions
│
├── Locations Section ❌ Hardcoded
│   ├── London Details
│   └── Edinburgh Details
│
└── Footer (Shared) ❌
```

---

## Data Flow Diagram

```
TINA CMS EDITOR INTERFACE
         ↓
    tina/config.ts (Schema Definition)
         ↓
    [Collections]
    ├── homepage/home.json ✅
    ├── treatments/*.json (45 files needed) ❌ 44 missing
    ├── team/*.json
    ├── settings/ (not yet created) ❌
    ├── navigation/ (not yet created) ❌
    └── footer/ (not yet created) ❌
         ↓
    frontend/client.ts (GraphQL queries)
         ↓
    React Components
    ├── HomepageTina → HomepageContent ✅
    ├── AntiWrinkleTinaPage → AntiWrinkleContent ✅
    ├── [Other pages] ❌
         ↓
    Rendered HTML/CSS to Browser
```

---

## Hardcoding Patterns by Location

### Pattern 1: Component-Level Arrays
```
File: frontend/components/pages/procedures/FacialPage.tsx
const facialTreatments = [
  { name: 'HydraFacial', description: '...', route: '...' },
  { name: 'Oxygen Facial', description: '...', route: '...' },
  ...
]
```
**Frequency:** 12 locations (category pages + location-category pages)

### Pattern 2: Component-Level Objects
```
File: frontend/components/pages/procedures/injectables/AntiWrinklePage.tsx
const hero = { tagline, title, subtitle, description, backgroundImage }
const treatmentInfo = { duration, results, price, benefits }
```
**Frequency:** 45 individual procedure pages

### Pattern 3: Direct Text/i18n Hybrid
```
File: frontend/components/pages/AboutPage.tsx
Uses: useTranslations() for some content (team members)
But also: Hardcoded JSX sections, inline CSS values
```
**Frequency:** 6 main pages

### Pattern 4: Icon Imports + Arrays
```
File: frontend/components/Navigation.tsx
Uses: Hard-coded navigation structure with translation labels
```
**Frequency:** 1 (Navigation)

### Pattern 5: Inline Feature Constants
```
File: frontend/components/pages/LondonPage.tsx
const whyChoose = [
  { icon: Award, title: '...', description: '...' },
  ...
]
```
**Frequency:** Multiple pages

---

## Content Reuse Map

```
Content Piece                    Used On                              Count
────────────────────────────────────────────────────────────────────────
Location Information             5 pages (Contact, Locations,         5
(Address, Phone, Hours)          London, Edinburgh, Footer)

Team Members                     About page, Doctors page             2

Testimonials                     Homepage, Category pages,            15+
                                 Procedure pages

FAQs                            Homepage, Location pages              2+

Treatment Prices                Category pages, Procedure pages       15+

Contact Info                    Footer, Contact page, Every page      78
(Phone, Email, Social)          header

Why Choose Us                   Homepage, Location pages              3

Treatment Descriptions          Category page, Procedure page         15+

Navigation Menu Structure       All pages                             78

Features/Benefits Lists         Procedure pages                       45
```

**Key Insight:** Creating CMS for these will create massive reuse opportunities and reduce maintenance burden.

---

## Component Usage Frequency

```
Component                        Used On          Count
────────────────────────────────────────────────────────
Navigation                       All pages        78
Footer                          All pages        78
ProcedurePageTemplate           Procedures      45
CategoryPageTemplate            Categories      12
TestimonialsSection             Multiple        10+
LocationSection                 Multiple        5+
FAQSection                       Multiple        3+
WhyChooseUsSection              Multiple        3+
HeroSection                      All pages       78
Button                          All pages       78+
```

---

## Technology Stack for Each Page Type

```
Page Type               Current Tech         Needed for Full CMS
─────────────────────────────────────────────────────────────
Homepage               React + TinaCMS ✅   Add 8 more sections
About/Contact/Doctors  React only ❌        Add TinaCMS wrapper
Procedure (45)         React + hardcoded    Migrate to TinaCMS
Categories (12)        React + hardcoded    Add dynamic fetching
Locations (2)          React + hardcoded    Add TinaCMS
Navigation/Footer      React + hardcoded    Add global CMS
```

---

## Browser Rendering Timeline (Current vs. Proposed)

### Current (Hardcoded)
```
1. Browser requests /procedures/facial/hydrafacial-london
2. Server returns React component
3. React renders HydrafacialLondonPage component
4. Component returns JSX with hardcoded data
5. Browser renders 100 HTML elements + CSS
6. User sees page (no CMS loading delay)

Pros: Fast, No external calls
Cons: No dynamic updates, Code change required to update
```

### Proposed (CMS)
```
1. Browser requests /procedures/facial/hydrafacial-london
2. Server returns React component (HydrafacialLondonPage → HydrafacialLondonPageTina)
3. React fetches treatment data from TinaCMS (client.queries.treatment)
4. Component processes data (useTina hook)
5. React renders ProcedurePageTemplate with fetched data
6. Browser renders 100 HTML elements + CSS
7. User sees page (adds ~200ms CMS fetch time)

Pros: Dynamic updates, Single source of truth, Scalable
Cons: Slightly slower (but cached), Adds CMS dependency
```

**Optimization:** Implement static generation + ISR (Incremental Static Regeneration) to cache CMS content

---

