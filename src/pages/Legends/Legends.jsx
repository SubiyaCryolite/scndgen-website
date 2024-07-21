import { Outlet } from "react-router-dom";
import { AppLink } from "../../components";

export const Legends = () => {
  return (
    <div>
      <p className="container-fluid text-center">
        <img
          src="/public/media/images/logo_legends.png"
          alt="The SCND Genesis: Legends"
          className="img-fluid"
        />
      </p>
      <div className="header-container container-fluid">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="row text-center">
              <AppLink context="Lgnd" label="Info" to="./" index />
              <AppLink context="Lgnd" label="Features" to="./features" />
              <AppLink context="Lgnd" label="Screenshots" to="./screenshots" />
              <AppLink context="Lgnd" label="FAQ" to="./faq" />
              <AppLink
                context="Lgnd"
                label="Requirements"
                to="./requirements"
              />
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
};
