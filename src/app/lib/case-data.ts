// Este ficheiro funciona como um "mini banco de dados" para os nossos estudos de caso.
// No futuro, estas informações podem vir de um CMS (Sistema de Gestão de Conteúdo).

export const caseStudies = [
  {
    slug: "gabriel-mario-advogados",
    client: "Gabriel Mário Advogados",
    title: "Website institucional com foco em autoridade",
    services: ["Desenvolvimento de Site Institucional", "SEO On-Page", "Integração de Contatos"],
    challenge: "O escritório possuía uma excelente reputação offline, mas a sua presença digital era fraca, com pouco conteúdo otimizado e um processo de contato pouco acessível para novos clientes.",
    solution: "Reestruturamos a arquitetura de conteúdo para destacar as áreas de atuação, criando páginas específicas para cada serviço. Implementámos formulários de contato com tracking para medir a origem dos leads e otimizámos o site para um carregamento rápido, especialmente em dispositivos móveis.",
    techStack: ["React", "Next.js", "CMS Headless", "Google Analytics", "Integração via Webhook"],
    result: "O novo site, moderno e profissional, resultou num aumento claro no volume de contatos qualificados, facilitando a captação de novas consultas e reforçando a autoridade digital do escritório.",
    quote: "A Neurostack entregou um site profissional em tempo recorde. Passámos a receber contatos qualificados com muito mais frequência.",
    quoteAuthor: "Dr. Gabriel Mário",
    liveUrl: "https://www.gabrielmarioadv.com.br/",
  },
  {
    slug: "roberlanio-advogados",
    client: "Roberlanio Advogados",
    title: "SEO local e estrutura por áreas de atuação",
    services: ["Site Institucional", "SEO Local", "Google Business Profile"],
    challenge: "O cliente tinha fraca visibilidade em pesquisas locais para termos cruciais do seu negócio, como “direito trabalhista” e “direito previdenciário” na sua cidade.",
    solution: "Implementámos páginas com conteúdo otimizado para SEO, metatags específicas, marcação Schema para motores de busca e uma otimização completa do perfil no Google My Business. Também treinámos a equipa do cliente para publicar artigos que reforçam a sua autoridade online.",
    techStack: ["CMS Focado em SEO", "Google Search Console", "Schema Markup"],
    result: "Como resultado, o escritório alcançou uma visibilidade significativamente maior nas pesquisas locais, o que se traduziu num aumento do tráfego orgânico e mais clientes a encontrarem os seus serviços online.",
    quote: "Com a ajuda da Neurostack, passámos a aparecer nas pesquisas certas — mais clientes encontram-nos online.",
    quoteAuthor: "Dr. Roberlanio",
    liveUrl: "https://www.roberlanioadv.com.br/",
  },
  {
    slug: "supletivo-jp",
    client: "Supletivo JP",
    title: "Portal institucional com foco em matrículas",
    services: ["Desenvolvimento de Site", "Otimização de Conversão (CRO)", "Integração de Formulários"],
    challenge: "O processo de matrícula era manual e o site anterior tinha uma alta taxa de abandono nos formulários de contato, resultando na perda de potenciais alunos.",
    solution: "Criámos páginas de cursos claras e objetivas, com formulários de matrícula simplificados que incluem validação em tempo real e auto-respostas. A integração direta com o WhatsApp permite um contato imediato, reduzindo drasticamente os passos necessários até à matrícula.",
    techStack: ["Frontend Responsivo", "Formulários Inteligentes", "Automação de Mensagens"],
    result: "A nova plataforma diminuiu o tempo médio entre a visita e o primeiro contato, clarificou os fluxos de matrícula e melhorou a experiência do utilizador, aumentando as conversões.",
    quote: "O processo ficou muito mais simples e direto. Vimos uma melhoria imediata na quantidade de matrículas iniciadas pelo site.",
    quoteAuthor: "Equipe Supletivo JP",
    liveUrl: "https://www.supletivojp.com.br/",
  },
  {
    slug: "garcom-digital",
    client: "Neurostack (Produto Interno)",
    title: "SaaS completo para gestão de restaurantes",
    services: ["Desenvolvimento de Produto", "SaaS", "FoodTech"],
    challenge: "Restaurantes perdem vendas por falta de um cardápio online eficiente, lutam para controlar custos e dependem de múltiplos canais de pedidos desconectados.",
    solution: "O Garçom Digital é uma plataforma SaaS que gera cardápios online, unifica pedidos de delivery e consumo local, e oferece um painel de gestão completo com controlo financeiro, relatórios de vendas e integração com gateways de pagamento e WhatsApp.",
    techStack: ["Node.js", "TypeScript", "React", "PostgreSQL", "WhatsApp Business API"],
    result: "Nosso piloto típico gera um aumento de mais de 25% nos pedidos online em 30 dias, reduzindo erros e aumentando o ticket médio através de upsells automatizados.",
    quote: "O Garçom Digital não é apenas um cardápio, é uma ferramenta de gestão que otimiza toda a nossa operação.",
    quoteAuthor: "Cliente Piloto",
    liveUrl: "#", // Link para a página do produto
  },
];

// Função para encontrar um case pelo seu 'slug' (o nome na URL)
export const getCaseBySlug = (slug: string) => {
  return caseStudies.find((p) => p.slug === slug);
};
