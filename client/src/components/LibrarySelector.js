import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import './LibrarySelector.css';

class LibrarySelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userLibraries : [],
            user: "Default User"
        }

        this.getUserLibraries = this.getUserLibraries.bind(this)
        this.handleChoice = this.handleChoice.bind(this)
    }

    componentDidMount() {
        this.getUserLibraries()
    }

    getUserLibraries() {
            let url = "/libraries"

            const options = {
                url: url,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            };

            axios(options)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        userLibraries: response.data
                    })
                })
        }

        handleChoice(id) {
            this.props.loadEditForm(id)
        }

    render() {

        let userLibrariesList = [];
        userLibrariesList = this.state.userLibraries.map(library => (
            <UserLibraryEntry
                libraryName={library.libraryName}
                wordCount={library.words.length}
                _id={library._id}
                setLibrary={this.handleChoice}
            />
        ))
        return(
            <div className="LibrarySelector">
                <h2>Choose a library to edit</h2>
                <p>You can only edit libraries you've created.</p>
                <FontAwesomeIcon className="iconArrow" icon={faAngleUp} />
                <div className="UserLibraryEntry-legend">
                    <div>Library Name</div>
                    <div>Word Count</div>
                </div>
                <div className="CreateForm-entries">
                    {userLibrariesList}
                </div>
                <FontAwesomeIcon className="iconArrow" icon={faAngleDown} />
            </div>
        )
    }
}

class UserLibraryEntry extends React.Component {
    handleClick = () => this.props.setLibrary(this.props._id)

    render() {
        return(
            <div className="UserLibraryEntry">
                <div className="UserLibraryEntry-info" onClick={this.handleClick}>
                    <FontAwesomeIcon className="icon" icon={faPencilAlt} />
                        <div>{this.props.libraryName}</div>
                        <div>{this.props.wordCount}</div>
                </div>
            </div>
        )
    }
}

export default LibrarySelector;