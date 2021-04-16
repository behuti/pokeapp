import {
    FETCH_POKEMON_REQUEST,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_ERROR,
    SET_POKEMON_ERROR,
    CLEAR_POKEMON_DATA,
} from "./pokemonTypes";

const initialState = {
    pokemon: "",
    loading: false,
    pokemonInfo: null,
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
                pokemonInfo: action.payload,
                error: "",
            };

        case FETCH_POKEMON_ERROR:
            return {
                ...state,
                loading: false,
                pokemonInfo: null,
                error: action.payload,
            };

        case CLEAR_POKEMON_DATA:
            return {
                ...state,
                loading: false,
                pokemonInfo: null,
                error: "",
            };

        case SET_POKEMON_ERROR:
            return {
                ...state,
                loading: false,
                pokemonInfo: null,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default pokemonReducer;
