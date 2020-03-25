import styled from 'styled-components';

export const StyledGameScreen = styled.div`
    max-width: 600px;
`

export const DeckInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em; 
`

export const Indicator = styled.div`
    display: flex;
    border: none;
    margin-right: 1em;
    color: white;
    font-size: 1em;
    font-weight: bold;
`
export const Label = styled.div`
    display: flex;
    border: none;
    background-color: #c73636;
    padding: .75em 1.25em;
    border-radius: 0px 5px 0 0px;
    color: white;
    font-size: 1em;
`

export const DataDisplay = styled.div`
    background-color: white;
    border: 1px solid #c73636;
    border-bottom: 3px solid #c73636;
    border-right: 4px solid #c73636;
    padding: .75em 1.25em;
    display: flex;
    justify-content: flex-end;
    border-radius: 0 10px 0px 0;
    color: #c73636;
    font-weight: bold;
    width: 20px;
`
export const ViewDiscarded = styled.div`
    background-color: white;
    padding: 0em .25em;
    border-radius: 0 10px 0px 0;
    color: #c73636;
    font-weight: bold;
    font-size: 2em;
    padding-left: .5em;

    .icon {
        height: 100%;
        cursor: pointer;
        transition: .2s ease-in-out;

        :hover {
            font-size: 1.25em;
            height: 120%;
        }
    }
`


export const Deck = styled.div`

`
export const Card = styled.div`
    margin-top: .5em;
    border: 1px solid #c73636;
    border-right: 3px solid #c73636;
    border-bottom: 2px solid #c73636;
    border-radius: 10px;
    height: 250px;
    max-width: 425px;
    display: flex;
    align-items: center;
    justify-content: middle;
    text-align: center;
    padding: 1em;
    box-sizing: border-box;
`
export const CardBack = styled(Card)`
    background-color: #c73636;
    color: white;
    display: flex;
    justify-content: center;

    .icon {
        font-size: 3em;
        margin: 0 .25em;
    }
`

export const Logo = styled.div`
    font-weight: bold;
    font-size: 2em;
    font-family: 'Roboto Condensed';
`

export const Word = styled.h3`
    color: #303030;
    font-size: 4em;
    margin: auto;
    padding-right: 20px;
`

export const DrawControls = styled(Indicator)`
    margin-top: 1em;
    max-width: 425px;
    justify-content: space-between;
`
export const Control = styled.button`
    display: flex;
    border: none;
    background-color: ${props => props.sub ? "#d87171" : "#c73636"};
    padding: 1em 1.25em;
    border-radius: 5px;
    color: white;
    font-size: 1em;
    flex: ${props => props.sub ? "1" : "2"};
    margin-left: ${props => props.sub ? "0" : ".5em"};
    font-weight: bold;
    cursor: pointer;

    :hover {
        background-color: #c73636;
        color: white;
    }
`

export const RefreshDeck = styled(Control)`
    flex: none;
    margin-right: .5em;
    margin-left: none;
    padding: none;
    width: auto;
    
    :hover {
        background-color: #c73636;
        color: white;
    }
`
