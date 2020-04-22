import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import {
    Scroll, WordList, WordContainer
} from './LibrarySelector.styled';

import { Card, Label } from '../../global'

export default class LibrarySelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            libraries: null,
        }
        this.selectLibrary = this.selectLibrary.bind(this)
    }
    componentDidMount() {
        if (!this.libraries) {
            this.makeSearch()
        }
    }

    selectLibrary(event) {
        this.props.handleSelect(event.currentTarget.id)
    }

    makeSearch() {
        let url = "/libraries"
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ libraries: data })
            })
            .catch(err => {
                console.log("Request was unsuccesful, error log: " + err)
            })
    }

    render() {
        let libraries = [];
        if (this.state.libraries) {
            let librariesLoaded = this.state.libraries
            libraries = librariesLoaded.map(library => (
                <WordContainer key={uuidv4()} id={library._id} selected={this.props.selectedLibrary === library._id} onClick={this.selectLibrary}>
                    <h2>{library.libraryName}</h2>
                </WordContainer>

            ))
        }

        return (
            <Card>
                <Label className="Label">
                    <h2>Choose a library</h2>
                    <p>Only libraries you've created or favorited will show up.</p>
                </Label>

                <Scroll><FontAwesomeIcon className="icon" icon={faChevronUp} /></Scroll>
                <WordList>
                    {libraries}
                </WordList>
                <Scroll><FontAwesomeIcon className="icon" icon={faChevronDown} /></Scroll>

            </Card>
        )
    }
}