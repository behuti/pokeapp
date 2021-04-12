import { SEARCH_POKEMON } from "./pokemonTypes";

export const searchPokemon = (pokemonName = "") => ({
	type: SEARCH_POKEMON,
	payload: pokemonName,
});
