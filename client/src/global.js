import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: "Roboto";
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    ul {
        padding: 1em 0em 0em 2em;
    }
    input {
        height: 25px;
        font-size: 1.25em;
        padding: .1em 0 .2em .5em;
        margin: 0;
    }
    body {
        display: flex;
        flex-direction: row;
        font-family: ${({ theme }) => theme.primaryFont};
        background: ${({ theme }) => theme.primaryBackground};
        color: ${({ theme }) => theme.primaryTextColor};

        text-rendering: optimizeLegibility;
    }
    h1, h2, h3, h4, h5, p, input {
        margin: 0;
        padding: 0;
        border: 0;
        /* font-size: 100%; */
        /* font: inherit; */
        vertical-align: baseline;
    }
    h1 {
        font-size: 28px;
        font-weight: 400;
    }
    h2 {
        font-size: 24px;
        font-weight: 400;
    }
    h3 {
        font-size: 18px;
        font-weight: 400;
    }
    h4 {
        
    }
    p {
        color: #404040;
        font-size: 17px;
        font-weight: 300;
    }
    .App {
        width: 100vw;
        margin: autp;
        max-height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .Main {
        max-width: 1600px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        overflow: scroll;
    }
    .Container {
        flex: 2;
        width: auto;
        max-width: 800px;
        min-width: 450px;
        overflow-y: scroll;
        overflow-x: none;
        padding: 2em 2em 2em 4em;
        padding-right: 5em; /* Hide the scroll bar, mac issues */
        box-sizing: content-box; /*     ^^^      ^^^     ^^^    */
    }

    button {
        border: none;
        font-size: 20px;
        font-family: "Roboto Condensed";
        font-weight: 300;
        background-color: #c73636;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        height: 40px;
        min-width: 150px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        button {
            width: 100%;
            max-width: 100%;
        }
        .Main {
            display: flex;
            flex-direction: column;
        }
        .Container {
            overflow: auto;
            padding: 2em 1em;
        }
    }
`

export const Card = styled.div`
    box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.75);
    margin-top: 2em;
    /* font-size: 28px; */
    :first-of-type {
        margin-top: 0;
    }
`

export const Label = styled.div`
    display: flex;
    flex-direction: ${props => props.layout === "row" ? "row" : "column"};
    align-items: ${props => props.layout === "row" ? "center" : "default"};
    background-color: #F8F8F8;
    padding: 1rem 2rem;
    font-family: "Roboto Condensed";
    font-weight: 400;
    border-bottom: 1px solid #D3D3D3;

    p {
        font-weight: 300;
        color: #404040;
        font-size: 18px;
        margin-top: .2em;
    }
`

export const Option = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    border-bottom: 1px solid #D3D3D3;
    padding: 1em 2em;

    :first-child {
        border-bottom: none;

    }

    h2 {
        margin-right: 1em;
    }

    input {
        border: 1px solid silver;
        padding-left: .25em;
        font-weight: 300;
        :focus {
            outline: none;

        }
    }

`