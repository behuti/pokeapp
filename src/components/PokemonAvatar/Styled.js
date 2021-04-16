import styled from "styled-components";

export const StyledPokemonAvatar = styled.div`
    text-align: center;
    background-color: white;
    max-width: 400px;
    margin: 0 auto;
    padding: 30px 30px 60px; 
    box-shadow: 0 4px black, 0 -4px black, 4px 0 black, -4px 0 black, 4px 9px #891515, 9px 4px #891515;
`;

export const StyledPokemonScreen = styled.div`
    position: relative;
    min-height: 300px;
    box-shadow: 0 4px black, 0 -4px black, 4px 0 black, -4px 0 black, 0 9px #D2E5E3, 9px 0 #D2E5E3;
    background-color: #132553;
    ${({ theme, displayOn, type }) =>
        displayOn &&
        `
        background: ${ theme.pokemonGradient(theme.colors.types[type]) };
    `}

    .pokemon-avatar__picture {
        width: 150px;
        margin-top: 25px;

        &--error {
            width: 150px;
            display: block;
            position: absolute;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);

            & + .pokemon-avatar__picture {
                margin-top: 60px;
            }

            &:after {
                content: 'ZZzzZZzz...';
                color: white;
            }
        }
    }
    .pokemon-screen__indicator {
        position: absolute;
        bottom: -40px;
        width: 15px;
        height: 15px;
        background-color: #F0060E;
        box-shadow: 0 4px #F0060E, 0 -4px #F0060E, 4px 0 #F0060E, -4px 0 #F0060E, 0 9px black, 9px 0 black, 0 -9px black, -9px 0 black, 5px 5px black, -5px -5px black, -5px 5px black, 5px -5px black ;
    }
    .pokemon-screen__speaker {
        position: absolute;
        bottom: -50px;
        width: 40px;
        right: 0;

        .line {
            height: 4px;
            width: 100%;
            margin-bottom: 4px;
            background-color: black;
        }
    }
`;

export const StyledPokemonName = styled.h3`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: white;
    background-color: #1c3336;
    padding: 20px 0;
    margin-bottom: 0;
`;

export const StyledPokemonType = styled.span`
    display: inline-block;
    padding: 5px 4px;
    font-size: 10px;
    background-color: ${(props) =>
        props.type && props.theme.colors.types[props.type]};
    color: white;
`;
