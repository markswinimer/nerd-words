import styled from 'styled-components'

export const Form = styled.form`
    h2 {
        margin-top: 1em;
    }
`

export const StyledEditableInput = styled.input`
    margin-top: .5em;
    min-height: 2em;
    padding: 0 .5em;
    border: none;
    border: 1px solid silver;
`

export const FormButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 50px;
    margin-top: 2em;
    padding: .5em 1em;
    font-size: 1em;
    background-color: #c73636;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    `


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.75);
    margin-top: 2em;
    h2 {
        margin: 0;
    }
    :first-of-type {
        margin-top: 0;
    }
    input {
        margin: 0;
    }
`

export const Label = styled.div`
    display: flex;
    flex-direction: ${props => props.layout === "row" ? "row" : "column"};
    background-color: #F8F8F8;
    padding: 1rem 2rem;
    font-family: "Roboto Condensed";
    font-weight: 400;
    border-bottom: 1px solid #D3D3D3;

    h2 {
        margin-top: 0;
        font-weight: 400;
    }
    h1 {
        font-size: 1.75em;
    }
    p {
        font-weight: 300;
        color: #404040;
        font-size: 1em;
        margin-top: .2em;
    }
`

export const StartLabel = styled(Label)`
    flex-direction: row;
    align-items: center;
    font-size: 1.5em;
`

export const StartButton = styled.button`
    display: flex;
    justify-content: center;
    /* border-radius: 5px; */
    color: white;
    background-color: #c73636; 
    padding: .2em .5em;
    font-family: "Roboto Condensed";
    font-weight: 300;
    margin: 0;
    min-width:150px;
    margin-left: auto;
    min-height: 40px;
    text-align: center;

`
export const SelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;

    h2 {
        margin-top: 1em;
        margin-bottom: 0;
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
    font-size: 1.5em;
    font-family: "Roboto Condensed";
    font-weight: 400;
    }

    input {
        margin-left: auto;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {

        h2  {
            margin-bottom: .5em;
        }
    }

    @media (max-width: 500px) {
        flex-direction: column;
        input {
            margin-left: 0;
        }
    }
`