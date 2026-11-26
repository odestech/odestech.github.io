/**
 * English copy. zh.ts must match this shape (it is typed as Dict).
 *
 * Rule for every claim on this site: it must be something ODES can show a
 * buyer on the first enquiry. Copy from the earlier Manus draft that could not
 * be verified (FDA registration / 510(k) filing, cold chain, a US field team,
 * "100% compliance", years-of-experience and team-credential figures) was
 * deliberately left out. Add such claims back only with evidence.
 */

import type { Lang } from "../site";

const en = {
  lang: "en" as Lang,
  htmlLang: "en",
  ogLocale: "en_US",
  skip: "Skip to content",
  menu: { open: "Open menu", close: "Close menu" },
  motto: "Overseas · Dedicated · Excellent · Synergistic",
  cta: "Send an Enquiry",

  nav: [
    { key: "about", label: "About", sub: "WHO WE ARE", desc: "Company, values and registered details" },
    { key: "business", label: "Core Business", sub: "HOW WE WORK", desc: "Two sectors, five steps from enquiry to shipment" },
    { key: "pharma", label: "Pharma", sub: "LIFE SCIENCES", desc: "APIs, excipients, medical consumables, packaging" },
    { key: "energy", label: "Energy & Chemicals", sub: "REFINING", desc: "Catalysts, process chemicals, valves, pumps, seals" },
    { key: "contact", label: "Contact", sub: "GET IN TOUCH", desc: "Email, phone and the enquiry form" },
  ],

  common: {
    home: "Home",
    viewScope: "View product scope",
    faqEyebrow: "FAQ",
    faqTitle: "Questions buyers ask first",
    labels: {
      contact: "Contact",
      phone: "Phone",
      email: "Email",
      address: "Address",
      linkedin: "LinkedIn",
    },
    ctaBand: {
      title: "Have a specification ready?",
      body: "Send the product name or CAS number, the grade, the quantity and your destination port. A complete enquiry is normally quoted within one business day.",
      button: "Send an Enquiry",
      email: "or email info@odestech.cn",
    },
  },

  footer: {
    tagline: "China sourcing and export for refining, chemicals and pharma",
    sectors: "Sectors",
    company: "Company",
    contact: "Contact",
    rights: "Shanghai Odes Technology Co., Ltd. All rights reserved.",
  },

  facts: [
    { value: "2", label: "Sectors", sub: "Pharma & life sciences · Energy, chemicals & materials" },
    { value: "1", label: "Business day", sub: "Normal quotation time for a complete enquiry" },
    { value: "3", label: "Inspection bodies", sub: "SGS · Bureau Veritas · TÜV, where required" },
    { value: "1", label: "Named counterpart", sub: "Per account, from enquiry to delivery" },
  ],

  sectors: {
    eyebrow: "TWO SECTORS",
    title: "Two sectors. One way of working.",
    sub: "Both sectors run on the same base: qualified Chinese manufacturers, a specification review before any quotation goes out, export documents written for the destination market, and third-party inspection before the goods leave.",
    cards: [
      {
        key: "pharma",
        title: "Pharma & Life Sciences",
        tag: "APIs · CONSUMABLES · PACKAGING",
        desc: "Active pharmaceutical ingredients, excipients, medical consumables and pharmaceutical packaging, with the compendial grade fixed before a price is issued.",
        items: [
          "APIs & key starting materials",
          "Pharmaceutical excipients",
          "Medical consumables & devices",
          "Primary & secondary packaging",
          "CoA, GMP status, DMF / CEP references",
          "Technology transfer support",
        ],
        img: "pharma",
        alt: "Technicians in protective suits pouring a liquid sample in a laboratory",
      },
      {
        key: "energy",
        title: "Energy, Chemicals & Materials",
        tag: "CATALYSTS · CHEMICALS · SPARES",
        desc: "Refining catalysts, process chemicals and functional materials, plus the valves, pumps and seals that keep refinery and petrochemical units running.",
        items: [
          "Hydrotreating, FCC & reforming catalysts",
          "Crude & unit processing aids",
          "Amine solvents & desulphurisation",
          "Water treatment chemicals",
          "Fuel & lubricant additives",
          "Valves, pumps, seals & plant spares",
        ],
        img: "energy",
        alt: "Aerial view of a refinery with distillation columns and process units",
      },
    ],
    badgesTitle: "Standards and documents we work to",
    badges: [
      "SDS / GHS",
      "UN dangerous goods",
      "EN 10204 3.1 / 3.2",
      "USP · EP · JP · ChP",
      "REACH · US TSCA",
      "API 6D · 610 · 682",
      "ASME B16.5",
      "SGS · BV · TÜV",
    ],
  },

  services: {
    eyebrow: "WHAT WE DO",
    title: "Four service lines. One counterparty.",
    sub: "From the first enquiry to the container leaving port, one team handles the supplier, the specification and the paperwork.",
    items: [
      {
        icon: "search",
        tag: "SOURCING",
        title: "Supplier Qualification & Sourcing",
        headline: "Your specification matched to a qualified manufacturer — not to whatever is in stock.",
        body: "We identify and qualify Chinese manufacturers for each grade, audit factories where needed, and confirm what each one can document before you receive a price.",
        bullets: [
          "Qualified supplier development",
          "Factory audits",
          "Specification review against the standard you cite",
          "Consolidated procurement and spare-parts consignment",
        ],
      },
      {
        icon: "shield",
        tag: "DOCUMENTS",
        title: "Export Documentation & Compliance",
        headline: "The document list is settled at the enquiry stage, not after shipment.",
        body: "Which documents a shipment needs depends on the product and the destination. We fix that list before quoting and prepare the documents your importer's customs broker will ask for.",
        bullets: [
          "SDS authoring and GHS labelling",
          "UN dangerous goods classification and export packaging certification",
          "EN 10204 3.1 / 3.2 material certificates",
          "Certificates of origin and legalised documents",
        ],
      },
      {
        icon: "truck",
        tag: "LOGISTICS",
        title: "Inspection & Shipment",
        headline: "Checked before it leaves. Shipped as dangerous goods or general cargo.",
        body: "Third-party inspection is arranged when the buyer or the destination market requires it, then we organise cross-border logistics for hazardous and general cargo on the Incoterms you ask for.",
        bullets: [
          "Pre-shipment inspection by SGS, BV or TÜV",
          "Hazardous and general cargo",
          "Consolidated shipments",
          "Quoted on your Incoterms and destination port",
        ],
      },
      {
        icon: "flask",
        tag: "TECHNICAL",
        title: "Technical & Regulatory Support",
        headline: "A technical reading of the specification before a commercial answer.",
        body: "Specification review against API, ASME and pharmacopoeia standards, market-access support for REACH and the US TSCA inventory, and pharmaceutical technology consulting.",
        bullets: [
          "Review against API 6D, API 610, API 682 and ASME B16.5",
          "Compendial grade fixed up front: USP, EP, JP or ChP",
          "REACH and US TSCA inventory market-access support",
          "Pharmaceutical technology consulting and technology transfer support",
        ],
      },
    ],
  },

  process: {
    eyebrow: "HOW WE WORK",
    title: "From enquiry to shipment in five steps.",
    sub: "The same sequence for a single drum of additive or a repeat API supply arrangement.",
    steps: [
      { title: "Enquiry", body: "Product name or CAS number, specification, quantity, destination port and Incoterms." },
      { title: "Sourcing", body: "We match the specification against qualified manufacturers rather than resell whatever is in stock." },
      { title: "Quotation", body: "A complete enquiry is normally quoted within one business day." },
      { title: "Documentation", body: "SDS and GHS labelling, dangerous goods classification and packaging certification, material certificates, certificates of origin." },
      { title: "Inspection & shipment", body: "Third-party inspection where required, then cross-border logistics for hazardous or general cargo." },
    ],
  },

  why: {
    eyebrow: "WHY ODES",
    title: "Commitments you can check on the first enquiry.",
    sub: "No adjectives — these are the things a buyer sees in the first quotation and the first shipment.",
    bigNum: "1",
    bigLabel: "business day to quote a complete enquiry",
    items: [
      { icon: "target", title: "Specification first", body: "Grade, standard and key properties are fixed before a price goes out, so the quotation you compare is for the product you actually need." },
      { icon: "shield", title: "Straight answers on filings", body: "We do not hold manufacturers' regulatory filings. We find out which manufacturer holds which DMF, CEP or certificate, and get it confirmed in writing before quoting." },
      { icon: "briefcase", title: "A named counterpart", body: "Every account has one named contact who follows the order from enquiry to delivery — not a shared inbox." },
      { icon: "globe", title: "Built for overseas buyers", body: "Documents follow your market's standards, not domestic habits." },
      { icon: "search", title: "Inspected before shipment", body: "Where the buyer or the market requires it, SGS, Bureau Veritas or TÜV inspect the goods before they leave China." },
      { icon: "network", title: "Long-term supply", body: "We build repeat supply arrangements, not one-off trades: the same qualified source and the same documents, batch after batch." },
    ],
  },

  pages: {
    home: {
      meta: {
        title: "Refinery Chemicals, APIs & Plant Spares from China | ODES",
        description:
          "Shanghai-based ODES sources refinery catalysts, process chemicals, APIs and plant spares from qualified Chinese manufacturers, export documents included.",
      },
      hero: {
        eyebrow: "SHANGHAI · CHINA SOURCING & EXPORT",
        line1: "China sourcing for",
        line2: "refinery chemicals, APIs",
        line3: "and plant spares.",
        sub: "ODES (Shanghai Odes Technology Co., Ltd.) qualifies Chinese manufacturers, reviews your specification before quoting, and prepares the export documents your importer will ask for — for refiners, chemical plants, pharmaceutical companies and procurement agents in the United States and other high-standard markets.",
        primary: "Explore the two sectors",
        secondary: "Send an Enquiry",
      },
      faq: [
        {
          q: "What does ODES do?",
          a: "ODES (Shanghai Odes Technology Co., Ltd.) is a Shanghai-based trading and technical services company. It sources pharmaceutical products, refinery and process chemicals, and plant spare parts from qualified Chinese manufacturers and exports them to buyers in the United States and other markets, with export documentation and third-party inspection included.",
        },
        {
          q: "Which products can ODES source from China?",
          a: "Two sectors. Pharma and life sciences: APIs and key starting materials, excipients, medical consumables and pharmaceutical packaging. Energy, chemicals and materials: hydrotreating, FCC and reforming catalysts, adsorbents, crude and unit processing aids, amine solvents, water treatment chemicals, fuel and lubricant additives, and plant components such as valves, pumps, mechanical seals, flanges and fittings.",
        },
        {
          q: "How quickly does ODES quote?",
          a: "A complete enquiry is normally quoted within one business day. Complete means: product name or CAS number, specification or grade, quantity, destination port and Incoterms, and the documents you need with the shipment.",
        },
        {
          q: "Does ODES hold DMF or CEP filings?",
          a: "No. Regulatory filings such as US FDA drug master files (DMF) and European CEP or ASMF submissions are held by the manufacturer. ODES identifies which manufacturer holds which filing and obtains written confirmation before a quotation is issued.",
        },
        {
          q: "Can ODES export dangerous goods?",
          a: "Yes. ODES arranges SDS authoring and GHS labelling, UN dangerous goods classification, export packaging certification, and cross-border logistics for hazardous as well as general cargo.",
        },
        {
          q: "Which third-party inspection companies does ODES use?",
          a: "SGS, Bureau Veritas (BV) or TÜV, depending on what the buyer or the destination market requires. Inspection takes place in China before the goods ship.",
        },
        {
          q: "Where is ODES located and how can I contact it?",
          a: "Shanghai Odes Technology Co., Ltd., Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District, Shanghai 200001, China. Email info@odestech.cn or call +86 177 1787 6827.",
        },
      ],
    },

    about: {
      meta: {
        title: "About ODES — Shanghai Odes Technology Co., Ltd.",
        description:
          "Shanghai Odes Technology Co., Ltd. is a holding company for China–US trade, sourcing and cross-border industrial collaboration, based in Shanghai.",
      },
      crumb: "About",
      hero: {
        eyebrow: "ABOUT ODES",
        title: "A counterparty on the ground in China.",
        lead: "ODES — Shanghai Odes Technology Co., Ltd. — is a holding company focused on China–US trade and cross-border industrial collaboration.",
      },
      body: [
        "Based in Shanghai and facing the United States and other high-standard overseas markets, we connect China's manufacturing and technical capability with buyers who need a counterparty on the ground: one that can qualify a factory, read a specification, and produce the documents an importer's customs broker will ask for.",
        "We work in two sectors — pharmaceuticals and life sciences, and energy, chemicals and materials. In practice that means supplier qualification and factory audits, specification review against the standards a buyer cites, export documentation and dangerous goods handling, third-party inspection, and consolidated shipping for hazardous and general cargo.",
      ],
      values: {
        eyebrow: "WHAT O·D·E·S STANDS FOR",
        title: "Four letters, four working rules.",
        items: [
          { letter: "O", word: "Overseas", desc: "Built for buyers outside China, delivered to their documentation standards." },
          { letter: "D", word: "Dedicated", desc: "A named counterpart per account, not a shared inbox." },
          { letter: "E", word: "Excellent", desc: "Specification-level review before a quotation goes out." },
          { letter: "S", word: "Synergistic", desc: "Long-term supply relationships rather than one-off trades." },
        ],
      },
      details: {
        eyebrow: "COMPANY DETAILS",
        title: "Registered details",
        rows: [
          ["Registered name", "Shanghai Odes Technology Co., Ltd."],
          ["Brand", "ODES Technology"],
          ["Registered office", "Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District, Shanghai 200001, China"],
          ["Sectors", "Pharmaceuticals and life sciences; energy, chemicals and materials"],
          ["Markets served", "United States and other high-standard overseas markets"],
          ["Email", "info@odestech.cn"],
        ],
      },
    },

    business: {
      meta: {
        title: "Core Business: Refinery Chemicals, APIs & Spares | ODES",
        description:
          "Two sourcing sectors: pharmaceuticals and life sciences, and refining catalysts, process chemicals, functional materials and plant components.",
      },
      crumb: "Core Business",
      hero: {
        eyebrow: "CORE BUSINESS",
        title: "Refinery chemicals, APIs and plant spares.",
        lead: "ODES works in two sectors. Both run on the same base: qualified Chinese manufacturers, specification review before a quotation goes out, export documentation written for the destination market, and third-party inspection before the goods leave.",
      },
    },

    pharma: {
      meta: {
        title: "API & Medical Consumables Sourcing from China | ODES",
        description:
          "APIs, excipients, medical consumables and pharmaceutical packaging from Chinese manufacturers for export, with CoA, GMP and DMF/CEP checks.",
      },
      crumb: "Pharma & Life Sciences",
      serviceType: "Sourcing and export of active pharmaceutical ingredients, excipients, medical consumables and pharmaceutical packaging",
      hero: {
        eyebrow: "PHARMA & LIFE SCIENCES",
        title: "API & medical consumables sourcing.",
        lead: "International trade and business docking for pharmaceutical and life-science products — from a single API enquiry through to a repeat supply arrangement.",
      },
      catalogTitle: "Product scope",
      catalog: [
        { title: "Active Pharmaceutical Ingredients & Intermediates", body: "APIs and key starting materials, with the compendial standard stated on the enquiry — USP, EP, JP or ChP — so the grade is fixed before a quotation is issued." },
        { title: "Excipients & Finished Preparations", body: "Pharmaceutical excipients, and finished preparations where the destination market permits import." },
        { title: "Medical Consumables & Devices", body: "Single-use consumables and related medical supplies." },
        { title: "Pharmaceutical Packaging Materials", body: "Primary and secondary packaging — glass and plastic containers, closures, blister and foil materials." },
      ],
      blocks: [
        {
          title: "Documentation & compliance support",
          intro: "Which documents a buyer needs depends on the destination and the product, so we establish that at the enquiry stage rather than after shipment. We assist with:",
          items: [
            "Manufacturer documentation — certificates of analysis, specification sheets, and the manufacturer's GMP status and audit history",
            "Regulatory filing routes, including US FDA drug master files and European CEP / ASMF submissions held by the manufacturer",
            "SDS and transport classification for products that ship as dangerous goods",
            "Certificates of origin and the consular or legalised documents some markets require",
          ],
          note: "We do not hold the manufacturer's regulatory filings ourselves; we identify which manufacturer holds what, and obtain it in writing before a quotation goes out.",
        },
        {
          title: "Technical services",
          intro: "Pharmaceutical technology consulting, technology transfer support, and compliance-path assistance for health-industry projects entering or leaving China.",
          items: [],
          note: "",
        },
      ],
      enquiry: {
        title: "What to include in an enquiry",
        intro: "A complete enquiry is normally quoted within one business day:",
        items: [
          "Product name, CAS number and compendial standard (USP / EP / JP / ChP)",
          "Annual volume or batch quantity, and whether the material is for R&D, clinical or commercial use",
          "Destination country and the regulatory route you intend to use",
          "Packaging requirement and destination port, with Incoterms",
          "Which documents are required — CoA, GMP certificate, DMF or CEP reference letter, stability data",
        ],
      },
      faq: [
        { q: "Which pharmacopoeia grades can ODES source?", a: "USP, EP, JP or ChP. The compendial standard is fixed on the enquiry, before a quotation is issued, so every price you compare refers to the same grade." },
        { q: "Which documents come with an API?", a: "Typically a certificate of analysis and specification sheet, the manufacturer's GMP status and audit history, and — where the manufacturer holds one — a DMF or CEP reference or authorisation letter. Stability data is available on request where the manufacturer provides it." },
        { q: "Does ODES supply finished dosage forms?", a: "Excipients, yes. Finished preparations only where the destination market permits their import; this is checked at the enquiry stage." },
      ],
    },

    energy: {
      meta: {
        title: "Refinery Catalysts & Process Chemicals from China | ODES",
        description:
          "Hydrotreating & FCC catalysts, amine solvents, water treatment, fuel additives, valves, pumps and seals from China, with SDS, UN DG and EN 10204 documents.",
      },
      crumb: "Energy, Chemicals & Materials",
      serviceType: "Sourcing and export of refining catalysts, process chemicals and plant components",
      hero: {
        eyebrow: "ENERGY, CHEMICALS & MATERIALS",
        title: "Refinery catalysts & process chemicals.",
        lead: "Import, export and supply-chain services for refining, petrochemical and energy engineering projects — process chemicals, refining additives, functional materials and plant components.",
      },
      catalogTitle: "Refining additives & process chemicals, by unit",
      catalog: [
        { title: "Catalysts & Adsorbents", body: "Hydrotreating and hydrocracking catalysts, FCC catalysts and additives (CO promoters, SOx transfer agents, octane boosters), continuous reforming catalysts, Claus sulphur recovery catalysts, guard beds and arsenic / chloride / oxygen removal adsorbents, molecular sieves." },
        { title: "Crude & Unit Processing Aids", body: "Crude demulsifiers, desalting aids, overhead corrosion inhibitors (neutralising and filming amines), antifoulants and anti-coking agents, metal passivators, defoamers." },
        { title: "Gas Treating, Desulphurisation & deNOx", body: "Amine solvents (MDEA / DEA / MEA), amine reclaiming agents and antifoams, hydrogen sulphide scavengers, desiccants, SCR reducing agents and urea." },
        { title: "Water Treatment & Utilities", body: "Cooling water corrosion and scale inhibitors, biocides and biofilm dispersants, boiler oxygen scavengers and phosphates, reverse osmosis antiscalants and cleaners, wastewater flocculants and demulsifiers." },
        { title: "Fuel & Lubricant Additives", body: "Diesel cetane improvers, cold flow improvers, anti-wear and detergent dispersant packages, antioxidants, lubricant additive packages and viscosity index improvers, blending components." },
        { title: "Plant Components & Spares", body: "Valves (gate, ball, butterfly, control, pressure relief), pump and compressor spares, mechanical seals and gaskets, pipe fittings and flanges, heat exchanger tube bundles and static equipment parts, instrumentation and automation components." },
      ],
      blocks: [
        {
          title: "Compliance & technical services",
          intro: "",
          items: [
            "SDS / GHS authoring, UN dangerous goods classification and export packaging certification",
            "Market-access support for REACH and the US TSCA inventory",
            "EN 10204 3.1 / 3.2 material certificates",
            "Specification review against API 6D, API 610, API 682 and ASME B16.5",
          ],
          note: "",
        },
        {
          title: "Supply chain integration",
          intro: "",
          items: [
            "Qualified supplier development and factory audits",
            "Third-party inspection (SGS / BV / TÜV)",
            "Consolidated procurement and spare-parts consignment",
            "Cross-border logistics for hazardous and general cargo",
          ],
          note: "",
        },
      ],
      enquiry: {
        title: "What to include in an enquiry",
        intro: "A complete enquiry can usually be quoted within one business day; anything missing means another round of questions first:",
        items: [
          "Product name or CAS number",
          "Specification and key properties (assay, particle size, activity, distillation range)",
          "Annual volume or batch quantity",
          "Destination port and Incoterms",
          "Whether an SDS, dangerous goods packaging certificate or other shipping documents are required",
        ],
      },
      faq: [
        { q: "Which refinery catalysts can ODES source?", a: "Hydrotreating and hydrocracking catalysts, FCC catalysts and additives, continuous reforming catalysts, Claus sulphur recovery catalysts, guard beds and removal adsorbents, and molecular sieves." },
        { q: "Can valves and spare parts come with material certificates?", a: "Yes. EN 10204 3.1 or 3.2 material certificates are arranged on request, and specifications are reviewed against API 6D, API 610, API 682 and ASME B16.5 before quoting." },
        { q: "Can ODES ship hazardous process chemicals?", a: "Yes. SDS and GHS labelling, UN dangerous goods classification and export packaging certification are part of the scope, followed by dangerous goods logistics." },
        { q: "Does ODES support REACH or US TSCA requirements?", a: "ODES supports market access for REACH and the US TSCA inventory by establishing the substance status and the documents required at the enquiry stage." },
      ],
    },

    contact: {
      meta: {
        title: "Contact ODES — Quotes for Refinery Chemicals & APIs",
        description:
          "Contact ODES Technology in Shanghai for quotations on refinery chemicals, APIs and plant spares. Email info@odestech.cn or use the enquiry form.",
      },
      crumb: "Contact",
      hero: {
        eyebrow: "GET IN TOUCH",
        title: "Send us your specification.",
        lead: "For a business enquiry or a cooperation proposal, contact us directly or use the form. A complete enquiry is normally quoted within one business day.",
      },
      checklistTitle: "A complete enquiry includes",
      checklist: [
        "Product name or CAS number",
        "Specification or grade (e.g. USP / EP, assay, API standard)",
        "Quantity — per batch or per year",
        "Destination port and Incoterms",
        "Documents required with the shipment",
      ],
      form: {
        heading: "Send an Enquiry",
        intro: "Fields marked * are required. We reply within one business day.",
        name: "Name",
        company: "Company",
        email: "Email",
        country: "Country / Region",
        phone: "Phone / WhatsApp",
        sector: "Business sector",
        sectorNone: "Please select",
        sectorOptions: ["Pharma & Life Sciences", "Energy, Chemicals & Materials", "Other"],
        message: "Message",
        messageHint: "Product, specification, quantity, destination port",
        optional: "optional",
        consent: "I agree that ODES may process the information above to respond to this enquiry, and that it is transmitted and stored by Formspree (United States).",
        submit: "Send enquiry",
        sending: "Sending…",
        required: "This field is required.",
        emailBad: "Please enter a valid email address.",
        consentBad: "Please tick the box to continue.",
        ok: "Thank you — your enquiry has been received. We will be in touch within one business day.",
        fail: "Submission failed. Please try again, or email us directly at info@odestech.cn.",
        subject: "ODES website enquiry",
      },
    },

    notfound: {
      meta: { title: "Page not found | ODES Technology", description: "The page you requested does not exist." },
      title: "Page not found.",
      body: "The page may have moved. These are the main sections of the site:",
      home: "Back to the home page",
    },
  },
};

export default en;
export type Dict = typeof en;
