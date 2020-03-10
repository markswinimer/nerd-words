import React from 'react';
import InputField from './sub-components/InputField';
import DropDownField from './sub-components/DropdownField';
import WordField from './sub-components/WordField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import './CreateForm.css';

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxLibrarySize: 20,
            library: {
                libraryName: undefined,
                authorName: undefined,
                wordLibrary: []
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let editLibrary = this.state.library
        editLibrary[event.target.name] = event.target.value
        console.log(editLibrary)

        this.setState({ library: editLibrary })
    }


    render() {
        let words = []
        for(let i = 0; i < this.props.librarySize; i++ ) {
            words.push(
                <WordField
                    id="Library Name"
                    name="libraryName"
                    type="text"
                    value="ok"
                />
            )
        }

    return(
            <div className="CreateForm">
                    <InputField
                        id="Library Name"
                        name="libraryName"
                        type="text"
                        value={this.state.library.libraryName}
                        handleChange={this.handleChange}
                    />
                    <InputField
                        id="Author"
                        name="authorName"
                        type="text"
                        value={this.state.library.authorName}
                        handleChange={this.handleChange}
                    />
                    <DropDownField
                        id="Library Size"
                        name="librarySize"
                        type="text"
                        // value={this.state.library.maxLibrarySize}
                        handleChange={this.handleChange}
                    />
                    <h1>Words</h1>
                    <div className="CreateForm-add-word">
                        <input
                            id="0"
                            name="Main-input"
                            type='text'
                            className="CreateForm-addword"
                        />
                        <button>
                        <FontAwesomeIcon className="icon" icon={faPlusSquare} />
                        </button>
                    </div>
                    
                    {words}
                </div>
        )
    }
}

export default CreateForm;