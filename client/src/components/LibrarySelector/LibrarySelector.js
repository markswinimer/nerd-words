import React from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import { 
    LibraryLegend, SelectedLibraryEntryRow, LibraryEntryRow, 
    StyledLibraryEntry, StyledLibrarySelector, Entries } 
from './LibrarySelector.styled'

export default class LibrarySelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userLibraries: [],
            selectedLibraryID: undefined,
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

                    // Filters out libraries with 0 words
                    // Should this be in the api? probably.
                    const hasWords = response.data.filter(library => library.words.length > 0);
                    
                    this.setState({
                        userLibraries: hasWords
                    })
                })
        }

        handleChoice(id) {
            // this.props.loadEditForm(id)
            this.setState({ selectedLibraryID: id }, () => {
                this.props.loadEditForm(id)
            })
        }

    render() {
        
        let userLibrariesList = [];
        userLibrariesList = this.state.userLibraries.map(library => (
            <UserLibraryEntry
                libraryName={library.libraryName}
                wordCount={library.words.length}
                _id={library._id}
                setLibrary={this.handleChoice}
                size={this.props.size}
                selectedLibraryID={this.state.selectedLibraryID}
            />
        ))
        return(
            <StyledLibrarySelector size={this.props.size}>
                <FontAwesomeIcon className="iconArrow" icon={faAngleUp} />
                <LibraryLegend>
                    <div>Library Name</div>
                    <div>Word Count</div>
                </LibraryLegend>
                <Entries>
                    {userLibrariesList}
                </Entries>
                <FontAwesomeIcon className="iconArrow" icon={faAngleDown} />
            </StyledLibrarySelector>
        )
    }
}

class UserLibraryEntry extends React.Component {
    handleClick = () => this.props.setLibrary(this.props._id)

    render() {
        let selected = this.props.selectedLibraryID === this.props._id ? SelectedLibraryEntryRow : LibraryEntryRow; 
        return(
            <StyledLibraryEntry>
                <LibraryEntryRow as={selected} size={this.props.size} onClick={this.handleClick}>
                        <div>{this.props.libraryName}</div>
                        <div>{this.props.wordCount}</div>
                </LibraryEntryRow>
            </StyledLibraryEntry>
        )
    }
}