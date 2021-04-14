import React from "react";
import { connect } from "react-redux";

import { StyledPokemonAvatar, StyledPokemonName } from "./Styled";
import PokemonType from "./components/PokemonType";

const PokemonAvatar = ({ loading, pokemonData }) => {
    
    const { name, sprites, types } = pokemonData;

    return (
        <StyledPokemonAvatar className="pokemon-avatar">
            {/* Pokémon Name */}
            <StyledPokemonName className="pokemon-avatar__title">
                {name}
            </StyledPokemonName>

            {/* Print the Pokémon types */}
            {types.map((type, i) => (
                <PokemonType key={i} type={type} />
            ))}

            <br/>
            <img
                className="pokemon-avatar__picture"
                src={
                    sprites.versions["generation-v"]["black-white"].animated
                        .front_default
                }
                alt={name}
            />
        </StyledPokemonAvatar>
    );
};

const mapStateToProps = state => ({
    loading: state.pokemon.loading,
    pokemonData: state.pokemon.pokemonData
})

export default connect(mapStateToProps, null)(PokemonAvatar);
