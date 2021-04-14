import React from "react";
import {StyledPokemonAvatar, StyledPokemonName} from './Styled';

const PokemonAvatar = ({ data }) => {
    const { name, sprites } = data;

    return (
        <StyledPokemonAvatar className="pokemon-avatar">
            <StyledPokemonName className="pokemon-avatar__title">{name}</StyledPokemonName>
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
