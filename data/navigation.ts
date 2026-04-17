import { siteConfig } from "./siteConfig";

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
  highlight?: boolean;
};

export const primaryNav: NavItem[] = [
  {
    label: "What We Offer",
    href: "/what-we-offer",
  },
  {
    label: "Our Farm",
    href: "/our-farm",
    children: [
      {
        label: "Our Story",
        href: "/our-farm",
        description: "The people and land behind Aspen Moon.",
      },
      {
        label: "Biodynamic Agriculture",
        href: "/our-farm/biodynamic",
        description: "How we farm with the rhythms of the earth.",
      },
      {
        label: "Find Us",
        href: "/find-us",
        description: "Farm stand, Boulder & Longmont markets.",
      },
      {
        label: "Community Connections",
        href: "/community",
        description: "Food donations, tours, and giving back.",
      },
    ],
  },
  {
    label: "What We Grow",
    href: "/what-we-grow",
    children: [
      {
        label: "Organic Vegetables",
        href: "/what-we-grow?category=vegetables",
        description: "150+ varieties, grown with care.",
      },
      {
        label: "Organic Flowers",
        href: "/what-we-grow?category=flowers",
        description: "Seasonal bouquets & cut flowers.",
      },
      {
        label: "Plants & Starts",
        href: "/what-we-grow?category=plants",
        description: "Heirloom starts for your own garden.",
      },
      {
        label: "Heritage Grains",
        href: "/what-we-grow?category=grains",
        description: "Ancient & regional grain varieties.",
      },
    ],
  },
  {
    label: "Wholesale",
    href: "/wholesale",
  },
  {
    label: "Employment",
    href: "/employment",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const ctaNav: NavItem[] = [
  {
    label: "CSA Sign Up",
    href: siteConfig.external.csaStorefront,
    external: true,
    highlight: true,
  },
  {
    label: "Member Login",
    href: siteConfig.external.csaLogin,
    external: true,
  },
];

export const footerNav = {
  shop: [
    { label: "Join the CSA", href: siteConfig.external.csaStorefront, external: true },
    { label: "Member Login", href: siteConfig.external.csaLogin, external: true },
    { label: "Plant Store", href: siteConfig.external.plantStore, external: true },
    { label: "Find Us", href: "/find-us" },
  ],
  farm: [
    { label: "Our Story", href: "/our-farm" },
    { label: "Biodynamic Agriculture", href: "/our-farm/biodynamic" },
    { label: "What We Grow", href: "/what-we-grow" },
    { label: "Community", href: "/community" },
  ],
  business: [
    { label: "Wholesale", href: "/wholesale" },
    { label: "Employment", href: "/employment" },
    { label: "Contact", href: "/contact" },
  ],
};
