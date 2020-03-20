import React from 'react';
import styled from 'styled-components';

import GameScreen from './GameScreen';
import GameSetup from './GameSetup';

import { seedGame } from './seedLibrary';

const StyledPlay = styled.div`

`


class Play extends React.Component {
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

        return(
            <StyledPlay>
                {this.state.gameInProgress 
                // ? <GameScreen gameData={seedGame} />
                ? <GameScreen gameData={this.state.gameData} />
                : <GameSetup createGame={this.createGame} /> }   

            </StyledPlay>
        )
    }
}

export default Play;