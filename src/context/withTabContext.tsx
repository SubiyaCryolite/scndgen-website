import { useEffect, FC, ComponentType, useContext } from "react";

import { TabContext } from "./TabContext";

export const withTabContext = <P extends object>(
  Component: ComponentType<P>,
  tab: string,
  ns: string
): FC<P> => {
  const WithTabContext = () => {
    const { setActive } = useContext(TabContext);

    useEffect(() => {
      setActive((prv) => ({ ...prv, [ns]: tab }));
    }, [setActive]);

    return <Component />;
  };

  return WithTabContext;
};
