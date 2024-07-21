import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { useAppLink } from "../hooks";

export const AppLink = (props) => {
  const { label, to, index, context = "def" } = props;

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

AppLink.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  context: PropTypes.string,
  index: PropTypes.bool,
};
