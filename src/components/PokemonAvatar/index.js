import React from "react";
import { StyledPokemonAvatar } from "./Styled";
import Theme from "../../styles/theme";
import Screen from "./components/Screen";

const PokemonAvatar = () => {
    return (
        <Theme>
            <StyledPokemonAvatar className="pokemon-avatar">
                <Screen />
            </StyledPokemonAvatar>
        </Theme>
    );
};

export default PokemonAvatar;
