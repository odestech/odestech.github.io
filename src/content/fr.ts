/**
 * Français (international, registre « vous »). Même schéma que en.ts (Dict).
 * Même règle que le reste du site : uniquement des affirmations qu'ODES peut
 * démontrer dès la première demande.
 */
import type { Lang } from "../site";
import type { Dict } from "./en";

const fr: Dict = {
  lang: "fr" as Lang,
  htmlLang: "fr",
  ogLocale: "fr_FR",
  skip: "Aller au contenu",
  menu: { open: "Ouvrir le menu", close: "Fermer le menu" },
  motto: "Overseas · Dedicated · Excellent · Synergistic",
  cta: "Demander un devis",

  nav: [
    { key: "about", label: "À propos", sub: "QUI SOMMES-NOUS", desc: "Société, valeurs et informations légales" },
    { key: "business", label: "Activités", sub: "NOTRE MÉTHODE", desc: "Deux secteurs, cinq étapes de la demande à l'expédition" },
    { key: "pharma", label: "Pharmacie", sub: "SCIENCES DE LA VIE", desc: "Principes actifs, excipients, consommables médicaux, conditionnement" },
    { key: "energy", label: "Énergie et chimie", sub: "RAFFINAGE", desc: "Catalyseurs, produits chimiques de procédé, vannes, pompes, garnitures" },
    { key: "contact", label: "Contact", sub: "NOUS ÉCRIRE", desc: "E-mail, téléphone et formulaire de demande" },
  ],

  common: {
    home: "Accueil",
    viewScope: "Voir la gamme de produits",
    faqEyebrow: "QUESTIONS FRÉQUENTES",
    faqTitle: "Les premières questions des acheteurs",
    labels: {
      contact: "Contact",
      phone: "Téléphone",
      email: "E-mail",
      address: "Adresse",
      linkedin: "LinkedIn",
      languages: "Langues de travail",
      languagesValue: "Anglais et chinois ; vous pouvez nous écrire en français",
    },
    ctaBand: {
      title: "Votre spécification est prête ?",
      body: "Envoyez-nous le nom du produit ou son numéro CAS, la qualité, la quantité et votre port de destination. Une demande complète reçoit normalement un devis sous un jour ouvré.",
      button: "Demander un devis",
      email: "ou écrivez à info@odestech.cn",
    },
  },

  footer: {
    tagline: "Approvisionnement et export depuis la Chine pour le raffinage, la chimie et la pharmacie",
    sectors: "Secteurs",
    company: "Société",
    contact: "Contact",
    rights: "Shanghai Odes Technology Co., Ltd. Tous droits réservés.",
  },

  facts: [
    { value: "2", label: "Secteurs", sub: "Pharmacie et sciences de la vie · Énergie, chimie et matériaux" },
    { value: "1", label: "Jour ouvré", sub: "Délai habituel de devis pour une demande complète" },
    { value: "3", label: "Organismes d'inspection", sub: "SGS · Bureau Veritas · TÜV, selon les exigences" },
    { value: "EN / 中文", label: "Langues de travail", sub: "Un interlocuteur dédié par compte" },
  ],

  sectors: {
    eyebrow: "DEUX SECTEURS",
    title: "Deux secteurs. Une seule méthode.",
    sub: "Les deux secteurs reposent sur la même base : des fabricants chinois qualifiés, une revue de la spécification avant tout devis, des documents d'exportation établis pour le marché de destination et une inspection par un tiers avant l'expédition.",
    cards: [
      {
        key: "pharma",
        title: "Pharmacie et sciences de la vie",
        tag: "PRINCIPES ACTIFS · CONSOMMABLES · CONDITIONNEMENT",
        desc: "Principes actifs (API), excipients, consommables médicaux et articles de conditionnement pharmaceutique, avec la qualité pharmacopée fixée avant tout prix.",
        items: [
          "Principes actifs et matières de départ clés",
          "Excipients pharmaceutiques",
          "Consommables et dispositifs médicaux",
          "Conditionnement primaire et secondaire",
          "CoA, statut BPF (GMP), références DMF / CEP",
          "Appui au transfert de technologie",
        ],
        img: "pharma",
        alt: "Techniciens en combinaison de protection versant un échantillon liquide dans un laboratoire",
      },
      {
        key: "energy",
        title: "Énergie, chimie et matériaux",
        tag: "CATALYSEURS · CHIMIE · PIÈCES DE RECHANGE",
        desc: "Catalyseurs de raffinage, produits chimiques de procédé et matériaux fonctionnels, ainsi que les vannes, pompes et garnitures qui font tourner les unités de raffinage et de pétrochimie.",
        items: [
          "Catalyseurs d'hydrotraitement, de FCC et de reformage",
          "Additifs pour le brut et les unités de procédé",
          "Solvants aminés et désulfuration",
          "Produits de traitement des eaux",
          "Additifs pour carburants et lubrifiants",
          "Vannes, pompes, garnitures et pièces de rechange",
        ],
        img: "energy",
        alt: "Vue aérienne d'une raffinerie avec colonnes de distillation et unités de procédé",
      },
    ],
    badgesTitle: "Normes et documents de référence",
    badges: [
      "FDS / SGH",
      "Marchandises dangereuses ONU",
      "EN 10204 3.1 / 3.2",
      "USP · EP · JP · ChP",
      "REACH · TSCA (États-Unis)",
      "API 6D · 610 · 682",
      "ASME B16.5",
      "SGS · BV · TÜV",
    ],
  },

  services: {
    eyebrow: "CE QUE NOUS FAISONS",
    title: "Quatre lignes de service. Un seul interlocuteur.",
    sub: "De la première demande au départ du conteneur, une même équipe gère le fournisseur, la spécification et les documents.",
    items: [
      {
        icon: "search",
        tag: "APPROVISIONNEMENT",
        title: "Qualification des fournisseurs et approvisionnement",
        headline: "Votre spécification confiée à un fabricant qualifié — pas à ce qui se trouve en stock.",
        body: "Nous identifions et qualifions des fabricants chinois pour chaque qualité, auditons les usines si nécessaire et vérifions ce que chacun peut documenter avant que vous ne receviez un prix.",
        bullets: [
          "Développement de fournisseurs qualifiés",
          "Audits d'usine",
          "Revue de la spécification selon la norme que vous indiquez",
          "Achats groupés et stock de pièces en consignation",
        ],
      },
      {
        icon: "shield",
        tag: "DOCUMENTS",
        title: "Documents d'exportation et conformité",
        headline: "La liste des documents est fixée à la demande, pas après l'expédition.",
        body: "Les documents nécessaires dépendent du produit et de la destination. Nous établissons cette liste avant le devis et préparons ce que demandera le commissionnaire en douane de votre importateur.",
        bullets: [
          "Rédaction des FDS et étiquetage SGH",
          "Classement ONU des marchandises dangereuses et certification des emballages d'exportation",
          "Certificats matière EN 10204 3.1 / 3.2",
          "Certificats d'origine et documents légalisés",
        ],
      },
      {
        icon: "truck",
        tag: "LOGISTIQUE",
        title: "Inspection et expédition",
        headline: "Contrôlé avant le départ. Expédié en marchandises dangereuses ou en fret général.",
        body: "Nous organisons l'inspection par un tiers lorsque l'acheteur ou le marché de destination l'exige, puis la logistique internationale des marchandises dangereuses et du fret général selon l'Incoterm demandé.",
        bullets: [
          "Inspection avant expédition par SGS, BV ou TÜV",
          "Marchandises dangereuses et fret général",
          "Envois groupés",
          "Devis selon votre Incoterm et votre port de destination",
        ],
      },
      {
        icon: "flask",
        tag: "TECHNIQUE",
        title: "Appui technique et réglementaire",
        headline: "Une lecture technique de la spécification avant une réponse commerciale.",
        body: "Revue des spécifications au regard des normes API, ASME et des pharmacopées, appui à l'accès au marché pour REACH et l'inventaire TSCA américain, et conseil en technologie pharmaceutique.",
        bullets: [
          "Revue selon API 6D, API 610, API 682 et ASME B16.5",
          "Qualité pharmacopée fixée d'emblée : USP, EP, JP ou ChP",
          "Appui à l'accès au marché pour REACH et l'inventaire TSCA",
          "Conseil en technologie pharmaceutique et appui au transfert de technologie",
        ],
      },
    ],
  },

  process: {
    eyebrow: "NOTRE MÉTHODE",
    title: "De la demande à l'expédition en cinq étapes.",
    sub: "La même séquence pour un fût d'additif ou pour un approvisionnement récurrent en principe actif.",
    steps: [
      { title: "Demande", body: "Nom du produit ou numéro CAS, spécification, quantité, port de destination et Incoterm." },
      { title: "Approvisionnement", body: "Nous confions la spécification à des fabricants qualifiés au lieu de revendre ce qui est en stock." },
      { title: "Devis", body: "Une demande complète reçoit normalement un devis sous un jour ouvré." },
      { title: "Documents", body: "FDS et étiquetage SGH, classement des marchandises dangereuses et certification des emballages, certificats matière, certificats d'origine." },
      { title: "Inspection et expédition", body: "Inspection par un tiers si nécessaire, puis logistique internationale en marchandises dangereuses ou en fret général." },
    ],
  },

  why: {
    eyebrow: "POURQUOI ODES",
    title: "Des engagements vérifiables dès la première demande.",
    sub: "Pas d'adjectifs : voici ce qu'un acheteur constate dans le premier devis et la première expédition.",
    bigNum: "1",
    bigLabel: "jour ouvré pour chiffrer une demande complète",
    items: [
      { icon: "target", title: "La spécification d'abord", body: "Qualité, norme et propriétés clés sont fixées avant l'envoi d'un prix, pour que le devis que vous comparez corresponde au produit dont vous avez réellement besoin." },
      { icon: "shield", title: "Des réponses claires sur les dossiers", body: "Nous ne détenons pas les dossiers réglementaires des fabricants. Nous déterminons quel fabricant détient quel DMF, CEP ou certificat, et le faisons confirmer par écrit avant le devis." },
      { icon: "briefcase", title: "Un interlocuteur dédié", body: "Chaque compte a un interlocuteur nommé qui suit la commande de la demande à la livraison — pas une boîte mail partagée." },
      { icon: "globe", title: "Conçu pour les acheteurs étrangers", body: "Les documents suivent les normes de votre marché, et non les habitudes locales chinoises." },
      { icon: "search", title: "Inspecté avant l'expédition", body: "Lorsque l'acheteur ou le marché l'exige, SGS, Bureau Veritas ou TÜV inspectent la marchandise avant son départ de Chine." },
      { icon: "network", title: "Approvisionnement dans la durée", body: "Nous construisons des approvisionnements récurrents, pas des opérations ponctuelles : la même source qualifiée et les mêmes documents, lot après lot." },
    ],
  },

  pages: {
    home: {
      meta: {
        title: "Catalyseurs, chimie de raffinage et principes actifs | ODES",
        description:
          "ODES (Shanghai) fournit catalyseurs, chimie de raffinage, principes actifs et pièces de rechange de fabricants chinois qualifiés, avec documents d'export.",
      },
      hero: {
        eyebrow: "SHANGHAI · APPROVISIONNEMENT ET EXPORT DEPUIS LA CHINE",
        line1: "Approvisionnement en Chine :",
        line2: "chimie de raffinage, principes actifs",
        line3: "et pièces de rechange.",
        sub: "ODES (Shanghai Odes Technology Co., Ltd.) qualifie les fabricants chinois, revoit votre spécification avant de chiffrer et prépare les documents d'exportation que demandera votre importateur — pour les raffineries, usines chimiques, laboratoires pharmaceutiques et acheteurs hors de Chine.",
        primary: "Découvrir les deux secteurs",
        secondary: "Demander un devis",
      },
      faq: [
        {
          q: "Que fait ODES ?",
          a: "ODES (Shanghai Odes Technology Co., Ltd.) est une société de négoce et de services techniques basée à Shanghai. Elle s'approvisionne en produits pharmaceutiques, en produits chimiques de raffinage et de procédé et en pièces de rechange auprès de fabricants chinois qualifiés, et les exporte vers des acheteurs hors de Chine, documents d'exportation et inspection par un tiers compris.",
        },
        {
          q: "Quels produits ODES peut-elle approvisionner en Chine ?",
          a: "Deux secteurs. Pharmacie et sciences de la vie : principes actifs (API) et matières de départ clés, excipients, consommables médicaux et conditionnement pharmaceutique. Énergie, chimie et matériaux : catalyseurs d'hydrotraitement, de FCC et de reformage, adsorbants, additifs pour le brut et les unités de procédé, solvants aminés, produits de traitement des eaux, additifs pour carburants et lubrifiants, et composants d'installation tels que vannes, pompes, garnitures mécaniques, brides et raccords.",
        },
        {
          q: "En combien de temps ODES établit-elle un devis ?",
          a: "Une demande complète reçoit normalement un devis sous un jour ouvré. Complète signifie : nom du produit ou numéro CAS, spécification ou qualité, quantité, port de destination et Incoterm, ainsi que les documents nécessaires à l'expédition.",
        },
        {
          q: "ODES détient-elle des dossiers DMF ou CEP ?",
          a: "Non. Les dossiers réglementaires tels que les DMF auprès de la FDA américaine et les CEP ou ASMF européens appartiennent au fabricant. ODES identifie quel fabricant détient chaque dossier et obtient une confirmation écrite avant d'émettre un devis.",
        },
        {
          q: "ODES peut-elle exporter des marchandises dangereuses ?",
          a: "Oui. ODES prend en charge la rédaction des FDS et l'étiquetage SGH, le classement ONU des marchandises dangereuses, la certification des emballages d'exportation et la logistique internationale, pour les marchandises dangereuses comme pour le fret général.",
        },
        {
          q: "Avec quels organismes d'inspection ODES travaille-t-elle ?",
          a: "SGS, Bureau Veritas (BV) ou TÜV, selon les exigences de l'acheteur ou du marché de destination. L'inspection a lieu en Chine avant l'expédition.",
        },
        {
          q: "Où se trouve ODES et comment la contacter ?",
          a: "Shanghai Odes Technology Co., Ltd., Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District, Shanghai 200001, Chine. E-mail info@odestech.cn, téléphone +86 177 1787 6827. Vous pouvez nous écrire en français.",
        },
      ],
    },

    about: {
      meta: {
        title: "À propos — Shanghai Odes Technology Co., Ltd. | ODES",
        description:
          "Shanghai Odes Technology Co., Ltd. est une holding de Shanghai dédiée au négoce, à l'approvisionnement et à la coopération industrielle internationale.",
      },
      crumb: "À propos",
      hero: {
        eyebrow: "À PROPOS D'ODES",
        title: "Votre interlocuteur sur place en Chine.",
        lead: "ODES — Shanghai Odes Technology Co., Ltd. (上海奥得斯科技有限公司) — est une société holding consacrée au négoce et à la coopération industrielle internationale depuis la Chine.",
      },
      body: [
        "Depuis Shanghai, nous mettons les capacités industrielles et techniques de la Chine au service d'acheteurs qui ont besoin d'un interlocuteur sur place : quelqu'un qui sait qualifier une usine, lire une spécification et fournir les documents que demandera le commissionnaire en douane de l'importateur.",
        "Nous travaillons dans deux secteurs : la pharmacie et les sciences de la vie, et l'énergie, la chimie et les matériaux. Concrètement : qualification des fournisseurs et audits d'usine, revue des spécifications au regard des normes citées par l'acheteur, documents d'exportation et gestion des marchandises dangereuses, inspection par un tiers et expéditions groupées en fret dangereux comme général.",
      ],
      values: {
        eyebrow: "CE QUE SIGNIFIE O·D·E·S",
        title: "Quatre lettres, quatre règles de travail.",
        items: [
          { letter: "O", word: "Overseas (International)", desc: "Pensé pour les acheteurs hors de Chine, livré selon leurs standards documentaires." },
          { letter: "D", word: "Dedicated (Engagement)", desc: "Un interlocuteur dédié par compte, pas une boîte mail partagée." },
          { letter: "E", word: "Excellent (Exigence)", desc: "Une revue au niveau de la spécification avant l'envoi d'un devis." },
          { letter: "S", word: "Synergistic (Synergie)", desc: "Des relations d'approvisionnement durables plutôt que des opérations ponctuelles." },
        ],
      },
      details: {
        eyebrow: "INFORMATIONS SUR LA SOCIÉTÉ",
        title: "Informations légales",
        rows: [
          ["Raison sociale", "Shanghai Odes Technology Co., Ltd. (上海奥得斯科技有限公司)"],
          ["Marque", "ODES Technology"],
          ["Siège social", "Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District, Shanghai 200001, Chine"],
          ["Secteurs", "Pharmacie et sciences de la vie ; énergie, chimie et matériaux"],
          ["Marchés", "Acheteurs hors de Chine, notamment sur les marchés les plus exigeants"],
          ["Langues de travail", "Anglais et chinois ; vous pouvez nous écrire en français"],
          ["E-mail", "info@odestech.cn"],
        ],
      },
    },

    business: {
      meta: {
        title: "Raffinage, principes actifs et pièces — Activités | ODES",
        description:
          "Deux secteurs : pharmacie et sciences de la vie ; catalyseurs de raffinage, produits chimiques de procédé, matériaux fonctionnels et composants d'usine.",
      },
      crumb: "Activités",
      hero: {
        eyebrow: "NOS ACTIVITÉS",
        title: "Chimie de raffinage, principes actifs et pièces de rechange.",
        lead: "ODES travaille dans deux secteurs. Tous deux reposent sur la même base : des fabricants chinois qualifiés, une revue de la spécification avant devis, des documents d'exportation établis pour le marché de destination et une inspection par un tiers avant l'expédition.",
      },
    },

    pharma: {
      meta: {
        title: "Principes actifs et consommables médicaux de Chine | ODES",
        description:
          "Principes actifs (API), excipients, consommables médicaux et conditionnements de fabricants chinois pour l'export, avec vérification CoA, BPF et DMF/CEP.",
      },
      crumb: "Pharmacie et sciences de la vie",
      serviceType: "Approvisionnement et exportation de principes actifs, d'excipients, de consommables médicaux et de conditionnement pharmaceutique",
      hero: {
        eyebrow: "PHARMACIE ET SCIENCES DE LA VIE",
        title: "Approvisionnement en principes actifs et consommables médicaux.",
        lead: "Négoce international et mise en relation commerciale pour les produits pharmaceutiques et des sciences de la vie — d'une demande ponctuelle de principe actif à un contrat d'approvisionnement récurrent.",
      },
      catalogTitle: "Gamme de produits",
      catalog: [
        { title: "Principes actifs (API) et intermédiaires", body: "Principes actifs et matières de départ clés, avec la pharmacopée indiquée dans la demande — USP, EP, JP ou ChP — afin que la qualité soit fixée avant l'émission du devis." },
        { title: "Excipients et produits finis", body: "Excipients pharmaceutiques et, lorsque le marché de destination en autorise l'importation, produits finis." },
        { title: "Consommables et dispositifs médicaux", body: "Consommables médicaux à usage unique et fournitures associées." },
        { title: "Articles de conditionnement pharmaceutique", body: "Conditionnement primaire et secondaire : flacons en verre et en plastique, bouchons et capsules, matériaux pour blisters et aluminium." },
      ],
      blocks: [
        {
          title: "Documents et appui à la conformité",
          intro: "Les documents nécessaires à un acheteur dépendent de la destination et du produit ; nous les fixons donc au stade de la demande et non après l'expédition. Nous vous accompagnons pour :",
          items: [
            "La documentation du fabricant : certificats d'analyse, spécifications, statut BPF (GMP) et historique d'audit",
            "Les voies d'enregistrement réglementaire, notamment les DMF auprès de la FDA américaine et les CEP / ASMF européens détenus par le fabricant",
            "Les FDS et le classement transport des produits expédiés en marchandises dangereuses",
            "Les certificats d'origine et les documents consulaires ou légalisés exigés par certains marchés",
          ],
          note: "Nous ne détenons pas nous-mêmes les dossiers réglementaires du fabricant ; nous identifions quel fabricant détient quoi et l'obtenons par écrit avant l'envoi d'un devis.",
        },
        {
          title: "Services techniques",
          intro: "Conseil en technologie pharmaceutique, appui au transfert de technologie et accompagnement du parcours de conformité pour les projets du secteur de la santé entrant en Chine ou en sortant.",
          items: [],
          note: "",
        },
      ],
      enquiry: {
        title: "Que mettre dans votre demande",
        intro: "Une demande complète reçoit normalement un devis sous un jour ouvré :",
        items: [
          "Nom du produit, numéro CAS et pharmacopée (USP / EP / JP / ChP)",
          "Volume annuel ou quantité par lot, et usage prévu : R&D, clinique ou commercial",
          "Pays de destination et voie réglementaire envisagée",
          "Exigences de conditionnement et port de destination, avec l'Incoterm",
          "Documents requis : CoA, certificat BPF, lettre de référence DMF ou CEP, données de stabilité",
        ],
      },
      faq: [
        { q: "Quelles qualités pharmacopée ODES peut-elle fournir ?", a: "USP, EP, JP ou ChP. La pharmacopée est fixée dans la demande, avant le devis, pour que tous les prix que vous comparez portent sur la même qualité." },
        { q: "Quels documents accompagnent un principe actif ?", a: "En général un certificat d'analyse et la spécification, le statut BPF et l'historique d'audit du fabricant et, lorsque le fabricant en détient un, une lettre de référence ou d'autorisation DMF ou CEP. Les données de stabilité sont disponibles sur demande lorsque le fabricant les fournit." },
        { q: "ODES fournit-elle des produits finis ?", a: "Les excipients, oui. Les produits finis uniquement lorsque le marché de destination en autorise l'importation ; ce point est vérifié au stade de la demande." },
      ],
    },

    energy: {
      meta: {
        title: "Catalyseurs et chimie de raffinage de Chine | ODES",
        description:
          "Catalyseurs d'hydrotraitement et FCC, solvants aminés, traitement d'eau, additifs, vannes, pompes et garnitures de Chine, avec FDS, ONU et EN 10204.",
      },
      crumb: "Énergie, chimie et matériaux",
      serviceType: "Approvisionnement et exportation de catalyseurs de raffinage, de produits chimiques de procédé et de composants d'installation",
      hero: {
        eyebrow: "ÉNERGIE, CHIMIE ET MATÉRIAUX",
        title: "Catalyseurs et produits chimiques de procédé pour le raffinage.",
        lead: "Import, export et chaîne d'approvisionnement pour les projets de raffinage, de pétrochimie et d'ingénierie énergétique : produits chimiques de procédé, additifs de raffinage, matériaux fonctionnels et composants d'installation.",
      },
      catalogTitle: "Additifs et produits chimiques de procédé, par unité",
      catalog: [
        { title: "Catalyseurs et adsorbants", body: "Catalyseurs d'hydrotraitement et d'hydrocraquage, catalyseurs et additifs de FCC (promoteurs de combustion du CO, agents de transfert des SOx, additifs d'indice d'octane), catalyseurs de reformage régénératif, catalyseurs Claus de récupération du soufre, lits de garde et adsorbants d'élimination de l'arsenic / des chlorures / de l'oxygène, tamis moléculaires." },
        { title: "Additifs pour le brut et les unités de procédé", body: "Désémulsifiants de brut, adjuvants de dessalage, inhibiteurs de corrosion de tête de colonne (amines neutralisantes et filmantes), antisalissures et anti-cokage, passivateurs de métaux, antimousses." },
        { title: "Traitement des gaz, désulfuration et deNOx", body: "Solvants aminés (MDEA / DEA / MEA), agents de régénération et antimousses pour amines, piégeurs d'hydrogène sulfuré, déshydratants, agents réducteurs SCR et urée." },
        { title: "Traitement des eaux et utilités", body: "Inhibiteurs de corrosion et de tartre pour l'eau de refroidissement, biocides et dispersants de biofilm, piégeurs d'oxygène et phosphates pour chaudières, antitartres et nettoyants pour osmose inverse, floculants et désémulsifiants pour eaux usées." },
        { title: "Additifs pour carburants et lubrifiants", body: "Améliorants de cétane pour gazole, additifs de tenue au froid, packages anti-usure et détergents-dispersants, antioxydants, packages d'additifs pour lubrifiants et améliorants d'indice de viscosité, bases de mélange." },
        { title: "Composants et pièces de rechange", body: "Vannes (à opercule, à boisseau sphérique, papillon, de régulation, soupapes de sûreté), pièces de pompes et de compresseurs, garnitures mécaniques et joints, raccords et brides, faisceaux tubulaires d'échangeurs et pièces d'équipements statiques, composants d'instrumentation et d'automatisme." },
      ],
      blocks: [
        {
          title: "Conformité et services techniques",
          intro: "",
          items: [
            "Rédaction des FDS / SGH, classement ONU des marchandises dangereuses et certification des emballages d'exportation",
            "Appui à l'accès au marché pour REACH et l'inventaire TSCA américain",
            "Certificats matière EN 10204 3.1 / 3.2",
            "Revue des spécifications selon API 6D, API 610, API 682 et ASME B16.5",
          ],
          note: "",
        },
        {
          title: "Intégration de la chaîne d'approvisionnement",
          intro: "",
          items: [
            "Développement de fournisseurs qualifiés et audits d'usine",
            "Inspection par un tiers (SGS / BV / TÜV)",
            "Achats groupés et stock de pièces en consignation",
            "Logistique internationale en marchandises dangereuses et en fret général",
          ],
          note: "",
        },
      ],
      enquiry: {
        title: "Que mettre dans votre demande",
        intro: "Une demande complète reçoit généralement un devis sous un jour ouvré ; s'il manque des informations, un premier échange de questions sera nécessaire :",
        items: [
          "Nom du produit ou numéro CAS",
          "Spécification et propriétés clés (teneur, granulométrie, activité, intervalle de distillation)",
          "Volume annuel ou quantité par lot",
          "Port de destination et Incoterm",
          "Besoin ou non d'une FDS, d'un certificat d'emballage pour marchandises dangereuses ou d'autres documents d'expédition",
        ],
      },
      faq: [
        { q: "Quels catalyseurs de raffinage ODES peut-elle fournir ?", a: "Catalyseurs d'hydrotraitement et d'hydrocraquage, catalyseurs et additifs de FCC, catalyseurs de reformage régénératif, catalyseurs Claus de récupération du soufre, lits de garde et adsorbants d'élimination, et tamis moléculaires." },
        { q: "Les vannes et pièces de rechange peuvent-elles être livrées avec des certificats matière ?", a: "Oui. Des certificats matière EN 10204 3.1 ou 3.2 sont fournis sur demande, et les spécifications sont revues selon API 6D, API 610, API 682 et ASME B16.5 avant le devis." },
        { q: "ODES peut-elle expédier des produits chimiques dangereux ?", a: "Oui. FDS et étiquetage SGH, classement ONU des marchandises dangereuses et certification des emballages d'exportation font partie de la prestation, suivis de la logistique des marchandises dangereuses." },
        { q: "ODES accompagne-t-elle les exigences REACH ou TSCA ?", a: "ODES accompagne l'accès aux marchés soumis à REACH et à l'inventaire TSCA américain en établissant, dès la demande, le statut de la substance et les documents requis." },
      ],
    },

    contact: {
      meta: {
        title: "Contact — Devis raffinage et principes actifs | ODES",
        description:
          "Contactez ODES à Shanghai pour un devis : chimie de raffinage, principes actifs, pièces de rechange. Écrivez à info@odestech.cn ou via le formulaire.",
      },
      crumb: "Contact",
      hero: {
        eyebrow: "CONTACT",
        title: "Envoyez-nous votre spécification.",
        lead: "Pour une demande commerciale ou une proposition de coopération, contactez-nous directement ou utilisez le formulaire. Une demande complète reçoit normalement un devis sous un jour ouvré. Vous pouvez nous écrire en français.",
      },
      checklistTitle: "Une demande complète comprend",
      checklist: [
        "Nom du produit ou numéro CAS",
        "Spécification ou qualité (p. ex. USP / EP, teneur, norme API)",
        "Quantité : par lot ou par an",
        "Port de destination et Incoterm",
        "Documents requis pour l'expédition",
      ],
      form: {
        heading: "Demander un devis",
        intro: "Les champs marqués d'un * sont obligatoires. Nous répondons sous un jour ouvré.",
        name: "Nom",
        company: "Société",
        email: "E-mail",
        country: "Pays / Région",
        phone: "Téléphone / WhatsApp",
        sector: "Secteur concerné",
        sectorNone: "Sélectionnez",
        sectorOptions: ["Pharmacie et sciences de la vie", "Énergie, chimie et matériaux", "Autre"],
        message: "Message",
        messageHint: "Produit, spécification, quantité, port de destination",
        optional: "facultatif",
        consent: "J'accepte qu'ODES traite les informations ci-dessus pour répondre à cette demande, et qu'elles soient transmises et stockées par Formspree (États-Unis).",
        submit: "Envoyer la demande",
        sending: "Envoi…",
        required: "Ce champ est obligatoire.",
        emailBad: "Veuillez saisir une adresse e-mail valide.",
        consentBad: "Veuillez cocher la case pour continuer.",
        ok: "Merci, nous avons bien reçu votre demande. Nous vous répondrons sous un jour ouvré.",
        fail: "L'envoi a échoué. Réessayez ou écrivez-nous directement à info@odestech.cn.",
        subject: "Demande depuis le site ODES (FR)",
      },
    },

    notfound: {
      meta: { title: "Page introuvable | ODES", description: "La page demandée n'existe pas." },
      title: "Page introuvable.",
      body: "La page a peut-être été déplacée. Voici les principales sections du site :",
      home: "Retour à l'accueil",
    },
  },
};

export default fr;
