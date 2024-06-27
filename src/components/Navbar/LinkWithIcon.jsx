import "./LinkWithIcon.css";
import "./Navbar";

import { NavLink } from "react-router-dom";

const LinkWithIcon = ({ title, link, emoji }) => {
  return (
    <div>
      <NavLink to={link} className="align_center">
        {title} <img src={emoji} alt="" className="link_emoji" />
      </NavLink>
    </div>
  );
};

export default LinkWithIcon;
