import NavList from "./NavList";

const NavBar = (props) => {
  const menuClassName = props.isMenuOpen ? "nav__menu show" : "nav__menu";

  return (
    <nav className="nav bd-grid">
      <div>
        <a href="#home" className="nav__logo">
          Khang Le
        </a>
      </div>

      <div className={menuClassName} id="nav-menu">
        <NavList />
      </div>

      <div
        className="nav__toggle"
        id="nav-toggle"
        onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
      >
        <i className="bx bx-menu"></i>
      </div>
    </nav>
  );
};

export default NavBar;
