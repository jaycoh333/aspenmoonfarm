export type Job = {
  id: string;
  title: string;
  type: "Seasonal" | "Year-round" | "Internship";
  location: string;
  summary: string;
  highlights: string[];
};

export const openRoles: Job[] = [
  {
    id: "field-crew",
    title: "Field Crew Member",
    type: "Seasonal",
    location: "Hygiene, CO",
    summary:
      "Join our field team for the 2026 season. Help plant, cultivate, and harvest the full range of vegetables, flowers, and grains.",
    highlights: [
      "April – November, full-time",
      "$18–$20/hr DOE + weekly produce share",
      "No experience required — hard work & curiosity expected",
    ],
  },
  {
    id: "harvest-lead",
    title: "Harvest Lead",
    type: "Year-round",
    location: "Hygiene, CO",
    summary:
      "Run daily harvest, wash, and pack operations. Coordinate with the field and market teams to get produce from field to share in under 24 hours.",
    highlights: [
      "Year-round role with health benefits",
      "2+ seasons of farm experience required",
      "Management or lead experience preferred",
    ],
  },
  {
    id: "market-staff",
    title: "Farmers Market Staff",
    type: "Seasonal",
    location: "Boulder & Longmont markets",
    summary:
      "Represent Aspen Moon at the Saturday and Wednesday markets. Connect with customers, keep the stall beautiful, and support CSA pickups.",
    highlights: [
      "Saturdays required, additional shifts available",
      "Customer service & food experience a plus",
      "Hauling & set-up required",
    ],
  },
  {
    id: "internship",
    title: "Farming Internship",
    type: "Internship",
    location: "Hygiene, CO",
    summary:
      "A full-season immersion in biodynamic and organic farming. Work alongside our team across every part of the operation.",
    highlights: [
      "April – October, housing stipend available",
      "Weekly education & farm walks",
      "For aspiring farmers committed to a full season",
    ],
  },
];
