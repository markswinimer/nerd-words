import styled from 'styled-components';

export const StyledGameSetup = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;

    div:first-child h2 {
        margin-top: 0em;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        
    }
`

export const SelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
    h2 {
        margin-top: .5em;
        margin-bottom: 0;
    }
`

export const Option = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: baseline;

    h2 {
        margin-right: 1em;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;

        h2  {
            margin-bottom: .5em;
        }
    }
`

export const StyledRadioField = styled.div`
    display: flex;
    flex-direction: row;

    input {
        height: 25px;
    }
`

export const RadioOption = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 5px;
    border: 1px solid #c73636;
    background-color: white;
    color: #c73636;
    line-height: 25px;
    text-align: center;
    margin-right: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: .1s ease-in-out;

    :hover {
        color: white;
        background-color: #c73636;
    }
`

export const SelectedRadioOption = styled(RadioOption)`
    border: 1px solid #c73636;
    background-color: #c73636;
    color: white;
    pointer-events: none;
`


export const StyledDropDownField = styled.div`

    select {
        font-size: 1em;
        min-width: 300px;
    }
`

export const SubmitButton = styled.button`
    margin-top: 0;
    text-align: center;
`