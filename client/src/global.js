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
    body {
        height: 100%;
        display: flex;
        flex-direction: row;
        
        font-family: ${({ theme }) => theme.primaryFont};
        background: ${({ theme }) => theme.primaryBackground};
        color: ${({ theme }) => theme.primaryTextColor};

        text-rendering: optimizeLegibility;
    }
`