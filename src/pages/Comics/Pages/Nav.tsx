import { Link, To } from "react-router-dom";

interface NavProps {
  next?: To;
  prev?: To;
}

export const Nav: React.FC<NavProps> = (props) => {
  const { prev, next } = props;

  return (
    <p>
      <div className="btn-group text-center">
        {prev && (
          <Link
            className="btn btn-outline-secondary"
            to={prev}
            style={{ textDecoration: "none" }}
          >
            PREVIOUS
          </Link>
        )}
        <Link
          className="btn btn-outline-secondary"
          to="../"
          style={{ textDecoration: "none" }}
        >
          ARCHIVE
        </Link>
        {next && (
          <Link
            className="btn btn-outline-secondary"
            to={next}
            style={{ textDecoration: "none" }}
          >
            NEXT
          </Link>
        )}
      </div>
    </p>
  );
};
