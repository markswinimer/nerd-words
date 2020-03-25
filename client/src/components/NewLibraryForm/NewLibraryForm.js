import React from 'react';
import InputField from '../sub-components/InputField';
import TextAreaField from '../sub-components/TextAreaField';

import { Form, FormButton } from './NewLibraryForm.styled';

export default class NewLibraryForm extends React.Component {
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
            <Form onSubmit={this.handleSubmit}>

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

                <FormButton>Create Library</FormButton>
            </Form>
        )
    }
}