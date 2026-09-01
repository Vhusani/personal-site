import type { ProjectDetails, ProjectId } from '@/types';

/**
 * Long-form project detail shown in the project modal.
 *
 * Ported from the previous portfolio at
 * https://vhusani.github.io/personal-site/#portfolio, where each project had
 * its own detail page. `overview` is omitted for projects whose source page
 * carried only a generic filler sentence - those fall back to the project's
 * card summary rather than repeating boilerplate.
 */
export const projectDetails: Record<ProjectId, ProjectDetails> = {
  "thesouthmart": {
    sourceDate: "September 2020 – Present",
    overview: "Thesouthmart is a high performance marketplace linking local suppliers to buyers all over South Africa. With inventory management, smart search with Elasticsearch, and a responsive, scalable design. The platform is built for performance, reliability and modern DevOps practices.",
    stack: [
      ".NET 7/8",
      "Angular 17+",
      "C#",
      "SQL Server",
      "MySQL",
      "PHP",
      "T-SQL",
      "Elasticsearch",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Hangfire",
      "JavaScript",
      "HTML/CSS",
      "Linux VPS",
    ],
    highlights: [
      "Architected and developed the full-stack platform using .NET 7/8, Angular 17+, SQL Server, MySQL, PHP, and T-SQL.",
      "Implemented AI-driven search and product recommendations using NLP-enhanced suggestions and dynamic product tagging with Elasticsearch.",
      "Designed vendor and stock management systems, empowering sellers to manage inventory, listings, and store operations efficiently.",
      "Built a responsive, high-performance frontend capable of handling high traffic and complex product filtering.",
      "Containerized the application with Docker (separate containers for frontend, backend, database, and background services) and managed images through private container registries.",
      "Implemented CI/CD pipelines on GitHub Actions, automating builds, tests, and deployments to production Linux VPS with zero-downtime updates and automated rollbacks.",
      "Leveraged Hangfire for background jobs including automated reports, notifications, and payment reconciliation.",
    ],
    links: [
      { label: "https://thesouthmart.co.za", href: "https://thesouthmart.co.za" },
      { label: "https://dashboard.thesouthmart.co.za", href: "https://dashboard.thesouthmart.co.za" },
    ],
  },
  "tillapos": {
    sourceDate: "2025",
    overview: "TillaPOS is a desktop based point-of-sale application designed for retailers in South Africa and is built upon the existing Thesouthmart platform. It enables shop staff to sell goods face to face, manage inventory, operate a loyalty programme and produce reports on sales, all while continuing to function even if the internet connection fails and then automatically synchronising itself when the connection is restored.",
    stack: [
      "Angular 19",
      "Electron",
      "TypeScript",
      "better-sqlite3 (encrypted)",
      ".NET 7 Web API",
      "MySQL",
      "JWT Auth",
      "Chart.js / ng2-charts",
      "JsBarcode",
      "Docker",
      "electron-builder",
    ],
    highlights: [
      "Built the desktop app with Angular 19 packaged via Electron, shipping as a portable Windows executable (and macOS/Linux builds) through electron-builder.",
      "Designed an offline-first architecture using an encrypted local SQLite store (better-sqlite3) for products, sales, and queued orders, with a sync service that automatically replays pending orders and surfaces failed ones once connectivity returns.",
      "Integrated the app with the existing Thesouthmart .NET 7 API for product catalogue sync, staff authentication (JWT), loyalty points, and accounting — reusing shared backend infrastructure instead of duplicating it.",
      "Implemented the full sell flow: barcode/search-driven product lookup, live basket, split/cash/card payments, and direct thermal receipt printing with barcode generation (JsBarcode).",
      "Built a configurable loyalty programme (earn/redeem rates) and reporting suite — sales summaries, item performance, and slow-mover/dead-stock tracking with Chart.js visualisations.",
      "Added staff/cashier management with role-based access, and a dark-mode UI for low-light retail environments.",
      "The same Angular codebase also builds as a containerized web app (Docker + Nginx) for browser-based deployments alongside the Electron desktop build.",
    ],
    links: [
      { label: "https://tillapos.thesouthmart.co.za", href: "https://tillapos.thesouthmart.co.za/" },
    ],
  },
  "tillapos-website": {
    sourceDate: "2025",
    overview: "This is the landing page for the public marketing site for TillaPOS, a point of sale system for South African retailers. It serves to introduce the product, explain features and pricing, walk the user thorough a demo and FAQs, and ultimately drive users to sign up for the desktop application.",
    stack: [
      "Angular 18",
      "Angular SSR",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Node.js 20",
      "Docker",
    ],
    highlights: [
      "Built a server-side rendered Angular 18 site with an Express server for fast first paint and better SEO on a marketing page.",
      "Styled the entire site with Tailwind CSS, including a responsive hero, feature breakdown, pricing, demo, and FAQ sections.",
      "Containerized the SSR build with a multi-stage Docker image (Node build stage + lightweight Alpine runtime) for simple, repeatable deployment.",
      "Added a WhatsApp contact widget for quick visitor-to-sales conversion.",
    ],
    links: [
      { label: "https://tillapos.thesouthmart.co.za", href: "https://tillapos.thesouthmart.co.za/" },
    ],
  },
  "thesouthmart-news": {
    sourceDate: "2025",
    overview: "Thesouthmart News is the news section of the marketplace that covers the latest articles on collecting and trading collectibles, watches, jewellery, coins, art, updates on the marketplace itself, and advice on how to trade safely. It serves as an SEO resource and an article that draws traffic back to the marketplace.",
    stack: [
      "WordPress",
      "PHP",
      "MySQL",
      "Blogarise Theme",
    ],
    highlights: [
      "Set up and configured a self-hosted WordPress site using the Blogarise theme, customizing branding and navigation to match the Thesouthmart marketplace.",
      "Tied site navigation back into core marketplace actions, browsing, selling, and the \"Secure My Deal\" buyer protection feature — to drive traffic between the content site and the main platform.",
      "Managed hosting and DNS for the site alongside the other Thesouthmart properties (marketplace, POS) on shared infrastructure.",
      "Shaped content strategy around niche collectible categories to support the marketplace's SEO and brand positioning.",
    ],
    links: [
      { label: "https://news.thesouthmart.co.za", href: "https://news.thesouthmart.co.za/" },
    ],
  },
  "cc-dashboard": {
    sourceDate: "February 2024 – November 2025",
    overview: "A full rebuild of the user dashboard to improve how orders, loans, and laybys are managed across Cash Crusaders stores in South Africa. The new system replaced an older version that frequently crashed and required heavy maintenance, delivering a stable and scalable platform for store staff nationwide.",
    stack: [
      "C#",
      ".NET 7",
      "Angular 16",
      "TypeScript",
      "Dapper ORM",
      "OAuth2 / IdentityServer4",
      "Docker",
      "CI/CD Bitbucket Pipelines",
      "IIS",
    ],
    highlights: [
      "Set up and structured the frontend using Angular 16, including project scaffolding and architecture.",
      "Built core features for the Accounts and Layby modules on both the frontend and backend.",
      "Integrated OAuth2 authentication with IdentityServer4 to manage user profiles and access control.",
      "Developed RESTful APIs with .NET 7 and Dapper ORM for fast, efficient data access.",
      "Worked closely with designers and developers to align UI components with functional requirements.",
      "Containerized the application with Docker and contributed to CI/CD pipeline setup via Bitbucket Pipelines.",
      "Delivered a stable, scalable dashboard that significantly reduced maintenance overhead and simplified the loan process for store staff across South Africa.",
    ],
    links: [
      { label: "http://dashboard.cashcrusaders.co.za", href: "http://dashboard.cashcrusaders.co.za" },
    ],
  },
  "cash2cache": {
    sourceDate: "August 2022 – June 2023",
    overview: "Cash2Cache is a fintech platform designed to streamline cash collection and management processes for businesses, ensuring secure and efficient handling of physical cash. The system integrates with in-transit cash operations, user safes, and various hardware devices such as money counters and automated safes, providing accurate tracking of cash from source to collection points.",
    stack: [
      "PHP",
      "Slim Framework",
      "Angular",
      "Ionic",
      "TypeScript",
      "Docker",
      "MySQL",
    ],
    highlights: [
      "Contributed to feature development and system enhancements working as a junior developer under guidance from senior management.",
      "Built features to track cash collections from user safes to in-transit collection points, improving security and operational transparency.",
      "Developed and integrated hardware interfaces — including money safes and cash counters — using available APIs to automate and validate cash handling processes.",
      "Worked on both the frontend and backend using PHP (Slim Framework), Angular, Ionic, and Docker for containerized deployments.",
      "Collaborated with the team to deliver secure, reliable, and maintainable features for daily cash operations across multiple platforms and devices.",
      "Supported testing and deployment processes to ensure features worked seamlessly across devices and environments.",
    ],
    links: [
      { label: "https://paysolutions.co.za/cash2cache", href: "https://paysolutions.co.za/cash2cache" },
      { label: "https://www.cash2cache.co.za", href: "https://www.cash2cache.co.za" },
    ],
  },
  "dotnet-api": {
    sourceDate: "01 Feb, 2025",
    stack: [
      "C#",
      "MySQL",
    ],
    highlights: [],
    links: [
      { label: "https://github.com/Vhusani/dotnetwebapi", href: "https://github.com/Vhusani/dotnetwebapi" },
    ],
  },
  "survey-app": {
    sourceDate: "September, 2022",
    overview: "This project was a test initiative built using Angular 13, designed to integrate with a NoSQL database. Its primary function is to capture user responses and store them in the database.",
    stack: [
      "Angular",
      "Typescript",
      "NoSQL",
      "Firebase",
    ],
    highlights: [],
    links: [
      { label: "https://vhusani.github.io/my-survey-app/", href: "https://vhusani.github.io/my-survey-app/" },
    ],
  },
  "snake-bite": {
    sourceDate: "August, 2017",
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Notepad ++",
    ],
    highlights: [],
    links: [
      { label: "https://vhusani.github.io/vhusanis-snake-bite-game/", href: "https://vhusani.github.io/vhusanis-snake-bite-game/" },
    ],
  },
  "digital-lab": {
    sourceDate: "November, 2018",
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Visual Studio Code",
    ],
    highlights: [],
    links: [
      { label: "https://vhusani.github.io/digital_lab/index.html", href: "https://vhusani.github.io/digital_lab/index.html" },
    ],
  },
  "cube": {
    sourceDate: "November, 2019",
    stack: [
      "T-SQL",
      "Microsoft SQL Server Management Studio",
    ],
    highlights: [],
    links: [
      { label: "https://github.com/Vhusani/Services-intergration_Reports_Cube_Rollup/blob/gh-pages/Cube/Cube%26Rollup.sql", href: "https://github.com/Vhusani/Services-intergration_Reports_Cube_Rollup/blob/gh-pages/Cube/Cube%26Rollup.sql" },
    ],
  },
  "database-scripts": {
    sourceDate: "November, 2019",
    stack: [
      "T-SQL",
      "Microsoft SQL Server Management Studio",
    ],
    highlights: [],
    links: [
      { label: "https://github.com/Vhusani/Services-intergration_Reports_Cube_Rollup/blob/gh-pages/Database/DBA.sql", href: "https://github.com/Vhusani/Services-intergration_Reports_Cube_Rollup/blob/gh-pages/Database/DBA.sql" },
    ],
  },
};
