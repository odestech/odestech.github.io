/**
 * Español (Latinoamérica). Mismo esquema que en.ts (tipo Dict).
 *
 * Registro: "usted", terminología latinoamericana (cotización, repuestos,
 * insumos médicos, empaque). Misma regla que el resto del sitio: solo
 * afirmaciones que ODES puede demostrar en la primera consulta.
 */
import type { Lang } from "../site";
import type { Dict } from "./en";

const es: Dict = {
  lang: "es" as Lang,
  htmlLang: "es",
  ogLocale: "es_LA",
  skip: "Saltar al contenido",
  menu: { open: "Abrir menú", close: "Cerrar menú" },
  motto: "Overseas · Dedicated · Excellent · Synergistic",
  cta: "Solicitar cotización",

  nav: [
    { key: "about", label: "Nosotros", sub: "QUIÉNES SOMOS", desc: "Empresa, valores y datos registrales" },
    { key: "business", label: "Negocio", sub: "CÓMO TRABAJAMOS", desc: "Dos sectores y cinco pasos de la consulta al embarque" },
    { key: "pharma", label: "Farmacéutica", sub: "CIENCIAS DE LA VIDA", desc: "Principios activos, excipientes, insumos médicos, empaque" },
    { key: "energy", label: "Energía y Químicos", sub: "REFINACIÓN", desc: "Catalizadores, químicos de proceso, válvulas, bombas, sellos" },
    { key: "contact", label: "Contacto", sub: "ESCRÍBANOS", desc: "Correo, teléfono y formulario de consulta" },
  ],

  common: {
    home: "Inicio",
    viewScope: "Ver alcance de productos",
    faqEyebrow: "PREGUNTAS FRECUENTES",
    faqTitle: "Lo primero que preguntan los compradores",
    labels: {
      contact: "Contacto",
      phone: "Teléfono",
      email: "Correo",
      address: "Dirección",
      linkedin: "LinkedIn",
      languages: "Idiomas de trabajo",
      languagesValue: "Inglés y chino; puede escribirnos en español",
    },
    ctaBand: {
      title: "¿Ya tiene la especificación?",
      body: "Envíe el nombre del producto o número CAS, el grado, la cantidad y su puerto de destino. Una consulta completa normalmente se cotiza en un día hábil.",
      button: "Solicitar cotización",
      email: "o escriba a info@odestech.cn",
    },
  },

  footer: {
    tagline: "Abastecimiento y exportación desde China para refinación, química y farmacéutica",
    sectors: "Sectores",
    company: "Empresa",
    contact: "Contacto",
    rights: "Shanghai Odes Technology Co., Ltd. Todos los derechos reservados.",
  },

  facts: [
    { value: "2", label: "Sectores", sub: "Farmacéutica y ciencias de la vida · Energía, químicos y materiales" },
    { value: "1", label: "Día hábil", sub: "Plazo habitual de cotización para una consulta completa" },
    { value: "3", label: "Entidades de inspección", sub: "SGS · Bureau Veritas · TÜV, cuando se requiere" },
    { value: "EN / 中文", label: "Idiomas de trabajo", sub: "Un contacto asignado por cuenta" },
  ],

  sectors: {
    eyebrow: "DOS SECTORES",
    title: "Dos sectores. Una sola forma de trabajar.",
    sub: "Ambos sectores se apoyan en la misma base: fabricantes chinos calificados, revisión de la especificación antes de enviar cualquier cotización, documentos de exportación preparados para el mercado de destino e inspección de terceros antes del embarque.",
    cards: [
      {
        key: "pharma",
        title: "Farmacéutica y Ciencias de la Vida",
        tag: "API · INSUMOS · EMPAQUE",
        desc: "Principios activos (API), excipientes, insumos médicos y material de empaque farmacéutico, con el grado farmacopeico definido antes de cotizar.",
        items: [
          "API y materiales de partida clave",
          "Excipientes farmacéuticos",
          "Insumos y dispositivos médicos",
          "Empaque primario y secundario",
          "CoA, estado GMP, referencias DMF / CEP",
          "Apoyo en transferencia de tecnología",
        ],
        img: "pharma",
        alt: "Técnicos con trajes de protección vertiendo una muestra líquida en un laboratorio",
      },
      {
        key: "energy",
        title: "Energía, Químicos y Materiales",
        tag: "CATALIZADORES · QUÍMICOS · REPUESTOS",
        desc: "Catalizadores de refinación, químicos de proceso y materiales funcionales, además de las válvulas, bombas y sellos que mantienen en operación las unidades de refinación y petroquímica.",
        items: [
          "Catalizadores de hidrotratamiento, FCC y reformado",
          "Aditivos para crudo y unidades de proceso",
          "Solventes de aminas y desulfuración",
          "Químicos para tratamiento de agua",
          "Aditivos para combustibles y lubricantes",
          "Válvulas, bombas, sellos y repuestos de planta",
        ],
        img: "energy",
        alt: "Vista aérea de una refinería con columnas de destilación y unidades de proceso",
      },
    ],
    badgesTitle: "Normas y documentos con los que trabajamos",
    badges: [
      "SDS / GHS",
      "Mercancías peligrosas ONU",
      "EN 10204 3.1 / 3.2",
      "USP · EP · JP · ChP",
      "REACH · TSCA (EE. UU.)",
      "API 6D · 610 · 682",
      "ASME B16.5",
      "SGS · BV · TÜV",
    ],
  },

  services: {
    eyebrow: "QUÉ HACEMOS",
    title: "Cuatro líneas de servicio. Una sola contraparte.",
    sub: "Desde la primera consulta hasta que el contenedor sale del puerto, un mismo equipo se encarga del proveedor, la especificación y la documentación.",
    items: [
      {
        icon: "search",
        tag: "ABASTECIMIENTO",
        title: "Calificación de proveedores y abastecimiento",
        headline: "Su especificación, asignada a un fabricante calificado — no a lo que haya en inventario.",
        body: "Identificamos y calificamos fabricantes chinos para cada grado, auditamos plantas cuando hace falta y confirmamos qué puede documentar cada uno antes de que usted reciba un precio.",
        bullets: [
          "Desarrollo de proveedores calificados",
          "Auditorías de planta",
          "Revisión de la especificación frente a la norma que usted indique",
          "Compras consolidadas y consignación de repuestos",
        ],
      },
      {
        icon: "shield",
        tag: "DOCUMENTOS",
        title: "Documentación de exportación y cumplimiento",
        headline: "La lista de documentos se define en la consulta, no después del embarque.",
        body: "Los documentos que necesita un embarque dependen del producto y del destino. Fijamos esa lista antes de cotizar y preparamos lo que pedirá el agente de aduanas de su importador.",
        bullets: [
          "Elaboración de SDS y etiquetado GHS",
          "Clasificación ONU de mercancías peligrosas y certificación de embalaje de exportación",
          "Certificados de material EN 10204 3.1 / 3.2",
          "Certificados de origen y documentos legalizados",
        ],
      },
      {
        icon: "truck",
        tag: "LOGÍSTICA",
        title: "Inspección y embarque",
        headline: "Inspeccionado antes de salir. Enviado como carga peligrosa o carga general.",
        body: "Coordinamos la inspección de terceros cuando el comprador o el mercado de destino la exigen y luego organizamos la logística internacional de carga peligrosa y general en el Incoterm que usted solicite.",
        bullets: [
          "Inspección previa al embarque por SGS, BV o TÜV",
          "Carga peligrosa y carga general",
          "Embarques consolidados",
          "Cotización en su Incoterm y puerto de destino",
        ],
      },
      {
        icon: "flask",
        tag: "TÉCNICO",
        title: "Soporte técnico y regulatorio",
        headline: "Una lectura técnica de la especificación antes de una respuesta comercial.",
        body: "Revisión de especificaciones frente a normas API, ASME y farmacopeicas, apoyo de acceso a mercado para REACH y el inventario TSCA de EE. UU., y consultoría en tecnología farmacéutica.",
        bullets: [
          "Revisión frente a API 6D, API 610, API 682 y ASME B16.5",
          "Grado farmacopeico definido desde el inicio: USP, EP, JP o ChP",
          "Apoyo de acceso a mercado para REACH y el inventario TSCA",
          "Consultoría en tecnología farmacéutica y apoyo en transferencia de tecnología",
        ],
      },
    ],
  },

  process: {
    eyebrow: "CÓMO TRABAJAMOS",
    title: "De la consulta al embarque en cinco pasos.",
    sub: "La misma secuencia para un tambor de aditivo o para un suministro recurrente de API.",
    steps: [
      { title: "Consulta", body: "Nombre del producto o número CAS, especificación, cantidad, puerto de destino e Incoterm." },
      { title: "Abastecimiento", body: "Asignamos la especificación a fabricantes calificados en lugar de revender lo que haya en inventario." },
      { title: "Cotización", body: "Una consulta completa normalmente se cotiza en un día hábil." },
      { title: "Documentación", body: "SDS y etiquetado GHS, clasificación de mercancías peligrosas y certificación de embalaje, certificados de material, certificados de origen." },
      { title: "Inspección y embarque", body: "Inspección de terceros cuando se requiere y, después, logística internacional para carga peligrosa o general." },
    ],
  },

  why: {
    eyebrow: "POR QUÉ ODES",
    title: "Compromisos que puede verificar desde la primera consulta.",
    sub: "Sin adjetivos: esto es lo que un comprador ve en la primera cotización y en el primer embarque.",
    bigNum: "1",
    bigLabel: "día hábil para cotizar una consulta completa",
    items: [
      { icon: "target", title: "Primero la especificación", body: "Grado, norma y propiedades clave se fijan antes de enviar un precio, para que la cotización que usted compara corresponda al producto que realmente necesita." },
      { icon: "shield", title: "Respuestas claras sobre registros", body: "No somos titulares de los registros regulatorios de los fabricantes. Averiguamos qué fabricante tiene qué DMF, CEP o certificado y lo confirmamos por escrito antes de cotizar." },
      { icon: "briefcase", title: "Un contacto asignado", body: "Cada cuenta tiene un contacto con nombre que sigue el pedido desde la consulta hasta la entrega — no un buzón compartido." },
      { icon: "globe", title: "Pensado para compradores en el exterior", body: "Los documentos siguen las normas de su mercado, no las costumbres locales de China." },
      { icon: "search", title: "Inspección antes del embarque", body: "Cuando el comprador o el mercado lo exigen, SGS, Bureau Veritas o TÜV inspeccionan la mercancía antes de que salga de China." },
      { icon: "network", title: "Suministro a largo plazo", body: "Construimos relaciones de suministro recurrente, no operaciones aisladas: la misma fuente calificada y los mismos documentos, lote tras lote." },
    ],
  },

  pages: {
    home: {
      meta: {
        title: "Químicos de refinería, API y repuestos desde China | ODES",
        description:
          "Desde Shanghái, ODES abastece catalizadores y químicos de refinería, API y repuestos de fabricantes chinos calificados, con documentos de exportación.",
      },
      hero: {
        eyebrow: "SHANGHÁI · ABASTECIMIENTO Y EXPORTACIÓN DESDE CHINA",
        line1: "Abastecimiento en China de",
        line2: "químicos de refinería, API",
        line3: "y repuestos de planta.",
        sub: "ODES (Shanghai Odes Technology Co., Ltd.) califica fabricantes chinos, revisa su especificación antes de cotizar y prepara los documentos de exportación que pedirá su importador — para refinerías, plantas químicas, laboratorios farmacéuticos y agentes de compras en América Latina, Estados Unidos y otros mercados exigentes.",
        primary: "Ver los dos sectores",
        secondary: "Solicitar cotización",
      },
      faq: [
        {
          q: "¿Qué hace ODES?",
          a: "ODES (Shanghai Odes Technology Co., Ltd.) es una empresa de comercio y servicios técnicos con sede en Shanghái. Abastece productos farmacéuticos, químicos de refinación y de proceso, y repuestos de planta de fabricantes chinos calificados, y los exporta a compradores fuera de China, con documentación de exportación e inspección de terceros incluidas.",
        },
        {
          q: "¿Qué productos puede abastecer ODES desde China?",
          a: "Dos sectores. Farmacéutica y ciencias de la vida: principios activos (API) y materiales de partida clave, excipientes, insumos médicos y empaque farmacéutico. Energía, químicos y materiales: catalizadores de hidrotratamiento, FCC y reformado, adsorbentes, aditivos para crudo y unidades de proceso, solventes de aminas, químicos para tratamiento de agua, aditivos para combustibles y lubricantes, y componentes de planta como válvulas, bombas, sellos mecánicos, bridas y accesorios.",
        },
        {
          q: "¿En cuánto tiempo cotiza ODES?",
          a: "Una consulta completa normalmente se cotiza en un día hábil. Completa significa: nombre del producto o número CAS, especificación o grado, cantidad, puerto de destino e Incoterm, y los documentos que necesita con el embarque.",
        },
        {
          q: "¿ODES es titular de registros DMF o CEP?",
          a: "No. Los registros regulatorios como los DMF ante la FDA de EE. UU. y los CEP o ASMF europeos pertenecen al fabricante. ODES identifica qué fabricante tiene cada registro y obtiene confirmación por escrito antes de emitir una cotización.",
        },
        {
          q: "¿Puede ODES exportar mercancías peligrosas?",
          a: "Sí. ODES se encarga de la elaboración de SDS y el etiquetado GHS, la clasificación ONU de mercancías peligrosas, la certificación del embalaje de exportación y la logística internacional tanto de carga peligrosa como general.",
        },
        {
          q: "¿Con qué empresas de inspección trabaja ODES?",
          a: "SGS, Bureau Veritas (BV) o TÜV, según lo que exija el comprador o el mercado de destino. La inspección se realiza en China antes del embarque.",
        },
        {
          q: "¿Dónde está ODES y cómo puedo contactarla?",
          a: "Shanghai Odes Technology Co., Ltd., Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District, Shanghái 200001, China. Correo info@odestech.cn, teléfono +86 177 1787 6827. Puede escribirnos en español.",
        },
      ],
    },

    about: {
      meta: {
        title: "Nosotros — Shanghai Odes Technology Co., Ltd. | ODES",
        description:
          "Shanghai Odes Technology Co., Ltd. es un holding de Shanghái dedicado al comercio, el abastecimiento y la colaboración industrial transfronteriza.",
      },
      crumb: "Nosotros",
      hero: {
        eyebrow: "SOBRE ODES",
        title: "Su contraparte en China.",
        lead: "ODES — Shanghai Odes Technology Co., Ltd. (上海奥得斯科技有限公司) — es una empresa holding enfocada en el comercio y la colaboración industrial transfronteriza desde China.",
      },
      body: [
        "Desde Shanghái, conectamos la capacidad manufacturera y técnica de China con compradores que necesitan una contraparte en el terreno: alguien que pueda calificar una planta, leer una especificación y entregar los documentos que pedirá el agente de aduanas del importador.",
        "Trabajamos en dos sectores: farmacéutica y ciencias de la vida, y energía, químicos y materiales. En la práctica, eso significa calificación de proveedores y auditorías de planta, revisión de especificaciones frente a las normas que indica el comprador, documentación de exportación y manejo de mercancías peligrosas, inspección de terceros y embarques consolidados de carga peligrosa y general.",
      ],
      values: {
        eyebrow: "QUÉ SIGNIFICA O·D·E·S",
        title: "Cuatro letras, cuatro reglas de trabajo.",
        items: [
          { letter: "O", word: "Overseas (Exterior)", desc: "Pensado para compradores fuera de China, con entregas según sus estándares documentales." },
          { letter: "D", word: "Dedicated (Dedicación)", desc: "Un contacto asignado por cuenta, no un buzón compartido." },
          { letter: "E", word: "Excellent (Excelencia)", desc: "Revisión a nivel de especificación antes de enviar una cotización." },
          { letter: "S", word: "Synergistic (Sinergia)", desc: "Relaciones de suministro a largo plazo en lugar de operaciones aisladas." },
        ],
      },
      details: {
        eyebrow: "DATOS DE LA EMPRESA",
        title: "Datos registrales",
        rows: [
          ["Razón social", "Shanghai Odes Technology Co., Ltd. (上海奥得斯科技有限公司)"],
          ["Marca", "ODES Technology"],
          ["Domicilio registrado", "Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District, Shanghái 200001, China"],
          ["Sectores", "Farmacéutica y ciencias de la vida; energía, químicos y materiales"],
          ["Mercados", "América Latina, Estados Unidos y otros mercados exigentes"],
          ["Idiomas de trabajo", "Inglés y chino; puede escribirnos en español"],
          ["Correo", "info@odestech.cn"],
        ],
      },
    },

    business: {
      meta: {
        title: "Químicos de refinería, API y repuestos — Negocio | ODES",
        description:
          "Dos sectores: farmacéutica y ciencias de la vida; y catalizadores de refinación, químicos de proceso, materiales funcionales y componentes de planta.",
      },
      crumb: "Negocio",
      hero: {
        eyebrow: "NUESTRO NEGOCIO",
        title: "Químicos de refinería, API y repuestos de planta.",
        lead: "ODES trabaja en dos sectores. Ambos se apoyan en la misma base: fabricantes chinos calificados, revisión de la especificación antes de cotizar, documentación de exportación preparada para el mercado de destino e inspección de terceros antes del embarque.",
      },
    },

    pharma: {
      meta: {
        title: "Abastecimiento de API e insumos médicos desde China | ODES",
        description:
          "Principios activos (API), excipientes, insumos médicos y empaque farmacéutico de fabricantes chinos para exportar, con verificación de CoA, GMP y DMF/CEP.",
      },
      crumb: "Farmacéutica y Ciencias de la Vida",
      serviceType: "Abastecimiento y exportación de principios activos, excipientes, insumos médicos y empaque farmacéutico",
      hero: {
        eyebrow: "FARMACÉUTICA Y CIENCIAS DE LA VIDA",
        title: "Abastecimiento de API e insumos médicos.",
        lead: "Comercio internacional y vinculación comercial para productos farmacéuticos y de ciencias de la vida — desde una consulta puntual de un API hasta un acuerdo de suministro recurrente.",
      },
      catalogTitle: "Alcance de productos",
      catalog: [
        { title: "Principios activos (API) e intermedios", body: "API y materiales de partida clave, con la norma farmacopeica indicada en la consulta — USP, EP, JP o ChP — para que el grado quede definido antes de emitir la cotización." },
        { title: "Excipientes y productos terminados", body: "Excipientes farmacéuticos y, cuando el mercado de destino permite su importación, productos terminados." },
        { title: "Insumos y dispositivos médicos", body: "Insumos médicos de un solo uso y suministros relacionados." },
        { title: "Material de empaque farmacéutico", body: "Empaque primario y secundario: envases de vidrio y plástico, tapas y cierres, materiales para blíster y aluminio." },
      ],
      blocks: [
        {
          title: "Documentación y soporte de cumplimiento",
          intro: "Los documentos que necesita un comprador dependen del destino y del producto, por eso los definimos en la etapa de consulta y no después del embarque. Apoyamos con:",
          items: [
            "Documentación del fabricante: certificados de análisis, especificaciones, estado GMP e historial de auditorías",
            "Vías de registro regulatorio, incluidos los DMF ante la FDA de EE. UU. y los CEP / ASMF europeos que mantiene el fabricante",
            "SDS y clasificación de transporte para productos que viajan como mercancía peligrosa",
            "Certificados de origen y los documentos consulares o legalizados que exigen algunos mercados",
          ],
          note: "No somos titulares de los registros regulatorios del fabricante; identificamos qué fabricante tiene cada uno y lo obtenemos por escrito antes de enviar una cotización.",
        },
        {
          title: "Servicios técnicos",
          intro: "Consultoría en tecnología farmacéutica, apoyo en transferencia de tecnología y asistencia en la ruta de cumplimiento para proyectos del sector salud que entran o salen de China.",
          items: [],
          note: "",
        },
      ],
      enquiry: {
        title: "Qué incluir en su consulta",
        intro: "Una consulta completa normalmente se cotiza en un día hábil:",
        items: [
          "Nombre del producto, número CAS y norma farmacopeica (USP / EP / JP / ChP)",
          "Volumen anual o cantidad por lote, y si el material es para I+D, uso clínico o comercial",
          "País de destino y la vía regulatoria que piensa utilizar",
          "Requisito de empaque y puerto de destino, con Incoterm",
          "Documentos requeridos: CoA, certificado GMP, carta de referencia DMF o CEP, datos de estabilidad",
        ],
      },
      faq: [
        { q: "¿Qué grados farmacopeicos puede abastecer ODES?", a: "USP, EP, JP o ChP. La norma farmacopeica se define en la consulta, antes de emitir la cotización, para que todos los precios que usted compare correspondan al mismo grado." },
        { q: "¿Qué documentos acompañan a un API?", a: "Normalmente un certificado de análisis y la especificación, el estado GMP y el historial de auditorías del fabricante y, cuando el fabricante lo tiene, una carta de referencia o autorización de DMF o CEP. Los datos de estabilidad están disponibles a solicitud cuando el fabricante los proporciona." },
        { q: "¿ODES suministra productos terminados?", a: "Excipientes, sí. Productos terminados solo cuando el mercado de destino permite su importación; esto se verifica en la etapa de consulta." },
      ],
    },

    energy: {
      meta: {
        title: "Catalizadores y químicos de refinería desde China | ODES",
        description:
          "Catalizadores de hidrotratamiento y FCC, solventes de aminas, tratamiento de agua, aditivos, válvulas, bombas y sellos de China, con SDS, ONU y EN 10204.",
      },
      crumb: "Energía, Químicos y Materiales",
      serviceType: "Abastecimiento y exportación de catalizadores de refinación, químicos de proceso y componentes de planta",
      hero: {
        eyebrow: "ENERGÍA, QUÍMICOS Y MATERIALES",
        title: "Catalizadores y químicos de proceso para refinería.",
        lead: "Importación, exportación y cadena de suministro para proyectos de refinación, petroquímica e ingeniería energética: químicos de proceso, aditivos de refinación, materiales funcionales y componentes de planta.",
      },
      catalogTitle: "Aditivos y químicos de proceso, por unidad",
      catalog: [
        { title: "Catalizadores y adsorbentes", body: "Catalizadores de hidrotratamiento e hidrocraqueo, catalizadores y aditivos de FCC (promotores de CO, agentes de transferencia de SOx, potenciadores de octano), catalizadores de reformado continuo, catalizadores Claus de recuperación de azufre, lechos de guarda y adsorbentes para remoción de arsénico / cloruros / oxígeno, tamices moleculares." },
        { title: "Aditivos para crudo y unidades de proceso", body: "Desemulsificantes de crudo, auxiliares de desalado, inhibidores de corrosión de cabeza (aminas neutralizantes y fílmicas), antiincrustantes y anticoquizantes, pasivadores de metales, antiespumantes." },
        { title: "Tratamiento de gases, desulfuración y deNOx", body: "Solventes de aminas (MDEA / DEA / MEA), agentes de recuperación y antiespumantes para aminas, secuestrantes de sulfuro de hidrógeno, desecantes, agentes reductores para SCR y urea." },
        { title: "Tratamiento de agua y servicios auxiliares", body: "Inhibidores de corrosión e incrustación para agua de enfriamiento, biocidas y dispersantes de biopelícula, secuestrantes de oxígeno y fosfatos para calderas, antiincrustantes y limpiadores para ósmosis inversa, floculantes y desemulsificantes para aguas residuales." },
        { title: "Aditivos para combustibles y lubricantes", body: "Mejoradores de cetano para diésel, mejoradores de flujo en frío, paquetes antidesgaste y detergentes-dispersantes, antioxidantes, paquetes de aditivos para lubricantes y mejoradores del índice de viscosidad, componentes de mezcla." },
        { title: "Componentes y repuestos de planta", body: "Válvulas (compuerta, bola, mariposa, control, alivio de presión), repuestos de bombas y compresores, sellos mecánicos y juntas, accesorios de tubería y bridas, haces tubulares de intercambiadores de calor y partes de equipos estáticos, componentes de instrumentación y automatización." },
      ],
      blocks: [
        {
          title: "Cumplimiento y servicios técnicos",
          intro: "",
          items: [
            "Elaboración de SDS / GHS, clasificación ONU de mercancías peligrosas y certificación de embalaje de exportación",
            "Apoyo de acceso a mercado para REACH y el inventario TSCA de EE. UU.",
            "Certificados de material EN 10204 3.1 / 3.2",
            "Revisión de especificaciones frente a API 6D, API 610, API 682 y ASME B16.5",
          ],
          note: "",
        },
        {
          title: "Integración de la cadena de suministro",
          intro: "",
          items: [
            "Desarrollo de proveedores calificados y auditorías de planta",
            "Inspección de terceros (SGS / BV / TÜV)",
            "Compras consolidadas y consignación de repuestos",
            "Logística internacional para carga peligrosa y general",
          ],
          note: "",
        },
      ],
      enquiry: {
        title: "Qué incluir en su consulta",
        intro: "Una consulta completa normalmente se cotiza en un día hábil; si falta información, primero habrá otra ronda de preguntas:",
        items: [
          "Nombre del producto o número CAS",
          "Especificación y propiedades clave (pureza, tamaño de partícula, actividad, rango de destilación)",
          "Volumen anual o cantidad por lote",
          "Puerto de destino e Incoterm",
          "Si se requiere SDS, certificado de embalaje para mercancía peligrosa u otros documentos de embarque",
        ],
      },
      faq: [
        { q: "¿Qué catalizadores de refinería puede abastecer ODES?", a: "Catalizadores de hidrotratamiento e hidrocraqueo, catalizadores y aditivos de FCC, catalizadores de reformado continuo, catalizadores Claus de recuperación de azufre, lechos de guarda y adsorbentes de remoción, y tamices moleculares." },
        { q: "¿Las válvulas y repuestos pueden venir con certificados de material?", a: "Sí. Se gestionan certificados de material EN 10204 3.1 o 3.2 a solicitud, y las especificaciones se revisan frente a API 6D, API 610, API 682 y ASME B16.5 antes de cotizar." },
        { q: "¿Puede ODES embarcar químicos de proceso peligrosos?", a: "Sí. La SDS y el etiquetado GHS, la clasificación ONU de mercancías peligrosas y la certificación del embalaje de exportación forman parte del alcance, seguidos de la logística de mercancías peligrosas." },
        { q: "¿ODES apoya requisitos de REACH o TSCA de EE. UU.?", a: "ODES apoya el acceso a mercados regulados por REACH y el inventario TSCA de EE. UU., estableciendo en la etapa de consulta el estatus de la sustancia y los documentos requeridos." },
      ],
    },

    contact: {
      meta: {
        title: "Contacto — Cotice químicos de refinería y API | ODES",
        description:
          "Contacte a ODES Technology en Shanghái para cotizar químicos de refinería, API y repuestos. Escriba a info@odestech.cn o use el formulario de consulta.",
      },
      crumb: "Contacto",
      hero: {
        eyebrow: "CONTACTO",
        title: "Envíenos su especificación.",
        lead: "Para una consulta comercial o una propuesta de cooperación, contáctenos directamente o use el formulario. Una consulta completa normalmente se cotiza en un día hábil. Puede escribirnos en español.",
      },
      checklistTitle: "Una consulta completa incluye",
      checklist: [
        "Nombre del producto o número CAS",
        "Especificación o grado (p. ej. USP / EP, pureza, norma API)",
        "Cantidad: por lote o anual",
        "Puerto de destino e Incoterm",
        "Documentos requeridos con el embarque",
      ],
      form: {
        heading: "Solicitar cotización",
        intro: "Los campos marcados con * son obligatorios. Respondemos en un día hábil.",
        name: "Nombre",
        company: "Empresa",
        email: "Correo electrónico",
        country: "País / Región",
        phone: "Teléfono / WhatsApp",
        sector: "Sector de interés",
        sectorNone: "Seleccione",
        sectorOptions: ["Farmacéutica y Ciencias de la Vida", "Energía, Químicos y Materiales", "Otro"],
        message: "Mensaje",
        messageHint: "Producto, especificación, cantidad, puerto de destino",
        optional: "opcional",
        consent: "Acepto que ODES trate la información anterior para responder a esta consulta, y que sea transmitida y almacenada por Formspree (Estados Unidos).",
        submit: "Enviar consulta",
        sending: "Enviando…",
        required: "Este campo es obligatorio.",
        emailBad: "Ingrese un correo electrónico válido.",
        consentBad: "Marque la casilla para continuar.",
        ok: "Gracias, recibimos su consulta. Le responderemos en un día hábil.",
        fail: "No se pudo enviar. Intente de nuevo o escríbanos directamente a info@odestech.cn.",
        subject: "Consulta desde el sitio web de ODES (ES)",
      },
    },

    notfound: {
      meta: { title: "Página no encontrada | ODES", description: "La página que busca no existe." },
      title: "Página no encontrada.",
      body: "Es posible que la página se haya movido. Estas son las secciones principales del sitio:",
      home: "Volver al inicio",
    },
  },
};

export default es;
