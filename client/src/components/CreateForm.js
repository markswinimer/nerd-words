import React from 'react';
import InputField from './sub-components/InputField';
import DropDownField from './sub-components/DropDownField';
import WordField from './sub-components/WordField';
import LibraryPreview from './LibraryPreview';
import NewLibraryForm from './NewLibraryForm';
import AddWordsForm from './AddWordsForm';
import axios from 'axios';
import './CreateForm.css';
import { platform } from 'os';

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
            <div className="CreateForm">
                <div className="CreateForm-option">
                    <div onClick={this.switchEditMode} id="create">Create New Library</div>
                    <div onClick={this.loadEditForm} id="edit">Edit Existing Library</div>
                </div>
            {this.state.activeForm === "create" ? <NewLibraryForm postNewLibrary={this.postNewLibrary} /> : <LibraryPreview />}

            {this.state.activeForm === "edit" ? <AddWordsForm library={this.state.library} id="5e66ce6f3df09970e8150888" /> : null}
            </div>
        )
    }
}

export default CreateForm;