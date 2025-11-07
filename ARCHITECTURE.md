# Beyond MediSpa - Architecture Documentation

## Table of Contents
1. [Application Overview](#application-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [State Management Architecture](#state-management-architecture)
5. [Translation System](#translation-system)
6. [Routing Architecture](#routing-architecture)
7. [Component Patterns](#component-patterns)
8. [Build Process](#build-process)
9. [Deployment Pipeline](#deployment-pipeline)
10. [Security & Performance](#security--performance)

---

## Application Overview

Beyond MediSpa is a **Single Page Application (SPA)** built with React 19, providing a multi-language aesthetic medicine clinic website with locations in London (Knightsbridge) and Edinburgh (St Andrew Square).

### Key Features
- **Multi-language Support**: English, Simplified Chinese, Traditional Chinese, Arabic (with RTL support)
- **QA Authentication Gate**: Password-protected access during development/testing phase
- **49 Routes**: Comprehensive treatment pages, location pages, and information pages
- **Automatic Deployment**: GitHub push triggers automatic Vercel deployment
- **Mobile-First Design**: Responsive TailwindCSS implementation
- **Accessibility**: Radix UI components for WCAG compliance

---

## Technology Stack

### Core Framework
- **React**: 19.0.0 (latest with concurrent features)
- **TypeScript**: 5.8.3
- **React Router DOM**: 7.5.0 (client-side routing)

### Build Tools
- **Vite**: 6.2.5 (fast build tool with HMR)
- **LightningCSS**: 1.29.2 (CSS optimization)
- **TailwindCSS**: 4.1.3 with Vite plugin and Oxide engine

### UI Components
- **Radix UI**: Accessible component primitives
  - `@radix-ui/react-accordion`: ^1.2.2
  - `@radix-ui/react-dialog`: ^1.1.4
  - `@radix-ui/react-slot`: ^1.1.1
- **Lucide React**: ^0.469.0 (icon system)
- **class-variance-authority**: ^0.7.1 (component variants)
- **tailwind-merge**: ^2.7.0 (className merging)
- **clsx**: ^2.1.1 (conditional classes)

### Deployment
- **Vercel**: Production hosting with automatic Git-based deployment
- **GitHub**: Version control and CI/CD trigger

---

## Project Structure

```
Beyond MediSpa New Site/
├── frontend/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   ├── LondonPage.tsx
│   │   │   ├── EdinburghPage.tsx
│   │   │   ├── MaintenancePage.tsx
│   │   │   ├── procedures/
│   │   │   │   ├── facial/ (13 treatment pages)
│   │   │   │   ├── injectables/ (17 treatment pages)
│   │   │   │   ├── body/ (9 treatment pages)
│   │   │   │   └── peels/ (5 treatment pages)
│   │   │   └── locations/ (8 location-specific pages)
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Homepage.tsx
│   │   └── [other shared components]
│   ├── contexts/
│   │   ├── AuthContext.tsx (QA authentication)
│   │   └── LanguageContext.tsx (multi-language state)
│   ├── locales/
│   │   └── translations.ts (4,638 lines - all content)
│   ├── ui/
│   │   └── button.tsx (Radix-based components)
│   ├── App.tsx (application entry point)
│   ├── vite.config.ts (build configuration)
│   ├── package.json (dependencies)
│   ├── vercel.json (deployment config)
│   └── tsconfig.json (TypeScript config)
└── [other directories]
```

### Path Aliases (from vite.config.ts)
- `@` → `frontend/` (root directory)
- `~backend/client` → `frontend/client/`
- `~backend` → `backend/`

---

## State Management Architecture

### Context Provider Hierarchy

```typescript
<AuthProvider>              // Outermost - Authentication state
  <LanguageProvider>        // Language/translation state
    <BrowserRouter>         // React Router routing
      <ScrollToTop />       // Utility component
      <AppRoutes />         // Conditional routing
    </BrowserRouter>
  </LanguageProvider>
</AuthProvider>
```

### AuthContext (`frontend/contexts/AuthContext.tsx`)

**Purpose**: QA authentication gate that controls site access during development/testing.

**Key Implementation**:
```typescript
const QA_PASSWORD = 'BeyondMediSpa2025!';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Restore auth state from localStorage on mount
    const authStatus = localStorage.getItem('qa_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (password: string): boolean => {
    if (password === QA_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('qa_authenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('qa_authenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

**Usage Pattern**:
```typescript
function AppRoutes() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <MaintenancePage />;  // Show password gate
  }

  return <Routes>{/* 49 routes */}</Routes>;  // Show actual site
}
```

**localStorage Key**: `'qa_authenticated'` (value: `'true'` or absent)

### LanguageContext (`frontend/contexts/LanguageContext.tsx`)

**Purpose**: Global language state management for multi-language support.

**Supported Languages**:
```typescript
export type Language = 'en' | 'zh-CN' | 'zh-TW' | 'ar';
```

**Key Implementation**:
```typescript
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Restore language preference from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;

      // Set text direction for Arabic (RTL support)
      if (savedLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    // Update text direction
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

**Features**:
- Default language: `'en'`
- localStorage persistence with key `'language'`
- Automatic document attribute management (`lang` and `dir`)
- RTL support for Arabic
- Custom hook with error handling: `useLanguage()`

**Usage Pattern**:
```typescript
function MyComponent() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return <h1>{t.pageTitle}</h1>;
}
```

---

## Translation System

### Architecture Overview

All user-facing content is centralized in `frontend/locales/translations.ts` (4,638 lines).

**Structure**:
```typescript
// Language objects
const en = { /* English content */ };
const zhCN = { /* Simplified Chinese */ };
const zhTW = { /* Traditional Chinese */ };
const ar = { /* Arabic */ };

// Export translations object
export const translations = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ar,
};

// Custom hook for retrieving translations
export function useTranslations(language: string): Translations {
  return translations[language as keyof typeof translations] || translations.en;
}

export type Language = keyof typeof translations;
```

### Content Coverage

The translation system includes:

1. **Navigation** (49 routes)
   - Main navigation menu items
   - Dropdown menus for procedures
   - Location-specific navigation

2. **Treatment Content**
   - Facial treatments (13 pages)
   - Injectable treatments (17 pages)
   - Body treatments (9 pages)
   - Chemical peels (5 pages)

3. **Team Profiles**
   - 12+ practitioner profiles
   - Role translations
   - Professional descriptions

4. **Location Information**
   - London Knightsbridge details
   - Edinburgh St Andrew Square details
   - Contact information
   - Opening hours

5. **UI Elements**
   - Button labels
   - Form placeholders
   - Error messages
   - Loading states

6. **Legal/Medical**
   - Disclaimers
   - Terms and conditions
   - Privacy information

### Translation Pattern

**Component Implementation**:
```typescript
export default function AboutPage() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <div>
      <h1>{t.about.pageTitle}</h1>
      <p>{t.about.pageDescription}</p>

      {t.teamMembers.map((member) => (
        <div key={member.name}>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <p>{member.description}</p>
        </div>
      ))}
    </div>
  );
}
```

**Fallback Strategy**: If translation key doesn't exist for selected language, falls back to English (`translations.en`).

---

## Routing Architecture

### Route Structure (49 Total Routes)

**Application Entry** (`frontend/App.tsx`):
```typescript
function AppRoutes() {
  const { isAuthenticated } = useAuth();

  // Authentication gate
  if (!isAuthenticated) {
    return <MaintenancePage />;
  }

  // All routes available when authenticated
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/book-treatment" element={<BookTreatmentPage />} />

      {/* Location Pages */}
      <Route path="/london" element={<LondonPage />} />
      <Route path="/edinburgh" element={<EdinburghPage />} />
      <Route path="/bridgeen-king" element={<BridgeenKingPage />} />

      {/* Treatment Category Pages */}
      <Route path="/procedures/facial" element={<FacialPage />} />
      <Route path="/procedures/injectables" element={<InjectablesPage />} />
      <Route path="/procedures/body" element={<BodyPage />} />
      <Route path="/procedures/peels" element={<PeelsPage />} />

      {/* Facial Treatment Pages (13 routes) */}
      <Route path="/procedures/facial/hydrafacial-edinburgh" element={<HydrafacialEdinburghPage />} />
      <Route path="/procedures/facial/hydrafacial-london" element={<HydrafacialLondonPage />} />
      {/* ... 11 more facial routes ... */}

      {/* Injectable Treatment Pages (17 routes) */}
      <Route path="/procedures/injectables/anti-wrinkle" element={<AntiWrinklePage />} />
      <Route path="/procedures/injectables/dermal-filler" element={<DermalFillerPage />} />
      {/* ... 15 more injectable routes ... */}

      {/* Body Treatment Pages (9 routes) */}
      <Route path="/procedures/body/laser-hair-removal" element={<LaserHairRemovalPage />} />
      <Route path="/procedures/body/coolsculpting" element={<CoolSculptingPage />} />
      {/* ... 7 more body routes ... */}

      {/* Chemical Peel Pages (5 routes) */}
      <Route path="/procedures/peels/medik8-edinburgh" element={<Medik8EdinburghPage />} />
      <Route path="/procedures/peels/zo-london" element={<ZOLondonPage />} />
      {/* ... 3 more peel routes ... */}

      {/* Location-Specific Pages (8 routes) */}
      <Route path="/london/body" element={<LondonBodyPage />} />
      <Route path="/london/injectables" element={<LondonInjectablesPage />} />
      <Route path="/london/fillers" element={<FillersLondonPage />} />
      <Route path="/edinburgh/body" element={<EdinburghBodyPage />} />
      {/* ... 4 more location routes ... */}
    </Routes>
  );
}
```

### SPA Routing Configuration

**Vercel Rewrite Rule** (from `vercel.json`):
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**What This Does**:
- All HTTP requests (regardless of path) return `index.html`
- React Router handles navigation client-side
- Enables bookmarkable URLs and browser back/forward buttons
- No server-side routing required

---

## Component Patterns

### Page Component Structure

**Standard Pattern**:
```typescript
import Navigation from '../Navigation'
import Footer from '../Footer'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../locales/translations'

export default function PageComponent() {
  // State management hooks
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20">
        {/* Page content with translated strings */}
        <h1>{t.section.title}</h1>
        <p>{t.section.description}</p>
      </div>

      <Footer />
    </div>
  )
}
```

### Homepage Component Structure

```typescript
export default function Homepage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesOverview />
      <GetMoreSection />
      <ProgramSection />
      <ExpertMedicineSection />
      <Locations />
      <FAQSection />
      <Footer />
    </div>
  )
}
```

### Shared Components

- **Navigation**: Site-wide navigation with language selector and authentication awareness
- **Footer**: Contact information, social links, copyright
- **Locations**: Reusable component showing both clinic locations
- **ProgramSection**: Gallery showcase of clinic interiors

---

## Build Process

### Vite Configuration (`frontend/vite.config.ts`)

```typescript
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Configurable base path for different deployment targets
  base: process.env.VITE_BASE_PATH || '/',

  // Path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '~backend/client': path.resolve(__dirname, './client'),
      '~backend': path.resolve(__dirname, '../backend'),
    },
  },

  // Plugins
  plugins: [tailwindcss(), react()],

  // Build output configuration
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
```

### Build Scripts (`frontend/package.json`)

```json
{
  "scripts": {
    "dev": "vite",              // Development server with HMR
    "build": "vite build",      // Production build
    "preview": "vite preview"   // Preview production build locally
  }
}
```

### Build Process Steps

1. **TypeScript Compilation**: `.tsx` files → JavaScript
2. **React JSX Transformation**: JSX → createElement calls
3. **TailwindCSS Processing**:
   - Vite plugin with Oxide engine
   - LightningCSS for optimization
   - Utility class purging
4. **Asset Bundling**: Images, fonts, other static files
5. **Code Splitting**: Automatic vendor and route-based splitting
6. **Minification**: JavaScript and CSS compression
7. **Tree Shaking**: Remove unused code
8. **Source Maps**: Generated for debugging (production)

### Build Output

**Directory Structure** (`dist/`):
```
dist/
├── index.html (entry point)
├── assets/
│   ├── index-[hash].js (main bundle, ~659 KB → 173 KB gzipped)
│   ├── index-[hash].css (styles, ~59 KB)
│   └── [other chunks and assets]
└── [static assets from public/]
```

**Build Performance**:
- Build time: ~2.3 seconds
- Main JS bundle: 659 KB (173 KB gzipped)
- CSS bundle: 59 KB
- Total initial load: ~232 KB (gzipped)

---

## Deployment Pipeline

### Complete GitHub to Vercel Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT PIPELINE                       │
└─────────────────────────────────────────────────────────────┘

1. Developer pushes code to GitHub
   ↓
2. GitHub webhook notifies Vercel
   ↓
3. Vercel clones repository
   ↓
4. Vercel reads vercel.json configuration
   ↓
5. Vercel runs: npm install
   - Installs all dependencies from package.json
   - Downloads React, Vite, TailwindCSS, etc.
   ↓
6. Vercel runs: npm run build
   - Executes: vite build
   - TypeScript compilation
   - React component bundling
   - TailwindCSS processing with LightningCSS
   - Asset optimization
   ↓
7. Vite outputs to dist/ directory
   - index.html (SPA entry point)
   - assets/*.js (bundled JavaScript, ~659 KB → 173 KB gzipped)
   - assets/*.css (compiled CSS, ~59 KB)
   - Static assets (images, fonts, etc.)
   ↓
8. Vercel deploys dist/ directory contents
   ↓
9. Vercel applies rewrite rules
   - All routes → /index.html (enables SPA routing)
   ↓
10. Vercel applies security headers
    - X-Frame-Options: DENY
    - X-Content-Type-Options: nosniff
    - X-XSS-Protection: 1; mode=block
    - Referrer-Policy: strict-origin-when-cross-origin
    ↓
11. Vercel applies caching headers
    - Assets: public, max-age=31536000, immutable
    - HTML: no-cache, no-store, must-revalidate
    ↓
12. Site goes live at production URL
    ↓
13. Automatic rebuild on every push to main branch
```

### Vercel Configuration (`frontend/vercel.json`)

**Key Settings**:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": null,

  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deployment Triggers

- **Automatic**: Every push to `main` branch
- **Manual**: Can be triggered via Vercel dashboard
- **Preview**: Pull requests get preview deployments

### Environment Variables

Configurable via Vercel dashboard:
- `VITE_BASE_PATH`: Base path for deployment (defaults to `/`)
- Other environment variables as needed

---

## Security & Performance

### Security Headers

Applied to all routes via `vercel.json`:

```json
{
  "source": "/(.*)",
  "headers": [
    {
      "key": "X-Frame-Options",
      "value": "DENY"
    },
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    },
    {
      "key": "X-XSS-Protection",
      "value": "1; mode=block"
    },
    {
      "key": "Referrer-Policy",
      "value": "strict-origin-when-cross-origin"
    }
  ]
}
```

**Protection Against**:
- Clickjacking (X-Frame-Options)
- MIME type sniffing (X-Content-Type-Options)
- XSS attacks (X-XSS-Protection)
- Information leakage (Referrer-Policy)

### Caching Strategy

**Asset Caching** (1-year immutable):
```json
{
  "source": "/assets/(.*)",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
}
```

**Media File Caching** (1-year immutable):
```json
{
  "source": "/:path*\\.(jpg|jpeg|png|webp|svg|mp4)",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
}
```

**HTML Caching** (no cache):
```json
{
  "source": "/:path*\\.html",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "no-cache, no-store, must-revalidate"
    }
  ]
}
```

**Why This Strategy**:
- Assets have content-based hashes in filenames → safe to cache forever
- HTML must not be cached → ensures users get latest version
- Results in fast page loads for returning visitors

### Performance Optimizations

1. **Code Splitting**: Automatic route-based splitting by Vite
2. **Tree Shaking**: Removes unused code from bundles
3. **Lazy Loading**: Images use `loading="lazy"` attribute
4. **Gzip Compression**: 659 KB JS → 173 KB (73.7% reduction)
5. **CSS Optimization**: LightningCSS for fast, optimized styles
6. **Asset Hashing**: Cache-busting via content hashes
7. **CDN Delivery**: Vercel's global edge network

### Authentication Security

**QA Password Protection**:
- Password: `'BeyondMediSpa2025!'`
- Stored in client-side code (for development/QA purposes)
- localStorage persistence for convenience
- **Note**: This is NOT production security - remove before public launch

**Recommended for Production**:
- Remove AuthContext entirely OR
- Implement server-side authentication with JWT/session tokens
- Use environment variables for sensitive data
- Implement proper user management system

---

## Key Takeaways

1. **SPA Architecture**: Client-side routing with React Router, all routes served via index.html
2. **Context-Based State**: Global state managed via React Context API (Auth + Language)
3. **Centralized Translations**: Single 4,638-line file containing all content in 4 languages
4. **Automatic Deployment**: GitHub push → Vercel webhook → automatic build and deploy
5. **Performance**: Aggressive asset caching (1-year) with content hashing for cache-busting
6. **Security**: Defense-in-depth headers, but QA auth needs replacement for production
7. **Build Speed**: ~2.3 second builds with Vite's fast bundler
8. **Developer Experience**: TypeScript, path aliases, HMR for rapid development

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development

```bash
# Clone repository
git clone [repository-url]
cd "Beyond MediSpa New Site/frontend"

# Install dependencies
npm install

# Start development server
npm run dev
# Server runs at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

**Automatic (Recommended)**:
1. Push code to GitHub main branch
2. Vercel automatically builds and deploys
3. Check Vercel dashboard for deployment status

**Manual**:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` (first time) or `vercel --prod`

---

## Additional Resources

- **Vite Documentation**: https://vite.dev
- **React Documentation**: https://react.dev
- **React Router Documentation**: https://reactrouter.com
- **TailwindCSS Documentation**: https://tailwindcss.com
- **Vercel Documentation**: https://vercel.com/docs
- **Radix UI Documentation**: https://www.radix-ui.com

---

*Last Updated: Based on codebase analysis completed January 2025*
