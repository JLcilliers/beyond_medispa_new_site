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
            return `/procedures/${document._sys.filename}`;
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
