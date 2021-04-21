import PokemonMock from "../../../__mocks__/PokemonMock";
import {
    fetchPokemonRequest,
    fetchPokemonSuccess,
    fetchPokemonError,
    fetchPokemon,
    clearPokemonData,
    setPokemonError,
} from "./../../../redux/pokemon/pokemonActions";

describe("Pokemon Actions", () => {
    test("fetchPokemonRequest Action", () => {
        const expected = {
            type: "FETCH_POKEMON_REQUEST",
        };

        expect(fetchPokemonRequest()).toEqual(expected);
    });

    test("fetchPokemonSuccess Action", () => {
        const payload = PokemonMock;
        const expected = {
            type: "FETCH_POKEMON_SUCCESS",
            payload: payload,
        };

        expect(fetchPokemonSuccess(payload)).toEqual(expected);
    });

    test("fetchPokemonError Action", () => {
        const payload = PokemonMock;
        const expected = {
            type: "FETCH_POKEMON_ERROR",
            payload: payload,
        };
        expect(fetchPokemonError(payload)).toEqual(expected);
    });

    //TODO: test fetchPokemon

    test("clearPokemonData Action", () => {
        const payload = PokemonMock;
        const expected = {
            type: "CLEAR_POKEMON_DATA",
        };

        expect(clearPokemonData(payload)).toEqual(expected);
    });

    test("setPokemonError Action", () => {
        const payload = PokemonMock;
        const expected = {
            type: "SET_POKEMON_ERROR",
            payload: payload,
        };

        expect(setPokemonError(payload)).toEqual(expected);
    });
});
