import React from 'react';
import axios from 'axios';

import { LibrarySelector } from '../../components';
import { StartButton, StyledRadioField, StyledDropDownField, RadioOption, StyledGameSetup, SelectedRadioOption, SubmitButton, Option } from './GameSetup.styled'
import { Label, Card } from '../../global';

import Navbar from '../Navbar';

export default class GameSetup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maxPlayers: 5,
            gameMode: 0,
            numPlayers: null,
            selectedLibrary: null,
            libraries: []
        }
        this.selectNumPlayers = this.selectNumPlayers.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLibraryChoice = this.handleLibraryChoice.bind(this)
    }

    handleLibraryChoice(e) {
        this.setState({ selectedLibrary: e.currentTarget.id })
    }

    selectNumPlayers(e) {
        this.setState({ numPlayers: parseInt(e.target.id) })
    }

    handleSubmit() {
        const gameSetup = {
            gameMode: this.state.gameMode,
            numPlayers: this.state.numPlayers,
            library_id: this.state.selectedLibrary,
        }

        let isValid = true;
        for (let [key, value] of Object.entries(gameSetup)) {
            if(value === null) {
                isValid = false
            } 
        }
        if(isValid) {
            console.log('creating game')
            this.props.createGame(gameSetup)
        }
    }


    render() {
        return(
            <StyledGameSetup>
                <Card>
                    <Label>
                        <h2>Game Setup</h2>
                        <p>Let's get a game started, fill out the options and click play</p>
                    </Label>
                    <Option>
                        <h2>Game Mode: </h2>
                        <DropDownField/>
                    </Option>

                    <Option>
                        <h2>Players: </h2>
                        <RadioField 
                            selectedId={this.state.numPlayers} 
                            maxPlayers={this.state.maxPlayers} 
                            handleClick={this.selectNumPlayers}
                        />
                    </Option>
                </Card>
                <Card>
                <LibrarySelector
                    libraries={this.state.library}
                    activeLibrary={this.state.wordLibrary}
                    handleChange={this.handleWordChange}
                    selectedLibrary={this.state.selectedLibrary}
                    handleLibraryChoice={this.handleLibraryChoice}
                />
                </Card >
                <Card>
                    <Label layout="row">
                        <h2>Start Game</h2>
                        <StartButton onClick={this.handleSubmit}>Play</StartButton>
                        {/* <p>Double check your settings and begin playing!</p> */}
                    </Label>
                </Card>

                {/* <SubmitButton onClick={this.handleSubmit}>Create Game</SubmitButton> */}
            </StyledGameSetup>
        )
    }
}

const DropDownField = props => {
    return (
        <StyledDropDownField>{props.id}
            <select
                id={props.id}
                name={props.name}
                type='text'
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="cardDraw">Default (Card Draw)</option>
                <option value="cardDraw">Card Draw</option>
            </select>
        </StyledDropDownField>
    )
}
const RadioField = props => {

    let fieldGen = [];

    for(let i = 1; i <= props.maxPlayers; i++) {
        if(i === props.selectedId) {
            fieldGen.push(
                <SelectedRadioOption onClick={props.handleClick} id={i}>{i}</SelectedRadioOption>
            )
        } else {
            fieldGen.push(
                <RadioOption onClick={props.handleClick} id={i}>{i}</RadioOption>
            )
        }
    }

    return (
        <StyledRadioField>
            {fieldGen}
        </StyledRadioField>
    )
}

