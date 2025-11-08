import { defineConfig } from "tinacms";
import slugify from 'slugify';

// Your hosting provider likely exposes this as an environment variable
// Vercel automatically sets VERCEL_GIT_COMMIT_REF to the current branch
const branch = process.env.VERCEL_GIT_COMMIT_REF || "main";

// ============================================
// REUSABLE SEO FIELD DEFINITIONS
// ============================================

// Generate SEO-friendly slug from title
const generateSlug = (title: string): string => {
  return slugify(title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g
  });
};

// Reusable SEO fields for all collections
const seoFields = [
  {
    type: 'object' as const,
    name: 'seo',
    label: 'SEO Settings',
    description: 'Configure meta tags, Open Graph, and search engine optimization',
    fields: [
      {
        type: 'string' as const,
        name: 'metaTitle',
        label: 'Meta Title',
        description: 'Optimized title for search engines (50-60 characters recommended)',
        ui: {
          validate: (value: string) => {
            if (value && value.length > 60) {
              return 'Meta title should be 60 characters or less for optimal display in search results';
            }
          }
        }
      },
      {
        type: 'string' as const,
        name: 'metaDescription',
        label: 'Meta Description',
        description: 'Brief description for search results (150-160 characters recommended)',
        ui: {
          component: 'textarea',
          validate: (value: string) => {
            if (value && value.length > 160) {
              return 'Meta description should be 160 characters or less for optimal display';
            }
          }
        }
      },
      {
        type: 'string' as const,
        name: 'slug',
        label: 'URL Slug',
        description: 'Custom URL path (leave empty to auto-generate from title)',
      },
      {
        type: 'string' as const,
        name: 'canonicalUrl',
        label: 'Canonical URL',
        description: 'Full canonical URL (optional - defaults to page URL)',
      },
      {
        type: 'string' as const,
        name: 'keywords',
        label: 'Keywords',
        description: 'SEO keywords (comma-separated)',
        list: true,
      },
      {
        type: 'object' as const,
        name: 'openGraph',
        label: 'Open Graph (Social Media)',
        description: 'Customize how this page appears when shared on social media',
        fields: [
          {
            type: 'string' as const,
            name: 'title',
            label: 'OG Title',
            description: 'Title for social media shares (defaults to meta title)',
          },
          {
            type: 'string' as const,
            name: 'description',
            label: 'OG Description',
            description: 'Description for social media shares (defaults to meta description)',
            ui: {
              component: 'textarea',
            }
          },
          {
            type: 'image' as const,
            name: 'image',
            label: 'OG Image',
            description: 'Image for social media shares (1200x630px recommended)',
          },
        ],
      },
    ],
  },
];

// Reusable schema markup field
const schemaMarkupField = {
  type: 'object' as const,
  name: 'schemaMarkup',
  label: 'Schema Markup (Advanced SEO)',
  description: 'Structured data for rich search results',
  fields: [
    {
      type: 'string' as const,
      name: 'type',
      label: 'Schema Type',
      options: [
        { value: 'MedicalProcedure', label: 'Medical Procedure' },
        { value: 'FAQPage', label: 'FAQ Page' },
        { value: 'AboutPage', label: 'About Page' },
        { value: 'ContactPage', label: 'Contact Page' },
      ],
    },
    {
      type: 'string' as const,
      name: 'customSchema',
      label: 'Custom Schema JSON',
      description: 'Advanced: Paste custom JSON-LD schema markup',
      ui: {
        component: 'textarea',
      }
    },
  ],
};

// Helper function for images with alt text
const imageWithAlt = (name: string, label: string, description?: string) => ({
  type: 'object' as const,
  name,
  label,
  description,
  fields: [
    {
      type: 'image' as const,
      name: 'src',
      label: 'Image',
      required: true,
    },
    {
      type: 'string' as const,
      name: 'alt',
      label: 'Alt Text',
      description: 'Describe the image for accessibility and SEO',
      required: true,
    },
  ],
});

export default defineConfig({
  branch,

  // Get this from tina.io
  // Use TINA_ for build time (server), VITE_TINA_ for runtime (browser)
  clientId: process.env.TINA_CLIENT_ID || process.env.VITE_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN || process.env.VITE_TINA_TOKEN,

  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN || process.env.VITE_TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng'],
    },
  },

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "treatment",
        label: "Treatments",
        path: "content/treatments",
        format: "json",
        ui: {
          router: ({ document }) => {
            const filename = document._sys.filename;

            // Facial treatments
            if (filename === 'hydrafacial-edinburgh') return `/procedures/facial/hydrafacial-edinburgh`;
            if (filename === 'hydrafacial-london') return `/procedures/facial/hydrafacial-london`;
            if (filename === 'microneedling-edinburgh') return `/procedures/facial/microneedling-edinburgh`;
            if (filename === 'microneedling-london') return `/procedures/facial/microneedling-london`;
            if (filename === 'dermaplaning') return `/procedures/facial/dermaplaning`;
            if (filename === 'exosome') return `/procedures/facial/exosome`;
            if (filename === 'hydra-tite') return `/procedures/facial/hydratite`;
            if (filename === 'keravive') return `/procedures/facial/keravive`;
            if (filename === 'led-facial') return `/procedures/facial/led-facial`;
            if (filename === 'oxygen-facial') return `/procedures/facial/oxygen-facial`;
            if (filename === 'skin-scanner') return `/procedures/facial/skin-scanner`;

            // Injectables
            if (filename === 'anti-wrinkle') return `/procedures/injectables/anti-wrinkle`;
            if (filename === 'dermal-filler') return `/procedures/injectables/dermal-filler`;
            if (filename === 'profhilo') return `/procedures/injectables/profhilo`;
            if (filename === 'polynucleotides') return `/procedures/injectables/polynucleotides`;
            if (filename === 'biofiller-edinburgh') return `/procedures/injectables/biofiller-edinburgh`;
            if (filename === 'biofiller-london') return `/procedures/injectables/biofiller-london`;
            if (filename === 'prp') return `/procedures/injectables/prp`;
            if (filename === 'carboxy') return `/procedures/injectables/carboxy`;
            if (filename === 'sclerotherapy') return `/procedures/injectables/sclerotherapy`;
            if (filename === 'mole-removal') return `/procedures/injectables/mole-removal`;
            if (filename === 'neofound') return `/procedures/injectables/neofound`;
            if (filename === 'iv-drip') return `/procedures/injectables/iv-drip`;
            if (filename === 'vitamin-d') return `/procedures/injectables/vitamin-d`;
            if (filename === 'b12') return `/procedures/injectables/b12`;
            if (filename === 'biotin') return `/procedures/injectables/biotin`;
            if (filename === 'glutathione') return `/procedures/injectables/glutathione`;
            if (filename === 'magnesium') return `/procedures/injectables/magnesium`;
            if (filename === 'allergy') return `/procedures/injectables/allergy`;

            // Body treatments
            if (filename === 'laser-hair-removal') return `/procedures/body/laser-hair-removal`;
            if (filename === 'coolsculpting') return `/procedures/body/coolsculpting`;
            if (filename === 'exilis') return `/procedures/body/exilis`;
            if (filename === 'hifu') return `/procedures/body/hifu`;
            if (filename === 'cool-laser') return `/procedures/body/cool-laser`;
            if (filename === 'electrolysis') return `/procedures/body/electrolysis`;

            // Peels
            if (filename === 'medik8-edinburgh') return `/procedures/peels/medik8-edinburgh`;
            if (filename === 'medik8-london') return `/procedures/peels/medik8-london`;
            if (filename === 'zo-edinburgh') return `/procedures/peels/zo-edinburgh`;
            if (filename === 'zo-london') return `/procedures/peels/zo-london`;
            if (filename === 'obagi') return `/procedures/peels/obagi`;

            // Default fallback - will show "nothing to edit" until page is migrated to TinaCMS
            return undefined;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Treatment Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              { value: "injectables", label: "Injectables" },
              { value: "facial", label: "Facial Treatments" },
              { value: "body", label: "Body Treatments" },
              { value: "peels", label: "Chemical Peels" },
            ],
          },
          {
            type: "string",
            name: "location",
            label: "Available Location",
            options: [
              { value: "both", label: "Both Locations" },
              { value: "london", label: "London Only" },
              { value: "edinburgh", label: "Edinburgh Only" },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "tagline",
                label: "Tagline",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
              },
              imageWithAlt("backgroundImage", "Background Image", "Background image for the hero section"),
            ],
          },
          {
            type: "object",
            name: "treatmentInfo",
            label: "Treatment Information",
            fields: [
              {
                type: "string",
                name: "duration",
                label: "Duration",
              },
              {
                type: "string",
                name: "results",
                label: "Results Timeline",
              },
              {
                type: "string",
                name: "price",
                label: "Price",
              },
              {
                type: "string",
                name: "benefits",
                label: "Benefits",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "sections",
            label: "Page Sections",
            description: "Add and customize sections for this treatment page",
            list: true,
            templates: [
              {
                name: "testimonialsSection",
                label: "Testimonials Section",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section Title",
                    default: "What Our Clients Say",
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subtitle",
                  },
                  {
                    type: "object",
                    name: "testimonials",
                    label: "Testimonials",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Client Name" },
                      { type: "string", name: "treatment", label: "Treatment" },
                      { type: "number", name: "rating", label: "Rating (1-5)" },
                      { type: "rich-text", name: "content", label: "Testimonial" },
                    ],
                  },
                ],
              },
              {
                name: "spaWelcomeSection",
                label: "Spa Welcome Section",
                fields: [
                  {
                    type: "string",
                    name: "tagline",
                    label: "Tagline",
                    default: "WELCOME TO SPA CENTER",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    default: "Best Relaxation and Regeneration Center",
                  },
                  {
                    type: "rich-text",
                    name: "description",
                    label: "Description",
                  },
                  imageWithAlt("image", "Section Image", "Image for the spa welcome section"),
                  {
                    type: "string",
                    name: "videoUrl",
                    label: "Video URL (optional)",
                    description: "YouTube or Vimeo embed URL - replaces image if provided",
                  },
                ],
              },
              {
                name: "expertiseSection",
                label: "Expertise Section",
                fields: [
                  {
                    type: "string",
                    name: "tagline",
                    label: "Tagline",
                    default: "EXPERTISE COMBINED WITH QUALITY",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    default: "Professional Aesthetic Treatments",
                  },
                  {
                    type: "rich-text",
                    name: "description",
                    label: "Description",
                  },
                  {
                    type: "image",
                    name: "backgroundImage",
                    label: "Background Image (optional)",
                  },
                  {
                    type: "string",
                    name: "videoUrl",
                    label: "Background Video URL (optional)",
                    description: "YouTube or Vimeo embed URL",
                  },
                  {
                    type: "object",
                    name: "features",
                    label: "Features",
                    list: true,
                    fields: [
                      { type: "string", name: "icon", label: "Icon Emoji or Text", description: "Use emoji (✨) or text" },
                      { type: "image", name: "iconImage", label: "Icon Image (optional)", description: "Upload custom icon image" },
                      { type: "string", name: "title", label: "Feature Title" },
                      { type: "string", name: "description", label: "Description" },
                    ],
                  },
                ],
              },
              {
                name: "promotionsSection",
                label: "Special Offers Section",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section Title",
                    default: "Special Offers",
                  },
                  {
                    type: "object",
                    name: "promotions",
                    label: "Promotions",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Promotion Title" },
                      { type: "rich-text", name: "description", label: "Description" },
                      { type: "string", name: "discount", label: "Discount Text" },
                      { type: "image", name: "promotionImage", label: "Promotion Image" },
                      { type: "string", name: "buttonText", label: "Button Text" },
                    ],
                  },
                ],
              },
              {
                name: "beautySection",
                label: "Essence of Beauty Section",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section Title",
                    default: "The Essence of Beauty",
                  },
                  {
                    type: "rich-text",
                    name: "description",
                    label: "Description",
                  },
                  imageWithAlt("image", "Section Image", "Image for the essence of beauty section"),
                  {
                    type: "string",
                    name: "videoUrl",
                    label: "Video URL (optional)",
                    description: "YouTube or Vimeo embed URL - replaces image if provided",
                  },
                ],
              },
              {
                name: "faqSection",
                label: "FAQ Section",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section Title",
                    default: "Frequently Asked Questions",
                  },
                  {
                    type: "object",
                    name: "questions",
                    label: "Questions",
                    list: true,
                    fields: [
                      { type: "string", name: "question", label: "Question" },
                      { type: "rich-text", name: "answer", label: "Answer" },
                    ],
                  },
                ],
              },
              {
                name: "productsSection",
                label: "Professional Products Section",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section Title",
                    default: "Professional Products",
                  },
                  {
                    type: "rich-text",
                    name: "description",
                    label: "Description",
                  },
                  {
                    type: "object",
                    name: "products",
                    label: "Products",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Product Name" },
                      { type: "rich-text", name: "description", label: "Description" },
                      { type: "image", name: "productImage", label: "Product Image" },
                    ],
                  },
                ],
              },
              {
                name: "treatmentJourneySection",
                label: "Treatment Journey Section",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section Title",
                    default: "Your Treatment Journey",
                  },
                  {
                    type: "object",
                    name: "steps",
                    label: "Journey Steps",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Step Title" },
                      { type: "rich-text", name: "description", label: "Description" },
                      { type: "string", name: "icon", label: "Icon Emoji or Number", description: "Use emoji (✨) or step number" },
                      { type: "image", name: "iconImage", label: "Icon Image (optional)", description: "Upload custom icon image" },
                    ],
                  },
                ],
              },
              {
                name: "customTextSection",
                label: "Custom Text Section",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "rich-text",
                    name: "body",
                    label: "Body Content",
                  },
                ],
              },
              {
                name: "imageSection",
                label: "Image Section",
                fields: [
                  {
                    type: "image",
                    name: "sectionImage",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                  },
                  {
                    type: "string",
                    name: "caption",
                    label: "Caption",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "translations",
            label: "Translations",
            fields: [
              {
                type: "object",
                name: "zhCN",
                label: "Simplified Chinese",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "rich-text", name: "description", label: "Description" },
                ],
              },
              {
                type: "object",
                name: "zhTW",
                label: "Traditional Chinese",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "rich-text", name: "description", label: "Description" },
                ],
              },
              {
                type: "object",
                name: "ar",
                label: "Arabic",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "rich-text", name: "description", label: "Description" },
                ],
              },
            ],
          },
          // SEO Fields
          ...seoFields,
          schemaMarkupField,
        ],
      },
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "json",
        match: {
          include: "home"
        },
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
          },
          router: () => {
            return `/`;
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title (First Part)",
                required: true,
              },
              {
                type: "string",
                name: "titleHighlight",
                label: "Title (Highlighted Part)",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "videoUrl",
                label: "Background Video URL",
              },
              {
                type: "object",
                name: "features",
                label: "Key Features",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Feature Text",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "whyChooseUs",
            label: "Why Choose Us Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon Name",
                    description: "Lucide icon name (e.g., Award, Zap, Heart)",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Feature Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Feature Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
              {
                type: "object",
                name: "stats",
                label: "Statistics",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "value",
                    label: "Stat Value",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Stat Label",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services Overview Section",
            fields: [
              {
                type: "object",
                name: "treatments",
                label: "Treatment Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "tag",
                    label: "Tag/Category",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Treatment Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Link URL",
                  },
                  {
                    type: "image",
                    name: "treatmentImage",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "imageAlt",
                    label: "Image Alt Text",
                  },
                  {
                    type: "string",
                    name: "cta",
                    label: "Button Text",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "getMore",
            label: "Get More Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
                required: true,
              },
              {
                type: "object",
                name: "benefits",
                label: "Benefits",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon Name",
                    description: "Lucide icon name (e.g., Star, Users, Stethoscope)",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Benefit Title",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "program",
            label: "Gallery/Program Section",
            fields: [
              {
                type: "string",
                name: "tagline",
                label: "Tagline",
              },
              {
                type: "string",
                name: "title",
                label: "Section Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description Paragraph 1",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "description2",
                label: "Description Paragraph 2",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "images",
                label: "Gallery Images",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "expertMedicine",
            label: "Expert Medicine Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title (First Part)",
                required: true,
              },
              {
                type: "string",
                name: "titleHighlight",
                label: "Title (Highlighted Part)",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "points",
                label: "Key Points",
                list: true,
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
              },
            ],
          },
          {
            type: "object",
            name: "locations",
            label: "Locations Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
                required: true,
              },
              {
                type: "object",
                name: "questions",
                label: "FAQ Questions",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Question",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Answer",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
              {
                type: "string",
                name: "ctaTitle",
                label: "CTA Box Title",
              },
              {
                type: "string",
                name: "ctaDescription",
                label: "CTA Box Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "ctaPhone",
                label: "CTA Phone Number",
              },
              {
                type: "string",
                name: "ctaPhoneText",
                label: "CTA Phone Button Text",
              },
              {
                type: "string",
                name: "ctaBookText",
                label: "CTA Book Button Text",
              },
            ],
          },
          // SEO Fields
          ...seoFields,
          schemaMarkupField,
        ],
      },
      {
        name: "teamMember",
        label: "Team Members",
        path: "content/team",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Full Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Job Title",
            required: true,
          },
          {
            type: "image",
            name: "profilePhoto",
            label: "Profile Photo",
            required: true,
          },
          {
            type: "string",
            name: "specialty",
            label: "Specialty",
            list: true,
          },
          {
            type: "string",
            name: "qualifications",
            label: "Qualifications",
            list: true,
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Biography",
          },
          {
            type: "number",
            name: "yearsExperience",
            label: "Years of Experience",
          },
          {
            type: "string",
            name: "languages",
            label: "Languages Spoken",
            list: true,
          },
          {
            type: "string",
            name: "location",
            label: "Primary Location",
            options: [
              { value: "london", label: "London" },
              { value: "edinburgh", label: "Edinburgh" },
              { value: "both", label: "Both Locations" },
            ],
          },
          // SEO Fields
          ...seoFields,
          schemaMarkupField,
        ],
      },
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "object",
                name: "london",
                label: "London",
                fields: [
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "email", label: "Email" },
                  { type: "string", name: "address", label: "Address" },
                  { type: "string", name: "hours", label: "Opening Hours", list: true },
                ],
              },
              {
                type: "object",
                name: "edinburgh",
                label: "Edinburgh",
                fields: [
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "email", label: "Email" },
                  { type: "string", name: "address", label: "Address" },
                  { type: "string", name: "hours", label: "Opening Hours", list: true },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media",
            fields: [
              { type: "string", name: "instagram", label: "Instagram URL" },
              { type: "string", name: "facebook", label: "Facebook URL" },
              { type: "string", name: "youtube", label: "YouTube URL" },
              { type: "string", name: "whatsapp", label: "WhatsApp Number" },
            ],
          },
          {
            type: "string",
            name: "bookingUrl",
            label: "Booking System URL",
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true,
          },
          // SEO Fields
          ...seoFields,
          schemaMarkupField,
        ],
      },
      {
        name: "faq",
        label: "FAQs",
        path: "content/faqs",
        format: "json",
        fields: [
          {
            type: "string",
            name: "question",
            label: "Question",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "answer",
            label: "Answer",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              { value: "general", label: "General" },
              { value: "treatments", label: "Treatments" },
              { value: "booking", label: "Booking" },
              { value: "pricing", label: "Pricing" },
            ],
          },
          // SEO Fields (for FAQ pages/listings)
          ...seoFields,
          schemaMarkupField,
        ],
      },
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Client Name",
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Testimonial",
            isBody: true,
            required: true,
          },
          {
            type: "string",
            name: "treatment",
            label: "Treatment Received",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            options: [
              { value: "london", label: "London" },
              { value: "edinburgh", label: "Edinburgh" },
            ],
          },
          {
            type: "boolean",
            name: "featured",
            label: "Show on Homepage",
          },
          // SEO Fields (for testimonial pages/listings)
          ...seoFields,
          schemaMarkupField,
        ],
      },
    ],
  },
});
