import { useMemo } from "react";

interface ThumbnailProps {
  href: string;
  src: string;
}

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const { href, src } = props;
  return (
    <a href={href} data-lightbox="gallery" title="Screenshot">
      <img src={src} alt="Screenshot" className="img-thumbnail imgPadding" />
    </a>
  );
};

export const Screenshots: React.FC = () => {
  const data = useMemo<ThumbnailProps[]>(() => {
    const staging: ThumbnailProps[] = [];
    for (let i: number = 18; i >= 2; i--) {
      staging.push({
        src: `/media/images/legends/t_Screenshot-${i}.jpg`,
        href: `/media/images/legends/Screenshot-${i}.jpg`,
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
