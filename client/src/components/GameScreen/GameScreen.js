import React from 'react';
import {
    StyledGameScreen, DeckInfo, Indicator, Label, DataDisplay,
    ViewDiscarded, Deck, Card, CardBack, Logo, Word,
    DrawControls, Control, RefreshDeck
} from './GameScreen.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses, faAngleDown, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

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
        this.refreshDeck = this.refreshDeck.bind(this)
    }

    componentDidMount() {
        let shuffledDeck = this.props.gameData.library.words;
        this.shuffleDeck(shuffledDeck)

        this.setState({ drawPile: shuffledDeck })
    }

    refreshDeck() {

        const newDeck = this.shuffleDeck(this.state.library.words)

        this.setState({
            drawPile: newDeck,
            discardPile: [],
            currentWord: undefined
        })
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
        console.log(this.state)
        return (
            <StyledGameScreen>

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
                    {this.state.currentWord
                        ? <Card active={this.state.currentWord}><Word>{this.state.currentWord}</Word></Card>
                        : <CardBack active={this.state.currentWord}>
                            <Logo>Nerd</Logo>
                            <FontAwesomeIcon className="icon" icon={faGlasses} />
                            <Logo>Words</Logo>
                        </CardBack>
                    }
                </Deck>

                <DrawControls>
                    <RefreshDeck sub onClick={this.refreshDeck}>
                        <FontAwesomeIcon className="icon" icon={faRedoAlt} />
                    </RefreshDeck>
                    <Control sub>Previous</Control>
                    <Control disabled={this.state.drawPile.length === 0} onClick={this.nextCard}>Draw Next</Control>
                </DrawControls>

            </StyledGameScreen>
        )
    }
}