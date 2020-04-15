import React from 'react';
import axios from 'axios';

import {
    StyledGameScreen, DeckInfo, Indicator, Label, DataDisplay,
    ViewDiscarded, Deck, Card, CardBack, Logo, Word,
    DrawControls, Control, RefreshDeck
} from './GameScreen.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses, faAngleDown, faRedoAlt, faCog, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { constants } from 'crypto';

export default class GameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            library: undefined,
            drawPile: [],
            discardPile: [],
            currentWord: undefined,
            gameInProgress: false
        }
        this.nextCard = this.nextCard.bind(this)
        this.shuffleDeck = this.shuffleDeck.bind(this)
        this.refreshDeck = this.refreshDeck.bind(this)
    }

    componentDidMount() {
        this.loadLibrary(this.props.gameData.library_id)
    }


    loadLibrary(id) {
            if (!id) {
                let id = "5e66ce6f3df09970e8150888"
            }
            let url = "/libraries/" + id
            const options = {
                url: url,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: id
            };

            axios(options)
                .then(response => {
                    let shuffledDeck = this.shuffleDeck(response.data.words)
                    this.setState({ library: response.data, drawPile: shuffledDeck })
                })
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
                            <FontAwesomeIcon className="icon" icon={faEllipsisH} />
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
                    {/* <RefreshDeck sub onClick={this.refreshDeck}>
                        <FontAwesomeIcon className="icon" icon={faRedoAlt} />
                    </RefreshDeck> */}
                    <Control sub>Previous</Control>
                    <Control disabled={this.state.drawPile.length === 0} onClick={this.nextCard}>Draw Next</Control>
                </DrawControls>

            </StyledGameScreen>
        )
    }
}