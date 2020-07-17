import styled from 'styled-components';

import { Card, Label, Option } from '../../global';

export const Modal = styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    flex-direction: column;
    align-items: center;
    padding-top: 10em;
    font-family: "Roboto Condensed";
`

export const ModalContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fefefe;
    width: 35%;
    max-width: 600px;
    border-radius: 5px;
`

export const InputSection = styled.div`
    padding-bottom: 1em;
`
export const ModalTitle = styled.h2`
    font-weight: 300;
    font-size: 26px;
`
export const ModalHeader = styled.div`
    background-color: #C73636;
    color: white;
    padding: 2em;
    padding-top: 1.6em;
    padding-bottom: 1em;
    border-radius: 5px 5px 0 0;
`
export const ModalBody = styled.div`
    padding: 2em;
    padding-top: 0em;
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