import { Tab } from "@/constants";
import { withTabContext } from "@/context";

import { Outlet } from "react-router-dom";

const Impl: React.FC = () => {
  return (
    <div className="main-container" style={{ marginTop: "1em" }}>
      <Outlet />
    </div>
  );
};

export const Comics = withTabContext(Impl, Tab.Comics);
