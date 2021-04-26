import pokemonReducer from "../../../redux/pokemon/pokemonReducer";
import PokemonMock from "./../../../__mocks__/PokemonMock";

describe("Pokemon Reducer", () => {
    test("should return initial state", () => {
        expect(pokemonReducer({}, "")).toEqual({});
    });

    test("FETCH_POKEMON_REQUEST ", () => {
        const initialState = {
            loading: false,
        };
        const action = {
            type: "FETCH_POKEMON_REQUEST",
        };
        const expected = {
            loading: true,
        };
        expect(pokemonReducer(initialState, action)).toEqual(expected);
    });
});
