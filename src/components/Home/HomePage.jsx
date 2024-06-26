import React from "react";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";

import iphone from "../../assets/iphone-14-pro.webp";
import macBook from "../../assets/mac-system-cut.jfif";
import ProductsPage from "../Products/ProductsPage";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="아이폰 14를 구매하세요 ! 진짜 좋음"
        subtitle="어쩌구저쩌구 좋다면 그냥 사"
        link="/"
        image={iphone}
      />

      <ProductsPage />

      <HeroSection
        title="궁극의 장비를 세팅하세요 어쩌구"
        subtitle="이것도 좋다잖아 그냥 사 ~"
        link="/"
        image={macBook}
      />
    </div>
  );
};

export default HomePage;
