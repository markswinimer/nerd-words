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

    render() {

        let userLibrariesList = [];
        userLibrariesList = this.state.userLibraries.map(library => (
            <UserLibraryEntry
                libraryName={library.libraryName}
                wordCount={library.words.length}
            />
        ))
        return(
            <div className="LibrarySelector">
                <FontAwesomeIcon className="icon" icon={faAngleUp} />
                <div className="CreateForm-entries">
                    {userLibrariesList}
                </div>
                <FontAwesomeIcon className="icon" icon={faAngleDown} />
            </div>
        )
    }
}

const UserLibraryEntry = props => {
    return(
        <div className="UserLibraryEntry">
            <div className="UserLibraryEntry-info">
                <div>Library: {props.libraryName}</div>
                <div>Word Count: {props.wordCount}</div>
            </div>
            <FontAwesomeIcon className="icon" icon={faPencilAlt} />

        </div>
    )
}

export default LibrarySelector;