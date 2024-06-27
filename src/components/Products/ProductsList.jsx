import React, { Fragment } from "react";
import ProductCard from "./ProductCard";
import FeaturedProducts from "../Home/FeaturedProducts";
import apiClient from "../../utils/api-client";

import { useState, useEffect } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err));
  }, []);

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

      <FeaturedProducts />

      {/* <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {products.map((product) => (
          <ProductCard key={product._id} />
        ))}
      </div> */}
    </section>
  );
};

export default ProductsList;
