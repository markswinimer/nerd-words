import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import GameSetup from './GameSetup';

const StyledPlay = styled.div`

`

class Play extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameMode: 0,
            numPlayers: 1,
            library: null
        }
        this.selectNumPlayers = this.selectNumPlayers.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    selectNumPlayers(e) {
        console.log(e.target.id)
        this.setState({ numPlayers: e.target.id })
    }

    handleSubmit() {
        console.log(this.state)
    }

    render() {
        return(
            <StyledPlay>
                <h1>Play</h1>

                <GameSetup createGame={this.createGame} />
            </StyledPlay>
        )
    }
}

export default Play;