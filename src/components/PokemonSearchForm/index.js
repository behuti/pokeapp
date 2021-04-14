import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../../redux/pokemon/pokemonActions";
import Theme from "../../styles/theme";

import { StyledForm, StyledButton } from "./Styled";

// assets
import PokeBorder from './../../assets/separator.svg'

const PokemonSearchForm = ({ fetchPokemon }) => {
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
                <StyledButton
                    onClick={() => {
                        fetchPokemon(pokeName);
                    }}
                >
                    Search pokemon
                </StyledButton>
            </StyledForm>
        </Theme>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchPokemon: (pokemonName) => dispatch(fetchPokemon(pokemonName)),
});

export default connect(null, mapDispatchToProps)(PokemonSearchForm);
