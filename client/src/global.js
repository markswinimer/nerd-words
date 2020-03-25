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

    .App {
        width: 100vw;
    }
    .Main {
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .Container {
        overflow: scroll;
        padding: 2em 2em;
        width: 900px;
    }

    @media only screen and (max-width: 600px) {
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