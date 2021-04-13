import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchBerry } from "./../redux/berry/berryActions";

function BerryContainer({ loading, berryData, fetchBerry }) {
    // States
    const [berryTerm, setBerryTerm] = useState("");

    // Effects
    useEffect(() => {
        console.log(berryData);
    }, [berryData]);

    return (
        <>
            <h2>Berries</h2>
            <input
                type="text"
                value={berryTerm}
                onChange={(e) => setBerryTerm(e.target.value)}
            />
            <button onClick={() => fetchBerry(berryTerm)}>Search berry</button>
            {loading ? "Loading..." : ""}
        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.berry.loading,
    berryData: state.berry.berryData,
});

const mapDispatchToProps = (dispatch) => ({
    fetchBerry: (berryTerm) => dispatch(fetchBerry(berryTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BerryContainer);
