import styled from 'styled-components';

export const StyledChooseMode = styled.div`
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    width: 100px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
`

export const StyledCreate = styled.div`
    display: flex;
    flex-direction: column;
`


export const Card = styled.div`

`



export const Label = styled.div`

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
    button {
        display: flex;
        justify-content: center;
        margin: 0;
        margin-left: auto;
    }

    h2 {
        flex: 1;
        font-family: "Roboto Condensed";
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;

        h2  {
            margin-bottom: .5em;
        }
    }
`