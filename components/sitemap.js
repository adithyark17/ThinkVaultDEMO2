/* 15-page sitemap — content architecture per ThinkVault developer checklist.
   Any new top-level page requires separate approval. */

export const PAGES = {
  home: { num: "01", title: "Home", href: "/", purpose: "Brand story, positioning, core value proposition" },
  about: { num: "02", title: "About ThinkVault", href: "/about", purpose: "Vision, philosophy, AI Sovereignty" },
  aiInfrastructure: { num: "03", title: "AI Infrastructure", href: "/ai-infrastructure", purpose: "Core infrastructure offering" },
  aiCloud: { num: "04", title: "AI Cloud", href: "/ai-cloud", purpose: "Cloud / compute capabilities" },
  aiModels: { num: "05", title: "AI Models", href: "/ai-models", purpose: "Open-weight models, model selection, deployment" },
  aiPlatform: { num: "06", title: "AI Platform / Stack", href: "/ai-platform", purpose: "Explain the Purpose-Built AI Stack" },
  managedServices: { num: "07", title: "Managed AI Services", href: "/managed-ai-services", purpose: "Deployment, optimization, management" },
  aiSolutions: { num: "08", title: "AI Solutions", href: "/ai-solutions", purpose: "End-to-end business use cases" },
  industries: { num: "09", title: "Industries", href: "/industries", purpose: "Industry-specific AI applications" },
  aiSovereignty: { num: "10", title: "AI Sovereignty", href: "/ai-sovereignty", purpose: "ThinkVault's differentiated thought leadership" },
  resources: { num: "11", title: "Resources", href: "/resources", purpose: "Blogs, insights, reports, guides" },
  caseStudies: { num: "12", title: "Case Studies", href: "/case-studies", purpose: "Proof of capability — coming soon initially" },
  partners: { num: "13", title: "Partners / Ecosystem", href: "/partners", purpose: "Technology and strategic partnerships" },
  contact: { num: "14", title: "Contact / Talk to an Expert", href: "/contact", purpose: "Primary conversion page" },
  careers: { num: "15", title: "Careers", href: "/careers", purpose: "Hiring and employer brand" },
};

export const NAV = [
  {
    label: "AI Infrastructure",
    items: [PAGES.aiInfrastructure, PAGES.aiCloud, PAGES.aiModels, PAGES.aiPlatform, PAGES.managedServices],
  },
  {
    label: "Solutions",
    items: [PAGES.aiSolutions, PAGES.industries],
  },
  {
    label: "ThinkVault",
    items: [PAGES.about, PAGES.aiSovereignty, PAGES.partners, PAGES.careers],
  },
  {
    label: "Resources",
    items: [PAGES.resources, PAGES.caseStudies],
  },
];

export const STACK_LAYERS = [
  { page: PAGES.aiInfrastructure, tag: "Compute · Network · Storage" },
  { page: PAGES.aiCloud, tag: "Cloud / compute capabilities" },
  { page: PAGES.aiModels, tag: "Open-weight model library" },
  { page: PAGES.aiPlatform, tag: "The Purpose-Built AI Stack" },
  { page: PAGES.managedServices, tag: "Deploy · Optimize · Manage" },
];
