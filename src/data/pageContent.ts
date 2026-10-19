export interface MapItem {
  id: string;
  title: string;
  subtitle?: string;
  thumb: string;
  full: string;
  tag?: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BonusItem {
  id: string;
  number: number;
  title: string;
  description: string;
  value: string;
  badge: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  highlight?: boolean;
  highlightText?: string;
  popularityBadge?: string;
  originalPrice: string;
  currentPrice: string;
  installmentText: string;
  savingsText: string;
  ctaText: string;
  items: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PageContent {
  topBanner: {
    text: string;
  };
  hero: {
    title: string;
    highlightWord: string;
    description: string;
    ctaText: string;
    ctaSubtext: string;
    mockupImage: string;
    secondaryImages?: string[];
  };
  mapsShowcase: {
    title: string;
    subtitle: string;
    items: MapItem[];
  };
  pillars: {
    title: string;
    items: PillarItem[];
  };
  painCallout: {
    question: string;
    urgencyText: string;
    ctaText: string;
  };
  socialProofImages: string[];
  idealFor: {
    title: string;
    items: BenefitItem[];
  };
  everythingIncluded: {
    title: string;
    badge: string;
    description: string;
    mockupImage: string;
    bullets: string[];
  };
  bonuses: {
    preTitle: string;
    title: string;
    badge: string;
    items: BonusItem[];
  };
  pricing: {
    urgencyBanner: string;
    title: string;
    paymentMethodsImage: string;
    plans: {
      basic: PricingPlan;
      complete: PricingPlan;
    };
  };
  testimonials: {
    title: string;
    ctaText: string;
    images: string[];
  };
  guarantee: {
    days: number;
    title: string;
    description: string;
  };
  faqs: {
    title: string;
    items: FaqItem[];
  };
  footer: {
    copyright: string;
    disclaimer1: string;
    disclaimer2: string;
    disclaimer3: string;
  };
}

export const initialPageContent: PageContent = {
  topBanner: {
    text: "OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {today}",
  },
  hero: {
    title: "+200 Mapas Visuais de",
    highlightWord: "Histologia",
    description:
      "Estude Histologia de forma visual, organizada e objetiva. Reconheça tecidos, estruturas e lâminas com micrografias, ampliações e pistas de identificação desenvolvidas para estudantes de Enfermagem e Medicina",
    ctaText: "QUERO ACESSAR AGORA",
    ctaSubtext: "Acesso imediato • Pagamento seguro • Garantia de 7 dias",
    mockupImage: "/histologia/mockup_principal.png",
  },
  mapsShowcase: {
    title: "Veja os materiais",
    subtitle: "que você vai receber",
    items: [
      {
        id: "map-1",
        title: "Glândulas Exócrinas",
        subtitle: "Classificação, ductos e porções secretoras",
        thumb: "/histologia/map_glandulas_exocrinas.png",
        full: "/histologia/map_glandulas_exocrinas.png",
      },
      {
        id: "map-2",
        title: "Glândulas Endócrinas",
        subtitle: "Organização cordonal e vesicular • Capilares",
        thumb: "/histologia/map_glandulas_endocrinas.png",
        full: "/histologia/map_glandulas_endocrinas.png",
      },
      {
        id: "map-3",
        title: "Epitélio Simples Prismático",
        subtitle: "Camada única de células altas • Núcleo oval",
        thumb: "/histologia/map_epitelio_simples_prisma.png",
        full: "/histologia/map_epitelio_simples_prisma.png",
      },
      {
        id: "map-4",
        title: "Epitélio Simples Pavimentoso",
        subtitle: "Células achatadas • Difusão e revestimento",
        thumb: "/histologia/map_epitelio_simples.png",
        full: "/histologia/map_epitelio_simples.png",
      },
    ],
  },
  pillars: {
    title: "Os Mapas Visuais de Histologia possuem:",
    items: [
      {
        id: "p1",
        title: "Micrografias com pontos de identificação",
        description:
          "As estruturas mais importantes são destacadas diretamente na imagem para facilitar o reconhecimento",
        image: "/__l5e/assets-v1/6f515bfe-d45c-41e5-b859-167f0056163e/g5UVONG-916.webp",
      },
      {
        id: "p2",
        title: "Comparações objetivas",
        description:
          "Diferencie estruturas parecidas por critérios visuais, como camadas, matriz, formato celular e localização",
        image: "/__l5e/assets-v1/543b23b6-a73b-4c83-8c10-8e058efc4f38/rreZPtV-916.webp",
      },
      {
        id: "p3",
        title: "Organização por módulos",
        description:
          "O conteúdo segue uma sequência progressiva: fundamentos, tecidos, órgãos e revisões cumulativas para prova.",
        image: "/__l5e/assets-v1/1b2dc4db-7ba5-46d0-8681-edd8b9d54636/ykG2WoW-916.webp",
      },
      {
        id: "p4",
        title: "Leitura visual rápida",
        description:
          "Cada mapa apresenta uma ideia central, poucos conceitos-chave e uma sequência simples de revisão",
        image: "/__l5e/assets-v1/6152b704-5cf3-486b-9467-728a911fa5d9/19b9Wcb-560.webp",
      },
    ],
  },
  painCallout: {
    question:
      "Quantas vezes você ficou na dúvida sobre onde colocar cada eletrodo e acabou perdendo tempo no meio do atendimento?",
    urgencyText: "Aproveite a oferta por tempo limitado",
    ctaText: "QUERO ACESSAR AGORA",
  },
  socialProofImages: [
    "/histologia/proof1.png",
    "/histologia/proof2.png",
    "/histologia/proof3.png",
    "/histologia/proof4.png",
  ],
  idealFor: {
    title: "Este material é ideal para você que deseja",
    items: [
      {
        id: "i1",
        title: "Revisar Histologia para provas",
        description: "Retome os conteúdos principais com mapas organizados e visualmente objetivos.",
        iconName: "ShieldCheck",
      },
      {
        id: "i2",
        title: "Aprender a reconhecer lâminas",
        description: "Observe padrões, estruturas e características que ajudam na identificação microscópica.",
        iconName: "Zap",
      },
      {
        id: "i3",
        title: "Estudar mesmo com pouco tempo",
        description: "Use os mapas para revisar no celular, tablet, computador ou em páginas impressas.",
        iconName: "CheckCircle2",
      },
      {
        id: "i4",
        title: "Diferenciar estruturas parecidas",
        description: "Compare tecidos e órgãos que costumam causar confusão durante as provas.",
        iconName: "Clock",
      },
      {
        id: "i5",
        title: "Organizar o conteúdo de Histologia",
        description: "Siga uma sequência dividida em módulos, sem precisar procurar cada assunto em diferentes materiais.",
        iconName: "BookOpen",
      },
      {
        id: "i6",
        title: "Reforçar a memória visual",
        description: "Associe nomes, estruturas, funções e características microscópicas em uma única página.",
        iconName: "Users",
      },
    ],
  },
  everythingIncluded: {
    title: "Tudo o que você vai receber",
    badge: "Acesso imediato",
    description:
      "Tudo foi organizado para ser simples e fácil de usar. Você escolhe o módulo e já confere o conteúdo na mesma hora.",
    mockupImage: "/histologia/mockup_principal.png",
    bullets: [
      "Mais de 200 mapas visuais de Histologia",
      "16 módulos organizados",
      "Micrografias e imagens explicativas",
      "Comparações entre estruturas",
      "Revisões para prova",
      "Checklist de identificação de lâminas",
      "PDF digital em alta qualidade",
      "Acesso conforme as condições da plataforma",
    ],
  },
  bonuses: {
    preTitle: "E não para por aí...",
    title: "TEM MAIS!",
    badge: "🎁 4 BÔNUS EXCLUSIVOS",
    items: [
      {
        id: "b1",
        number: 1,
        title: "Plano de Revisão: Histologia em 7 Dias",
        description:
          "Cronograma visual e objetivo para organizar seus estudos e revisar os conteúdos essenciais antes das provas de Enfermagem e Medicina.",
        value: "R$37",
        badge: "GRÁTIS",
        image: "/histologia/bonuses/bonus1.png",
      },
      {
        id: "b2",
        number: 2,
        title: "Checklist da Lâmina em 60 Segundos",
        description:
          "Método prático em 4 passos (Observe, Oriente, Identifique e Confirme) para reconhecer tecidos e estruturas microscópicas sem travar na prova.",
        value: "R$27",
        badge: "GRÁTIS",
        image: "/histologia/bonuses/bonus2.png",
      },
      {
        id: "b3",
        number: 3,
        title: "Não Confunda: Histologia",
        description:
          "Comparações de alto rendimento destacando as diferenças entre tecidos e órgãos parecidos que mais causam confusão em provas.",
        value: "R$37",
        badge: "GRÁTIS",
        image: "/histologia/bonuses/bonus3.png",
      },
      {
        id: "b4",
        number: 4,
        title: "Flashcards Visuais: Recuperação Ativa",
        description:
          "Cards de memorização ativa para testar seu reconhecimento visual de lâminas e fixar estruturas e funções rapidamente.",
        value: "R$27",
        badge: "GRÁTIS",
        image: "/histologia/bonuses/bonus4.png",
      },
    ],
  },
  pricing: {
    urgencyBanner: "⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {today}",
    title: "Escolha a opção ideal para você",
    paymentMethodsImage: "/__l5e/assets-v1/15445bfe-41d7-4cd8-9699-9d571274e845/pay-600.webp",
    plans: {
      basic: {
        id: "basico",
        name: "PACOTE BÁSICO",
        originalPrice: "R$37,90",
        currentPrice: "R$17,90",
        installmentText: "ou 2x de R$9,41 no cartão",
        savingsText: "Você economiza R$20,00",
        ctaText: "QUERO SOMENTE O BÁSICO",
        items: [
          "Mais de 200 mapas visuais de Histologia",
          "Conteúdo organizado em 16 módulos",
          "Acesso imediato pela área de membros",
        ],
      },
      complete: {
        id: "completo",
        name: "PACOTE COMPLETO",
        badge: "⚡ MAIS VENDIDO",
        highlight: true,
        highlightText: "⚡ 3x mais conteúdos",
        popularityBadge: "92% das pessoas aproveitam a oferta completa",
        originalPrice: "R$57,90",
        currentPrice: "R$27,90",
        installmentText: "ou 5x de R$5,58 no cartão",
        savingsText: "Você economiza R$30,00",
        ctaText: "QUERO O PACOTE COMPLETO",
        items: [
          "Mais de 200 mapas visuais de Histologia",
          "16 módulos organizados",
          "Micrografias e estruturas destacadas",
          "Comparações entre tecidos e órgãos",
          "Revisões para prova e checklist de lâminas",
          "🎁 Bônus #1 Plano de Revisão: Histologia em 7 Dias",
          "🎁 Bônus #2 Checklist da Lâmina em 60 Segundos",
          "🎁 Bônus #3 Não Confunda: Histologia",
          "🎁 Bônus #4 Flashcards Visuais: Recuperação Ativa",
        ],
      },
    },
  },
  testimonials: {
    title: "Veja o que nossos clientes estão dizendo",
    ctaText: "QUERO MEU ACESSO AGORA",
    images: [
      "/__l5e/assets-v1/6f515bfe-d45c-41e5-b859-167f0056163e/g5UVONG-916.webp",
      "/__l5e/assets-v1/543b23b6-a73b-4c83-8c10-8e058efc4f38/rreZPtV-916.webp",
      "/__l5e/assets-v1/1b2dc4db-7ba5-46d0-8681-edd8b9d54636/ykG2WoW-916.webp",
    ],
  },
  guarantee: {
    days: 7,
    title: "Garantia de 7 dias",
    description:
      "Se em 7 dias você achar que o material não é para você, é só pedir o reembolso. Sem burocracia.",
  },
  faqs: {
    title: "Perguntas Frequentes",
    items: [
      {
        id: "faq-1",
        question: "Serve para quem está começando na eletroterapia?",
        answer:
          "Sim. Os mapas mostram o posicionamento de forma visual e objetiva, tanto para quem está começando quanto para quem já atende.",
      },
      {
        id: "faq-2",
        question: "Serve para Fisioterapia?",
        answer:
          "Sim. Os mapas foram organizados especialmente para o uso da eletroestimulação na prática da Fisioterapia.",
      },
      {
        id: "faq-3",
        question: "Posso acessar pelo celular?",
        answer:
          "Sim. Você pode acessar pelo celular, tablet ou computador a qualquer momento.",
      },
      {
        id: "faq-4",
        question: "O acesso é imediato?",
        answer:
          "Sim. Após a confirmação do pagamento, você recebe imediatamente no seu e-mail os dados para acessar o material.",
      },
      {
        id: "faq-5",
        question: "Os mapas podem ser impressos?",
        answer:
          "Sim. Você recebe os arquivos em PDF em alta resolução, prontos para imprimir e plastificar para usar na sua clínica ou consultório.",
      },
      {
        id: "faq-6",
        question: "Os bônus estão incluídos em qual pacote?",
        answer:
          "Os 4 bônus exclusivos fazem parte do Pacote Completo (R$ 27,90).",
      },
      {
        id: "faq-7",
        question: "O material substitui a avaliação profissional?",
        answer:
          "Não. É um material de apoio visual prático para profissionais e acadêmicos capacitados; a conduta e parâmetros devem ser sempre adaptados à avaliação clínica individual de cada paciente.",
      },
      {
        id: "faq-8",
        question: "O acesso é vitalício?",
        answer:
          "Sim. Você paga uma única vez e o acesso é permanente, podendo baixar os PDFs e consultar sempre que precisar.",
      },
      {
        id: "faq-9",
        question: "Serve para usar durante o atendimento?",
        answer:
          "Sim. Foi criado justamente como um atlas de consulta rápida para você conferir o posicionamento dos canais em segundos antes ou durante o atendimento.",
      },
      {
        id: "faq-10",
        question: "Serve para cursos e aulas de fisioterapia?",
        answer:
          "Sim. Os mapas são excelentes recursos didáticos para professores, preceptores de estágio, aulas práticas e treinamento de equipe.",
      },
    ],
  },
  footer: {
    copyright: "Copyright © 2026 | Todos os direitos reservados.",
    disclaimer1:
      "Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.",
    disclaimer2:
      "Material de apoio visual destinado a profissionais capacitados. Não substitui avaliação, formação técnica ou orientação profissional.",
    disclaimer3:
      "Todos os direitos sobre a obra '+50 Mapas Visuais de Posicionamento de Eletrodos para Fisioterapia' são reservados nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais). A reprodução não autorizada, no todo ou em parte, constitui violação dos direitos autorais.",
  },
};
