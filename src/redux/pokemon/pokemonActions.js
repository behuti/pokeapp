import axios from "axios";
import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_ERROR, FETCH_POKEMON_SUCCESS, CLEAR_POKEMON_DATA } from "./pokemonTypes";
import { BASE_URL } from './../../lib/api';

const fetchPokemonRequest = () => ({
	type: FETCH_POKEMON_REQUEST,
});

const fetchPokemonSuccess = (pokemon) => ({
	type: FETCH_POKEMON_SUCCESS,
	payload: pokemon,
});

const fetchPokemonError = (error) => ({
	type: FETCH_POKEMON_ERROR,
	payload: error,
});

export const clearPokemonData = () => ({
	type: CLEAR_POKEMON_DATA
})

export const fetchPokemon = (pokemonName) => {
	return (dispatch) => {
		dispatch(fetchPokemonRequest());

		axios
			.get(`${BASE_URL}/pokemon/${pokemonName}`)
			.then((response) => {
				const pokemon = response.data;
				dispatch(fetchPokemonSuccess(pokemon));
			})
			.catch((err) => {
				const error = err.message;
				dispatch(fetchPokemonError(error));
			});
	};
};