import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
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
			</main>
		</div>
	);
}

export default App;
