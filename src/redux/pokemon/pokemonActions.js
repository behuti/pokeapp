import { BASE_URL } from "./../../lib/api";
import axios from "axios";
import {
    FETCH_POKEMON_REQUEST,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_ERROR,
    SET_POKEMON_ERROR,
    CLEAR_POKEMON_DATA,
} from "./pokemonTypes";

export const fetchPokemonRequest = () => ({
    type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonSuccess = (pokemon) => ({
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
});

export const fetchPokemonError = (error) => ({
    type: FETCH_POKEMON_ERROR,
    payload: error,
});

export const fetchPokemon = (pokemonName) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest());

        const pokemonData = `${BASE_URL}/pokemon/${pokemonName}`;
        //This second url allow us to fetch the descriptions of the pokemon
        const pokemonDesc = `${BASE_URL}/pokemon-species/${pokemonName}`;

        const getPokemonData = axios.get(pokemonData);
        const getPokemonDesc = axios.get(pokemonDesc);

        axios
            .all([getPokemonData, getPokemonDesc])
            .then(
                axios.spread((...allData) => {
                    const pokemonData = allData[0].data;
                    const pokemonDesc = allData[1].data;

                    //This is the final object that contains all the pokemon info
                    const pokemon = { pokemonData, pokemonDesc };
                    dispatch(fetchPokemonSuccess(pokemon));
                })
            )
            .catch((err) => {
                const error = err.message;
                if (error === "Request failed with status code 404") {
                    dispatch(fetchPokemonError("Is this a new pokemon?"));
                } else {
                    dispatch(fetchPokemonError(error));
                }
            });
    };
};

export const clearPokemonData = () => ({
    type: CLEAR_POKEMON_DATA,
});

export const setPokemonError = (errorMessage) => ({
    type: SET_POKEMON_ERROR,
    payload: errorMessage,
});
