import { Outlet } from "react-router-dom";

import { AppLink } from "../../components";
import { withTabContext } from "../../context";
import { LegendTab, Tab, NS } from "../../constants";

export const Impl: React.FC = () => {
  return (
    <div>
      <p className="container-fluid text-center">
        <img
          src="/media/images/logo_legends.png"
          alt="The SCND Genesis: Legends"
          className="img-fluid"
        />
      </p>
      <div className="header-container container-fluid">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="row text-center">
              <AppLink to={LegendTab.Info} label="Info" ns={NS.Lgd} />
              <AppLink to={LegendTab.Features} label="Features" ns={NS.Lgd} />
              <AppLink
                to={LegendTab.Screenshots}
                label="Screenshots"
                ns={NS.Lgd}
              />
              <AppLink to={LegendTab.Faq} label="FAQ" ns={NS.Lgd} />
              <AppLink
                to={LegendTab.Requirements}
                label="Requirements"
                ns={NS.Lgd}
              />
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
      <div className="main-container" style={{ marginTop: "1em" }}>
        <Outlet />
      </div>
    </div>
  );
};

export const Legends = withTabContext(Impl, Tab.Legends, NS.Tld);
