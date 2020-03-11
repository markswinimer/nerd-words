import React from 'react';
import InputField from './sub-components/InputField';
import DropDownField from './sub-components/DropDownField';
import WordField from './sub-components/WordField';
import LibraryPreview from './LibraryPreview';
import NewLibraryForm from './NewLibraryForm';
import AddWordsForm from './AddWordsForm';
import TableEntry from './TableEntry';
import LibraryChooser from './LibraryChooser';
import axios from 'axios';
import './CreateForm.css';
import { platform } from 'os';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'


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
            {this.state.activeForm === "create" ? <NewLibraryForm postNewLibrary={this.postNewLibrary} /> : null}
            {this.state.activeForm === "preview" ? <LibraryPreview /> : null }

            {this.state.activeForm === "edit" ? <LibraryChooser /> : null}
            {this.state.activeForm === "edit" ? <AddWordsForm library={this.state.library} id="5e66ce6f3df09970e8150888" /> : null}
            
            </div>
        )
    }
}

const ChooseLibrary = props => {
    
    return(
        <div className="CreateForm-choose">
            <FontAwesomeIcon className="arrow" icon={faAngleUp} />
            <div className="CreateForm-entries">
            <tr className="TableEntry">
                <td className="libraryName">All About Words{props.libraryName}</td>
                <td className="creationDate">03/02/2020{props.creationDate}</td>
                <td className="wordCount"> 20{props.wordCount}</td>
                <td className="playCount">{props.playCount}</td>
                <td className="sortSpace">
                    <button className="TableEntry-button icon">
                        <FontAwesomeIcon className="icon" icon={faPencilAlt} />
                    </button>
                </td>
            </tr>
            </div>
            <FontAwesomeIcon className="arrow" icon={faAngleDown} />

        </div>
    )
}

export default CreateForm;