import React from "react";
import { Outlet } from "react-router";

import { MetaTitle, Tab } from "@/constants";
import { withTabContext } from "@/context";

const Impl: React.FC = () => {
  return (
    <div className="main-container" style={{ marginTop: "1em" }}>
      <meta name="title" content={`${MetaTitle} Comics`} />
      <Outlet />
    </div>
  );
};

export const Comics: React.FC = withTabContext(Impl, Tab.Comics);
