import { createGlobalStyle } from 'styled-components';
import { create } from 'domain';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    ul {
        padding: 1em 0em 0em 2em;
    }
    input {
        height: 25px;
        font-size: 1.25em;
        padding: .1em 0 .2em .5em;
    }
    body {
        height: 100vh;
        display: flex;
        flex-direction: row;
        
        font-family: ${({ theme }) => theme.primaryFont};
        background: ${({ theme }) => theme.primaryBackground};
        color: ${({ theme }) => theme.primaryTextColor};

        text-rendering: optimizeLegibility;
    }

    table {
        width: 100%;
    }

    .App {
        width: 100vw;
    }
    .Main {
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .Container {
        height: 100vh;
        overflow: scroll;
        padding: 2em 5em 2em 4em;
        width: 1200px;
        padding-right: 5em; /* Increase/decrease this value for cross-browser compatibility */
        box-sizing: content-box; /* So the width will be 100% + 17px */

    }

    button {
        border: none;
        padding: 1em 1em;
        font-size: 1em;
        background-color: #c73636;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        margin-top: 1em;
        margin-bottom: 0em;
        margin-right: 1em;
        border-radius: 3px;
        min-width: 200px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        button {
            width: 100%;
        }
        .Main {
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .Container {
            height: 100%;
            overflow: auto;
            padding: 2em 2em;
            width: 100%;
        }
    }
`