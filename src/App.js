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
        origin: 'top',
        distance: '80px',
        duration: 600,
        reset: true
    });

    /*SCROLL HOME*/
    sr.reveal('.home__title',{});
    sr.reveal('.button',{delay: 200});
    sr.reveal('.home__img',{delay: 200});
    sr.reveal('.home__social-icon',{ interval: 200});

    /*SCROLL ABOUT*/
    sr.reveal('.about__img',{});
    sr.reveal('.about__subtitle',{});
    sr.reveal('.about__text',{});

    /*SCROLL SKILLS*/
    sr.reveal('.skills__subtitle',{});
    sr.reveal('.skills__text',{});
    sr.reveal('.skills__list',{});

    /*SCROLL PROJECTS*/
    sr.reveal('.projects__list',{});

    /*SCROLL WORK*/
    sr.reveal('.work__list',{});
}

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
}

export default App;
