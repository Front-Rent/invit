import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./DropDown.scss";

const DropDown = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);
  return (
    <div className="home-drop-dawn">
      <AiOutlineMenu
        className="home-drop-dawn-burger-menu"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div className={`home-drop-dawn-menu ${open ? "active" : "inactive"} `}>
        <ul className="home-drop-dawn-menu-ul">
          <li>
            <Link>Ծննդյան Հրավիրատոմսեր</Link>
          </li>
          <li>
            <Link>Հարսանեկան Հրավիրատոմսեր</Link>
          </li>
          <li>
            <Link>Նշանադրության Հրավիրատոմսեր</Link>
          </li>
          <li>
            <p>+374 94 778199</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
