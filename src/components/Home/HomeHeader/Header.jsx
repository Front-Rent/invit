import { Link } from "react-router-dom";

import Logo from "../../assets/images/HomeImages/logo.png";
import DropDown from "./DropDown/DropDown";

import "./Header.scss";
import GravitationButton from "../HomeMain/SearchSection/GravitationButton/GravitationButton";

const Header = () => {
  return (
    <nav className="header-nav">
      <div className="header-nav-logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/birthday">Ծննդյան Հրավիրատոմսեր</Link>
        </li>
        <li>
          <Link to="/wedding">Հարսանեկան Հրավիրատոմսեր</Link>
        </li>
        <li>Նշանադրության Հրավիրատոմսեր</li>
      </ul>
      <DropDown />
      {/* <div className="header-nav-phone">
        <p>+374 94 778199</p>
      </div> */}
      <GravitationButton text="+374 94 778199" />
    </nav>
  );
};

export default Header;
