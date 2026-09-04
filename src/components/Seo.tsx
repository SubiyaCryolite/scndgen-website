import React, { useLayoutEffect } from "react";

import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  getSeoForPath,
} from "@/constants";

interface Props {
  path: string;
}

const canonicalFor = (path: string): string =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

const keepLastMetaByAttr = (attr: "name" | "property"): void => {
  const seen = new Map<string, Element[]>();
  document.head.querySelectorAll(`meta[${attr}]`).forEach((el) => {
    const key = el.getAttribute(attr);
    if (!key) return;
    const list = seen.get(key) ?? [];
    list.push(el);
    seen.set(key, list);
  });
  seen.forEach((els) => {
    els.slice(0, -1).forEach((el) => el.remove());
  });
};

export const Seo: React.FC<Props> = ({ path }) => {
  const { title, description } = getSeoForPath(path);
  const url = canonicalFor(path);

  useLayoutEffect(() => {
    document.title = title;
    const titles = document.head.querySelectorAll("title");
    titles.forEach((node, index) => {
      if (index > 0) node.remove();
    });

    keepLastMetaByAttr("name");
    keepLastMetaByAttr("property");

    const canonicals = document.head.querySelectorAll('link[rel="canonical"]');
    canonicals.forEach((node, index) => {
      if (index < canonicals.length - 1) node.remove();
    });
  }, [title, description, url]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <link rel="canonical" href={url} />
    </>
  );
};
