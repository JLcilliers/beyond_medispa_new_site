import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
// Vercel automatically sets VERCEL_GIT_COMMIT_REF to the current branch
const branch = process.env.VERCEL_GIT_COMMIT_REF || "main";

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
            // Route to TinaCMS-enabled pages
            if (document._sys.filename === 'anti-wrinkle') {
              return `/procedures/injectables/anti-wrinkle-tina`;
            }
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
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
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
            name: "content",
            label: "Page Content",
            list: true,
            templates: [
              {
                name: "textSection",
                label: "Text Section",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "rich-text",
                    name: "body",
                    label: "Body",
                  },
                ],
              },
              {
                name: "imageSection",
                label: "Image Section",
                fields: [
                  {
                    type: "image",
                    name: "image",
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
        ],
      },
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "json",
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
                    name: "image",
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
            name: "image",
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
                  { type: "string", name: "hours", label: "Opening Hours" },
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
                  { type: "string", name: "hours", label: "Opening Hours" },
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
        ],
      },
    ],
  },
});
