import { Tab } from "../../constants";
import { withTabContext } from "../../context";

import { Outlet } from "react-router-dom";

const Impl: React.FC = () => {
  return <Outlet />;
};

export const Comics = withTabContext(Impl, Tab.Comics);
