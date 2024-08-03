import { useEffect, FC, ComponentType, useContext } from "react";

import { TabContext } from "./TabContext";

export const withTabContext = <P extends object>(
  Component: ComponentType<P>,
  tab: string
): FC<P> => {
  const WithTabContext = () => {
    const { setActive } = useContext(TabContext);

    useEffect(() => {
      setActive(tab);
    }, [setActive]);

    return <Component />;
  };

  return WithTabContext;
};
