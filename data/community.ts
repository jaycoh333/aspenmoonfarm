export type CommunityProgram = {
  title: string;
  summary: string;
  body: string;
  stat?: { label: string; value: string };
};

export const communityPrograms: CommunityProgram[] = [
  {
    title: "Food Donation Program",
    summary:
      "Every week we donate fresh produce to hunger relief organizations across Boulder County.",
    body:
      "We partner with Community Food Share, EFAA, and OUR Center to keep seasonal, organic produce on the plates of our neighbors. Members can also donate unclaimed shares at any time.",
    stat: { label: "pounds donated / year", value: "20,000+" },
  },
  {
    title: "School & Community Tours",
    summary:
      "Free and low-cost farm tours for schools, nonprofits, and community groups.",
    body:
      "Kids meet the animals, dig carrots, learn how compost works, and leave with a bouquet. We host K–12 groups across the Front Range each spring and fall.",
    stat: { label: "students each year", value: "800+" },
  },
  {
    title: "SNAP & Double Up Food Bucks",
    summary:
      "We accept SNAP at all of our markets and participate in Double Up Food Bucks.",
    body:
      "Every SNAP dollar spent with us is matched with a dollar of free fruits and vegetables — up to $20 per market day. We'll help you enroll at the stand.",
  },
  {
    title: "Sustainability Initiatives",
    summary:
      "Pollinator strips, riparian restoration, and closed-loop fertility.",
    body:
      "We steward hedgerows and wildflower strips for pollinators, protect the ditch and creek corridors that run through the farm, and produce our own compost and seed.",
  },
];
