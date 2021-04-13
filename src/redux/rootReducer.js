import { combineReducers } from "redux";
import pokemonReducer from "./pokemon/pokemonReducer";

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});

export default rootReducer;
