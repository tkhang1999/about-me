import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from "./components/Skills";

const scrollReveal = () => {
	const sr = ScrollReveal({
		origin: 'top',
		distance: '80px',
		duration: 1000,
		reset: true
	});

	/*SCROLL HOME*/
	sr.reveal('.home__title',{}); 
	sr.reveal('.button',{delay: 200}); 
	sr.reveal('.home__img',{delay: 400}); 
	sr.reveal('.home__social-icon',{ interval: 200}); 

	/*SCROLL ABOUT*/
	sr.reveal('.about__img',{}); 
	sr.reveal('.about__subtitle',{}); 
	sr.reveal('.about__text',{});
	// sr.reveal('.about__subtitle',{delay: 400}); 
	// sr.reveal('.about__text',{delay: 400}); 

	/*SCROLL SKILLS*/
	sr.reveal('.skills__subtitle',{}); 
	sr.reveal('.skills__text',{}); 
	sr.reveal('.skills__list',{}); 
	// sr.reveal('.skills__data',{interval: 200}); 
	// sr.reveal('.skills__img',{delay: 600});

	/*SCROLL WORK*/
	sr.reveal('.work__img',{interval: 200}); 

	/*SCROLL CONTACT*/
	sr.reveal('.contact__input',{interval: 200}); 
}

const App = () => {
	useEffect(() => {
		scrollReveal();
    }, []);

	return (
		<div className="body">
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
			</main>
		</div>
	);
}

export default App;
