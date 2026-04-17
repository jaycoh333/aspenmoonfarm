export const siteConfig = {
  name: "Aspen Moon Farm",
  tagline: "Biodynamic. Organic. Rooted in Colorado.",
  description:
    "A family-run biodynamic and certified organic farm in Longmont, Colorado, growing vegetables, flowers, plants, and heritage grains for our community since 2009.",
  url: "https://www.aspenmoonfarm.com",
  location: {
    city: "Longmont",
    state: "Colorado",
    region: "Front Range",
  },
  contact: {
    email: "info@aspenmoonfarm.com",
    phone: "(303) 555-0142",
    address: {
      street: "7927 Hygiene Road",
      city: "Longmont",
      state: "CO",
      zip: "80503",
    },
  },
  social: {
    instagram: "https://www.instagram.com/aspenmoonfarm",
    facebook: "https://www.facebook.com/aspenmoonfarm",
  },
  external: {
    csaStorefront: "https://members.farmigo.com/store/aspenmoonfarm",
    csaLogin: "https://members.farmigo.com/login",
    plantStore: "https://members.farmigo.com/store/aspenmoonfarm/plants",
  },
  stats: {
    foundedYear: 2009,
    acreage: 90,
    csaMembers: 500,
    cropVarieties: 150,
  },
};

export type SiteConfig = typeof siteConfig;
