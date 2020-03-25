import React from 'react';
import styled from 'styled-components';

import { GameScreen } from '../../components';
import GameSetup from '../GameSetup/GameSetup';

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

        return (
            <StyledPlay>
                {this.state.gameInProgress
                    // ? <GameScreen gameData={seedGame} />
                    ? <GameScreen gameData={this.state.gameData} />
                    : <GameSetup createGame={this.createGame} />}

            </StyledPlay>
        )
    }
}