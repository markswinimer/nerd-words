import styled from 'styled-components';

import { Card, Label, Option } from '../../global';

export const StyledLoginComponent = styled.div`

`

export const InputSection = styled.div`
    padding-bottom: 1em;
`
export const SignupField = styled(Option)`
    border: none;
    padding: 0;
    margin-bottom: 1em;
`

export const SignupButton = styled.button`
    width: 100%;
    margin-top: 1em;
    height: 45px;
    font-size: 26px;
`

export const CloseButton = styled.div`
    float: right;
    font-size: 28px;
    font-weight: bold;
    padding-right: .15em;

    :hover, :focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`
export const ChangeMethodLink = styled.div`
    font-size: 16px;   
    color: #05676E;  
    padding-bottom: 1px;
    cursor: pointer;
    margin-right: auto;

    :hover {
        padding-bottom: 0;
        border-bottom: 1px solid;
    }
`