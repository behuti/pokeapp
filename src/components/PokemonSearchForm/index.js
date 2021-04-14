import React, { useState } from "react";
import { connect } from "react-redux";
import {
    clearPokemonData,
    fetchPokemon,
} from "../../redux/pokemon/pokemonActions";
import Theme from "../../styles/theme";

import { StyledForm, ClearButton, SearchButton } from "./Styled";

const PokemonSearchForm = ({ fetchPokemon, clearPokemonData }) => {
    // State
    const [pokeName, setPokeName] = useState("");

    return (
        <Theme>
            <StyledForm className="pokemon-search">
                <h1>What Pokemon are you looking for?</h1>
                <input
                    className="pokemon-search__input"
                    type="text"
                    value={pokeName}
                    onChange={(e) => setPokeName(e.target.value)}
                />
                <br />
                <ClearButton
                    onClick={() => {
                        clearPokemonData();
                        setPokeName("");
                    }}
                >
                    Clear
                </ClearButton>

                <SearchButton
                    onClick={() => {
                        fetchPokemon(pokeName);
                    }}
                >
                    Search
                </SearchButton>
            </StyledForm>
        </Theme>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchPokemon: (pokemonName) => dispatch(fetchPokemon(pokemonName)),
    clearPokemonData: () => dispatch(clearPokemonData()),
});

export default connect(null, mapDispatchToProps)(PokemonSearchForm);
