/**
 * Português do Brasil (tratamento "você"). Mesmo esquema de en.ts (Dict).
 * Terminologia brasileira: cotação, peças de reposição, IFA (insumo
 * farmacêutico ativo, termo da ANVISA para API). Mesma regra do restante do
 * site: só afirmações que a ODES consegue comprovar já na primeira consulta.
 */
import type { Lang } from "../site";
import type { Dict } from "./en";

const pt: Dict = {
  lang: "pt" as Lang,
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  skip: "Pular para o conteúdo",
  menu: { open: "Abrir menu", close: "Fechar menu" },
  motto: "Overseas · Dedicated · Excellent · Synergistic",
  cta: "Solicitar cotação",

  nav: [
    { key: "about", label: "Sobre nós", sub: "QUEM SOMOS", desc: "Empresa, valores e dados cadastrais" },
    { key: "business", label: "Negócios", sub: "COMO TRABALHAMOS", desc: "Dois setores e cinco etapas da consulta ao embarque" },
    { key: "pharma", label: "Farmacêutico", sub: "CIÊNCIAS DA VIDA", desc: "IFA, excipientes, insumos médicos, embalagens" },
    { key: "energy", label: "Energia e Química", sub: "REFINO", desc: "Catalisadores, químicos de processo, válvulas, bombas, selos" },
    { key: "contact", label: "Contato", sub: "FALE CONOSCO", desc: "E-mail, telefone e formulário de consulta" },
  ],

  common: {
    home: "Início",
    viewScope: "Ver linha de produtos",
    faqEyebrow: "PERGUNTAS FREQUENTES",
    faqTitle: "O que os compradores perguntam primeiro",
    labels: {
      contact: "Contato",
      phone: "Telefone",
      email: "E-mail",
      address: "Endereço",
      linkedin: "LinkedIn",
      languages: "Idiomas de trabalho",
      languagesValue: "Inglês e chinês; você pode nos escrever em português",
    },
    ctaBand: {
      title: "Já tem a especificação?",
      body: "Envie o nome do produto ou número CAS, o grau, a quantidade e o porto de destino. Uma consulta completa normalmente é cotada em um dia útil.",
      button: "Solicitar cotação",
      email: "ou escreva para info@odestech.cn",
    },
  },

  footer: {
    tagline: "Suprimento e exportação a partir da China para refino, química e setor farmacêutico",
    sectors: "Setores",
    company: "Empresa",
    contact: "Contato",
    rights: "Shanghai Odes Technology Co., Ltd. Todos os direitos reservados.",
  },

  facts: [
    { value: "2", label: "Setores", sub: "Farmacêutico e ciências da vida · Energia, química e materiais" },
    { value: "1", label: "Dia útil", sub: "Prazo usual de cotação para uma consulta completa" },
    { value: "3", label: "Empresas de inspeção", sub: "SGS · Bureau Veritas · TÜV, quando exigido" },
    { value: "EN / 中文", label: "Idiomas de trabalho", sub: "Um contato dedicado por conta" },
  ],

  sectors: {
    eyebrow: "DOIS SETORES",
    title: "Dois setores. Uma única forma de trabalhar.",
    sub: "Os dois setores se apoiam na mesma base: fabricantes chineses qualificados, revisão da especificação antes de qualquer cotação, documentos de exportação preparados para o mercado de destino e inspeção independente antes do embarque.",
    cards: [
      {
        key: "pharma",
        title: "Farmacêutico e Ciências da Vida",
        tag: "IFA · INSUMOS · EMBALAGENS",
        desc: "Insumos farmacêuticos ativos (IFA/API), excipientes, insumos médicos e embalagens farmacêuticas, com o grau farmacopeico definido antes de qualquer preço.",
        items: [
          "IFA e materiais de partida",
          "Excipientes farmacêuticos",
          "Insumos e dispositivos médicos",
          "Embalagem primária e secundária",
          "CoA, status BPF (GMP), referências DMF / CEP",
          "Apoio à transferência de tecnologia",
        ],
        img: "pharma",
        alt: "Técnicos com roupas de proteção despejando uma amostra líquida em um laboratório",
      },
      {
        key: "energy",
        title: "Energia, Química e Materiais",
        tag: "CATALISADORES · QUÍMICOS · PEÇAS",
        desc: "Catalisadores de refino, químicos de processo e materiais funcionais, além das válvulas, bombas e selos que mantêm em operação as unidades de refino e petroquímica.",
        items: [
          "Catalisadores de hidrotratamento, FCC e reforma",
          "Aditivos para petróleo e unidades de processo",
          "Solventes amínicos e dessulfurização",
          "Químicos para tratamento de água",
          "Aditivos para combustíveis e lubrificantes",
          "Válvulas, bombas, selos e peças de reposição",
        ],
        img: "energy",
        alt: "Vista aérea de uma refinaria com colunas de destilação e unidades de processo",
      },
    ],
    badgesTitle: "Normas e documentos com que trabalhamos",
    badges: [
      "FDS (FISPQ) / GHS",
      "Mercadorias perigosas ONU",
      "EN 10204 3.1 / 3.2",
      "USP · EP · JP · ChP",
      "REACH · TSCA (EUA)",
      "API 6D · 610 · 682",
      "ASME B16.5",
      "SGS · BV · TÜV",
    ],
  },

  services: {
    eyebrow: "O QUE FAZEMOS",
    title: "Quatro linhas de serviço. Um único interlocutor.",
    sub: "Da primeira consulta até o contêiner sair do porto, a mesma equipe cuida do fornecedor, da especificação e da documentação.",
    items: [
      {
        icon: "search",
        tag: "SUPRIMENTO",
        title: "Qualificação de fornecedores e suprimento",
        headline: "Sua especificação direcionada a um fabricante qualificado — não ao que estiver em estoque.",
        body: "Identificamos e qualificamos fabricantes chineses para cada grau, auditamos fábricas quando necessário e confirmamos o que cada um consegue documentar antes de você receber um preço.",
        bullets: [
          "Desenvolvimento de fornecedores qualificados",
          "Auditorias de fábrica",
          "Revisão da especificação conforme a norma indicada por você",
          "Compras consolidadas e consignação de peças de reposição",
        ],
      },
      {
        icon: "shield",
        tag: "DOCUMENTOS",
        title: "Documentação de exportação e conformidade",
        headline: "A lista de documentos é definida na consulta, não depois do embarque.",
        body: "Os documentos de cada embarque dependem do produto e do destino. Definimos essa lista antes de cotar e preparamos o que o despachante aduaneiro do seu importador vai pedir.",
        bullets: [
          "Elaboração de FDS (FISPQ) e rotulagem GHS",
          "Classificação ONU de mercadorias perigosas e certificação de embalagem de exportação",
          "Certificados de material EN 10204 3.1 / 3.2",
          "Certificados de origem e documentos legalizados",
        ],
      },
      {
        icon: "truck",
        tag: "LOGÍSTICA",
        title: "Inspeção e embarque",
        headline: "Inspecionado antes de sair. Embarcado como carga perigosa ou carga geral.",
        body: "Organizamos a inspeção independente quando o comprador ou o mercado de destino exige e, em seguida, a logística internacional de carga perigosa e geral no Incoterm que você solicitar.",
        bullets: [
          "Inspeção pré-embarque por SGS, BV ou TÜV",
          "Carga perigosa e carga geral",
          "Embarques consolidados",
          "Cotação no seu Incoterm e porto de destino",
        ],
      },
      {
        icon: "flask",
        tag: "TÉCNICO",
        title: "Suporte técnico e regulatório",
        headline: "Uma leitura técnica da especificação antes de uma resposta comercial.",
        body: "Revisão de especificações frente às normas API, ASME e farmacopeicas, apoio de acesso a mercado para REACH e o inventário TSCA dos EUA, e consultoria em tecnologia farmacêutica.",
        bullets: [
          "Revisão conforme API 6D, API 610, API 682 e ASME B16.5",
          "Grau farmacopeico definido desde o início: USP, EP, JP ou ChP",
          "Apoio de acesso a mercado para REACH e o inventário TSCA",
          "Consultoria em tecnologia farmacêutica e apoio à transferência de tecnologia",
        ],
      },
    ],
  },

  process: {
    eyebrow: "COMO TRABALHAMOS",
    title: "Da consulta ao embarque em cinco etapas.",
    sub: "A mesma sequência para um tambor de aditivo ou para um fornecimento recorrente de IFA.",
    steps: [
      { title: "Consulta", body: "Nome do produto ou número CAS, especificação, quantidade, porto de destino e Incoterm." },
      { title: "Suprimento", body: "Direcionamos a especificação a fabricantes qualificados, em vez de revender o que estiver em estoque." },
      { title: "Cotação", body: "Uma consulta completa normalmente é cotada em um dia útil." },
      { title: "Documentação", body: "FDS e rotulagem GHS, classificação de mercadorias perigosas e certificação de embalagem, certificados de material, certificados de origem." },
      { title: "Inspeção e embarque", body: "Inspeção independente quando exigida e, depois, logística internacional para carga perigosa ou geral." },
    ],
  },

  why: {
    eyebrow: "POR QUE A ODES",
    title: "Compromissos que você verifica já na primeira consulta.",
    sub: "Sem adjetivos: é isto que o comprador vê na primeira cotação e no primeiro embarque.",
    bigNum: "1",
    bigLabel: "dia útil para cotar uma consulta completa",
    items: [
      { icon: "target", title: "Especificação em primeiro lugar", body: "Grau, norma e propriedades-chave são definidos antes do envio de um preço, para que a cotação que você compara corresponda ao produto de que realmente precisa." },
      { icon: "shield", title: "Respostas claras sobre registros", body: "Não somos titulares dos registros regulatórios dos fabricantes. Verificamos qual fabricante tem qual DMF, CEP ou certificado e obtemos a confirmação por escrito antes de cotar." },
      { icon: "briefcase", title: "Um contato dedicado", body: "Cada conta tem um contato nomeado que acompanha o pedido da consulta à entrega — não uma caixa de e-mail compartilhada." },
      { icon: "globe", title: "Pensado para compradores no exterior", body: "Os documentos seguem as normas do seu mercado, não os costumes locais da China." },
      { icon: "search", title: "Inspeção antes do embarque", body: "Quando o comprador ou o mercado exige, SGS, Bureau Veritas ou TÜV inspecionam a mercadoria antes de ela sair da China." },
      { icon: "network", title: "Fornecimento de longo prazo", body: "Construímos fornecimentos recorrentes, não operações pontuais: a mesma fonte qualificada e os mesmos documentos, lote após lote." },
    ],
  },

  pages: {
    home: {
      meta: {
        title: "Químicos de refino, IFA e peças de reposição da China | ODES",
        description:
          "A ODES, em Xangai, fornece catalisadores e químicos de refino, IFA e peças de reposição de fabricantes chineses qualificados, com documentos de exportação.",
      },
      hero: {
        eyebrow: "XANGAI · SUPRIMENTO E EXPORTAÇÃO A PARTIR DA CHINA",
        line1: "Suprimento na China de",
        line2: "químicos de refino, IFA",
        line3: "e peças de reposição.",
        sub: "A ODES (Shanghai Odes Technology Co., Ltd.) qualifica fabricantes chineses, revisa sua especificação antes de cotar e prepara os documentos de exportação que seu importador vai pedir — para refinarias, plantas químicas, indústrias farmacêuticas e compradores no Brasil, nos Estados Unidos e em outros mercados exigentes.",
        primary: "Conhecer os dois setores",
        secondary: "Solicitar cotação",
      },
      faq: [
        {
          q: "O que a ODES faz?",
          a: "A ODES (Shanghai Odes Technology Co., Ltd.) é uma empresa de comércio e serviços técnicos com sede em Xangai. Ela fornece produtos farmacêuticos, químicos de refino e de processo e peças de reposição de fabricantes chineses qualificados e os exporta para compradores fora da China, com documentação de exportação e inspeção independente incluídas.",
        },
        {
          q: "Quais produtos a ODES pode fornecer da China?",
          a: "Dois setores. Farmacêutico e ciências da vida: insumos farmacêuticos ativos (IFA/API) e materiais de partida, excipientes, insumos médicos e embalagens farmacêuticas. Energia, química e materiais: catalisadores de hidrotratamento, FCC e reforma, adsorventes, aditivos para petróleo e unidades de processo, solventes amínicos, químicos para tratamento de água, aditivos para combustíveis e lubrificantes, e componentes de planta como válvulas, bombas, selos mecânicos, flanges e conexões.",
        },
        {
          q: "Em quanto tempo a ODES envia uma cotação?",
          a: "Uma consulta completa normalmente é cotada em um dia útil. Completa significa: nome do produto ou número CAS, especificação ou grau, quantidade, porto de destino e Incoterm, e os documentos necessários para o embarque.",
        },
        {
          q: "A ODES é titular de registros DMF ou CEP?",
          a: "Não. Registros regulatórios como os DMF junto à FDA dos EUA e os CEP ou ASMF europeus pertencem ao fabricante. A ODES identifica qual fabricante tem cada registro e obtém confirmação por escrito antes de emitir uma cotação.",
        },
        {
          q: "A ODES pode exportar mercadorias perigosas?",
          a: "Sim. A ODES cuida da elaboração da FDS e da rotulagem GHS, da classificação ONU de mercadorias perigosas, da certificação da embalagem de exportação e da logística internacional, tanto de carga perigosa quanto de carga geral.",
        },
        {
          q: "Com quais empresas de inspeção a ODES trabalha?",
          a: "SGS, Bureau Veritas (BV) ou TÜV, conforme a exigência do comprador ou do mercado de destino. A inspeção é feita na China antes do embarque.",
        },
        {
          q: "Onde fica a ODES e como entrar em contato?",
          a: "Shanghai Odes Technology Co., Ltd., Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District, Xangai 200001, China. E-mail info@odestech.cn, telefone +86 177 1787 6827. Você pode nos escrever em português.",
        },
      ],
    },

    about: {
      meta: {
        title: "Sobre nós — Shanghai Odes Technology Co., Ltd. | ODES",
        description:
          "A Shanghai Odes Technology Co., Ltd. é uma holding com sede em Xangai dedicada ao comércio, ao suprimento e à cooperação industrial internacional.",
      },
      crumb: "Sobre nós",
      hero: {
        eyebrow: "SOBRE A ODES",
        title: "Seu interlocutor local na China.",
        lead: "ODES — Shanghai Odes Technology Co., Ltd. (上海奥得斯科技有限公司) — é uma holding voltada ao comércio e à cooperação industrial internacional a partir da China.",
      },
      body: [
        "De Xangai, conectamos a capacidade industrial e técnica da China a compradores que precisam de um interlocutor local: alguém que saiba qualificar uma fábrica, ler uma especificação e entregar os documentos que o despachante aduaneiro do importador vai pedir.",
        "Atuamos em dois setores: farmacêutico e ciências da vida, e energia, química e materiais. Na prática, isso significa qualificação de fornecedores e auditorias de fábrica, revisão de especificações conforme as normas indicadas pelo comprador, documentação de exportação e manuseio de mercadorias perigosas, inspeção independente e embarques consolidados de carga perigosa e geral.",
      ],
      values: {
        eyebrow: "O QUE SIGNIFICA O·D·E·S",
        title: "Quatro letras, quatro regras de trabalho.",
        items: [
          { letter: "O", word: "Overseas (Exterior)", desc: "Pensado para compradores fora da China, com entregas no padrão documental deles." },
          { letter: "D", word: "Dedicated (Dedicação)", desc: "Um contato dedicado por conta, não uma caixa de e-mail compartilhada." },
          { letter: "E", word: "Excellent (Excelência)", desc: "Revisão no nível da especificação antes de enviar uma cotação." },
          { letter: "S", word: "Synergistic (Sinergia)", desc: "Relações de fornecimento de longo prazo em vez de operações pontuais." },
        ],
      },
      details: {
        eyebrow: "DADOS DA EMPRESA",
        title: "Dados cadastrais",
        rows: [
          ["Razão social", "Shanghai Odes Technology Co., Ltd. (上海奥得斯科技有限公司)"],
          ["Marca", "ODES Technology"],
          ["Sede", "Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District, Xangai 200001, China"],
          ["Setores", "Farmacêutico e ciências da vida; energia, química e materiais"],
          ["Mercados", "Brasil, Estados Unidos e outros mercados exigentes"],
          ["Idiomas de trabalho", "Inglês e chinês; você pode nos escrever em português"],
          ["E-mail", "info@odestech.cn"],
        ],
      },
    },

    business: {
      meta: {
        title: "Químicos de refino, IFA e peças — Negócios | ODES",
        description:
          "Dois setores de suprimento: farmacêutico e ciências da vida, e catalisadores de refino, químicos de processo, materiais funcionais e componentes de planta.",
      },
      crumb: "Negócios",
      hero: {
        eyebrow: "NOSSOS NEGÓCIOS",
        title: "Químicos de refino, IFA e peças de reposição.",
        lead: "A ODES atua em dois setores. Ambos se apoiam na mesma base: fabricantes chineses qualificados, revisão da especificação antes da cotação, documentação de exportação preparada para o mercado de destino e inspeção independente antes do embarque.",
      },
    },

    pharma: {
      meta: {
        title: "Suprimento de IFA e insumos médicos da China | ODES",
        description:
          "IFA/API, excipientes, insumos médicos e embalagens farmacêuticas de fabricantes chineses para exportação, com verificação de CoA, BPF e DMF/CEP.",
      },
      crumb: "Farmacêutico e Ciências da Vida",
      serviceType: "Suprimento e exportação de insumos farmacêuticos ativos, excipientes, insumos médicos e embalagens farmacêuticas",
      hero: {
        eyebrow: "FARMACÊUTICO E CIÊNCIAS DA VIDA",
        title: "Suprimento de IFA e insumos médicos.",
        lead: "Comércio internacional e intermediação comercial para produtos farmacêuticos e de ciências da vida — de uma consulta pontual de IFA a um contrato de fornecimento recorrente.",
      },
      catalogTitle: "Linha de produtos",
      catalog: [
        { title: "Insumos farmacêuticos ativos (IFA) e intermediários", body: "IFA e materiais de partida, com a farmacopeia indicada na consulta — USP, EP, JP ou ChP — para que o grau fique definido antes da emissão da cotação." },
        { title: "Excipientes e produtos acabados", body: "Excipientes farmacêuticos e, quando o mercado de destino permite a importação, produtos acabados." },
        { title: "Insumos e dispositivos médicos", body: "Insumos médicos descartáveis e materiais relacionados." },
        { title: "Embalagens farmacêuticas", body: "Embalagem primária e secundária: frascos de vidro e plástico, tampas e lacres, materiais para blíster e alumínio." },
      ],
      blocks: [
        {
          title: "Documentação e suporte de conformidade",
          intro: "Os documentos de que o comprador precisa dependem do destino e do produto; por isso, definimos isso na etapa de consulta, e não depois do embarque. Apoiamos com:",
          items: [
            "Documentação do fabricante: certificados de análise, especificações, status BPF (GMP) e histórico de auditorias",
            "Vias de registro regulatório, incluindo os DMF junto à FDA dos EUA e os CEP / ASMF europeus mantidos pelo fabricante",
            "FDS e classificação de transporte para produtos embarcados como mercadoria perigosa",
            "Certificados de origem e os documentos consulares ou legalizados exigidos por alguns mercados",
          ],
          note: "Não somos titulares dos registros regulatórios do fabricante; identificamos qual fabricante tem cada um e obtemos a confirmação por escrito antes de enviar uma cotação.",
        },
        {
          title: "Serviços técnicos",
          intro: "Consultoria em tecnologia farmacêutica, apoio à transferência de tecnologia e assistência no caminho de conformidade para projetos da área da saúde que entram ou saem da China.",
          items: [],
          note: "",
        },
      ],
      enquiry: {
        title: "O que incluir na sua consulta",
        intro: "Uma consulta completa normalmente é cotada em um dia útil:",
        items: [
          "Nome do produto, número CAS e farmacopeia (USP / EP / JP / ChP)",
          "Volume anual ou quantidade por lote, e se o material é para P&D, uso clínico ou comercial",
          "País de destino e a via regulatória pretendida",
          "Requisitos de embalagem e porto de destino, com Incoterm",
          "Documentos exigidos: CoA, certificado BPF, carta de referência DMF ou CEP, dados de estabilidade",
        ],
      },
      faq: [
        { q: "Quais graus farmacopeicos a ODES pode fornecer?", a: "USP, EP, JP ou ChP. A farmacopeia é definida na consulta, antes da cotação, para que todos os preços que você compara se refiram ao mesmo grau." },
        { q: "Quais documentos acompanham um IFA?", a: "Normalmente um certificado de análise e a especificação, o status BPF e o histórico de auditorias do fabricante e, quando o fabricante possui, uma carta de referência ou autorização de DMF ou CEP. Dados de estabilidade estão disponíveis mediante solicitação, quando o fabricante os fornece." },
        { q: "A ODES fornece produtos acabados?", a: "Excipientes, sim. Produtos acabados somente quando o mercado de destino permite a importação; isso é verificado na etapa de consulta." },
      ],
    },

    energy: {
      meta: {
        title: "Catalisadores e químicos de refino da China | ODES",
        description:
          "Catalisadores de hidrotratamento e FCC, solventes amínicos, tratamento de água, aditivos, válvulas, bombas e selos da China, com FDS, ONU e EN 10204.",
      },
      crumb: "Energia, Química e Materiais",
      serviceType: "Suprimento e exportação de catalisadores de refino, químicos de processo e componentes de planta",
      hero: {
        eyebrow: "ENERGIA, QUÍMICA E MATERIAIS",
        title: "Catalisadores e químicos de processo para refino.",
        lead: "Importação, exportação e cadeia de suprimentos para projetos de refino, petroquímica e engenharia de energia: químicos de processo, aditivos de refino, materiais funcionais e componentes de planta.",
      },
      catalogTitle: "Aditivos e químicos de processo, por unidade",
      catalog: [
        { title: "Catalisadores e adsorventes", body: "Catalisadores de hidrotratamento e hidrocraqueamento, catalisadores e aditivos de FCC (promotores de combustão de CO, agentes de transferência de SOx, aditivos de octanagem), catalisadores de reforma catalítica contínua, catalisadores Claus de recuperação de enxofre, leitos de guarda e adsorventes para remoção de arsênio / cloretos / oxigênio, peneiras moleculares." },
        { title: "Aditivos para petróleo e unidades de processo", body: "Desemulsificantes de petróleo, auxiliares de dessalgação, inibidores de corrosão de topo (aminas neutralizantes e fílmicas), antiincrustantes e anticoqueamento, passivadores de metais, antiespumantes." },
        { title: "Tratamento de gases, dessulfurização e deNOx", body: "Solventes amínicos (MDEA / DEA / MEA), agentes de recuperação e antiespumantes para aminas, sequestrantes de sulfeto de hidrogênio, dessecantes, agentes redutores para SCR e ureia." },
        { title: "Tratamento de água e utilidades", body: "Inibidores de corrosão e incrustação para água de resfriamento, biocidas e dispersantes de biofilme, sequestrantes de oxigênio e fosfatos para caldeiras, antiincrustantes e limpadores para osmose reversa, floculantes e desemulsificantes para efluentes." },
        { title: "Aditivos para combustíveis e lubrificantes", body: "Melhoradores de cetano para diesel, melhoradores de fluxo a frio, pacotes antidesgaste e detergentes-dispersantes, antioxidantes, pacotes de aditivos para lubrificantes e melhoradores de índice de viscosidade, componentes de mistura." },
        { title: "Componentes e peças de reposição", body: "Válvulas (gaveta, esfera, borboleta, controle, alívio de pressão), peças de bombas e compressores, selos mecânicos e juntas, conexões e flanges, feixes tubulares de trocadores de calor e peças de equipamentos estáticos, componentes de instrumentação e automação." },
      ],
      blocks: [
        {
          title: "Conformidade e serviços técnicos",
          intro: "",
          items: [
            "Elaboração de FDS / GHS, classificação ONU de mercadorias perigosas e certificação de embalagem de exportação",
            "Apoio de acesso a mercado para REACH e o inventário TSCA dos EUA",
            "Certificados de material EN 10204 3.1 / 3.2",
            "Revisão de especificações conforme API 6D, API 610, API 682 e ASME B16.5",
          ],
          note: "",
        },
        {
          title: "Integração da cadeia de suprimentos",
          intro: "",
          items: [
            "Desenvolvimento de fornecedores qualificados e auditorias de fábrica",
            "Inspeção independente (SGS / BV / TÜV)",
            "Compras consolidadas e consignação de peças de reposição",
            "Logística internacional de carga perigosa e carga geral",
          ],
          note: "",
        },
      ],
      enquiry: {
        title: "O que incluir na sua consulta",
        intro: "Uma consulta completa geralmente é cotada em um dia útil; se faltar informação, haverá antes uma rodada de perguntas:",
        items: [
          "Nome do produto ou número CAS",
          "Especificação e propriedades-chave (teor, granulometria, atividade, faixa de destilação)",
          "Volume anual ou quantidade por lote",
          "Porto de destino e Incoterm",
          "Se é necessária FDS, certificado de embalagem para mercadoria perigosa ou outros documentos de embarque",
        ],
      },
      faq: [
        { q: "Quais catalisadores de refino a ODES pode fornecer?", a: "Catalisadores de hidrotratamento e hidrocraqueamento, catalisadores e aditivos de FCC, catalisadores de reforma catalítica contínua, catalisadores Claus de recuperação de enxofre, leitos de guarda e adsorventes de remoção, e peneiras moleculares." },
        { q: "Válvulas e peças de reposição podem vir com certificados de material?", a: "Sim. Certificados de material EN 10204 3.1 ou 3.2 são providenciados mediante solicitação, e as especificações são revisadas conforme API 6D, API 610, API 682 e ASME B16.5 antes da cotação." },
        { q: "A ODES pode embarcar químicos de processo perigosos?", a: "Sim. FDS e rotulagem GHS, classificação ONU de mercadorias perigosas e certificação da embalagem de exportação fazem parte do escopo, seguidas da logística de mercadorias perigosas." },
        { q: "A ODES apoia exigências de REACH ou TSCA dos EUA?", a: "A ODES apoia o acesso a mercados regulados pelo REACH e pelo inventário TSCA dos EUA, definindo já na consulta o status da substância e os documentos exigidos." },
      ],
    },

    contact: {
      meta: {
        title: "Contato — Cotação de químicos de refino e IFA | ODES",
        description:
          "Fale com a ODES Technology em Xangai para cotar químicos de refino, IFA e peças de reposição. Escreva para info@odestech.cn ou use o formulário.",
      },
      crumb: "Contato",
      hero: {
        eyebrow: "CONTATO",
        title: "Envie sua especificação.",
        lead: "Para uma consulta comercial ou proposta de cooperação, fale conosco diretamente ou use o formulário. Uma consulta completa normalmente é cotada em um dia útil. Você pode nos escrever em português.",
      },
      checklistTitle: "Uma consulta completa inclui",
      checklist: [
        "Nome do produto ou número CAS",
        "Especificação ou grau (ex.: USP / EP, teor, norma API)",
        "Quantidade: por lote ou por ano",
        "Porto de destino e Incoterm",
        "Documentos exigidos para o embarque",
      ],
      form: {
        heading: "Solicitar cotação",
        intro: "Os campos marcados com * são obrigatórios. Respondemos em um dia útil.",
        name: "Nome",
        company: "Empresa",
        email: "E-mail",
        country: "País / Região",
        phone: "Telefone / WhatsApp",
        sector: "Setor de interesse",
        sectorNone: "Selecione",
        sectorOptions: ["Farmacêutico e Ciências da Vida", "Energia, Química e Materiais", "Outro"],
        message: "Mensagem",
        messageHint: "Produto, especificação, quantidade, porto de destino",
        optional: "opcional",
        consent: "Concordo que a ODES trate as informações acima para responder a esta consulta e que elas sejam transmitidas e armazenadas pela Formspree (Estados Unidos).",
        submit: "Enviar consulta",
        sending: "Enviando…",
        required: "Este campo é obrigatório.",
        emailBad: "Informe um e-mail válido.",
        consentBad: "Marque a caixa para continuar.",
        ok: "Obrigado, recebemos sua consulta. Responderemos em um dia útil.",
        fail: "Não foi possível enviar. Tente novamente ou escreva diretamente para info@odestech.cn.",
        subject: "Consulta pelo site da ODES (PT)",
      },
    },

    notfound: {
      meta: { title: "Página não encontrada | ODES", description: "A página que você procura não existe." },
      title: "Página não encontrada.",
      body: "A página pode ter sido movida. Estas são as principais seções do site:",
      home: "Voltar ao início",
    },
  },
};

export default pt;
