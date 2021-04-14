import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR, CLEAR_POKEMON_DATA } from "./pokemonTypes";

const initialState = {
	pokemon: "",
	loading: false,
	pokemonData: null,
	error: "",
};

const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POKEMON_REQUEST:
			return {
				...state,
				loading: true,
			};

		case FETCH_POKEMON_SUCCESS:
			return {
				...state,
				loading: false,
				pokemonData: action.payload,
				error: "",
			};

		case FETCH_POKEMON_ERROR:
			return {
				...state,
				loading: false,
				pokemonData: null,
				error: action.payload,
			};

		case CLEAR_POKEMON_DATA:
			return {
				...state,
				loading: false,
				pokemonData: null,
				error: ""
			}

		default:
			return state;
	}
};

export default pokemonReducer;
