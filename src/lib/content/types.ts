export type ServiceBenefit = { title: string; description?: string; points?: string[] };
export type ServiceSection = { heading: string; paragraphs: string[] };

export type Service = {
  slug: string;
  name: string;
  headline: string;
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
  body: BlogBlock[];
};

export type NavLink = { href: string; label: string };

export type LegalBlock = { heading: string } | { text: string } | { list: string[] };

export type LegalPageCopy = {
  title: string;
  lastUpdated: string;
  body: LegalBlock[];
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
  empresaCopy: { title: string; intro: string[]; mission: string; vision: string; values: string };
  contactCopy: { title: string; subtitle: string };
  clientAreaCopy: {
    title: string;
    description: string;
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
