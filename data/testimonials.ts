export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  since?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The Aspen Moon CSA completely changed how our family eats. The flavor of a just-picked tomato from their fields is something you remember all winter.",
    name: "Sarah L.",
    role: "CSA Member",
    since: "Boulder · Since 2017",
  },
  {
    id: "t2",
    quote:
      "Their biodynamic practices show up in the quality of every vegetable. We build our restaurant's summer menu around what Aspen Moon has coming in.",
    name: "Chef Daniel R.",
    role: "Wholesale Partner",
    since: "Longmont",
  },
  {
    id: "t3",
    quote:
      "Picking up our share at the Saturday market is the highlight of our week. The team knows us by name and the flowers are always stunning.",
    name: "Alex & Priya M.",
    role: "CSA Members",
    since: "Longmont · Since 2020",
  },
  {
    id: "t4",
    quote:
      "The plant starts we bought from Aspen Moon this spring outperformed every other start in our garden. We'll be back every year.",
    name: "Jennifer K.",
    role: "Home Gardener",
    since: "Boulder",
  },
];
