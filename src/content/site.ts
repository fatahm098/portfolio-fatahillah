/**
 * Single source of truth for every string rendered on the site.
 * Components never hardcode copy — edit this file to change the content.
 */

export type Project = {
  /** Stable id, also used as React key. */
  slug: string;
  name: string;
  summary: string;
  stack: readonly string[];
  /** Rendered only when present. */
  repoUrl?: string;
  /** Rendered only when present. */
  demoUrl?: string;
  /** Path shown in the browser-frame chrome of the placeholder preview. */
  previewPath: string;
  /** Accessible description of the placeholder preview. */
  previewAlt: string;
  /** Featured projects use the large card layout. */
  featured: boolean;
};

export type StackGroup = {
  label: string;
  items: readonly string[];
};

export type ExperienceEntry = {
  role: string;
  mode: string;
};

export type EducationEntry = {
  institution: string;
  programme: string;
  level: string;
};

export const site = {
  name: "Fatahillah Muhammad",
  shortName: "Fatahillah M.",
  monogram: "FM",
  tagline: "Builds AI automation workflows and full-stack web apps",
  bio: "Informatics student at Universitas Teknologi Yogyakarta, focused on AI automation, computer vision, and full-stack web applications.",
  heroLabel: "AI automation • Full-stack web apps",
  year: 2026,

  contact: {
    email: "mfatahillah995@gmail.com",
    emailHref: "mailto:mfatahillah995@gmail.com",
    githubHandle: "github.com/fatahm098",
    githubUrl: "https://github.com/fatahm098",
  },

  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  actions: {
    primary: "View projects",
    secondary: "Contact me",
    repo: "Repository",
    demo: "Live demo",
    emailMe: "Email me",
    copyEmail: "Copy email",
    copied: "Copied",
    openGithub: "Open GitHub profile",
    menu: "Open menu",
    closeMenu: "Close menu",
    theme: "Switch theme",
    skipToContent: "Skip to content",
    emailLabel: "Email",
    githubLabel: "GitHub",
    mailNote: "Opens your default mail app.",
    previewPending: "Preview pending",
    previewNote: "No screenshot yet",
  },

  sections: {
    projects: {
      index: "01",
      title: "Selected projects",
      description:
        "Four projects: AI automation, construction change estimation, and operational web apps.",
    },
    stack: {
      index: "02",
      title: "Stack",
      description: "Technologies used across the projects above.",
    },
    experience: {
      index: "03",
      title: "Experience & education",
      description: "Tutoring and undergraduate study.",
    },
    contact: {
      index: "04",
      title: "Get in touch",
      description: "Email or GitHub — no form.",
    },
  },

  projects: [
    {
      slug: "robloxops",
      name: "RobloxOps",
      summary:
        "Multi-tenant order management platform for Roblox design studios.",
      stack: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Supabase",
        "Stripe",
        "Discord",
      ],
      repoUrl: "https://github.com/fatahm098/robloxops",
      demoUrl: "",
      previewPath: "robloxops / dashboard",
      previewAlt: "RobloxOps order dashboard preview, screenshot pending",
      featured: true,
    },
    {
      slug: "construction-change-intelligence",
      name: "Construction Change Intelligence",
      summary:
        "Compares two revisions of a technical drawing and estimates the impact on the BOQ.",
      stack: ["Python", "FastAPI", "OpenCV", "Next.js"],
      repoUrl:
        "https://github.com/fatahm098/construction-change-intelligence",
      demoUrl: "",
      previewPath: "change-intelligence / diff",
      previewAlt: "Construction Change Intelligence drawing diff preview, screenshot pending",
      featured: true,
    },
    {
      slug: "sate-taichan-ssj",
      name: "Sate Taichan SSJ",
      summary: "Web app for ordering, cashier, and kitchen workflows.",
      stack: ["Next.js", "Prisma", "Supabase"],
      demoUrl: "",
      previewPath: "sate-taichan-ssj / kds",
      previewAlt: "Sate Taichan SSJ kitchen display preview, screenshot pending",
      featured: false,
    },
    {
      slug: "facial-expression-classification",
      name: "Facial Expression Classification",
      summary: "Seven-class facial expression classification with DeiT.",
      stack: ["Python", "PyTorch", "FastAPI"],
      demoUrl: "",
      previewPath: "facial-expression / inference",
      previewAlt: "Facial Expression Classification inference preview, screenshot pending",
      featured: false,
    },
  ] as readonly Project[],

  stackGroups: [
    {
      label: "Web & frontend",
      items: ["Next.js", "TypeScript"],
    },
    {
      label: "Backend & APIs",
      items: ["Python", "FastAPI"],
    },
    {
      label: "Data & integrations",
      items: ["Supabase", "Prisma", "Stripe", "Discord"],
    },
    {
      label: "AI & computer vision",
      items: ["PyTorch", "OpenCV", "DeiT"],
    },
  ] as readonly StackGroup[],

  experience: {
    role: "AI Tutor",
    mode: "Private, in-person",
  } satisfies ExperienceEntry,

  education: {
    institution: "Universitas Teknologi Yogyakarta",
    programme: "S1 Informatika",
    level: "S1",
  } satisfies EducationEntry,

  footer: {
    signature: "> sys.arch //",
  },
} as const;

export type SiteContent = typeof site;
