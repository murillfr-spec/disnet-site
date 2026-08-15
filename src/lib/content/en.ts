// English translation of the Disnet content — mirrors the structure of es.ts.
import type { Content } from "./types";

const company: Content["company"] = {
  name: "Disnet",
  legalName: "Disnet Sistemas de Distribución S.A.",
  tagline: "3PL Logistics Operator for your supply chain",
  phone: "93 725 82 22",
  phoneHref: "tel:+34937258222",
  email: "info@disnet.es",
  address: "C/ Pla del Fonollar, 15 – 08205 – Poligon Riu Sec – Sabadell",
  since: 1991,
  yearsExperience: 35,
};

const heroCopy: Content["heroCopy"] = {
  eyebrow: "Logistics operator in Barcelona",
  title: company.tagline,
  paragraphs: [
    "**Disnet** is made up of professionals with **more than 35 years of experience in logistics management** for the outsourcing of supply chains. The team manages every process with the knowledge and rigor needed to make the outsourcing of any organization's logistics activities a success.",
    "Disnet's team members stand out for their extensive ability to identify their clients' needs and implement the mechanisms necessary to respond to them.",
    "Aware of the sector's continuous evolution, the Disnet team is engaged in ongoing training, staying at the forefront of knowledge on new strategies and methodologies in logistics operations.",
    "The Disnet team guarantees a permanent logistics structure, ensuring everything is ready exactly when it's needed.",
  ],
};

const heroSlideAlts: Content["heroSlideAlts"] = [
  "Disnet facilities, logistics operator in Barcelona",
  "Disnet warehouse in operation",
  "Disnet storage racking",
  "Solar panels at Disnet's facilities",
];

const companyIntroCopy: Content["companyIntroCopy"] = {
  paragraphs: [
    "**Disnet** is made up of professionals with **more than 35 years of experience in logistics management** for the outsourcing of supply chains. The team manages every process with the knowledge and rigor needed to make the outsourcing of any organization's logistics activities a success.",
    "Disnet's team members stand out for their extensive ability to identify their clients' needs and implement the mechanisms necessary to respond to them.",
    "Aware of the sector's continuous evolution, the Disnet team is engaged in ongoing training. Always seeking the forefront of knowledge in new logistics operations strategies and methodologies.",
    "The Disnet team guarantees a permanent logistics structure, ensuring everything is ready exactly when it's needed.",
  ],
};

const barcelonaCopy: Content["barcelonaCopy"] = {
  title: "Logistics in Barcelona with Disnet",
  paragraphs: [
    "The city of Barcelona is known as **one of Spain's leading logistics hubs**, thanks to a strategic location that makes it a key point for the transport of goods both nationally and internationally.",
    "For companies looking to improve their operations and make the most of market opportunities, having logistics services in Barcelona is a smart decision. Disnet, as the city's leading logistics operator, offers **tailor-made solutions for each company's needs**, guaranteeing efficiency, quality and satisfaction at every stage of the supply chain.",
  ],
  highlight: "Trust Disnet to take your company to the next level in logistics!",
};

const stats: Content["stats"] = [
  { value: 12000, label: "Rack storage locations" },
  { value: 15000, label: "Picking locations" },
  { value: 100000, label: "E-commerce order capacity" },
];

const services: Content["services"] = [
  {
    slug: "recepcion-de-mercancias",
    name: "Goods Receiving",
    headline: "With Disnet, your company's goods are always safe",
    intro: [
      "We manage the receipt of goods in accordance with the **specifications** previously agreed with clients.",
      "We also carry out **logistics quality controls** and inform the client and/or supplier of any incidents detected.",
      "Our working methodologies aim to **optimize movements, guarantee traceability and maximize the efficiency** of operations.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "What is goods receiving in logistics?",
        answer:
          "It's the process of receiving, verifying and quality-checking products arriving at a warehouse before they're put into storage. It includes checking quantities, condition and documentation according to the specifications agreed with the client, and reporting any incident detected.",
      },
      {
        question: "How is traceability guaranteed during goods receiving?",
        answer:
          "Through a Warehouse Management System (WMS) that logs every movement from the moment goods arrive, systematic logistics quality controls, and immediate communication to the client or supplier of any incident detected during unloading.",
      },
      {
        question: "What happens if there's an incident when receiving an order?",
        answer:
          "It's documented and reported immediately to the client and/or supplier, allowing quantity discrepancies, damage or reference errors to be resolved before the goods enter stock, preventing inventory problems further down the line.",
      },
      {
        question: "How long does it take to process the receiving of an order?",
        answer:
          "It depends on the volume and type of goods, but a logistics operator with optimized processes can complete receiving, quality control and warehouse put-away on the same day, minimizing the time between arrival and stock availability.",
      },
    ],
  },
  {
    slug: "manipulacion-de-mercancias",
    name: "Goods Handling",
    headline: "Disnet, guaranteed traceability across all our processes",
    intro: [
      "We carry out any handling operation agreed with the client, guaranteeing **full traceability of the process**.",
      "We handle goods regardless of batch size — from small batches with minimal automation, to **large batches with semi-automated sequences**.",
    ],
    list: [
      "Ironing and boxing or bagging of textile products.",
      "Assembly of components for the automotive sector.",
      "Disassembly and assembly of furniture for the bedding and rest sector.",
      "Combining raw materials with others to create the final product.",
      "Putting together packs and groupage for promotions.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "What does the goods handling service include?",
        answer:
          "Operations such as ironing and boxing of textile products, assembly of components, disassembly and assembly of furniture, combining raw materials, and putting together packs and groupage for promotions, always with full traceability of the process.",
      },
      {
        question: "Can any volume of goods be handled?",
        answer:
          "Yes. An experienced logistics operator manages everything from small batches with minimal automation to large batches with semi-automated sequences, adapting the process to the type of product and each client's specific volume.",
      },
      {
        question: "Which sectors need handling services the most?",
        answer:
          "Textile and fashion (ironing, boxing), automotive (component assembly), furniture (assembly and disassembly), and sectors that require the creation of promotional packs or the combining of raw materials for customized final products.",
      },
      {
        question: "How is traceability guaranteed when handling products?",
        answer:
          "With a Warehouse Management System that logs every handling operation, from the material's arrival through to the output of the transformed product, guaranteeing full control of the process regardless of batch size.",
      },
    ],
  },
  {
    slug: "almacenaje",
    name: "Storage",
    headline: "At Disnet, we have the most advanced technology for storing your goods",
    intro: [
      "We have the capacity to store multiple types of load units (pallets, boxes, coils, etc.) in accordance with the **most demanding handling standards**. All to guarantee their proper preservation.",
      "We have **more than 6,000 conventional pallet rack locations** and **more than 15,000 picking locations** in a 6,500 m² storage facility.",
      "To guarantee the accuracy of our stock, we carry out **permanent inventories** and validate their status.",
      "Our **Warehouse Management System (WMS)** allows us to apply proper product distribution according to expected consumption, achieving better optimization of the warehouse's logistics flow.",
    ],
    sections: [
      {
        heading: "Goods storage, inventory management and distribution",
        paragraphs: [
          "At Disnet, we are **leaders in storage and logistics solutions** in Barcelona. Our modern, secure warehouses are strategically located to give you fast, convenient access to the main transport networks. Whether you need to **store products, manage inventory or carry out efficient distribution**, our highly trained team is ready to help. With cutting-edge technology and advanced management systems, we can guarantee precise, transparent management of your goods.",
          "We also understand the importance of **flexibility and adaptability** in today's business environment. That's why we offer **customized solutions** tailored to your specific needs. Trust our experience and commitment to excellence to optimize your logistics operations.",
          "Get **customized solutions, reliable and efficient services**, and an expert team that will take care of all your storage and distribution needs. Don't waste any more time — take advantage of our experience and strategic location to take your company to the next level.",
        ],
      },
      {
        heading: "Warehouse management in Barcelona",
        paragraphs: [
          "Every business has unique needs. At Disnet, we know it. That's why we offer tailor-made storage solutions that adapt perfectly to your business volume and type of goods. With us, you'll enjoy the security, efficiency and flexibility you need to grow your company.",
          "We work with **fashion and textile logistics, cosmetics and perfume logistics**, and any other sector that requires specialized storage. And if you were simply looking to rent a warehouse in Barcelona, with Disnet you get much more: a complete logistics service, without the complexity of managing the space, staff or technology yourself.",
        ],
      },
    ],
    benefitsTitle: "Key benefits",
    benefits: [
      {
        title: "Security",
        points: [
          "State-of-the-art security systems to protect your goods.",
          "Restricted access and real-time inventory control.",
        ],
      },
      {
        title: "Flexibility",
        points: [
          "We adapt our solutions to your specific needs and business volume.",
          "Flexible, scalable contracts.",
        ],
      },
      {
        title: "Efficiency",
        points: [
          "Optimized processes to streamline your inventory management.",
          "Reduced operating costs.",
        ],
      },
      {
        title: "Strategic location",
        points: [
          "Easy access to Barcelona's main communication routes.",
          "Connection to the main ports and airports.",
        ],
      },
      {
        title: "Technology",
        points: [
          "Advanced technology platform for tracking and controlling your goods.",
          "Integration with your management systems.",
        ],
      },
    ],
    ctaLabel: "Request a personalized quote",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "How many storage locations does Disnet have in Barcelona?",
        answer:
          "We have more than 12,000 conventional pallet rack locations and more than 15,000 picking locations in a facility strategically located in Sabadell, with capacity for multiple types of load units.",
      },
      {
        question: "What types of goods can be stored?",
        answer:
          "Pallets, boxes, coils and practically any load unit, including specialized sectors such as textile and fashion logistics, cosmetics and perfumery, always in line with the most demanding handling and preservation standards.",
      },
      {
        question: "What is a Warehouse Management System (WMS) and why does it matter?",
        answer:
          "It's the software that controls the location, movement and inventory of every product in real time. It allows goods to be distributed according to expected consumption, optimizing the logistics flow and guaranteeing stock accuracy through permanent inventories.",
      },
      {
        question: "Is it better to rent your own warehouse or hire storage with a 3PL operator?",
        answer:
          "Renting a warehouse means managing the space, staff and technology yourself. With a 3PL operator like Disnet, you get a complete logistics service (security, WMS, specialized staff) without that operational complexity or the upfront investment.",
      },
    ],
  },
  {
    slug: "preparacion-de-pedidos",
    name: "Order Preparation",
    headline: "Disnet, specialists in picking processes",
    intro: [
      "At Disnet, we are **experts in carrying out picking operations**, which consist of preparing orders using stored materials before shipping them to the recipient.",
      "Our meticulous planning allows us to select the most appropriate optimization method in each case.",
    ],
    list: [
      "Batch picking: material from all grouped orders is extracted together, and the quantities for each reference are then separated for each individual order.",
      "Pick to box: material is extracted as a group and placed directly into the shipping boxes at the point of extraction, eliminating the need for a later separation process.",
    ],
    extra: [
      "Our contribution to your supply chain translates into greater competitiveness, as we make your processes more agile and efficient, while guaranteeing full control and traceability throughout the order preparation process.",
    ],
    sections: [
      {
        heading: "The strategic importance of optimal order preparation",
        paragraphs: [
          "In a market that demands speed and accuracy, poor order preparation can lead to delays, errors and, ultimately, customer dissatisfaction. At Disnet, we understand that every order matters. That's why our planning is meticulous, allowing us to select the most appropriate optimization method in each case, ensuring your supply chain runs as smoothly and efficiently as possible.",
        ],
      },
      {
        heading: "Your supply chain: more agile and controlled with our order preparation",
        paragraphs: [
          "Disnet's contribution to your supply chain goes beyond simply collecting products. Our expertise in order preparation translates into greater competitiveness for your company. We make your processes more agile and efficient, optimizing both time and resources.",
          "We also guarantee full control and traceability throughout the order preparation process. You'll always know exactly where each product is and what stage of picking it's in, giving you complete peace of mind and transparency.",
          "Trust Disnet for impeccable order preparation that boosts your customers' satisfaction and drives the growth of your business.",
        ],
      },
    ],
    benefitsTitle: "Tangible benefits of trusting Disnet with your order preparation",
    benefits: [
      { title: "Greater competitiveness", description: "More agile and efficient logistics processes that give you an edge in the market." },
      { title: "Fewer errors", description: "We drastically minimize shipping mistakes, resulting in fewer returns and a better brand image." },
      { title: "Faster deliveries", description: "We speed up order preparation so your products reach their destination sooner, meeting your customers' expectations." },
      { title: "Full control and traceability", description: "We give you complete visibility of every order, from picking all the way through to dispatch." },
      { title: "Freed-up resources", description: "By delegating order preparation to experts, you can focus your human and financial resources on growing and innovating your business." },
    ],
    audienceTitle: "Who is this order preparation service for?",
    audience: [
      "E-commerce businesses that need agility and precision to manage a high volume of online orders.",
      "Companies with a constant flow of shipments looking to optimize their internal logistics.",
      "Businesses that want to reduce operating costs and improve efficiency in their warehouse processes.",
      "Brands that aspire to deliver an exceptional customer experience through fast, error-free deliveries.",
    ],
    ctaLabel: "Contact us",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "What's the difference between batch picking and pick to box?",
        answer:
          "Batch picking extracts material from several grouped orders together and then separates the quantities by reference. Pick to box places the material directly into the final shipping box at the point of extraction, eliminating a later separation step.",
      },
      {
        question: "How is the most suitable picking method chosen?",
        answer:
          "We analyze each client's order volume, product type and shipping frequency to select the most appropriate optimization method, always prioritizing speed and accuracy in order preparation.",
      },
      {
        question: "What kind of businesses need a professional picking service?",
        answer:
          "E-commerce businesses with a high volume of online orders, companies with a constant flow of shipments, businesses looking to reduce warehouse operating costs, and brands that want to offer fast, error-free deliveries to their end customers.",
      },
      {
        question: "How does order preparation affect returns?",
        answer:
          "Accurate order preparation drastically reduces shipping errors, one of the main causes of returns. Full control and traceability during picking minimizes mistakes before the order leaves the warehouse.",
      },
    ],
  },
  {
    slug: "empaqueado-packing",
    name: "Packaging – Packing",
    headline: "At Disnet, we guarantee the best packaging for your goods",
    intro: [
      "In our packaging operations, known as \"packing\", we prepare all the transport units in which orders will be shipped. During this process, we apply the **most advanced criteria in sustainability, safety and traceability**.",
      "Our Warehouse Management System (WMS) provides us with **recommendations on the most suitable packaging** for each shipment, ensuring efficient and appropriate preparation.",
      "Once packaging is complete, we focus on shipping the goods according to the delivery date specified by the client, generating all the necessary documentation in line with applicable contractual, legal and regulatory requirements.",
      "This guarantees that every shipment complies with current standards and regulations.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "What's the difference between packing and standard packaging?",
        answer:
          "Packing is the specific preparation of the transport unit for shipping, applying sustainability, safety and traceability criteria. A Warehouse Management System recommends the most suitable packaging based on the type of product and destination.",
      },
      {
        question: "How is the packaging material decided for each shipment?",
        answer:
          "The Warehouse Management System (WMS) analyzes the type of product, its fragility and the shipment's destination to automatically recommend the most suitable packaging, balancing product protection, cost and sustainability.",
      },
      {
        question: "What documentation is generated during the packing process?",
        answer:
          "All the documentation required by the contractual, legal and regulatory requirements applicable to each shipment, ensuring it complies with current standards and regulations before leaving the warehouse for its destination.",
      },
      {
        question: "Does packing include custom branded packaging?",
        answer:
          "Yes. The service adapts to the specific needs of each client and type of product, always prioritizing the most advanced sustainability, safety and traceability criteria in every transport unit prepared.",
      },
    ],
  },
  {
    slug: "e-commerce",
    name: "e-Commerce",
    headline: "At Disnet, we guarantee the best delivery times",
    subheadline: "Fulfillment for Shopify, WooCommerce and the leading platforms",
    intro: [
      "Who manages the shipping for your online store? At Disnet, we handle the entire process, from the moment an order comes in on your website until it reaches the customer's door. Following current trends in commerce, we specialize in outsourcing supply chains for the e-Commerce sector. With **more than 25 years of experience**, we have managed and prepared orders, with the capacity to handle **more than 2,000,000 shipments a year**.",
    ],
    list: [
      "Optimize delivery times.",
      "Provide traceability across all logistics processes.",
      "Offer flexibility in delivery schedules.",
    ],
    extra: [
      "At Disnet, we understand that for an e-Commerce business to thrive, logistics must deliver an exceptional shopping experience. Only then can customer satisfaction truly increase. It's therefore essential that the online environment works in harmony with the offline world. To achieve this, we maintain seamless connectivity with the most widely used information management systems, such as **Shopify, WooCommerce, Magento, PrestaShop, Opencart**, and others.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "Which e-commerce platforms does Disnet integrate with?",
        answer:
          "Disnet offers fulfillment with seamless connectivity for Shopify, WooCommerce, Magento, PrestaShop, Opencart and other management systems, allowing offline logistics to work in harmony with the online store without technical friction.",
      },
      {
        question: "How many e-commerce shipments does Disnet handle per year?",
        answer:
          "With more than 25 years of experience in the sector, Disnet has the capacity to handle more than 2,000,000 shipments a year, optimizing delivery times, traceability and flexibility in dispatch schedules.",
      },
      {
        question: "What is fulfillment and how does it differ from traditional logistics?",
        answer:
          "Fulfillment is the end-to-end management of an e-commerce order: stock receiving, storage, picking, packing and shipping, all integrated with the online platform. Unlike traditional logistics, it focuses on the digital shopping experience from start to finish.",
      },
      {
        question: "How does fulfillment improve delivery times for my online store?",
        answer:
          "By outsourcing to a specialized operator, orders are prepared and shipped with optimized processes and real-time traceability, reducing cancellations and improving customer trust compared to unreliable delivery times.",
      },
    ],
  },
  {
    slug: "transporte-de-mercancias",
    name: "Goods Transport",
    headline: "At Disnet, we offer the best prices for transporting your goods",
    subheadline: "Fast delivery, always on time",
    intro: [
      "In line with our procedures, we always carry out **logistics quality control** on the shipment before loading the goods onto the transport.",
      "We use the **most suitable transport agencies** for each need, guaranteeing compliance with the service levels agreed with the client.",
      "We approve, qualify and evaluate the transport agencies we use, regardless of the goods' destination.",
      "Disnet can also take responsibility for providing all kinds of services, such as the search and selection of carriers, negotiation of terms, preparation of contracts, and management and oversight of execution.",
      "Likewise, we are equipped to manage transport services efficiently, allowing us to offer a comprehensive order shipping service. Whether you need local or national deliveries, we're ready to handle every aspect of your logistics effectively, ensuring your products reach their destination safely and on time.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "How does Disnet select its transport agencies?",
        answer:
          "We approve, qualify and evaluate transport agencies according to each need and destination, always using the most suitable options to guarantee compliance with the service levels agreed with the client.",
      },
      {
        question: "What quality controls are carried out before shipping goods?",
        answer:
          "A logistics quality control of the shipment is always carried out before loading the goods onto the transport, verifying condition, quantities and documentation to ensure it reaches its destination safely and on time.",
      },
      {
        question: "Does Disnet manage domestic and international transport?",
        answer:
          "Yes. Disnet searches for and selects carriers, negotiates terms, prepares contracts and manages execution for local and domestic deliveries as well as international shipments, adapting to each client's needs.",
      },
      {
        question: "What's the advantage of outsourcing transport to a 3PL operator?",
        answer:
          "You gain access to better rates through the consolidation of volumes from multiple clients, eliminate the need to manage carriers directly, and get a comprehensive shipping service with quality control on every dispatch.",
      },
    ],
  },
  {
    slug: "logistica-inversa",
    name: "Reverse Logistics",
    headline: "Returns and incident management with total reliability",
    intro: [
      "At Disnet, we don't just focus on efficient delivery management — we also handle reverse logistics, which covers **returns management** and the resolution of any incidents that may arise during the process.",
      "We maintain connectivity with the most widely used information management systems, such as Shopify, WooCommerce, Magento, PrestaShop, Opencart and others. This allows us to stay in sync with e-Commerce platforms and guarantee seamless integration at every stage of the supply chain.",
      "We recognize that offering ease and speed in claims and returns processes is essential for customer satisfaction. That's why we've developed several support options designed to simplify and speed up these procedures. Our goal is to let customers make returns reliably and without costs that might discourage them or negatively affect their shopping experience or our clients' business.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "What is reverse logistics and what does it include?",
        answer:
          "It's the management of the flow of products from the end customer back to the warehouse: returns, exchanges, undelivered orders and defective products, resolving any incident that arises throughout the return process.",
      },
      {
        question: "Which platforms does returns management integrate with?",
        answer:
          "Disnet maintains connectivity with Shopify, WooCommerce, Magento, PrestaShop, Opencart and other e-commerce management systems, guaranteeing seamless integration at every stage of the supply chain, including returns.",
      },
      {
        question: "Why is it important to outsource reverse logistics?",
        answer:
          "It enables fast, reliable claims and returns processes without costs that discourage the customer. This improves satisfaction and loyalty, especially in sectors such as fashion or electronics, where returns can account for between 20% and 40% of sales.",
      },
      {
        question: "How does reverse logistics affect the customer experience of an e-commerce business?",
        answer:
          "Agile, friction-free returns management increases buyer confidence when deciding to make an online purchase, since they know an exchange or return won't be a complicated or costly process.",
      },
    ],
  },
];

const whyChooseUs: Content["whyChooseUs"] = {
  title: "Why choose Disnet?",
  intro: [
    "Disnet is a 3PL that has offered a **flexible service since 1991**, adapted to each client's needs. Disnet's purpose is to take on all of our clients' logistics requirements, adapting our working systems, organization and facilities to meet their expectations with **maximum speed and reliability**.",
    "Our scale and proximity put us within reach of any organization, from **SMEs and small local businesses** to larger industrial organizations.",
  ],
  points: [
    {
      title: "Cost savings",
      description: "Cost reduction is one of the main reasons to hire our services as a 3PL.",
    },
    {
      title: "Strategic location",
      description: "Logistics hub in Sabadell (Vallès Occidental), with fast access to Barcelona's main communication routes.",
    },
    {
      title: "Online",
      description: "All the information about your movements in real time.",
    },
    {
      title: "Multi-Warehouse WMS Application",
      description: "A management system that lets us handle the most diverse products while maintaining strict traceability of them. All the information about your movements online, in real time.",
    },
  ],
};

const quotes: Content["quotes"] = [
  {
    text: "The longer you go without taking action, the more money you're leaving on the table.",
    author: "Carrie Wilkerson",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
];

const empresaCopy: Content["empresaCopy"] = {
  title: "Disnet – logistics as a working philosophy",
  intro: [
    "Looking for a reliable and efficient logistics company in Barcelona? At Disnet, we're proud to offer **first-class logistics services** from our logistics hub in **Sabadell, in the heart of the Vallès Occidental**.",
    "Whether you need transport, storage or distribution of goods, our highly trained team and **customized solutions** are designed to meet your specific needs. With a strong network of partners and extensive industry experience, we're committed to providing you with **comprehensive logistics solutions** that optimize your operations and help you achieve your business goals.",
    "Trust our local expertise and our dedication to providing a reliable and efficient service. Contact us today and discover how we can drive your business's success in Barcelona!",
  ],
  mission: "To bring competitiveness to logistics processes.",
  vision: "To be the logistics operator of our clients' supply chains.",
  values: "Professionalism, integrity, trust, effectiveness and efficiency…",
};

const jobsCopy: Content["jobsCopy"] = {
  title: "Work with us",
  description: "Want to be part of the Disnet team? Send us your details and your resume and we'll get in touch with you.",
  legal:
    "Your data will be processed by Disnet Sistemas de Distribución S.A. and will be kept for 5 years, in accordance with Organic Law 3/2018 of December 5 on the Protection of Personal Data, for the purpose of managing personnel selection processes. You may exercise your rights of access, rectification and cancellation under the terms established by law.",
};

const contactCopy: Content["contactCopy"] = {
  title: "Contact Disnet",
  subtitle: "Our flexibility with our clients allows us to adapt to your needs",
};

const clientAreaCopy: Content["clientAreaCopy"] = {
  title: "Disnet Client Area",
  description: "For your maximum convenience and control, Disnet offers you its \"Client Area\", where you'll have access to all your important information online and in real time.",
  portals: [
    { name: "MyDLS", description: "Disnet Logistic System", href: "https://websrv2.disnet.es:3000/" },
    { name: "B2B", description: "Disnet B2B", href: "https://b2b.disnet.es/SignUP.php" },
  ],
};

const blogPosts: Content["blogPosts"] = [
  {
    slug: "operador-logistico-barcelona",
    date: "July 10, 2026",
    title: "Logistics operator in Barcelona: key aspects to consider before hiring",
    excerpt: "Managing a company's supply chain in-house can quickly become a real operational bottleneck. As a business scales, critical tasks such as…",
    body: [
      { text: "Managing a company's supply chain in-house can quickly become a **real operational bottleneck**. As a business scales, critical tasks such as storage, inventory control and goods dispatch consume human resources and valuable time that should instead be invested in sales and brand strategy. In this scenario, delegating processes to a logistics operator in Barcelona isn't just a cost-saving alternative — it's an **essential strategic decision**." },
      { text: "Barcelona has established itself as one of southern Europe's leading logistics hubs and a strategic connection point both nationally and internationally. However, choosing the right physical infrastructure partner requires evaluating certain key criteria. Drawing on Disnet's experience as specialists with more than 35 years in the sector (since 1991), we break down the essential factors you should analyze before signing with your next 3PL provider." },
      { heading: "Strategic location and connectivity to distribution routes" },
      { text: "The success of physical distribution lies in immediacy. An optimal logistics operator should have warehouses located to provide fast access to the main communication arteries, airports and seaports. Having warehouses in Barcelona's industrial belt reduces transit times and last-mile costs." },
      { heading: "Advanced technology and real-time stock traceability" },
      { text: "You can't afford to lose visibility of your products. Before hiring, make sure the operator implements an advanced multi-warehouse WMS (Warehouse Management System) application. This will give you access to all of your movement information online and in real time, maintaining strict traceability of the most diverse products." },
      { heading: "Operational flexibility and scalability" },
      { text: "The market fluctuates, and so does your business. Your logistics partner should offer a flexible structure capable of adapting to seasonal demand peaks (such as Black Friday or Christmas campaigns) without compromising quality. Evaluate their scale: at Disnet we back this up with 12,000 rack locations and 15,000 picking locations, ensuring that space will never be a limit to your growth." },
      { heading: "Proven experience and rigor in outsourcing" },
      { text: "Physical logistics requires knowledge, cutting-edge methodologies and continuous training. A team with decades of experience in supply chain outsourcing will know how to proactively identify your organization's exact needs, guaranteeing a perfectly tuned operation and minimizing the margin for error in preparation." },
      { heading: "Turning fixed costs into variable costs" },
      { text: "A critical financial benefit of hiring an expert 3PL is direct cost savings. By outsourcing, you eliminate the fixed expenses associated with renting warehouses, maintenance, hiring your own staff and warehouse machinery, paying exclusively for the actual space and services you use, month by month." },
      { heading: "Comprehensive solutions: beyond standard logistics operations" },
      { text: "For the outsourcing of your logistics activities to be a complete success, your partner shouldn't limit itself to storing boxes — it should take full responsibility for the physical distribution of your products, so that you can step away from the process entirely." },
      { text: "At Disnet, our priority is customer satisfaction through tailor-made solutions that cover every stage of the chain: receiving and handling goods with thorough inbound control; advanced storage in facilities equipped to house the most diverse items; order preparation (picking) with the installed capacity to manage massive outbound flows; customized packaging (packing) to ensure product protection during transit; specialized e-commerce logistics, with systems capable of processing up to 100,000 orders; and goods transport together with reverse logistics for the efficient management of returns." },
      { heading: "Trust experience to transform your logistics" },
      { text: "Hiring a physical operator in Barcelona is a decisive step in taking your company's competitiveness to the next level. Choosing reliability, cutting-edge infrastructure and human proximity makes the difference between a service plagued by constant errors and a flawless supply chain." },
      { text: "With more than 35 years of experience in the sector, at Disnet we offer you a permanent structure and a team in continuous training, ready to meet your most demanding operational expectations, whether you're a small local business or a large industrial organization." },
    ],
  },
  {
    slug: "operador-logistico-3pl-barcelona",
    date: "June 11, 2026",
    title: "3PL logistics operator: the strategic ally to delegate your logistics and scale your business",
    excerpt: "Managing a company's supply chain, storage and shipping can quickly become a real headache. When volume grows, the time you should be spending…",
    body: [
      { text: "Managing a company's supply chain, storage and shipping can quickly become a **real headache**. When volume grows, the time you should be spending selling and growing your brand gets swallowed up by boxes, inventories and delivery notes." },
      { text: "To keep operational management from holding back your growth, having an expert 3PL logistics operator is the definitive solution. By outsourcing these processes to a specialist, you not only free up human resources and valuable time, but also put the efficiency of your deliveries in professional hands. At Disnet, we take care of absolutely the entire process so you can refocus on what really matters: your business." },
      { heading: "What exactly is a 3PL logistics operator, and how does it transform your operations?" },
      { text: "The 3PL (Third-Party Logistics) concept refers to the global services a company outsources to a specialized external provider that takes on responsibility for logistics management." },
      { text: "Unlike other models, a full-service 3PL logistics operator like Disnet doesn't act as a simple intermediary or consultant; we put advanced physical infrastructure and our own resources at your disposal, directly handling the secure receipt and storage of your goods, intelligent stock management and inventory control, advanced order preparation (picking and packing) tailored to e-commerce and B2B, and distribution, national and international transport, and thorough control of reverse logistics (returns)." },
      { heading: "What's the difference between a 3PL and a 4PL operator?" },
      { text: "It's very common to confuse these terms, but their scope and operational tools are completely different. A 3PL logistics operator has its own physical resources, such as industrial warehouses, equipped storage facilities and established transport agreements. It gets hands-on with the direct operation: it stores your product, prepares the package meticulously and delivers it to its destination on time." },
      { text: "A 4PL operator, on the other hand, mainly works at the level of consulting, administration and digital optimization of the supply chain. They typically don't have their own warehouses or transport, but instead subcontract 3PL operators to carry out the physical execution of the task." },
      { text: "By working with Disnet, you get the direct advantage of dealing with whoever physically manages your inventory, which speeds up communication and eliminates intermediate layers of cost." },
      { heading: "Strategic benefits: why does your company need a 3PL logistics operator?" },
      { text: "Trusting the experience of an established 3PL logistics operator brings a series of competitive advantages that directly impact your bottom line: massive savings on fixed costs and investment, by turning rent, deposits, machinery and your own transport expenses into variable costs; advanced technology and full traceability, thanks to warehouse management systems (WMS) that let you monitor stock and the status of each shipment in real time; scalability and flexibility to handle demand peaks, absorbing campaigns like Black Friday or Christmas without the structure collapsing; and more competitive shipping rates and faster deliveries, thanks to pooling volumes from multiple clients, which optimizes routes and unlocks better transport agreements." },
      { heading: "Frequently asked questions" },
      { heading: "What is a 3PL system?" },
      { text: "It's the strategic outsourcing of one or more operational functions of the supply chain (such as storage, inventory control, picking and transport) to a specialized external provider like Disnet." },
      { heading: "What advantages does the 3PL system offer my company?" },
      { text: "It allows you to reduce operating costs, make your infrastructure more flexible so you can scale quickly, and improve customer satisfaction through accurate deliveries, completely freeing your team from the logistics workload." },
      { heading: "Is the 3PL system only for large companies?" },
      { text: "No. The 3PL model is ideal for businesses of all sizes, from startups and growing e-commerce operations to large corporations that need to delegate complex operations without heavy investment in physical assets." },
      { heading: "Will I lose control of my logistics by outsourcing it?" },
      { text: "Absolutely not. Quite the opposite: thanks to our integrated technology tools, you maintain complete visibility and real-time reporting on your stock, preparation and distribution stages at all times." },
      { heading: "Invest in peace of mind and growth for your business" },
      { text: "Delegating your operations to a specialized 3PL logistics operator doesn't mean losing control — it means gaining efficiency, agility and responsiveness. The key to business success lies in focusing your efforts on the areas that generate real value, while experts make sure every package reaches the end customer perfectly and on time." },
      { text: "At Disnet, we combine experience, first-class facilities and tailor-made solutions designed specifically to drive your business forward. Leave your logistics worries behind and get ready to grow steadily." },
    ],
  },
  {
    slug: "empresas-de-logistica-tecnologia-inteligencia-artificial",
    date: "May 4, 2026",
    title: "How are technology and artificial intelligence transforming logistics companies?",
    excerpt: "Logistics companies have evolved far beyond simply transporting goods. Today, the key lies in integrating technology that allows them to work with greater precision, speed and…",
    body: [
      { text: "Logistics companies have evolved far beyond simply transporting goods. Today, the key lies in integrating technology that allows them to work with **greater precision, speed and control**. The incorporation of advanced tools such as **artificial intelligence and automation** is completely changing the way orders, shipments and storage are managed." },
      { text: "It's no longer just about moving products, but about doing so more intelligently, efficiently and without errors. That's why today we're telling you how technology and artificial intelligence are revolutionizing logistics companies, and why choosing a partner that champions innovation can make all the difference for your business." },
      { heading: "Artificial intelligence in logistics: faster, more accurate decisions" },
      { text: "Artificial intelligence allows logistics companies to anticipate situations and improve real-time decision-making. Among its most relevant applications are demand forecasting, which anticipates order peaks and adjusts stock to avoid shortages or excess inventory; route optimization, analyzing variables to choose the most efficient routes and reduce time and costs; process automation, from order management to inventory control, minimizing errors and improving productivity; and incident detection, identifying potential problems before they affect operations or the end customer." },
      { heading: "Logistics automation: more efficiency, fewer errors" },
      { text: "Automation is one of the great advances in today's logistics companies. Thanks to automation, key tasks can be optimized without relying on manual processes, making it possible to prepare orders faster, reduce errors in picking and packing, maintain constant stock control and improve delivery times. The result is a much more agile and reliable operation." },
      { heading: "Real-time traceability and control" },
      { text: "One of the great benefits of technology in logistics is the ability to have total visibility over every order: real-time shipment tracking, up-to-date order status information, greater control over operations and the ability to react to any incident." },
      { heading: "Why choose a logistics company that invests in technology?" },
      { text: "Working with a logistics company that integrates artificial intelligence and automation isn't just an internal improvement — it's a direct advantage for your business: faster deliveries thanks to optimized processes and better planning, fewer errors thanks to automation that reduces human mistakes, cost savings from optimized resources and time, scalability to grow without logistics complications, and a better customer experience thanks to greater transparency, speed and trust in every shipment." },
      { heading: "Disnet: technology applied to real logistics solutions" },
      { text: "At Disnet, we work with a clear approach: applying technology to improve every phase of logistics. We integrate solutions that provide total control over operations, process optimization, reduced times and costs, and greater accuracy in every shipment." },
      { text: "We combine experience and technology to offer logistics tailored to each client's real needs." },
    ],
  },
  {
    slug: "operador-logistico-vs-logistica-propia",
    date: "April 27, 2026",
    title: "Logistics operator vs. in-house logistics: which option really drives your company's growth?",
    excerpt: "Properly managing a company's logistics goes far beyond storing products or shipping them on time. Today, supply chain efficiency can make the difference between…",
    body: [
      { text: "Properly managing a company's logistics goes far beyond storing products or shipping them on time. Today, **supply chain efficiency** can make the difference between a competitive company and one that loses profitability, time and opportunities." },
      { text: "Faced with this scenario, many organizations face a key decision: keep logistics in-house or opt for a specialized logistics operator. Although managing certain operations internally may seem like a way to keep control, more and more companies are discovering that working with a logistics operator like Disnet offers a far stronger strategic, economic and operational advantage." },
      { heading: "What does having in-house logistics involve?" },
      { text: "In-house logistics means the company directly takes on all the processes related to its supply chain: receiving goods, storage, stock control, order preparation, packaging, transport, returns management, traceability technology and specialized staff." },
      { text: "At first glance, this may seem like a way to maintain absolute control, but in practice it involves constant investment in infrastructure, technology, training, human resources and adaptability. Among the main challenges of in-house logistics are high fixed costs in facilities, staff and machinery; greater operational complexity; difficulty scaling during periods of high demand; the risk of errors in preparation and distribution; lower technological capacity; and the need for constant updating." },
      { heading: "What does a 3PL logistics operator offer?" },
      { text: "A logistics operator (Third Party Logistics) outsources and optimizes all logistics processes so the company can focus on its core business while experts manage the supply chain." },
      { text: "In Disnet's case, we're talking about a structure established since 1991, with more than 35 years of experience and a comprehensive ability to adapt to any logistics need. With Disnet, you get operational flexibility, cost savings, real-time traceability, a strategic location in Barcelona, and advanced technology with multi-warehouse WMS." },
      { heading: "Key services an efficient logistics operator should offer" },
      { text: "For outsourcing to be truly profitable, the operator must cover all the critical areas: receiving goods, with inbound control, inspection and efficient product organization; handling of goods, with processes adapted to each type of product; storage, with optimized spaces and permanent traceability; order preparation, with efficient picking to reduce errors and speed up turnaround; packaging (packing), taking care of the protection and presentation of shipments; e-commerce, with logistics integration for online stores and omnichannel management; goods transport, with agile distribution and strategic access to the main routes; and reverse logistics, for the efficient management of returns." },
      { heading: "In-house logistics vs. logistics operator: a real comparison" },
      { text: "In terms of cost, in-house logistics means a high investment and permanent fixed costs, while a logistics operator reduces costs through an already optimized structure. In terms of flexibility, in-house logistics is limited by internal resources, compared to a logistics operator's ability to adapt to demand. In terms of technology, in-house logistics requires investment in your own software, WMS and traceability systems, while a logistics operator gives immediate access to advanced systems such as multi-warehouse WMS and real-time online control. In terms of strategic location, in-house logistics depends on the company's own resources, while a logistics operator already has infrastructure in strategic locations such as Barcelona. And in terms of scalability, in-house logistics means slower, more costly growth, compared to the flexible growth without major investment that a logistics operator offers." },
      { heading: "Why could Disnet be your best option?" },
      { text: "Disnet doesn't just offer logistics services; it offers a comprehensive structure designed to become a strategic extension of your business. Its competitive advantages include more than 35 years of experience, a flexible service tailored to each client, a strategic location in Barcelona, cost savings, real-time online information, a multi-warehouse WMS system, strict traceability, ongoing training in new methodologies, and the capacity to serve small, medium and large companies." },
      { heading: "The real question isn't whether to outsource, but who to outsource to" },
      { text: "When a company decides to grow, optimize resources and improve its competitiveness, logistics stops being just an operation and becomes a strategy. Choosing a logistics operator like Disnet means turning costs into efficiency, processes into opportunities, and logistics into a competitive advantage." },
      { text: "If you're looking to cut costs, improve turnaround times, optimize your supply chain and have a logistics structure ready to grow alongside you, now is the time to take the next step." },
    ],
  },
  {
    slug: "preparacion-de-pedidos-cosas-que-debes-tener-en-cuenta-antes-de-contratar-este-servicio",
    date: "April 20, 2026",
    title: "Order preparation: things to consider before hiring this service",
    excerpt: "Order preparation is one of the most critical processes in the logistics of any company that manages shipments. Efficient picking management not only impacts delivery speed, but also…",
    body: [
      { text: "Order preparation is one of the **most critical processes** in the logistics of any company that manages shipments. Efficient picking management not only impacts delivery speed, but also customer satisfaction, error reduction and business profitability." },
      { text: "Before hiring a company specialized in order preparation, it's essential to analyze a series of key factors that will ensure the service truly adds value to your supply chain." },
      { heading: "Picking methodology and optimization capacity" },
      { text: "Not all companies handle order preparation the same way. It's important to check what picking methods they use and whether they can adapt them to the specific needs of your operation. Techniques such as batch picking allow orders to be grouped to optimize time, while systems like pick to box eliminate intermediate steps by preparing products directly into the final shipping box." },
      { text: "A specialized company should analyze your order volume, product type and shipping frequency to select the most efficient method in each case." },
      { heading: "Planning and operational control" },
      { text: "Planning is key to any order preparation process. A professional provider should work with meticulous organization that guarantees agility without compromising accuracy. Before hiring, make sure the company has clear control, review and supervision protocols at every stage of picking." },
      { text: "This is essential to minimize errors, avoid incidents and ensure every order is prepared correctly." },
      { heading: "Technology, traceability and stock control" },
      { text: "One of the most important aspects to evaluate is the level of technology applied to the process. A company specialized in order preparation should offer full control and traceability, allowing you to know at all times where each product is and what stage of the process it's in." },
      { text: "Real-time visibility of stock and orders not only provides peace of mind, but also improves planning and strategic decision-making." },
      { heading: "Error reduction and quality assurance" },
      { text: "Poor order preparation can lead to returns, complaints and a direct loss of customer trust. That's why it's essential that the logistics provider has demonstrable experience in reducing errors and optimizing processes." },
      { text: "A professional service should guarantee accuracy in product selection, careful handling and a final check before dispatch." },
      { heading: "Adapting to your type of business and shipping volume" },
      { text: "Managing a high-volume daily e-commerce operation is not the same as a company with periodic shipments. Nor is it the same to work with small products as with bulkier or more delicate items. Before hiring an order preparation service, it's key to analyze whether the company is prepared to adapt to your business model, handle demand peaks and grow with you without logistics becoming a bottleneck." },
      { heading: "Frequently asked questions" },
      { heading: "When is it worth outsourcing order preparation?" },
      { text: "When in-house management starts generating errors, delays or consuming too many resources that could be devoted to business growth." },
      { heading: "Does outsourcing improve competitiveness?" },
      { text: "Yes. A professional picking process makes deliveries faster and more accurate, which improves the customer experience and brand reputation." },
      { heading: "Do you lose control by delegating order preparation?" },
      { text: "No. A specialized provider offers constant traceability and visibility, allowing you to maintain full control over inventory and orders." },
      { heading: "Conclusion" },
      { text: "Order preparation is much more than picking products from a warehouse. It's a strategic process that directly influences operational efficiency, customer satisfaction and your company's competitiveness." },
      { text: "Choosing a company specialized in picking, like Disnet, that offers planning, technology, optimized methods and comprehensive control can make a real difference in your growth. Investing in an expert order preparation team means investing in agility, accuracy and trust for your business." },
    ],
  },
  {
    slug: "aspectos-clave-a-valorar-antes-de-contratar-un-servicio-de-fulfillment",
    date: "April 13, 2026",
    title: "Key aspects to consider before hiring a fulfillment service",
    excerpt: "Delegating logistics is one of the most important steps for any online business looking to optimize its operations and scale efficiently. A professional fulfillment service does not…",
    body: [
      { text: "Delegating logistics is one of the most important steps for any online business looking to optimize its operations and scale efficiently. A professional fulfillment service doesn't just store and ship products — it becomes a **strategic ally** that directly impacts the customer experience and e-commerce profitability." },
      { text: "For this reason, before hiring a fulfillment service, it's essential to analyze certain key factors." },
      { heading: "Warehouse location and logistics connectivity" },
      { text: "One of the first points to evaluate is the location of the logistics center. Having a fulfillment warehouse in Barcelona offers a strategic advantage thanks to its excellent transport network, international port, and air and land connections to the rest of Europe." },
      { text: "This proximity to the main logistics nodes shortens delivery times, reduces shipping costs and offers a more competitive service. At Disnet, our logistics center's location is designed to guarantee speed and efficiency in every shipment, both nationally and internationally." },
      { heading: "Operational capacity and growth potential" },
      { text: "A good fulfillment service should be able to adapt to the pace of each business. Before hiring, it's important to check that the provider has flexible storage capacity and enough resources to handle volume increases." },
      { text: "Scalability is key to managing promotional campaigns, product launches or high-demand seasons without logistics becoming a problem." },
      { heading: "Stock control and technology systems" },
      { text: "Proper inventory management allows you to maintain real-time stock control, avoid errors and improve sales planning." },
      { text: "Before outsourcing your logistics, it's worth making sure the provider uses advanced systems compatible with the main e-commerce platforms. In Disnet's case, the technology applied to fulfillment enables precise, transparent management that's fully integrated with online sales channels." },
      { heading: "Order preparation and packaging quality" },
      { text: "The order preparation stage is decisive for end-customer satisfaction. Efficient picking and packing reduces incidents, returns and shipping errors." },
      { text: "A professional service takes care of every order, from product selection to packaging, ensuring it arrives in perfect condition." },
      { heading: "Adapting to your business model and product type" },
      { text: "Not all fulfillment services work for every company. Before hiring, it's key to analyze whether the provider is truly prepared to adapt to your business model and the type of product you sell." },
      { text: "Managing orders for small, lightweight products is not the same as bulky, fragile or specialized goods. A fulfillment provider should be able to understand your operations, your sales flows and your logistics particularities." },
      { heading: "Frequently asked questions" },
      { heading: "When is the best time to outsource fulfillment?" },
      { text: "The ideal moment usually arrives when logistics management starts consuming too much time and internal resources, affecting business growth." },
      { heading: "Does fulfillment reduce the operational workload for e-commerce?" },
      { text: "Yes, outsourcing fulfillment eliminates tasks such as warehouse management, order preparation and shipping coordination, freeing up time for strategic areas." },
      { heading: "How much control does the company retain over its logistics?" },
      { text: "Even though logistics is outsourced, the client retains visibility and control over stock, orders and shipments through management systems and reports." },
      { heading: "Conclusion" },
      { text: "Fulfillment has become a key piece in the strategy of any digital business looking to grow in an orderly and efficient way." },
      { text: "Choosing a fulfillment service in Barcelona like Disnet's allows companies to professionalize their logistics, improve the customer experience and gain a competitive edge in an increasingly demanding market. Choosing the right partner today can make all the difference in your business's growth." },
    ],
  },
  {
    slug: "errores-que-perjudican-la-logistica-en-tu-e-commerce",
    date: "April 7, 2026",
    title: "Mistakes that hurt your e-commerce logistics",
    excerpt: "Logistics is one of the fundamental pillars of success for any e-commerce business. Poor management not only affects delivery times, but also directly impacts customer satisfaction…",
    body: [
      { text: "Logistics is one of the **fundamental pillars** of success for any e-commerce business. Poor management not only affects delivery times, but also directly impacts customer satisfaction, reviews and, consequently, your sales." },
      { text: "At Disnet, specialists in e-commerce logistics solutions, we know that optimizing every process makes the difference between a business that grows and one that loses opportunities." },
      { heading: "Not optimizing delivery times" },
      { text: "One of the most common mistakes in any e-commerce business is not having a clear strategy to reduce delivery times. Today, users expect fast, reliable shipping. When this isn't met, cancellations increase, customer trust decreases and negative reviews pile up." },
      { text: "At Disnet, we work with optimized processes that allow us to manage millions of shipments a year, guaranteeing speed and efficiency in every order." },
      { heading: "Lack of shipment traceability" },
      { text: "Not offering clear information about order status is another major logistics failure in e-commerce. Customers want to know where their order is, when it will arrive, and whether there have been any issues. A lack of traceability creates uncertainty and reduces trust in your brand." },
      { text: "Disnet is committed to full traceability across all logistics processes, offering control and visibility for both the company and the end customer." },
      { heading: "Not adapting to customer needs" },
      { text: "Another critical mistake is not offering flexibility in deliveries. Every customer has different needs, and a rigid system can negatively affect the shopping experience: limited delivery windows, few shipping options or difficulties managing changes." },
      { text: "At Disnet, we understand that logistics should adapt to the customer, not the other way around, offering flexible solutions that improve the overall experience." },
      { heading: "Disconnect between online systems and logistics" },
      { text: "An efficient e-commerce business needs its online platform to be perfectly integrated with logistics management. Common mistakes include systems that don't sync, stock errors and delays in order preparation." },
      { text: "At Disnet, we work with seamless integrations with platforms like Shopify, WooCommerce, Magento, PrestaShop and Opencart, guaranteeing connected, error-free management." },
      { heading: "Not outsourcing logistics to professionals" },
      { text: "Trying to manage all logistics in-house may seem cost-effective at first, but as order volume grows, it becomes a problem: operational overload, shipping errors and rising hidden costs." },
      { text: "Outsourcing allows the business to scale without compromising service quality. With more than 25 years of experience, Disnet offers specialized solutions for the comprehensive management of the e-commerce supply chain." },
      { heading: "Conclusion" },
      { text: "Avoiding these mistakes is key for your e-commerce business to grow in a sustainable, competitive way. Logistics is no longer just an operational process — it's an essential part of the customer experience." },
      { text: "Having the right logistics partner will let you reduce delivery times, improve traceability, offer greater flexibility and optimize all your processes. At Disnet, we help you optimize your e-commerce logistics so you can focus on growing your business." },
    ],
  },
];

const navLinks: Content["navLinks"] = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Company" },
  { href: "/servicios", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/empresa#trabaja-con-nosotros", label: "Work with us" },
  { href: "/area-clientes", label: "Client Area" },
];

const ui: Content["ui"] = {
  headerContact: "Contact",
  headerOpenMenu: "Open menu",
  heroCtaContact: "Contact us",
  heroCtaVisit: "Visit our facilities!",
  heroCtaServices: "View services",
  readMore: "Read more",
  requestQuote: "Request a quote",
  contactUs: "Contact us",
  backToServices: "← Back to services",
  backToBlog: "← Back to blog",
  otherServices: "Other services",
  moreArticles: "More articles",
  readArticle: "Read article",
  servicesOffered: "Services we offer",
  servicesOfferedIntro:
    "At Disnet, in addition to our standard services, we handle any logistics need our clients may have, so that — if they wish — they don't have to worry about any aspect related to the physical distribution of their products.",
  learnMore: "Learn more",
  access: "Access",
  footerNavigation: "Navigation",
  footerServices: "Services",
  footerContact: "Contact",
  footerRights: "All rights reserved.",
  footerLegalNotice: "Legal notice",
  footerPrivacyPolicy: "Privacy policy",
  contactFormName: "Name *",
  contactFormSurname: "Surname",
  contactFormEmail: "Email *",
  contactFormPhone: "Phone",
  contactFormMessage: "Comment or message *",
  contactFormTerms: "I accept the terms by clicking here.",
  contactFormMarketing: "I would like to receive information that may be of interest to me.",
  contactFormSubmit: "Send",
  contactFormSubmitting: "Sending…",
  contactFormToastTitle: "Message sent",
  contactFormToastDescription: "Thank you for contacting Disnet, we'll get back to you as soon as possible.",
  contactFormToastErrorTitle: "Couldn't send it",
  contactFormToastErrorDescription: "Something went wrong. Please try again or email us directly at info@disnet.es.",
  jobFormName: "Full name *",
  jobFormEmail: "Email *",
  jobFormPhone: "Contact phone",
  jobFormSubject: "Subject *",
  jobFormMessage: "Message *",
  jobFormCv: "Resume (doc | pdf, max. 5Mb)",
  jobFormTerms: "I accept the terms by clicking here.",
  jobFormMarketing: "I would like to receive information that may be of interest to me.",
  jobFormSubmit: "Submit application",
  jobFormSubmitting: "Sending…",
  jobFormToastTitle: "Application sent",
  jobFormToastDescription: "Thank you for your interest, the Disnet team will review your application.",
  jobFormToastErrorTitle: "Couldn't send it",
  jobFormToastErrorDescription: "Something went wrong. Please try again or email us directly at info@disnet.es.",
  ctaBannerTitle: "Shall we talk about your supply chain?",
  ctaBannerSubtitle: "Write to us and we'll help you find the right logistics solution for your business.",
  addressLabel: "Address",
  phoneLabel: "Phone",
  emailLabel: "Email",
  contactPageTitle: "Contact | Disnet",
  servicesPageTitle: "Services | Disnet",
  servicesPageDescription:
    "Receiving, handling, storage, order preparation, packaging, e-commerce, transport and reverse logistics.",
  blogPageTitle: "Logistics blog",
  blogPageDescription:
    "News, insights and advice from the Disnet team on logistics operations and supply chain.",
  changeToSpanish: "Switch to Spanish",
  changeToEnglish: "Switch to English",
  changeToCatalan: "Switch to Catalan",
  changeToFrench: "Switch to French",
  missionLabel: "Mission",
  visionLabel: "Vision",
  valuesLabel: "Values",
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
