export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://innovation.cuvr.ae/#organization",
    name: "CUVR Innovation Labs",
    alternateName: ["CUVR Innovation", "CUVR"],
    url: "https://innovation.cuvr.ae",
    logo: {
      "@type": "ImageObject",
      url: "https://innovation.cuvr.ae/cuvr.png",
      width: 512,
      height: 512,
    },
    description:
      "CUVR Innovation Labs builds immersive VR platforms for real estate sales and neurological rehabilitation. Our products include PhysioVR for patient recovery and CUVR Realty for virtual property tours.",
    foundingDate: "2021",
    foundingLocation: {
      "@type": "Place",
      name: "United Arab Emirates",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressRegion: "Dubai",
    },
    areaServed: ["AE", "SA", "GB", "US", "SG", "IN"],
    knowsAbout: [
      "Virtual Reality",
      "Real Estate Technology",
      "Neurological Rehabilitation",
      "Spatial Computing",
      "VR Physiotherapy",
      "Immersive Technology",
    ],
    sameAs: [
      "https://www.cuvr.ae",
      "https://realty.cuvr.ae",
    ],
    member: [
      {
        "@type": "Person",
        name: "Nikhil Louis",
        jobTitle: "CEO & Founder",
        worksFor: { "@id": "https://innovation.cuvr.ae/#organization" },
      },
      {
        "@type": "Person",
        name: "Hiba",
        jobTitle: "Lead Architect & Game Designer",
        worksFor: { "@id": "https://innovation.cuvr.ae/#organization" },
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://innovation.cuvr.ae/#website",
    url: "https://innovation.cuvr.ae",
    name: "CUVR Innovation",
    description:
      "Immersive VR platforms for real estate sales and neurological rehabilitation — built in the UAE.",
    publisher: { "@id": "https://innovation.cuvr.ae/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://innovation.cuvr.ae/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwarePhysio = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PhysioVR",
    applicationCategory: "HealthApplication",
    operatingSystem: "VR Headset, Browser, Mobile",
    description:
      "PhysioVR is an immersive VR rehabilitation platform using neural-feedback loops and gamified therapy to accelerate neurological and physical patient recovery.",
    provider: { "@id": "https://innovation.cuvr.ae/#organization" },
    url: "https://www.cuvr.ae",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "0",
    },
    featureList: [
      "Neural-feedback rehabilitation",
      "Gamified physical therapy",
      "Real-time motion tracking",
      "VR immersive environments",
    ],
  };

  const softwareReality = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CUVR Realty",
    applicationCategory: "BusinessApplication",
    operatingSystem: "VR Headset, Browser, Mobile, Tablet",
    description:
      "CUVR Realty delivers photorealistic virtual property tours for real estate developers and agents, enabling remote buyers to experience unbuilt properties in full VR fidelity.",
    provider: { "@id": "https://innovation.cuvr.ae/#organization" },
    url: "https://realty.cuvr.ae",
    featureList: [
      "Photorealistic VR property tours",
      "AI-driven interior customisation",
      "Global remote access",
      "Buyer engagement analytics",
      "Multi-platform deployment",
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does CUVR Innovation do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CUVR Innovation Labs builds immersive VR platforms for two industries: real estate (CUVR Realty — virtual property tours) and healthcare (PhysioVR — neurological rehabilitation). The company is based in the UAE and serves clients globally.",
        },
      },
      {
        "@type": "Question",
        name: "What is PhysioVR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PhysioVR is CUVR's VR rehabilitation platform. It uses gamified, immersive environments and neural-feedback loops to accelerate physical and neurological patient recovery, designed for hospitals and physiotherapy clinics.",
        },
      },
      {
        "@type": "Question",
        name: "What is CUVR Realty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CUVR Realty is a virtual real estate platform that allows property developers and agents to offer photorealistic VR tours of unbuilt or off-plan properties. Buyers can walk through, customise interiors, and experience the space from anywhere in the world.",
        },
      },
      {
        "@type": "Question",
        name: "Where is CUVR Innovation based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CUVR Innovation Labs is headquartered in Dubai, United Arab Emirates, and serves real estate and healthcare clients across the UAE, Saudi Arabia, UK, US, Singapore, and India.",
        },
      },
      {
        "@type": "Question",
        name: "How does CUVR's VR real estate platform work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CUVR Realty converts architectural floor plans and CAD files into photorealistic VR environments. Buyers can tour properties remotely on any device, swap materials and finishes in real time using AI, and agents receive engagement analytics showing buyer behaviour inside the virtual space.",
        },
      },
      {
        "@type": "Question",
        name: "Can VR be used for physiotherapy and rehabilitation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. CUVR's PhysioVR platform uses immersive VR combined with neural-feedback and gamification to make rehabilitation exercises more engaging and effective. Studies show VR-assisted therapy can accelerate recovery for neurological and musculoskeletal conditions.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwarePhysio) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareReality) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
