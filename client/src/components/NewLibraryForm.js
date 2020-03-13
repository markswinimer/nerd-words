import React from 'react';
import InputField from './sub-components/InputField';
import DropDownField from './sub-components/DropDownField';
import TextAreaField from './sub-components/TextAreaField';
import WordField from './sub-components/WordField';
import LibraryPreview from './LibraryPreview';
import './NewLibraryForm.css';

class NewLibraryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            library: {
                libraryName: undefined,
                libraryDescription: undefined
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log("HANDLE CHANGE")
        let newLibary = this.state.library;
        newLibary[event.target.name] = event.target.value

        this.setState({ library: newLibary })
    }

    handleSubmit(event) {
        event.preventDefault();
        const payload = this.state.library

        this.props.postNewLibrary(payload)
        // this.setState({ library: editLibrary })
    }

    render() {   
        return (
            <form onSubmit={this.handleSubmit} className="NewLibraryForm">

                <h2>Let's start by choosing a name: </h2>
                <p>Not just any old name.
                    Choose something that will represent the theme of your library.</p>

                <h2>Library Name</h2>
                <InputField
                    id="Library Name"
                    label=""
                    name="libraryName"
                    type="text"
                    value={this.state.library.libraryDescription}
                    handleChange={this.handleChange}
                />

                <h2>Description</h2>
                <TextAreaField
                    id="needsone"
                    name="description"
                    type="text"
                    value={this.state.library.libraryDescription}
                    handleChange={this.handleChange}
                />

                <button>Create Library</button>
            </form>
        )
    }
}
export default NewLibraryForm;