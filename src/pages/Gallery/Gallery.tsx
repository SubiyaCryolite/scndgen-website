import React, { useMemo } from "react";

import { MetaTitle, Tab } from "@/constants";
import { withTabContext } from "@/context";
import { Thumbnail, ThumbnailProps } from "@/components";

const Impl: React.FC = () => {
  const data = useMemo<ThumbnailProps[]>(() => {
    const staging: ThumbnailProps[] = [];
    for (let i: number = 1; i <= 11; i++) {
      staging.push({
        src: `/media/images/gallery/thumbnails/img-${i}.jpg`,
        href: `/media/images/gallery/img-${i}.jpg`,
        title: `Image ${i}`,
      });
    }
    return staging;
  }, []);

  return (
    <div className="col-12 center-block text-center">
      <meta name="title" content={`${MetaTitle} Gallery`} />
      {data.map(({ src, href, title }) => (
        <Thumbnail key={src} src={src} href={href} title={title} />
      ))}
    </div>
  );
};

export const Gallery: React.FC = withTabContext(Impl, Tab.Gallery);
