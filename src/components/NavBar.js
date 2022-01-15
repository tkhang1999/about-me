import { useState } from "react";
import NavList from "./NavList";

const NavBar = () => {
  const [toggleShow, setToggleShow] = useState(false);

  const getClassNameForMenu = () => {
    return toggleShow ? "nav__menu show" : "nav__menu";
  };

  return (
    <nav className="nav bd-grid">
      <div>
        <a href="#home" className="nav__logo">
          Khang Le
        </a>
      </div>

      <div className={getClassNameForMenu()} id="nav-menu">
        <NavList />
      </div>

      <div
        className="nav__toggle"
        id="nav-toggle"
        onClick={() => setToggleShow(!toggleShow)}
      >
        <i className="bx bx-menu"></i>
      </div>
    </nav>
  );
};

export default NavBar;
