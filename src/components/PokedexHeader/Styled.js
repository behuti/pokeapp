import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  height: 130px;

  .pokemon-search__blueIndicator {
        position: absolute;
        display: block;
        top: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background-color: #46B5F9;
        border-radius: 30px;
        border: 5px solid #323232;
        
        &::after {
            content: '';
            position: absolute;
            top: 10px;
            left: 10px;
            display: block;
            width: 13px;
            height: 13px;
            background-color: #fff;
            border-radius: 10px;
            z-index: 1;
        }
    }
    
    .pokemon-search__redIndicator {
        display: block;
        position: absolute;
        top: 40px;
        left: 115px;
        width: 15px;
        height: 15px;
        background-color: red;
        border: 3px solid #323232;
        border-radius: 10px;
    }

    .pokemon-search__yellowIndicator {
        display: block;
        position: absolute;
        top: 40px;
        left: 145px;
        width: 15px;
        height: 15px;
        background-color: #FFA608;
        border: 3px solid #323232;
        border-radius: 10px;
    }

    .pokemon-search__greenIndicator {
        display: block;
        position: absolute;
        top: 40px;
        left: 175px;
        width: 15px;
        height: 15px;
        background-color: #39B348;
        border: 3px solid #323232;
        border-radius: 10px;
    }

    .pokemon-search__separator {
        position: absolute;
        left: 0;
        bottom: 0;
    }
`