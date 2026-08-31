// Contenido extraído de https://disnet.es — reescrito visualmente pero fiel a los textos originales.
import type { Content } from "./types";

const company: Content["company"] = {
  name: "Disnet",
  legalName: "Disnet Sistemas de Distribución S.A.",
  tagline: "Operador Logístico 3PL para tu cadena de suministro",
  phone: "93 725 82 22",
  phoneHref: "tel:+34937258222",
  email: "info@disnet.es",
  address: "C/ Pla del Fonollar, 15 – 08205 – Poligon Riu Sec – Sabadell",
  since: 1991,
  yearsExperience: 35,
};

const heroCopy: Content["heroCopy"] = {
  eyebrow: "Operador logístico en Barcelona",
  title: company.tagline,
  paragraphs: [
    "**Disnet** está compuesta por profesionales con **más de 35 años de experiencia en la gestión logística** de la tercerización de las cadenas de suministro. El equipo gestiona los procesos con el conocimiento y rigor necesarios para que la externalización de las actividades logísticas de cualquier organización sea un éxito.",
    "Los miembros del equipo de Disnet destacan en su amplia capacidad para identificar las necesidades de sus clientes e implementar los mecanismos necesarios para darles respuesta.",
    "Conscientes de la continua evolución del sector, el equipo de Disnet se encuentra en formación continua, buscando la vanguardia del conocimiento en las nuevas estrategias y metodologías de las operaciones logísticas.",
    "El equipo de Disnet garantiza una estructura logística permanente, que hace que todo esté a punto en el momento que se necesite.",
  ],
};

const heroSlideAlts: Content["heroSlideAlts"] = [
  "Instalaciones de Disnet, operador logístico en Barcelona",
  "Almacén de Disnet en operación",
  "Estanterías de almacenaje de Disnet",
  "Placas solares en las instalaciones de Disnet",
];

const companyIntroCopy: Content["companyIntroCopy"] = {
  paragraphs: [
    "**Disnet** está compuesta por profesionales con **más de 35 años de experiencia en la gestión logística** de la tercerización de las cadenas de suministro. El equipo gestiona los procesos con el conocimiento y rigor necesarios para que la externalización de las actividades logísticas de cualquier organización sea un éxito.",
    "Los miembros del equipo de Disnet destacan en su amplia capacidad para identificar las necesidades de sus clientes e implementar los mecanismos necesarios para darles respuesta.",
    "Conscientes de la continua evolución del sector, el equipo de Disnet se encuentra en formación continua. Buscando la vanguardia del conocimiento en las nuevas estrategias y metodologías de las operaciones logísticas.",
    "El equipo de Disnet garantiza una estructura logística permanente, que hace que todo esté a punto en el momento que se necesite.",
  ],
};

const barcelonaCopy: Content["barcelonaCopy"] = {
  title: "Logística en Barcelona con Disnet",
  paragraphs: [
    "La ciudad de Barcelona es conocida por ser **uno de los principales centros logísticos de España**, ya que cuenta con una ubicación estratégica que la convierte en un punto clave para el transporte de mercancías tanto a nivel nacional como internacional.",
    "Para aquellas empresas que buscan mejorar sus operaciones y aprovechar al máximo las oportunidades del mercado, contar con servicios logísticos en Barcelona es una decisión acertada. Disnet, como operador logístico líder en la ciudad, ofrece **soluciones a medida para las necesidades de cada empresa**, garantizando eficiencia, calidad y satisfacción en cada etapa de la cadena de suministro.",
  ],
  highlight: "¡Confía en Disnet para llevar tu empresa al siguiente nivel en logística!",
};

const stats: Content["stats"] = [
  { value: 12000, label: "Ubicaciones en racks" },
  { value: 15000, label: "Ubicaciones de picking" },
  { value: 100000, label: "Capacidad pedidos e-commerce" },
];

const services: Content["services"] = [
  {
    slug: "recepcion-de-mercancias",
    name: "Recepción de mercancías",
    headline: "Con Disnet, la mercancía de tu empresa está siempre segura",
    intro: [
      "Gestionamos la recepción de mercancías de acuerdo con los **pliegos de condiciones** previamente acordados con los clientes.",
      "También realizamos los **controles de calidad logísticos** e informamos al cliente y/o proveedor de todas las incidencias detectadas.",
      "Nuestras metodologías de trabajo buscan **optimizar los movimientos, garantizar la trazabilidad y maximizar la eficacia** de las operaciones.",
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Qué es la recepción de mercancías en logística?",
        answer:
          "Es el proceso de recibir, verificar y controlar la calidad de los productos que llegan a un almacén antes de su almacenaje. Incluye comprobar cantidades, estado y documentación según los pliegos de condiciones acordados con el cliente, y notificar cualquier incidencia detectada.",
      },
      {
        question: "¿Cómo se garantiza la trazabilidad en la recepción de mercancías?",
        answer:
          "Mediante un Sistema de Gestión de Almacén (SGA) que registra cada movimiento desde la entrada, controles de calidad logísticos sistemáticos y comunicación inmediata al cliente o proveedor de cualquier incidencia detectada durante la descarga.",
      },
      {
        question: "¿Qué pasa si hay una incidencia al recibir un pedido?",
        answer:
          "Se documenta y se informa de inmediato al cliente y/o proveedor, permitiendo resolver discrepancias de cantidad, daños o errores de referencia antes de que la mercancía entre en stock, evitando problemas posteriores en el inventario.",
      },
      {
        question: "¿Cuánto tiempo tarda en procesarse la recepción de un pedido?",
        answer:
          "Depende del volumen y tipo de mercancía, pero un operador logístico con procesos optimizados puede procesar la recepción, el control de calidad y la ubicación en almacén en el mismo día, minimizando el tiempo entre la llegada y la disponibilidad del stock.",
      },
    ],
  },
  {
    slug: "manipulacion-de-mercancias",
    name: "Manipulación de mercancías",
    headline: "Disnet, trazabilidad garantizada en todos nuestros procesos",
    intro: [
      "Realizamos cualquier operación de manipulación acordada con el cliente garantizando la **trazabilidad total del proceso**.",
      "Realizamos manipulaciones independientemente del tamaño del lote. Desde lotes pequeños con poca automatización, a **grandes lotes con secuencias semiautomatizadas**.",
    ],
    list: [
      "Planchado y encajado o embolsado de productos textiles.",
      "Ensamblaje de componentes para el sector de automoción.",
      "Desmontaje y montaje de muebles del sector del descanso.",
      "Unificación de materias primas con otras para definir el producto final.",
      "Confección de packs y grupaje para promociones.",
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Qué incluye el servicio de manipulación de mercancías?",
        answer:
          "Operaciones como planchado y encajado de productos textiles, ensamblaje de componentes, desmontaje y montaje de muebles, unificación de materias primas y confección de packs y grupajes para promociones, siempre con trazabilidad total del proceso.",
      },
      {
        question: "¿Se puede manipular cualquier volumen de mercancía?",
        answer:
          "Sí. Un operador logístico experimentado gestiona desde lotes pequeños con poca automatización hasta grandes lotes con secuencias semiautomatizadas, adaptando el proceso al tipo de producto y al volumen específico de cada cliente.",
      },
      {
        question: "¿Qué sectores necesitan más servicios de manipulación?",
        answer:
          "Textil y moda (planchado, encajado), automoción (ensamblaje de componentes), mobiliario (montaje y desmontaje) y sectores que requieren confección de packs promocionales o unificación de materias primas para productos finales personalizados.",
      },
      {
        question: "¿Cómo se garantiza la trazabilidad al manipular productos?",
        answer:
          "Con un sistema de gestión de almacén que registra cada operación de manipulación, desde la entrada del material hasta la salida del producto transformado, garantizando control total del proceso independientemente del tamaño del lote.",
      },
    ],
  },
  {
    slug: "almacenaje",
    name: "Almacenaje",
    headline: "En Disnet, tenemos la tecnología más avanzada para el almacenaje de tus mercancías",
    intro: [
      "Tenemos la capacidad para almacenar múltiples tipologías de unidades de carga (paletas, cajas, bobinas, etc.) de acuerdo con los **estándares más exigentes de la manutención**. Todo ello para garantizar su correcta conservación.",
      "Disponemos de **más de 6.000 ubicaciones en racks** convencionales de palet, **más de 15.000 ubicaciones de picking** en una instalación de 6.500 m2 para almacenaje.",
      "Para garantizar la veracidad de los stocks, realizamos **inventarios permanentes** y validamos el estado de estos.",
      "Nuestro **Sistema de Gestión de Almacén (SGA)** nos permite aplicar una correcta distribución de los productos de acuerdo a la previsión de su consumo y así conseguir una mejor optimización del circuito logístico en el almacén.",
    ],
    sections: [
      {
        heading: "Almacenamiento de mercancías, gestión de inventario y distribución",
        paragraphs: [
          "En Disnet, somos **líderes en soluciones de almacenamiento y logística** en Barcelona. Nuestros almacenes modernos y seguros están estratégicamente ubicados para brindarte acceso rápido y conveniente a las principales redes de transporte. Ya sea que necesites **almacenar productos, gestionar inventarios o realizar distribuciones eficientes**, nuestro equipo altamente capacitado está listo para ayudarte. Con tecnología de vanguardia y sistemas de gestión avanzados, podemos garantizar una gestión precisa y transparente de tus mercancías.",
          "Además, entendemos la importancia de la **flexibilidad y la adaptabilidad** en el entorno empresarial actual. Por eso, ofrecemos **soluciones personalizadas** que se ajusten a tus necesidades específicas. Confía en nuestra experiencia y compromiso con la excelencia para optimizar tus operaciones logísticas.",
          "Obtén **soluciones personalizadas, servicios confiables y eficientes**, y un equipo experto que se encargará de todas tus necesidades de almacenamiento y distribución. No pierdas más tiempo, aprovecha nuestra experiencia y ubicación estratégica para llevar tu empresa al siguiente nivel.",
        ],
      },
      {
        heading: "Gestión de almacenamiento en Barcelona",
        paragraphs: [
          "Cada negocio tiene necesidades únicas. En Disnet, lo sabemos. Por eso, te ofrecemos soluciones de almacenamiento a medida que se adaptan perfectamente a tu volumen de negocio y tipo de mercancía. Con nosotros, disfrutarás de la seguridad, eficiencia y flexibilidad que necesitas para hacer crecer tu empresa.",
          "Trabajamos con **logística textil y de moda, logística de cosmética y perfumería**, y con cualquier otro sector que requiera un almacenaje especializado. Y si lo que buscabas era simplemente alquilar un almacén en Barcelona, con Disnet obtienes mucho más: un servicio logístico completo, sin la complejidad de gestionar tú mismo el espacio, el personal o la tecnología.",
        ],
      },
    ],
    benefitsTitle: "Beneficios clave",
    benefits: [
      {
        title: "Seguridad",
        points: [
          "Sistemas de seguridad de última generación para proteger tus mercancías.",
          "Acceso restringido y control de inventario en tiempo real.",
        ],
      },
      {
        title: "Flexibilidad",
        points: [
          "Adaptamos nuestras soluciones a tus necesidades específicas y volumen de negocio.",
          "Contratos flexibles y escalables.",
        ],
      },
      {
        title: "Eficiencia",
        points: [
          "Procesos optimizados para agilizar la gestión de tu inventario.",
          "Reducción de costos operativos.",
        ],
      },
      {
        title: "Ubicación estratégica",
        points: [
          "Fácil acceso a las principales vías de comunicación de Barcelona.",
          "Conexión con los principales puertos y aeropuertos.",
        ],
      },
      {
        title: "Tecnología",
        points: [
          "Plataforma tecnológica avanzada para el seguimiento y control de tus mercancías.",
          "Integración con tus sistemas de gestión.",
        ],
      },
    ],
    ctaLabel: "Solicita una cotización personalizada",
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Cuántas ubicaciones de almacenaje tiene Disnet en Barcelona?",
        answer:
          "Disponemos de más de 12.000 ubicaciones en racks convencionales de palet y más de 15.000 ubicaciones de picking en una instalación estratégicamente ubicada en Sabadell, con capacidad para múltiples tipologías de unidades de carga.",
      },
      {
        question: "¿Qué tipos de mercancía se pueden almacenar?",
        answer:
          "Paletas, cajas, bobinas y prácticamente cualquier unidad de carga, incluyendo sectores especializados como logística textil y de moda, cosmética y perfumería, siempre según los estándares más exigentes de manutención y conservación.",
      },
      {
        question: "¿Qué es un Sistema de Gestión de Almacén (SGA) y por qué importa?",
        answer:
          "Es el software que controla la ubicación, movimiento e inventario de cada producto en tiempo real. Permite distribuir la mercancía según su previsión de consumo, optimizando el circuito logístico y garantizando la veracidad del stock mediante inventarios permanentes.",
      },
      {
        question: "¿Es mejor alquilar un almacén propio o contratar almacenaje con un operador 3PL?",
        answer:
          "Alquilar un almacén implica gestionar tú mismo el espacio, personal y tecnología. Con un operador 3PL como Disnet obtienes un servicio logístico completo (seguridad, SGA, personal especializado) sin esa complejidad operativa ni la inversión inicial.",
      },
    ],
  },
  {
    slug: "camara-frigorifica",
    name: "Cámara frigorífica",
    headline: "En Disnet, cuidamos la cadena de frío de tus productos con almacenaje en cámara frigorífica",
    intro: [
      "Además de nuestras naves de almacenaje convencional, disponemos de **cámara frigorífica con temperatura controlada** para mercancía que requiere condiciones especiales de conservación.",
      "Gestionamos la **cadena de frío** de principio a fin, desde la recepción hasta la expedición, con el mismo **Sistema de Gestión de Almacén (SGA)** y control de trazabilidad que aplicamos al resto de nuestras operaciones.",
    ],
    sections: [
      {
        heading: "Almacenaje en frío para productos sensibles a la temperatura",
        paragraphs: [
          "Determinados productos, como los del sector de la alimentación, la cosmética o determinados artículos farmacéuticos y sanitarios, exigen condiciones de temperatura controlada durante todo el proceso logístico para conservar sus propiedades. En Disnet, integramos esta necesidad dentro de nuestra oferta de almacenaje, sin que tengas que recurrir a un proveedor distinto para tu mercancía convencional y tu mercancía refrigerada.",
          "Al tratarse de una extensión de nuestro servicio de almacenaje habitual, tu mercancía en cámara frigorífica se beneficia de la misma ubicación estratégica en Sabadell y de la misma capacidad de coordinación con el resto de tu cadena de suministro.",
        ],
      },
      {
        heading: "Trazabilidad y control también en frío",
        paragraphs: [
          "Aplicamos el mismo rigor que en el resto de nuestras instalaciones: inventarios permanentes, control de stock en tiempo real a través de nuestro SGA, y comunicación inmediata ante cualquier incidencia detectada durante la recepción o el almacenaje.",
        ],
      },
    ],
    benefitsTitle: "Beneficios de nuestra cámara frigorífica",
    benefits: [
      {
        title: "Cadena de frío garantizada",
        description: "Condiciones de temperatura controlada durante todo el proceso, desde la recepción hasta la expedición.",
      },
      {
        title: "Trazabilidad total",
        description: "El mismo Sistema de Gestión de Almacén e inventarios permanentes que aplicamos en el resto de nuestras operaciones.",
      },
      {
        title: "Un único operador logístico",
        description: "Gestiona tu mercancía convencional y tu mercancía refrigerada con el mismo proveedor, sin fricciones ni intermediarios adicionales.",
      },
      {
        title: "Ubicación estratégica",
        description: "Fácil acceso a las principales vías de comunicación de Barcelona y conexión con los principales puertos y aeropuertos.",
      },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audience: [
      "Empresas del sector alimentario que necesitan conservar producto refrigerado.",
      "Marcas de cosmética y perfumería con productos sensibles a la temperatura.",
      "Negocios que distribuyen productos farmacéuticos o sanitarios que exigen condiciones controladas.",
      "Clientes que ya trabajan con Disnet y necesitan ampliar su almacenaje a mercancía refrigerada.",
    ],
    ctaLabel: "Solicita información sobre almacenaje en frío",
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Qué es el almacenaje en cámara frigorífica?",
        answer:
          "Es el almacenaje de mercancía en instalaciones con temperatura controlada, necesario para productos que pierden sus propiedades o caducan antes si se conservan a temperatura ambiente, como ciertos alimentos, cosméticos o productos farmacéuticos y sanitarios.",
      },
      {
        question: "¿Qué tipo de mercancía se puede almacenar en la cámara frigorífica de Disnet?",
        answer:
          "Mercancía que requiere condiciones de temperatura controlada, como productos del sector de la alimentación, la cosmética y determinados artículos farmacéuticos y sanitarios. Consúltanos las condiciones específicas de tu producto para confirmar su idoneidad.",
      },
      {
        question: "¿Cómo se garantiza la trazabilidad en almacenaje refrigerado?",
        answer:
          "Con el mismo Sistema de Gestión de Almacén (SGA) e inventarios permanentes que utilizamos en el resto de nuestras instalaciones, controlando la ubicación y el movimiento de cada producto en tiempo real.",
      },
      {
        question: "¿Puedo combinar almacenaje convencional y en frío con Disnet?",
        answer:
          "Sí. La cámara frigorífica funciona como una extensión de nuestro servicio de almacenaje habitual, por lo que puedes gestionar tu mercancía convencional y tu mercancía refrigerada con un único operador logístico.",
      },
    ],
  },
  {
    slug: "preparacion-de-pedidos",
    name: "Preparación de pedidos",
    headline: "Disnet, especialistas en procesos de picking",
    intro: [
      "En Disnet, somos **expertos en la ejecución de operaciones de picking**, que consisten en la preparación de pedidos utilizando el material almacenado antes de su envío al destinatario.",
      "Nuestra planificación minuciosa nos permite seleccionar el método de optimización más apropiado en cada caso.",
    ],
    list: [
      "Batch picking (picking por oleadas): se extrae conjuntamente el material de todos los pedidos agrupados y luego se separan las cantidades de cada referencia destinada a cada pedido.",
      "Pick to box: el material se extrae agrupado y se coloca directamente en las cajas de envío en el mismo punto de extracción, eliminando la necesidad de un proceso de separación posterior.",
    ],
    extra: [
      "Nuestra contribución a tu cadena de suministro se traduce en una mayor competitividad, ya que hacemos que tus procesos sean más ágiles y eficientes, al tiempo que garantizamos un control y trazabilidad integrales durante todo el proceso de preparación de pedidos.",
    ],
    sections: [
      {
        heading: "La importancia estratégica de una óptima preparación de pedidos",
        paragraphs: [
          "En un mercado que exige velocidad y exactitud, una preparación de pedidos deficiente puede generar retrasos, errores y, en última instancia, insatisfacción del cliente. En Disnet, entendemos que cada pedido es crucial. Por eso, nuestra planificación es minuciosa, permitiéndonos seleccionar el método de optimización más apropiado en cada caso, garantizando que tu cadena de suministro sea lo más fluida y eficiente posible.",
        ],
      },
      {
        heading: "Tu cadena de suministro: más ágil y controlada con nuestra preparación de pedidos",
        paragraphs: [
          "La contribución de Disnet a tu cadena de suministro va más allá de la simple recolección de productos. Nuestra pericia en la preparación de pedidos se traduce en una mayor competitividad para tu empresa. Hacemos que tus procesos sean más ágiles y eficientes, optimizando tiempos y recursos.",
          "Además, garantizamos un control y trazabilidad integrales durante todo el proceso de preparación de pedidos. Sabrás en todo momento dónde está cada producto y en qué fase del picking se encuentra, lo que te ofrece total tranquilidad y transparencia.",
          "Confía en Disnet para una preparación de pedidos impecable que impulse la satisfacción de tus clientes y el crecimiento de tu negocio.",
        ],
      },
    ],
    benefitsTitle: "Beneficios tangibles de confiar en Disnet para tu preparación de pedidos",
    benefits: [
      { title: "Mayor competitividad", description: "Procesos logísticos más ágiles y eficientes que te dan ventaja en el mercado." },
      { title: "Reducción de errores", description: "Minimizamos drásticamente los fallos en los envíos, lo que se traduce en menos devoluciones y una mejor imagen de marca." },
      { title: "Velocidad en las entregas", description: "Aceleramos la preparación de pedidos para que tus productos lleguen antes a su destino, satisfaciendo las expectativas de tus clientes." },
      { title: "Control y trazabilidad total", description: "Te ofrecemos visibilidad integral de cada pedido, desde el momento del picking hasta la expedición." },
      { title: "Liberación de recursos", description: "Al delegar la preparación de pedidos en expertos, puedes enfocar tus recursos humanos y financieros en el crecimiento y la innovación de tu negocio." },
    ],
    audienceTitle: "¿Para quién es este servicio de preparación de pedidos?",
    audience: [
      "E-commerce que necesitan agilidad y precisión para gestionar un alto volumen de pedidos online.",
      "Empresas con un flujo constante de envíos que buscan optimizar su logística interna.",
      "Negocios que desean reducir costes operativos y mejorar la eficiencia en sus procesos de almacén.",
      "Marcas que aspiran a ofrecer una experiencia de cliente excepcional a través de entregas rápidas y sin errores.",
    ],
    ctaLabel: "Contáctenos",
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Qué diferencia hay entre batch picking y pick to box?",
        answer:
          "El batch picking extrae conjuntamente el material de varios pedidos agrupados y luego separa las cantidades por referencia. El pick to box coloca el material directamente en la caja de envío final en el mismo punto de extracción, eliminando un paso de separación posterior.",
      },
      {
        question: "¿Cómo se elige el método de picking más adecuado?",
        answer:
          "Se analiza el volumen de pedidos, la tipología de productos y la frecuencia de envíos de cada cliente para seleccionar el método de optimización más apropiado, priorizando siempre velocidad y precisión en la preparación.",
      },
      {
        question: "¿Qué empresas necesitan un servicio de picking profesional?",
        answer:
          "E-commerce con alto volumen de pedidos online, negocios con flujo constante de envíos, empresas que buscan reducir costes operativos en almacén y marcas que quieren ofrecer entregas rápidas y sin errores a sus clientes finales.",
      },
      {
        question: "¿Cómo afecta la preparación de pedidos a las devoluciones?",
        answer:
          "Una preparación de pedidos precisa reduce drásticamente los errores de envío, una de las principales causas de devoluciones. El control y trazabilidad integral durante el picking minimiza equivocaciones antes de que el pedido salga del almacén.",
      },
    ],
  },
  {
    slug: "empaqueado-packing",
    name: "Empaquetado – Packing",
    headline: "En Disnet, te garantizamos el mejor empaquetado para tu mercancía",
    intro: [
      "En nuestras operaciones de empaquetado, conocidas como 'packing', nos encargamos de preparar todas las unidades de transporte en las que serán enviados los pedidos. Durante este proceso, aplicamos los **criterios más avanzados en sostenibilidad, seguridad y trazabilidad**.",
      "Nuestro sistema de gestión de almacén (SGA) nos brinda **recomendaciones sobre el embalaje más adecuado** para cada envío, asegurando una preparación eficiente y apropiada.",
      "Una vez realizado el empaquetado, nos enfocamos en el envío de la mercancía de acuerdo con la fecha de entrega especificada por el cliente, generando toda la documentación necesaria según los requerimientos contractuales, legales y normativos aplicables.",
      "Esto garantiza que cada envío cumpla con los estándares y regulaciones vigentes.",
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Qué diferencia hay entre packing y empaquetado estándar?",
        answer:
          "El packing es la preparación específica de la unidad de transporte para el envío, aplicando criterios de sostenibilidad, seguridad y trazabilidad. Un Sistema de Gestión de Almacén recomienda el embalaje más adecuado según el tipo de producto y destino.",
      },
      {
        question: "¿Cómo se decide qué material de embalaje usar para cada envío?",
        answer:
          "El Sistema de Gestión de Almacén (SGA) analiza el tipo de producto, su fragilidad y el destino del envío para recomendar automáticamente el embalaje más adecuado, equilibrando protección del producto, coste y sostenibilidad.",
      },
      {
        question: "¿Qué documentación se genera durante el proceso de packing?",
        answer:
          "Toda la documentación necesaria según los requerimientos contractuales, legales y normativos aplicables a cada envío, garantizando que cumpla con los estándares y regulaciones vigentes antes de salir del almacén hacia su destino.",
      },
      {
        question: "¿El packing incluye embalaje personalizado de marca?",
        answer:
          "Sí. El servicio se adapta a las necesidades específicas de cada cliente y tipo de producto, priorizando siempre los criterios más avanzados de sostenibilidad, seguridad y trazabilidad en cada unidad de transporte preparada.",
      },
    ],
  },
  {
    slug: "e-commerce",
    name: "e-Commerce",
    headline: "En Disnet, te garantizamos los mejores tiempos de entrega",
    subheadline: "Fulfillment para Shopify, WooCommerce, Amazon y las principales plataformas",
    intro: [
      "¿Quién gestiona los envíos de tu tienda online? En Disnet nos encargamos de todo el proceso, desde que el pedido entra en tu web hasta que llega a la puerta del cliente. Siguiendo las tendencias actuales del comercio, somos especialistas en la tercerización de cadenas de suministro para el sector del eCommerce. Con **más de 25 años de experiencia**, hemos gestionado y preparado pedidos, con la capacidad de atender **más de 2.000.000 de envíos al año**.",
    ],
    list: [
      "Optimizar los tiempos de entrega.",
      "Proporcionar trazabilidad en todos los procesos logísticos.",
      "Ofrecer flexibilidad en los horarios de entrega.",
    ],
    extra: [
      "En Disnet entendemos que, para que un negocio de eCommerce prospere, la logística debe ofrecer una experiencia de compra excepcional. Solo así se logra aumentar la satisfacción del cliente. Por lo tanto, es esencial que el entorno en línea funcione en armonía con el mundo offline. Para lograrlo, mantenemos una conectividad fluida con los sistemas de gestión de la información más utilizados, como **Shopify, WooCommerce, Magento, PrestaShop, Opencart**, marketplaces como **Amazon**, y otros.",
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Con qué plataformas de e-commerce se integra Disnet?",
        answer:
          "Disnet ofrece fulfillment con conectividad fluida para Shopify, WooCommerce, Magento, PrestaShop, Opencart, marketplaces como Amazon y otros sistemas de gestión, permitiendo que la logística offline funcione en armonía con la tienda online sin fricciones técnicas.",
      },
      {
        question: "¿Cuántos envíos de e-commerce gestiona Disnet al año?",
        answer:
          "Con más de 25 años de experiencia en el sector, Disnet tiene capacidad para atender más de 2.000.000 de envíos al año, optimizando tiempos de entrega, trazabilidad y flexibilidad en los horarios de expedición.",
      },
      {
        question: "¿Qué es el fulfillment y en qué se diferencia de la logística tradicional?",
        answer:
          "El fulfillment es la gestión integral del pedido de e-commerce: recepción de stock, almacenaje, picking, packing y envío, todo integrado con la plataforma online. A diferencia de la logística tradicional, se centra en la experiencia de compra digital de principio a fin.",
      },
      {
        question: "¿Cómo mejora el fulfillment los tiempos de entrega de mi tienda online?",
        answer:
          "Al externalizar con un operador especializado, los pedidos se preparan y envían con procesos optimizados y trazabilidad en tiempo real, reduciendo cancelaciones y mejorando la confianza del cliente frente a plazos de entrega poco fiables.",
      },
    ],
  },
  {
    slug: "transporte-de-mercancias",
    name: "Transporte de mercancías",
    headline: "En Disnet, ofrecemos los mejores precios para el transporte de tu mercancía",
    subheadline: "Entrega rápida y siempre a tiempo",
    intro: [
      "De acuerdo con nuestros procedimientos, siempre efectuamos el **control de la calidad logística** de la expedición antes de efectuar la carga de la mercancía en el transporte.",
      "Utilizamos las **agencias de transporte más convenientes** para cada necesidad y garantizar el cumplimiento de las tasas de servicio acordadas con el cliente.",
      "Homologamos, calificamos y evaluamos las agencias de transporte utilizadas sea cual sea el destino de la mercancía.",
      "Disnet también puede responsabilizarse de la prestación de todo tipo de servicios tales como búsqueda y selección de transportistas, negociación de las condiciones, preparación de los contratos, gestión y control de la ejecución.",
      "De igual manera, estamos capacitados para gestionar servicios de transporte de forma eficiente, lo que nos permite ofrecer un servicio integral de envío de pedidos. Ya sea que necesites entregas locales o nacionales, estamos listos para manejar cada aspecto de tu logística de manera efectiva, garantizando que tus productos lleguen a su destino de manera segura y puntual.",
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Cómo selecciona Disnet las agencias de transporte?",
        answer:
          "Homologamos, calificamos y evaluamos las agencias de transporte según cada necesidad y destino, utilizando siempre las opciones más convenientes para garantizar el cumplimiento de las tasas de servicio acordadas con el cliente.",
      },
      {
        question: "¿Qué controles de calidad se hacen antes de enviar la mercancía?",
        answer:
          "Se efectúa siempre el control de la calidad logística de la expedición antes de cargar la mercancía en el transporte, verificando estado, cantidades y documentación para asegurar que llegue a su destino de forma segura y puntual.",
      },
      {
        question: "¿Disnet gestiona transporte nacional e internacional?",
        answer:
          "Sí. Disnet busca y selecciona transportistas, negocia condiciones, prepara contratos y gestiona la ejecución tanto para entregas locales y nacionales como para envíos internacionales, adaptándose a las necesidades de cada cliente.",
      },
      {
        question: "¿Qué ventaja tiene externalizar el transporte con un operador 3PL?",
        answer:
          "Se accede a mejores tarifas gracias a la unificación de volúmenes de múltiples clientes, se elimina la gestión directa de transportistas y se garantiza un servicio integral de envío con control de calidad en cada expedición.",
      },
    ],
  },
  {
    slug: "logistica-inversa",
    name: "Logística inversa",
    headline: "Gestión de devoluciones e incidencias con total fiabilidad",
    intro: [
      "En Disnet, no solo nos enfocamos en la gestión eficiente de las entregas, sino que también nos ocupamos de la logística inversa, lo que abarca la **gestión de devoluciones** y la resolución de cualquier incidencia que pueda surgir en el proceso.",
      "Mantenemos conectividad con los sistemas de gestión de información más ampliamente utilizados, como Shopify, WooCommerce, Magento, PrestaShop, Opencart, marketplaces como Amazon y otros. Esto nos permite estar en sintonía con las plataformas de eCommerce y garantizar una integración sin problemas en todas las etapas de la cadena de suministro.",
      "Reconocemos que ofrecer facilidad y rapidez en los procesos de reclamación y devolución es esencial para la satisfacción del cliente. Por lo tanto, hemos desarrollado varias alternativas de soporte diseñadas para simplificar y agilizar estos procedimientos. Nuestro objetivo es permitir que los clientes realicen devoluciones de manera confiable y sin costos que intimiden o afecten negativamente a su experiencia de compra o al negocio de nuestros clientes.",
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Qué es la logística inversa y qué incluye?",
        answer:
          "Es la gestión del flujo de productos desde el cliente final de vuelta al almacén: devoluciones, cambios, pedidos no entregados y productos defectuosos, resolviendo cualquier incidencia que surja durante todo el proceso de retorno.",
      },
      {
        question: "¿Con qué plataformas se integra la gestión de devoluciones?",
        answer:
          "Disnet mantiene conectividad con Shopify, WooCommerce, Magento, PrestaShop, Opencart, marketplaces como Amazon y otros sistemas de gestión de e-commerce, garantizando una integración sin problemas en todas las etapas de la cadena de suministro, incluidas las devoluciones.",
      },
      {
        question: "¿Por qué es importante externalizar la logística inversa?",
        answer:
          "Facilita procesos de reclamación y devolución rápidos y confiables, sin costes que intimiden al cliente. Esto mejora la satisfacción y fidelización, especialmente en sectores como moda o electrónica donde las devoluciones pueden representar entre el 20% y el 40% de las ventas.",
      },
      {
        question: "¿Cómo afecta la logística inversa a la experiencia de cliente de un e-commerce?",
        answer:
          "Una gestión de devoluciones ágil y sin fricciones aumenta la confianza del comprador a la hora de decidirse por una compra online, ya que sabe que un cambio o devolución no será un proceso complicado ni costoso.",
      },
    ],
  },
];

const whyChooseUs: Content["whyChooseUs"] = {
  title: "¿Por qué escoger Disnet?",
  intro: [
    "Disnet es un 3PL que ofrece **desde 1991 un servicio flexible** adaptado a las necesidades de cada cliente. La razón de ser de Disnet es asumir todos los requerimientos logísticos de nuestros clientes adaptando nuestros sistemas de trabajo, organización e instalaciones para responder a sus expectativas con la **máxima rapidez y fiabilidad**.",
    "Nuestra dimensión y proximidad nos coloca al alcance de cualquier organización, desde **pymes y pequeñas empresas de ámbito local** hasta organizaciones industriales de mayor dimensión.",
  ],
  points: [
    {
      title: "Ahorro de costes",
      description: "La reducción de costes es uno de los principales motivos para contratar nuestros servicios como 3PL.",
    },
    {
      title: "Sitio estratégico",
      description: "Centro logístico en Sabadell (Vallès Occidental), con rápidos accesos a las principales vías de comunicación de Barcelona.",
    },
    {
      title: "Online",
      description: "Toda la información de sus movimientos en tiempo real.",
    },
    {
      title: "Aplicación SGA Multi Almacén",
      description: "Sistema de Gestión que nos permite tratar los productos más diversos y mantener una estricta trazabilidad de los mismos. Toda la información de sus movimientos online en tiempo real.",
    },
  ],
};

const empresaCopy: Content["empresaCopy"] = {
  title: "Disnet – la logística como filosofía de trabajo",
  intro: [
    "¿Buscas una empresa de logística en Barcelona confiable y eficiente? En Disnet nos enorgullece ofrecer **servicios de logística de primera clase** desde nuestro centro logístico en **Sabadell, en pleno Vallès Occidental**.",
    "Ya sea que necesites transporte, almacenamiento o distribución de mercancías, nuestro equipo altamente capacitado y nuestras **soluciones personalizadas** están diseñados para satisfacer tus necesidades específicas. Con una sólida red de socios y una amplia experiencia en la industria, estamos comprometidos a brindarte **soluciones logísticas integrales** que optimicen tus operaciones y te ayuden a alcanzar tus objetivos comerciales.",
    "Confía en nuestra experiencia local y en nuestra dedicación para proporcionarte un servicio confiable y eficiente. ¡Contacta con nosotros hoy mismo y descubre cómo podemos impulsar el éxito de tu negocio en Barcelona!",
  ],
  mission: "Proporcionar competitividad a los procesos logísticos.",
  vision: "Ser el operador logístico de las cadenas de suministro de sus clientes.",
  values: "Profesionalidad, integridad, confianza, eficacia y eficiencia…",
};

const jobsCopy: Content["jobsCopy"] = {
  title: "Trabaja con nosotros",
  description: "¿Quieres formar parte del equipo de Disnet? Envíanos tus datos y tu currículum y nos pondremos en contacto contigo.",
  legal:
    "Sus datos serán tratados por Disnet Sistemas de Distribución S.A. y se conservarán durante 5 años, de acuerdo con la Ley Orgánica 3/2018 de 5 de diciembre, de Protección de Datos de Carácter Personal, con la finalidad de gestionar procesos de selección de personal. Puede ejercer sus derechos de acceso, rectificación y cancelación en los términos que establece la ley.",
};

const contactCopy: Content["contactCopy"] = {
  title: "Contacta con Disnet",
  subtitle: "Nuestra flexibilidad con nuestros clientes nos hace adaptarnos a tus necesidades",
};

const clientAreaCopy: Content["clientAreaCopy"] = {
  title: "Área clientes Disnet",
  description: "Para tu máxima comodidad y control, Disnet te ofrece su «Área de clientes», donde tendrás acceso a toda tu información importante online y en tiempo real.",
  portals: [
    { name: "MyDLS", description: "Disnet Logistic System", href: "https://websrv2.disnet.es:3000/" },
    { name: "B2B", description: "Disnet B2B", href: "https://b2b.disnet.es/SignUP.php" },
  ],
};

const blogPosts: Content["blogPosts"] = [
  {
    slug: "operador-logistico-barcelona",
    date: "10 de julio de 2026",
    title: "Operador logístico en Barcelona: aspectos clave que debes tener en cuenta antes de contratar",
    excerpt: "Gestionar la cadena de suministro de una empresa de forma interna puede convertirse rápidamente en un verdadero cuello de botella operativo. A medida que un negocio escala, tareas críticas como…",
    body: [
      { text: "Gestionar la cadena de suministro de una empresa de forma interna puede convertirse rápidamente en un **verdadero cuello de botella operativo**. A medida que un negocio escala, tareas críticas como el almacenamiento, el control de inventario y el despacho de mercancías absorben recursos humanos y tiempo valioso que se debería invertir en ventas y estrategias de marca. En este escenario, delegar los procesos en un operador logístico en Barcelona no es solo una alternativa de ahorro, sino una **decisión estratégica indispensable**." },
      { text: "Barcelona se consolida como uno de los principales hubs logísticos del sur de Europa y un punto de conexión estratégico a nivel nacional e internacional. Sin embargo, elegir al socio de infraestructura física adecuado exige evaluar ciertos criterios de peso. Desde la experiencia de Disnet, como especialistas con más de 35 años en el sector (desde 1991), te desglosamos los factores esenciales que debes analizar antes de firmar con tu próximo proveedor 3PL." },
      { heading: "Ubicación estratégica y conectividad con vías de distribución" },
      { text: "El éxito de la distribución física radica en la inmediatez. Un operador logístico óptimo debe contar con naves ubicadas de manera que faciliten rápidos accesos a las principales arterias de comunicación, aeropuertos y puertos marítimos. Disponer de almacenes en el cinturón industrial de Barcelona reduce tiempos de tránsito y costes de última milla." },
      { heading: "Tecnología avanzada y trazabilidad de stock en tiempo real" },
      { text: "No puedes permitirte perder visibilidad de tus productos. Antes de contratar, asegúrate de que el operador implemente una aplicación SGA (Sistema de Gestión de Almacenes) multi-almacén avanzada. Esto te garantizará acceder a toda la información de tus movimientos online y en tiempo real, manteniendo una estricta trazabilidad de los productos más diversos." },
      { heading: "Flexibilidad operativa y capacidad de escalabilidad" },
      { text: "El mercado fluctúa y tu negocio también. Tu aliado logístico debe ofrecer una estructura flexible capaz de adaptarse a picos de demanda estacionales (como el Black Friday o campañas navideñas) sin comprometer la calidad. Evalúa sus magnitudes: en Disnet contamos con un respaldo de 12.000 ubicaciones en racks y 15.000 ubicaciones de picking; esto asegura que el espacio nunca será un límite para tu crecimiento." },
      { heading: "Experiencia demostrada y rigor en la tercerización" },
      { text: "La logística física requiere conocimiento, metodologías vanguardistas y formación continua. Un equipo con décadas de trayectoria en la tercerización de cadenas de suministro sabrá identificar las necesidades exactas de tu organización de forma proactiva, garantizando un engranaje perfecto y minimizando los márgenes de error en la preparación." },
      { heading: "Conversión de costes fijos en variables" },
      { text: "Un beneficio financiero crítico de contratar un 3PL experto es el ahorro de costes directos. Al externalizar, eliminas los gastos fijos asociados al alquiler de naves, mantenimiento, contratación de personal propio y maquinaria de almacén, pagando exclusivamente por el espacio y los servicios reales que consumes mes a mes." },
      { heading: "Soluciones integrales: más allá de la operación logística estándar" },
      { text: "Para que la externalización de tus actividades logísticas sea un éxito absoluto, tu socio no debe limitarse a almacenar cajas; debe asumir de manera integral la distribución física de tus productos para que tú te desentiendas por completo del proceso." },
      { text: "En Disnet, nuestra prioridad es la satisfacción del cliente a través de soluciones a medida que abarcan todas las etapas de la cadena: recepción y manipulación de mercancías con un control exhaustivo de entradas; almacenaje avanzado en instalaciones preparadas para albergar los artículos más diversos; preparación de pedidos (picking) con capacidad instalada para gestionar flujos masivos de salida; empaquetado personalizado (packing) para asegurar la protección del producto durante el traslado; logística especializada para e-commerce, con sistemas capaces de procesar hasta 100.000 pedidos; y transporte de mercancías junto con logística inversa para la gestión eficiente de las devoluciones." },
      { heading: "Confía en la experiencia para transformar tu logística" },
      { text: "La contratación de un operador físico en Barcelona es un paso definitivo para llevar la competitividad de tu empresa al siguiente nivel. Elegir fiabilidad, infraestructura de vanguardia y proximidad humana marca la diferencia entre un servicio con errores constantes y una cadena de suministro impecable." },
      { text: "Con más de 35 años de trayectoria en el sector, en Disnet ponemos a tu alcance una estructura permanente y un equipo en formación continua preparado para dar respuesta a tus expectativas operativas más exigentes, sin importar si eres una pequeña empresa de ámbito local o una gran organización industrial." },
    ],
  },
  {
    slug: "operador-logistico-3pl-barcelona",
    date: "11 de junio de 2026",
    title: "Operador logístico 3PL: el aliado estratégico para delegar tu logística y escalar tu negocio",
    excerpt: "Gestionar la cadena de suministro, el almacenamiento y los envíos de una empresa puede convertirse rápidamente en un verdadero dolor de cabeza. Cuando el volumen crece, el tiempo que deberías…",
    body: [
      { text: "Gestionar la cadena de suministro, el almacenamiento y los envíos de una empresa puede convertirse rápidamente en un **verdadero dolor de cabeza**. Cuando el volumen crece, el tiempo que deberías dedicar a vender y a hacer crecer tu marca se diluye entre cajas, inventarios y albaranes." },
      { text: "Para evitar que la gestión operativa frene tu evolución, contar con un operador logístico 3PL experto es la solución definitiva. Al externalizar estos procesos con un especialista, no solo liberas recursos humanos y tiempo valioso, sino que dejas la eficiencia de tus entregas en manos profesionales. En Disnet nos encargamos de absolutamente todo el proceso para que recuperes el foco en lo que realmente importa: tu negocio." },
      { heading: "¿Qué es exactamente un operador logístico 3PL y cómo transforma tu operativa?" },
      { text: "El concepto 3PL (Third-Party Logistics o Logística de Terceros) hace referencia a los servicios globales que una empresa subcontrata a un proveedor externo especializado para que asuma la responsabilidad de la gestión logística." },
      { text: "A diferencia de otros modelos, un operador logístico 3PL integral como Disnet no actúa como un simple intermediario o consultor; ponemos a tu disposición infraestructuras físicas avanzadas y recursos propios, encargándonos de forma directa de la recepción y almacenamiento seguro de tus mercancías, la gestión de stock inteligente y control de inventarios, la preparación de pedidos avanzada (picking y packing) adaptada a e-commerce y B2B, y la distribución, transporte nacional e internacional y control minucioso de la logística inversa (devoluciones)." },
      { heading: "¿Cuál es la diferencia entre un operador 3PL y un 4PL?" },
      { text: "Es muy común confundir estos términos, pero sus alcances y herramientas operativas son completamente diferentes. Un operador logístico 3PL cuenta con recursos físicos propios, tales como naves industriales, almacenes equipados y acuerdos consolidados de transporte. Se ensucia las manos con la operativa directa: guarda tu producto, prepara el paquete de manera minuciosa y lo entrega en el destino de forma puntual." },
      { text: "Un operador 4PL, en cambio, funciona principalmente a un nivel de consultoría, administración y optimización digital de la cadena de suministro. Habitualmente no disponen de naves ni transportes propios, sino que subcontratan a su vez a operadores 3PL para la ejecución de la tarea física." },
      { text: "Al trabajar con Disnet, obtienes la ventaja directa de tratar con quien gestiona físicamente tu inventario, lo que agiliza la comunicación y elimina capas intermedias de costes." },
      { heading: "Beneficios estratégicos: ¿por qué tu empresa necesita un operador logístico 3PL?" },
      { text: "Confiar en la experiencia de un operador logístico 3PL consolidado aporta una serie de ventajas competitivas que impactan directamente en tu cuenta de resultados: ahorro masivo en costes fijos e inversión, al transformar los gastos de alquiler, fianzas, maquinaria y transporte propio en costes variables; tecnología avanzada y trazabilidad integral, gracias a sistemas de gestión de almacén (SGA) que permiten monitorizar el stock y el estado de cada envío en tiempo real; escalabilidad y flexibilidad ante picos de demanda, para absorber campañas como el Black Friday o la Navidad sin que la estructura colapse; y tarifas de envío más competitivas y entregas rápidas, gracias a la unificación de volúmenes de múltiples clientes que permite optimizar rutas y acceder a mejores acuerdos de transporte." },
      { heading: "Preguntas frecuentes" },
      { heading: "¿Qué es un sistema 3PL?" },
      { text: "Es la externalización estratégica de una o varias funciones operativas de la cadena de suministro (como almacenamiento, control de inventario, picking y transporte) en un proveedor externo especializado como Disnet." },
      { heading: "¿Qué ventajas ofrece el sistema 3PL para mi empresa?" },
      { text: "Te permite reducir costes operativos, flexibilizar tu infraestructura para escalar rápido y mejorar la satisfacción del cliente mediante entregas precisas, liberando por completo a tu equipo de la carga de trabajo logística." },
      { heading: "¿Es el sistema 3PL solo para grandes empresas?" },
      { text: "No. El modelo 3PL es ideal para negocios de todos los tamaños, desde startups y e-commerce en pleno crecimiento hasta grandes corporaciones que requieren delegar operativas complejas sin incurrir en altas inversiones en activos físicos." },
      { heading: "¿Perderé el control de mi logística al externalizarla?" },
      { text: "Absolutamente no. Al contrario: gracias a nuestras herramientas tecnológicas integradas, mantienes visibilidad absoluta y reportes en tiempo real sobre tu stock, la preparación y las fases de distribución en todo momento." },
      { heading: "Invierte en tranquilidad y crecimiento para tu negocio" },
      { text: "Delegar tus operaciones en un operador logístico 3PL especializado no significa perder el control, sino ganar en eficiencia, agilidad y capacidad de respuesta. La clave del éxito empresarial radica en enfocar los esfuerzos en las áreas que generan valor real, mientras los expertos se aseguran de que cada paquete llegue perfecto y a tiempo a manos del cliente final." },
      { text: "En Disnet aunamos experiencia, instalaciones de primer nivel y soluciones a medida diseñadas específicamente para impulsar tu negocio. Deja atrás las preocupaciones logísticas y prepárate para crecer de forma sostenida." },
    ],
  },
  {
    slug: "empresas-de-logistica-tecnologia-inteligencia-artificial",
    date: "4 de mayo de 2026",
    title: "¿Cómo la tecnología y la inteligencia artificial están transformando las empresas de logística?",
    excerpt: "Las empresas de logística han evolucionado mucho más allá del simple transporte de mercancías. Hoy, la clave está en integrar tecnología que permita trabajar con mayor precisión, rapidez y…",
    body: [
      { text: "Las empresas de logística han evolucionado mucho más allá del simple transporte de mercancías. Hoy, la clave está en integrar tecnología que permita trabajar con **mayor precisión, rapidez y control**. La incorporación de herramientas avanzadas como la **inteligencia artificial y la automatización** está cambiando por completo la forma en la que se gestionan los pedidos, los envíos y el almacenamiento." },
      { text: "Ya no se trata solo de mover productos, sino de hacerlo de forma más inteligente, eficiente y sin errores. Por eso, hoy te contamos cómo la tecnología y la inteligencia artificial están revolucionando las empresas de logística y por qué elegir un partner que apueste por la innovación puede marcar la diferencia en tu negocio." },
      { heading: "Inteligencia artificial en logística: decisiones más rápidas y precisas" },
      { text: "La inteligencia artificial permite a las empresas de logística anticiparse a situaciones y mejorar la toma de decisiones en tiempo real. Entre sus aplicaciones más relevantes destacan la predicción de la demanda, que permite anticipar picos de pedidos y ajustar el stock para evitar roturas o excesos de inventario; la optimización de rutas, analizando variables para elegir los recorridos más eficientes y reducir tiempos y costes; la automatización de procesos, desde la gestión de pedidos hasta el control de inventario, minimizando errores y mejorando la productividad; y la detección de incidencias, identificando posibles problemas antes de que afecten a la operativa o al cliente final." },
      { heading: "Automatización logística: más eficiencia, menos errores" },
      { text: "La automatización es uno de los grandes avances en las empresas de logística actuales. Gracias a ella, se pueden optimizar tareas clave sin depender de procesos manuales, lo que permite preparar pedidos de forma más rápida, reducir errores en picking y packing, tener un control constante del stock y mejorar los tiempos de entrega. El resultado es una operativa mucho más ágil y fiable." },
      { heading: "Trazabilidad y control en tiempo real" },
      { text: "Uno de los grandes beneficios de la tecnología en logística es la posibilidad de tener visibilidad total sobre cada pedido: seguimiento en tiempo real de envíos, información actualizada del estado de los pedidos, mayor control sobre la operativa y capacidad de reacción ante cualquier incidencia." },
      { heading: "¿Por qué elegir una empresa de logística que apuesta por la tecnología?" },
      { text: "Trabajar con una empresa de logística que integra inteligencia artificial y automatización no es solo una mejora interna, es una ventaja directa para tu negocio: entregas más rápidas gracias a procesos optimizados y mejor planificación, menos errores gracias a la automatización que reduce fallos humanos, ahorro de costes por la optimización de recursos y tiempos, escalabilidad para crecer sin complicaciones logísticas, y una mejor experiencia del cliente gracias a mayor transparencia, rapidez y confianza en cada envío." },
      { heading: "Disnet: tecnología aplicada a soluciones logísticas reales" },
      { text: "En Disnet trabajamos con un enfoque claro: aplicar la tecnología para mejorar cada fase de la logística. Integramos soluciones que permiten control total de la operativa, optimización de procesos, reducción de tiempos y costes, y mayor precisión en cada envío." },
      { text: "Combinamos experiencia y tecnología para ofrecer una logística adaptada a las necesidades reales de cada cliente." },
    ],
  },
  {
    slug: "operador-logistico-vs-logistica-propia",
    date: "27 de abril de 2026",
    title: "Operador logístico vs logística propia: ¿qué opción impulsa realmente el crecimiento de tu empresa?",
    excerpt: "Gestionar correctamente la logística de una empresa va mucho más allá de almacenar productos o enviarlos a tiempo. Hoy, la eficiencia en la cadena de suministro puede marcar la diferencia entre…",
    body: [
      { text: "Gestionar correctamente la logística de una empresa va mucho más allá de almacenar productos o enviarlos a tiempo. Hoy, **la eficiencia en la cadena de suministro** puede marcar la diferencia entre una empresa competitiva y otra que pierde rentabilidad, tiempo y oportunidades." },
      { text: "Ante este escenario, muchas organizaciones se enfrentan a una decisión clave: mantener una logística propia o apostar por un operador logístico especializado. Aunque gestionar internamente ciertas operaciones puede parecer una solución de control, cada vez más empresas descubren que trabajar con un operador logístico como Disnet supone una ventaja estratégica, económica y operativa mucho más sólida." },
      { heading: "¿Qué implica tener una logística propia?" },
      { text: "La logística interna supone que la empresa asume directamente todos los procesos relacionados con su cadena de suministro: recepción de mercancías, almacenaje, control de stock, preparación de pedidos, empaquetado, transporte, gestión de devoluciones, tecnología de trazabilidad y personal especializado." },
      { text: "A simple vista, puede parecer una forma de mantener el control absoluto, pero en la práctica implica una inversión constante en infraestructura, tecnología, formación, recursos humanos y capacidad de adaptación. Entre los principales desafíos de la logística propia están los elevados costes fijos en instalaciones, personal y maquinaria; la mayor complejidad operativa; la dificultad para escalar en épocas de alta demanda; el riesgo de errores en preparación y distribución; la menor capacidad tecnológica; y la necesidad de actualización constante." },
      { heading: "¿Qué ofrece un operador logístico 3PL?" },
      { text: "Un operador logístico (Third Party Logistics) externaliza y optimiza todos los procesos logísticos para que la empresa pueda centrarse en su actividad principal mientras expertos gestionan la cadena de suministro." },
      { text: "En el caso de Disnet, hablamos de una estructura consolidada desde 1991, con más de 35 años de experiencia y una capacidad integral para adaptarse a cualquier necesidad logística. Con Disnet obtienes flexibilidad operativa, ahorro de costes, trazabilidad en tiempo real, ubicación estratégica en Barcelona y tecnología avanzada con SGA multi almacén." },
      { heading: "Servicios clave que debe ofrecer un operador logístico eficiente" },
      { text: "Para que una externalización sea realmente rentable, el operador debe cubrir todas las áreas críticas: recepción de mercancías, con control de entrada, revisión y organización eficiente de productos; manipulación de mercancías, con procesos adaptados a cada tipo de producto; almacenaje, con espacios optimizados y trazabilidad permanente; preparación de pedidos, con picking eficiente para reducir errores y acelerar tiempos; empaquetado (packing), cuidando la protección y presentación de los envíos; e-commerce, con integración logística para tiendas online y gestión omnicanal; transporte de mercancías, con distribución ágil y acceso estratégico a las principales vías; y logística inversa, para la gestión eficiente de devoluciones y retornos." },
      { heading: "Logística propia vs operador logístico: comparativa real" },
      { text: "En costes, la logística propia supone una inversión alta y costes fijos permanentes, mientras que un operador logístico reduce costes mediante una estructura ya optimizada. En flexibilidad, la logística propia está limitada por los recursos internos, frente a la capacidad de adaptación de un operador logístico según la demanda. En tecnología, la logística propia exige inversión en software, SGA y trazabilidad propios, mientras que un operador logístico da acceso inmediato a sistemas avanzados como el SGA multi almacén y control online en tiempo real. En ubicación estratégica, la logística propia depende de los recursos propios de la empresa, mientras que un operador logístico ya cuenta con infraestructuras en puntos estratégicos como Barcelona. Y en escalabilidad, la logística propia implica un crecimiento más lento y costoso, frente al crecimiento flexible y sin grandes inversiones que ofrece un operador logístico." },
      { heading: "¿Por qué Disnet puede ser tu mejor opción?" },
      { text: "Disnet no solo ofrece servicios logísticos; ofrece una estructura integral diseñada para convertirse en una extensión estratégica de tu negocio. Entre sus ventajas competitivas destacan más de 35 años de experiencia, un servicio flexible adaptado a cada cliente, ubicación estratégica en Barcelona, ahorro de costes, información online en tiempo real, sistema SGA multi almacén, trazabilidad estricta, formación continua en nuevas metodologías y capacidad para pequeñas, medianas y grandes empresas." },
      { heading: "La verdadera pregunta no es si externalizar, sino con quién hacerlo" },
      { text: "Cuando una empresa decide crecer, optimizar recursos y mejorar su competitividad, la logística deja de ser solo una operación para convertirse en una estrategia. Elegir un operador logístico como Disnet significa transformar costes en eficiencia, procesos en oportunidades y logística en ventaja competitiva." },
      { text: "Si buscas reducir costes, mejorar tiempos, optimizar tu cadena de suministro y contar con una estructura logística preparada para crecer contigo, este es el momento de dar el siguiente paso." },
    ],
  },
  {
    slug: "preparacion-de-pedidos-cosas-que-debes-tener-en-cuenta-antes-de-contratar-este-servicio",
    date: "20 de abril de 2026",
    title: "Preparación de pedidos: cosas que debes tener en cuenta antes de contratar este servicio",
    excerpt: "La preparación de pedidos es uno de los procesos más críticos dentro de la logística de cualquier empresa que gestione envíos. Una gestión eficiente del picking no solo impacta en la rapidez de…",
    body: [
      { text: "La preparación de pedidos es uno de los **procesos más críticos** dentro de la logística de cualquier empresa que gestione envíos. Una gestión eficiente del picking no solo impacta en la rapidez de las entregas, sino también en la satisfacción del cliente, la reducción de errores y la rentabilidad del negocio." },
      { text: "Antes de contratar una empresa especializada en preparación de pedidos, es fundamental analizar una serie de factores clave que garantizarán que el servicio realmente aporte valor a tu cadena de suministro." },
      { heading: "Metodología de picking y capacidad de optimización" },
      { text: "No todas las empresas trabajan la preparación de pedidos de la misma forma. Es importante comprobar qué métodos de picking utilizan y si son capaces de adaptarlos a las necesidades específicas de tu operativa. Técnicas como el batch picking (picking por oleadas) permiten agrupar pedidos para optimizar tiempos, mientras que sistemas como el pick to box eliminan procesos intermedios al preparar directamente los productos en la caja final de envío." },
      { text: "Una empresa especializada debe analizar tu volumen de pedidos, la tipología de productos y la frecuencia de envíos para seleccionar el método más eficiente en cada caso." },
      { heading: "Planificación y control operativo" },
      { text: "La planificación es clave en cualquier proceso de preparación de pedidos. Un proveedor profesional debe trabajar con una organización minuciosa que garantice agilidad sin comprometer la precisión. Antes de contratar, asegúrate de que la empresa cuenta con protocolos claros de control, revisión y supervisión en cada fase del picking." },
      { text: "Esto es fundamental para minimizar errores, evitar incidencias y asegurar que cada pedido salga correctamente preparado." },
      { heading: "Tecnología, trazabilidad y control de stock" },
      { text: "Uno de los aspectos más importantes a valorar es el nivel de tecnología aplicada al proceso. Una empresa especializada en preparación de pedidos debe ofrecer control y trazabilidad integral, permitiendo saber en todo momento dónde se encuentra cada producto y en qué fase del proceso está." },
      { text: "La visibilidad en tiempo real del stock y de los pedidos no solo aporta tranquilidad, sino que mejora la planificación y la toma de decisiones estratégicas." },
      { heading: "Reducción de errores y garantía de calidad" },
      { text: "Una mala preparación de pedidos puede generar devoluciones, reclamaciones y una pérdida directa de confianza por parte del cliente. Por eso, es esencial que el proveedor logístico tenga experiencia demostrable en la reducción de errores y en la optimización de procesos." },
      { text: "Un servicio profesional debe garantizar precisión en la selección de productos, cuidado en la manipulación y control final antes de la expedición." },
      { heading: "Adaptación a tu tipo de negocio y volumen de envíos" },
      { text: "No es lo mismo gestionar un e-commerce con alto volumen diario que una empresa con envíos periódicos. Tampoco es igual trabajar con productos pequeños que con referencias más voluminosas o delicadas. Antes de contratar un servicio de preparación de pedidos, es clave analizar si la empresa está preparada para adaptarse a tu modelo de negocio, asumir picos de demanda y crecer contigo sin que la logística se convierta en un cuello de botella." },
      { heading: "Preguntas frecuentes" },
      { heading: "¿Cuándo conviene externalizar la preparación de pedidos?" },
      { text: "Cuando la gestión interna empieza a generar errores, retrasos o consume demasiados recursos que podrían destinarse al crecimiento del negocio." },
      { heading: "¿La externalización mejora la competitividad?" },
      { text: "Sí. Un proceso profesional de picking hace que las entregas sean más rápidas y precisas, lo que mejora la experiencia del cliente y la reputación de la marca." },
      { heading: "¿Se pierde el control al delegar la preparación de pedidos?" },
      { text: "No. Un proveedor especializado ofrece trazabilidad y visibilidad constante, permitiendo mantener el control total sobre el inventario y los pedidos." },
      { heading: "Conclusión" },
      { text: "La preparación de pedidos es mucho más que recoger productos de un almacén. Es un proceso estratégico que influye directamente en la eficiencia operativa, la satisfacción del cliente y la competitividad de tu empresa." },
      { text: "Elegir una empresa especializada en picking como Disnet que ofrezca planificación, tecnología, métodos optimizados y control integral puede marcar la diferencia en tu crecimiento. Apostar por un equipo experto en preparación de pedidos es invertir en agilidad, precisión y confianza para tu negocio." },
    ],
  },
  {
    slug: "aspectos-clave-a-valorar-antes-de-contratar-un-servicio-de-fulfillment",
    date: "13 de abril de 2026",
    title: "Aspectos clave a valorar antes de contratar un servicio de fulfillment",
    excerpt: "Delegar la logística es uno de los pasos más importantes para cualquier negocio online que busca optimizar su operativa y escalar de forma eficiente. Un servicio de fulfillment profesional no…",
    body: [
      { text: "Delegar la logística es uno de los pasos más importantes para cualquier negocio online que busca optimizar su operativa y escalar de forma eficiente. Un servicio de fulfillment profesional no solo se encarga de almacenar y enviar productos, sino que se convierte en un **aliado estratégico** que impacta directamente en la experiencia del cliente y en la rentabilidad del e-commerce." },
      { text: "Por este motivo, antes de contratar un servicio de fulfillment es fundamental analizar ciertos factores clave." },
      { heading: "Ubicación del almacén y conectividad logística" },
      { text: "Uno de los primeros puntos a evaluar es la localización del centro logístico. Contar con un almacén de fulfillment en Barcelona supone una ventaja estratégica gracias a su excelente red de transporte, su puerto internacional y sus conexiones aéreas y terrestres con el resto de Europa." },
      { text: "Esta cercanía a los principales nodos logísticos permite acortar plazos de entrega, reducir costes de envío y ofrecer un servicio más competitivo. En Disnet, la ubicación del centro logístico está pensada para garantizar rapidez y eficiencia en cada envío, tanto a nivel nacional como internacional." },
      { heading: "Capacidad operativa y posibilidad de crecimiento" },
      { text: "Un buen servicio de fulfillment debe ser capaz de adaptarse al ritmo de cada negocio. Antes de contratar, es importante comprobar que el proveedor dispone de capacidad de almacenamiento flexible y recursos suficientes para asumir incrementos de volumen." },
      { text: "La escalabilidad es clave para gestionar campañas promocionales, lanzamientos de producto o temporadas de alta demanda sin que la logística se convierta en un problema." },
      { heading: "Control de stock y sistemas tecnológicos" },
      { text: "Una correcta gestión de inventario permite mantener el control del stock en tiempo real, evitar errores y mejorar la planificación de ventas." },
      { text: "Antes de externalizar la logística, conviene asegurarse de que el proveedor utiliza sistemas avanzados, compatibles con las principales plataformas de e-commerce. En el caso de Disnet, la tecnología aplicada al fulfillment permite una gestión precisa, transparente y totalmente integrada con los canales de venta online." },
      { heading: "Preparación de pedidos y calidad del embalaje" },
      { text: "La fase de preparación de pedidos es determinante para la satisfacción del cliente final. Un picking y packing eficiente reduce incidencias, devoluciones y errores en los envíos." },
      { text: "Un servicio profesional cuida cada pedido, desde la selección del producto hasta su embalaje, garantizando que llegue en perfectas condiciones." },
      { heading: "Adaptación a tu modelo de negocio y tipo de producto" },
      { text: "No todos los servicios de fulfillment sirven para cualquier empresa. Antes de contratar, es clave analizar si el proveedor está realmente preparado para adaptarse a tu modelo de negocio y al tipo de producto que vendes." },
      { text: "No es lo mismo gestionar pedidos de productos pequeños y ligeros que mercancía voluminosa, frágil o con necesidades especiales. Un proveedor de fulfillment debe ser capaz de entender tu operativa, tus flujos de venta y tus particularidades logísticas." },
      { heading: "Preguntas frecuentes" },
      { heading: "¿Cuándo es el mejor momento para externalizar el fulfillment?" },
      { text: "El momento ideal suele llegar cuando la gestión logística empieza a consumir demasiado tiempo y recursos internos, afectando al crecimiento del negocio." },
      { heading: "¿El fulfillment permite reducir la carga operativa del e-commerce?" },
      { text: "Sí, al externalizar el fulfillment se eliminan tareas como la gestión de almacén, preparación de pedidos y coordinación de envíos, liberando tiempo para áreas estratégicas." },
      { heading: "¿Qué nivel de control tiene la empresa sobre su logística?" },
      { text: "Aunque la logística esté externalizada, el cliente mantiene visibilidad y control sobre el stock, los pedidos y los envíos mediante sistemas de gestión y reportes." },
      { heading: "Conclusión" },
      { text: "El fulfillment se ha convertido en una pieza clave dentro de la estrategia de cualquier negocio digital que busca crecer de forma ordenada y eficiente." },
      { text: "Apostar por un servicio de fulfillment en Barcelona como el de Disnet permite a las empresas profesionalizar su logística, mejorar la experiencia del cliente y ganar competitividad en un mercado cada vez más exigente. Elegir el partner adecuado hoy puede marcar la diferencia en el crecimiento de tu negocio." },
    ],
  },
  {
    slug: "errores-que-perjudican-la-logistica-en-tu-e-commerce",
    date: "7 de abril de 2026",
    title: "Errores que perjudican la logística en tu e-commerce",
    excerpt: "La logística es uno de los pilares fundamentales para el éxito de cualquier e-commerce. Una mala gestión no solo afecta los tiempos de entrega, sino que impacta directamente en la satisfacción…",
    body: [
      { text: "La logística es uno de los **pilares fundamentales** para el éxito de cualquier e-commerce. Una mala gestión no solo afecta los tiempos de entrega, sino que impacta directamente en la satisfacción del cliente, las valoraciones y, en consecuencia, en tus ventas." },
      { text: "En Disnet, especialistas en soluciones logísticas para e-commerce, sabemos que optimizar cada proceso marca la diferencia entre un negocio que crece y uno que pierde oportunidades." },
      { heading: "No optimizar los tiempos de entrega" },
      { text: "Uno de los errores más comunes en cualquier e-commerce es no contar con una estrategia clara para reducir los tiempos de entrega. Hoy en día, los usuarios esperan envíos rápidos y fiables. Cuando esto no se cumple, aumentan las cancelaciones, disminuye la confianza del cliente y se generan opiniones negativas." },
      { text: "En Disnet trabajamos con procesos optimizados que permiten gestionar millones de envíos al año, garantizando rapidez y eficiencia en cada pedido." },
      { heading: "Falta de trazabilidad en los envíos" },
      { text: "No ofrecer información clara sobre el estado de los pedidos es otro gran fallo en la logística de un e-commerce. Los clientes quieren saber dónde está su pedido, cuándo llegará y si ha habido incidencias. La falta de trazabilidad genera incertidumbre y reduce la confianza en tu marca." },
      { text: "Disnet apuesta por la trazabilidad total en todos los procesos logísticos, ofreciendo control y visibilidad tanto para la empresa como para el cliente final." },
      { heading: "No adaptarse a las necesidades del cliente" },
      { text: "Otro error crítico es no ofrecer flexibilidad en las entregas. Cada cliente tiene necesidades distintas, y un sistema rígido puede afectar negativamente la experiencia de compra: horarios de entrega limitados, pocas opciones de envío o dificultades para gestionar cambios." },
      { text: "En Disnet entendemos que la logística debe adaptarse al cliente, no al revés, ofreciendo soluciones flexibles que mejoran la experiencia global." },
      { heading: "Desconexión entre sistemas online y logística" },
      { text: "Un e-commerce eficiente necesita que su plataforma online esté perfectamente integrada con la gestión logística. Errores comunes son los sistemas que no se sincronizan, los fallos en el stock y los retrasos en la preparación de pedidos." },
      { text: "En Disnet trabajamos con integraciones fluidas con plataformas como Shopify, WooCommerce, Magento, PrestaShop u Opencart, además de marketplaces como Amazon, garantizando una gestión conectada y sin errores." },
      { heading: "No externalizar la logística a profesionales" },
      { text: "Intentar gestionar toda la logística internamente puede parecer rentable al inicio, pero a medida que crece el volumen de pedidos, se convierte en un problema: saturación operativa, errores en los envíos e incremento de costes ocultos." },
      { text: "La externalización permite escalar el negocio sin comprometer la calidad del servicio. Con más de 25 años de experiencia, Disnet ofrece soluciones especializadas en la gestión integral de la cadena de suministro para e-commerce." },
      { heading: "Conclusión" },
      { text: "Evitar estos errores es clave para que tu e-commerce crezca de forma sostenible y competitiva. La logística ya no es solo un proceso operativo, sino una parte esencial de la experiencia del cliente." },
      { text: "Contar con un partner logístico adecuado te permitirá reducir tiempos de entrega, mejorar la trazabilidad, ofrecer mayor flexibilidad y optimizar todos tus procesos. En Disnet te ayudamos a optimizar la logística de tu e-commerce para que puedas centrarte en hacer crecer tu negocio." },
    ],
  },
];

const siteFaq: Content["siteFaq"] = {
  title: "Preguntas frecuentes sobre Disnet",
  items: [
    {
      question: "¿Qué es un operador logístico 3PL?",
      answer:
        "Es una empresa especializada que gestiona toda o parte de la cadena de suministro de otra empresa: recepción, almacenaje, preparación de pedidos, transporte y logística inversa. Externalizar estas funciones permite reducir costes fijos y centrar los recursos propios en el negocio principal.",
    },
    {
      question: "¿Qué diferencia hay entre un operador 3PL y un 4PL?",
      answer:
        "Un 3PL como Disnet cuenta con infraestructura física propia (almacenes, personal, transporte) y ejecuta la operativa directamente. Un 4PL funciona a nivel de consultoría y coordinación digital, sin activos propios, subcontratando a su vez a operadores 3PL para la ejecución física.",
    },
    {
      question: "¿Dónde está ubicado el almacén de Disnet?",
      answer:
        "El centro logístico de Disnet está en Sabadell (Vallès Occidental), con acceso rápido a las principales vías de comunicación de Barcelona, lo que permite tiempos de tránsito reducidos para distribución nacional e internacional.",
    },
    {
      question: "¿Disnet trabaja con pequeñas empresas o solo con grandes cuentas?",
      answer:
        "Disnet atiende desde pymes y pequeñas empresas de ámbito local hasta grandes organizaciones industriales, adaptando el servicio, la tecnología y la estructura de costes al volumen y necesidades específicas de cada cliente.",
    },
    {
      question: "¿Con qué plataformas de e-commerce se integra Disnet?",
      answer:
        "Disnet ofrece fulfillment con conectividad para Shopify, WooCommerce, Magento, PrestaShop, Opencart, marketplaces como Amazon y otros sistemas de gestión, permitiendo que la logística offline funcione en armonía con la tienda online sin fricciones técnicas.",
    },
    {
      question: "¿Cómo puedo externalizar la logística de mi empresa?",
      answer:
        "Basta con contactar con Disnet para analizar tu volumen de pedidos, tipo de mercancía y necesidades específicas. A partir de ahí se diseña una solución a medida que cubre recepción, almacenaje, preparación de pedidos, transporte y logística inversa según lo que necesites.",
    },
    {
      question: "¿Qué sectores atiende Disnet?",
      answer:
        "Disnet trabaja con logística textil y de moda, cosmética y perfumería, e-commerce y cualquier sector que requiera almacenaje especializado, adaptando sus procesos e infraestructura a las particularidades de cada tipo de producto.",
    },
    {
      question: "¿Cuánto cuesta contratar un operador logístico como Disnet?",
      answer:
        "El coste depende del volumen de mercancía, el tipo de servicios contratados (almacenaje, picking, transporte...) y la frecuencia de envíos. Disnet ofrece presupuestos personalizados tras analizar las necesidades reales de cada cliente, sin compromisos ocultos.",
    },
  ],
};

const navLinks: Content["navLinks"] = [
  { href: "/", label: "Inicio" },
  { href: "/empresa", label: "Empresa" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/empresa#trabaja-con-nosotros", label: "Trabaja con nosotros" },
  { href: "/area-clientes", label: "Área clientes" },
];

const ui: Content["ui"] = {
  headerContact: "Contacto",
  headerOpenMenu: "Abrir menú",
  heroCtaContact: "Contacta con nosotros",
  heroCtaVisit: "¡Visita nuestras instalaciones!",
  heroCtaServices: "Ver servicios",
  readMore: "Leer más",
  requestQuote: "Pedir presupuesto",
  contactUs: "Contacta con nosotros",
  backToServices: "← Volver a servicios",
  backToBlog: "← Volver al blog",
  otherServices: "Otros servicios",
  moreArticles: "Más artículos",
  readArticle: "Leer artículo",
  servicesOffered: "Servicios que ofrecemos",
  servicesOfferedIntro:
    "En Disnet, además de los servicios estándar, atendemos cualquier necesidad de logística de nuestros clientes con el objetivo de que no tengan que ocuparse, si así lo desean, de ningún aspecto relacionado con la distribución física de sus productos.",
  learnMore: "Saber más",
  access: "Acceder",
  footerNavigation: "Navegación",
  footerServices: "Servicios",
  footerContact: "Contacto",
  footerRights: "Todos los derechos reservados.",
  footerLegalNotice: "Aviso legal",
  footerPrivacyPolicy: "Política de privacidad",
  contactFormName: "Nombre *",
  contactFormSurname: "Apellidos",
  contactFormEmail: "Correo electrónico *",
  contactFormPhone: "Teléfono",
  contactFormMessage: "Comentario o mensaje *",
  contactFormTerms: "Acepto los términos al clicar aquí.",
  contactFormMarketing: "Deseo recibir información que pueda ser de mi interés.",
  contactFormSubmit: "Enviar",
  contactFormSubmitting: "Enviando…",
  contactFormToastTitle: "Mensaje enviado",
  contactFormToastDescription: "Gracias por contactar con Disnet, te responderemos lo antes posible.",
  contactFormToastErrorTitle: "No se pudo enviar",
  contactFormToastErrorDescription: "Ha ocurrido un error. Inténtalo de nuevo o escríbenos directamente a info@disnet.es.",
  jobFormName: "Nombre y apellidos *",
  jobFormEmail: "Correo electrónico *",
  jobFormPhone: "Teléfono de contacto",
  jobFormSubject: "Asunto *",
  jobFormMessage: "Mensaje *",
  jobFormCv: "Currículum (doc | pdf máx. 5Mb)",
  jobFormTerms: "Acepto los términos al clicar aquí.",
  jobFormMarketing: "Deseo recibir información que pueda ser de mi interés.",
  jobFormSubmit: "Enviar candidatura",
  jobFormSubmitting: "Enviando…",
  jobFormToastTitle: "Solicitud enviada",
  jobFormToastDescription: "Gracias por tu interés, el equipo de Disnet revisará tu candidatura.",
  jobFormToastErrorTitle: "No se pudo enviar",
  jobFormToastErrorDescription: "Ha ocurrido un error. Inténtalo de nuevo o escríbenos directamente a info@disnet.es.",
  ctaBannerTitle: "¿Hablamos de tu cadena de suministro?",
  ctaBannerSubtitle: "Escríbenos y te ayudamos a encontrar la solución logística adecuada para tu negocio.",
  addressLabel: "Dirección",
  phoneLabel: "Teléfono",
  emailLabel: "Email",
  contactPageTitle: "Contacto | Disnet",
  servicesPageTitle: "Servicios | Disnet",
  servicesPageDescription:
    "Recepción, manipulación, almacenaje, preparación de pedidos, empaquetado, e-commerce, transporte y logística inversa.",
  blogPageTitle: "Blog sobre logística",
  blogPageDescription:
    "Novedades, análisis y consejos del equipo de Disnet sobre operaciones logísticas y cadena de suministro.",
  changeToSpanish: "Cambiar a Castellano",
  changeToEnglish: "Cambiar a Inglés",
  changeToCatalan: "Cambiar a Catalán",
  changeToFrench: "Cambiar a Francés",
  missionLabel: "Misión",
  visionLabel: "Visión",
  valuesLabel: "Valores",
  legalNoticePageTitle: "Aviso legal",
  privacyPolicyPageTitle: "Política de privacidad",
  lastUpdatedLabel: "Última actualización",
};

const legalNoticeCopy: Content["legalNoticeCopy"] = {
  title: "Aviso legal de www.disnet.es",
  lastUpdated: "20 de septiembre de 2023",
  body: [
    { heading: "Introducción" },
    {
      text: "En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), Disnet Sistemas de Distribución S.A. informa que es titular del sitio web. De acuerdo con la exigencia del artículo 10 de la citada ley, se facilitan los siguientes datos: representante legal Disnet Sistemas de Distribución S.A., NIF A59843748, dominio www.disnet.es, dirección postal Pla d'en Fonollar, 15, 08205 Sabadell (Barcelona), dirección electrónica annaturon@disnet.es, teléfono 657307224.",
    },
    { heading: "Usuario y régimen de responsabilidades" },
    {
      text: "La navegación, acceso y uso del sitio web de Disnet Sistemas de Distribución S.A. confiere la condición de usuario. El sitio web proporciona gran diversidad de información, servicios y datos. El usuario asume su responsabilidad en el uso correcto del sitio web.",
    },
    { heading: "Política de enlaces y exenciones de responsabilidad" },
    {
      text: "Disnet Sistemas de Distribución S.A. no se hace responsable del contenido de los sitios web a los que el usuario pueda acceder a través de los enlaces establecidos en su sitio web, siempre que no tenga conocimiento efectivo de que la actividad o la información a la que remite o recomienda es ilícita o de que lesiona bienes o derechos de un tercero susceptibles de indemnización.",
    },
    { heading: "Modificaciones" },
    {
      text: "Disnet Sistemas de Distribución S.A. se reserva el derecho a realizar las modificaciones que considere oportunas, sin aviso previo, en el contenido de su sitio web, tanto en lo referente a los contenidos como a las condiciones de uso o a las condiciones generales de contratación. Los cambios no afectarán a las contrataciones realizadas con fecha anterior a la fecha de publicación de los mismos.",
    },
    { heading: "Indicación de precios" },
    {
      text: "En caso de que se muestren precios de productos y/o servicios, los indicados en pantalla serán los vigentes en cada momento. Los precios se indicarán en euros e incluirán el Impuesto sobre el Valor Añadido (IVA).",
    },
    { heading: "Propiedad intelectual e industrial" },
    {
      text: "Disnet Sistemas de Distribución S.A., por sí misma o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma.",
    },
    { heading: "Certificado SSL (Secure Sockets Layer)" },
    {
      text: "El certificado SSL proporciona autenticación, privacidad y seguridad de la información entre Disnet Sistemas de Distribución S.A. y el usuario.",
    },
    { heading: "Acciones legales, legislación aplicable y jurisdicción" },
    {
      text: "La relación entre el usuario y el prestador se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia, las partes podrán someter sus conflictos a arbitraje o acudir a la jurisdicción ordinaria cumpliendo con las normas sobre jurisdicción y competencia al respecto.",
    },
  ],
};

const privacyPolicyCopy: Content["privacyPolicyCopy"] = {
  title: "Política de privacidad de www.disnet.es",
  lastUpdated: "20 de septiembre de 2023",
  body: [
    { heading: "Datos del propietario de la web" },
    {
      text: "Razón social: Disnet Sistemas de Distribución S.A. NIF: A59843748. Dominio: www.disnet.es. Dirección postal: Pla d'en Fonollar, 15, 08205 Sabadell (Barcelona). Dirección electrónica: annaturon@disnet.es. Teléfono: 657307224.",
    },
    {
      text: "De conformidad con la normativa vigente y aplicable en protección de datos de carácter personal, le informamos que sus datos serán incorporados al sistema de tratamiento titularidad de Disnet Sistemas de Distribución S.A., con NIF A59843748 y domicilio social en Pla d'en Fonollar, 15, 08205 Sabadell (Barcelona).",
    },
    { heading: "Tratamientos realizados" },
    {
      text: "Acciones comerciales del formulario web — Finalidad: captación, registro y tratamiento de datos para atender consultas y/o solicitudes, así como publicidad y prospección comercial. Plazo de conservación: mientras se mantenga el consentimiento prestado, salvo obligación legal. Base legítima: el consentimiento del interesado. Tipología de datos: nombre y apellidos, dirección electrónica.",
    },
    {
      text: "Gestión de usuarios web — Finalidad: captación, registro y tratamiento de datos del usuario. Plazo de conservación: mientras se mantenga el consentimiento prestado, salvo obligación legal. Base legítima: el consentimiento del interesado. Tipología de datos: nombre y apellidos, dirección electrónica.",
    },
    {
      text: "Instalación de cookies — Finalidad: gestión e instalación de las cookies. Plazo de conservación: mientras se mantenga el consentimiento prestado. Base legítima: el consentimiento del interesado. Tipología de datos: dirección electrónica, dirección IP.",
    },
    {
      text: "Gestión del formulario web — Finalidad: atender consultas y/o solicitudes. Plazo de conservación: mientras se mantenga el consentimiento prestado. Base legítima: el consentimiento del interesado. Tipología de datos: nombre y apellidos, dirección electrónica, dirección IP.",
    },
    { heading: "Derechos de los interesados" },
    {
      text: "Disnet Sistemas de Distribución S.A. informa a los usuarios que pueden ejercer los siguientes derechos ante el responsable del tratamiento:",
    },
    {
      list: [
        "Derecho de acceso: obtener confirmación sobre si se están tratando tus datos y, en tal caso, los datos concretos tratados y la información legal del tratamiento (finalidades, base legitimadora, plazos de conservación, cesiones, origen de los datos, etc.).",
        "Derecho de rectificación: modificar los datos que resulten inexactos o incompletos.",
        "Derecho a la limitación del tratamiento: limitar los fines del tratamiento previstos originalmente por el responsable en determinados supuestos.",
        "Derecho de supresión: suprimir los datos de carácter personal del usuario, salvo las excepciones previstas en el propio RGPD.",
        "Derecho a la portabilidad: recibir los datos personales facilitados en un formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable.",
        "Derecho de oposición: que no se lleve a cabo el tratamiento de tus datos, o que cese, cuando se base en interés legítimo, interés público o mercadotecnia directa.",
        "Derecho a no ser objeto de decisiones automatizadas, incluida la elaboración de perfiles.",
        "Derecho a retirar el consentimiento en cualquier momento y de manera gratuita, para cualquier tratamiento basado en él.",
      ],
    },
    { heading: "Cómo ejercer tus derechos" },
    {
      text: "Para ejercer cualquiera de estos derechos, puedes presentar un escrito dirigido a Pla d'en Fonollar, 15, 08205 Sabadell (Barcelona), a la atención de Disnet Sistemas de Distribución S.A., o enviar un correo electrónico a annaturon@disnet.es, identificándote de forma fehaciente e indicando el derecho que deseas ejercer.",
    },
    {
      text: "Por último, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos si consideras que se ha producido un incumplimiento de la normativa aplicable en materia de protección de datos.",
    },
    {
      text: "Disnet Sistemas de Distribución S.A. se compromete a adoptar las medidas técnicas y organizativas necesarias, acordes al nivel de riesgo de los tratamientos realizados, para garantizar su integridad, confidencialidad y disponibilidad.",
    },
  ],
};

const cookieConsent: Content["cookieConsent"] = {
  message: "Esta página web utiliza cookies para asegurar que obtengas la mejor experiencia en nuestro sitio web.",
  moreInfo: "Más info",
  technical: "Técnicas",
  marketing: "Marketing",
  reject: "Rechazar",
  accept: "Aceptar",
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
