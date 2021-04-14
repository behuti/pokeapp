import styled from "styled-components";

export const StyledPokemonAvatar = styled.div`
    text-align: center;
    background-color: white;
    padding: 20px 0;
`;

export const StyledPokemonName = styled.h3`
    text-transform: capitalize;
`;

export const StyledPokemonType = styled.span`
    display: inline-block;
    padding: 5px 4px;
    font-size: 10px;
    background-color: ${(props) =>
        props.type && props.theme.colors.types[props.type]};
    color: white;
`;
