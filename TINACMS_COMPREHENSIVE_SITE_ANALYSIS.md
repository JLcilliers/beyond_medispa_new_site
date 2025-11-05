# Beyond MediSpa - Comprehensive Site Structure Analysis for TinaCMS

## Executive Summary

The Beyond MediSpa website consists of **78 unique routes** organized around 4 main treatment categories and 2 locations. Currently, **2 pages are TinaCMS-enabled** (Homepage and Anti-Wrinkle Treatment page). To make all sections on all pages editable via TinaCMS, we need to migrate approximately **40+ pages** from hardcoded content to dynamic CMS management.

---

## 1. PAGE HIERARCHY & ROUTE STRUCTURE

### 1.1 Main Navigation Pages (6 routes)
**These are the primary entry points and are shared across all pages:**

| Route | Component | Current State | Key Sections |
|-------|-----------|---------------|--------------|
| `/` | HomepageTina | ✅ TinaCMS Ready | Hero, Why Choose Us, Services, Programs, Expert Medicine, Locations, FAQ |
| `/about` | AboutPage | ❌ Hardcoded | Hero, Mission, 3-Column Differentiators, Team Members, Gallery, Trust Section, Safety, Locations |
| `/contact` | ContactPage | ❌ Hardcoded | Hero, Contact Info Cards, Contact Form, Location Details, WhatsApp CTA |
| `/doctors` | DoctorsPage | ❌ Hardcoded | Hero, Doctor Cards with Specialties/Qualifications, Contact Section |
| `/locations` | LocationsPage | ❌ Hardcoded | Hero, Location Cards, Highlights, Navigation to Location-Specific Pages |
| `/book-treatment` | BookTreatmentPage | ❌ Hardcoded | Booking flow/integration with external system |

---

### 1.2 Shared Components (Appear on Every Page)

These are repeated across **ALL 78 pages** and should have global CMS management:

| Component | File | Current State | Editable Content |
|-----------|------|---------------|------------------|
| Navigation/Header | Navigation.tsx | ❌ Hardcoded | Logo, Menu Items, Phone Numbers, Language Selector, Featured Treatments |
| Footer | Footer.tsx | ❌ Hardcoded | Social Links, Service Links, Contact Info, Policy Links, Copyright |
| Mobile Navigation | Navigation.tsx | ❌ Hardcoded | Menu structure, links |

**Impact:** Changes to navigation/footer require code updates across entire site.

---

### 1.3 Procedure Category Pages (4 routes)

**These serve as landing pages for treatment types. Each shows a grid of individual procedures:**

| Route | Component | Current State | Key Sections |
|-------|-----------|---------------|--------------|
| `/procedures/facial` | FacialPage | ❌ Hardcoded | Hero, 4 Treatment Groups (Basic, Advanced, Tightening, Laser), Testimonials |
| `/procedures/injectables` | InjectablesPage | ❌ Hardcoded | Hero, 5 Treatment Categories, Testimonials |
| `/procedures/body` | BodyPage | ❌ Hardcoded | Hero, Body Treatment Grid, Testimonials |
| `/procedures/peels` | PeelsPage | ❌ Hardcoded | Hero, Peel Treatment Grid, Testimonials |

**Data Structure:** Each category page hardcodes arrays of 4-10 treatment objects:
```javascript
{
  name: string,
  description: string,
  route: string
}
```

---

### 1.4 Individual Procedure Pages (46 routes)

**Two patterns exist:**

#### A. TinaCMS-Enabled (1 page)
| Route | Component | Content File | Sections |
|-------|-----------|--------------|----------|
| `/procedures/injectables/anti-wrinkle-tina` | AntiWrinkleTinaPage | content/treatments/anti-wrinkle.json | ✅ Full CMS management |

#### B. Hardcoded (45 pages)
**Pattern:** Each uses `ProcedurePageTemplate` with hardcoded hero and treatment info

**Facial Treatments (11 pages):**
- hydrafacial-edinburgh, hydrafacial-london, microneedling-edinburgh, microneedling-london
- dermaplaning, exosome, hydratite, keravive, led-facial, oxygen-facial, skin-scanner

**Injectables (13 pages):**
- anti-wrinkle (standard), dermal-filler, profhilo, polynucleotides
- biofiller-edinburgh, biofiller-london
- prp, carboxy, sclerotherapy, mole-removal, neofound
- iv-drip, vitamin-d, b12, biotin, glutathione, magnesium, allergy

**Body Treatments (6 pages):**
- laser-hair-removal, coolsculpting, exilis, hifu, cool-laser, electrolysis

**Chemical Peels (5 pages):**
- medik8-edinburgh, medik8-london, zo-edinburgh, zo-london, obagi

**Data Structure (all hardcoded):**
```javascript
const hero = {
  tagline: "CATEGORY NAME",
  title: "Treatment Name",
  subtitle: "Benefit Description",
  description: "Full description",
  backgroundImage?: "image-url"
}

const treatmentInfo = {
  duration: "15-30 minutes",
  results: "Onset timeline",
  price: "From £X",
  benefits: ["Benefit 1", "Benefit 2", ...]
}
```

---

### 1.5 Location-Specific Category Pages (8 routes)

**These pages combine location + treatment category:**

| Route | Component | Current State | Pattern |
|-------|-----------|---------------|---------|
| `/london/facial` | LondonFacialPage | ❌ Hardcoded | CategoryPageTemplate with hardcoded treatments |
| `/london/injectables` | LondonInjectablesPage | ❌ Hardcoded | CategoryPageTemplate with hardcoded treatments |
| `/london/body` | LondonBodyPage | ❌ Hardcoded | CategoryPageTemplate with hardcoded treatments |
| `/london/peels` | LondonPeelsPage | ❌ Hardcoded | CategoryPageTemplate with hardcoded treatments |
| `/london/fillers` | FillersLondonPage | ❌ Hardcoded | CategoryPageTemplate (speciality category) |
| `/edinburgh/facial` | EdinburghFacialPage | ❌ Hardcoded | CategoryPageTemplate with hardcoded treatments |
| `/edinburgh/injectables` | EdinburghInjectablesPage | ❌ Hardcoded | CategoryPageTemplate with hardcoded treatments |
| `/edinburgh/body` | EdinburghBodyPage | ❌ Hardcoded | CategoryPageTemplate with hardcoded treatments |
| `/edinburgh/peels` | EdinburghPeelsPage | ❌ Hardcoded | CategoryPageTemplate with hardcoded treatments |

**Data Structure (hardcoded arrays):**
```javascript
const hero = {
  title: "Facial",
  subtitle: "Treatments - London",
  description: "Location-specific description"
}

const treatments = [
  {
    name: "Treatment Name",
    description: "Short description",
    duration: "45 minutes",
    price: "From £120",
    benefits: ["Benefit 1", "Benefit 2", ...],
    route: "procedures/facial/treatment-name"
  },
  ...
]
```

---

### 1.6 Location Hub Pages (2 routes)

| Route | Component | Current State | Sections |
|-------|-----------|---------------|----------|
| `/london` | LondonPage | ❌ Hardcoded | Hero, Why Choose Us, Treatment Categories, Treatment Journey, Testimonials, FAQs, Locations |
| `/edinburgh` | EdinburghPage | ❌ Hardcoded | Hero, Why Choose Us, Treatment Categories, Treatment Journey, Testimonials, FAQs, Locations |

---

## 2. HOMEPAGE STRUCTURE (Currently TinaCMS-Ready)

**Component:** `HomepageContent.tsx` consuming `home.json`

**Current Sections:**
1. Navigation (shared)
2. HeroSectionTina - ✅ CMS-editable
3. WhyChooseUsSection - ❌ Hardcoded
4. ServicesOverview - ❌ Hardcoded
5. GetMoreSection - ❌ Hardcoded
6. ProgramSection - ❌ Hardcoded
7. ExpertMedicineSection - ❌ Hardcoded
8. Locations - ❌ Hardcoded
9. FAQSection - ❌ Hardcoded
10. Footer (shared)

**TinaCMS Config:** Available in `frontend/tina/config.ts` (lines 222-289)

---

## 3. ABOUT PAGE STRUCTURE

**Component:** `AboutPage.tsx` (No TinaCMS)

**Hardcoded Sections (14 distinct sections):**
1. Navigation (shared)
2. Hero Section - Title, subtitle, buttons
3. Brand Trust Section - Empty/placeholder
4. Mission Section
   - Image
   - "Elevating Care" heading + description
   - "Your Journey" heading + description
5. What Makes Us Different
   - 3-column grid with differentiators (Award, Heart, Users icons)
   - Each has title + description
6. Who We Are
   - Image
   - Description
   - Book CTA button
7. Team Section
   - Heading
   - Subtitle
   - Dynamic team member cards (pulls from translations)
8. Gallery Section Header
9. Trust, Honesty, Expertise
   - Image
   - Title
   - Description
10. Personalized Experience
    - Image
    - Title
    - Description
11. Safety & Innovation
    - Image
    - Title
    - Description
12. Call to Action Section
    - Dark gradient background
    - CTA buttons
13. Locations Section (shared component)
14. Footer (shared)

**Data Dependencies:**
- Uses `useTranslations` from i18n/translations.ts
- Hardcoded image paths
- Team members pulled from `t.teamMembers` array

---

## 4. CONTACT PAGE STRUCTURE

**Component:** `ContactPage.tsx` (No TinaCMS)

**Hardcoded Sections:**
1. Navigation (shared)
2. Hero Section
   - Title with highlight
   - Description
3. Contact Info Cards (4 cards)
   - Phone, Email, Locations, Hours
   - Each with icon, title, details, description
4. Contact Form & Locations Grid
   - Form section
   - Location details (2 columns)
5. Footer (shared)

**Data Dependencies:**
- Phone numbers, emails from translations
- Location data from translations
- Contact form fields

---

## 5. DOCTORS PAGE STRUCTURE

**Component:** `DoctorsPage.tsx` (No TinaCMS)

**Hardcoded Data:**
- 4 doctor profiles hardcoded as array
- Each doctor has: name, title, location, image, specialties, experience, qualifications, bio, languages

**Sections:**
1. Navigation
2. Hero
3. Filter section
4. Doctor Cards Grid
5. Footer

---

## 6. SHARED SECTION COMPONENTS (Non-Page Components)

These components are used across multiple pages and contain hardcoded content:

| Component | Used On | Hardcoded Content |
|-----------|---------|------------------|
| `HeroSectionTina` | Homepage | ✅ Editable via CMS |
| `HeroSection` | Various | ❌ Hardcoded |
| `WhyChooseUsSection` | Homepage, Location Pages | ❌ Hardcoded (icon + title combos) |
| `ServicesOverview` | Homepage | ❌ Hardcoded (service cards) |
| `GetMoreSection` | Homepage | ❌ Hardcoded (benefits list) |
| `ProgramSection` | Homepage | ❌ Hardcoded (program descriptions) |
| `ExpertMedicineSection` | Homepage | ❌ Hardcoded (text + image section) |
| `Locations` | Homepage, About, Contact, Location Pages | ❌ Hardcoded (location cards) |
| `FAQSection` | Homepage, Location Pages | ❌ Hardcoded (FAQ items) |
| `TestimonialsSection` | Multiple pages | ❌ Hardcoded (testimonial cards) |
| `TeamSection` | About Page | ❌ Uses i18n translations |
| `BeautySection` | Procedure pages via template | ❌ Hardcoded |
| `ExpertiseSection` | Procedure pages via template | ❌ Hardcoded |
| `ProfessionalProductsSection` | Procedure pages via template | ❌ Hardcoded |
| `TreatmentJourney` | Procedure pages via template | ❌ Hardcoded |
| `PromotionsSection` | Procedure pages via template | ❌ Hardcoded |
| `SpaWelcome` | Procedure pages via template | ❌ Hardcoded |

---

## 7. TEMPLATE COMPONENTS

### ProcedurePageTemplate
**Used by:** All 45 individual procedure pages

**Props Accepted:**
```typescript
{
  hero: {
    tagline: string
    title: string
    subtitle: string
    description: string
    backgroundImage?: string
  }
  treatmentInfo?: {
    duration?: string
    results?: string
    price?: string
    benefits?: string[]
  }
  customSections?: React.ReactNode
  showStandardSections?: boolean
}
```

**Standard Sections Shown:**
1. Navigation
2. Hero (with background image, overlay)
3. Treatment Details Grid (Duration, Results, Price)
4. Benefits Section
5. Testimonials
6. Spa Welcome Section
7. Expertise Section
8. Professional Products
9. Treatment Journey
10. Promotions Section
11. FAQ Section
12. Footer

### CategoryPageTemplate
**Used by:** Facial, Injectables, Body, Peels category pages

**Props Accepted:**
```typescript
{
  hero: {
    title: string
    subtitle: string
    description: string
    backgroundImage?: string
  }
  treatments?: Treatment[]
  processSteps?: ProcessStep[]
  customSections?: React.ReactNode
  showTreatmentGrid?: boolean
  showProcess?: boolean
}

interface Treatment {
  name: string
  description: string
  duration?: string
  price: string
  image?: string
  benefits?: string[]
  route?: string
}
```

**Sections Shown:**
1. Navigation
2. Hero
3. Treatments Grid (2 columns, cards)
4. Process Steps (4-step journey)
5. Testimonials
6. Footer

---

## 8. DATA HARDCODING PATTERNS IDENTIFIED

### Pattern 1: Inline Arrays (Most Common)
**Location:** Individual component files
**Example:** FacialPage, InjectablesPage, all location-category pages
```javascript
const treatments = [
  { name: "...", description: "...", route: "..." },
  { name: "...", description: "...", route: "..." }
]
```
**Problem:** Requires code changes to update; no reusability

### Pattern 2: Inline Objects (Treatment Pages)
**Location:** Individual procedure page components
**Example:** AntiWrinklePage, HifuPage, etc.
```javascript
const hero = {
  tagline: "...",
  title: "...",
  subtitle: "...",
  description: "..."
}
const treatmentInfo = {
  duration: "...",
  results: "...",
  price: "...",
  benefits: [...]
}
```
**Problem:** 45 separate files with similar structure; no DRY principle

### Pattern 3: i18n Translations
**Location:** locales/translations.ts
**Example:** Team members, contact info, navigation labels
**Problem:** Text in translation layer but structure still hardcoded in components

### Pattern 4: External Links
**Location:** Throughout
**Problem:** Booking links, social links, policy links are hardcoded strings

---

## 9. CONTENT INVENTORY & MIGRATION PRIORITIES

### High Priority (Direct Revenue Impact)
1. **Individual Procedure Pages (45 pages)** - Doctors want to update treatment descriptions, prices, benefits
   - Current: Hardcoded in component files
   - Benefit: Single source of truth for treatment info
   - Effort: HIGH (multiple components per procedure)

2. **Homepage Sections (8 sections)** - Homepage is client's main marketing tool
   - Current: WhyChooseUs, Services, Programs, ExpertMedicine, Locations, FAQ are hardcoded
   - Benefit: Client can refresh messaging without developer
   - Effort: MEDIUM (8 new CMS collections)

3. **About Page Sections (14 sections)** - Trust & credibility content
   - Current: All hardcoded text, images, differentiators
   - Benefit: Client can update company narrative
   - Effort: MEDIUM-HIGH (multiple different section types)

4. **Navigation & Footer (Shared)** - Affects entire site
   - Current: Menu structure, links, phone numbers hardcoded
   - Benefit: Single place to update contact info, add/remove menu items
   - Effort: MEDIUM (global CMS collection)

### Medium Priority (SEO & Content Management)
5. **Category Pages (12 pages)** - Treatment browsing experience
   - Current: Treatment lists hardcoded as arrays
   - Benefit: Add/remove treatments, reorder, update descriptions
   - Effort: MEDIUM (1-2 CMS collections)

6. **Location Hub Pages (2 pages)** - Location-specific messaging
   - Current: Hardcoded sections
   - Benefit: Update location-specific info independently
   - Effort: LOW-MEDIUM

7. **Contact & Doctors Pages (2 pages)** - Information pages
   - Current: Contact form works, but doctor profiles hardcoded
   - Benefit: Update team info, bios, qualifications
   - Effort: LOW (simple collection)

### Lower Priority (System Pages)
8. **FAQs** - FAQ content reused across pages
   - Current: Hardcoded in FAQSection component
   - Benefit: Update FAQs once, display everywhere
   - Effort: LOW (simple collection)

9. **Testimonials** - Social proof content
   - Current: Likely hardcoded in TestimonialsSection
   - Benefit: Add new testimonials without code changes
   - Effort: LOW

10. **Site Settings** - Global configuration
    - Current: Phone numbers in translations, URLs hardcoded
    - Benefit: Centralized settings (phone, email, hours, social links)
    - Effort: LOW

---

## 10. RECOMMENDED TINACMS IMPLEMENTATION ROADMAP

### Phase 1: Foundation (1-2 weeks)
**Goal:** Set up core CMS infrastructure
- [x] Homepage Hero (already done)
- [ ] Global Site Settings (phone, email, hours, social links)
- [ ] Navigation & Footer Collection
- [ ] Testimonials Collection
- [ ] FAQs Collection

**Output:** 4 new CMS collections, 2 updated collections
**Pages Affected:** All 78 pages

### Phase 2: High-Revenue Content (2-3 weeks)
**Goal:** Enable treatment-level editing (biggest request)
- [ ] Standardize all 45 procedure pages to use TinaCMS
- [ ] Create "Treatment" collection (already partially done)
- [ ] Migrate hardcoded procedure pages → TinaCMS route
- [ ] Create treatment-specific routing in TinaCMS config

**Output:** 45 procedure pages now CMS-managed
**Pages Affected:** /procedures/injectables/*, /procedures/facial/*, etc.

### Phase 3: Main Content Pages (1-2 weeks)
**Goal:** Enable CMS editing of core pages
- [ ] Homepage Sections (Services, Programs, ExpertMedicine, etc.)
- [ ] About Page Collection (differentiators, sections, team link)
- [ ] Contact Page Collection
- [ ] Doctors/Team Members Collection (extend existing)

**Output:** 6-8 new collections
**Pages Affected:** /, /about, /contact, /doctors

### Phase 4: Category & Location Pages (1 week)
**Goal:** Enable browsing experience customization
- [ ] Treatment Category Collection (which treatments show on each category page)
- [ ] Location Hub Collection (per-location messaging)
- [ ] Location-Category Junction Collection (e.g., "London Facial" = specific treatments)

**Output:** 3 new collections
**Pages Affected:** /procedures/*, /london/*, /edinburgh/*

### Phase 5: Advanced Features (ongoing)
**Goal:** Enhanced editorial experience
- [ ] Publish scheduling
- [ ] Content versioning
- [ ] A/B testing support
- [ ] Analytics integration

---

## 11. DETAILED SECTION-BY-SECTION BREAKDOWN FOR CMS

### Global Shared Components

#### Navigation Collection
```
fields:
- logo_image: image
- logo_alt: string
- featured_treatments_london: object[]
  - name: string
  - route: string
  - badge?: string
- featured_treatments_edinburgh: object[]
  - name: string
  - route: string
  - badge?: string
- phone_number: string
- support_email: string
- featured_treatment_categories: object[] (London, Edinburgh, Featured, Other Options)
  - category_title: string
  - items: object[]
    - name: string
    - route: string
    - is_see_all: boolean
```

#### Footer Collection
```
fields:
- brand_description: rich-text
- social_links: object[]
  - platform: select (instagram, facebook, youtube)
  - url: string
- services_links: object[] (Injectables, Facial, Body, Peels, Team)
- contact_phone: string
- contact_email: string
- policy_links: object[]
  - label: string
  - url: string
- copy_year: number
```

#### Site Settings Collection
```
fields:
- london_phone: string
- edinburgh_phone: string
- london_email: string
- edinburgh_email: string
- london_address: string
- edinburgh_address: string
- london_hours_weekday: string
- london_hours_weekend: string
- edinburgh_hours_weekday: string
- edinburgh_hours_weekend: string
- booking_url: string
- social_instagram: string
- social_facebook: string
- social_youtube: string
```

---

### Homepage Sections

#### Homepage Collection (EXTENDED)
```
Current: hero field only
Add:
- why_choose_us: object[]
  - icon: select (Award, Heart, Users, Shield, etc.)
  - title: string
  - description: string
  
- services: object[]
  - title: string
  - description: string
  - icon: select
  
- programs: object[]
  - title: string
  - description: string
  - duration: string
  - image: image
  
- expert_medicine_section:
  - title: string
  - subtitle: string
  - description: rich-text
  - image: image
  
- featured_locations: boolean (show locations section)

- faqs: object[]
  - question: string
  - answer: string
```

---

### Procedure Pages

#### Treatment Collection (EXTENDED for ALL 45 treatments)
```
Current fields:
- title
- category
- location
- hero
- treatmentInfo
- translations

Add:
- content: object[] (flexible content blocks for additional info)
  - type: select (textSection, imageSection, benefitsGrid, etc.)
  - fields vary by type
  
- featured_on_homepage: boolean
- display_order: number (for category pages)
- cta_button_text: string
- cta_button_url: string
```

**Routes to Update in TinaCMS Config:**
```javascript
facial: [
  'hydrafacial-edinburgh', 'hydrafacial-london', 'microneedling-edinburgh',
  'microneedling-london', 'dermaplaning', 'exosome', 'hydratite',
  'keravive', 'led-facial', 'oxygen-facial', 'skin-scanner'
]
injectables: [
  'anti-wrinkle', 'dermal-filler', 'profhilo', 'polynucleotides',
  'biofiller-edinburgh', 'biofiller-london', 'prp', 'carboxy',
  'sclerotherapy', 'mole-removal', 'neofound', 'iv-drip',
  'vitamin-d', 'b12', 'biotin', 'glutathione', 'magnesium', 'allergy'
]
body: [
  'laser-hair-removal', 'coolsculpting', 'exilis', 'hifu', 'cool-laser',
  'electrolysis'
]
peels: [
  'medik8-edinburgh', 'medik8-london', 'zo-edinburgh', 'zo-london', 'obagi'
]
```

---

### Category Pages

#### Treatment Category Collection
```
fields:
- category: select (facial, injectables, body, peels)
- location: select (london, edinburgh, both)
- hero:
  - title: string
  - subtitle: string
  - description: rich-text
  - background_image?: image
  
- featured_treatments: object[] (links to Treatment collection)
  - treatment_id: reference
  - order: number
  
- process_steps: object[] (customizable journey)
  - step_number: number
  - title: string
  - description: string
  
- show_testimonials: boolean
```

---

### Main Content Pages

#### About Page Collection
```
fields:
- hero:
  - title: string
  - subtitle_highlight: string
  - description: rich-text
  
- mission:
  - title: string
  - subtitle_highlight: string
  - image: image
  - description: rich-text
  
- differentiators: object[]
  - icon: select
  - title: string
  - description: string
  
- team_section:
  - title: string
  - subtitle: string
  - description: string
  
- sections: object[] (flexible content blocks)
  - type: select (textSection, imageLeft, imageRight, etc.)
  - fields vary by type
  
- featured_team_members: object[] (IDs of team members to show)
```

#### Contact Page Collection
```
fields:
- hero:
  - title: string
  - subtitle_highlight: string
  - description: rich-text
  
- contact_methods: object[]
  - icon: select (Phone, Email, Location, Hours)
  - title: string
  - details: string[]
  - description: string
  
- form_title: string
- form_description: string

- locations_section:
  - title: string
  - show_locations: boolean
```

#### Doctors Page Collection
```
fields:
- hero:
  - title: string
  - subtitle: string
  - description: rich-text
  
- filter_options: string[] (specialties to filter by)

- featured_doctors: object[] (IDs of doctors to feature)

- highlight_section:
  - title: string
  - description: rich-text
  - image: image
```

---

### Team Members Collection (EXTENDED)
```
Current fields (in config.ts):
- name
- title
- image
- specialty (list)
- qualifications (list)
- bio
- yearsExperience
- languages
- location

Already set up! Extend to:
- social_links: object[]
  - platform: string
  - url: string
- featured: boolean
- display_order: number
```

---

## 12. IMPLEMENTATION CHECKLIST

### Architecture Changes
- [ ] Create new TinaCMS collections as per Phase roadmap
- [ ] Extend existing Collections (Homepage, Treatment)
- [ ] Update TinaCMS routing config for all procedure pages
- [ ] Create content JSON files for all collections

### Component Updates
- [ ] Create/update wrapper components to consume TinaCMS data
- [ ] Update Navigation.tsx to consume Navigation CMS collection
- [ ] Update Footer.tsx to consume Footer CMS collection
- [ ] Create HomepageContent sections (WhyChooseUs, Services, Programs, etc.) to consume CMS
- [ ] Refactor AboutPage.tsx to use CMS data instead of hardcoded content
- [ ] Refactor ContactPage.tsx to use CMS data
- [ ] Create DoctorsPage.tsx wrapper for Team Members collection
- [ ] Migrate all 45 procedure pages to use ProcedurePageTemplate with CMS data
- [ ] Update CategoryPageTemplate pages to dynamically pull treatments from CMS
- [ ] Update Location hub pages (London, Edinburgh) to consume CMS

### Testing
- [ ] Verify all routes still work
- [ ] Test CMS editing for each collection
- [ ] Test live editing (visual editing in TinaCMS)
- [ ] Test language/translation support
- [ ] Mobile responsive testing
- [ ] SEO validation (meta tags still work)

### Deployment
- [ ] Backup existing content
- [ ] Deploy TinaCMS schema updates
- [ ] Create initial CMS content files
- [ ] Update build configuration
- [ ] Deploy updated components
- [ ] Smoke test all routes
- [ ] Client user training

---

## 13. ESTIMATED EFFORT BY SECTION

| Section | Routes Affected | Complexity | Est. Hours | Priority |
|---------|-----------------|-----------|------------|----------|
| Global Site Settings | All 78 | Low | 4 | High |
| Navigation & Footer | All 78 | Medium | 8 | High |
| Homepage Sections | 1 | Medium | 12 | High |
| Procedure Pages (45) | 45 | High | 30 | High |
| Category Pages (12) | 12 | Medium | 16 | Medium |
| About Page | 1 | High | 12 | Medium |
| Contact Page | 1 | Low-Medium | 6 | Medium |
| Doctors Page | 1 | Low | 4 | Low-Medium |
| Location Hub Pages | 2 | Medium | 8 | Low-Medium |
| Team Members | 1 (DoctorsPage) | Low | 2 | Low |
| Testimonials | Multiple | Low | 4 | Low |
| FAQs | Multiple | Low | 4 | Low |
| Testing & Deployment | - | - | 20 | - |
| **TOTAL** | - | - | **130 hours** | - |

**Optimized timeline (if phased):**
- Phase 1 (Foundation): 16 hours = 2 days
- Phase 2 (Procedures): 36 hours = 4-5 days
- Phase 3 (Main Pages): 34 hours = 4-5 days
- Phase 4 (Categories): 24 hours = 3 days
- Phase 5 (Polish): 20 hours = 2-3 days

**Total: 3-4 weeks** for complete implementation

---

## 14. CRITICAL SUCCESS FACTORS

1. **Preserve Routing:** All 78 routes must continue to work (can't change URLs)
2. **SEO Integrity:** Meta tags, structured data must still function
3. **Performance:** CMS queries must be optimized (cache, pre-render)
4. **Fallbacks:** Content must have defaults if CMS data missing
5. **Backup:** Keep hardcoded data as fallback
6. **User Training:** Client team needs to understand CMS structure
7. **Version Control:** Keep track of content changes in git

---

## 15. FILES TO MODIFY/CREATE

### New Files to Create (TinaCMS Collections)
```
frontend/content/
├── site-settings/
│   └── settings.json (new)
├── navigation/
│   └── main.json (new)
├── footer/
│   └── main.json (new)
├── pages/
│   ├── about.json (new)
│   ├── contact.json (new)
│   └── doctors.json (new)
├── categories/
│   ├── facial.json (new)
│   ├── injectables.json (new)
│   ├── body.json (new)
│   └── peels.json (new)
├── locations/
│   ├── london.json (new)
│   └── edinburgh.json (new)
├── treatments/ (EXTEND EXISTING)
│   └── [45 new treatment JSON files]
└── testimonials/
    └── [multiple testimonial JSON files]
```

### Component Files to Create/Modify
```
frontend/components/
├── Navigation.tsx (MODIFY - consume CMS)
├── Footer.tsx (MODIFY - consume CMS)
├── HomepageContent.tsx (MODIFY - add CMS sections)
│   ├── WhyChooseUsSectionTina (NEW)
│   ├── ServicesOverviewTina (NEW)
│   ├── GetMoreSectionTina (NEW)
│   ├── ProgramSectionTina (NEW)
│   ├── ExpertMedicineSectionTina (NEW)
│   └── FAQSectionTina (NEW)
├── pages/
│   ├── AboutPage.tsx (MODIFY - use CMS)
│   ├── ContactPage.tsx (MODIFY - use CMS)
│   ├── DoctorsPage.tsx (MODIFY - use Team Members collection)
│   ├── LondonPage.tsx (MODIFY - use CMS)
│   ├── EdinburghPage.tsx (MODIFY - use CMS)
│   └── procedures/
│       ├── FacialPage.tsx (MODIFY - fetch category from CMS)
│       ├── InjectablesPage.tsx (MODIFY - fetch category from CMS)
│       ├── BodyPage.tsx (MODIFY - fetch category from CMS)
│       ├── PeelsPage.tsx (MODIFY - fetch category from CMS)
│       ├── injectables/
│       │   ├── AntiWrinklePage.tsx → AntiWrinkleTinaPage (DONE)
│       │   ├── [44 other pages] (MODIFY - create Tina versions)
│       │   └── [44 other Content components] (NEW)
│       └── [facial, body, peels pages - similar pattern]
└── templates/ (MODIFY existing)
    ├── ProcedurePageTemplate.tsx (add dynamic content)
    └── CategoryPageTemplate.tsx (add dynamic treatment fetching)
```

### Config Files to Modify
```
frontend/tina/config.ts (EXTEND)
- Add all new collections
- Add routing for 45 procedures
- Add field definitions
```

---

## 16. NEXT STEPS

1. **Immediate (This Week):**
   - Decide on phased approach vs. all-at-once
   - Get client approval on CMS structure
   - Review TinaCMS pricing for content scale

2. **Short Term (Next 2 Weeks):**
   - Create Phase 1 collections (Site Settings, Navigation, Footer)
   - Create content JSON files for Phase 1
   - Update Navigation & Footer components
   - Deploy Phase 1

3. **Medium Term (Weeks 3-4):**
   - Implement Phase 2 (45 procedure pages)
   - Create Treatment JSON files
   - Update all procedure page components
   - Deploy Phase 2

4. **Long Term (Weeks 5+):**
   - Phases 3-5
   - Client training
   - Content migration/updates

---

## 17. KEY INSIGHTS

1. **Biggest Win:** Making 45 procedure pages CMS-editable - this is where doctors will want to update most frequently (prices, descriptions, benefits)

2. **Hardest Migration:** Procedure pages have 45 similar-but-different implementations - standardization will help

3. **Foundation Impact:** Navigation & Footer changes affect entire site - good to do early

4. **Data Reuse:** Some content (treatments, team members, testimonials) appears on multiple pages - CMS will provide single source of truth

5. **Location Complexity:** Some content is location-specific (London vs Edinburgh) - need clear structure in CMS to handle this

6. **No Major Refactoring Needed:** Existing component structure (templates, shared components) is good - can gradually migrate to CMS without full rewrite

---

## Appendix A: Current TinaCMS Config Status

✅ **Configured:**
- Homepage collection (hero only)
- Treatment collection (core fields)
- Team Member collection
- Routing for anti-wrinkle treatment

❌ **Not Configured:**
- Site Settings
- Navigation
- Footer
- Category pages
- Individual pages (About, Contact, Doctors, etc.)
- 44 additional treatments (routing only)

---

## Appendix B: Route Quick Reference

**Total Routes: 78**

- Main Pages: 6
- Category Pages: 4 (procedures) + 8 (location-category) = 12
- Individual Procedures: 46
- Location Hubs: 2
- Maintenance: 1 (hidden)
- Admin: 1 (TinaCMS)

---

