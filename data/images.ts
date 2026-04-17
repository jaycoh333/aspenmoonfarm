/**
 * Centralized farm image registry.
 *
 * Images live in /public/images/ and were migrated from the original
 * aspenmoonfarm.com site so we use REAL farm photography — not stock.
 *
 * See scripts/fetch-images.sh for the migration script and
 * public/images/README.md for folder conventions.
 *
 * Entries marked `// TODO` are still using a stand-in (a reused farm image
 * with a close-enough subject). Swap for a dedicated photo when available.
 */

export type FarmImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Optional CSS object-position value. Use when the subject lives near an
   * edge of the frame (e.g. farmer standing tall on the left) so the default
   * center crop doesn't decapitate them.
   */
  position?: string;
};

export const images = {
  hero: {
    // Wide landscape banner pulled from the homepage banner slot.
    landscape: {
      src: "/images/hero/farm-banner.jpg",
      alt: "Aspen Moon Farm fields on the Colorado Front Range",
      width: 2000,
      height: 934,
    },
    // Broad farm field shot — used on closing CTAs.
    field: {
      src: "/images/farm/farm-field-rows.jpg",
      alt: "Cultivated rows at Aspen Moon Farm",
      width: 2000,
      height: 1333,
    },
    // The farm stand on Hygiene Road.
    farmStand: {
      src: "/images/markets/farm-stand-roadside.jpg",
      alt: "Aspen Moon roadside farm stand",
      width: 1600,
      height: 1200,
      position: "top",
    },
  },

  produce: {
    // A full harvest basket from the farm's own gallery.
    basket: {
      src: "/images/produce/harvest-basket.jpg",
      alt: "Harvest basket with just-picked organic vegetables",
      width: 600,
      height: 400,
    },
    tomatoes: {
      src: "/images/produce/heirloom-tomatoes.jpg",
      alt: "Heirloom tomatoes grown at Aspen Moon Farm",
      width: 600,
      height: 367,
    },
    tomatoMedley: {
      src: "/images/produce/tomato-medley.jpg",
      alt: "Mixed tomato varieties from the farm",
      width: 300,
      height: 402,
    },
    cherryTomatoes: {
      src: "/images/produce/cherry-tomatoes.jpg",
      alt: "Cherry tomatoes from Aspen Moon Farm",
      width: 480,
      height: 640,
    },
    greens: {
      src: "/images/produce/broccoli.jpg",
      alt: "Fresh broccoli from the organic biodynamic farm",
      width: 2000,
      height: 1500,
    },
    roots: {
      src: "/images/produce/harvest-basket.jpg",
      alt: "A harvest basket of roots and vegetables",
      width: 600,
      height: 400,
    },
    peppers: {
      src: "/images/produce/organic-peppers.jpg",
      alt: "Organic peppers from Aspen Moon Farm",
      width: 2000,
      height: 1500,
    },
  },

  csa: {
    // The "Farmers Choice" weekly share photography.
    box: {
      src: "/images/csa/csa-week-2.jpg",
      alt: "A weekly CSA share loaded with just-picked vegetables",
      width: 1600,
      height: 1200,
    },
    boxWeek1: {
      src: "/images/csa/csa-week-1.jpg",
      alt: "CSA Farmers Choice — Week 1 share",
      width: 1600,
      height: 1200,
    },
    boxWeek22: {
      src: "/images/csa/csa-week-22.jpg",
      alt: "CSA Farmers Choice — Week 22 share",
      width: 1600,
      height: 1200,
    },
    pickup: {
      src: "/images/csa/csa-pickup.jpg",
      alt: "CSA members picking up shares at the farm",
      width: 1200,
      height: 1600,
    },
  },

  flowers: {
    // Farm's own cut flower photography.
    field: {
      src: "/images/flowers/snapdragons-2023.jpg",
      alt: "Snapdragons in bloom at Aspen Moon's cut flower field",
      width: 1200,
      height: 1600,
    },
    bouquet: {
      src: "/images/flowers/statice-2023.jpg",
      alt: "Cut statice from the Aspen Moon flower field",
      width: 1200,
      height: 1600,
    },
  },

  plants: {
    // Greenhouse starter plants.
    starts: {
      src: "/images/plants/starter-plants.jpg",
      alt: "Organic plant starts ready for transplant",
      width: 2000,
      height: 1333,
    },
    seeds: {
      src: "/images/plants/organic-seeds.jpg",
      alt: "Organic seeds saved and sorted at Aspen Moon Farm",
      width: 1600,
      height: 1200,
    },
  },

  grains: {
    // Heritage grain field.
    field: {
      src: "/images/grains/heritage-grains.jpg",
      alt: "Heritage grains grown at Aspen Moon Farm",
      width: 2000,
      height: 1125,
    },
  },

  team: {
    harvest: {
      src: "/images/team/many-hands.jpg",
      alt: "The Aspen Moon farm team working the fields",
      width: 2000,
      height: 1333,
    },
    hands: {
      src: "/images/team/many-hands.jpg",
      alt: "Many hands make light work on the farm",
      width: 2000,
      height: 1333,
    },
    owner: {
      src: "/images/team/erin-farm-owner.jpg",
      alt: "Erin, one of the founders of Aspen Moon Farm",
      width: 2000,
      height: 1333,
    },
    market: {
      src: "/images/markets/boulder-market.jpg",
      alt: "Aspen Moon stand at the Boulder County Farmers Market",
      width: 1600,
      height: 1200,
    },
    marketScene1: {
      src: "/images/markets/market-scene-1.jpg",
      alt: "Market stand scene at Aspen Moon",
      width: 2000,
      height: 1333,
    },
    marketScene2: {
      src: "/images/markets/market-scene-2.jpg",
      alt: "Market stand scene at Aspen Moon",
      width: 2000,
      height: 1333,
    },
  },

  story: {
    sunrise: {
      src: "/images/hero/farm-sunrise.jpg",
      alt: "Farm field at sunrise",
      width: 960,
      height: 960,
    },
    // TODO: replace with a dedicated compost / soil-building photo when available.
    compost: {
      src: "/images/farm/farm-gallery-1.jpg",
      alt: "Working the fields at Aspen Moon Farm",
      width: 2000,
      height: 1333,
    },
    // TODO: replace with a dedicated biodynamic / pasture animal photo when available.
    cows: {
      src: "/images/farm/farm-gallery-2.jpg",
      alt: "The biodynamic farm as a living system",
      width: 2000,
      height: 1333,
    },
    farmGallery: {
      src: "/images/farm/farm-gallery-3.jpg",
      alt: "A scene from Aspen Moon Farm",
      width: 2000,
      height: 2000,
    },
  },

  community: {
    // TODO: replace with a dedicated food-donation photo when available.
    donation: {
      src: "/images/csa/csa-pickup.jpg",
      alt: "Share pickup at the farm",
      width: 1200,
      height: 1600,
    },
    // TODO: replace with a dedicated school-tour photo when available.
    tour: {
      src: "/images/farm/farm-gallery-3.jpg",
      alt: "On the farm at Aspen Moon",
      width: 2000,
      height: 2000,
    },
  },

  home: {
    // Dedicated homepage quick-action thumbnails.
    csaThumb: {
      src: "/images/csa/csa-week-1.jpg",
      alt: "CSA share box",
      width: 1600,
      height: 1200,
    },
    marketThumb: {
      src: "/images/markets/market-scene-2.jpg",
      alt: "Aspen Moon at the farmers market",
      width: 2000,
      height: 1333,
    },
    farmStandThumb: {
      src: "/images/markets/farm-stand-roadside.jpg",
      alt: "The farm stand on Hygiene Road",
      width: 1600,
      height: 1200,
      position: "top",
    },
  },

  logo: {
    primary: {
      src: "/images/logo/aspen-moon-logo.png",
      alt: "Aspen Moon Farm — certified organic",
      width: 800,
      height: 150,
    },
    realOrganicProject: {
      src: "/images/logo/real-organic-project.png",
      alt: "Real Organic Project certification",
      width: 400,
      height: 400,
    },
    coloradoProud: {
      src: "/images/logo/colorado-proud.png",
      alt: "Colorado Proud certification",
      width: 400,
      height: 400,
    },
  },
} satisfies Record<string, Record<string, FarmImage>>;

export type ImageRegistry = typeof images;
