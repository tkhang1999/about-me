import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const scrollReveal = () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 600,
    reset: false,
  });

  // reveal home section at first load
  sr.reveal(".home__title", {});
  sr.reveal(".home__content", { delay: 200 });
  sr.reveal(".home__button", { delay: 400 });
  sr.reveal(".home__social-icon", { delay: 600, interval: 200 });
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    scrollReveal();
  }, []);

  const onClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      <header className="l-header">
        {/* ===== NAVBAR ===== */}
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
      <main className="l-main" onClick={onClick}>
        {/* ===== HOME ===== */}
        <Home />
        {/* ===== ABOUT ===== */}
        <About />
        {/* ===== SKILLS ===== */}
        <Skills />
        {/* ===== WORK ===== */}
        <Work />
        {/* ===== PROJECTS ===== */}
        <Projects />
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default App;
