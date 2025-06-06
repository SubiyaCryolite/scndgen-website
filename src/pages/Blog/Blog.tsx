import React from "react";

import { MetaTitle, Tab } from "@/constants";
import { withTabContext } from "@/context";

const Impl: React.FC = () => {
  return (
    <div>
      <meta name="title" content={`${MetaTitle} Blog`} />
      <p>
        I have a presence on&nbsp;
        <a href="https://medium.com/@ifungandana" target="_target">
          Medium
        </a>
        . My older content is on&nbsp;
        <a href="https://subiyacryolite.github.io/" target="_target">
          https://subiyacryolite.github.io/
        </a>
        .
      </p>
      <hr />
    </div>
  );
};

export const Blog: React.FC = withTabContext(Impl, Tab.Blog);
