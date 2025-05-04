import React from "react";
import { Link, To } from "react-router";

interface CollectionInfo {
  caption: string;
  to: To;
  imgSrc: string;
}

const data: CollectionInfo[] = [
  {
    caption: "Issue 01 to 13",
    to: "./0",
    imgSrc: "/media/images/comics/thumbs/0000.jpg",
  },
  {
    caption: "Issue 14 to 27",
    to: "./1",
    imgSrc: "/media/images/comics/thumbs/0014.jpg",
  },
  {
    caption: "Issue 28 to 41",
    to: "./2",
    imgSrc: "/media/images/comics/thumbs/0028.jpg",
  },
  {
    caption: "Issue 42 to 55",
    to: "./3",
    imgSrc: "/media/images/comics/thumbs/0042.jpg",
  },
  {
    caption: "Issue 56 to 69",
    to: "./4",
    imgSrc: "/media/images/comics/thumbs/0056.jpg",
  },
  {
    caption: "Issue 70 to 74",
    to: "./5",
    imgSrc: "/media/images/comics/thumbs/0070.jpg",
  },
];

export const Landing: React.FC = () => {
  return (
    <>
      {data.map((thumb) => (
        <div
          key={thumb.caption}
          className="card"
          style={{
            display: "inline-block",
            padding: "0.25em",
            margin: "0.25em",
          }}
        >
          <Link to={thumb.to}>
            <img
              src={thumb.imgSrc}
              alt={thumb.caption}
              className="img-link comic-thumb"
            />
          </Link>
          <div className="card-body">
            <span className="card-text">{thumb.caption}</span>
          </div>
        </div>
      ))}
    </>
  );
};
