import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "./../redux/pokemon/pokemonActions";

import PokemonAvatar from "./PokemonAvatar";

function PokemonContainer({ loading, pokemon, fetchPokemon, pokemonData }) {
    // States
    const [pokeName, setPokeName] = useState("");

    // Effects
    useEffect(() => {
        pokemonData && console.log(pokemonData);
    }, [pokemonData]);

    return loading ? (
        "Loading...."
    ) : (
        <>
            <div>
                <h2>Pokemon {pokemon}</h2>
                <input
                    type="text"
                    value={pokeName}
                    onChange={(e) => setPokeName(e.target.value)}
                />
                <button onClick={() => fetchPokemon(pokeName)}>
                    Search pokemon
                </button>
                {pokemonData ? <PokemonAvatar data={pokemonData} /> : ""}
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.pokemon.loading,
    pokemon: state.pokemon.pokemon,
    pokemonData: state.pokemon.pokemonData,
});

const mapDispatchToProps = (dispatch) => ({
    fetchPokemon: (pokemonName) => dispatch(fetchPokemon(pokemonName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
