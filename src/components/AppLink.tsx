import { Link, To } from "react-router-dom";

import { useAppLink } from "../hooks";

interface Props{
  label: string,
  to: To,
  index?: boolean,
  context?: string
}

export const AppLink: React.FC<Props> = (props) => {
  const { label, to, index, context ='def' } = props;

  const { active, setActive } = useAppLink();
  const isActive = active[context] ? active[context] === to : Boolean(index);

  const handleClick = () => {
    setActive({ [context]: to });
  };

  let className = "header-white col";
  if (isActive) className += " highlight-on";

  return (
    <div className={className}>
      <Link to={to} onClick={handleClick}>
        {label}
      </Link>
    </div>
  );
};