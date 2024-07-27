import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-scroll";

import "./HeaderDropDawn.scss";

const HeaderDropDawn = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <div className="drop-dawn">
      <AiOutlineMenu
        className="drop-dawn-burger-menu"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div className={`drop-dawn-menu ${open ? "active" : "inactive"} `}>
        <ul className="drop-dawn-menu-ul">
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
      </div>
    </div>
  );
};

export default HeaderDropDawn;
