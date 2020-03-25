import styled from 'styled-components';

export const StyledGameSetup = styled.div`

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

export const Option = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    h2 {
        margin-right: 1em;
    }
`
export const StyledDropDownField = styled.div`

    select {
        font-size: 1em;
        min-width: 300px;
    }
`

export const SubmitButton = styled.button`
    border: none;
    border-radius: {standard-radius};
    padding: 1em 1em;
    font-size: 1em;
    background-color: #c73636;
    color: white;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 0em;
    margin-right: 1em;
    width: 50%;
`