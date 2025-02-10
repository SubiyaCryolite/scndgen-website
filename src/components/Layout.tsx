import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import { AppLink } from "./AppLink";
import { Tab } from "@/constants";
import { TabContext, ContextProps } from "@/context";

export const Layout: React.FC = () => {
  const [active, setActive] = useState<string>("");

  const tabContext: ContextProps = useMemo(
    () => ({ active, setActive }),
    [active, setActive]
  );

  return (
    <>
      <TabContext.Provider value={tabContext}>
        <div className="header-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <span style={{ fontSize: "4em", color: "rgb(255, 255, 255)" }}>
                  THE SCND GENESIS
                </span>
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
        <span id="current_year">{new Date().getFullYear()}</span>
        &nbsp;Ifunga Ndana. All rights reserved.
      </div>
    </>
  );
};
