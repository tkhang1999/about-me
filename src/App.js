import { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
