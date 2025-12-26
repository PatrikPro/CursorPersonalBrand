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
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
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
