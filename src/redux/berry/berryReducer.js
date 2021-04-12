import { SEARCH_BERRY } from "./berryTypes";

const initialState = {
	berry: "",
};

const berryReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_BERRY:
			return { ...state, berry: state.berry };

		default:
			return state;
	}
};

export default berryReducer;
