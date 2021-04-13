import { axios } from "axios";
import { FETCH_BERRY_ERROR, FETCH_BERRY_SUCCESS, FETCH_BERRY_REQUEST } from "./berryTypes";
import { BASE_URL } from "./../../lib/api";

const fetchBerryRequest = () => ({
	type: FETCH_BERRY_REQUEST,
});

const fetchBerrySuccess = (berryData) => ({
	type: FETCH_BERRY_SUCCESS,
	payload: berryData,
});

const fetchBerryErrror = (error) => ({
	type: FETCH_BERRY_ERROR,
	payload: error,
});

export const fetchBerry = (berry) => {
	return (dispatch) => {
		dispatch(fetchBerryRequest());

		axios
			.get(`${BASE_URL}/berry/${berry}`)
			.then((response) => {
				const berryData = response.data();

				dispatch(fetchBerrySuccess(berryData));
			})
			.catch((err) => {
				const error = err.message;

				dispatch(fetchBerryErrror(error));
			});
	};
};
