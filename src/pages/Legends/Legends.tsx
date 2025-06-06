import React, { useMemo, useState } from "react";
import { Outlet } from "react-router";

import { AppLink } from "@/components";
import { ContextProps, TabContext, withTabContext } from "@/context";
import { LegendTab, MetaTitle, Tab } from "@/constants";

const Impl: React.FC = () => {
  const [active, setActive] = useState<string>("");

  const tabContext: ContextProps = useMemo(
    () => ({ active, setActive }),
    [active, setActive]
  );

  return (
    <div>
      <meta name="title" content={`${MetaTitle} Legends`} />
      <p className="container-fluid text-center">
        <img
          src="/media/images/logo_legends.png"
          alt="The SCND Genesis: Legends"
          className="img-fluid"
        />
      </p>
      <TabContext.Provider value={tabContext}>
        <div className="header-container container-fluid">
          <div className="row">
            <div className="col-sm-1 col-md-2 col-xl-3" />
            <div className="col-sm-10 col-md-8 col-xl-6">
              <div className="row text-center">
                <AppLink to={LegendTab.Info} label="Info" />
                <AppLink to={LegendTab.Features} label="Features" />
                <AppLink to={LegendTab.Screenshots} label="Screenshots" />
                <AppLink to={LegendTab.Faq} label="FAQ" />
                <AppLink to={LegendTab.Requirements} label="Requirements" />
              </div>
            </div>
            <div className="col-sm-1 col-md-2 col-xl-3" />
          </div>
        </div>
        <div className="main-container" style={{ marginTop: "1em" }}>
          <Outlet />
        </div>
      </TabContext.Provider>
    </div>
  );
};

export const Legends: React.FC = withTabContext(Impl, Tab.Legends);
