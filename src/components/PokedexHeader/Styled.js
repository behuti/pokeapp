import styled from "styled-components";

export const Header = styled.div`
    position: relative;
    height: 130px;
    margin-bottom: 40px;
    max-width: 100%;
    overflow: hidden;

    .pokemon-search__blueIndicator {
        position: absolute;
        display: block;
        top: 40px;
        left: 40px;
        width: 25px;
        height: 25px;
        box-shadow: ${({ theme }) =>
            theme.pixelatedBorderRadius.step4(4, "#323232", "#46B5F9")};
        background-color: #46b5f9;

        &::after {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            display: block;
            width: 10px;
            height: 10px;
            background-color: #fff;
            box-shadow: ${({ theme }) =>
                theme.pixelatedBorderRadius.step1(4, "#fff")};
            z-index: 1;
        }
    }

    .pokemon-search__redIndicator {
        display: block;
        position: absolute;
        top: 45px;
        left: 115px;
        width: 11px;
        height: 11px;
        background-color: red;
        box-shadow: ${({ theme }) =>
            theme.pixelatedBorderRadius.step2(3, "#323232", "red")};
    }

    .pokemon-search__yellowIndicator {
        display: block;
        position: absolute;
        top: 45px;
        left: 145px;
        width: 11px;
        height: 11px;
        background-color: #ffa608;
        box-shadow: ${({ theme }) =>
            theme.pixelatedBorderRadius.step2(3, "#323232", "#ffa608")};
    }

    .pokemon-search__greenIndicator {
        display: block;
        position: absolute;
        top: 45px;
        left: 175px;
        width: 11px;
        height: 11px;
        background-color: #39b348;
        box-shadow: ${({ theme }) =>
            theme.pixelatedBorderRadius.step2(3, "#323232", "#39b348")};
    }

    .pokemon-search__separator {
        position: absolute;
        left: 0;
        bottom: 0;
    }
`;
