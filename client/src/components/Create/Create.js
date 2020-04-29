import React from 'react';
import { withRouter } from "react-router-dom";

import LibrarySelector from '../LibrarySelector/LibrarySelector';

import { StyledChooseMode, StyledCreate } from './Create.styled' 
import { Card, Label, Option, StyledLink } from '../../global'; 

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectLibrary: false
        }
        this.toggleLibrarySelector = this.toggleLibrarySelector.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    toggleLibrarySelector() {
        this.setState({
            selectLibrary: !this.state.selectLibrary
        })
    }

    // Passed into LibrarySelector to navigate to correct library onClick
    handleSelect(id) {
        this.props.history.push('/library/:' + id)
    }
    
    render() {

        return(
            <StyledCreate>
                <Card>
                    <Label>
                        <h1>My Collection</h1>
                        <p>Creating new word libraries is easy. Follow these steps to start making one right now!</p>
                    </Label>

                    <Option>
                        <h2>Create a New Library</h2>
                        <StyledLink to='/create/newLibrary'>New</StyledLink>
                    </Option>
                    
                    <Option>
                        <h2>Edit an existing Library</h2>
                        <button id="editExisting" onClick={this.toggleLibrarySelector}>Edit</button>
                    </Option>
                </Card>

                {this.state.selectLibrary
                    ? <LibrarySelector
                        handleSelect={this.handleSelect}
                    />
                    : null
                }

            </StyledCreate>
        )
    }
}

export default withRouter(Create);