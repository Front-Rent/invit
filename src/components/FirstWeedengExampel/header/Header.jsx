import { Link } from "react-scroll";

import HeaderDropDawn from "./headerDropDawn/HeaderDropDawn";

import "./Header.scss";

const Header = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav-menu">
        <li>
          <Link to="glxavor" smooth={true} duration={500} offset={-70}>
            Գլխավոր
          </Link>
        </li>
        <li>
          <Link to="erbEvVortex" smooth={true} duration={500} offset={-70}>
            Երբ և որտեղ
          </Link>
        </li>
        <li>
          <Link to="hethasvark" smooth={true} duration={500} offset={-70}>
            Հետհաշվարկ
          </Link>
        </li>
        <li>
          <Link to="manramasner" smooth={true} duration={500} offset={-70}>
            Մանրամասներ
          </Link>
        </li>
        <li>
          <Link to="esHamadzaynEm" smooth={true} duration={500} offset={-70}>
            Ես Համաձայն եմ
          </Link>
        </li>
      </ul>
      <HeaderDropDawn />
    </nav>
  );
};

export default Header;
