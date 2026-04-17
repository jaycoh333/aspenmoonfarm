import { images } from "./images";
import type { FarmImage } from "./images";

export type Offering = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  external?: boolean;
  cta: string;
  image: FarmImage;
};

export const quickActions: Offering[] = [
  {
    slug: "csa",
    title: "Join the CSA",
    subtitle: "Weekly shares · Summer & Fall",
    description:
      "Get a weekly box of just-picked, biodynamic produce and flowers from June through November.",
    href: "/csa",
    cta: "See share options",
    image: images.csa.box,
  },
  {
    slug: "farm-stand",
    title: "Visit the Farm Stand",
    subtitle: "Open Fri–Sun in season",
    description:
      "Stop by our roadside stand in Hygiene for the freshest harvest of the week.",
    href: "/find-us#farm-stand",
    cta: "See hours & directions",
    image: images.hero.farmStand,
  },
  {
    slug: "markets",
    title: "Find Us at Market",
    subtitle: "Boulder · Longmont",
    description:
      "Meet our team and shop the full harvest Saturdays at the Boulder and Longmont Farmers Markets.",
    href: "/find-us#markets",
    cta: "Market schedule",
    image: images.team.market,
  },
];

export type Category = {
  slug: "vegetables" | "flowers" | "plants" | "grains";
  name: string;
  tagline: string;
  description: string;
  image: FarmImage;
  items: { name: string; note?: string }[];
};

export const growCategories: Category[] = [
  {
    slug: "vegetables",
    name: "Organic Vegetables",
    tagline: "150+ varieties across the season",
    description:
      "From the first spring greens to winter storage crops, our vegetables are harvested at peak flavor and brought to market within 24 hours.",
    image: images.produce.basket,
    items: [
      { name: "Heirloom tomatoes", note: "July – September" },
      { name: "Salad greens & lettuces" },
      { name: "Rainbow carrots" },
      { name: "Sweet peppers & shishitos" },
      { name: "Winter squash" },
      { name: "Garlic & alliums" },
      { name: "Braising greens" },
      { name: "Root medley" },
    ],
  },
  {
    slug: "flowers",
    name: "Organic Flowers",
    tagline: "Cut flowers & full-season bouquets",
    description:
      "Our biodynamic cut flower field supplies CSA bouquets, market bunches, and weddings across the Front Range.",
    image: images.flowers.field,
    items: [
      { name: "Dahlias", note: "Aug – frost" },
      { name: "Zinnias" },
      { name: "Sunflowers" },
      { name: "Snapdragons" },
      { name: "Sweet peas" },
      { name: "Celosia" },
      { name: "Lisianthus" },
      { name: "Ranunculus" },
    ],
  },
  {
    slug: "plants",
    name: "Plants & Starts",
    tagline: "Heirloom starts for your home garden",
    description:
      "Each spring we offer thousands of vegetable, herb, and flower starts grown from seed in our greenhouses.",
    image: images.plants.starts,
    items: [
      { name: "Tomato starts", note: "50+ heirloom varieties" },
      { name: "Pepper starts" },
      { name: "Culinary herbs" },
      { name: "Flower starts" },
      { name: "Perennials" },
      { name: "Squash & cucumbers" },
    ],
  },
  {
    slug: "grains",
    name: "Heritage Grains",
    tagline: "Ancient & regional grain varieties",
    description:
      "We grow and mill small-batch heritage grains adapted to the high plains — stone-ground for flavor and nutrition.",
    image: images.grains.field,
    items: [
      { name: "Hard red winter wheat" },
      { name: "Rye" },
      { name: "Einkorn" },
      { name: "Emmer" },
      { name: "Oats" },
      { name: "Stone-milled flours" },
    ],
  },
];

export const csaFeatures = [
  {
    title: "Just-picked, never shipped",
    description:
      "Every share is harvested within 24 hours of your pickup — nothing travels further than our cooler.",
  },
  {
    title: "Biodynamic & Certified Organic",
    description:
      "We've been certified organic since our founding and follow biodynamic practices to build living soil.",
  },
  {
    title: "Flexible share sizes",
    description:
      "Choose a small, medium, or large share — with optional add-ons for flowers, eggs, and pantry staples.",
  },
  {
    title: "Easy pickup",
    description:
      "Pick up at the farm, the Boulder or Longmont markets, or a community site near you.",
  },
];

export const csaSteps = [
  {
    step: "01",
    title: "Choose your share",
    body: "Small, medium, or large — plus flower shares, grain shares, and pantry add-ons.",
  },
  {
    step: "02",
    title: "Pick your pickup",
    body: "Join us at the farm, our Boulder or Longmont market stalls, or a neighborhood site.",
  },
  {
    step: "03",
    title: "Harvest weekly",
    body: "From June through November, collect a box of just-picked produce each week.",
  },
  {
    step: "04",
    title: "Eat with the season",
    body: "Recipes, storage tips, and a weekly newsletter help you make the most of every share.",
  },
];

export const trustPoints = [
  {
    icon: "leaf",
    title: "Biodynamic by practice",
    description:
      "We farm with the rhythms of the earth — building soil, closing loops, and growing food with integrity.",
  },
  {
    icon: "sun",
    title: "Certified organic since 2009",
    description:
      "Never any synthetic pesticides, herbicides, or fertilizers. Third-party certified every year.",
  },
  {
    icon: "mountain",
    title: "Rooted on the Front Range",
    description:
      "Ninety acres between Longmont and Hygiene, feeding the Boulder and Longmont communities for 15+ years.",
  },
  {
    icon: "heart",
    title: "Community-supported",
    description:
      "Your CSA share and market dollars directly fund a living wage for our team and regenerative land practices.",
  },
];
