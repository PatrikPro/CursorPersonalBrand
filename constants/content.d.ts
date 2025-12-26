export declare const content: {
  nav: {
    links: Array<{ label: string; href: string }>;
  };
  hero: {
    headline: string;
    cta: string;
    socialProof: string[];
  };
  results: {
    title: string;
    stats: Array<{
      label: string;
      value: string;
      description: string;
    }>;
  };
  portfolio: {
    title: string;
    items: Array<{
      title: string;
      client: string;
      description: string;
      category: string;
    }>;
  };
  process: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      email: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
      submit: string;
    };
  };
};

