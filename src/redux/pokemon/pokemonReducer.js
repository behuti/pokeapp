import { SEARCH_POKEMON } from "./pokemonTypes";

const initialState = {
	pokemon: "",
};

const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_POKEMON:
			return {
				...state,
				pokemon: action.payload,
			};

		default:
			return state;
	}
};

export default pokemonReducer;
