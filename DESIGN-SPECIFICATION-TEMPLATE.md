# 📐 Complete Design Specification Template
*Fill out all applicable sections for precise implementation*

---

## 🎯 PROJECT OVERVIEW

### Basic Information
```yaml
Project Name: 
Client/Brand: 
Project Type: [ ] New Build [ ] Redesign [ ] Migration [ ] Enhancement
Target Launch Date: 
Current Site URL (if exists): 
```

### Project Goals
```yaml
Primary Goal: 
Secondary Goals:
  - 
  - 
Success Metrics:
  - 
  - 
```

---

## 🎨 DESIGN REFERENCES

### Primary References
```yaml
Reference Site 1:
  URL: 
  What to Match: [ ] Structure [ ] Colors [ ] Animations [ ] Layout [ ] Everything
  Specific Elements: 
  What NOT to Copy: 

Reference Site 2:
  URL: 
  What to Match: 
  Specific Elements: 

Design Files:
  Figma URL: 
  Adobe XD URL: 
  Sketch File: 
  Other: 
```

### Screenshots/Mockups
```yaml
Desktop Design:
  File Path/URL: 
  Width: [e.g., 1440px]
  
Mobile Design:
  File Path/URL: 
  Width: [e.g., 375px]
  
Tablet Design:
  File Path/URL: 
  Width: [e.g., 768px]
```

---

## 🎨 DESIGN SYSTEM

### Color Palette
```yaml
Primary Colors:
  Primary: #_______ | Usage: 
  Primary Dark: #_______ | Usage: 
  Primary Light: #_______ | Usage: 

Secondary Colors:
  Secondary: #_______ | Usage: 
  Secondary Dark: #_______ | Usage: 
  Secondary Light: #_______ | Usage: 

Neutral Colors:
  Black: #_______ | Usage: 
  Dark Gray: #_______ | Usage: 
  Medium Gray: #_______ | Usage: 
  Light Gray: #_______ | Usage: 
  White: #_______ | Usage: 

Semantic Colors:
  Success: #_______ 
  Warning: #_______ 
  Error: #_______ 
  Info: #_______ 

Background Colors:
  Primary Background: #_______ 
  Secondary Background: #_______ 
  Card Background: #_______ 
  Modal Background: #_______ 

Text Colors:
  Heading Color: #_______ 
  Body Text: #_______ 
  Muted Text: #_______ 
  Link Color: #_______ 
  Link Hover: #_______ 
```

### Typography
```yaml
Font Families:
  Heading Font: 
    Name: 
    Fallback: 
    Weight(s): 
    Source: [ ] Google Fonts [ ] Adobe Fonts [ ] Custom
    
  Body Font:
    Name: 
    Fallback: 
    Weight(s): 
    Source: [ ] Google Fonts [ ] Adobe Fonts [ ] Custom
    
  Accent Font (if any):
    Name: 
    Usage: 

Font Sizes:
  H1: 
    Desktop: ___px / ___rem | Line Height: ___ | Weight: ___
    Mobile: ___px / ___rem | Line Height: ___ | Weight: ___
    
  H2:
    Desktop: ___px / ___rem | Line Height: ___ | Weight: ___
    Mobile: ___px / ___rem | Line Height: ___ | Weight: ___
    
  H3:
    Desktop: ___px / ___rem | Line Height: ___ | Weight: ___
    Mobile: ___px / ___rem | Line Height: ___ | Weight: ___
    
  H4:
    Desktop: ___px / ___rem | Line Height: ___ | Weight: ___
    Mobile: ___px / ___rem | Line Height: ___ | Weight: ___
    
  H5:
    Desktop: ___px / ___rem | Line Height: ___ | Weight: ___
    Mobile: ___px / ___rem | Line Height: ___ | Weight: ___
    
  H6:
    Desktop: ___px / ___rem | Line Height: ___ | Weight: ___
    Mobile: ___px / ___rem | Line Height: ___ | Weight: ___
    
  Body:
    Large: ___px / ___rem | Line Height: ___ | Weight: ___
    Regular: ___px / ___rem | Line Height: ___ | Weight: ___
    Small: ___px / ___rem | Line Height: ___ | Weight: ___
    
  Other:
    Button Text: ___px / ___rem | Weight: ___ | Transform: [ ] Uppercase [ ] None
    Caption: ___px / ___rem | Weight: ___
    Label: ___px / ___rem | Weight: ___
```

### Spacing System
```yaml
Base Unit: ___px (e.g., 4px, 8px)

Spacing Scale:
  xs: ___px
  sm: ___px
  md: ___px
  lg: ___px
  xl: ___px
  2xl: ___px
  3xl: ___px

Component Spacing:
  Card Padding: ___px
  Section Padding Desktop: ___px
  Section Padding Mobile: ___px
  Container Max Width: ___px
  Container Padding: ___px
  Grid Gap: ___px
  Form Field Spacing: ___px
```

### Layout & Grid
```yaml
Grid System:
  Type: [ ] 12-column [ ] 16-column [ ] CSS Grid [ ] Flexbox [ ] Custom
  Gutter Width: ___px
  Column Width: ___px
  
Container Widths:
  Max Width: ___px
  Large: ___px
  Medium: ___px
  Small: ___px
  
Breakpoints:
  xs: ___px (Mobile)
  sm: ___px (Large Mobile)
  md: ___px (Tablet)
  lg: ___px (Desktop)
  xl: ___px (Large Desktop)
  2xl: ___px (Extra Large)
```

### Visual Properties
```yaml
Border Radius:
  None: ___px
  Small: ___px
  Medium: ___px
  Large: ___px
  Full: ___px
  
  Component Specific:
    Buttons: ___px
    Cards: ___px
    Inputs: ___px
    Images: ___px
    Modals: ___px

Shadows:
  None: 
  Small: 
  Medium: 
  Large: 
  
  Component Specific:
    Card Shadow: 
    Card Hover Shadow: 
    Button Shadow: 
    Modal Shadow: 
    Dropdown Shadow: 

Borders:
  Default Width: ___px
  Default Style: [ ] Solid [ ] Dashed [ ] Dotted
  Default Color: #_______
  
Transitions:
  Fast: ___ms (e.g., 150ms)
  Normal: ___ms (e.g., 300ms)
  Slow: ___ms (e.g., 500ms)
  Easing Function: (e.g., cubic-bezier(0.4, 0, 0.2, 1))
```

---

## 🧩 COMPONENTS SPECIFICATION

### Navigation/Header
```yaml
Type: [ ] Simple [ ] Mega Menu [ ] Sidebar [ ] Sticky [ ] Transparent to Solid

Structure:
  Logo Position: [ ] Left [ ] Center [ ] Right
  Logo Size: ___px height
  
  Menu Items:
    - Home | Link: / | Submenu: [ ] Yes [ ] No
    - About | Link: /about | Submenu: [ ] Yes [ ] No
    - Services | Link: /services | Submenu: [ ] Yes [ ] No
    - [Add more as needed]
  
  Sticky Behavior:
    Becomes Sticky: [ ] Immediately [ ] After ___px scroll
    Background Change: From _______ to _______
    Height Change: From ___px to ___px
    Shadow on Sticky: [ ] Yes [ ] No
    
  Mobile Menu:
    Type: [ ] Hamburger [ ] Bottom Nav [ ] Slide Out
    Trigger Icon: [ ] Hamburger [ ] Custom
    Animation: [ ] Slide [ ] Fade [ ] Push
    
  CTA Button:
    Text: 
    Style: [ ] Filled [ ] Outline [ ] Text Only
    Always Visible: [ ] Yes [ ] No
```

### Hero Section
```yaml
Layout Type: [ ] Full Width [ ] Container [ ] Split Screen [ ] Video Background

Height:
  Desktop: [ ] Full Screen (100vh) [ ] Fixed ___px [ ] Auto
  Mobile: [ ] Full Screen [ ] Fixed ___px [ ] Auto

Background:
  Type: [ ] Image [ ] Video [ ] Gradient [ ] Solid Color [ ] Slider
  Image Behavior: [ ] Fixed [ ] Parallax [ ] Normal
  Overlay: [ ] Yes [ ] No | Color: #_______ | Opacity: ___

Content:
  Alignment: [ ] Left [ ] Center [ ] Right
  Title Size: ___px
  Subtitle Size: ___px
  Max Width: ___px
  
  Buttons:
    Primary Text: 
    Primary Style: 
    Secondary Text: 
    Secondary Style: 
    
Animation:
  Title: [ ] Fade In [ ] Slide Up [ ] Type Writer [ ] None
  Subtitle: [ ] Fade In [ ] Slide Up [ ] None
  Delay Between: ___ms
```

### Buttons
```yaml
Primary Button:
  Background: #_______
  Text Color: #_______
  Padding: ___px ___px
  Border Radius: ___px
  Font Size: ___px
  Font Weight: ___
  Text Transform: [ ] Uppercase [ ] Capitalize [ ] None
  
  Hover State:
    Background: #_______
    Text Color: #_______
    Transform: [ ] Scale [ ] Translate Y [ ] None
    Shadow: 
    
Secondary Button:
  [Repeat same fields as Primary]
  
Outline Button:
  [Repeat same fields as Primary]
  
Text Button:
  [Repeat same fields as Primary]

Size Variations:
  Small: Padding: ___px ___px | Font: ___px
  Medium: Padding: ___px ___px | Font: ___px
  Large: Padding: ___px ___px | Font: ___px
```

### Cards
```yaml
Default Card:
  Background: #_______
  Border: ___px [ ] Solid [ ] None | Color: #_______
  Border Radius: ___px
  Shadow: 
  Padding: ___px
  
  Hover State:
    Transform: [ ] Scale [ ] Translate Y [ ] None | Amount: ___
    Shadow Change: 
    Background Change: #_______
    Transition Duration: ___ms
    
  Image:
    Position: [ ] Top [ ] Left [ ] Right [ ] Background
    Height: ___px
    Object Fit: [ ] Cover [ ] Contain [ ] Fill
    
  Content:
    Title Size: ___px
    Text Size: ___px
    Spacing Between: ___px
    
Product/Service Card:
  [Repeat relevant fields]
  Price Display: 
  CTA Button: 
  
Testimonial Card:
  [Repeat relevant fields]
  Quote Style: 
  Author Layout: 
  Rating Display: 
```

### Forms
```yaml
Input Fields:
  Height: ___px
  Padding: ___px ___px
  Border: ___px solid #_______
  Border Radius: ___px
  Background: #_______
  Font Size: ___px
  
  Focus State:
    Border Color: #_______
    Shadow: 
    Background: #_______
    
  Error State:
    Border Color: #_______
    Background: #_______
    Message Color: #_______
    
  Label:
    Position: [ ] Above [ ] Inside [ ] Floating
    Font Size: ___px
    Color: #_______
    
Textarea:
  Min Height: ___px
  Max Height: ___px
  Resize: [ ] Vertical [ ] Horizontal [ ] Both [ ] None
  
Select/Dropdown:
  Custom Styled: [ ] Yes [ ] No
  Arrow Icon: [ ] Default [ ] Custom
  
Checkboxes/Radios:
  Custom Styled: [ ] Yes [ ] No
  Size: ___px
  Checked Color: #_______
  
Submit Button:
  Full Width: [ ] Yes [ ] No
  Style: [Reference button styles above]
```

### Footer
```yaml
Layout:
  Type: [ ] Multi-Column [ ] Centered [ ] Minimal
  Background: #_______
  Text Color: #_______
  Padding: ___px ___px
  
Sections:
  Column 1:
    Title: 
    Content Type: [ ] Links [ ] Text [ ] Contact Info
    Items:
      - 
      - 
      
  Column 2:
    [Repeat structure]
    
  Column 3:
    [Repeat structure]
    
  Column 4:
    [Repeat structure]
    
Bottom Bar:
  Include: [ ] Yes [ ] No
  Content: [ ] Copyright [ ] Links [ ] Both
  Background: #_______
  
Social Icons:
  Position: [ ] Top [ ] Bottom [ ] Column
  Style: [ ] Filled [ ] Outline [ ] Plain
  Size: ___px
  Color: #_______
  Hover Color: #_______
```

---

## ⚡ INTERACTIONS & ANIMATIONS

### Scroll Animations
```yaml
Enable Scroll Animations: [ ] Yes [ ] No

Animation Types Used:
  [ ] Fade In
  [ ] Slide Up
  [ ] Slide In (Left/Right)
  [ ] Scale
  [ ] Rotate
  [ ] Custom: 

Trigger Point: [ ] 25% Visible [ ] 50% Visible [ ] 75% Visible [ ] Fully Visible

Animation Settings:
  Duration: ___ms
  Easing: 
  Delay Between Elements: ___ms
  Stagger: [ ] Yes [ ] No | Amount: ___ms
  
Specific Elements:
  Hero Content: 
  Service Cards: 
  Images: 
  Testimonials: 
  [Add more as needed]
```

### Hover Effects
```yaml
Links:
  Effect: [ ] Underline [ ] Color Change [ ] Both [ ] None
  Transition: ___ms
  
Images:
  Effect: [ ] Scale [ ] Brightness [ ] Overlay [ ] None
  Scale Amount: ___
  Overlay Color: #_______
  
Buttons:
  [Covered in Buttons section]
  
Cards:
  [Covered in Cards section]
```

### Loading States
```yaml
Page Loader:
  Type: [ ] Spinner [ ] Progress Bar [ ] Custom Animation [ ] None
  Position: [ ] Full Screen [ ] Top Bar [ ] Center
  Colors: #_______ #_______
  
Lazy Loading:
  Images: [ ] Yes [ ] No
  Sections: [ ] Yes [ ] No
  Fade In Duration: ___ms
  
Skeleton Screens:
  Use Skeleton: [ ] Yes [ ] No
  Background: #_______
  Animation: [ ] Shimmer [ ] Pulse [ ] None
```

### Micro-Interactions
```yaml
Form Validation:
  Real-time: [ ] Yes [ ] No
  Success Animation: 
  Error Animation: 
  
Button Click:
  Effect: [ ] Ripple [ ] Scale [ ] None
  
Tab/Accordion:
  Animation: [ ] Slide [ ] Fade [ ] None
  Duration: ___ms
  
Tooltips:
  Trigger: [ ] Hover [ ] Click [ ] Focus
  Animation: [ ] Fade [ ] Scale [ ] Slide
  Position: [ ] Top [ ] Bottom [ ] Auto
```

---

## 📱 RESPONSIVE BEHAVIOR

### Mobile Specific
```yaml
Navigation:
  Changes at: ___px
  Mobile Menu Type: 
  
Typography Scale:
  Heading Reduction: ___%
  Body Size Mobile: ___px
  
Layout Changes:
  Stack Columns at: ___px
  Hide Elements: [ ] List elements to hide on mobile
  Show Elements: [ ] List mobile-only elements
  
Touch Interactions:
  Swipe Gestures: [ ] Yes [ ] No | Where: 
  Touch Feedback: [ ] Yes [ ] No
```

### Tablet Specific
```yaml
Layout:
  Columns: ___ columns (vs ___ on desktop)
  Sidebar Behavior: [ ] Hide [ ] Collapse [ ] Overlay
  
Navigation:
  Same as Mobile: [ ] Yes [ ] No
  If No, describe: 
```

---

## 🔧 FUNCTIONALITY REQUIREMENTS

### Dynamic Features
```yaml
Search:
  Include Search: [ ] Yes [ ] No
  Type: [ ] Full Page [ ] Dropdown [ ] Inline
  Search What: [ ] Products [ ] Pages [ ] Blog [ ] All
  
Filters/Sorting:
  Include Filters: [ ] Yes [ ] No
  Filter By: 
    - [ ] Category
    - [ ] Price
    - [ ] Date
    - [ ] Custom: 
  Animation: [ ] Fade [ ] Slide [ ] None
  
Pagination:
  Type: [ ] Numbers [ ] Load More [ ] Infinite Scroll
  Items Per Page: ___
  
User Accounts:
  Required: [ ] Yes [ ] No
  Features: 
    - [ ] Login/Register
    - [ ] Profile
    - [ ] Dashboard
    - [ ] Other: 
```

### Forms & Contact
```yaml
Contact Form:
  Fields:
    - Name: [ ] Required [ ] Optional
    - Email: [ ] Required [ ] Optional
    - Phone: [ ] Required [ ] Optional
    - Message: [ ] Required [ ] Optional
    - [Add custom fields]
  
  Validation:
    Client-side: [ ] Yes [ ] No
    Server-side: [ ] Yes [ ] No
    
  Success Action:
    [ ] Message [ ] Redirect [ ] Both
    Success Message: 
    Redirect URL: 
    
Newsletter Signup:
  Position: [ ] Header [ ] Footer [ ] Popup [ ] Page Section
  Fields: 
  Integration: [ ] Mailchimp [ ] Constant Contact [ ] Other: 
```

### E-Commerce (if applicable)
```yaml
Shopping Cart:
  Type: [ ] Slide Out [ ] Dropdown [ ] Page
  
Product Display:
  Layout: [ ] Grid [ ] List [ ] Both
  Quick View: [ ] Yes [ ] No
  Image Zoom: [ ] Yes [ ] No
  
Checkout:
  Steps: [ ] Single Page [ ] Multi-Step
  Guest Checkout: [ ] Yes [ ] No
  Payment Methods: 
```

### Third-Party Integrations
```yaml
Analytics:
  - [ ] Google Analytics
  - [ ] Google Tag Manager
  - [ ] Facebook Pixel
  - [ ] Other: 

Maps:
  Include Map: [ ] Yes [ ] No
  Type: [ ] Google Maps [ ] Mapbox [ ] OpenStreetMap
  Style: [ ] Default [ ] Custom
  
Social Media:
  - [ ] Facebook Feed
  - [ ] Instagram Feed
  - [ ] Twitter Feed
  - [ ] Share Buttons
  
Chat/Support:
  - [ ] Live Chat
  - [ ] Chatbot
  - [ ] Help Desk
  Provider: 

Calendar/Booking:
  Include: [ ] Yes [ ] No
  Type: [ ] Calendly [ ] Custom [ ] Other: 

Reviews:
  - [ ] Google Reviews
  - [ ] Yelp
  - [ ] Custom
  Display Type: [ ] Carousel [ ] Grid [ ] List
```

---

## 🎯 SPECIAL REQUIREMENTS

### Performance
```yaml
Page Load Target: Under ___seconds
Image Optimization: [ ] WebP [ ] Lazy Load [ ] CDN
Minification: [ ] CSS [ ] JS [ ] HTML
Caching Strategy: 
```

### SEO
```yaml
Meta Tags:
  Dynamic: [ ] Yes [ ] No
  
Schema Markup:
  - [ ] Organization
  - [ ] LocalBusiness
  - [ ] Product
  - [ ] Article
  - [ ] Other: 
  
URL Structure:
  Format: 
  
Sitemap: [ ] XML [ ] HTML [ ] Both
```

### Accessibility
```yaml
WCAG Level: [ ] A [ ] AA [ ] AAA

Requirements:
  - [ ] Keyboard Navigation
  - [ ] Screen Reader Compatible
  - [ ] Color Contrast Compliance
  - [ ] Alt Text for Images
  - [ ] ARIA Labels
  - [ ] Focus Indicators
  
Skip Links: [ ] Yes [ ] No
Text Resize: [ ] Supported [ ] Fixed
```

### Browser Support
```yaml
Desktop:
  - [ ] Chrome (last 2 versions)
  - [ ] Firefox (last 2 versions)
  - [ ] Safari (last 2 versions)
  - [ ] Edge (last 2 versions)
  - [ ] IE11 (specify if needed)
  
Mobile:
  - [ ] iOS Safari (iOS 12+)
  - [ ] Chrome Mobile
  - [ ] Samsung Internet
```

---

## 📁 CONTENT & ASSETS

### Images
```yaml
Source:
  [ ] Provided by client
  [ ] Stock photos needed
  [ ] Use placeholders
  
Format Requirements:
  Hero Images: ___px x ___px
  Card Images: ___px x ___px
  Gallery Images: ___px x ___px
  Thumbnail: ___px x ___px
  
Naming Convention: 
```

### Copy/Text
```yaml
Content Status:
  [ ] Final copy provided
  [ ] Lorem ipsum for now
  [ ] Mix of both
  
Tone of Voice:
  [ ] Professional
  [ ] Casual
  [ ] Friendly
  [ ] Authoritative
  [ ] Other: 
```

### Brand Assets
```yaml
Logo Files:
  Primary: 
  Alternative: 
  Favicon: 
  
Brand Guidelines:
  Document Link: 
  Must Follow: [ ] Strictly [ ] Loosely [ ] Reference Only
```

---

## 🚀 DEVELOPMENT PREFERENCES

### Technology Stack
```yaml
Framework Preference:
  [ ] Vanilla HTML/CSS/JS
  [ ] React
  [ ] Vue
  [ ] Angular
  [ ] Next.js
  [ ] Other: 
  
CSS Approach:
  [ ] Vanilla CSS
  [ ] SCSS/SASS
  [ ] Tailwind CSS
  [ ] Styled Components
  [ ] CSS Modules
  [ ] Other: 
  
Build Tools:
  [ ] None (static)
  [ ] Webpack
  [ ] Vite
  [ ] Parcel
  [ ] Other: 
```

### Code Preferences
```yaml
CSS Units:
  [ ] px
  [ ] rem
  [ ] em
  [ ] Mix
  
Naming Convention:
  [ ] BEM
  [ ] Atomic
  [ ] Custom: 
  
JavaScript:
  [ ] ES6+
  [ ] ES5
  [ ] TypeScript
  
Comments:
  [ ] Detailed
  [ ] Minimal
  [ ] None
```

### File Structure
```yaml
Preferred Structure:
  [ ] All in root
  [ ] Organized folders (/css, /js, /images)
  [ ] Component-based
  [ ] Custom: 
```

---

## 📋 PAGES TO BUILD

### Page List
```yaml
1. Homepage
   - Sections: 
   - Special Features: 
   
2. About Page
   - Sections: 
   - Special Features: 
   
3. Services/Products Page
   - Layout: 
   - Sections: 
   
4. Contact Page
   - Form Fields: 
   - Map: [ ] Yes [ ] No
   
5. [Add more pages as needed]
```

---

## 🎨 UNIQUE FEATURES

### Special Animations
```yaml
Describe any unique animations:
- 
- 
```

### Custom Functionality
```yaml
Describe any custom features:
- 
- 
```

### Creative Elements
```yaml
Special design elements:
- 
- 
```

---

## 📝 ADDITIONAL NOTES

```yaml
Important Considerations:
- 
- 

Things to Avoid:
- 
- 

Inspiration/Mood:
- 
- 

Questions for Developer:
- 
- 
```

---

## ✅ CHECKLIST BEFORE SUBMISSION

- [ ] All colors include hex codes
- [ ] All measurements include units (px, rem, %)
- [ ] Font names and weights specified
- [ ] Responsive breakpoints defined
- [ ] Animation timings included
- [ ] Hover/active states described
- [ ] File paths/URLs for all assets provided
- [ ] Navigation structure complete
- [ ] Form fields and validation rules defined
- [ ] Third-party integrations listed

---

## 🔗 ATTACHMENTS

List all attached files:
1. 
2. 
3. 

---

*Template Version: 1.0*
*Last Updated: [Date]*
*Filled Out By: [Your Name]*
*Date Completed: [Date]*