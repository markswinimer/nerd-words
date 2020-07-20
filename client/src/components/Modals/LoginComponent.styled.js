import styled from 'styled-components';

import { Card, Label, Option } from '../../global';

export const StyledLoginComponent = styled.form`

`

export const InputSection = styled.div`
    padding: 0 0 .75em 0;
`
export const SignupField = styled(Option)`
    border: none;
    padding: 0;
    margin-bottom: 1em;
`

export const SignupButton = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #c73636;
    width: 100%;
    height: 45px;
    min-width: 100%;
    margin-top: .5em;
    border-radius: 3px;
    font-size: 26px;
    font-weight: 300;
    font-family: "Roboto Condensed";
    cursor: pointer;
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
    display: inline-block;

    :hover {
        padding-bottom: 0;
        border-bottom: 1px solid;
    }
`

export const FormError = styled.div`
    background-color: #FFBABA;
    color: #DA0C19;
    font-weight: 500;
    padding: .25em .5em;
    margin-top: .25em;
    border-radius: 4px;
    display: ${props => props.display ? "inline-block" : "none"};
`