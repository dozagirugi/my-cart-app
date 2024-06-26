import React from "react";

import LinkWithIcon from "../Navbar/LinkWithIcon";
import "./ProductsSidebar.css";

import rocket from "../../assets/rocket.png";

const ProductsSidebar = () => {
  return (
    <aside className="products_sidebar">
      <h2>카테고리</h2>

      <div className="category_links">
        <LinkWithIcon
          title="전자제품"
          link="products?category=electronics"
          emoji={rocket}
          sidebar={true}
        />
      </div>
    </aside>
  );
};

export default ProductsSidebar;
