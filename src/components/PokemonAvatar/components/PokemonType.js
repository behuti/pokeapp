import React from "react";
import Theme from "../../../styles/theme";
import { StyledPokemonType } from "./../Styled";

const PokemonType = ({ type }) => {
    return (
        <Theme>
            <StyledPokemonType type={type.type.name}>
                {type.type.name}
            </StyledPokemonType>
        </Theme>
    );
};

export default PokemonType;
