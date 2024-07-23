import { useMemo } from "react";
import { Thumbnail, ThumbnailProps } from "../../../../components";

export const Screenshots: React.FC = () => {
  const data = useMemo<ThumbnailProps[]>(() => {
    const staging: ThumbnailProps[] = [];
    for (let i: number = 18; i >= 2; i--) {
      staging.push({
        src: `/media/images/legends/thumbnails/img-legends-${i}.jpg`,
        href: `/media/images/legends/img-legends-${i}.jpg`,
      });
    }
    return staging;
  }, []);

  return (
    <div className="col-12 center-block text-center">
      {data.map(({ src, href }) => (
        <Thumbnail key={src} src={src} href={href} />
      ))}
    </div>
  );
};
