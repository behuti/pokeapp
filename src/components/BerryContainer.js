import React from "react";
import { connect } from "react-redux";
import { searchBerry } from './../redux/berry/berryActions';

function BerryContainer({ berry, searchBerry }) {
	return (
		<div>
			<h2>Berries</h2>
			<button>Search berry</button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	berry: state.berry.berry,
});

const mapDispatchToProps = (dispatch) => ({
	searchBerry: () => dispatch(searchBerry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BerryContainer);
