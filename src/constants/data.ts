import { Code2, Cog, Server } from "lucide-react";

export const SITE_DATA = {
  name: "Brajlabs",
  headline: "Resilient software for scaling startups.",
  subheadline: "Get your product to market faster, eliminate technical debt, and automate manual business friction. Built by elite developers, engineered for clear outcomes.",
  navLinks: [
    { label: "Our Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Philosophy", href: "#philosophy" },
  ],
  capabilities: [
    {
      title: "Custom Web Applications",
      description: "Next.js architectures, complex internal tools, high-performance dashboards built to scale.",
      icon: Code2
    },
    {
      title: "Backend & Automation Pipelines",
      description: "Python-driven automation, API integrations, data processing engines, and workflow optimization.",
      icon: Cog
    },
    {
      title: "Performance Engineering",
      description: "Eliminating technical debt, database query optimization, legacy code cleanup, and infrastructure scaling.",
      icon: Server
    }
  ],
  caseStudies: [
    {
      id: "01",
      title: "Video Transcription Infrastructure",
      challenge: "Client faced high operational API costs and massive processing bottlenecks with standard video processing setups.",
      strategy: "Deployed a custom pipeline leveraging highly optimized FFmpeg layers and dynamic endpoint scaling.",
      outcome: "Reduced processing time by 60% and cut infrastructure overhead by 40%.",
    },
    {
      id: "02",
      title: "Enterprise Internal Dashboard",
      challenge: "Legacy systems were slow, causing a 30-second delay in fetching core business metrics.",
      strategy: "Re-architected the frontend using Next.js with server-side rendering and optimized SQL queries.",
      outcome: "Achieved sub-second load times and increased team productivity by 25%.",
    },
    {
      id: "03",
      title: "Global Supply Chain Automation",
      challenge: "Manual data entry and disjointed APIs led to frequent errors and delayed shipments.",
      strategy: "Built a centralized Python microservice architecture to automate cross-platform data synchronization.",
      outcome: "Eliminated manual entry errors entirely and processed 10,000+ daily orders seamlessly.",
    }
  ]
};
