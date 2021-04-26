import PokemonMock from "../../../__mocks__/PokemonMock";
import {
    fetchPokemon,
    fetchPokemonRequest,
    fetchPokemonSuccess,
    fetchPokemonError,
    setPokemonError,
    clearPokemonData,
} from "./../../../redux/pokemon/pokemonActions";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Pokemon Actions", () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    //TODO: Test fetchPokemon action

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
