import React, { useEffect } from "react";
import { connect } from "react-redux";
import Theme from "../../../styles/theme";
import { StyledPokemonScreen, StyledPokemonName } from "./../Styled";
import Speaker from "./Speaker";
import spoken from "./../../../../node_modules/spoken/build/spoken";
import ErrorImage from "./../../../assets/snorlax.webp";
import Loader from './../../../assets/loader.gif'

const Screen = ({ loading, pokemonInfo, error }) => {
    // Read description if pokemon exists, COMMENT THIS TO NOT GET NUTS
    useEffect(() => {
        if (pokemonInfo) {
            const descriptions = pokemonInfo.pokemonDesc.flavor_text_entries.filter(
                (entrie) => entrie.language.name === "en"
            );
            const finalDescription = descriptions[0].flavor_text.replace(
                /(\r\n|\n|\r)/gm,
                " "
            );

            pokemonInfo.pokemonData.name.length > 0 &&
                spoken
                    .say(pokemonInfo.pokemonData.name)
                    .then(() => spoken.say(finalDescription));
        }
    }, [pokemonInfo]);

    return (
        <Theme>
            <StyledPokemonScreen
                displayOn={pokemonInfo ? true : false}
                type={
                    pokemonInfo
                        ? pokemonInfo.pokemonData
                            ? pokemonInfo.pokemonData.types[0].type.name
                            : "white"
                        : ""
                }
            >
                {loading && (
                    <>
                    <img
                            className="pokemon-avatar__picture "
                            src={Loader}
                            alt={'spinning pokeball'}
                        />
                    </>
                )}
                {error && (
                    <>
                        <span className='pokemon-avatar__picture--error'></span>
                        <img
                            className="pokemon-avatar__picture "
                            src={ErrorImage}
                            alt={error}
                        />
                        <StyledPokemonName className="pokemon-avatar__title">
                            {error}
                        </StyledPokemonName>
                    </>
                )}
                {pokemonInfo ? (
                    <>
                        <img
                            className="pokemon-avatar__picture"
                            src={
                                pokemonInfo &&
                                pokemonInfo.pokemonData &&
                                pokemonInfo.pokemonData.sprites.versions[
                                    "generation-v"
                                ]["black-white"].animated.front_default
                            }
                            alt={pokemonInfo.pokemonData.name}
                        />
                        <StyledPokemonName className="pokemon-avatar__title">
                            {pokemonInfo.pokemonData.name}
                        </StyledPokemonName>
                    </>
                ) : (
                    ""
                )}
                <div className="pokemon-screen__indicator"></div>
                <Speaker />
            </StyledPokemonScreen>
        </Theme>
    );
};

const mapStateToProps = (state) => ({
    loading: state.pokemon.loading,
    pokemonInfo: state.pokemon.pokemonInfo,
    error: state.pokemon.error,
});

export default connect(mapStateToProps, null)(Screen);
