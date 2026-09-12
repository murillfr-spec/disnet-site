export type ServiceBenefit = { title: string; description?: string; points?: string[] };
export type ServiceSection = { heading: string; paragraphs: string[] };

export type Service = {
  slug: string;
  name: string;
  headline: string;
  /** SEO meta description (150-160 chars), only set when headline is out of range — falls back to headline otherwise. */
  metaDescription?: string;
  subheadline?: string;
  intro: string[];
  extra?: string[];
  list?: string[];
  sections?: ServiceSection[];
  benefitsTitle?: string;
  benefits?: ServiceBenefit[];
  audienceTitle?: string;
  audience?: string[];
  ctaLabel?: string;
  faqTitle?: string;
  faq?: { question: string; answer: string }[];
};

export type BlogBlock = { heading: string } | { text: string };

export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  /** SEO meta description (150-160 chars), only set when excerpt is out of range — falls back to excerpt otherwise. */
  metaDescription?: string;
  /** Featured image path (real photo already used elsewhere on the site) — optional, only set on some posts. */
  image?: string;
  imageAlt?: string;
  body: BlogBlock[];
};

export type NavLink = { href: string; label: string };

export type LegalBlock = { heading: string } | { text: string } | { list: string[] };

export type LegalPageCopy = {
  title: string;
  lastUpdated: string;
  body: LegalBlock[];
  metaDescription?: string;
};

export type CookieConsentCopy = {
  message: string;
  moreInfo: string;
  technical: string;
  marketing: string;
  reject: string;
  accept: string;
};

export type Ui = {
  headerContact: string;
  headerOpenMenu: string;
  heroCtaContact: string;
  heroCtaVisit: string;
  heroCtaServices: string;
  readMore: string;
  requestQuote: string;
  contactUs: string;
  backToServices: string;
  backToBlog: string;
  blogAuthorByline: string;
  otherServices: string;
  moreArticles: string;
  readArticle: string;
  servicesOffered: string;
  servicesOfferedIntro: string;
  learnMore: string;
  access: string;
  footerNavigation: string;
  footerServices: string;
  footerContact: string;
  footerRights: string;
  footerLegalNotice: string;
  footerPrivacyPolicy: string;
  contactFormName: string;
  contactFormSurname: string;
  contactFormEmail: string;
  contactFormPhone: string;
  contactFormMessage: string;
  contactFormTerms: string;
  contactFormMarketing: string;
  contactFormSubmit: string;
  contactFormSubmitting: string;
  contactFormToastTitle: string;
  contactFormToastDescription: string;
  contactFormToastErrorTitle: string;
  contactFormToastErrorDescription: string;
  ctaBannerTitle: string;
  ctaBannerSubtitle: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  contactPageTitle: string;
  servicesPageTitle: string;
  servicesPageDescription: string;
  blogPageTitle: string;
  blogPageDescription: string;
  changeToSpanish: string;
  changeToEnglish: string;
  changeToCatalan: string;
  changeToFrench: string;
  missionLabel: string;
  visionLabel: string;
  valuesLabel: string;
  legalNoticePageTitle: string;
  privacyPolicyPageTitle: string;
  lastUpdatedLabel: string;
};

export type Content = {
  company: {
    name: string;
    legalName: string;
    tagline: string;
    phone: string;
    phoneHref: string;
    email: string;
    address: string;
    since: number;
    yearsExperience: number;
  };
  heroCopy: { eyebrow: string; title: string; paragraphs: string[] };
  heroSlideAlts: string[];
  companyIntroCopy: { paragraphs: string[] };
  barcelonaCopy: { title: string; paragraphs: string[]; highlight: string };
  stats: { value: number; label: string }[];
  services: Service[];
  whyChooseUs: {
    title: string;
    intro: string[];
    points: { title: string; description: string }[];
  };
  empresaCopy: {
    title: string;
    intro: string[];
    mission: string;
    vision: string;
    values: string;
    metaDescription?: string;
  };
  contactCopy: { title: string; subtitle: string; metaDescription?: string };
  clientAreaCopy: {
    title: string;
    description: string;
    metaDescription?: string;
    portals: { name: string; description: string; href: string }[];
  };
  blogPosts: BlogPost[];
  navLinks: NavLink[];
  ui: Ui;
  siteFaq: { title: string; items: { question: string; answer: string }[] };
  legalNoticeCopy: LegalPageCopy;
  privacyPolicyCopy: LegalPageCopy;
  cookieConsent: CookieConsentCopy;
};
