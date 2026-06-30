// ============================================
// PROJECTS — this is the array that powers the
// Projects section. To add a new project, just
// copy an object below and fill in the fields.
//
// confidential: true → shows a small "Client Project"
// badge instead of a company name (NDA-safe).
// Leave store links empty ("") if not applicable —
// the button will simply be hidden.
// ============================================

export const projects = [
  {
    id: "bike-shopping-app",
    title: "Bike Shopping App",
    description:
      "A custom-shape e-commerce UI for browsing and purchasing bicycles, built with Flutter and GetX for state management. Focused on smooth navigation and a distinctive visual identity.",
    role: "Flutter Developer",
    tech: ["Flutter", "Dart", "GetX"],
    category: "E-Commerce",
    confidential: false,
    image: "",
    playstoreUrl: "",
    appstoreUrl: "",
    githubUrl: "https://github.com/RaahilShaikh/Bike-Shopping-App-UI",
    featured: false,
  },
  {
    id: "trackit-reminder-diary",
    title: "TrackIt — Reminder & Diary",
    description:
      "A feature-rich productivity app combining reminders and personal journaling in one clean interface, built to help users stay organized and reflective.",
    role: "Flutter Developer",
    tech: ["Flutter", "Dart", "Firebase"],
    category: "Productivity",
    confidential: false,
    image: "",
    playstoreUrl: "",
    appstoreUrl: "",
    githubUrl: "https://github.com/RaahilShaikh/TrackIt-Reminder-Diary",
    featured: false,
  },

  // ---------------------------------------------------------
  // PLACEHOLDER PROJECTS — replace these with your real
  // client/company projects. Keep "confidential: true" for
  // any project where you can't disclose the client name.
  // ---------------------------------------------------------
  {
    id: "placeholder-fintech-app",
    title: "Fintech Payment App",
    description:
      "Replace this with a short, non-confidential description of the project — what it does, the problem it solves, and your role in building it.",
    role: "Lead Flutter Developer",
    tech: ["Flutter", "Firebase", "Razorpay"],
    category: "Fintech",
    confidential: true,
    image: "",
    playstoreUrl: "",
    appstoreUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "placeholder-logistics-app",
    title: "Logistics Tracking App",
    description:
      "Replace this with a short description — e.g. real-time delivery tracking app with live map updates and push notifications.",
    role: "Flutter Developer",
    tech: ["Flutter", "GetX", "Google Maps API"],
    category: "Logistics",
    confidential: true,
    image: "",
    playstoreUrl: "",
    appstoreUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "placeholder-wellness-app",
    title: "Wellness & Fitness App",
    description:
      "Replace this with a short description of the wellness/fitness MVP — features like habit tracking, workout plans, etc.",
    role: "Flutter Developer",
    tech: ["Flutter", "Riverpod", "Firebase"],
    category: "Health & Fitness",
    confidential: true,
    image: "",
    playstoreUrl: "",
    appstoreUrl: "",
    githubUrl: "",
    featured: false,
  },
];

// Categories auto-derived for filter UI — no need to edit manually
export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
