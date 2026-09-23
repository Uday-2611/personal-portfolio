export const portfolio = {
  email: "udayagarwal234@gmail.com",
  github: "https://github.com/Uday-2611",
  linkedin: "https://www.linkedin.com/in/uday-agarwal/",
  projects: [
    {
      title: "Personal Portfolio",
      description:
        "A deliberately minimal home for my work, background, and current direction.",
      year: "2026",
      href: "https://github.com/Uday-2611/personal-portfolio",
      external: true,
    },
    {
      title: "Project archive",
      description:
        "Experiments, applications, and works in progress collected on GitHub.",
      year: "Ongoing",
      href: "https://github.com/Uday-2611?tab=repositories",
      external: true,
    },
    {
      title: "Next case study",
      description:
        "A focused walkthrough of the problem, the process, and what shipped.",
      year: "Soon",
      href: "mailto:udayagarwal234@gmail.com?subject=Tell%20me%20about%20your%20work",
      external: false,
    },
  ],
  experience: [
    {
      role: "Independent developer",
      company: "Personal & collaborative projects",
      period: "Present",
      description:
        "Designing and building web products end to end, with an emphasis on clear interfaces, maintainable systems, and learning through shipping.",
    },
    {
      role: "Open-source contributor",
      company: "GitHub",
      period: "Ongoing",
      description:
        "Exploring codebases, documenting decisions, and contributing improvements where they can be useful.",
    },
  ],
  education: {
    degree: "Education details",
    institution: "Add degree and institution in the next content pass",
    period: "—",
    description:
      "This section is ready for your exact program, institution, dates, and one useful line of context.",
  },
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Product UI",
    "Git",
  ],
} as const;
