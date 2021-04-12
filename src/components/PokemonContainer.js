import React, { useState } from "react";
import { connect } from "react-redux";
import { searchPokemon } from "./../redux/pokemon/pokemonActions";

function PokemonContainer({ pokemon, searchPokemon }) {
	const [pokeName, setPokeName] = useState("");

	return (
		<div>
			<h2>Pokemon</h2>
			<input type="text" value={pokeName} onChange={(e) => setPokeName(e.target.value)} />
			<button onClick={() => searchPokemon(pokeName)}>Search pokemon</button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	pokemon: state.pokemon.pokemon,
});

const mapDispatchToProps = (dispatch) => ({
	searchPokemon: (pokeName) => dispatch(searchPokemon(pokeName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
