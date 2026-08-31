// Contenu traduit à partir de la version espagnole de disnet.es — fidèle au texte d'origine.
import type { Content } from "./types";

const company: Content["company"] = {
  name: "Disnet",
  legalName: "Disnet Sistemas de Distribución S.A.",
  tagline: "Opérateur logistique 3PL pour votre chaîne d'approvisionnement",
  phone: "93 725 82 22",
  phoneHref: "tel:+34937258222",
  email: "info@disnet.es",
  address: "C/ Pla del Fonollar, 15 – 08205 – Poligon Riu Sec – Sabadell",
  since: 1991,
  yearsExperience: 35,
};

const heroCopy: Content["heroCopy"] = {
  eyebrow: "Opérateur logistique à Barcelone",
  title: company.tagline,
  paragraphs: [
    "**Disnet** est composée de professionnels comptant **plus de 35 ans d'expérience dans la gestion logistique** de l'externalisation des chaînes d'approvisionnement. L'équipe gère les processus avec la connaissance et la rigueur nécessaires pour que l'externalisation des activités logistiques de toute organisation soit une réussite.",
    "Les membres de l'équipe Disnet se distinguent par leur grande capacité à identifier les besoins de leurs clients et à mettre en œuvre les mécanismes nécessaires pour y répondre.",
    "Conscients de l'évolution continue du secteur, l'équipe de Disnet se forme en permanence, à la recherche des connaissances les plus avancées en matière de nouvelles stratégies et méthodologies des opérations logistiques.",
    "L'équipe de Disnet garantit une structure logistique permanente, qui fait que tout est prêt au moment où vous en avez besoin.",
  ],
};

const heroSlideAlts: Content["heroSlideAlts"] = [
  "Installations de Disnet, opérateur logistique à Barcelone",
  "Entrepôt Disnet en activité",
  "Rayonnages de stockage Disnet",
  "Panneaux solaires sur le site de Disnet",
];

const companyIntroCopy: Content["companyIntroCopy"] = {
  paragraphs: [
    "**Disnet** est composée de professionnels comptant **plus de 35 ans d'expérience dans la gestion logistique** de l'externalisation des chaînes d'approvisionnement. L'équipe gère les processus avec la connaissance et la rigueur nécessaires pour que l'externalisation des activités logistiques de toute organisation soit une réussite.",
    "Les membres de l'équipe Disnet se distinguent par leur grande capacité à identifier les besoins de leurs clients et à mettre en œuvre les mécanismes nécessaires pour y répondre.",
    "Conscients de l'évolution continue du secteur, l'équipe de Disnet se forme en permanence. À la recherche des connaissances les plus avancées en matière de nouvelles stratégies et méthodologies des opérations logistiques.",
    "L'équipe de Disnet garantit une structure logistique permanente, qui fait que tout est prêt au moment où vous en avez besoin.",
  ],
};

const barcelonaCopy: Content["barcelonaCopy"] = {
  title: "Logistique à Barcelone avec Disnet",
  paragraphs: [
    "La ville de Barcelone est reconnue comme étant **l'un des principaux centres logistiques d'Espagne**, car elle bénéficie d'une position stratégique qui en fait un point clé pour le transport de marchandises, tant au niveau national qu'international.",
    "Pour les entreprises qui cherchent à améliorer leurs opérations et à tirer le meilleur parti des opportunités du marché, disposer de services logistiques à Barcelone est une décision judicieuse. Disnet, en tant qu'opérateur logistique leader dans la ville, propose des **solutions sur mesure adaptées aux besoins de chaque entreprise**, garantissant efficacité, qualité et satisfaction à chaque étape de la chaîne d'approvisionnement.",
  ],
  highlight: "Faites confiance à Disnet pour faire passer votre entreprise au niveau supérieur en matière de logistique !",
};

const stats: Content["stats"] = [
  { value: 12000, label: "Emplacements en racks" },
  { value: 15000, label: "Emplacements de picking" },
  { value: 100000, label: "Capacité de commandes e-commerce" },
];

const services: Content["services"] = [
  {
    slug: "recepcion-de-mercancias",
    name: "Réception de marchandises",
    headline: "Avec Disnet, la marchandise de votre entreprise est toujours en sécurité",
    intro: [
      "Nous gérons la réception des marchandises conformément aux **cahiers des charges** préalablement convenus avec les clients.",
      "Nous réalisons également les **contrôles de qualité logistique** et informons le client et/ou le fournisseur de toutes les incidences détectées.",
      "Nos méthodologies de travail visent à **optimiser les mouvements, garantir la traçabilité et maximiser l'efficacité** des opérations.",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Qu'est-ce que la réception de marchandises en logistique ?",
        answer:
          "C'est le processus de réception, de vérification et de contrôle de la qualité des produits qui arrivent dans un entrepôt avant leur stockage. Il comprend la vérification des quantités, de l'état et de la documentation selon les cahiers des charges convenus avec le client, ainsi que la notification de toute incidence détectée.",
      },
      {
        question: "Comment garantit-on la traçabilité lors de la réception des marchandises ?",
        answer:
          "Grâce à un Système de Gestion d'Entrepôt (SGE) qui enregistre chaque mouvement dès l'entrée, à des contrôles de qualité logistique systématiques et à une communication immédiate au client ou au fournisseur de toute incidence détectée lors du déchargement.",
      },
      {
        question: "Que se passe-t-il en cas d'incidence à la réception d'une commande ?",
        answer:
          "Elle est documentée et immédiatement signalée au client et/ou au fournisseur, ce qui permet de résoudre les écarts de quantité, les dommages ou les erreurs de référence avant que la marchandise n'entre en stock, évitant ainsi des problèmes ultérieurs dans l'inventaire.",
      },
      {
        question: "Combien de temps faut-il pour traiter la réception d'une commande ?",
        answer:
          "Cela dépend du volume et du type de marchandise, mais un opérateur logistique avec des processus optimisés peut traiter la réception, le contrôle de qualité et le rangement en entrepôt le jour même, minimisant ainsi le délai entre l'arrivée et la disponibilité du stock.",
      },
    ],
  },
  {
    slug: "manipulacion-de-mercancias",
    name: "Manutention de marchandises",
    headline: "Disnet, traçabilité garantie dans tous nos processus",
    intro: [
      "Nous réalisons toute opération de manutention convenue avec le client en garantissant la **traçabilité totale du processus**.",
      "Nous effectuons des manutentions quel que soit le volume du lot. Des petits lots avec peu d'automatisation aux **grands lots avec des séquences semi-automatisées**.",
    ],
    list: [
      "Repassage et mise en boîte ou en sachet de produits textiles.",
      "Assemblage de composants pour le secteur de l'automobile.",
      "Démontage et montage de meubles du secteur de la literie.",
      "Unification de matières premières avec d'autres pour définir le produit final.",
      "Confection de packs et groupage pour promotions.",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Qu'inclut le service de manutention de marchandises ?",
        answer:
          "Des opérations telles que le repassage et la mise en boîte de produits textiles, l'assemblage de composants, le démontage et le montage de meubles, l'unification de matières premières et la confection de packs et de groupages pour promotions, toujours avec une traçabilité totale du processus.",
      },
      {
        question: "Peut-on manipuler n'importe quel volume de marchandise ?",
        answer:
          "Oui. Un opérateur logistique expérimenté gère aussi bien de petits lots avec peu d'automatisation que de grands lots avec des séquences semi-automatisées, en adaptant le processus au type de produit et au volume spécifique de chaque client.",
      },
      {
        question: "Quels secteurs ont le plus besoin de services de manutention ?",
        answer:
          "Le textile et la mode (repassage, mise en boîte), l'automobile (assemblage de composants), l'ameublement (montage et démontage) et les secteurs nécessitant la confection de packs promotionnels ou l'unification de matières premières pour des produits finaux personnalisés.",
      },
      {
        question: "Comment garantit-on la traçabilité lors de la manutention des produits ?",
        answer:
          "Grâce à un système de gestion d'entrepôt qui enregistre chaque opération de manutention, de l'entrée du matériel jusqu'à la sortie du produit transformé, garantissant un contrôle total du processus quelle que soit la taille du lot.",
      },
    ],
  },
  {
    slug: "almacenaje",
    name: "Entreposage",
    headline: "Chez Disnet, nous disposons de la technologie la plus avancée pour l'entreposage de vos marchandises",
    intro: [
      "Nous avons la capacité de stocker de multiples types d'unités de charge (palettes, cartons, bobines, etc.) conformément aux **normes de manutention les plus exigeantes**. Tout cela pour garantir leur bonne conservation.",
      "Nous disposons de **plus de 6 000 emplacements en racks** conventionnels à palettes, **plus de 15 000 emplacements de picking** dans une installation de 6 500 m² dédiée à l'entreposage.",
      "Pour garantir l'exactitude des stocks, nous réalisons des **inventaires permanents** et en validons l'état.",
      "Notre **Système de Gestion d'Entrepôt (SGE)** nous permet d'appliquer une répartition adéquate des produits en fonction de la prévision de leur consommation, afin d'obtenir une meilleure optimisation du circuit logistique dans l'entrepôt.",
    ],
    sections: [
      {
        heading: "Stockage de marchandises, gestion des stocks et distribution",
        paragraphs: [
          "Chez Disnet, nous sommes **leaders en solutions de stockage et de logistique** à Barcelone. Nos entrepôts modernes et sécurisés sont stratégiquement situés pour vous offrir un accès rapide et pratique aux principaux réseaux de transport. Que vous ayez besoin de **stocker des produits, gérer des stocks ou réaliser des distributions efficaces**, notre équipe hautement qualifiée est prête à vous aider. Grâce à une technologie de pointe et à des systèmes de gestion avancés, nous pouvons garantir une gestion précise et transparente de vos marchandises.",
          "De plus, nous comprenons l'importance de la **flexibilité et de l'adaptabilité** dans l'environnement commercial actuel. C'est pourquoi nous proposons des **solutions personnalisées** qui s'adaptent à vos besoins spécifiques. Faites confiance à notre expérience et à notre engagement envers l'excellence pour optimiser vos opérations logistiques.",
          "Obtenez des **solutions personnalisées, des services fiables et efficaces**, et une équipe experte qui se chargera de tous vos besoins de stockage et de distribution. Ne perdez plus de temps, profitez de notre expérience et de notre emplacement stratégique pour faire passer votre entreprise au niveau supérieur.",
        ],
      },
      {
        heading: "Gestion du stockage à Barcelone",
        paragraphs: [
          "Chaque entreprise a des besoins uniques. Chez Disnet, nous le savons. C'est pourquoi nous vous proposons des solutions de stockage sur mesure, parfaitement adaptées à votre volume d'activité et au type de marchandise. Avec nous, vous profiterez de la sécurité, de l'efficacité et de la flexibilité dont vous avez besoin pour développer votre entreprise.",
          "Nous travaillons avec la **logistique textile et mode, la logistique cosmétique et parfumerie**, et tout autre secteur nécessitant un stockage spécialisé. Et si vous cherchiez simplement à louer un entrepôt à Barcelone, avec Disnet vous obtenez bien plus : un service logistique complet, sans la complexité de gérer vous-même l'espace, le personnel ou la technologie.",
        ],
      },
    ],
    benefitsTitle: "Avantages clés",
    benefits: [
      {
        title: "Sécurité",
        points: [
          "Systèmes de sécurité de dernière génération pour protéger vos marchandises.",
          "Accès restreint et contrôle des stocks en temps réel.",
        ],
      },
      {
        title: "Flexibilité",
        points: [
          "Nous adaptons nos solutions à vos besoins spécifiques et à votre volume d'activité.",
          "Contrats flexibles et évolutifs.",
        ],
      },
      {
        title: "Efficacité",
        points: [
          "Processus optimisés pour accélérer la gestion de vos stocks.",
          "Réduction des coûts opérationnels.",
        ],
      },
      {
        title: "Emplacement stratégique",
        points: [
          "Accès facile aux principaux axes de communication de Barcelone.",
          "Connexion avec les principaux ports et aéroports.",
        ],
      },
      {
        title: "Technologie",
        points: [
          "Plateforme technologique avancée pour le suivi et le contrôle de vos marchandises.",
          "Intégration avec vos systèmes de gestion.",
        ],
      },
    ],
    ctaLabel: "Demandez un devis personnalisé",
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Combien d'emplacements de stockage Disnet possède-t-il à Barcelone ?",
        answer:
          "Nous disposons de plus de 12 000 emplacements en racks conventionnels à palettes et de plus de 15 000 emplacements de picking dans une installation stratégiquement située à Sabadell, avec une capacité pour de multiples typologies d'unités de charge.",
      },
      {
        question: "Quels types de marchandises peuvent être stockés ?",
        answer:
          "Palettes, cartons, bobines et pratiquement toute unité de charge, y compris pour des secteurs spécialisés comme la logistique textile et mode, cosmétique et parfumerie, toujours selon les normes de manutention et de conservation les plus exigeantes.",
      },
      {
        question: "Qu'est-ce qu'un Système de Gestion d'Entrepôt (SGE) et pourquoi est-ce important ?",
        answer:
          "C'est le logiciel qui contrôle l'emplacement, le mouvement et l'inventaire de chaque produit en temps réel. Il permet de répartir la marchandise selon sa prévision de consommation, en optimisant le circuit logistique et en garantissant l'exactitude du stock grâce à des inventaires permanents.",
      },
      {
        question: "Vaut-il mieux louer son propre entrepôt ou faire appel à un opérateur 3PL pour le stockage ?",
        answer:
          "Louer un entrepôt implique de gérer soi-même l'espace, le personnel et la technologie. Avec un opérateur 3PL comme Disnet, vous bénéficiez d'un service logistique complet (sécurité, SGE, personnel spécialisé) sans cette complexité opérationnelle ni l'investissement initial.",
      },
    ],
  },
  {
    slug: "preparacion-de-pedidos",
    name: "Préparation de commandes",
    headline: "Disnet, spécialistes des processus de picking",
    intro: [
      "Chez Disnet, nous sommes des **experts dans l'exécution d'opérations de picking**, qui consistent en la préparation des commandes à partir du matériel stocké avant son envoi au destinataire.",
      "Notre planification minutieuse nous permet de choisir la méthode d'optimisation la plus appropriée dans chaque cas.",
    ],
    list: [
      "Batch picking (picking par vagues) : le matériel de toutes les commandes regroupées est extrait ensemble, puis les quantités de chaque référence destinées à chaque commande sont séparées.",
      "Pick to box : le matériel est extrait de manière groupée et placé directement dans les cartons d'expédition au point même de prélèvement, éliminant ainsi la nécessité d'un processus de séparation ultérieur.",
    ],
    extra: [
      "Notre contribution à votre chaîne d'approvisionnement se traduit par une compétitivité accrue, car nous rendons vos processus plus agiles et efficaces, tout en garantissant un contrôle et une traçabilité intégraux tout au long du processus de préparation des commandes.",
    ],
    sections: [
      {
        heading: "L'importance stratégique d'une préparation de commandes optimale",
        paragraphs: [
          "Sur un marché exigeant rapidité et exactitude, une préparation de commandes déficiente peut engendrer retards, erreurs et, en fin de compte, insatisfaction du client. Chez Disnet, nous comprenons que chaque commande est cruciale. C'est pourquoi notre planification est minutieuse, ce qui nous permet de sélectionner la méthode d'optimisation la plus appropriée dans chaque cas, garantissant que votre chaîne d'approvisionnement soit aussi fluide et efficace que possible.",
        ],
      },
      {
        heading: "Votre chaîne d'approvisionnement : plus agile et mieux maîtrisée grâce à notre préparation de commandes",
        paragraphs: [
          "La contribution de Disnet à votre chaîne d'approvisionnement va au-delà de la simple collecte de produits. Notre expertise en préparation de commandes se traduit par une compétitivité accrue pour votre entreprise. Nous rendons vos processus plus agiles et efficaces, en optimisant les délais et les ressources.",
          "De plus, nous garantissons un contrôle et une traçabilité intégraux tout au long du processus de préparation des commandes. Vous saurez à tout moment où se trouve chaque produit et à quelle phase du picking il se trouve, ce qui vous offre une tranquillité et une transparence totales.",
          "Faites confiance à Disnet pour une préparation de commandes impeccable qui stimule la satisfaction de vos clients et la croissance de votre entreprise.",
        ],
      },
    ],
    benefitsTitle: "Avantages concrets à confier votre préparation de commandes à Disnet",
    benefits: [
      { title: "Compétitivité accrue", description: "Des processus logistiques plus agiles et efficaces qui vous donnent un avantage sur le marché." },
      { title: "Réduction des erreurs", description: "Nous réduisons drastiquement les défaillances dans les expéditions, ce qui se traduit par moins de retours et une meilleure image de marque." },
      { title: "Rapidité des livraisons", description: "Nous accélérons la préparation des commandes pour que vos produits arrivent plus vite à destination, répondant ainsi aux attentes de vos clients." },
      { title: "Contrôle et traçabilité totale", description: "Nous vous offrons une visibilité complète sur chaque commande, du moment du picking jusqu'à l'expédition." },
      { title: "Libération de ressources", description: "En confiant la préparation des commandes à des experts, vous pouvez concentrer vos ressources humaines et financières sur la croissance et l'innovation de votre entreprise." },
    ],
    audienceTitle: "À qui s'adresse ce service de préparation de commandes ?",
    audience: [
      "Aux e-commerces qui ont besoin d'agilité et de précision pour gérer un volume élevé de commandes en ligne.",
      "Aux entreprises ayant un flux constant d'expéditions qui cherchent à optimiser leur logistique interne.",
      "Aux entreprises qui souhaitent réduire leurs coûts opérationnels et améliorer l'efficacité de leurs processus d'entrepôt.",
      "Aux marques qui aspirent à offrir une expérience client exceptionnelle grâce à des livraisons rapides et sans erreurs.",
    ],
    ctaLabel: "Contactez-nous",
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Quelle différence entre batch picking et pick to box ?",
        answer:
          "Le batch picking consiste à extraire ensemble le matériel de plusieurs commandes regroupées, puis à séparer les quantités par référence. Le pick to box place le matériel directement dans le carton d'expédition final au point même de prélèvement, éliminant une étape de séparation ultérieure.",
      },
      {
        question: "Comment choisit-on la méthode de picking la plus adaptée ?",
        answer:
          "On analyse le volume de commandes, la typologie des produits et la fréquence des expéditions de chaque client afin de sélectionner la méthode d'optimisation la plus appropriée, en donnant toujours la priorité à la rapidité et à la précision de la préparation.",
      },
      {
        question: "Quelles entreprises ont besoin d'un service de picking professionnel ?",
        answer:
          "Les e-commerces à fort volume de commandes en ligne, les entreprises avec un flux constant d'expéditions, celles qui cherchent à réduire leurs coûts opérationnels d'entrepôt et les marques qui souhaitent offrir des livraisons rapides et sans erreurs à leurs clients finaux.",
      },
      {
        question: "Comment la préparation de commandes affecte-t-elle les retours ?",
        answer:
          "Une préparation de commandes précise réduit drastiquement les erreurs d'expédition, l'une des principales causes de retours. Le contrôle et la traçabilité intégraux durant le picking minimisent les erreurs avant que la commande ne quitte l'entrepôt.",
      },
    ],
  },
  {
    slug: "empaqueado-packing",
    name: "Emballage – Packing",
    headline: "Chez Disnet, nous vous garantissons le meilleur emballage pour votre marchandise",
    intro: [
      "Dans nos opérations d'emballage, connues sous le nom de « packing », nous nous chargeons de préparer toutes les unités de transport dans lesquelles les commandes seront expédiées. Au cours de ce processus, nous appliquons les **critères les plus avancés en matière de durabilité, de sécurité et de traçabilité**.",
      "Notre système de gestion d'entrepôt (SGE) nous fournit des **recommandations sur l'emballage le plus adapté** à chaque expédition, garantissant une préparation efficace et appropriée.",
      "Une fois l'emballage réalisé, nous nous concentrons sur l'envoi de la marchandise conformément à la date de livraison spécifiée par le client, en générant toute la documentation nécessaire selon les exigences contractuelles, légales et réglementaires applicables.",
      "Cela garantit que chaque expédition respecte les normes et réglementations en vigueur.",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Quelle différence entre le packing et l'emballage standard ?",
        answer:
          "Le packing est la préparation spécifique de l'unité de transport pour l'expédition, en appliquant des critères de durabilité, de sécurité et de traçabilité. Un Système de Gestion d'Entrepôt recommande l'emballage le plus adapté selon le type de produit et la destination.",
      },
      {
        question: "Comment décide-t-on du matériel d'emballage à utiliser pour chaque expédition ?",
        answer:
          "Le Système de Gestion d'Entrepôt (SGE) analyse le type de produit, sa fragilité et la destination de l'expédition pour recommander automatiquement l'emballage le plus adapté, en équilibrant protection du produit, coût et durabilité.",
      },
      {
        question: "Quelle documentation est générée pendant le processus de packing ?",
        answer:
          "Toute la documentation nécessaire selon les exigences contractuelles, légales et réglementaires applicables à chaque expédition, garantissant sa conformité aux normes et réglementations en vigueur avant de quitter l'entrepôt vers sa destination.",
      },
      {
        question: "Le packing inclut-il un emballage personnalisé à la marque ?",
        answer:
          "Oui. Le service s'adapte aux besoins spécifiques de chaque client et de chaque type de produit, en donnant toujours la priorité aux critères les plus avancés de durabilité, de sécurité et de traçabilité pour chaque unité de transport préparée.",
      },
    ],
  },
  {
    slug: "e-commerce",
    name: "e-Commerce",
    headline: "Chez Disnet, nous vous garantissons les meilleurs délais de livraison",
    subheadline: "Fulfillment pour Shopify, WooCommerce et les principales plateformes",
    intro: [
      "Qui gère les livraisons de votre boutique en ligne ? Chez Disnet, nous prenons en charge tout le processus, de la commande passée sur votre site jusqu'à sa livraison chez le client. En suivant les tendances actuelles du commerce, nous sommes spécialistes de l'externalisation des chaînes d'approvisionnement pour le secteur de l'eCommerce. Avec **plus de 25 ans d'expérience**, nous avons géré et préparé des commandes, avec la capacité de traiter **plus de 2 000 000 d'expéditions par an**.",
    ],
    list: [
      "Optimiser les délais de livraison.",
      "Assurer la traçabilité de tous les processus logistiques.",
      "Offrir de la flexibilité dans les horaires de livraison.",
    ],
    extra: [
      "Chez Disnet, nous comprenons que, pour qu'une activité d'eCommerce prospère, la logistique doit offrir une expérience d'achat exceptionnelle. C'est la seule façon d'accroître la satisfaction du client. Il est donc essentiel que l'environnement en ligne fonctionne en harmonie avec le monde hors ligne. Pour y parvenir, nous maintenons une connectivité fluide avec les systèmes de gestion de l'information les plus utilisés, tels que **Shopify, WooCommerce, Magento, PrestaShop, Opencart**, entre autres.",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Avec quelles plateformes e-commerce Disnet s'intègre-t-il ?",
        answer:
          "Disnet propose un fulfillment avec une connectivité fluide pour Shopify, WooCommerce, Magento, PrestaShop, Opencart et d'autres systèmes de gestion, permettant à la logistique hors ligne de fonctionner en harmonie avec la boutique en ligne, sans friction technique.",
      },
      {
        question: "Combien d'expéditions e-commerce Disnet gère-t-il par an ?",
        answer:
          "Avec plus de 25 ans d'expérience dans le secteur, Disnet a la capacité de traiter plus de 2 000 000 d'expéditions par an, en optimisant les délais de livraison, la traçabilité et la flexibilité des horaires d'expédition.",
      },
      {
        question: "Qu'est-ce que le fulfillment et en quoi diffère-t-il de la logistique traditionnelle ?",
        answer:
          "Le fulfillment est la gestion intégrale de la commande e-commerce : réception du stock, stockage, picking, packing et envoi, le tout intégré à la plateforme en ligne. Contrairement à la logistique traditionnelle, il se concentre sur l'expérience d'achat numérique de bout en bout.",
      },
      {
        question: "Comment le fulfillment améliore-t-il les délais de livraison de ma boutique en ligne ?",
        answer:
          "En externalisant auprès d'un opérateur spécialisé, les commandes sont préparées et expédiées grâce à des processus optimisés et une traçabilité en temps réel, réduisant les annulations et renforçant la confiance du client face à des délais de livraison peu fiables.",
      },
    ],
  },
  {
    slug: "transporte-de-mercancias",
    name: "Transport de marchandises",
    headline: "Chez Disnet, nous offrons les meilleurs tarifs pour le transport de votre marchandise",
    subheadline: "Livraison rapide et toujours dans les délais",
    intro: [
      "Conformément à nos procédures, nous effectuons systématiquement le **contrôle de la qualité logistique** de l'expédition avant de procéder au chargement de la marchandise dans le moyen de transport.",
      "Nous utilisons les **agences de transport les plus adaptées** à chaque besoin afin de garantir le respect des taux de service convenus avec le client.",
      "Nous homologuons, qualifions et évaluons les agences de transport utilisées, quelle que soit la destination de la marchandise.",
      "Disnet peut également se charger de la prestation de tous types de services tels que la recherche et la sélection de transporteurs, la négociation des conditions, la préparation des contrats, ainsi que la gestion et le contrôle de l'exécution.",
      "De même, nous sommes en mesure de gérer efficacement les services de transport, ce qui nous permet d'offrir un service intégral d'expédition des commandes. Que vous ayez besoin de livraisons locales ou nationales, nous sommes prêts à prendre en charge chaque aspect de votre logistique de manière efficace, garantissant que vos produits arrivent à destination en toute sécurité et ponctuellement.",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Comment Disnet sélectionne-t-il les agences de transport ?",
        answer:
          "Nous homologuons, qualifions et évaluons les agences de transport selon chaque besoin et destination, en utilisant toujours les options les plus avantageuses pour garantir le respect des taux de service convenus avec le client.",
      },
      {
        question: "Quels contrôles de qualité sont effectués avant l'envoi de la marchandise ?",
        answer:
          "Le contrôle de la qualité logistique de l'expédition est toujours effectué avant le chargement de la marchandise dans le moyen de transport, en vérifiant l'état, les quantités et la documentation pour garantir qu'elle arrive à destination en toute sécurité et ponctuellement.",
      },
      {
        question: "Disnet gère-t-il le transport national et international ?",
        answer:
          "Oui. Disnet recherche et sélectionne les transporteurs, négocie les conditions, prépare les contrats et gère l'exécution, tant pour les livraisons locales et nationales que pour les expéditions internationales, en s'adaptant aux besoins de chaque client.",
      },
      {
        question: "Quel est l'avantage d'externaliser le transport avec un opérateur 3PL ?",
        answer:
          "On accède à de meilleurs tarifs grâce à la mutualisation des volumes de plusieurs clients, on élimine la gestion directe des transporteurs et on garantit un service intégral d'expédition avec un contrôle de qualité à chaque expédition.",
      },
    ],
  },
  {
    slug: "logistica-inversa",
    name: "Logistique inverse",
    headline: "Gestion des retours et des incidents en toute fiabilité",
    intro: [
      "Chez Disnet, nous ne nous limitons pas à la gestion efficace des livraisons, nous nous occupons également de la logistique inverse, qui englobe la **gestion des retours** et la résolution de tout incident pouvant survenir au cours du processus.",
      "Nous maintenons une connectivité avec les systèmes de gestion de l'information les plus largement utilisés, tels que Shopify, WooCommerce, Magento, PrestaShop, Opencart et d'autres. Cela nous permet d'être en phase avec les plateformes d'eCommerce et de garantir une intégration sans problème à toutes les étapes de la chaîne d'approvisionnement.",
      "Nous reconnaissons qu'offrir facilité et rapidité dans les processus de réclamation et de retour est essentiel à la satisfaction du client. C'est pourquoi nous avons développé plusieurs alternatives d'accompagnement conçues pour simplifier et accélérer ces procédures. Notre objectif est de permettre aux clients d'effectuer des retours de manière fiable et sans coûts qui intimideraient ou nuiraient à leur expérience d'achat ou à l'activité de nos clients.",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Qu'est-ce que la logistique inverse et qu'inclut-elle ?",
        answer:
          "C'est la gestion du flux de produits depuis le client final jusqu'au retour à l'entrepôt : retours, échanges, commandes non livrées et produits défectueux, en résolvant toute incidence pouvant survenir tout au long du processus de retour.",
      },
      {
        question: "Avec quelles plateformes la gestion des retours s'intègre-t-elle ?",
        answer:
          "Disnet maintient une connectivité avec Shopify, WooCommerce, Magento, PrestaShop, Opencart et d'autres systèmes de gestion e-commerce, garantissant une intégration sans problème à toutes les étapes de la chaîne d'approvisionnement, y compris les retours.",
      },
      {
        question: "Pourquoi est-il important d'externaliser la logistique inverse ?",
        answer:
          "Cela facilite des processus de réclamation et de retour rapides et fiables, sans coûts qui intimident le client. Cela améliore la satisfaction et la fidélisation, en particulier dans des secteurs comme la mode ou l'électronique où les retours peuvent représenter entre 20 % et 40 % des ventes.",
      },
      {
        question: "Comment la logistique inverse affecte-t-elle l'expérience client d'un e-commerce ?",
        answer:
          "Une gestion des retours agile et sans friction renforce la confiance de l'acheteur au moment de décider d'un achat en ligne, car il sait qu'un échange ou un retour ne sera pas un processus compliqué ni coûteux.",
      },
    ],
  },
];

const whyChooseUs: Content["whyChooseUs"] = {
  title: "Pourquoi choisir Disnet ?",
  intro: [
    "Disnet est un 3PL qui offre **depuis 1991 un service flexible** adapté aux besoins de chaque client. La raison d'être de Disnet est de prendre en charge toutes les exigences logistiques de nos clients en adaptant nos méthodes de travail, notre organisation et nos installations pour répondre à leurs attentes avec la **rapidité et la fiabilité maximales**.",
    "Notre dimension et notre proximité nous rendent accessibles à toute organisation, des **PME et petites entreprises locales** aux organisations industrielles de plus grande envergure.",
  ],
  points: [
    {
      title: "Économies de coûts",
      description: "La réduction des coûts est l'une des principales raisons de faire appel à nos services en tant que 3PL.",
    },
    {
      title: "Emplacement stratégique",
      description: "Centre logistique à Sabadell (Vallès Occidental), avec des accès rapides aux principaux axes de communication de Barcelone.",
    },
    {
      title: "En ligne",
      description: "Toutes les informations sur vos mouvements en temps réel.",
    },
    {
      title: "Application SGE Multi-Entrepôt",
      description: "Système de gestion qui nous permet de traiter les produits les plus divers et de maintenir une traçabilité stricte de ceux-ci. Toutes les informations sur vos mouvements en ligne et en temps réel.",
    },
  ],
};

const empresaCopy: Content["empresaCopy"] = {
  title: "Disnet – la logistique comme philosophie de travail",
  intro: [
    "Vous recherchez une entreprise de logistique fiable et efficace à Barcelone ? Chez Disnet, nous sommes fiers d'offrir des **services logistiques de première classe** depuis notre centre logistique à **Sabadell, en plein cœur du Vallès Occidental**.",
    "Que vous ayez besoin de transport, de stockage ou de distribution de marchandises, notre équipe hautement qualifiée et nos **solutions personnalisées** sont conçues pour répondre à vos besoins spécifiques. Grâce à un solide réseau de partenaires et à une vaste expérience dans le secteur, nous nous engageons à vous fournir des **solutions logistiques intégrales** qui optimisent vos opérations et vous aident à atteindre vos objectifs commerciaux.",
    "Faites confiance à notre expérience locale et à notre engagement à vous offrir un service fiable et efficace. Contactez-nous dès aujourd'hui et découvrez comment nous pouvons contribuer au succès de votre entreprise à Barcelone !",
  ],
  mission: "Apporter de la compétitivité aux processus logistiques.",
  vision: "Être l'opérateur logistique des chaînes d'approvisionnement de ses clients.",
  values: "Professionnalisme, intégrité, confiance, efficacité et efficience…",
};

const jobsCopy: Content["jobsCopy"] = {
  title: "Travaillez avec nous",
  description: "Vous voulez rejoindre l'équipe de Disnet ? Envoyez-nous vos coordonnées et votre CV, et nous vous contacterons.",
  legal:
    "Vos données seront traitées par Disnet Sistemas de Distribución S.A. et seront conservées pendant 5 ans, conformément à la Loi organique 3/2018 du 5 décembre relative à la protection des données à caractère personnel, dans le but de gérer les processus de sélection du personnel. Vous pouvez exercer vos droits d'accès, de rectification et d'annulation dans les conditions établies par la loi.",
};

const contactCopy: Content["contactCopy"] = {
  title: "Contactez Disnet",
  subtitle: "Notre flexibilité envers nos clients nous permet de nous adapter à vos besoins",
};

const clientAreaCopy: Content["clientAreaCopy"] = {
  title: "Espace clients Disnet",
  description: "Pour votre confort et votre contrôle maximal, Disnet vous propose son « Espace clients », où vous aurez accès à toutes vos informations importantes en ligne et en temps réel.",
  portals: [
    { name: "MyDLS", description: "Disnet Logistic System", href: "https://websrv2.disnet.es:3000/" },
    { name: "B2B", description: "Disnet B2B", href: "https://b2b.disnet.es/SignUP.php" },
  ],
};

const blogPosts: Content["blogPosts"] = [
  {
    slug: "operador-logistico-barcelona",
    date: "10 juillet 2026",
    title: "Opérateur logistique à Barcelone : les points clés à considérer avant de vous engager",
    excerpt: "Gérer en interne la chaîne d'approvisionnement d'une entreprise peut rapidement devenir un véritable goulot d'étranglement opérationnel. À mesure qu'une activité grandit, des tâches critiques comme…",
    body: [
      { text: "Gérer en interne la chaîne d'approvisionnement d'une entreprise peut rapidement devenir un **véritable goulot d'étranglement opérationnel**. À mesure qu'une activité grandit, des tâches critiques comme le stockage, le contrôle des stocks et l'expédition des marchandises absorbent des ressources humaines et un temps précieux qui devraient être investis dans les ventes et la stratégie de marque. Dans ce contexte, déléguer les processus à un opérateur logistique à Barcelone n'est pas seulement une alternative d'économie, c'est une **décision stratégique indispensable**." },
      { text: "Barcelone s'affirme comme l'un des principaux hubs logistiques du sud de l'Europe et un point de connexion stratégique à l'échelle nationale et internationale. Cependant, choisir le bon partenaire d'infrastructure physique exige d'évaluer certains critères de poids. Fort de l'expérience de Disnet, spécialiste du secteur depuis plus de 35 ans (depuis 1991), nous détaillons les facteurs essentiels à analyser avant de signer avec votre prochain prestataire 3PL." },
      { heading: "Emplacement stratégique et connectivité avec les voies de distribution" },
      { text: "Le succès de la distribution physique repose sur l'immédiateté. Un opérateur logistique optimal doit disposer d'entrepôts situés de manière à faciliter des accès rapides aux principaux axes de communication, aéroports et ports maritimes. Disposer d'entrepôts dans la ceinture industrielle de Barcelone réduit les temps de transit et les coûts du dernier kilomètre." },
      { heading: "Technologie avancée et traçabilité des stocks en temps réel" },
      { text: "Vous ne pouvez pas vous permettre de perdre la visibilité sur vos produits. Avant de vous engager, assurez-vous que l'opérateur met en œuvre une application SGE (Système de Gestion d'Entrepôt) multi-entrepôt avancée. Cela vous garantira l'accès à toutes les informations sur vos mouvements en ligne et en temps réel, en maintenant une traçabilité stricte des produits les plus divers." },
      { heading: "Flexibilité opérationnelle et capacité d'évolutivité" },
      { text: "Le marché fluctue et votre entreprise aussi. Votre partenaire logistique doit offrir une structure flexible, capable de s'adapter aux pics de demande saisonniers (comme le Black Friday ou les campagnes de Noël) sans compromettre la qualité. Évaluez ses capacités : chez Disnet, nous disposons d'un soutien de 12 000 emplacements en racks et 15 000 emplacements de picking ; cela garantit que l'espace ne sera jamais une limite à votre croissance." },
      { heading: "Expérience avérée et rigueur dans l'externalisation" },
      { text: "La logistique physique exige des connaissances, des méthodologies avant-gardistes et une formation continue. Une équipe forte de plusieurs décennies d'expérience dans l'externalisation des chaînes d'approvisionnement saura identifier de manière proactive les besoins exacts de votre organisation, garantissant un rouage parfait et minimisant les marges d'erreur dans la préparation." },
      { heading: "Transformation des coûts fixes en coûts variables" },
      { text: "Un avantage financier crucial de faire appel à un 3PL expert est l'économie sur les coûts directs. En externalisant, vous éliminez les charges fixes liées à la location d'entrepôts, à la maintenance, au recrutement de personnel propre et aux équipements de stockage, en ne payant que pour l'espace et les services réellement consommés mois après mois." },
      { heading: "Solutions intégrales : au-delà de l'opération logistique standard" },
      { text: "Pour que l'externalisation de vos activités logistiques soit un succès total, votre partenaire ne doit pas se limiter à stocker des cartons ; il doit prendre en charge de manière intégrale la distribution physique de vos produits afin que vous puissiez vous décharger complètement du processus." },
      { text: "Chez Disnet, notre priorité est la satisfaction du client à travers des solutions sur mesure qui couvrent toutes les étapes de la chaîne : réception et manutention des marchandises avec un contrôle exhaustif des entrées ; entreposage avancé dans des installations préparées pour accueillir les articles les plus divers ; préparation des commandes (picking) avec une capacité installée pour gérer des flux massifs de sortie ; emballage personnalisé (packing) pour assurer la protection du produit pendant le transport ; logistique spécialisée pour l'e-commerce, avec des systèmes capables de traiter jusqu'à 100 000 commandes ; et transport de marchandises ainsi que logistique inverse pour la gestion efficace des retours." },
      { heading: "Faites confiance à l'expérience pour transformer votre logistique" },
      { text: "Faire appel à un opérateur physique à Barcelone est une étape décisive pour porter la compétitivité de votre entreprise au niveau supérieur. Choisir fiabilité, infrastructure de pointe et proximité humaine fait toute la différence entre un service marqué par des erreurs constantes et une chaîne d'approvisionnement impeccable." },
      { text: "Fort de plus de 35 ans d'expérience dans le secteur, Disnet met à votre disposition une structure permanente et une équipe en formation continue, prête à répondre à vos attentes opérationnelles les plus exigeantes, que vous soyez une petite entreprise locale ou une grande organisation industrielle." },
    ],
  },
  {
    slug: "operador-logistico-3pl-barcelona",
    date: "11 juin 2026",
    title: "Opérateur logistique 3PL : l'allié stratégique pour déléguer votre logistique et développer votre entreprise",
    excerpt: "Gérer la chaîne d'approvisionnement, le stockage et les expéditions d'une entreprise peut rapidement devenir un véritable casse-tête. Lorsque le volume augmente, le temps que vous devriez…",
    body: [
      { text: "Gérer la chaîne d'approvisionnement, le stockage et les expéditions d'une entreprise peut rapidement devenir un **véritable casse-tête**. Lorsque le volume augmente, le temps que vous devriez consacrer à vendre et à développer votre marque se dilue entre les cartons, les inventaires et les bons de livraison." },
      { text: "Pour éviter que la gestion opérationnelle ne freine votre développement, faire appel à un opérateur logistique 3PL expert est la solution définitive. En externalisant ces processus auprès d'un spécialiste, vous libérez non seulement des ressources humaines et un temps précieux, mais vous confiez aussi l'efficacité de vos livraisons à des professionnels. Chez Disnet, nous prenons en charge absolument tout le processus afin que vous puissiez vous recentrer sur l'essentiel : votre entreprise." },
      { heading: "Qu'est-ce qu'un opérateur logistique 3PL et comment transforme-t-il votre activité ?" },
      { text: "Le concept 3PL (Third-Party Logistics ou Logistique de tiers) désigne les services globaux qu'une entreprise sous-traite à un prestataire externe spécialisé afin qu'il assume la responsabilité de la gestion logistique." },
      { text: "Contrairement à d'autres modèles, un opérateur logistique 3PL intégral comme Disnet n'agit pas comme un simple intermédiaire ou consultant ; nous mettons à votre disposition des infrastructures physiques avancées et des ressources propres, en nous chargeant directement de la réception et du stockage sécurisé de vos marchandises, de la gestion intelligente des stocks et du contrôle des inventaires, de la préparation avancée des commandes (picking et packing) adaptée à l'e-commerce et au B2B, ainsi que de la distribution, du transport national et international et du contrôle minutieux de la logistique inverse (retours)." },
      { heading: "Quelle est la différence entre un opérateur 3PL et un 4PL ?" },
      { text: "Il est très courant de confondre ces termes, mais leur portée et leurs outils opérationnels sont totalement différents. Un opérateur logistique 3PL dispose de ressources physiques propres, telles que des entrepôts industriels, des installations équipées et des accords de transport consolidés. Il met les mains dans le cambouis de l'opérationnel direct : il stocke votre produit, prépare le colis avec minutie et le livre à destination ponctuellement." },
      { text: "Un opérateur 4PL, en revanche, fonctionne principalement à un niveau de conseil, d'administration et d'optimisation numérique de la chaîne d'approvisionnement. Il ne dispose généralement pas d'entrepôts ni de moyens de transport propres, mais sous-traite à son tour à des opérateurs 3PL pour l'exécution de la tâche physique." },
      { text: "En travaillant avec Disnet, vous bénéficiez de l'avantage direct de traiter avec celui qui gère physiquement votre inventaire, ce qui fluidifie la communication et élimine les couches intermédiaires de coûts." },
      { heading: "Avantages stratégiques : pourquoi votre entreprise a-t-elle besoin d'un opérateur logistique 3PL ?" },
      { text: "Faire confiance à l'expérience d'un opérateur logistique 3PL consolidé apporte une série d'avantages compétitifs qui impactent directement votre compte de résultat : des économies massives sur les coûts fixes et l'investissement, en transformant les dépenses de location, cautions, équipements et transport propre en coûts variables ; une technologie avancée et une traçabilité intégrale, grâce à des systèmes de gestion d'entrepôt (SGE) permettant de surveiller le stock et l'état de chaque expédition en temps réel ; une évolutivité et une flexibilité face aux pics de demande, pour absorber des campagnes comme le Black Friday ou Noël sans que la structure ne s'effondre ; et des tarifs d'expédition plus compétitifs et des livraisons rapides, grâce à la mutualisation des volumes de plusieurs clients qui permet d'optimiser les itinéraires et d'accéder à de meilleurs accords de transport." },
      { heading: "Questions fréquentes" },
      { heading: "Qu'est-ce qu'un système 3PL ?" },
      { text: "C'est l'externalisation stratégique d'une ou plusieurs fonctions opérationnelles de la chaîne d'approvisionnement (comme le stockage, le contrôle des stocks, le picking et le transport) auprès d'un prestataire externe spécialisé tel que Disnet." },
      { heading: "Quels avantages le système 3PL offre-t-il à mon entreprise ?" },
      { text: "Il vous permet de réduire les coûts opérationnels, de rendre votre infrastructure plus flexible pour évoluer rapidement et d'améliorer la satisfaction client grâce à des livraisons précises, tout en libérant complètement votre équipe de la charge de travail logistique." },
      { heading: "Le système 3PL est-il réservé aux grandes entreprises ?" },
      { text: "Non. Le modèle 3PL convient aux entreprises de toutes tailles, des startups et e-commerces en pleine croissance aux grandes entreprises qui doivent déléguer des opérations complexes sans engager d'investissements élevés en actifs physiques." },
      { heading: "Vais-je perdre le contrôle de ma logistique en l'externalisant ?" },
      { text: "Absolument pas. Bien au contraire : grâce à nos outils technologiques intégrés, vous conservez une visibilité totale et des rapports en temps réel sur votre stock, la préparation et les phases de distribution à tout moment." },
      { heading: "Investissez dans la tranquillité et la croissance de votre entreprise" },
      { text: "Déléguer vos opérations à un opérateur logistique 3PL spécialisé ne signifie pas perdre le contrôle, mais gagner en efficacité, en agilité et en capacité de réaction. La clé du succès entrepreneurial réside dans le fait de concentrer les efforts sur les domaines qui génèrent une réelle valeur, tandis que les experts s'assurent que chaque colis arrive parfait et à temps entre les mains du client final." },
      { text: "Chez Disnet, nous réunissons expérience, installations de premier niveau et solutions sur mesure spécialement conçues pour stimuler votre entreprise. Laissez derrière vous les préoccupations logistiques et préparez-vous à une croissance durable." },
    ],
  },
  {
    slug: "empresas-de-logistica-tecnologia-inteligencia-artificial",
    date: "4 mai 2026",
    title: "Comment la technologie et l'intelligence artificielle transforment-elles les entreprises de logistique ?",
    excerpt: "Les entreprises de logistique ont évolué bien au-delà du simple transport de marchandises. Aujourd'hui, la clé réside dans l'intégration d'une technologie permettant de travailler avec plus de précision, de rapidité et…",
    body: [
      { text: "Les entreprises de logistique ont évolué bien au-delà du simple transport de marchandises. Aujourd'hui, la clé réside dans l'intégration d'une technologie permettant de travailler avec **plus de précision, de rapidité et de contrôle**. L'intégration d'outils avancés comme l'**intelligence artificielle et l'automatisation** transforme radicalement la façon dont les commandes, les expéditions et le stockage sont gérés." },
      { text: "Il ne s'agit plus seulement de déplacer des produits, mais de le faire de manière plus intelligente, efficace et sans erreurs. C'est pourquoi nous vous expliquons aujourd'hui comment la technologie et l'intelligence artificielle révolutionnent les entreprises de logistique, et pourquoi choisir un partenaire qui mise sur l'innovation peut faire toute la différence pour votre entreprise." },
      { heading: "Intelligence artificielle en logistique : des décisions plus rapides et plus précises" },
      { text: "L'intelligence artificielle permet aux entreprises de logistique d'anticiper les situations et d'améliorer la prise de décision en temps réel. Parmi ses applications les plus pertinentes figurent la prévision de la demande, qui permet d'anticiper les pics de commandes et d'ajuster le stock pour éviter les ruptures ou les excédents d'inventaire ; l'optimisation des itinéraires, en analysant les variables pour choisir les trajets les plus efficaces et réduire les délais et les coûts ; l'automatisation des processus, de la gestion des commandes au contrôle des stocks, en minimisant les erreurs et en améliorant la productivité ; et la détection des incidents, en identifiant les problèmes potentiels avant qu'ils n'affectent l'exploitation ou le client final." },
      { heading: "Automatisation logistique : plus d'efficacité, moins d'erreurs" },
      { text: "L'automatisation est l'une des grandes avancées des entreprises de logistique actuelles. Grâce à elle, il est possible d'optimiser les tâches clés sans dépendre de processus manuels, ce qui permet de préparer les commandes plus rapidement, de réduire les erreurs de picking et de packing, de maintenir un contrôle constant du stock et d'améliorer les délais de livraison. Le résultat est une exploitation beaucoup plus agile et fiable." },
      { heading: "Traçabilité et contrôle en temps réel" },
      { text: "L'un des grands avantages de la technologie en logistique est la possibilité d'avoir une visibilité totale sur chaque commande : suivi en temps réel des expéditions, informations actualisées sur l'état des commandes, meilleur contrôle de l'exploitation et capacité de réaction face à tout incident." },
      { heading: "Pourquoi choisir une entreprise de logistique qui mise sur la technologie ?" },
      { text: "Travailler avec une entreprise de logistique qui intègre l'intelligence artificielle et l'automatisation n'est pas seulement une amélioration interne, c'est un avantage direct pour votre entreprise : des livraisons plus rapides grâce à des processus optimisés et une meilleure planification, moins d'erreurs grâce à l'automatisation qui réduit les défaillances humaines, des économies de coûts grâce à l'optimisation des ressources et des délais, une évolutivité pour croître sans complications logistiques, et une meilleure expérience client grâce à une transparence, une rapidité et une confiance accrues à chaque envoi." },
      { heading: "Disnet : la technologie au service de solutions logistiques concrètes" },
      { text: "Chez Disnet, nous travaillons avec une approche claire : appliquer la technologie pour améliorer chaque phase de la logistique. Nous intégrons des solutions qui permettent un contrôle total de l'exploitation, une optimisation des processus, une réduction des délais et des coûts, et une plus grande précision à chaque envoi." },
      { text: "Nous combinons expérience et technologie pour offrir une logistique adaptée aux besoins réels de chaque client." },
    ],
  },
  {
    slug: "operador-logistico-vs-logistica-propia",
    date: "27 avril 2026",
    title: "Opérateur logistique vs logistique interne : quelle option stimule réellement la croissance de votre entreprise ?",
    excerpt: "Bien gérer la logistique d'une entreprise va bien au-delà du simple fait de stocker des produits ou de les envoyer à temps. Aujourd'hui, l'efficacité de la chaîne d'approvisionnement peut faire la différence entre…",
    body: [
      { text: "Bien gérer la logistique d'une entreprise va bien au-delà du simple fait de stocker des produits ou de les envoyer à temps. Aujourd'hui, **l'efficacité de la chaîne d'approvisionnement** peut faire la différence entre une entreprise compétitive et une autre qui perd en rentabilité, en temps et en opportunités." },
      { text: "Face à ce constat, de nombreuses organisations sont confrontées à une décision clé : maintenir une logistique interne ou opter pour un opérateur logistique spécialisé. Bien que gérer certaines opérations en interne puisse sembler être une solution de contrôle, de plus en plus d'entreprises découvrent que travailler avec un opérateur logistique comme Disnet représente un avantage stratégique, économique et opérationnel bien plus solide." },
      { heading: "Qu'implique le fait d'avoir une logistique interne ?" },
      { text: "La logistique interne implique que l'entreprise assume directement tous les processus liés à sa chaîne d'approvisionnement : réception des marchandises, entreposage, contrôle des stocks, préparation des commandes, emballage, transport, gestion des retours, technologie de traçabilité et personnel spécialisé." },
      { text: "À première vue, cela peut sembler être un moyen de garder un contrôle absolu, mais en pratique, cela implique un investissement constant en infrastructure, technologie, formation, ressources humaines et capacité d'adaptation. Parmi les principaux défis de la logistique interne figurent les coûts fixes élevés en installations, personnel et équipements ; la complexité opérationnelle accrue ; la difficulté à évoluer en période de forte demande ; le risque d'erreurs dans la préparation et la distribution ; la capacité technologique moindre ; et le besoin de mise à jour constante." },
      { heading: "Que propose un opérateur logistique 3PL ?" },
      { text: "Un opérateur logistique (Third Party Logistics) externalise et optimise tous les processus logistiques afin que l'entreprise puisse se concentrer sur son cœur de métier pendant que des experts gèrent la chaîne d'approvisionnement." },
      { text: "Dans le cas de Disnet, nous parlons d'une structure consolidée depuis 1991, forte de plus de 35 ans d'expérience et d'une capacité intégrale à s'adapter à tout besoin logistique. Avec Disnet, vous obtenez flexibilité opérationnelle, économies de coûts, traçabilité en temps réel, emplacement stratégique à Barcelone et technologie avancée avec SGE multi-entrepôt." },
      { heading: "Services clés qu'un opérateur logistique efficace doit proposer" },
      { text: "Pour qu'une externalisation soit réellement rentable, l'opérateur doit couvrir tous les domaines critiques : réception des marchandises, avec contrôle d'entrée, vérification et organisation efficace des produits ; manutention des marchandises, avec des processus adaptés à chaque type de produit ; entreposage, avec des espaces optimisés et une traçabilité permanente ; préparation des commandes, avec un picking efficace pour réduire les erreurs et accélérer les délais ; emballage (packing), en veillant à la protection et à la présentation des envois ; e-commerce, avec une intégration logistique pour les boutiques en ligne et une gestion omnicanale ; transport de marchandises, avec une distribution agile et un accès stratégique aux principaux axes ; et logistique inverse, pour une gestion efficace des retours." },
      { heading: "Logistique interne vs opérateur logistique : comparatif réel" },
      { text: "En termes de coûts, la logistique interne implique un investissement élevé et des coûts fixes permanents, tandis qu'un opérateur logistique réduit les coûts grâce à une structure déjà optimisée. En termes de flexibilité, la logistique interne est limitée par les ressources internes, contrairement à la capacité d'adaptation d'un opérateur logistique en fonction de la demande. En termes de technologie, la logistique interne exige un investissement en logiciels, SGE et traçabilité propres, tandis qu'un opérateur logistique donne un accès immédiat à des systèmes avancés comme le SGE multi-entrepôt et le contrôle en ligne en temps réel. En termes d'emplacement stratégique, la logistique interne dépend des ressources propres de l'entreprise, tandis qu'un opérateur logistique dispose déjà d'infrastructures dans des points stratégiques comme Barcelone. Et en termes d'évolutivité, la logistique interne implique une croissance plus lente et plus coûteuse, contrairement à la croissance flexible et sans investissements importants qu'offre un opérateur logistique." },
      { heading: "Pourquoi Disnet peut-il être votre meilleure option ?" },
      { text: "Disnet ne propose pas seulement des services logistiques ; elle offre une structure intégrale conçue pour devenir une extension stratégique de votre entreprise. Parmi ses avantages compétitifs figurent plus de 35 ans d'expérience, un service flexible adapté à chaque client, un emplacement stratégique à Barcelone, des économies de coûts, des informations en ligne en temps réel, un système SGE multi-entrepôt, une traçabilité stricte, une formation continue aux nouvelles méthodologies et une capacité d'accompagnement pour les petites, moyennes et grandes entreprises." },
      { heading: "La vraie question n'est pas d'externaliser ou non, mais avec qui le faire" },
      { text: "Lorsqu'une entreprise décide de croître, d'optimiser ses ressources et d'améliorer sa compétitivité, la logistique cesse d'être une simple opération pour devenir une stratégie. Choisir un opérateur logistique comme Disnet, c'est transformer les coûts en efficacité, les processus en opportunités et la logistique en avantage compétitif." },
      { text: "Si vous cherchez à réduire vos coûts, améliorer vos délais, optimiser votre chaîne d'approvisionnement et disposer d'une structure logistique prête à grandir avec vous, c'est le moment de franchir la prochaine étape." },
    ],
  },
  {
    slug: "preparacion-de-pedidos-cosas-que-debes-tener-en-cuenta-antes-de-contratar-este-servicio",
    date: "20 avril 2026",
    title: "Préparation de commandes : les points à considérer avant de souscrire ce service",
    excerpt: "La préparation de commandes est l'un des processus les plus critiques de la logistique de toute entreprise qui gère des expéditions. Une gestion efficace du picking a un impact non seulement sur la rapidité des…",
    body: [
      { text: "La préparation de commandes est l'un des **processus les plus critiques** de la logistique de toute entreprise qui gère des expéditions. Une gestion efficace du picking a un impact non seulement sur la rapidité des livraisons, mais aussi sur la satisfaction du client, la réduction des erreurs et la rentabilité de l'entreprise." },
      { text: "Avant de faire appel à une entreprise spécialisée en préparation de commandes, il est essentiel d'analyser une série de facteurs clés qui garantiront que le service apporte réellement de la valeur à votre chaîne d'approvisionnement." },
      { heading: "Méthodologie de picking et capacité d'optimisation" },
      { text: "Toutes les entreprises ne gèrent pas la préparation de commandes de la même façon. Il est important de vérifier quelles méthodes de picking elles utilisent et si elles sont capables de les adapter aux besoins spécifiques de votre activité. Des techniques comme le batch picking (picking par vagues) permettent de regrouper les commandes pour optimiser les délais, tandis que des systèmes comme le pick to box éliminent les étapes intermédiaires en préparant directement les produits dans le carton final d'expédition." },
      { text: "Une entreprise spécialisée doit analyser votre volume de commandes, le type de produits et la fréquence des expéditions pour sélectionner la méthode la plus efficace dans chaque cas." },
      { heading: "Planification et contrôle opérationnel" },
      { text: "La planification est essentielle dans tout processus de préparation de commandes. Un prestataire professionnel doit travailler avec une organisation minutieuse garantissant l'agilité sans compromettre la précision. Avant de souscrire un service, assurez-vous que l'entreprise dispose de protocoles clairs de contrôle, de vérification et de supervision à chaque phase du picking." },
      { text: "Cela est essentiel pour minimiser les erreurs, éviter les incidents et garantir que chaque commande soit correctement préparée." },
      { heading: "Technologie, traçabilité et contrôle des stocks" },
      { text: "L'un des aspects les plus importants à évaluer est le niveau de technologie appliqué au processus. Une entreprise spécialisée en préparation de commandes doit offrir un contrôle et une traçabilité intégraux, permettant de savoir à tout moment où se trouve chaque produit et à quelle phase du processus il en est." },
      { text: "La visibilité en temps réel des stocks et des commandes apporte non seulement de la tranquillité, mais améliore également la planification et la prise de décisions stratégiques." },
      { heading: "Réduction des erreurs et garantie de qualité" },
      { text: "Une mauvaise préparation de commandes peut entraîner des retours, des réclamations et une perte directe de confiance de la part du client. C'est pourquoi il est essentiel que le prestataire logistique ait une expérience avérée dans la réduction des erreurs et l'optimisation des processus." },
      { text: "Un service professionnel doit garantir la précision dans la sélection des produits, le soin apporté à la manutention et un contrôle final avant l'expédition." },
      { heading: "Adaptation à votre type d'entreprise et à votre volume d'expéditions" },
      { text: "Gérer un e-commerce à volume quotidien élevé n'est pas la même chose que gérer une entreprise avec des expéditions périodiques. De même, travailler avec de petits produits diffère du travail avec des références plus volumineuses ou fragiles. Avant de souscrire un service de préparation de commandes, il est essentiel d'analyser si l'entreprise est prête à s'adapter à votre modèle d'activité, à absorber les pics de demande et à croître avec vous sans que la logistique ne devienne un goulot d'étranglement." },
      { heading: "Questions fréquentes" },
      { heading: "Quand est-il opportun d'externaliser la préparation des commandes ?" },
      { text: "Lorsque la gestion interne commence à générer des erreurs, des retards ou consomme trop de ressources qui pourraient être consacrées à la croissance de l'entreprise." },
      { heading: "L'externalisation améliore-t-elle la compétitivité ?" },
      { text: "Oui. Un processus de picking professionnel rend les livraisons plus rapides et plus précises, ce qui améliore l'expérience client et la réputation de la marque." },
      { heading: "Perd-on le contrôle en délégant la préparation des commandes ?" },
      { text: "Non. Un prestataire spécialisé offre une traçabilité et une visibilité constantes, permettant de conserver un contrôle total sur l'inventaire et les commandes." },
      { heading: "Conclusion" },
      { text: "La préparation de commandes est bien plus que la simple collecte de produits dans un entrepôt. C'est un processus stratégique qui influence directement l'efficacité opérationnelle, la satisfaction du client et la compétitivité de votre entreprise." },
      { text: "Choisir une entreprise spécialisée en picking comme Disnet, qui offre planification, technologie, méthodes optimisées et contrôle intégral, peut faire toute la différence dans votre croissance. Miser sur une équipe experte en préparation de commandes, c'est investir en agilité, en précision et en confiance pour votre entreprise." },
    ],
  },
  {
    slug: "aspectos-clave-a-valorar-antes-de-contratar-un-servicio-de-fulfillment",
    date: "13 avril 2026",
    title: "Aspects clés à évaluer avant de souscrire un service de fulfillment",
    excerpt: "Déléguer la logistique est l'une des étapes les plus importantes pour toute entreprise en ligne qui cherche à optimiser son activité et à évoluer efficacement. Un service de fulfillment professionnel ne se…",
    body: [
      { text: "Déléguer la logistique est l'une des étapes les plus importantes pour toute entreprise en ligne qui cherche à optimiser son activité et à évoluer efficacement. Un service de fulfillment professionnel ne se contente pas de stocker et d'expédier des produits, il devient un **partenaire stratégique** qui impacte directement l'expérience client et la rentabilité de l'e-commerce." },
      { text: "Pour cette raison, avant de souscrire un service de fulfillment, il est essentiel d'analyser certains facteurs clés." },
      { heading: "Emplacement de l'entrepôt et connectivité logistique" },
      { text: "L'un des premiers points à évaluer est la localisation du centre logistique. Disposer d'un entrepôt de fulfillment à Barcelone représente un avantage stratégique grâce à son excellent réseau de transport, son port international et ses connexions aériennes et terrestres avec le reste de l'Europe." },
      { text: "Cette proximité avec les principaux nœuds logistiques permet de raccourcir les délais de livraison, de réduire les coûts d'expédition et d'offrir un service plus compétitif. Chez Disnet, l'emplacement du centre logistique est pensé pour garantir rapidité et efficacité à chaque envoi, tant au niveau national qu'international." },
      { heading: "Capacité opérationnelle et possibilité de croissance" },
      { text: "Un bon service de fulfillment doit être capable de s'adapter au rythme de chaque entreprise. Avant de souscrire, il est important de vérifier que le prestataire dispose d'une capacité de stockage flexible et de ressources suffisantes pour absorber les hausses de volume." },
      { text: "L'évolutivité est essentielle pour gérer des campagnes promotionnelles, des lancements de produits ou des périodes de forte demande sans que la logistique ne devienne un problème." },
      { heading: "Contrôle des stocks et systèmes technologiques" },
      { text: "Une gestion correcte des stocks permet de maintenir le contrôle du stock en temps réel, d'éviter les erreurs et d'améliorer la planification des ventes." },
      { text: "Avant d'externaliser la logistique, il convient de s'assurer que le prestataire utilise des systèmes avancés, compatibles avec les principales plateformes d'e-commerce. Chez Disnet, la technologie appliquée au fulfillment permet une gestion précise, transparente et totalement intégrée aux canaux de vente en ligne." },
      { heading: "Préparation des commandes et qualité de l'emballage" },
      { text: "La phase de préparation des commandes est déterminante pour la satisfaction du client final. Un picking et un packing efficaces réduisent les incidents, les retours et les erreurs dans les envois." },
      { text: "Un service professionnel prend soin de chaque commande, de la sélection du produit à son emballage, garantissant qu'elle arrive en parfait état." },
      { heading: "Adaptation à votre modèle d'activité et à votre type de produit" },
      { text: "Tous les services de fulfillment ne conviennent pas à toutes les entreprises. Avant de vous engager, il est essentiel d'analyser si le prestataire est réellement prêt à s'adapter à votre modèle d'activité et au type de produit que vous vendez." },
      { text: "Gérer des commandes de produits petits et légers n'est pas la même chose que gérer des marchandises volumineuses, fragiles ou avec des besoins particuliers. Un prestataire de fulfillment doit être capable de comprendre votre activité, vos flux de vente et vos particularités logistiques." },
      { heading: "Questions fréquentes" },
      { heading: "Quel est le meilleur moment pour externaliser le fulfillment ?" },
      { text: "Le moment idéal arrive généralement lorsque la gestion logistique commence à consommer trop de temps et de ressources internes, affectant la croissance de l'entreprise." },
      { heading: "Le fulfillment permet-il de réduire la charge opérationnelle de l'e-commerce ?" },
      { text: "Oui, en externalisant le fulfillment, des tâches comme la gestion d'entrepôt, la préparation des commandes et la coordination des envois sont éliminées, libérant du temps pour les domaines stratégiques." },
      { heading: "Quel niveau de contrôle l'entreprise conserve-t-elle sur sa logistique ?" },
      { text: "Même si la logistique est externalisée, le client conserve une visibilité et un contrôle sur le stock, les commandes et les envois grâce aux systèmes de gestion et aux rapports." },
      { heading: "Conclusion" },
      { text: "Le fulfillment est devenu un élément clé de la stratégie de toute entreprise numérique qui cherche à croître de manière ordonnée et efficace." },
      { text: "Miser sur un service de fulfillment à Barcelone comme celui de Disnet permet aux entreprises de professionnaliser leur logistique, d'améliorer l'expérience client et de gagner en compétitivité sur un marché de plus en plus exigeant. Choisir le bon partenaire aujourd'hui peut faire toute la différence dans la croissance de votre entreprise." },
    ],
  },
  {
    slug: "errores-que-perjudican-la-logistica-en-tu-e-commerce",
    date: "7 avril 2026",
    title: "Erreurs qui nuisent à la logistique de votre e-commerce",
    excerpt: "La logistique est l'un des piliers fondamentaux du succès de tout e-commerce. Une mauvaise gestion affecte non seulement les délais de livraison, mais impacte directement la satisfaction…",
    body: [
      { text: "La logistique est l'un des **piliers fondamentaux** du succès de tout e-commerce. Une mauvaise gestion affecte non seulement les délais de livraison, mais impacte directement la satisfaction du client, les avis et, par conséquent, vos ventes." },
      { text: "Chez Disnet, spécialistes des solutions logistiques pour l'e-commerce, nous savons qu'optimiser chaque processus fait la différence entre une entreprise qui grandit et une autre qui perd des opportunités." },
      { heading: "Ne pas optimiser les délais de livraison" },
      { text: "L'une des erreurs les plus courantes dans tout e-commerce est de ne pas disposer d'une stratégie claire pour réduire les délais de livraison. Aujourd'hui, les utilisateurs attendent des envois rapides et fiables. Lorsque ce n'est pas le cas, les annulations augmentent, la confiance du client diminue et des avis négatifs apparaissent." },
      { text: "Chez Disnet, nous travaillons avec des processus optimisés qui permettent de gérer des millions d'envois par an, garantissant rapidité et efficacité pour chaque commande." },
      { heading: "Manque de traçabilité des envois" },
      { text: "Ne pas offrir d'informations claires sur l'état des commandes est une autre grande faille dans la logistique d'un e-commerce. Les clients veulent savoir où se trouve leur commande, quand elle arrivera et s'il y a eu des incidents. Le manque de traçabilité génère de l'incertitude et réduit la confiance envers votre marque." },
      { text: "Disnet mise sur une traçabilité totale dans tous les processus logistiques, offrant contrôle et visibilité tant pour l'entreprise que pour le client final." },
      { heading: "Ne pas s'adapter aux besoins du client" },
      { text: "Une autre erreur critique est de ne pas offrir de flexibilité dans les livraisons. Chaque client a des besoins différents, et un système rigide peut affecter négativement l'expérience d'achat : horaires de livraison limités, peu d'options d'envoi ou difficultés à gérer les changements." },
      { text: "Chez Disnet, nous comprenons que la logistique doit s'adapter au client, et non l'inverse, en proposant des solutions flexibles qui améliorent l'expérience globale." },
      { heading: "Déconnexion entre les systèmes en ligne et la logistique" },
      { text: "Un e-commerce efficace a besoin que sa plateforme en ligne soit parfaitement intégrée à la gestion logistique. Les erreurs courantes sont les systèmes qui ne se synchronisent pas, les défaillances de stock et les retards dans la préparation des commandes." },
      { text: "Chez Disnet, nous travaillons avec des intégrations fluides avec des plateformes comme Shopify, WooCommerce, Magento, PrestaShop ou Opencart, garantissant une gestion connectée et sans erreurs." },
      { heading: "Ne pas externaliser la logistique à des professionnels" },
      { text: "Essayer de gérer toute la logistique en interne peut sembler rentable au début, mais à mesure que le volume de commandes augmente, cela devient un problème : saturation opérationnelle, erreurs dans les envois et augmentation des coûts cachés." },
      { text: "L'externalisation permet de faire évoluer l'entreprise sans compromettre la qualité du service. Avec plus de 25 ans d'expérience, Disnet propose des solutions spécialisées dans la gestion intégrale de la chaîne d'approvisionnement pour l'e-commerce." },
      { heading: "Conclusion" },
      { text: "Éviter ces erreurs est essentiel pour que votre e-commerce se développe de manière durable et compétitive. La logistique n'est plus seulement un processus opérationnel, mais une partie essentielle de l'expérience client." },
      { text: "Disposer d'un partenaire logistique adéquat vous permettra de réduire les délais de livraison, d'améliorer la traçabilité, d'offrir plus de flexibilité et d'optimiser tous vos processus. Chez Disnet, nous vous aidons à optimiser la logistique de votre e-commerce afin que vous puissiez vous concentrer sur le développement de votre entreprise." },
    ],
  },
];

const siteFaq: Content["siteFaq"] = {
  title: "Questions fréquentes sur Disnet",
  items: [
    {
      question: "Qu'est-ce qu'un opérateur logistique 3PL ?",
      answer:
        "C'est une entreprise spécialisée qui gère tout ou partie de la chaîne d'approvisionnement d'une autre entreprise : réception, entreposage, préparation de commandes, transport et logistique inverse. Externaliser ces fonctions permet de réduire les coûts fixes et de concentrer les ressources propres sur le cœur de métier.",
    },
    {
      question: "Quelle différence entre un opérateur 3PL et un 4PL ?",
      answer:
        "Un 3PL comme Disnet dispose de sa propre infrastructure physique (entrepôts, personnel, transport) et exécute directement l'opérationnel. Un 4PL fonctionne au niveau du conseil et de la coordination digitale, sans actifs propres, en sous-traitant à son tour à des opérateurs 3PL pour l'exécution physique.",
    },
    {
      question: "Où se situe l'entrepôt de Disnet ?",
      answer:
        "Le centre logistique de Disnet se trouve à Sabadell (Vallès Occidental), avec un accès rapide aux principaux axes de communication de Barcelone, ce qui permet des délais de transit réduits pour la distribution nationale et internationale.",
    },
    {
      question: "Disnet travaille-t-il avec de petites entreprises ou uniquement de grands comptes ?",
      answer:
        "Disnet accompagne aussi bien les PME et petites entreprises locales que les grandes organisations industrielles, en adaptant le service, la technologie et la structure de coûts au volume et aux besoins spécifiques de chaque client.",
    },
    {
      question: "Avec quelles plateformes e-commerce Disnet s'intègre-t-il ?",
      answer:
        "Disnet propose un service de fulfillment avec connectivité pour Shopify, WooCommerce, Magento, PrestaShop, Opencart et d'autres systèmes de gestion, permettant à la logistique offline de fonctionner en harmonie avec la boutique en ligne sans friction technique.",
    },
    {
      question: "Comment puis-je externaliser la logistique de mon entreprise ?",
      answer:
        "Il suffit de contacter Disnet pour analyser votre volume de commandes, le type de marchandise et vos besoins spécifiques. Une solution sur mesure est ensuite conçue, couvrant la réception, l'entreposage, la préparation de commandes, le transport et la logistique inverse selon vos besoins.",
    },
    {
      question: "Quels secteurs Disnet accompagne-t-il ?",
      answer:
        "Disnet travaille avec la logistique textile et mode, la cosmétique et la parfumerie, l'e-commerce et tout secteur nécessitant un entreposage spécialisé, en adaptant ses processus et son infrastructure aux particularités de chaque type de produit.",
    },
    {
      question: "Combien coûte l'engagement d'un opérateur logistique comme Disnet ?",
      answer:
        "Le coût dépend du volume de marchandise, du type de services contractés (entreposage, picking, transport...) et de la fréquence des envois. Disnet propose des devis personnalisés après analyse des besoins réels de chaque client, sans engagement caché.",
    },
  ],
};

const navLinks: Content["navLinks"] = [
  { href: "/", label: "Accueil" },
  { href: "/empresa", label: "Entreprise" },
  { href: "/servicios", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/empresa#trabaja-con-nosotros", label: "Travaillez avec nous" },
  { href: "/area-clientes", label: "Espace clients" },
];

const ui: Content["ui"] = {
  headerContact: "Contact",
  headerOpenMenu: "Ouvrir le menu",
  heroCtaContact: "Contactez-nous",
  heroCtaVisit: "Visitez nos installations !",
  heroCtaServices: "Voir les services",
  readMore: "Lire la suite",
  requestQuote: "Demander un devis",
  contactUs: "Contactez-nous",
  backToServices: "← Retour aux services",
  backToBlog: "← Retour au blog",
  otherServices: "Autres services",
  moreArticles: "Plus d'articles",
  readArticle: "Lire l'article",
  servicesOffered: "Services proposés",
  servicesOfferedIntro:
    "Chez Disnet, en plus des services standards, nous répondons à tout besoin logistique de nos clients afin qu'ils n'aient pas à se préoccuper, s'ils le souhaitent, d'aucun aspect lié à la distribution physique de leurs produits.",
  learnMore: "En savoir plus",
  access: "Accéder",
  footerNavigation: "Navigation",
  footerServices: "Services",
  footerContact: "Contact",
  footerRights: "Tous droits réservés.",
  footerLegalNotice: "Mentions légales",
  footerPrivacyPolicy: "Politique de confidentialité",
  contactFormName: "Nom *",
  contactFormSurname: "Prénom",
  contactFormEmail: "E-mail *",
  contactFormPhone: "Téléphone",
  contactFormMessage: "Commentaire ou message *",
  contactFormTerms: "J'accepte les conditions en cliquant ici.",
  contactFormMarketing: "Je souhaite recevoir des informations qui pourraient m'intéresser.",
  contactFormSubmit: "Envoyer",
  contactFormSubmitting: "Envoi en cours…",
  contactFormToastTitle: "Message envoyé",
  contactFormToastDescription: "Merci d'avoir contacté Disnet, nous vous répondrons dans les plus brefs délais.",
  contactFormToastErrorTitle: "Échec de l'envoi",
  contactFormToastErrorDescription: "Une erreur s'est produite. Réessayez ou écrivez-nous directement à info@disnet.es.",
  jobFormName: "Nom et prénom *",
  jobFormEmail: "E-mail *",
  jobFormPhone: "Téléphone de contact",
  jobFormSubject: "Sujet *",
  jobFormMessage: "Message *",
  jobFormCv: "CV (doc | pdf max. 5 Mo)",
  jobFormTerms: "J'accepte les conditions en cliquant ici.",
  jobFormMarketing: "Je souhaite recevoir des informations qui pourraient m'intéresser.",
  jobFormSubmit: "Envoyer ma candidature",
  jobFormSubmitting: "Envoi en cours…",
  jobFormToastTitle: "Candidature envoyée",
  jobFormToastDescription: "Merci de votre intérêt, l'équipe de Disnet examinera votre candidature.",
  jobFormToastErrorTitle: "Échec de l'envoi",
  jobFormToastErrorDescription: "Une erreur s'est produite. Réessayez ou écrivez-nous directement à info@disnet.es.",
  ctaBannerTitle: "Parlons de votre chaîne d'approvisionnement ?",
  ctaBannerSubtitle: "Écrivez-nous et nous vous aiderons à trouver la solution logistique adaptée à votre entreprise.",
  addressLabel: "Adresse",
  phoneLabel: "Téléphone",
  emailLabel: "E-mail",
  contactPageTitle: "Contact | Disnet",
  servicesPageTitle: "Services | Disnet",
  servicesPageDescription:
    "Réception, manutention, entreposage, préparation de commandes, emballage, e-commerce, transport et logistique inverse.",
  blogPageTitle: "Blog sur la logistique",
  blogPageDescription:
    "Actualités, analyses et conseils de l'équipe de Disnet sur les opérations logistiques et la chaîne d'approvisionnement.",
  changeToSpanish: "Passer à l'espagnol",
  changeToEnglish: "Passer à l'anglais",
  changeToCatalan: "Passer au catalan",
  changeToFrench: "Passer au français",
  missionLabel: "Mission",
  visionLabel: "Vision",
  valuesLabel: "Valeurs",
  legalNoticePageTitle: "Mentions légales",
  privacyPolicyPageTitle: "Politique de confidentialité",
  lastUpdatedLabel: "Dernière mise à jour",
};

const legalNoticeCopy: Content["legalNoticeCopy"] = {
  title: "Mentions légales de www.disnet.es",
  lastUpdated: "20 septembre 2023",
  body: [
    { heading: "Introduction" },
    {
      text: "Conformément à la loi 34/2002 du 11 juillet, relative aux services de la société de l'information et du commerce électronique (LSSI-CE, loi espagnole sur les services de la société de l'information et le commerce électronique), Disnet Sistemas de Distribución S.A. informe qu'elle est titulaire du présent site web. Conformément aux exigences de l'article 10 de ladite loi, les informations suivantes sont fournies : représentant légal Disnet Sistemas de Distribución S.A., NIF A59843748, nom de domaine www.disnet.es, adresse postale Pla d'en Fonollar, 15, 08205 Sabadell (Barcelone), adresse électronique annaturon@disnet.es, téléphone 657307224.",
    },
    { heading: "Utilisateur et régime de responsabilités" },
    {
      text: "La navigation, l'accès et l'utilisation du site web de Disnet Sistemas de Distribución S.A. confèrent la qualité d'utilisateur. Le site web propose une grande diversité d'informations, de services et de données. L'utilisateur assume sa responsabilité quant à l'usage correct du site web.",
    },
    { heading: "Politique de liens et exonérations de responsabilité" },
    {
      text: "Disnet Sistemas de Distribución S.A. décline toute responsabilité quant au contenu des sites web auxquels l'utilisateur pourrait accéder via les liens présents sur son site, dès lors qu'elle n'a pas connaissance effective du caractère illicite de l'activité ou de l'information à laquelle il est renvoyé, ou du fait qu'elle porte atteinte à des biens ou droits d'un tiers susceptibles d'indemnisation.",
    },
    { heading: "Modifications" },
    {
      text: "Disnet Sistemas de Distribución S.A. se réserve le droit d'apporter, sans préavis, les modifications qu'elle jugera opportunes au contenu de son site web, tant en ce qui concerne les contenus que les conditions d'utilisation ou les conditions générales de contractation. Les changements n'affecteront pas les contractations effectuées avant la date de publication de ceux-ci.",
    },
    { heading: "Indication des prix" },
    {
      text: "Dans le cas où des prix de produits et/ou services seraient affichés, ceux indiqués à l'écran seront les prix en vigueur à chaque moment. Les prix seront indiqués en euros et incluront la taxe sur la valeur ajoutée (TVA).",
    },
    { heading: "Propriété intellectuelle et industrielle" },
    {
      text: "Disnet Sistemas de Distribución S.A., en son nom propre ou en tant que cessionnaire, est titulaire de tous les droits de propriété intellectuelle et industrielle de son site web, ainsi que des éléments qu'il contient.",
    },
    { heading: "Certificat SSL (Secure Sockets Layer)" },
    {
      text: "Le certificat SSL garantit l'authentification, la confidentialité et la sécurité des informations échangées entre Disnet Sistemas de Distribución S.A. et l'utilisateur.",
    },
    { heading: "Actions légales, législation applicable et juridiction" },
    {
      text: "La relation entre l'utilisateur et le prestataire sera régie par la réglementation en vigueur et applicable sur le territoire espagnol. En cas de litige, les parties pourront soumettre leurs différends à l'arbitrage ou saisir la juridiction ordinaire, dans le respect des règles de compétence applicables en la matière.",
    },
  ],
};

const privacyPolicyCopy: Content["privacyPolicyCopy"] = {
  title: "Politique de confidentialité de www.disnet.es",
  lastUpdated: "20 septembre 2023",
  body: [
    { heading: "Données du propriétaire du site web" },
    {
      text: "Raison sociale : Disnet Sistemas de Distribución S.A. NIF : A59843748. Nom de domaine : www.disnet.es. Adresse postale : Pla d'en Fonollar, 15, 08205 Sabadell (Barcelone). Adresse électronique : annaturon@disnet.es. Téléphone : 657307224.",
    },
    {
      text: "Conformément à la réglementation en vigueur et applicable en matière de protection des données à caractère personnel, nous vous informons que vos données seront intégrées au système de traitement dont Disnet Sistemas de Distribución S.A. est responsable, NIF A59843748 et domicile social à Pla d'en Fonollar, 15, 08205 Sabadell (Barcelone).",
    },
    { heading: "Traitements effectués" },
    {
      text: "Actions commerciales issues du formulaire web — Finalité : collecte, enregistrement et traitement des données pour répondre aux demandes et/ou requêtes, ainsi que pour la publicité et la prospection commerciale. Durée de conservation : tant que le consentement donné est maintenu, sauf obligation légale. Base légale : le consentement de la personne concernée. Types de données : nom et prénom, adresse électronique.",
    },
    {
      text: "Gestion des utilisateurs du site web — Finalité : collecte, enregistrement et traitement des données de l'utilisateur. Durée de conservation : tant que le consentement donné est maintenu, sauf obligation légale. Base légale : le consentement de la personne concernée. Types de données : nom et prénom, adresse électronique.",
    },
    {
      text: "Installation de cookies — Finalité : gestion et installation des cookies. Durée de conservation : tant que le consentement donné est maintenu. Base légale : le consentement de la personne concernée. Types de données : adresse électronique, adresse IP.",
    },
    {
      text: "Gestion du formulaire web — Finalité : répondre aux demandes et/ou requêtes. Durée de conservation : tant que le consentement donné est maintenu. Base légale : le consentement de la personne concernée. Types de données : nom et prénom, adresse électronique, adresse IP.",
    },
    { heading: "Droits des personnes concernées" },
    {
      text: "Disnet Sistemas de Distribución S.A. informe les utilisateurs qu'ils peuvent exercer les droits suivants auprès du responsable du traitement :",
    },
    {
      list: [
        "Droit d'accès : obtenir confirmation que vos données sont ou non traitées et, le cas échéant, les données concrètes traitées et les informations légales relatives au traitement (finalités, base légale, durées de conservation, cessions, origine des données, etc.).",
        "Droit de rectification : modifier les données inexactes ou incomplètes.",
        "Droit à la limitation du traitement : limiter les finalités du traitement initialement prévues par le responsable dans certains cas.",
        "Droit à l'effacement : supprimer les données à caractère personnel de l'utilisateur, sauf exceptions prévues par le RGPD lui-même.",
        "Droit à la portabilité : recevoir les données personnelles fournies dans un format structuré, d'usage courant et de lecture automatique, et les transmettre à un autre responsable.",
        "Droit d'opposition : que le traitement de vos données ne soit pas effectué, ou qu'il cesse, lorsqu'il est fondé sur un intérêt légitime, l'intérêt public ou la prospection directe.",
        "Droit de ne pas faire l'objet de décisions automatisées, y compris le profilage.",
        "Droit de retirer votre consentement à tout moment et gratuitement, pour tout traitement fondé sur celui-ci.",
      ],
    },
    { heading: "Comment exercer vos droits" },
    {
      text: "Pour exercer l'un quelconque de ces droits, vous pouvez adresser un courrier à Pla d'en Fonollar, 15, 08205 Sabadell (Barcelone), à l'attention de Disnet Sistemas de Distribución S.A., ou envoyer un e-mail à annaturon@disnet.es, en vous identifiant de manière fiable et en indiquant le droit que vous souhaitez exercer.",
    },
    {
      text: "Enfin, vous avez le droit de déposer une réclamation auprès de l'Agence espagnole de protection des données (AEPD) si vous estimez qu'il y a eu un manquement à la réglementation applicable en matière de protection des données.",
    },
    {
      text: "Disnet Sistemas de Distribución S.A. s'engage à adopter les mesures techniques et organisationnelles nécessaires, adaptées au niveau de risque des traitements effectués, afin de garantir leur intégrité, leur confidentialité et leur disponibilité.",
    },
  ],
};

const cookieConsent: Content["cookieConsent"] = {
  message: "Ce site web utilise des cookies pour vous garantir la meilleure expérience sur notre site.",
  moreInfo: "Plus d'infos",
  technical: "Techniques",
  marketing: "Marketing",
  reject: "Refuser",
  accept: "Accepter",
};

const content: Content = {
  company,
  heroCopy,
  heroSlideAlts,
  companyIntroCopy,
  barcelonaCopy,
  stats,
  services,
  whyChooseUs,
  empresaCopy,
  jobsCopy,
  contactCopy,
  clientAreaCopy,
  blogPosts,
  navLinks,
  ui,
  siteFaq,
  legalNoticeCopy,
  privacyPolicyCopy,
  cookieConsent,
};

export default content;
