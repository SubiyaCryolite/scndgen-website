import { useContext } from "react";
import { Link, To } from "react-router-dom";

import { TabContext } from "../context/TabContext";

interface Props {
  label: string;
  to: To;
  tab?: string;
  /**
   * Namespace, depending on the level of tab
   */
  ns?: string;
}

export const AppLink: React.FC<Props> = (props) => {
  const { label, to, ns = "top" } = props;

  const { active } = useContext(TabContext);

  const isActive = active[ns] === to;

  let className = "header-white col";
  if (isActive) className += " highlight-on";

  return (
    <div className={className}>
      <Link to={to}>{label}</Link>
    </div>
  );
};
