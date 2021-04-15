import styled from "styled-components";
import {lighten} from 'polished';

export const StyledForm = styled.div`
    text-align: center;
    padding: 60px 0;
    position: relative;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .pokemon-search__input {
        background-color: ${(props) => props.theme.colors.pokedexInput};
        padding: 8px 16px;
        border: 3px solid black;
        color: black;
        margin-bottom: 1rem;

        &:focus {
            outline: none;
        }
    }
`;

export const ClearButton = styled.button`
    background-color: #f10105;
    color: ${lighten(.45, '#f10105')};
    border: 0;
    box-shadow: 3px 0 black, -3px 0 black, 0 3px black, 0 -3px black;
    font-size: 13px;
    padding: 4px 32px;
    margin: 6px 16px;
    cursor: pointer;
    `;

export const SearchButton = styled.button`
    background-color: #7abcf5;
    color: ${lighten(.25, '#7abcf5')};;
    border: 0;
    box-shadow: 3px 0 black, -3px 0 black, 0 3px black, 0 -3px black;
    font-size: 13px;
    padding: 4px 32px;
    margin: 6px 16px;
    cursor: pointer;
`;
