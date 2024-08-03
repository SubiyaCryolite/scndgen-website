import { Tab } from "../../constants";
import { withTabContext } from "../../context";

export const Impl: React.FC = () => {
  return (
    <div>
      <p>
        I have a presence on&nbsp;
        <a href="https://medium.com/@ifungandana" target="_target">
          Medium
        </a>
        . My older content is on&nbsp;
        <a href="https://subiyacryolite.github.io/" target="_target">
          https://subiyacryolite.github.io/
        </a>
        .
      </p>
      <hr />
    </div>
  );
};

export const Blog = withTabContext(Impl, Tab.Blog);
