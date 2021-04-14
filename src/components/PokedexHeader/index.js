import React from "react";
import Theme from "../../styles/theme";
import { Header } from "./Styled";
import Separator from "./../../assets/separator.svg";

const PokedexHeader = () => {
    return (
        <Theme>
            <Header>
                <span className="pokemon-search__blueIndicator"> </span>
                <span className="pokemon-search__redIndicator"> </span>
                <span className="pokemon-search__yellowIndicator"> </span>
                <span className="pokemon-search__greenIndicator"> </span>
                <img
                    className="pokemon-search__separator"
                    src={Separator}
                    alt="Pokedex Header Separator"
                />
            </Header>
        </Theme>
    );
};

export default PokedexHeader;
