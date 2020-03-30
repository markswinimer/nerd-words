import styled from 'styled-components';

export const StyledGameScreen = styled.div`
    max-width: 600px;
`

export const DeckInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em; 
    overflow: hidden;
`

export const Indicator = styled.div`
    display: flex;
    border: none;
    color: white;
    font-size: 1em;
    font-weight: bold;
    margin-right: 1em;
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
    margin-left: auto;

    .icon {
        height: 100%;
        cursor: pointer;
        transition: .2s ease-in-out;
        
        :hover {
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
    border-radius: 10px 10px 10px 10px;
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

export const DrawControls = styled.div`
    display: flex;
    font-weight: bold;
    margin-right: 1em;
    margin-top: 1em;
    max-width: 425px;
    justify-content: space-between;
    flex-direction: row;

`
export const Control = styled.div`
    display: flex;
    border: none;
    background-color: ${props => props.sub ? "#d87171" : "#c73636"};
    padding: 1em 1.25em;
    border-radius: 5px;
    color: white;
    font-size: 1em;
    /* flex: ${props => props.sub ? "1" : "3"}; */
    flex-grow: ${props => props.sub ? "none" : "1"};
    margin-left: ${props => props.sub ? "0" : ".5em"};
    font-weight: bold;
    cursor: pointer;
    width: ${props => props.sub ? "100px" : "auto"}; */

    :hover {
        background-color: #c73636;
        color: white;
    }
`

export const RefreshDeck = styled(Control)`
    margin-right: .5em;
    margin-left: none;
    padding: none;
    
    :hover {
        background-color: #c73636;
        color: white;
    }
`
