import NavList from "./NavList";

const NavBar = (props) => {
  const menuClassName = props.isMenuOpen ? "nav__menu show" : "nav__menu";

  return (
    <nav className="nav bd-container bd-grid" data-testid="nav-bar">
      <div>
        <a href="." className="nav__logo">
          Khang Le
        </a>
      </div>

      <div className={menuClassName} data-testid="nav-list">
        <NavList />
      </div>

      <div
        className="nav__toggle"
        id="nav-toggle"
        data-testid="nav-toggle"
        onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
      >
        <i className="bx bx-menu"></i>
      </div>
    </nav>
  );
};

export default NavBar;
