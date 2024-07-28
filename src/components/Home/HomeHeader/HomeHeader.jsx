import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import "./HomeHeader.scss";
import DropDown from "./DropDown/DropDown";

const HomeHeader = () => {
  return (
    <nav className="header-nav">
      <div className="header-nav-logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul>
        <li>Ծննդյան Հրավիրատոմսեր</li>
        <li>
          <Link to="/weedeng">Հարսանեկան Հրավիրատոմսեր</Link>
        </li>
        <li>Նշանադրության Հրավիրատոմսեր</li>
      </ul>
      <DropDown />
      <div className="header-nav-phone">
        <p>+374 94 778199</p>
      </div>
    </nav>
  );
};

export default HomeHeader;
