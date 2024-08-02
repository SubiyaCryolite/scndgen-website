import { ThumbnailData } from "./common";

export const Thumbnail: React.FC<ThumbnailData> = (props) => {
  return (
    <a
      key={props.src}
      href={"/media/images/comics/" + props.src}
      title={props.caption}
      data-lightbox="gallery"
    >
      <img
        src={"/media/images/comics/thumbs/" + props.src}
        alt={props.caption}
        className="img-thumbnail imgPadding"
      />
    </a>
  );
};
