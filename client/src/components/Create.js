import React from 'react';
import CreateCard from './CreateCard';
import CreateForm from './CreateForm';
import axios from 'axios'
import styled from 'styled-components'

import './Create.css';



const StyledChooseMode = styled.div`
    display: flex;
    flex-direction: row;
`
const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 1em 1em;
    font-size: 1em;
    background-color: #c73636;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-right: 1em;
`

const StyledCreate = styled.div`
    width: 800px;
    max-width: 800px;
`


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // State
            createMode: "choose",
            maxLibrarySize: 20,
            newLibrary: {
                libraryName: undefined,
                authorName: undefined,
                wordLibrary: []
            }
        }
        this.expandOption = this.expandOption.bind(this);
        this.switchEditMode = this.switchEditMode.bind(this);
    }

    expandOption(option) {
        console.log(option)
        this.setState({ activeForm: option })
    }

    switchEditMode(event) {
        this.setState({
            createMode: event.target.id
        })
    }
    

    render() {
        return(
            <StyledCreate>
                <h1>Create</h1>

                {this.state.createMode === "choose"
                    ?   <ChooseMode switchEditMode={this.switchEditMode} />
                    :   <CreateForm activeForm={this.state.createMode} /> 
                }
            </StyledCreate>
        )
    }
}

const ChooseMode = props => {
    return(
        <StyledChooseMode>
            <p>Creating new word libraries is easy. Follow these steps to start making one right now!</p>

            <Button id="create" onClick={props.switchEditMode}>Create New Library</Button>
            <Button id="edit" onClick={props.switchEditMode}>Edit Existing Library</Button>
        </StyledChooseMode>
    )
}

export default Create;