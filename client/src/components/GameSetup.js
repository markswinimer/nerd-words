import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import LibrarySelector from './LibrarySelector';


const StyledGameSetup = styled.div`

`
const StyledRadioField = styled.div`
    display: flex;
    flex-direction: row;

    input {
        height: 25px;
    }
`

const RadioOption = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 5px;
    border: 1px solid #c73636;
    background-color: white;
    color: #c73636;
    line-height: 25px;
    text-align: center;
    margin-right: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: .1s ease-in-out;

    :hover {
        color: white;
        background-color: #c73636;
    }
`

const SelectedRadioOption = styled(RadioOption)`
    border: 1px solid #c73636;
    background-color: #c73636;
    color: white;
    pointer-events: none;
    disabled: true;
`

const Option = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    h2 {
        margin-right: 1em;
    }
`
const StyledDropDownField = styled.div`

    select {
        font-size: 1em;
        min-width: 300px;
    }
`

const SubmitButton = styled.button`
    border: none;
    border-radius: {standard-radius};
    padding: 1em 1em;
    font-size: 1em;
    background-color: #c73636;
    color: white;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 0em;
    margin-right: 1em;
    width: 50%;
`

class GameSetup extends React.Component {
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
                <option value="cardDraw">Card Draw</option>
                <option value="taboo">Taboo</option>
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

export default GameSetup;