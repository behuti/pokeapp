import { FETCH_BERRY_REQUEST, FETCH_BERRY_SUCCESS, FETCH_BERRY_ERROR } from "./berryTypes";

const initialState = {
	loading: false,
	berryData: null,
	error: "",
};

const berryReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BERRY_REQUEST:
			return {
				...state,
				loading: true,
			};

		case FETCH_BERRY_SUCCESS:
			return {
				...state,
				loading: false,
				berryData: action.payload,
				error: "",
			};

		case FETCH_BERRY_ERROR:
			return {
				...state,
				loading: false,
				berryData: null,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default berryReducer;
