import React from "react";
import { ThemeProvider } from "styled-components";
import { lighten } from "polished";

const theme = {
    colors: {
        pokedexRed: "#DE3D2B",
        pokedexInput: "#32CB66",
        types: {
            bug: "#85940B",
            dark: "#3E2D23",
            dragon: "#715CDE",
            electric: "#FFCE4B",
            fairy: "#F1ADF2",
            fighting: "#773420",
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
    pokemonGradient: (color) => {
        return `linear-gradient(0deg, ${color} 0%, ${color} 60%, ${lighten(
            0.05,
            color
        )} 60%, ${lighten(0.05, color)} 80%, ${lighten(
            0.1,
            color
        )} 80%, ${lighten(0.1, color)} 90%, ${lighten(
            0.15,
            color
        )} 90%, ${lighten(0.15, color)} 95%, ${lighten(
            0.2,
            color
        )} 95%, ${lighten(0.2, color)} 100%)`;
    },
    pixelatedBorderRadius: {
        step1: (width, color) => `
        ${width}px 0 ${color}, -${width}px 0 ${color}, 0 -${width}px ${color}, 0 ${width}px ${color}`,
        step2: (width, color, bgColor) =>
            `${width}px 0 ${bgColor}, -${width}px 0 ${bgColor}, 0 -${width}px ${bgColor}, 0 ${width}px ${bgColor}, ${2*width}px 0 ${color}, -${2*width}px 0 ${color}, 0 -${2*width}px ${color}, 0 ${2*width}px ${color}, 0 0 0 ${width}px ${color}`,
        step3: (
            width,
            color,
            bgColor
        ) => `${width}px 0 ${bgColor}, -${width}px 0 ${bgColor}, 0 (-${width}px) ${bgColor}, 0 ${width}px ${bgColor}, ${2*width}px 0 ${bgColor}, ${-2*width}px 0 ${bgColor}, 0 (${-2*width}px) ${bgColor}, 0 ${2*width}px ${bgColor}, 0 0 0 ${width}px ${bgColor}, ${3*width}px 0 ${color}, ${-3*width}px 0 ${color}, 0 ${3*width}px ${color}, 0 (-${3*width}px) ${color}, 0 (-${width}px) 0 ${width}px ${color}, 0 ${width}px 0 ${width}px ${color}, ${width}px 0 0 ${width}px ${color}, -${width}px 0 0 ${width}px ${color}
        `,
        step4: (
            width,
            color,
            bgColor
        ) => `${width}px 0 ${bgColor}, -${width}px 0 ${bgColor}, 0 -${width}px ${bgColor}, 0 ${width}px ${bgColor}, ${2*width}px 0 ${bgColor}, -${2*width}px 0 ${bgColor}, 0 -${2*width}px ${bgColor}, 0 ${2*width}px ${bgColor}, 0 0 0 ${width}px ${bgColor}, ${3*width}px 0 ${bgColor}, -${3*width}px 0 ${bgColor}, 0 ${3*width}px ${bgColor}, 0 -${3*width}px ${bgColor}, 0 -${width}px 0 ${width}px ${bgColor}, 0 ${width}px 0 ${width}px ${bgColor}, ${width}px 0 0 ${width}px ${bgColor}, -${width}px 0 0 ${width}px ${bgColor}, ${4*width}px 0 ${color}, -${4*width}px 0 ${color}, 0 -${4*width}px ${color}, 0 ${4*width}px ${color}, ${2*width}px 0 0 ${width}px ${color}, -${2*width}px 0 0 ${width}px ${color}, 0 ${2*width}px 0 ${width}px ${color}, 0 -${2*width}px 0 ${width}px ${color}, 0 0 0 ${2*width}px ${color}
        `,
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
