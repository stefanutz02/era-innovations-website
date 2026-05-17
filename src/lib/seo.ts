// src/lib/seo.ts
export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: "website" | "article" | "product" | "business.business";
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: object | object[];
  alternateLangs?: { lang: string; url: string }[];
  articleMeta?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const BASE_URL = "https://erainnovations.ro";
const DEFAULT_IMAGE = `${BASE_URL}/assets/og-image.webp`; // WebP optimized
const FALLBACK_IMAGE = `${BASE_URL}/assets/og-image.png`; // PNG fallback
const SITE_NAME = "ERA Innovations";
const TWITTER_HANDLE = "@erainnovations"; // update if you have one

// Localized site descriptions for SEO
const SITE_DESCRIPTIONS = {
  ro: "ERA Innovations — companie de software din Piatra-Neamț. Construim aplicații web, mobile (iOS & Android), SaaS, automatizări și API-uri pentru afaceri din România și internațional.",
  en: "ERA Innovations — software company from Piatra-Neamț, Romania. We build web apps, mobile apps (iOS & Android), SaaS, automations and APIs for businesses in Romania and worldwide."
};

export function updateSEO(config: SEOConfig): void {
  if (typeof document === "undefined") return;

  const lang = document.documentElement.lang || "ro";
  
  // Title - optimized length (50-60 chars ideal)
  const fullTitle = config.title.length > 60 
    ? config.title 
    : `${config.title} | ERA Innovations`;
  document.title = fullTitle;

  // Helper to set/create meta
  const setMeta = (selector: string, attr: string, value: string) => {
    let el = document.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = document.createElement("meta");
      const [attrName, attrVal] = attr.split("=");
      el.setAttribute(attrName.replace(/[[\]]/g, ""), attrVal?.replace(/['"]/g, "") || "");
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  };

  // Helper for link
  const setLink = (rel: string, href: string, extraAttrs?: Record<string, string>) => {
    let selector = `link[rel="${rel}"]`;
    if (extraAttrs?.hreflang) selector += `[hreflang="${extraAttrs.hreflang}"]`;

    let existing = document.querySelector<HTMLLinkElement>(selector);
    if (!existing) {
      const created = document.createElement("link");
      created.rel = rel;
      if (extraAttrs) {
        Object.entries(extraAttrs).forEach(([k, v]) => created.setAttribute(k, v));
      }
      document.head.appendChild(created);
      existing = created;
    }
    existing.href = href;
  };

  document.querySelectorAll('meta[data-dynamic-seo]').forEach(el => el.remove());

  const addDynamicMeta = (attrs: Record<string, string>) => {
    const el = document.createElement("meta");
    el.setAttribute("data-dynamic-seo", "true");
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  };

  // Primary meta
  setMeta('meta[name="description"]', 'name="description"', config.description);
  
  // Keywords if provided
  if (config.keywords) {
    setMeta('meta[name="keywords"]', 'name="keywords"', config.keywords);
  }

  // Robots
  const robotsContent = [
    config.noIndex ? "noindex" : "index",
    config.noFollow ? "nofollow" : "follow",
    "max-snippet:-1",
    "max-image-preview:large",
    "max-video-preview:-1"
  ].join(", ");
  setMeta('meta[name="robots"]', 'name="robots"', robotsContent);

  // Canonical
  if (config.canonical) {
    setLink("canonical", `${BASE_URL}${config.canonical}`);
  }

  // Open Graph
  const ogTitle = config.ogTitle || config.title;
  const ogDesc = config.ogDescription || config.description;
  const ogImage = config.ogImage || DEFAULT_IMAGE;
  const ogUrl = config.ogUrl ? `${BASE_URL}${config.ogUrl}` : BASE_URL;
  const ogType = config.ogType || "website";

  addDynamicMeta({ property: "og:title", content: ogTitle });
  addDynamicMeta({ property: "og:description", content: ogDesc });
  addDynamicMeta({ property: "og:image", content: ogImage });
  addDynamicMeta({ property: "og:image:width", content: "1200" });
  addDynamicMeta({ property: "og:image:height", content: "630" });
  addDynamicMeta({ property: "og:image:alt", content: ogTitle });
  addDynamicMeta({ property: "og:image:type", content: "image/webp" });
  addDynamicMeta({ property: "og:url", content: ogUrl });
  addDynamicMeta({ property: "og:site_name", content: SITE_NAME });
  addDynamicMeta({ property: "og:type", content: ogType });
  addDynamicMeta({ property: "og:locale", content: lang === "ro" ? "ro_RO" : "en_US" });

  // Twitter/X Cards
  addDynamicMeta({ name: "twitter:card", content: "summary_large_image" });
  addDynamicMeta({ name: "twitter:site", content: TWITTER_HANDLE });
  addDynamicMeta({ name: "twitter:creator", content: TWITTER_HANDLE });
  addDynamicMeta({ name: "twitter:title", content: ogTitle });
  addDynamicMeta({ name: "twitter:description", content: ogDesc });
  addDynamicMeta({ name: "twitter:image", content: ogImage });
  addDynamicMeta({ name: "twitter:image:alt", content: ogTitle });

  // Article specific meta
  if (config.articleMeta) {
    if (config.articleMeta.publishedTime) {
      addDynamicMeta({ property: "article:published_time", content: config.articleMeta.publishedTime });
    }
    if (config.articleMeta.modifiedTime) {
      addDynamicMeta({ property: "article:modified_time", content: config.articleMeta.modifiedTime });
    }
    if (config.articleMeta.author) {
      addDynamicMeta({ property: "article:author", content: config.articleMeta.author });
    }
    if (config.articleMeta.section) {
      addDynamicMeta({ property: "article:section", content: config.articleMeta.section });
    }
    if (config.articleMeta.tags) {
      config.articleMeta.tags.forEach(tag => {
        addDynamicMeta({ property: "article:tag", content: tag });
      });
    }
  }

  if (config.alternateLangs) {
    config.alternateLangs.forEach(alt => {
      setLink("alternate", alt.url, { hreflang: alt.lang });
    });
    setLink("alternate", ogUrl, { hreflang: "x-default" });
  }

  setMeta('meta[name="theme-color"]', 'name="theme-color"', "#0a0a0f");
  setMeta('meta[name="msapplication-TileColor"]', 'name="msapplication-TileColor"', "#0a0a0f");
}

export function addJsonLd(data: object | object[]): void {
  if (typeof document === "undefined") return;
  
  document.querySelectorAll('script[type="application/ld+json"][data-dynamic]').forEach((el) => el.remove());
  
  const scripts = Array.isArray(data) ? data : [data];
  
  scripts.forEach(item => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-dynamic", "true");
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}

export function generateOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "ERA Innovations",
    alternateName: "MONKEYLAB ART S.R.L.",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/assets/logo.png`,
      width: 512,
      height: 512
    },
    image: `${BASE_URL}/assets/og-image.webp`,
    description: SITE_DESCRIPTIONS.ro,
    sameAs: [
      "https://www.instagram.com/erainnovations.ro/",
      "https://www.tiktok.com/@erainnovations.ro",
      "https://www.facebook.com/erainnovations"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Piatra-Neamț",
      addressRegion: "Neamț",
      addressCountry: "RO"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40-771-424-077",
      contactType: "customer service",
      email: "hello@erainnovations.ro",
      availableLanguage: ["Romanian", "English", "French"]
    },
    foundingDate: "2025",
    founders: [
      {
        "@type": "Person",
        name: "Bogdan Cosma"
      }
    ]
  };
}

export function generateLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "ERA Innovations",
    image: `${BASE_URL}/assets/og-image.webp`,
    url: BASE_URL,
    telephone: "+40-771-424-077",
    email: "hello@erainnovations.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aleea Ulmilor 32",
      addressLocality: "Piatra-Neamț",
      addressRegion: "Neamț",
      postalCode: "610280",
      addressCountry: "RO"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.9292",
      longitude: "26.3705"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: ["Romania", "International"]
    },
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "SaaS Development",
      "Custom Software",
      "API Development",
      "Technical Consulting"
    ]
  };
}

export function generateWebSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "ERA Innovations",
    description: SITE_DESCRIPTIONS.ro,
    publisher: {
      "@id": `${BASE_URL}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`
    }))
  };
}

// Helper to set all default schemas on any page
export function setDefaultSchemas(): void {
  addJsonLd([
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema()
  ]);
}