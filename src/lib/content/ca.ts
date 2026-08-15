// Traducció al català del contingut original de https://disnet.es
import type { Content } from "./types";

const company: Content["company"] = {
  name: "Disnet",
  legalName: "Disnet Sistemas de Distribución S.A.",
  tagline: "Operador Logístic 3PL per a la teva cadena de subministrament",
  phone: "93 725 82 22",
  phoneHref: "tel:+34937258222",
  email: "info@disnet.es",
  address: "C/ Pla del Fonollar, 15 – 08205 – Poligon Riu Sec – Sabadell",
  since: 1991,
  yearsExperience: 35,
};

const heroCopy: Content["heroCopy"] = {
  eyebrow: "Operador logístic a Barcelona",
  title: company.tagline,
  paragraphs: [
    "**Disnet** està formada per professionals amb **més de 35 anys d'experiència en la gestió logística** de l'externalització de les cadenes de subministrament. L'equip gestiona els processos amb el coneixement i el rigor necessaris perquè l'externalització de les activitats logístiques de qualsevol organització sigui un èxit.",
    "Els membres de l'equip de Disnet destaquen per la seva àmplia capacitat per identificar les necessitats dels seus clients i implementar els mecanismes necessaris per donar-hi resposta.",
    "Conscient de la contínua evolució del sector, l'equip de Disnet es troba en formació contínua, cercant l'avantguarda del coneixement en les noves estratègies i metodologies de les operacions logístiques.",
    "L'equip de Disnet garanteix una estructura logística permanent, que fa que tot estigui a punt en el moment que es necessiti.",
  ],
};

const heroSlideAlts: Content["heroSlideAlts"] = [
  "Instal·lacions de Disnet, operador logístic a Barcelona",
  "Magatzem de Disnet en funcionament",
  "Prestatgeries d'emmagatzematge de Disnet",
  "Plaques solars a les instal·lacions de Disnet",
];

const companyIntroCopy: Content["companyIntroCopy"] = {
  paragraphs: [
    "**Disnet** està formada per professionals amb **més de 35 anys d'experiència en la gestió logística** de l'externalització de les cadenes de subministrament. L'equip gestiona els processos amb el coneixement i el rigor necessaris perquè l'externalització de les activitats logístiques de qualsevol organització sigui un èxit.",
    "Els membres de l'equip de Disnet destaquen per la seva àmplia capacitat per identificar les necessitats dels seus clients i implementar els mecanismes necessaris per donar-hi resposta.",
    "Conscient de la contínua evolució del sector, l'equip de Disnet es troba en formació contínua. Cercant l'avantguarda del coneixement en les noves estratègies i metodologies de les operacions logístiques.",
    "L'equip de Disnet garanteix una estructura logística permanent, que fa que tot estigui a punt en el moment que es necessiti.",
  ],
};

const barcelonaCopy: Content["barcelonaCopy"] = {
  title: "Logística a Barcelona amb Disnet",
  paragraphs: [
    "La ciutat de Barcelona és coneguda per ser **un dels principals centres logístics d'Espanya**, ja que compta amb una ubicació estratègica que la converteix en un punt clau per al transport de mercaderies tant a nivell nacional com internacional.",
    "Per a aquelles empreses que busquen millorar les seves operacions i aprofitar al màxim les oportunitats del mercat, comptar amb serveis logístics a Barcelona és una decisió encertada. Disnet, com a operador logístic líder a la ciutat, ofereix **solucions a mida per a les necessitats de cada empresa**, garantint eficiència, qualitat i satisfacció en cada etapa de la cadena de subministrament.",
  ],
  highlight: "Confia en Disnet per portar la teva empresa al següent nivell en logística!",
};

const stats: Content["stats"] = [
  { value: 12000, label: "Ubicacions en racks" },
  { value: 15000, label: "Ubicacions de picking" },
  { value: 100000, label: "Capacitat de comandes e-commerce" },
];

const services: Content["services"] = [
  {
    slug: "recepcion-de-mercancias",
    name: "Recepció de mercaderies",
    headline: "Amb Disnet, la mercaderia de la teva empresa està sempre segura",
    intro: [
      "Gestionem la recepció de mercaderies d'acord amb els **plecs de condicions** prèviament acordats amb els clients.",
      "També realitzem els **controls de qualitat logístics** i informem el client i/o proveïdor de totes les incidències detectades.",
      "Les nostres metodologies de treball busquen **optimitzar els moviments, garantir la traçabilitat i maximitzar l'eficàcia** de les operacions.",
    ],
  },
  {
    slug: "manipulacion-de-mercancias",
    name: "Manipulació de mercaderies",
    headline: "Disnet, traçabilitat garantida en tots els nostres processos",
    intro: [
      "Realitzem qualsevol operació de manipulació acordada amb el client garantint la **traçabilitat total del procés**.",
      "Realitzem manipulacions independentment de la mida del lot. Des de lots petits amb poca automatització, fins a **grans lots amb seqüències semiautomatitzades**.",
    ],
    list: [
      "Planxat i encaixat o embossat de productes tèxtils.",
      "Muntatge de components per al sector de l'automoció.",
      "Desmuntatge i muntatge de mobles del sector del descans.",
      "Unificació de matèries primeres amb altres per definir el producte final.",
      "Confecció de packs i agrupament per a promocions.",
    ],
  },
  {
    slug: "almacenaje",
    name: "Emmagatzematge",
    headline: "A Disnet, tenim la tecnologia més avançada per a l'emmagatzematge de les teves mercaderies",
    intro: [
      "Tenim la capacitat per emmagatzemar múltiples tipologies d'unitats de càrrega (palets, caixes, bobines, etc.) d'acord amb els **estàndards més exigents de la manutenció**. Tot això per garantir-ne la correcta conservació.",
      "Disposem de **més de 6.000 ubicacions en racks** convencionals de palet, **més de 15.000 ubicacions de picking** en una instal·lació de 6.500 m2 per a emmagatzematge.",
      "Per garantir la veracitat dels estocs, realitzem **inventaris permanents** i en validem l'estat.",
      "El nostre **Sistema de Gestió de Magatzem (SGA)** ens permet aplicar una correcta distribució dels productes d'acord amb la previsió del seu consum i així aconseguir una millor optimització del circuit logístic al magatzem.",
    ],
    sections: [
      {
        heading: "Emmagatzematge de mercaderies, gestió d'inventari i distribució",
        paragraphs: [
          "A Disnet, som **líders en solucions d'emmagatzematge i logística** a Barcelona. Els nostres magatzems moderns i segurs estan estratègicament ubicats per oferir-te accés ràpid i convenient a les principals xarxes de transport. Tant si necessites **emmagatzemar productes, gestionar inventaris o realitzar distribucions eficients**, el nostre equip altament capacitat està a punt per ajudar-te. Amb tecnologia d'avantguarda i sistemes de gestió avançats, podem garantir una gestió precisa i transparent de les teves mercaderies.",
          "A més, entenem la importància de la **flexibilitat i l'adaptabilitat** en l'entorn empresarial actual. Per això, oferim **solucions personalitzades** que s'ajusten a les teves necessitats específiques. Confia en la nostra experiència i el nostre compromís amb l'excel·lència per optimitzar les teves operacions logístiques.",
          "Obtén **solucions personalitzades, serveis fiables i eficients**, i un equip expert que s'ocuparà de totes les teves necessitats d'emmagatzematge i distribució. No perdis més temps, aprofita la nostra experiència i ubicació estratègica per portar la teva empresa al següent nivell.",
        ],
      },
      {
        heading: "Gestió d'emmagatzematge a Barcelona",
        paragraphs: [
          "Cada negoci té necessitats úniques. A Disnet, ho sabem. Per això, t'oferim solucions d'emmagatzematge a mida que s'adapten perfectament al teu volum de negoci i tipus de mercaderia. Amb nosaltres, gaudiràs de la seguretat, eficiència i flexibilitat que necessites per fer créixer la teva empresa.",
          "Treballem amb **logística tèxtil i de moda, logística de cosmètica i perfumeria**, i amb qualsevol altre sector que requereixi un emmagatzematge especialitzat. I si el que buscaves era simplement llogar un magatzem a Barcelona, amb Disnet obtens molt més: un servei logístic complet, sense la complexitat de gestionar tu mateix l'espai, el personal o la tecnologia.",
        ],
      },
    ],
    benefitsTitle: "Beneficis clau",
    benefits: [
      {
        title: "Seguretat",
        points: [
          "Sistemes de seguretat d'última generació per protegir les teves mercaderies.",
          "Accés restringit i control d'inventari en temps real.",
        ],
      },
      {
        title: "Flexibilitat",
        points: [
          "Adaptem les nostres solucions a les teves necessitats específiques i volum de negoci.",
          "Contractes flexibles i escalables.",
        ],
      },
      {
        title: "Eficiència",
        points: [
          "Processos optimitzats per agilitzar la gestió del teu inventari.",
          "Reducció de costos operatius.",
        ],
      },
      {
        title: "Ubicació estratègica",
        points: [
          "Fàcil accés a les principals vies de comunicació de Barcelona.",
          "Connexió amb els principals ports i aeroports.",
        ],
      },
      {
        title: "Tecnologia",
        points: [
          "Plataforma tecnològica avançada per al seguiment i control de les teves mercaderies.",
          "Integració amb els teus sistemes de gestió.",
        ],
      },
    ],
    ctaLabel: "Sol·licita un pressupost personalitzat",
  },
  {
    slug: "preparacion-de-pedidos",
    name: "Preparació de comandes",
    headline: "Disnet, especialistes en processos de picking",
    intro: [
      "A Disnet, som **experts en l'execució d'operacions de picking**, que consisteixen en la preparació de comandes utilitzant el material emmagatzemat abans del seu enviament al destinatari.",
      "La nostra planificació acurada ens permet seleccionar el mètode d'optimització més adequat en cada cas.",
    ],
    list: [
      "Batch picking (picking per onades): s'extreu conjuntament el material de totes les comandes agrupades i després se separen les quantitats de cada referència destinada a cada comanda.",
      "Pick to box: el material s'extreu agrupat i es col·loca directament a les caixes d'enviament al mateix punt d'extracció, eliminant la necessitat d'un procés de separació posterior.",
    ],
    extra: [
      "La nostra contribució a la teva cadena de subministrament es tradueix en una major competitivitat, ja que fem que els teus processos siguin més àgils i eficients, alhora que garantim un control i una traçabilitat integrals durant tot el procés de preparació de comandes.",
    ],
    sections: [
      {
        heading: "La importància estratègica d'una òptima preparació de comandes",
        paragraphs: [
          "En un mercat que exigeix velocitat i exactitud, una preparació de comandes deficient pot generar retards, errors i, en última instància, insatisfacció del client. A Disnet, entenem que cada comanda és crucial. Per això, la nostra planificació és acurada, i ens permet seleccionar el mètode d'optimització més adequat en cada cas, garantint que la teva cadena de subministrament sigui tan fluida i eficient com sigui possible.",
        ],
      },
      {
        heading: "La teva cadena de subministrament: més àgil i controlada amb la nostra preparació de comandes",
        paragraphs: [
          "La contribució de Disnet a la teva cadena de subministrament va més enllà de la simple recollida de productes. La nostra pericia en la preparació de comandes es tradueix en una major competitivitat per a la teva empresa. Fem que els teus processos siguin més àgils i eficients, optimitzant temps i recursos.",
          "A més, garantim un control i una traçabilitat integrals durant tot el procés de preparació de comandes. Sabràs en tot moment on és cada producte i en quina fase del picking es troba, cosa que t'ofereix total tranquil·litat i transparència.",
          "Confia en Disnet per a una preparació de comandes impecable que impulsi la satisfacció dels teus clients i el creixement del teu negoci.",
        ],
      },
    ],
    benefitsTitle: "Beneficis tangibles de confiar en Disnet per a la teva preparació de comandes",
    benefits: [
      { title: "Major competitivitat", description: "Processos logístics més àgils i eficients que et donen avantatge en el mercat." },
      { title: "Reducció d'errors", description: "Minimitzem dràsticament les fallades en els enviaments, cosa que es tradueix en menys devolucions i una millor imatge de marca." },
      { title: "Velocitat en els lliuraments", description: "Accelerem la preparació de comandes perquè els teus productes arribin abans a la seva destinació, satisfent les expectatives dels teus clients." },
      { title: "Control i traçabilitat total", description: "T'oferim visibilitat integral de cada comanda, des del moment del picking fins a l'expedició." },
      { title: "Alliberament de recursos", description: "En delegar la preparació de comandes en experts, pots enfocar els teus recursos humans i financers en el creixement i la innovació del teu negoci." },
    ],
    audienceTitle: "Per a qui és aquest servei de preparació de comandes?",
    audience: [
      "E-commerce que necessiten agilitat i precisió per gestionar un alt volum de comandes en línia.",
      "Empreses amb un flux constant d'enviaments que busquen optimitzar la seva logística interna.",
      "Negocis que desitgen reduir costos operatius i millorar l'eficiència en els seus processos de magatzem.",
      "Marques que aspiren a oferir una experiència de client excepcional a través de lliuraments ràpids i sense errors.",
    ],
    ctaLabel: "Contacta'ns",
  },
  {
    slug: "empaqueado-packing",
    name: "Empaquetat – Packing",
    headline: "A Disnet, et garantim el millor empaquetat per a la teva mercaderia",
    intro: [
      "En les nostres operacions d'empaquetat, conegudes com a «packing», ens encarreguem de preparar totes les unitats de transport en què seran enviades les comandes. Durant aquest procés, apliquem els **criteris més avançats en sostenibilitat, seguretat i traçabilitat**.",
      "El nostre sistema de gestió de magatzem (SGA) ens ofereix **recomanacions sobre l'embalatge més adequat** per a cada enviament, assegurant una preparació eficient i apropiada.",
      "Un cop realitzat l'empaquetat, ens centrem en l'enviament de la mercaderia d'acord amb la data de lliurament especificada pel client, generant tota la documentació necessària segons els requeriments contractuals, legals i normatius aplicables.",
      "Això garanteix que cada enviament compleixi els estàndards i les regulacions vigents.",
    ],
  },
  {
    slug: "e-commerce",
    name: "e-Commerce",
    headline: "A Disnet, et garantim els millors terminis de lliurament",
    subheadline: "Fulfillment per a Shopify, WooCommerce i les principals plataformes",
    intro: [
      "Qui gestiona els enviaments de la teva botiga online? A Disnet ens encarreguem de tot el procés, des que la comanda entra a la teva web fins que arriba a la porta del client. Seguint les tendències actuals del comerç, som especialistes en l'externalització de cadenes de subministrament per al sector de l'eCommerce. Amb **més de 25 anys d'experiència**, hem gestionat i preparat comandes, amb la capacitat d'atendre **més de 2.000.000 d'enviaments a l'any**.",
    ],
    list: [
      "Optimitzar els terminis de lliurament.",
      "Proporcionar traçabilitat en tots els processos logístics.",
      "Oferir flexibilitat en els horaris de lliurament.",
    ],
    extra: [
      "A Disnet entenem que, perquè un negoci d'eCommerce prosperi, la logística ha d'oferir una experiència de compra excepcional. Només així s'aconsegueix augmentar la satisfacció del client. Per tant, és essencial que l'entorn en línia funcioni en harmonia amb el món offline. Per aconseguir-ho, mantenim una connectivitat fluida amb els sistemes de gestió de la informació més utilitzats, com **Shopify, WooCommerce, Magento, PrestaShop, Opencart**, i altres.",
    ],
  },
  {
    slug: "transporte-de-mercancias",
    name: "Transport de mercaderies",
    headline: "A Disnet, oferim els millors preus per al transport de la teva mercaderia",
    subheadline: "Lliurament ràpid i sempre a temps",
    intro: [
      "D'acord amb els nostres procediments, sempre efectuem el **control de la qualitat logística** de l'expedició abans d'efectuar la càrrega de la mercaderia al transport.",
      "Utilitzem les **agències de transport més convenients** per a cada necessitat i per garantir el compliment de les taxes de servei acordades amb el client.",
      "Homologuem, qualifiquem i avaluem les agències de transport utilitzades sigui quina sigui la destinació de la mercaderia.",
      "Disnet també pot responsabilitzar-se de la prestació de tot tipus de serveis com ara la cerca i selecció de transportistes, la negociació de les condicions, la preparació dels contractes, i la gestió i control de l'execució.",
      "De la mateixa manera, estem capacitats per gestionar serveis de transport de forma eficient, cosa que ens permet oferir un servei integral d'enviament de comandes. Tant si necessites lliuraments locals com nacionals, estem preparats per gestionar cada aspecte de la teva logística de manera efectiva, garantint que els teus productes arribin a la seva destinació de manera segura i puntual.",
    ],
  },
  {
    slug: "logistica-inversa",
    name: "Logística inversa",
    headline: "Gestió de devolucions i incidències amb total fiabilitat",
    intro: [
      "A Disnet, no només ens enfoquem en la gestió eficient dels lliuraments, sinó que també ens ocupem de la logística inversa, la qual cosa engloba la **gestió de devolucions** i la resolució de qualsevol incidència que pugui sorgir en el procés.",
      "Mantenim connectivitat amb els sistemes de gestió d'informació més àmpliament utilitzats, com Shopify, WooCommerce, Magento, PrestaShop, Opencart i altres. Això ens permet estar en sintonia amb les plataformes d'eCommerce i garantir una integració sense problemes en totes les etapes de la cadena de subministrament.",
      "Reconeixem que oferir facilitat i rapidesa en els processos de reclamació i devolució és essencial per a la satisfacció del client. Per això, hem desenvolupat diverses alternatives de suport dissenyades per simplificar i agilitzar aquests procediments. El nostre objectiu és permetre que els clients facin devolucions de manera fiable i sense costos que intimidin o afectin negativament la seva experiència de compra o el negoci dels nostres clients.",
    ],
  },
];

const whyChooseUs: Content["whyChooseUs"] = {
  title: "Per què triar Disnet?",
  intro: [
    "Disnet és un 3PL que ofereix **des de 1991 un servei flexible** adaptat a les necessitats de cada client. La raó de ser de Disnet és assumir tots els requeriments logístics dels nostres clients adaptant els nostres sistemes de treball, organització i instal·lacions per respondre a les seves expectatives amb la **màxima rapidesa i fiabilitat**.",
    "La nostra dimensió i proximitat ens col·loca a l'abast de qualsevol organització, des de **pimes i petites empreses d'àmbit local** fins a organitzacions industrials de més dimensió.",
  ],
  points: [
    {
      title: "Estalvi de costos",
      description: "La reducció de costos és un dels principals motius per contractar els nostres serveis com a 3PL.",
    },
    {
      title: "Lloc estratègic",
      description: "Centre logístic a Sabadell (Vallès Occidental), amb accessos ràpids a les principals vies de comunicació de Barcelona.",
    },
    {
      title: "En línia",
      description: "Tota la informació dels teus moviments en temps real.",
    },
    {
      title: "Aplicació SGA Multi Magatzem",
      description: "Sistema de Gestió que ens permet tractar els productes més diversos i mantenir una estricta traçabilitat d'aquests. Tota la informació dels teus moviments en línia en temps real.",
    },
  ],
};

const quotes: Content["quotes"] = [
  {
    text: "Com més temps passi sense que actuïs, més diners estàs deixant de guanyar.",
    author: "Carrie Wilkerson",
  },
  {
    text: "No importa com de lent avancis, mentre no t'aturis.",
    author: "Confuci",
  },
];

const empresaCopy: Content["empresaCopy"] = {
  title: "Disnet – la logística com a filosofia de treball",
  intro: [
    "Busques una empresa de logística a Barcelona fiable i eficient? A Disnet ens enorgulleix oferir **serveis de logística de primera classe** des del nostre centre logístic a **Sabadell, al bell mig del Vallès Occidental**.",
    "Tant si necessites transport, emmagatzematge o distribució de mercaderies, el nostre equip altament capacitat i les nostres **solucions personalitzades** estan dissenyats per satisfer les teves necessitats específiques. Amb una sòlida xarxa de socis i una àmplia experiència en la indústria, estem compromesos a oferir-te **solucions logístiques integrals** que optimitzin les teves operacions i t'ajudin a assolir els teus objectius comercials.",
    "Confia en la nostra experiència local i en la nostra dedicació per proporcionar-te un servei fiable i eficient. Contacta amb nosaltres avui mateix i descobreix com podem impulsar l'èxit del teu negoci a Barcelona!",
  ],
  mission: "Proporcionar competitivitat als processos logístics.",
  vision: "Ser l'operador logístic de les cadenes de subministrament dels seus clients.",
  values: "Professionalitat, integritat, confiança, eficàcia i eficiència…",
};

const jobsCopy: Content["jobsCopy"] = {
  title: "Treballa amb nosaltres",
  description: "Vols formar part de l'equip de Disnet? Envia'ns les teves dades i el teu currículum i ens posarem en contacte amb tu.",
  legal:
    "Les seves dades seran tractades per Disnet Sistemas de Distribución S.A. i es conservaran durant 5 anys, d'acord amb la Llei orgànica 3/2018, de 5 de desembre, de protecció de dades de caràcter personal, amb la finalitat de gestionar processos de selecció de personal. Pot exercir els seus drets d'accés, rectificació i cancel·lació en els termes que estableix la llei.",
};

const contactCopy: Content["contactCopy"] = {
  title: "Contacta amb Disnet",
  subtitle: "La nostra flexibilitat amb els nostres clients ens fa adaptar-nos a les teves necessitats",
};

const clientAreaCopy: Content["clientAreaCopy"] = {
  title: "Àrea de clients Disnet",
  description: "Per a la teva màxima comoditat i control, Disnet t'ofereix la seva «Àrea de clients», on tindràs accés a tota la teva informació important en línia i en temps real.",
  portals: [
    { name: "MyDLS", description: "Disnet Logistic System", href: "https://websrv2.disnet.es:3000/" },
    { name: "B2B", description: "Disnet B2B", href: "https://b2b.disnet.es/SignUP.php" },
  ],
};

const blogPosts: Content["blogPosts"] = [
  {
    slug: "operador-logistico-barcelona",
    date: "10 de juliol de 2026",
    title: "Operador logístic a Barcelona: aspectes clau que has de tenir en compte abans de contractar",
    excerpt: "Gestionar la cadena de subministrament d'una empresa de forma interna pot convertir-se ràpidament en un veritable coll d'ampolla operatiu. A mesura que un negoci escala, tasques crítiques com…",
    body: [
      { text: "Gestionar la cadena de subministrament d'una empresa de forma interna pot convertir-se ràpidament en un **veritable coll d'ampolla operatiu**. A mesura que un negoci escala, tasques crítiques com l'emmagatzematge, el control d'inventari i el despatx de mercaderies absorbeixen recursos humans i temps valuós que s'hauria d'invertir en vendes i estratègies de marca. En aquest escenari, delegar els processos en un operador logístic a Barcelona no és només una alternativa d'estalvi, sinó una **decisió estratègica indispensable**." },
      { text: "Barcelona es consolida com un dels principals hubs logístics del sud d'Europa i un punt de connexió estratègic a nivell nacional i internacional. No obstant això, triar el soci d'infraestructura física adequat exigeix avaluar certs criteris de pes. Des de l'experiència de Disnet, com a especialistes amb més de 35 anys en el sector (des de 1991), et desglossem els factors essencials que has d'analitzar abans de signar amb el teu proper proveïdor 3PL." },
      { heading: "Ubicació estratègica i connectivitat amb vies de distribució" },
      { text: "L'èxit de la distribució física rau en la immediatesa. Un operador logístic òptim ha de comptar amb naus ubicades de manera que facilitin accessos ràpids a les principals artèries de comunicació, aeroports i ports marítims. Disposar de magatzems al cinturó industrial de Barcelona redueix temps de trànsit i costos d'última milla." },
      { heading: "Tecnologia avançada i traçabilitat d'estoc en temps real" },
      { text: "No et pots permetre perdre visibilitat dels teus productes. Abans de contractar, assegura't que l'operador implementa una aplicació SGA (Sistema de Gestió de Magatzems) multi-magatzem avançada. Això et garantirà accedir a tota la informació dels teus moviments en línia i en temps real, mantenint una estricta traçabilitat dels productes més diversos." },
      { heading: "Flexibilitat operativa i capacitat d'escalabilitat" },
      { text: "El mercat fluctua i el teu negoci també. El teu aliat logístic ha d'oferir una estructura flexible capaç d'adaptar-se a pics de demanda estacionals (com el Black Friday o les campanyes nadalenques) sense comprometre la qualitat. Avalua les seves magnituds: a Disnet comptem amb un suport de 12.000 ubicacions en racks i 15.000 ubicacions de picking; això assegura que l'espai mai serà un límit per al teu creixement." },
      { heading: "Experiència demostrada i rigor en l'externalització" },
      { text: "La logística física requereix coneixement, metodologies d'avantguarda i formació contínua. Un equip amb dècades de trajectòria en l'externalització de cadenes de subministrament sabrà identificar les necessitats exactes de la teva organització de forma proactiva, garantint un engranatge perfecte i minimitzant els marges d'error en la preparació." },
      { heading: "Conversió de costos fixos en variables" },
      { text: "Un benefici financer crític de contractar un 3PL expert és l'estalvi de costos directes. En externalitzar, elimines les despeses fixes associades al lloguer de naus, el manteniment, la contractació de personal propi i la maquinària de magatzem, i pagues exclusivament per l'espai i els serveis reals que consumeixes mes a mes." },
      { heading: "Solucions integrals: més enllà de l'operació logística estàndard" },
      { text: "Perquè l'externalització de les teves activitats logístiques sigui un èxit absolut, el teu soci no s'ha de limitar a emmagatzemar caixes; ha d'assumir de manera integral la distribució física dels teus productes perquè tu et desentenguis completament del procés." },
      { text: "A Disnet, la nostra prioritat és la satisfacció del client a través de solucions a mida que abasten totes les etapes de la cadena: recepció i manipulació de mercaderies amb un control exhaustiu d'entrades; emmagatzematge avançat en instal·lacions preparades per acollir els articles més diversos; preparació de comandes (picking) amb capacitat instal·lada per gestionar fluxos massius de sortida; empaquetat personalitzat (packing) per assegurar la protecció del producte durant el trasllat; logística especialitzada per a e-commerce, amb sistemes capaços de processar fins a 100.000 comandes; i transport de mercaderies juntament amb logística inversa per a la gestió eficient de les devolucions." },
      { heading: "Confia en l'experiència per transformar la teva logística" },
      { text: "La contractació d'un operador físic a Barcelona és un pas definitiu per portar la competitivitat de la teva empresa al següent nivell. Triar fiabilitat, infraestructura d'avantguarda i proximitat humana marca la diferència entre un servei amb errors constants i una cadena de subministrament impecable." },
      { text: "Amb més de 35 anys de trajectòria en el sector, a Disnet posem al teu abast una estructura permanent i un equip en formació contínua preparat per donar resposta a les teves expectatives operatives més exigents, tant si ets una petita empresa d'àmbit local com una gran organització industrial." },
    ],
  },
  {
    slug: "operador-logistico-3pl-barcelona",
    date: "11 de juny de 2026",
    title: "Operador logístic 3PL: l'aliat estratègic per delegar la teva logística i escalar el teu negoci",
    excerpt: "Gestionar la cadena de subministrament, l'emmagatzematge i els enviaments d'una empresa pot convertir-se ràpidament en un veritable maldecap. Quan el volum creix, el temps que hauries…",
    body: [
      { text: "Gestionar la cadena de subministrament, l'emmagatzematge i els enviaments d'una empresa pot convertir-se ràpidament en un **veritable maldecap**. Quan el volum creix, el temps que hauries de dedicar a vendre i a fer créixer la teva marca es dilueix entre caixes, inventaris i albarans." },
      { text: "Per evitar que la gestió operativa freni la teva evolució, comptar amb un operador logístic 3PL expert és la solució definitiva. En externalitzar aquests processos amb un especialista, no només allibera recursos humans i temps valuós, sinó que deixes l'eficiència dels teus lliuraments en mans professionals. A Disnet ens encarreguem d'absolutament tot el procés perquè recuperis el focus en allò que realment importa: el teu negoci." },
      { heading: "Què és exactament un operador logístic 3PL i com transforma la teva operativa?" },
      { text: "El concepte 3PL (Third-Party Logistics o Logística de Tercers) fa referència als serveis globals que una empresa subcontracta a un proveïdor extern especialitzat perquè assumeixi la responsabilitat de la gestió logística." },
      { text: "A diferència d'altres models, un operador logístic 3PL integral com Disnet no actua com un simple intermediari o consultor; posem a la teva disposició infraestructures físiques avançades i recursos propis, i ens encarreguem de forma directa de la recepció i emmagatzematge segur de les teves mercaderies, la gestió d'estoc intel·ligent i control d'inventaris, la preparació de comandes avançada (picking i packing) adaptada a e-commerce i B2B, i la distribució, el transport nacional i internacional i el control minuciós de la logística inversa (devolucions)." },
      { heading: "Quina és la diferència entre un operador 3PL i un 4PL?" },
      { text: "És molt comú confondre aquests termes, però els seus abasts i eines operatives són completament diferents. Un operador logístic 3PL compta amb recursos físics propis, com ara naus industrials, magatzems equipats i acords consolidats de transport. Es taca les mans amb l'operativa directa: guarda el teu producte, prepara el paquet de manera minuciosa i el lliura a la destinació de forma puntual." },
      { text: "Un operador 4PL, en canvi, funciona principalment a un nivell de consultoria, administració i optimització digital de la cadena de subministrament. Habitualment no disposen de naus ni transports propis, sinó que subcontracten al seu torn operadors 3PL per a l'execució de la tasca física." },
      { text: "En treballar amb Disnet, obtens l'avantatge directe de tractar amb qui gestiona físicament el teu inventari, cosa que agilitza la comunicació i elimina capes intermèdies de costos." },
      { heading: "Beneficis estratègics: per què la teva empresa necessita un operador logístic 3PL?" },
      { text: "Confiar en l'experiència d'un operador logístic 3PL consolidat aporta una sèrie d'avantatges competitius que impacten directament en el teu compte de resultats: estalvi massiu en costos fixos i inversió, en transformar les despeses de lloguer, fiances, maquinària i transport propi en costos variables; tecnologia avançada i traçabilitat integral, gràcies a sistemes de gestió de magatzem (SGA) que permeten monitorar l'estoc i l'estat de cada enviament en temps real; escalabilitat i flexibilitat davant pics de demanda, per absorbir campanyes com el Black Friday o el Nadal sense que l'estructura col·lapsi; i tarifes d'enviament més competitives i lliuraments ràpids, gràcies a la unificació de volums de múltiples clients que permet optimitzar rutes i accedir a millors acords de transport." },
      { heading: "Preguntes freqüents" },
      { heading: "Què és un sistema 3PL?" },
      { text: "És l'externalització estratègica d'una o diverses funcions operatives de la cadena de subministrament (com l'emmagatzematge, el control d'inventari, el picking i el transport) en un proveïdor extern especialitzat com Disnet." },
      { heading: "Quins avantatges ofereix el sistema 3PL per a la meva empresa?" },
      { text: "Et permet reduir costos operatius, flexibilitzar la teva infraestructura per escalar ràpid i millorar la satisfacció del client mitjançant lliuraments precisos, alliberant completament el teu equip de la càrrega de treball logística." },
      { heading: "És el sistema 3PL només per a grans empreses?" },
      { text: "No. El model 3PL és ideal per a negocis de totes les mides, des de startups i e-commerce en ple creixement fins a grans corporacions que requereixen delegar operatives complexes sense incórrer en altes inversions en actius físics." },
      { heading: "Perdré el control de la meva logística en externalitzar-la?" },
      { text: "Absolutament no. Al contrari: gràcies a les nostres eines tecnològiques integrades, mantens visibilitat absoluta i informes en temps real sobre el teu estoc, la preparació i les fases de distribució en tot moment." },
      { heading: "Inverteix en tranquil·litat i creixement per al teu negoci" },
      { text: "Delegar les teves operacions en un operador logístic 3PL especialitzat no significa perdre el control, sinó guanyar en eficiència, agilitat i capacitat de resposta. La clau de l'èxit empresarial rau a enfocar els esforços en les àrees que generen valor real, mentre els experts s'asseguren que cada paquet arribi perfecte i a temps a mans del client final." },
      { text: "A Disnet aunem experiència, instal·lacions de primer nivell i solucions a mida dissenyades específicament per impulsar el teu negoci. Deixa enrere les preocupacions logístiques i prepara't per créixer de forma sostinguda." },
    ],
  },
  {
    slug: "empresas-de-logistica-tecnologia-inteligencia-artificial",
    date: "4 de maig de 2026",
    title: "Com la tecnologia i la intel·ligència artificial estan transformant les empreses de logística?",
    excerpt: "Les empreses de logística han evolucionat molt més enllà del simple transport de mercaderies. Avui, la clau està a integrar tecnologia que permeti treballar amb més precisió, rapidesa i…",
    body: [
      { text: "Les empreses de logística han evolucionat molt més enllà del simple transport de mercaderies. Avui, la clau està a integrar tecnologia que permeti treballar amb **més precisió, rapidesa i control**. La incorporació d'eines avançades com la **intel·ligència artificial i l'automatització** està canviant completament la forma en què es gestionen les comandes, els enviaments i l'emmagatzematge." },
      { text: "Ja no es tracta només de moure productes, sinó de fer-ho de forma més intel·ligent, eficient i sense errors. Per això, avui t'expliquem com la tecnologia i la intel·ligència artificial estan revolucionant les empreses de logística i per què triar un partner que aposti per la innovació pot marcar la diferència en el teu negoci." },
      { heading: "Intel·ligència artificial en logística: decisions més ràpides i precises" },
      { text: "La intel·ligència artificial permet a les empreses de logística anticipar-se a situacions i millorar la presa de decisions en temps real. Entre les seves aplicacions més rellevants destaquen la predicció de la demanda, que permet anticipar pics de comandes i ajustar l'estoc per evitar trencaments o excessos d'inventari; l'optimització de rutes, analitzant variables per triar els recorreguts més eficients i reduir temps i costos; l'automatització de processos, des de la gestió de comandes fins al control d'inventari, minimitzant errors i millorant la productivitat; i la detecció d'incidències, identificant possibles problemes abans que afectin l'operativa o el client final." },
      { heading: "Automatització logística: més eficiència, menys errors" },
      { text: "L'automatització és un dels grans avenços en les empreses de logística actuals. Gràcies a ella, es poden optimitzar tasques clau sense dependre de processos manuals, cosa que permet preparar comandes de forma més ràpida, reduir errors en picking i packing, tenir un control constant de l'estoc i millorar els temps de lliurament. El resultat és una operativa molt més àgil i fiable." },
      { heading: "Traçabilitat i control en temps real" },
      { text: "Un dels grans beneficis de la tecnologia en logística és la possibilitat de tenir visibilitat total sobre cada comanda: seguiment en temps real dels enviaments, informació actualitzada de l'estat de les comandes, més control sobre l'operativa i capacitat de reacció davant qualsevol incidència." },
      { heading: "Per què triar una empresa de logística que aposta per la tecnologia?" },
      { text: "Treballar amb una empresa de logística que integra intel·ligència artificial i automatització no és només una millora interna, és un avantatge directe per al teu negoci: lliuraments més ràpids gràcies a processos optimitzats i millor planificació, menys errors gràcies a l'automatització que redueix les fallades humanes, estalvi de costos per l'optimització de recursos i temps, escalabilitat per créixer sense complicacions logístiques, i una millor experiència del client gràcies a més transparència, rapidesa i confiança en cada enviament." },
      { heading: "Disnet: tecnologia aplicada a solucions logístiques reals" },
      { text: "A Disnet treballem amb un enfocament clar: aplicar la tecnologia per millorar cada fase de la logística. Integrem solucions que permeten un control total de l'operativa, l'optimització de processos, la reducció de temps i costos, i una major precisió en cada enviament." },
      { text: "Combinem experiència i tecnologia per oferir una logística adaptada a les necessitats reals de cada client." },
    ],
  },
  {
    slug: "operador-logistico-vs-logistica-propia",
    date: "27 d'abril de 2026",
    title: "Operador logístic vs logística pròpia: quina opció impulsa realment el creixement de la teva empresa?",
    excerpt: "Gestionar correctament la logística d'una empresa va molt més enllà d'emmagatzemar productes o enviar-los a temps. Avui, l'eficiència en la cadena de subministrament pot marcar la diferència entre…",
    body: [
      { text: "Gestionar correctament la logística d'una empresa va molt més enllà d'emmagatzemar productes o enviar-los a temps. Avui, **l'eficiència en la cadena de subministrament** pot marcar la diferència entre una empresa competitiva i una altra que perd rendibilitat, temps i oportunitats." },
      { text: "Davant aquest escenari, moltes organitzacions s'enfronten a una decisió clau: mantenir una logística pròpia o apostar per un operador logístic especialitzat. Tot i que gestionar internament certes operacions pot semblar una solució de control, cada cop més empreses descobreixen que treballar amb un operador logístic com Disnet suposa un avantatge estratègic, econòmic i operatiu molt més sòlid." },
      { heading: "Què implica tenir una logística pròpia?" },
      { text: "La logística interna suposa que l'empresa assumeix directament tots els processos relacionats amb la seva cadena de subministrament: recepció de mercaderies, emmagatzematge, control d'estoc, preparació de comandes, empaquetat, transport, gestió de devolucions, tecnologia de traçabilitat i personal especialitzat." },
      { text: "A primer cop d'ull, pot semblar una forma de mantenir el control absolut, però a la pràctica implica una inversió constant en infraestructura, tecnologia, formació, recursos humans i capacitat d'adaptació. Entre els principals reptes de la logística pròpia hi ha els elevats costos fixos en instal·lacions, personal i maquinària; la major complexitat operativa; la dificultat per escalar en èpoques d'alta demanda; el risc d'errors en la preparació i la distribució; la menor capacitat tecnològica; i la necessitat d'actualització constant." },
      { heading: "Què ofereix un operador logístic 3PL?" },
      { text: "Un operador logístic (Third Party Logistics) externalitza i optimitza tots els processos logístics perquè l'empresa pugui centrar-se en la seva activitat principal mentre experts gestionen la cadena de subministrament." },
      { text: "En el cas de Disnet, parlem d'una estructura consolidada des de 1991, amb més de 35 anys d'experiència i una capacitat integral per adaptar-se a qualsevol necessitat logística. Amb Disnet obtens flexibilitat operativa, estalvi de costos, traçabilitat en temps real, ubicació estratègica a Barcelona i tecnologia avançada amb SGA multi magatzem." },
      { heading: "Serveis clau que ha d'oferir un operador logístic eficient" },
      { text: "Perquè una externalització sigui realment rendible, l'operador ha de cobrir totes les àrees crítiques: recepció de mercaderies, amb control d'entrada, revisió i organització eficient de productes; manipulació de mercaderies, amb processos adaptats a cada tipus de producte; emmagatzematge, amb espais optimitzats i traçabilitat permanent; preparació de comandes, amb picking eficient per reduir errors i accelerar temps; empaquetat (packing), tenint cura de la protecció i presentació dels enviaments; e-commerce, amb integració logística per a botigues en línia i gestió omnicanal; transport de mercaderies, amb distribució àgil i accés estratègic a les principals vies; i logística inversa, per a la gestió eficient de devolucions i retorns." },
      { heading: "Logística pròpia vs operador logístic: comparativa real" },
      { text: "En costos, la logística pròpia suposa una inversió alta i costos fixos permanents, mentre que un operador logístic redueix costos mitjançant una estructura ja optimitzada. En flexibilitat, la logística pròpia està limitada pels recursos interns, davant la capacitat d'adaptació d'un operador logístic segons la demanda. En tecnologia, la logística pròpia exigeix inversió en programari, SGA i traçabilitat propis, mentre que un operador logístic dona accés immediat a sistemes avançats com el SGA multi magatzem i control en línia en temps real. En ubicació estratègica, la logística pròpia depèn dels recursos propis de l'empresa, mentre que un operador logístic ja compta amb infraestructures en punts estratègics com Barcelona. I en escalabilitat, la logística pròpia implica un creixement més lent i costós, davant el creixement flexible i sense grans inversions que ofereix un operador logístic." },
      { heading: "Per què Disnet pot ser la teva millor opció?" },
      { text: "Disnet no només ofereix serveis logístics; ofereix una estructura integral dissenyada per convertir-se en una extensió estratègica del teu negoci. Entre els seus avantatges competitius destaquen més de 35 anys d'experiència, un servei flexible adaptat a cada client, ubicació estratègica a Barcelona, estalvi de costos, informació en línia en temps real, sistema SGA multi magatzem, traçabilitat estricta, formació contínua en noves metodologies i capacitat per a petites, mitjanes i grans empreses." },
      { heading: "La veritable pregunta no és si externalitzar, sinó amb qui fer-ho" },
      { text: "Quan una empresa decideix créixer, optimitzar recursos i millorar la seva competitivitat, la logística deixa de ser només una operació per convertir-se en una estratègia. Triar un operador logístic com Disnet significa transformar costos en eficiència, processos en oportunitats i logística en avantatge competitiu." },
      { text: "Si busques reduir costos, millorar temps, optimitzar la teva cadena de subministrament i comptar amb una estructura logística preparada per créixer amb tu, aquest és el moment de fer el següent pas." },
    ],
  },
  {
    slug: "preparacion-de-pedidos-cosas-que-debes-tener-en-cuenta-antes-de-contratar-este-servicio",
    date: "20 d'abril de 2026",
    title: "Preparació de comandes: coses que has de tenir en compte abans de contractar aquest servei",
    excerpt: "La preparació de comandes és un dels processos més crítics dins la logística de qualsevol empresa que gestioni enviaments. Una gestió eficient del picking no només impacta en la rapidesa de…",
    body: [
      { text: "La preparació de comandes és un dels **processos més crítics** dins la logística de qualsevol empresa que gestioni enviaments. Una gestió eficient del picking no només impacta en la rapidesa dels lliuraments, sinó també en la satisfacció del client, la reducció d'errors i la rendibilitat del negoci." },
      { text: "Abans de contractar una empresa especialitzada en preparació de comandes, és fonamental analitzar una sèrie de factors clau que garantiran que el servei realment aporti valor a la teva cadena de subministrament." },
      { heading: "Metodologia de picking i capacitat d'optimització" },
      { text: "No totes les empreses treballen la preparació de comandes de la mateixa manera. És important comprovar quins mètodes de picking utilitzen i si són capaces d'adaptar-los a les necessitats específiques de la teva operativa. Tècniques com el batch picking (picking per onades) permeten agrupar comandes per optimitzar temps, mentre que sistemes com el pick to box eliminen processos intermedis en preparar directament els productes a la caixa final d'enviament." },
      { text: "Una empresa especialitzada ha d'analitzar el teu volum de comandes, la tipologia de productes i la freqüència d'enviaments per seleccionar el mètode més eficient en cada cas." },
      { heading: "Planificació i control operatiu" },
      { text: "La planificació és clau en qualsevol procés de preparació de comandes. Un proveïdor professional ha de treballar amb una organització acurada que garanteixi agilitat sense comprometre la precisió. Abans de contractar, assegura't que l'empresa compta amb protocols clars de control, revisió i supervisió en cada fase del picking." },
      { text: "Això és fonamental per minimitzar errors, evitar incidències i assegurar que cada comanda surti correctament preparada." },
      { heading: "Tecnologia, traçabilitat i control d'estoc" },
      { text: "Un dels aspectes més importants a valorar és el nivell de tecnologia aplicada al procés. Una empresa especialitzada en preparació de comandes ha d'oferir control i traçabilitat integral, permetent saber en tot moment on es troba cada producte i en quina fase del procés està." },
      { text: "La visibilitat en temps real de l'estoc i de les comandes no només aporta tranquil·litat, sinó que millora la planificació i la presa de decisions estratègiques." },
      { heading: "Reducció d'errors i garantia de qualitat" },
      { text: "Una mala preparació de comandes pot generar devolucions, reclamacions i una pèrdua directa de confiança per part del client. Per això, és essencial que el proveïdor logístic tingui experiència demostrable en la reducció d'errors i en l'optimització de processos." },
      { text: "Un servei professional ha de garantir precisió en la selecció de productes, cura en la manipulació i control final abans de l'expedició." },
      { heading: "Adaptació al teu tipus de negoci i volum d'enviaments" },
      { text: "No és el mateix gestionar un e-commerce amb alt volum diari que una empresa amb enviaments periòdics. Tampoc és igual treballar amb productes petits que amb referències més voluminoses o delicades. Abans de contractar un servei de preparació de comandes, és clau analitzar si l'empresa està preparada per adaptar-se al teu model de negoci, assumir pics de demanda i créixer amb tu sense que la logística es converteixi en un coll d'ampolla." },
      { heading: "Preguntes freqüents" },
      { heading: "Quan convé externalitzar la preparació de comandes?" },
      { text: "Quan la gestió interna comença a generar errors, retards o consumeix massa recursos que podrien destinar-se al creixement del negoci." },
      { heading: "L'externalització millora la competitivitat?" },
      { text: "Sí. Un procés professional de picking fa que els lliuraments siguin més ràpids i precisos, cosa que millora l'experiència del client i la reputació de la marca." },
      { heading: "Es perd el control en delegar la preparació de comandes?" },
      { text: "No. Un proveïdor especialitzat ofereix traçabilitat i visibilitat constant, la qual cosa permet mantenir el control total sobre l'inventari i les comandes." },
      { heading: "Conclusió" },
      { text: "La preparació de comandes és molt més que recollir productes d'un magatzem. És un procés estratègic que influeix directament en l'eficiència operativa, la satisfacció del client i la competitivitat de la teva empresa." },
      { text: "Triar una empresa especialitzada en picking com Disnet que ofereixi planificació, tecnologia, mètodes optimitzats i control integral pot marcar la diferència en el teu creixement. Apostar per un equip expert en preparació de comandes és invertir en agilitat, precisió i confiança per al teu negoci." },
    ],
  },
  {
    slug: "aspectos-clave-a-valorar-antes-de-contratar-un-servicio-de-fulfillment",
    date: "13 d'abril de 2026",
    title: "Aspectes clau a valorar abans de contractar un servei de fulfillment",
    excerpt: "Delegar la logística és un dels passos més importants per a qualsevol negoci en línia que busca optimitzar la seva operativa i escalar de forma eficient. Un servei de fulfillment professional no…",
    body: [
      { text: "Delegar la logística és un dels passos més importants per a qualsevol negoci en línia que busca optimitzar la seva operativa i escalar de forma eficient. Un servei de fulfillment professional no només s'encarrega d'emmagatzemar i enviar productes, sinó que es converteix en un **aliat estratègic** que impacta directament en l'experiència del client i en la rendibilitat de l'e-commerce." },
      { text: "Per aquest motiu, abans de contractar un servei de fulfillment és fonamental analitzar certs factors clau." },
      { heading: "Ubicació del magatzem i connectivitat logística" },
      { text: "Un dels primers punts a avaluar és la localització del centre logístic. Comptar amb un magatzem de fulfillment a Barcelona suposa un avantatge estratègic gràcies a la seva excel·lent xarxa de transport, el seu port internacional i les seves connexions aèries i terrestres amb la resta d'Europa." },
      { text: "Aquesta proximitat als principals nodes logístics permet escurçar terminis de lliurament, reduir costos d'enviament i oferir un servei més competitiu. A Disnet, la ubicació del centre logístic està pensada per garantir rapidesa i eficiència en cada enviament, tant a nivell nacional com internacional." },
      { heading: "Capacitat operativa i possibilitat de creixement" },
      { text: "Un bon servei de fulfillment ha de ser capaç d'adaptar-se al ritme de cada negoci. Abans de contractar, és important comprovar que el proveïdor disposa de capacitat d'emmagatzematge flexible i recursos suficients per assumir increments de volum." },
      { text: "L'escalabilitat és clau per gestionar campanyes promocionals, llançaments de producte o temporades d'alta demanda sense que la logística es converteixi en un problema." },
      { heading: "Control d'estoc i sistemes tecnològics" },
      { text: "Una correcta gestió d'inventari permet mantenir el control de l'estoc en temps real, evitar errors i millorar la planificació de vendes." },
      { text: "Abans d'externalitzar la logística, convé assegurar-se que el proveïdor utilitza sistemes avançats, compatibles amb les principals plataformes d'e-commerce. En el cas de Disnet, la tecnologia aplicada al fulfillment permet una gestió precisa, transparent i totalment integrada amb els canals de venda en línia." },
      { heading: "Preparació de comandes i qualitat de l'embalatge" },
      { text: "La fase de preparació de comandes és determinant per a la satisfacció del client final. Un picking i packing eficients redueixen incidències, devolucions i errors en els enviaments." },
      { text: "Un servei professional té cura de cada comanda, des de la selecció del producte fins al seu embalatge, garantint que arribi en perfectes condicions." },
      { heading: "Adaptació al teu model de negoci i tipus de producte" },
      { text: "No tots els serveis de fulfillment serveixen per a qualsevol empresa. Abans de contractar, és clau analitzar si el proveïdor està realment preparat per adaptar-se al teu model de negoci i al tipus de producte que vens." },
      { text: "No és el mateix gestionar comandes de productes petits i lleugers que mercaderia voluminosa, fràgil o amb necessitats especials. Un proveïdor de fulfillment ha de ser capaç d'entendre la teva operativa, els teus fluxos de venda i les teves particularitats logístiques." },
      { heading: "Preguntes freqüents" },
      { heading: "Quin és el millor moment per externalitzar el fulfillment?" },
      { text: "El moment ideal sol arribar quan la gestió logística comença a consumir massa temps i recursos interns, afectant el creixement del negoci." },
      { heading: "El fulfillment permet reduir la càrrega operativa de l'e-commerce?" },
      { text: "Sí, en externalitzar el fulfillment s'eliminen tasques com la gestió de magatzem, la preparació de comandes i la coordinació d'enviaments, alliberant temps per a àrees estratègiques." },
      { heading: "Quin nivell de control té l'empresa sobre la seva logística?" },
      { text: "Encara que la logística estigui externalitzada, el client manté visibilitat i control sobre l'estoc, les comandes i els enviaments mitjançant sistemes de gestió i informes." },
      { heading: "Conclusió" },
      { text: "El fulfillment s'ha convertit en una peça clau dins l'estratègia de qualsevol negoci digital que busca créixer de forma ordenada i eficient." },
      { text: "Apostar per un servei de fulfillment a Barcelona com el de Disnet permet a les empreses professionalitzar la seva logística, millorar l'experiència del client i guanyar competitivitat en un mercat cada cop més exigent. Triar el partner adequat avui pot marcar la diferència en el creixement del teu negoci." },
    ],
  },
  {
    slug: "errores-que-perjudican-la-logistica-en-tu-e-commerce",
    date: "7 d'abril de 2026",
    title: "Errors que perjudiquen la logística en el teu e-commerce",
    excerpt: "La logística és un dels pilars fonamentals per a l'èxit de qualsevol e-commerce. Una mala gestió no només afecta els temps de lliurament, sinó que impacta directament en la satisfacció…",
    body: [
      { text: "La logística és un dels **pilars fonamentals** per a l'èxit de qualsevol e-commerce. Una mala gestió no només afecta els temps de lliurament, sinó que impacta directament en la satisfacció del client, les valoracions i, en conseqüència, en les teves vendes." },
      { text: "A Disnet, especialistes en solucions logístiques per a e-commerce, sabem que optimitzar cada procés marca la diferència entre un negoci que creix i un que perd oportunitats." },
      { heading: "No optimitzar els temps de lliurament" },
      { text: "Un dels errors més comuns en qualsevol e-commerce és no comptar amb una estratègia clara per reduir els temps de lliurament. Avui dia, els usuaris esperen enviaments ràpids i fiables. Quan això no es compleix, augmenten les cancel·lacions, disminueix la confiança del client i es generen opinions negatives." },
      { text: "A Disnet treballem amb processos optimitzats que permeten gestionar milions d'enviaments a l'any, garantint rapidesa i eficiència en cada comanda." },
      { heading: "Manca de traçabilitat en els enviaments" },
      { text: "No oferir informació clara sobre l'estat de les comandes és un altre gran error en la logística d'un e-commerce. Els clients volen saber on és la seva comanda, quan arribarà i si hi ha hagut incidències. La manca de traçabilitat genera incertesa i redueix la confiança en la teva marca." },
      { text: "Disnet aposta per la traçabilitat total en tots els processos logístics, oferint control i visibilitat tant per a l'empresa com per al client final." },
      { heading: "No adaptar-se a les necessitats del client" },
      { text: "Un altre error crític és no oferir flexibilitat en els lliuraments. Cada client té necessitats diferents, i un sistema rígid pot afectar negativament l'experiència de compra: horaris de lliurament limitats, poques opcions d'enviament o dificultats per gestionar canvis." },
      { text: "A Disnet entenem que la logística s'ha d'adaptar al client, no a l'inrevés, oferint solucions flexibles que milloren l'experiència global." },
      { heading: "Desconnexió entre sistemes en línia i logística" },
      { text: "Un e-commerce eficient necessita que la seva plataforma en línia estigui perfectament integrada amb la gestió logística. Errors comuns són els sistemes que no se sincronitzen, les fallades en l'estoc i els retards en la preparació de comandes." },
      { text: "A Disnet treballem amb integracions fluides amb plataformes com Shopify, WooCommerce, Magento, PrestaShop o Opencart, garantint una gestió connectada i sense errors." },
      { heading: "No externalitzar la logística a professionals" },
      { text: "Intentar gestionar tota la logística internament pot semblar rendible al principi, però a mesura que creix el volum de comandes, es converteix en un problema: saturació operativa, errors en els enviaments i increment de costos ocults." },
      { text: "L'externalització permet escalar el negoci sense comprometre la qualitat del servei. Amb més de 25 anys d'experiència, Disnet ofereix solucions especialitzades en la gestió integral de la cadena de subministrament per a e-commerce." },
      { heading: "Conclusió" },
      { text: "Evitar aquests errors és clau perquè el teu e-commerce creixi de forma sostenible i competitiva. La logística ja no és només un procés operatiu, sinó una part essencial de l'experiència del client." },
      { text: "Comptar amb un partner logístic adequat et permetrà reduir temps de lliurament, millorar la traçabilitat, oferir més flexibilitat i optimitzar tots els teus processos. A Disnet t'ajudem a optimitzar la logística del teu e-commerce perquè puguis centrar-te a fer créixer el teu negoci." },
    ],
  },
];

const navLinks: Content["navLinks"] = [
  { href: "/", label: "Inici" },
  { href: "/empresa", label: "Empresa" },
  { href: "/servicios", label: "Serveis" },
  { href: "/blog", label: "Blog" },
  { href: "/empresa#trabaja-con-nosotros", label: "Treballa amb nosaltres" },
  { href: "/area-clientes", label: "Àrea de clients" },
];

const ui: Content["ui"] = {
  headerContact: "Contacte",
  headerOpenMenu: "Obrir menú",
  heroCtaContact: "Contacta amb nosaltres",
  heroCtaVisit: "Visita les nostres instal·lacions!",
  heroCtaServices: "Veure serveis",
  readMore: "Llegir més",
  requestQuote: "Demanar pressupost",
  contactUs: "Contacta amb nosaltres",
  backToServices: "← Tornar a serveis",
  backToBlog: "← Tornar al blog",
  otherServices: "Altres serveis",
  moreArticles: "Més articles",
  readArticle: "Llegir article",
  servicesOffered: "Serveis que oferim",
  servicesOfferedIntro:
    "A Disnet, a més dels serveis estàndard, atenem qualsevol necessitat de logística dels nostres clients amb l'objectiu que no hagin d'ocupar-se, si així ho desitgen, de cap aspecte relacionat amb la distribució física dels seus productes.",
  learnMore: "Saber-ne més",
  access: "Accedir",
  footerNavigation: "Navegació",
  footerServices: "Serveis",
  footerContact: "Contacte",
  footerRights: "Tots els drets reservats.",
  footerLegalNotice: "Avís legal",
  footerPrivacyPolicy: "Política de privacitat",
  contactFormName: "Nom *",
  contactFormSurname: "Cognoms",
  contactFormEmail: "Correu electrònic *",
  contactFormPhone: "Telèfon",
  contactFormMessage: "Comentari o missatge *",
  contactFormTerms: "Accepto els termes en fer clic aquí.",
  contactFormMarketing: "Vull rebre informació que pugui ser del meu interès.",
  contactFormSubmit: "Enviar",
  contactFormSubmitting: "Enviant…",
  contactFormToastTitle: "Missatge enviat",
  contactFormToastDescription: "Gràcies per contactar amb Disnet, et respondrem tan aviat com sigui possible.",
  jobFormName: "Nom i cognoms *",
  jobFormEmail: "Correu electrònic *",
  jobFormPhone: "Telèfon de contacte",
  jobFormSubject: "Assumpte *",
  jobFormMessage: "Missatge *",
  jobFormCv: "Currículum (doc | pdf màx. 5Mb)",
  jobFormTerms: "Accepto els termes en fer clic aquí.",
  jobFormMarketing: "Vull rebre informació que pugui ser del meu interès.",
  jobFormSubmit: "Enviar candidatura",
  jobFormSubmitting: "Enviant…",
  jobFormToastTitle: "Sol·licitud enviada",
  jobFormToastDescription: "Gràcies pel teu interès, l'equip de Disnet revisarà la teva candidatura.",
  ctaBannerTitle: "Parlem de la teva cadena de subministrament?",
  ctaBannerSubtitle: "Escriu-nos i t'ajudem a trobar la solució logística adequada per al teu negoci.",
  addressLabel: "Adreça",
  phoneLabel: "Telèfon",
  emailLabel: "Correu electrònic",
  contactPageTitle: "Contacte | Disnet",
  servicesPageTitle: "Serveis | Disnet",
  servicesPageDescription:
    "Recepció, manipulació, emmagatzematge, preparació de comandes, empaquetat, e-commerce, transport i logística inversa.",
  blogPageTitle: "Blog sobre logística",
  blogPageDescription:
    "Novetats, anàlisis i consells de l'equip de Disnet sobre operacions logístiques i cadena de subministrament.",
  changeToSpanish: "Canviar a Castellà",
  changeToEnglish: "Canviar a Anglès",
  changeToCatalan: "Canviar a Català",
  changeToFrench: "Canviar a Francès",
  missionLabel: "Missió",
  visionLabel: "Visió",
  valuesLabel: "Valors",
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
  quotes,
  empresaCopy,
  jobsCopy,
  contactCopy,
  clientAreaCopy,
  blogPosts,
  navLinks,
  ui,
};

export default content;
