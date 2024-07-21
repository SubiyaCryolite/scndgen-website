import { Outlet, Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderLink = (props) => {
  const { label, to } = props;

  const { pathname } = useLocation();

  let className = "header-white col";
  if (pathname.includes(to)) className += " highlight-on";

  return (
    <div className={className}>
      <Link to={to}>{label}</Link>
    </div>
  );
};

HeaderLink.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};

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
                <HeaderLink to="/legacy" label="Legacy" />
                <HeaderLink to="/legends" label="Legends" />
                <HeaderLink to="/blog" label="Blog" />
                <HeaderLink to="/comics" label="Comics" />
                <HeaderLink to="/gallery" label="Gallery" />
                <HeaderLink to="/author" label="Author" />
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
