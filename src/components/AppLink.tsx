import React, { useContext } from "react";
import { Link, To } from "react-router";

import { TabContext } from "@/context";

interface Props {
  label: string;
  to: To;
  tab?: string;
}

export const AppLink: React.FC<Props> = (props) => {
  const { label, to } = props;

  const { active } = useContext(TabContext);

  const isActive = active === to;

  let className = "header-white col";
  if (isActive) className += " highlight-on";

  return (
    <div className={className}>
      <Link to={to}>{label}</Link>
    </div>
  );
};
