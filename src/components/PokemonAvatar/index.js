import React from "react";
import { StyledPokemonAvatar, StyledPokemonName } from "./Styled";
import PokemonType from "./components/PokemonType";

const PokemonAvatar = ({ data }) => {
    const { name, sprites, types } = data;

    console.log(types);

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

export default PokemonAvatar;
