export type Location = {
  id: string;
  name: string;
  kind: "farm-stand" | "market" | "farm";
  address: string;
  city: string;
  state: string;
  zip?: string;
  hours: { label: string; time: string }[];
  season: string;
  directionsUrl: string;
  description: string;
  highlight?: string;
};

export const locations: Location[] = [
  {
    id: "farm-stand",
    name: "Aspen Moon Farm Stand",
    kind: "farm-stand",
    address: "7927 Hygiene Road",
    city: "Longmont",
    state: "CO",
    zip: "80503",
    hours: [
      { label: "Friday", time: "10:00 AM – 6:00 PM" },
      { label: "Saturday", time: "10:00 AM – 5:00 PM" },
      { label: "Sunday", time: "10:00 AM – 4:00 PM" },
    ],
    season: "Open late June through October",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=7927+Hygiene+Rd+Longmont+CO+80503",
    description:
      "The freshest harvest of the week, straight from our fields. Self-serve cooler with fresh flowers, eggs, and pantry staples.",
    highlight: "On-farm · Cash, card & Venmo",
  },
  {
    id: "boulder-market",
    name: "Boulder County Farmers Market",
    kind: "market",
    address: "13th Street between Arapahoe & Canyon",
    city: "Boulder",
    state: "CO",
    hours: [
      { label: "Saturdays", time: "8:00 AM – 2:00 PM" },
      { label: "Wednesdays", time: "4:00 PM – 8:00 PM" },
    ],
    season: "April through November",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=1310+13th+St+Boulder+CO+80302",
    description:
      "Find our full stand with vegetables, flowers, starts in season, and CSA pickup. Stop by and say hi.",
    highlight: "CSA pickup available",
  },
  {
    id: "longmont-market",
    name: "Longmont Farmers Market",
    kind: "market",
    address: "Boulder County Fairgrounds, 9595 Nelson Rd",
    city: "Longmont",
    state: "CO",
    zip: "80501",
    hours: [{ label: "Saturdays", time: "8:00 AM – 1:00 PM" }],
    season: "April through November",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=9595+Nelson+Rd+Longmont+CO+80501",
    description:
      "Our hometown market. You'll find the full harvest and friendly faces every Saturday morning.",
    highlight: "CSA pickup available",
  },
];
