import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import { AppLink } from "./AppLink";
import { NS, Tab } from "../constants";
import { TabContext, ContextProps } from "../context";

export const Layout: React.FC = () => {
  const [active, setActive] = useState<object>({});

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
              <div className="col-md-12 text-center">
                <span style={{ fontSize: "4em", color: "rgb(255, 255, 255)" }}>
                  THE SCND GENESIS
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-xl-4" />
              <div className="col-md-8 col-xl-4">
                <div className="row text-center">
                  <AppLink to={Tab.Legacy} label="Legacy" ns={NS.Tld} />
                  <AppLink to={Tab.Legends} label="Legends" ns={NS.Tld} />
                  <AppLink to={Tab.Blog} label="Blog" ns={NS.Tld} />
                  <AppLink to={Tab.Comics} label="Comics" ns={NS.Tld} />
                  <AppLink to={Tab.Gallery} label="Gallery" ns={NS.Tld} />
                  <AppLink to={Tab.Author} label="Author" ns={NS.Tld} />
                </div>
              </div>
              <div className="col-md-2 col-xl-4" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-xl-4" />
            <div className="col-md-8 col-xl-4 content-area">
              <Outlet />
            </div>
            <div className="col-md-2 col-xl-4" />
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
