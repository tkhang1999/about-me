import { useState } from "react";

const NavLink = () => {
    const [active, setActive] = useState(window.location.hash || "#home");

    const getClassNameForNavLink = (hash) => {
        const rootName = "nav__link";
        if (hash === active) {
            return rootName + " active";
        } else {
            return rootName;
        }
    }

    return (
        <ul className="nav__list">
            <li className="nav__item"><a href="#home" className={getClassNameForNavLink("#home")} onClick={() => setActive("#home")}>Home</a></li>
            <li className="nav__item"><a href="#about" className={getClassNameForNavLink("#about")} onClick={() => setActive("#about")}>About</a></li>
            <li className="nav__item"><a href="#skills" className={getClassNameForNavLink("#skills")} onClick={() => setActive("#skills")}>Skills</a></li>
            <li className="nav__item"><a href="#work" className={getClassNameForNavLink("#work")} onClick={() => setActive("#work")}>Experience</a></li>
            {/* <li className="nav__item"><a href="#contact" className={getClassNameForNavLink("#contact")} onClick={() => setActive("#contact")}>Contact</a></li> */}
        </ul>
    );
}

export default NavLink;