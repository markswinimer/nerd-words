import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import LibraryPreview from './LibraryPreview';

const StyledGameScreen = styled.div`
    max-width: 600px;
`

const DeckInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    
`

const Indicator = styled.div`
    display: flex;
    border: none;
    margin-right: 1em;
    color: white;
    font-size: 1em;
    font-weight: bold;
`
const Label = styled.div`
    display: flex;
    border: none;
    background-color: #c73636;
    padding: .75em 1.25em;
    border-radius: 0px 10px 0 0px;
    color: white;
    font-size: 1em;
`

const DataDisplay = styled.div`
    background-color: white;
    border: 1px solid #c73636;
    border-bottom: 3px solid #c73636;
    border-right: 4px solid #c73636;
    padding: .75em 1.25em;
    border-radius: 0 10px 0px 0;
    color: #c73636;
    font-weight: bold;
    
`
const ViewDiscarded = styled.div`
    background-color: white;
    padding: 0em .25em;
    border-radius: 0 10px 0px 0;
    color: #c73636;
    font-weight: bold;
    font-size: 2em;

    .icon {
        height: 100%;
    }
`

const Deck = styled.div`

`
const Card = styled.div`
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

`
const Word = styled.h3`
    color: #101010;
    font-size: 4em;
    margin: auto;
    padding-right: 20px;
`

const DrawControls = styled(Indicator)`
    margin-top: 1em;
    max-width: 425px;
    justify-content: space-between;
`
const Control = styled.button`
    display: flex;
    border: none;
    background-color: ${props => props.sub ? "#d87171" : "#c73636" };
    padding: 1em 1.25em;
    border-radius: 5px;
    color: white;
    font-size: 1em;
    flex: ${props => props.sub ? "1" : "2" };
    margin-left: ${props => props.sub ? "0" : "1em" };
    font-weight: bold;
    cursor: pointer;
`

export default class GameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            library: this.props.gameData.library,
            drawPile: [],
            discardPile: [],
            currentWord: undefined
        }
        this.nextCard = this.nextCard.bind(this)
        this.shuffleDeck = this.shuffleDeck.bind(this)
    }

    componentDidMount() {
        let shuffledDeck = this.shuffleDeck(this.props.gameData.library.words)

        this.setState({ drawPile: shuffledDeck })
    }
    
    shuffleDeck(deck) {
        let j, x;
        for (let i = deck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = deck[i];
            deck[i] = deck[j];
            deck[j] = x;
        }
        return deck
    }

    nextCard() {
        let nextCard = this.state.drawPile.pop();
        let discardPile = this.state.discardPile;

        if (this.state.currentWord) discardPile.push(this.state.currentWord);

        this.setState({ 
            currentWord: nextCard,
            discardPile: discardPile
        })
    }

    render() {
        return(
            <StyledGameScreen>
                
                {/* <LibraryPreview library={this.props.gameData.library} /> */}
                
                <DeckInfo>

                    <Indicator>
                        <Label>Remaining</Label>
                        <DataDisplay>{this.state.drawPile.length}</DataDisplay>
                    </Indicator>

                    <Indicator>
                        <Label>Discarded</Label>
                        <DataDisplay>{this.state.discardPile.length}</DataDisplay>
                        <ViewDiscarded>
                            <FontAwesomeIcon className="icon" icon={faAngleDown} />
                        </ViewDiscarded>
                    </Indicator>
                </DeckInfo>

                <Deck>
                    <Card active={this.state.currentWord}><Word>{this.state.currentWord}</Word></Card>
                </Deck>

                <DrawControls>
                    <Control sub>Previous</Control>
                    <Control disabled={this.state.drawPile.length === 0} onClick={this.nextCard}>Draw Next</Control>
                </DrawControls>

            </StyledGameScreen>
        )
    }
}