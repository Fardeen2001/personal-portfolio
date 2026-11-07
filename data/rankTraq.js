export const RANKTRAQ_WEBSITE_URL = "https://ranktraq.com";
export const RANKTRAQ_APP_URL = "https://app.ranktraq.com";

export const rankTraqProject = {
  title: "Rank Traq",
  badge: "Featured · Full Stack · GCP",
  description:
    "A production SEO rank-tracking SaaS I built end-to-end with Claude Code — spanning a marketing site and multi-tenant web app on GCP Cloud Run. Rank Traq helps teams track Google keyword positions, monitor AI Overview citations, sync Search Console data, and buy prepaid credits instead of rigid monthly plans.",
  highlights: [
    "Multi-domain keyword SERP tracking with position history, device/country targeting, and CSV export",
    "Google AI Overviews monitoring with citation parsing and competitor tracking",
    "Search Console OAuth integration with clicks, impressions, and insight dashboards",
    "Prepaid credit wallet, Razorpay checkout, trial credits, and admin credit management",
    "Admin panel for users, scraper providers, proxy pools, and platform analytics",
    "AI agentic blog automation: daily pillar posts and tri-weekly insights via multi-step LLM pipelines",
    "GCP Cloud Run deployment with Cloud Scheduler cron jobs and GitHub Actions CI/CD",
  ],
  techStack: [
    "Next.js",
    "TypeScript",
    "MongoDB",
    "GCP Cloud Run",
    "Cloud Scheduler",
    "Razorpay",
    "Gemini / Groq",
    "Tailwind CSS",
    "Docker",
  ],
  images: [
    {
      src: "/images/project/ranktraq/website-landing.png",
      alt: "Rank Traq marketing website landing page",
    },
    {
      src: "/images/project/ranktraq/website-blog.png",
      alt: "Rank Traq blog with AI-generated SEO content",
    },
    {
      src: "/images/project/ranktraq/app-domains.png",
      alt: "Rank Traq web app domains dashboard",
    },
    {
      src: "/images/project/ranktraq/app-tracking.png",
      alt: "Rank Traq keyword tracking dashboard",
    },
    {
      src: "/images/project/ranktraq/gcp-cloud-run.png",
      alt: "GCP Cloud Run services for Rank Traq",
    },
    {
      src: "/images/project/ranktraq/gcp-scheduler.png",
      alt: "GCP Cloud Scheduler cron jobs for agents and tracking",
    },
  ],
  websiteUrl: RANKTRAQ_WEBSITE_URL,
  appUrl: RANKTRAQ_APP_URL,
};
