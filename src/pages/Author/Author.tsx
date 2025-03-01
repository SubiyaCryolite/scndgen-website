import React from "react";

import { MetaTitle, Tab } from "@/constants";
import { withTabContext } from "@/context";

export const Impl: React.FC = () => {
  return (
    <div className="text-center">
      <meta name="title" content={`${MetaTitle} Ifunga Ndana`} />
      <div>
        <img
          style={{ width: "24rem", maxWidth: "24rem", borderRadius: "1rem" }}
          src="/media/images/ifunga.jpg"
          title="Ifunga Ndana"
          alt="Ifunga Ndana"
        />
      </div>
      <p />
      <h3>Contact Details</h3>
      <p>
        <a
          className="px-1"
          href="mailto:ifungandana@gmail.com?subject=THE SCND GENESIS"
          title="Contact Ifunga Ndana via E-mail"
        >
          <img
            alt="Contact Ifunga Ndana via E-mail"
            src="/media/images/At Symbol@2x.png"
          />
        </a>
        <a
          className="px-1"
          href="https://www.x.com/subiyacryolite"
          title="Follow me on twitter"
          target="_blank"
        >
          <img alt="Twitter" src="/media/images/Twitter Circle@2x.png" />
        </a>
        <a
          className="px-1"
          href="https://www.linkedin.com/pub/ifunga-ndana/44/a30/667"
          title="LinkedIn Profile"
          target="_blank"
        >
          <img alt="LinkedIn" src="/media/images/LinkedIn Circle@2x.png" />
        </a>
      </p>
      <i>&quot;Go where you are treated best. 💻 🌎👷&quot;</i>
    </div>
  );
};

export const Author: React.FC = withTabContext(Impl, Tab.Author);
