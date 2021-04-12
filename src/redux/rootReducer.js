import { combineReducers } from "redux";
import berryReducer from "./berry/berryReducer";
import pokemonReducer from './pokemon/pokemonReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  berry: berryReducer
})

export default rootReducer