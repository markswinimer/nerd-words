import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import GameScreen from './GameScreen';
import GameSetup from './GameSetup';

const StyledPlay = styled.div`

`

class Play extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameData: undefined,
            gameInProgress: false
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
        return(
            <StyledPlay>
                { this.state.gameInProgress 
                ? <GameScreen gameData={this.state.gameData} />
                : <GameSetup createGame={this.createGame} /> }   

            </StyledPlay>
        )
    }
}

export default Play;