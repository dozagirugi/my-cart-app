import "./Navbar.css";

import LinkWithIcon from "./LinkWithIcon";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";

const Navbar = () => {
  return (
    <nav className="align-center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">My Cart</h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="제품 찾기"
          />
          <button type="submit" className="search_button">
            검색
          </button>
        </form>

        <div className="align_center navbar_links">
          <LinkWithIcon title="홈페이지" link="/" emoji={rocket} />
          <LinkWithIcon title="상품들" link="/products" emoji={star} />
          <LinkWithIcon title="로그인" link="/login" emoji={idButton} />
          <LinkWithIcon title="가입" link="/signup" emoji={memo} />
          <LinkWithIcon title="내 주문" link="/myorder" emoji={order} />
          <LinkWithIcon title="로그아웃" link="/" emoji={lock} />
          <a href="/cart" className="align_center">
            장바구니 <p className="align_center cart_counts">0</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
