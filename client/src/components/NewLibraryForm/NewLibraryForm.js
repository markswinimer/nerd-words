import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

import EditableInput from '../global-components/EditableInput';

import { StyledNewLibraryForm } from './NewLibraryForm.styled';
import { Option, Card, Label } from '../../global';

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
        this.postNewLibrary = this.postNewLibrary.bind(this)
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

        this.postNewLibrary(payload)
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
                this.props.history.push('/library/:' + response.data) 
            })
    }

    render() {   
        return (
            <StyledNewLibraryForm>
                <Card>
                    <form onSubmit={this.handleSubmit}>
                        <Label>
                            <h1>Create a new Library</h1>
                            <p>Start your new library by choosing a name and description.</p>
                        </Label>

                        <Option>
                            <h2>Library Name</h2>
                            <EditableInput
                                id="Library Name"
                                label=""
                                name="libraryName"
                                type="text"
                                value={this.state.library.libraryName}
                                handleChange={this.handleChange}
                            />
                        </Option>

                        <Option>
                            <h2>Description</h2>
                            <EditableInput
                                id="Description"
                                label=""
                                name="description"
                                type="text"
                                value={this.state.library.libraryDescription}
                                handleChange={this.handleChange}
                            />
                        </Option>

                        <Label>
                            <button>Create</button>
                        </Label>
                    </form>
                </Card>
            </StyledNewLibraryForm>
            
        )
    }
}
export default withRouter(NewLibraryForm);