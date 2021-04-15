import React from "react";
import PokemonAvatar from "./PokemonAvatar";
import PokedexHeader from "./PokedexHeader";
import PokemonSearchForm from "./PokemonSearchForm";

function PokemonContainer() {
    return (
        <>
            <PokedexHeader />
            <PokemonAvatar />
            <PokemonSearchForm />
        </>
    );
}

export default PokemonContainer;
