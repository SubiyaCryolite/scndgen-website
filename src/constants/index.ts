export enum Tab {
  Legends = "/legends",
  Author = "/author",
  Blog = "/blog",
  Comics = "/comics",
  Gallery = "/gallery",
  Legacy = "/",
}

export enum LegendTab {
  Requirements = "./requirements",
  Screenshots = "./screenshots",
  Features = "./features",
  Faq = "./faq",
  Info = "./",
}

export const SITE_URL = "https://www.scndgen.com";
export const SITE_NAME = "The SCND Genesis";
export const SITE_TITLE = "The SCND Genesis - official site";
export const DEFAULT_DESCRIPTION =
  "The SCND Genesis is an action adventure set in a post apocalyptic Africa. Created by Ifunga Ndana";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/media/images/favicon/apple-touch-icon.png`;
export const MetaTitle = `${SITE_NAME} |`;
export const APP_VERSION: string = import.meta.env.VITE_APP_VERSION ?? "";

export interface SeoContent {
  title: string;
  description: string;
}

const pageSeo: Record<string, SeoContent> = {
  "/": {
    title: `${MetaTitle} Legacy`,
    description:
      "The SCND Genesis: Legacy is a hybrid of turn-based RPGs and fighting games set in post-apocalyptic Africa.",
  },
  "/legends": {
    title: `${MetaTitle} Legends`,
    description:
      "The SCND Genesis: Legends is a fighting game based on the SCND Genesis web comic, mixing turn-based RPGs and 2D fighters.",
  },
  "/legends/features": {
    title: `${MetaTitle} Legends Features`,
    description:
      "Characters, story mode, soundtrack, LAN and online play, and achievements in The SCND Genesis: Legends.",
  },
  "/legends/screenshots": {
    title: `${MetaTitle} Legends Screenshots`,
    description:
      "Screenshots from The SCND Genesis: Legends, a fighting game based on the SCND Genesis web comic.",
  },
  "/legends/faq": {
    title: `${MetaTitle} Legends FAQ`,
    description:
      "Frequently asked questions about The SCND Genesis: Legends, including platforms, gameplay, and licensing.",
  },
  "/legends/requirements": {
    title: `${MetaTitle} Legends Requirements`,
    description:
      "Minimum and recommended system requirements for The SCND Genesis: Legends on Windows, Mac, and Linux.",
  },
  "/blog": {
    title: `${MetaTitle} Blog`,
    description:
      "Writing by Ifunga Ndana about The SCND Genesis, game development, and related projects.",
  },
  "/comics": {
    title: `${MetaTitle} Comics`,
    description:
      "Read The SCND Genesis web comic archive, an action adventure set in post-apocalyptic Africa.",
  },
  "/gallery": {
    title: `${MetaTitle} Gallery`,
    description:
      "Artwork and images from The SCND Genesis universe, created by Ifunga Ndana.",
  },
  "/author": {
    title: `${MetaTitle} Ifunga Ndana`,
    description:
      "Ifunga Ndana is the creator of The SCND Genesis, a post-apocalyptic African action adventure.",
  },
};

const comicIssueLabels: Record<string, string> = {
  "0": "Issues 01 to 13",
  "1": "Issues 14 to 27",
  "2": "Issues 28 to 41",
  "3": "Issues 42 to 55",
  "4": "Issues 56 to 69",
  "5": "Issues 70 to 74",
};

export const getSeoForPath = (pathname: string): SeoContent => {
  const path = pathname.replace(/\/+$/, "") || "/";
  const exact = pageSeo[path];
  if (exact) return exact;

  const comicMatch = path.match(/^\/comics\/(\d+)$/);
  if (comicMatch) {
    const label = comicIssueLabels[comicMatch[1]] ?? "Archive";
    return {
      title: `${MetaTitle} Comics | ${label}`,
      description: `Read ${label} of The SCND Genesis web comic, an action adventure set in post-apocalyptic Africa.`,
    };
  }

  return {
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
  };
};
