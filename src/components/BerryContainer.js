import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchBerry } from "./../redux/berry/berryActions";

function BerryContainer({ berry, fetchBerry }) {
	const [berryTerm, setBerryTerm] = useState("");

	return (
		<div>
			<h2>Berries</h2>
			<input type="text" value={berryTerm} onChange={(e) => setBerryTerm(e.target.value)} />
			<button onClick={() => fetchBerry(berryTerm)}>Search berry</button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	berryData: state.berry.berryData,
});

const mapDispatchToProps = (dispatch) => ({
	fetchBerry: () => dispatch(fetchBerry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BerryContainer);
