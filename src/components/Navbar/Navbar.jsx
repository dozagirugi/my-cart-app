import "./Navbar.css";

const Navbar = () => {
  <nav className="align-center navbar">
    <div className="align_center">
      <h1 className="navbar_heading">myCart</h1>
      <form className="align_center navbar_form">
        <nput type="text" className="navbar_search" placeholder="제품 찾기" />
        <button type="submit" className="search_button">
          검색
        </button>
      </form>
    </div>

    <div className="align_center navbar_links" />
  </nav>;
};

export default Navbar;
