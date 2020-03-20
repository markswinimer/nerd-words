import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import LibraryPreview from './LibraryPreview';
import NewLibraryForm from './NewLibraryForm';
import AddWordsForm from './AddWordsForm';
import LibrarySelector from './LibrarySelector';
import './CreateForm.css';

const StyledCreateForm = styled.div`
    border-top: none;
    border-radius: 0 0 5px 5px;
    transition: 10s ease-in;
    display: flex;
    flex-direction: column;

    input {        
        width: 50%;
        margin-top: .5em;
        padding-left: .25em;
        font-size: 1em;
    }
`

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: false,
            currentWordValue: "",
            library: undefined
        }
        this.handleChange = this.handleChange.bind(this)
        this.postNewLibrary = this.postNewLibrary.bind(this)
        this.switchEditMode = this.switchEditMode.bind(this)
        this.loadEditForm = this.loadEditForm.bind(this)
    }

    handleChange(event) {
        let editLibrary = this.state.library
        editLibrary[event.target.name] = event.target.value
        console.log(editLibrary)

        this.setState({ library: editLibrary })
    }

    switchEditMode(event) {
        this.setState({ 
            activeForm: event.target.id
        })
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
                    activeForm: "edit"
                })
            })
    }


    loadEditForm() {
        let id = "5e66ce6f3df09970e8150888"
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
                    activeForm: "edit"
                })
            })
        console.log("HIMMIMIM")

    }

    render() {
       

    return(
        <StyledCreateForm>
            {this.props.activeForm === "create" ? <NewLibraryForm postNewLibrary={this.postNewLibrary} /> : null}
            {this.props.activeForm === "preview" ? <LibraryPreview /> : null}

            {this.props.activeForm === "edit" ? <LibrarySelector /> : null}
            {this.props.activeForm === "edit" ? <AddWordsForm library={this.state.library} id="5e66ce6f3df09970e8150888" /> : null}

        </StyledCreateForm>
    )
    }
    }


export default CreateForm;