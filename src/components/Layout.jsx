import { Outlet } from "react-router-dom";

import { AppLink } from "./AppLink.jsx";

export const Layout = () => {
  return (
    <>
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
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="row text-center">
                <AppLink index to="/" label="Legacy" />
                <AppLink to="/legends" label="Legends" />
                <AppLink to="/blog" label="Blog" />
                <AppLink to="/comics" label="Comics" />
                <AppLink to="/gallery" label="Gallery" />
                <AppLink to="/author" label="Author" />
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 content-area">
            <Outlet />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};
