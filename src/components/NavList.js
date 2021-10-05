import { useState, useEffect } from "react";

const NavList = () => {
    const [active, setActive] = useState(window.location.hash || "#home");
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem("selected-theme") === "dark";
        setDarkTheme(isDark);
        document.body.classList[isDark ? "add" : "remove"]("dark__theme");
    }, [])

    const toggleDarkTheme = (isDark) => {
        setDarkTheme(isDark);
        document.body.classList.toggle("dark__theme", isDark);
        localStorage.setItem("selected-theme", isDark ? "dark" : "light");
    }

    const getIcon = () => {
        if (darkTheme) {
            return "bx-sun";
        } else {
            return "bx-moon";
        }
    }

    const getClassNameForNavLink = (hash) => {
        const rootName = "nav__link";
        if (hash === active) {
            return rootName + " active";
        } else {
            return rootName;
        }
    };

    return (
        <ul className="nav__list">
            <li className="nav__item"><a href="#home" className={getClassNameForNavLink("#home")} onClick={() => setActive("#home")}>Home</a></li>
            <li className="nav__item"><a href="#about" className={getClassNameForNavLink("#about")} onClick={() => setActive("#about")}>About</a></li>
            <li className="nav__item"><a href="#skills" className={getClassNameForNavLink("#skills")} onClick={() => setActive("#skills")}>Skills</a></li>
            <li className="nav__item"><a href="#projects" className={getClassNameForNavLink("#projects")} onClick={() => setActive("#projects")}>Projects</a></li>
            <li className="nav__item"><a href="#work" className={getClassNameForNavLink("#work")} onClick={() => setActive("#work")}>Work</a></li>
            {/* light/dark theme toggle */}
            <li><i className={`bx ${getIcon()} change__theme`} id="theme-button" onClick={() => toggleDarkTheme(!darkTheme)}></i></li>
        </ul>
    );
}

export default NavList;