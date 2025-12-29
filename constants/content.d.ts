export declare const content: {
  nav: {
    logo: string;
    links: Array<{ label: string; href: string }>;
    cta: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    cta: string;
    ctaSecondary: string;
  };
  stats: {
    title: string;
    items: Array<{
      value: number;
      suffix: string;
      label: string;
      description: string;
      percentage: number;
    }>;
  };
  trustedBy: {
    title: string;
    logos: string[];
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
      size: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    toggle: {
      monthly: string;
      yearly: string;
      savings: string;
    };
    plans: Array<{
      name: string;
      price: { monthly: number; yearly: number };
      description: string;
      features: string[];
      cta: string;
      popular: boolean;
    }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      company: string;
      avatar: string;
      rating: number;
      quote: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    toggle: {
      monthly: string;
      yearly: string;
      savings: string;
    };
    plans: Array<{
      name: string;
      price: { monthly: number; yearly: number };
      description: string;
      features: string[];
      cta: string;
      popular: boolean;
    }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    ctaSecondary: string;
    urgency: {
      text: string;
      countdown: boolean;
    };
  };
  footer: {
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      button: string;
    };
    links: {
      product: Array<{ label: string; href: string }>;
      company: Array<{ label: string; href: string }>;
      resources: Array<{ label: string; href: string }>;
      legal: Array<{ label: string; href: string }>;
    };
    copyright: string;
  };
};
