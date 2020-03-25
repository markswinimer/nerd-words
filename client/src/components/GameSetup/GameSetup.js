import React from 'react';
import axios from 'axios';

import { LibrarySelector } from '../../components';
import { StyledRadioField, StyledDropDownField, RadioOption, StyledGameSetup, SelectedRadioOption, SubmitButton, Option } from './GameSetup.styled'


export default class GameSetup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maxPlayers: 5,
            gameMode: 0,
            numPlayers: undefined,
            library: null
        }
        this.selectNumPlayers = this.selectNumPlayers.bind(this)
        this.selectLibrary = this.selectLibrary.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    selectNumPlayers(e) {
        this.setState({ numPlayers: parseInt(e.target.id) })
    }

    handleSubmit() {
        this.props.createGame(this.state)
    }

    selectLibrary(id) {
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
                console.log(response.data);
                this.setState({
                    library: response.data,
                })
            })
    }

    render() {
        return(
            <StyledGameSetup>
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
                <Option>
                    <h2>Select Library </h2>
                </Option>
                    <LibrarySelector size="small" loadEditForm={this.selectLibrary}/>
                <SubmitButton onClick={this.handleSubmit}>Create Game</SubmitButton>
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