import React from 'react';
import styled from 'styled-components';

import { GameScreen, GameSetup } from '../';

const StyledPlay = styled.div`

`

export default class Play extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameData: undefined,
            gameInProgress: false,
        }
        this.selectNumPlayers = this.selectNumPlayers.bind(this)
        this.createGame = this.createGame.bind(this)
    }


    selectNumPlayers(e) {
        this.setState({ numPlayers: e.target.id })
    }

    createGame(gameData) {
        this.setState({ gameData: gameData, gameInProgress: true })
    }

    render() {
        console.log(this.state.gameData)
        const seedGameData = {
            maxPlayers: 5,
            gameMode: 0,
            numPlayers: 3,
            library: {
                authorName: "Bernie Sanders",
                description: "No description provided",
                creationDate: "02/2/2020",
                wordCount: 90,
                playCount: 88,
                words: [
                "Two",
                "Swiimer",
                "Mark",
                "four",
                "asdasd",
                "asdads",
                "Mark",
                "six",
                "asddas",
                "five",
                "Swon",
                "asd",
                "asdasd",
                "asddasasd",
                "asdas",
                "asddas"
                ],
            _id: "5e603bd6db1e0f7e3747dd78"
        }
    }
        return (
            <StyledPlay>
                {this.state.gameInProgress
                    // ? <GameSetup createGame={this.createGame} />
                    // : <GameScreen gameData={seedGameData} />
                    ? <GameScreen gameData={this.state.gameData} />
                    : <GameSetup createGame={this.createGame} />
                }
            </StyledPlay>
        )
    }
}