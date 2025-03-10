import React from "react";
import { useParams } from "react-router";

import { Nav } from "./Nav";
import { Thumbnail } from "./Thumbnail";
import { page } from "./data";

export const Page: React.FC = () => {
  const { pageId = "0" } = useParams();

  const index: number = parseInt(pageId);

  const { comics, prev, next } = page[index];

  return (
    <div id="gallery" className="col-12 center-block text-center">
      {comics.map((comic) => (
        <Thumbnail key={comic.src} {...comic} />
      ))}
      <Nav next={next} prev={prev} />
    </div>
  );
};
