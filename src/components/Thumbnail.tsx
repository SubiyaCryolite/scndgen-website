export interface ThumbnailProps {
  href: string;
  src: string;
  title?: string;
}

export const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const { href, src } = props;
  return (
    <a href={href} data-lightbox="gallery" title="Screenshot">
      <img src={src} alt="Screenshot" className="img-link img-padding" />
    </a>
  );
};
