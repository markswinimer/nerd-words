import React from 'react';
import NewLibraryForm from '../NewLibraryForm/NewLibraryForm';

import { ViewLibrary } from '../../components'
import { LibrarySelector } from '../../components'
import { seedGameData } from '../../seed'

import axios from 'axios';
import { Button, StyledChooseMode, StyledCreate } from './Create.styled' 

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // chooseMode: true,
            chooseMode: true,
            previewLibrary: false,
            // activeForm: null,
            activeForm: "",
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
                    activeForm: "viewLibrary"
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
                    activeForm: "viewLibrary"
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

                {this.state.activeForm === "viewLibrary"
                    ?   <ViewLibrary
                        // library={seedGameData.library}
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