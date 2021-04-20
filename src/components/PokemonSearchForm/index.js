import React, { useState } from "react";
import { connect } from "react-redux";
import {
    clearPokemonData,
    fetchPokemon,
    setPokemonError,
} from "../../redux/pokemon/pokemonActions";
import Theme from "../../styles/theme";

import { StyledForm, ClearButton, SearchButton } from "./Styled";

const PokemonSearchForm = ({
    fetchPokemon,
    clearPokemonData,
    setPokemonError,
}) => {
    // State
    const [pokeName, setPokeName] = useState("");

    //Handlers
    const validateInputHandler = (input) => {
        if (input.length === 0) {
            setPokemonError('Please provide a Pokemon name or id')
        } else if (!isNaN(input)) {
            //If is number it only should be in the range of the pokemons Ids 0-898
            if (input > 0 && !input < 899) {
                fetchPokemon(input)
            } else {
                setPokemonError("Invalid Pokemon ID");
            }
        } else { //POkemon name
            fetchPokemon(input)
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        clearPokemonData();
        validateInputHandler(pokeName);
    };

    return (
        <Theme>
            <StyledForm className="pokemon-search">
                <h1 className="pokemon-search--title">What Pokemon are you looking for?</h1>
                <form onSubmit={(e) => onSubmitHandler(e)}>
                    <input
                        className="pokemon-search__input"
                        placeholder="Pokemon Name or id"
                        type="text"
                        id="pokemonName"
                        name="pokemonName"
                        value={pokeName}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                onSubmitHandler(e);
                            }
                        }}
                        onChange={(e) =>
                            setPokeName(e.target.value.toLowerCase())
                        }
                    />
                    <br />
                    <ClearButton
                        id='clearButton'
                        onClick={(e) => {
                            e.preventDefault();
                            clearPokemonData();
                            setPokeName("");
                        }}
                    >
                        Clear
                    </ClearButton>

                    <SearchButton type="submit" onClick={onSubmitHandler}>
                        Search
                    </SearchButton>
                </form>
            </StyledForm>
        </Theme>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchPokemon: (pokemonName) => dispatch(fetchPokemon(pokemonName)),
    clearPokemonData: () => dispatch(clearPokemonData()),
    setPokemonError: (errorMessage) => dispatch(setPokemonError(errorMessage)),
});

export default connect(null, mapDispatchToProps)(PokemonSearchForm);
