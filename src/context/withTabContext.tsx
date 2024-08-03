import { useEffect, FC, ComponentType, useContext } from "react";

import { TabContext } from "./TabContext";

export const withTabContext = (Component: ComponentType, tab: string): FC => {
  const WithTabContext = () => {
    const { setActive } = useContext(TabContext);

    useEffect(() => {
      setActive(tab);
    }, [setActive]);

    return <Component />;
  };

  return WithTabContext;
};
