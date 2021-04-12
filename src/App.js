import React from "react";
import "./App.css";
import PokemonContainer from "./components/PokemonContainer";
import BerryContainer from './components/BerryContainer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>PokeApp</h1>
				<PokemonContainer></PokemonContainer>
        <BerryContainer></BerryContainer>
			</header>
		</div>
	);
}

export default App;
