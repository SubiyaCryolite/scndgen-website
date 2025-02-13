import React, { useContext, useEffect } from "react";

import { TabContext } from "./TabContext";

export const withTabContext = (
  Component: React.ComponentType,
  tab: string,
): React.FC => {
  const WithTabContext = () => {
    const { setActive } = useContext(TabContext);

    useEffect(() => {
      setActive(tab);
    }, [setActive]);

    return <Component />;
  };

  return WithTabContext;
};
