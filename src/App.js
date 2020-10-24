import logo from "./logo.svg";
import edmond from "./pictures/edmond.jpg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={edmond} className="App-logo" alt="logo" />
				<p>Keyforge Edmond?</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Lets play keyforge rn
				</a>
			</header>
		</div>
	);
}

export default App;
