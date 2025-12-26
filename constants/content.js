export const content = {
  nav: {
    logo: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Get Started",
  },
  hero: {
    headline: "Build something amazing",
    subheadline: "The all-in-one platform for modern teams",
    description:
      "Streamline your workflow, collaborate seamlessly, and ship faster with our powerful suite of tools.",
    cta: "Get Started",
    ctaSecondary: "Watch Demo",
  },
  trustedBy: {
    title: "Trusted by leading companies",
    logos: [
      "Company 1",
      "Company 2",
      "Company 3",
      "Company 4",
      "Company 5",
      "Company 6",
    ],
  },
  features: {
    title: "Everything you need to succeed",
    subtitle: "Powerful features designed for modern teams",
    items: [
      {
        title: "Real-time Collaboration",
        description:
          "Work together seamlessly with real-time updates and instant notifications.",
        icon: "MessageSquare",
        size: "large", // For bento grid
      },
      {
        title: "Advanced Analytics",
        description: "Get insights into your team's performance and productivity.",
        icon: "BarChart",
        size: "medium",
      },
      {
        title: "Secure & Private",
        description:
          "Enterprise-grade security to keep your data safe and compliant.",
        icon: "Shield",
        size: "medium",
      },
      {
        title: "Custom Integrations",
        description:
          "Connect with your favorite tools and automate your workflow.",
        icon: "Plug",
        size: "small",
      },
      {
        title: "Mobile First",
        description: "Access everything you need from any device, anywhere.",
        icon: "Smartphone",
        size: "small",
      },
      {
        title: "24/7 Support",
        description:
          "Get help whenever you need it with our dedicated support team.",
        icon: "Headphones",
        size: "small",
      },
    ],
  },
  pricing: {
    title: "Simple, transparent pricing",
    subtitle: "Choose the plan that's right for you",
    toggle: {
      monthly: "Monthly",
      yearly: "Yearly",
      savings: "Save 20%",
    },
    plans: [
      {
        name: "Starter",
        price: { monthly: 29, yearly: 24 },
        description: "Perfect for individuals and small teams",
        features: [
          "Up to 5 team members",
          "10GB storage",
          "Basic integrations",
          "Email support",
          "Mobile app access",
        ],
        cta: "Get Started",
        popular: false,
      },
      {
        name: "Professional",
        price: { monthly: 99, yearly: 79 },
        description: "For growing teams and businesses",
        features: [
          "Up to 25 team members",
          "100GB storage",
          "Advanced integrations",
          "Priority support",
          "Mobile app access",
          "Advanced analytics",
          "Custom workflows",
        ],
        cta: "Get Started",
        popular: true,
      },
      {
        name: "Enterprise",
        price: { monthly: 299, yearly: 239 },
        description: "For large organizations",
        features: [
          "Unlimited team members",
          "Unlimited storage",
          "All integrations",
          "24/7 phone support",
          "Mobile app access",
          "Advanced analytics",
          "Custom workflows",
          "Dedicated account manager",
          "SLA guarantee",
        ],
        cta: "Contact Sales",
        popular: false,
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know",
    items: [
      {
        question: "How does the free trial work?",
        answer:
          "You get full access to all features for 14 days. No credit card required. Cancel anytime during the trial.",
      },
      {
        question: "Can I change plans later?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
      },
      {
        question: "Is there a setup fee?",
        answer:
          "No, there are no setup fees. You only pay for your chosen plan.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 30-day money-back guarantee. Contact support for a full refund.",
      },
      {
        question: "How secure is my data?",
        answer:
          "We use enterprise-grade encryption and follow industry best practices. Your data is stored securely and backed up regularly.",
      },
    ],
  },
  footer: {
    newsletter: {
      title: "Stay updated",
      description: "Get the latest news and updates delivered to your inbox.",
      placeholder: "Enter your email",
      button: "Subscribe",
    },
    links: {
      product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Integrations", href: "#integrations" },
      ],
      company: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" },
      ],
      resources: [
        { label: "Documentation", href: "#docs" },
        { label: "Support", href: "#support" },
        { label: "API", href: "#api" },
      ],
      legal: [
        { label: "Privacy", href: "#privacy" },
        { label: "Terms", href: "#terms" },
        { label: "Security", href: "#security" },
      ],
    },
    copyright: "© 2024 Product. All rights reserved.",
  },
};
