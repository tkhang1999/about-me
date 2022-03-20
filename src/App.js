import { useEffect } from "react";
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
  sr.reveal(".home__button", { delay: 200 });
  sr.reveal(".home__social-icon", { delay: 400, interval: 200 });
};

const App = () => {
  useEffect(() => {
    scrollReveal();
  }, []);

  return (
    <div>
      <header className="l-header">
        {/* ===== NAVBAR ===== */}
        <NavBar />
      </header>
      <main className="l-main">
        {/* ===== HOME ===== */}
        <Home />
        {/* ===== ABOUT ===== */}
        <About />
        {/* ===== SKILLS ===== */}
        <Skills />
        {/* ===== PROJECTS ===== */}
        <Projects />
        {/* ===== WORK ===== */}
        <Work />
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default App;
