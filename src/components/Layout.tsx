import React, { useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router";

import { AppLink } from "./AppLink";
import { Seo } from "./Seo";
import { APP_VERSION, Tab } from "@/constants";
import { ContextProps, TabContext } from "@/context";

export const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState<string>("");

  const tabContext: ContextProps = useMemo(
    () => ({ active, setActive }),
    [active, setActive],
  );

  return (
    <>
      <Seo path={pathname} />
      <TabContext.Provider value={tabContext}>
        <div className="header-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="site-title">THE SCND GENESIS</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1 col-md-2 col-xl-3" />
              <div className="col-sm10 col-md-8 col-xl-6">
                <div className="row text-center">
                  <AppLink to={Tab.Legacy} label="Legacy" />
                  <AppLink to={Tab.Legends} label="Legends" />
                  <AppLink to={Tab.Blog} label="Blog" />
                  <AppLink to={Tab.Comics} label="Comics" />
                  <AppLink to={Tab.Gallery} label="Gallery" />
                  <AppLink to={Tab.Author} label="Author" />
                </div>
              </div>
              <div className="col-sm-1 col-md-2 col-xl-3" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-1 col-md-2 col-xl-3" />
            <div className="col-sm-10 col-md-8 col-xl-6 content-area">
              <Outlet />
            </div>
            <div className="col-sm-1 col-md-2 col-xl-3" />
          </div>
        </div>
      </TabContext.Provider>

      <div className="footer">
        The SCND Genesis - Copyright © 2008 -&nbsp;
        <span id="current-year">{new Date().getFullYear()}</span>
        &nbsp;Ifunga Ndana. All rights reserved.
        <br />
        {APP_VERSION ? ` ${APP_VERSION}` : ""}
      </div>
    </>
  );
};
