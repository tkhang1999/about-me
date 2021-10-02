import NavList from "./NavList";

const NavBar = () => {
    
    return (
        <nav className="nav bd-grid">
            <div>
                <a href="#home" className="nav__logo">Khang Le</a>
            </div>

            <div className="nav__menu" id="nav-menu">
                <NavList />
            </div>

            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>
        </nav>
    );
}

export default NavBar;