import React, { useEffect } from "react";
import { connect } from "react-redux";
import PokemonAvatar from "./PokemonAvatar";
import PokedexHeader from './PokedexHeader'
import PokemonSearchForm from "./PokemonSearchForm";

function PokemonContainer({ loading, pokemonData }) {

    // Effects
    useEffect(() => {
        pokemonData && console.log(pokemonData);
    }, [pokemonData]);

    return (
        <>
            <PokedexHeader></PokedexHeader>
            <PokemonSearchForm/>
            {loading ? (
                "Loading...."
            ) : pokemonData ? (
                <PokemonAvatar data={pokemonData} />
            ) : (
                ""
            )}

        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.pokemon.loading,
    pokemonData: state.pokemon.pokemonData,
});

export default connect(mapStateToProps, null)(PokemonContainer);
