import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const StyledLibrarySelector = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${props => props.size === "small" ? "50%" : "auto"};
    max-height: 300px;

    .icon {
        font-size: 1em;
    }
    .iconArrow {
        font-size: 1.5em;
        margin: .5em auto;
    }
`

const StyledLibraryEntry = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
` 

const LibraryEntryRow = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .25em 2em .25 1em;
    border: 1px solid silver;
    border-radius: 8px;
    margin-bottom: .25em;
    height: ${props => props.size === "small" ? "25px" : "50px"};
    max-width: 100%;
    font-size: 1em;
    cursor: pointer;

    :hover {
    background-color: #c73636;
    color: white;
    }

    div {
        flex: 1
    }
    .icon {
        padding: 0 1em;
        margin-right: 1em;
    }
`

const LibraryLegend = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .25em 2em .25 1em;
    border: 1px solid silver;
    border-radius: 8px;
    margin-bottom: .25em;
    min-height: 30px;
    max-width: 100%;
    font-size: 1em;
    cursor: pointer;
    background-color: #F5F5F5;
    padding-left: 4em;
    position: sticky;

    div {
        flex: 1;
        font-weight: bold;
    }
`


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
                size={this.props.size}
            />
        ))
        return(
            <StyledLibrarySelector size={this.props.size}>
                <FontAwesomeIcon className="iconArrow" icon={faAngleUp} />
                <LibraryLegend>
                    <div>Library Name</div>
                    <div>Word Count</div>
                </LibraryLegend>
                <div className="CreateForm-entries">
                    {userLibrariesList}
                </div>
                <FontAwesomeIcon className="iconArrow" icon={faAngleDown} />
            </StyledLibrarySelector>
        )
    }
}

class UserLibraryEntry extends React.Component {
    handleClick = () => this.props.setLibrary(this.props._id)

    render() {
        return(
            <StyledLibraryEntry>
                <LibraryEntryRow size={this.props.size} onClick={this.handleClick}>
                    <FontAwesomeIcon className="icon" icon={faPencilAlt} />
                        <div>{this.props.libraryName}</div>
                        <div>{this.props.wordCount}</div>
                </LibraryEntryRow>
            </StyledLibraryEntry>
        )
    }
}

export default LibrarySelector;