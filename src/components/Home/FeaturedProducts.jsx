import React from "react";

import "./FeaturedProducts.css";
import ProductCard from "../Products/ProductCard";

import iphone from "../../assets/iphone.jpg";
import star from "../../assets/glowing-star.png";
import cart from "../../assets/basket.png";

const FeaturedProducts = () => {
  return (
    <section className="featured_products">
      <h2>주요 제품</h2>

      <div className="align_center featured_products_list">
        <ProductCard
          image={iphone}
          price="120만원"
          title="아이폰 14프로"
          starEmoji={star}
          rate="8.6"
          reviewCount="조회: 1536"
          cartEmoji={cart}
        />

        <ProductCard
          image={iphone}
          price="120만원"
          title="아이폰 14프로"
          starEmoji={star}
          rate="8.6"
          reviewCount="조회: 1536"
          cartEmoji={cart}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
