import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

import NewLibraryForm from '../NewLibraryForm/NewLibraryForm';
import ViewLibrary from '../ViewLibrary/ViewLibrary';
import LibrarySelector from '../LibrarySelector/LibrarySelector';

import { Option, Button, StyledChooseMode, StyledCreate } from './Create.styled' 
import { Card, Label } from '../../global'; 

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
        this.handleSelect = this.handleSelect.bind(this);
    }

    switchCreateMode(event) {
        console.log(event.target.id)
        console.log(event.target.id === "editExisting")
        if(event.target.id === "editExisting") {
            this.setState({
                activeForm: event.target.id
            })
        } else {
            this.setState({
                chooseMode: false,
                activeForm: event.target.id
            })
        }
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

    loadEditForm(event) {
        let id = event.currentTarget.id
        console.log("LIBRARY ID : " + event.currentTarget.id)
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
                    chooseMode: false,
                    activeForm: "viewLibrary"
                })
            })
    }

    handleSelect(id) {
        this.props.history.push('/library/:' + id)
    }
    
    render() {

        return(
            <StyledCreate>

                {this.state.chooseMode === true || this.state.chooseMode === "editExisting"
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
                    ?   <LibrarySelector className="Card"
                            handleSelect={this.handleSelect}
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
        <Card className="Card">
        <StyledChooseMode>
            <Label className="Label">
                <h1>My Collection</h1>
                <p>Creating new word libraries is easy. Follow these steps to start making one right now!</p>
            </Label>
            <Option>
                    <h2>Create a New Library</h2>
                <Button id="createNew" onClick={props.switchCreateMode}>New</Button>
            </Option>
            <Option>
                    <h2>Edit an existing Library</h2>
                <Button id="editExisting" onClick={props.switchCreateMode}>Edit</Button>
            </Option>

        </StyledChooseMode>
        </Card>
    )
}

export default withRouter(Create);