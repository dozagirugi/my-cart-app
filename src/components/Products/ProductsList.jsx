import React from "react";
import ProductCard from "./ProductCard";
import FeaturedProducts from "../Home/FeaturedProducts";

const ProductsList = () => {
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>상품목록</h2>

        <select name="sort" id="" className="products_sorting">
          <option value="">정렬방법</option>
          <option value="price desc">가격 높은 순</option>
          <option value="price asc">가격 낮은 순</option>
          <option value="rate desc">평점 높은 순</option>
          <option value="rate asc">평점 낮은 순</option>
        </select>
      </header>

      <div className="products_list">
        <FeaturedProducts />
      </div>
    </section>
  );
};

export default ProductsList;
