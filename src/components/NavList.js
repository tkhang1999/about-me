import { useState, useEffect } from "react";

export const navItems = [
  { key: "#home", value: "Home" },
  { key: "#about", value: "About" },
  { key: "#skills", value: "Skills" },
  { key: "#projects", value: "Projects" },
  { key: "#work", value: "Work" },
];

const NavList = () => {
  const [active, setActive] = useState(window.location.hash || "#home");
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("selected-theme") === "dark";
    setDarkTheme(isDark);
    document.body.classList[isDark ? "add" : "remove"]("dark__theme");
  }, []);

  const toggleDarkTheme = (isDark) => {
    setDarkTheme(isDark);
    document.body.classList.toggle("dark__theme", isDark);
    localStorage.setItem("selected-theme", isDark ? "dark" : "light");
  };

  const getIcon = () => {
    return darkTheme ? "bx-sun" : "bx-moon";
  };

  const getClassNameForNavLink = (hash) => {
    return hash === active ? "nav__link active" : "nav__link";
  };

  return (
    <ul className="nav__list">
      {navItems.map((item) => {
        return (
          <li key={item.key} className="nav__item">
            <a
              href={item.key}
              className={getClassNameForNavLink(item.key)}
              onClick={() => setActive(item.key)}
            >
              {item.value}
            </a>
          </li>
        );
      })}
      {/* light/dark theme toggle */}
      <li>
        <i
          className={`bx ${getIcon()} change__theme`}
          id="theme-button"
          onClick={() => toggleDarkTheme(!darkTheme)}
        ></i>
      </li>
    </ul>
  );
};

export default NavList;
