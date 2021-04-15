import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //This allow us to create async Actions, thanks god!
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
