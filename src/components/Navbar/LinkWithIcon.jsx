import "./LinkWithIcon.css";
import "./Navbar";

const LinkWithIcon = ({ title, link, emoji }) => {
  return (
    <div>
      <a href={link} className="align_center">
        {title} <img src={emoji} alt="" className="link_emoji" />
      </a>
    </div>
  );
};

export default LinkWithIcon;
