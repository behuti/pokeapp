import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        pokedexRed: "#DE3D2B",
        pokedexInput: '#32CB66',
        types: {
            bug: "#85940B",
            dark: "#3E2D23",
            dragon: "#715CDE",
            electric: "#FFCE4B",
            fairy: "#F1ADF2",
            figthing: "#773420",
            fire: "#E84310",
            flying: "#919FE8",
            ghost: "#5D5CA8",
            grass: "#4AB05C",
            ground: "#CDAB52",
            ice: "#97E3FA",
            normal: "#C3BDB4",
            poison: "#934795",
            psychic: "#E74A81",
            rock: "#A18B41",
            steel: "#8F8E9E",
            water: "#2E8CE7",
        },
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
