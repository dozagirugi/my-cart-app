import React from "react";

import "./ProductCard.css";

const ProductCard = ({
  image,
  price,
  title,
  starEmoji,
  rate,
  reviewCount,
  cartEmoji,
}) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <a href="product/1">
          <img src={image} alt="product image" />
        </a>
      </div>

      <div className="product_details">
        <h3 className="product_price">{price}</h3>
        <p className="product_title">{title}</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={starEmoji} alt="평점" />
              {rate}
            </p>
            <p className="product_review_count">{reviewCount}</p>

            <button className="add_to_cart">
              <img src={cartEmoji} alt="장바구니 버튼" />
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
