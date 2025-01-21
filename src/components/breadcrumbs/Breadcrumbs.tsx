import Breadcrumb, { BreadcrumbProps } from "./Breadcrumb";

import React from "react";

interface BreadcrumbsProps {
  list: BreadcrumbProps[];
}

interface CustomInlineStyles extends React.CSSProperties {
  "--counter"?: number;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ list }) => {
  return (
    <ul className="breadcrumbs space-y-2">
      {list.map((item, index) => (
        <li
          key={index}
          style={{ "--counter": index + 1 } as CustomInlineStyles}
        >
          <Breadcrumb {...item} />
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
