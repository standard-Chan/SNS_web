import { Link } from "react-router-dom";

const Navigation = ({userObj}) => {
  return (
    <div>
      <ul className="navigation__ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">{userObj.displayName}Profile</Link></li>
      </ul>
    </div>

  );
}

export default Navigation;