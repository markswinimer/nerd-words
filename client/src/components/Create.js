import React from 'react';
import AddWordsForm from './AddWordsForm';
import LibrarySelector from './LibrarySelector';
import NewLibraryForm from './NewLibraryForm';
import './CreateForm.css';

import axios from 'axios';
import styled from 'styled-components';

const StyledChooseMode = styled.div`
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    border: none;
    border-radius: {standard-radius};
    padding: 1em 1em;
    font-size: 1em;
    background-color: #c73636;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 0em;
    margin-right: 1em;
    width: 50%;
`

const StyledCreate = styled.div`
    width: 800px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
`

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseMode: true,
            previewLibrary: false,
            activeForm: null,
            library: null
        }
        this.switchCreateMode = this.switchCreateMode.bind(this);
        this.postNewLibrary = this.postNewLibrary.bind(this);
        this.loadEditForm = this.loadEditForm.bind(this);
    }

    switchCreateMode(event) {
        this.setState({
            chooseMode: false,
            activeForm: event.target.id
        })
    }

    setLibrary(library) {
        this.setState({ library: library })
    }

    postNewLibrary(payload) {
        let url = "/libraries"

        const options = {
            url: url,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: payload
        };

        axios(options)
            .then(response => {
                console.log(response);
                this.setState({
                    library: response.data,
                    activeForm: "addWords"
                })
            })
    }

    loadEditForm(id) {
        if(!id) {
           let id = "5e66ce6f3df09970e8150888"
        }
        let url = "/libraries/" + id
        console.log(url)
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
                    activeForm: "addWords"
                })
            })
    }
    
    render() {
        return(
            <StyledCreate>

                {this.state.chooseMode === true
                    ?   <ChooseMode switchCreateMode={this.switchCreateMode} />
                    :   null 
                }

                {this.state.activeForm === "createNew"
                    ?   <NewLibraryForm 
                            postNewLibrary={this.postNewLibrary}
                        />
                    :   null
                }

                {this.state.activeForm === "editExisting"
                    ?   <LibrarySelector
                            loadEditForm={this.loadEditForm}
                        />
                    :   null
                }

                {this.state.activeForm === "addWords"
                    ?   <AddWordsForm
                            library={this.state.library}
                        />
                    :   null
                }

            </StyledCreate>
        )
    }
}

const ChooseMode = props => {
    return(
        <StyledChooseMode>
            <h1>Create</h1>
            <p>Creating new word libraries is easy. Follow these steps to start making one right now!</p>

            <Button id="createNew" onClick={props.switchCreateMode}>Create New Library</Button>
            <Button id="editExisting" onClick={props.switchCreateMode}>Edit Existing Library</Button>
        </StyledChooseMode>
    )
}

export default Create;