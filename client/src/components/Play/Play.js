import React from 'react';
import styled from 'styled-components';

import GameScreen from '../GameScreen/GameScreen';
import GameSetup from '../GameSetup/GameSetup';

const StyledPlay = styled.div`
    height: 100%;
`

export default class Play extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameData: undefined,
            gameInProgress: false,
        }
        this.createGame = this.createGame.bind(this)
    }

    createGame(gameData) {
        this.setState({ gameData: gameData, gameInProgress: true })
    }

    render() {
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