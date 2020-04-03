import React from 'react';
import LibraryPreview from '../LibraryPreview';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faGamepad, faStar, faEdit, faCalendarAlt, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { StyledViewLibrary, Container, DescriptionField, WordListContainer, LibraryInformation, WordList, StyledWordField,
    Scroll, DetailsField, DetailsContainer, Detail } from './ViewLibrary.styled'

export default class ViewLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWordValue: "",
            initLibrary: true,
            library: this.props.library
        }
        this.handleWordChange = this.handleWordChange.bind(this)
        this.handleWordSubmit = this.handleWordSubmit.bind(this)
    }

    handleWordChange(event) {

        const currentWord = event.target.value
        this.setState({ currentWordValue: currentWord })
    }

    handleWordSubmit(event) {
        event.preventDefault()

        // REPLACE with post to word library on back end 
        // current use is to get base functionality
        let editLibrary = this.state.library
        editLibrary.words.push(this.state.currentWordValue)
        this.postNewWord(this.state.library._id)
        this.setState({
            currentWordValue: "",
            library: editLibrary
        })
    }

    postNewWord(id) {
        let url = "/libraries/" + id
        let word = {
            words: this.state.currentWordValue
        }
        const options = {
            url: url,
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: word
        };

        axios(options)
            .then(response => {
                let library = this.state.library
                library.words = response.data

                this.setState({
                    library: library,
                    currentWord: ""
            })
        })
    }

    render() {
        let words = [];
        let libraryLoaded = this.props.library.words
            words = libraryLoaded.map(word => (
                <WordField
                    id={word}
                    name="libraryName"
                    type="text"
                    value={word}
                />
            ))

        return(
            <StyledViewLibrary>
                <LibraryInformation>
                    <Container>
                        
                        <h1>{this.state.library.libraryName}</h1>
                        <FontAwesomeIcon className="edit" icon={faEdit} />
                    </Container>

                    <DescriptionField>
                        <div>
                            <h2>Description</h2>
                            <FontAwesomeIcon className="edit" icon={faEdit} />
                        </div>

                        <p>{this.state.library.description}</p>
                    </DescriptionField>

                    <DetailsField>
                            <h2>Details</h2>
                        <DetailsContainer>
                            
                            <div className="column">
                                <Detail className="authorName">
                                    {/* <FontAwesomeIcon className="icon" icon={faPlusSquare} /> */}
                                    <h4>Author</h4>
                                    {this.state.library.authorName}
                                </Detail>
                                <Detail>
                                    {/* <FontAwesomeIcon className="icon" icon={faCalendarAlt} /> */}
                                    <h4>Created on</h4> {this.state.library.creationDate}
                                </Detail>
                                <Detail>
                                    <h4>Words</h4>
                                    
                                    {this.state.library.wordCount}
                                </Detail>
                            </div>
                            <div className="column">
                                <Detail>
                                    <FontAwesomeIcon className="icon" icon={faGamepad} />
                                    {this.state.library.playCount}
                                </Detail>
                                <Detail>
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    {this.state.library.favoriteCount}
                                </Detail>
                                {/* <Detail>
                                    <FontAwesomeIcon className="icon" icon={faPlusSquare} />
                                    Detail
                                </Detail> */}
                            </div>
                        </DetailsContainer>
                    </DetailsField>
                </LibraryInformation>

                <WordListContainer>
                    <Container>
                        <h2>Word Library</h2>
                        <FontAwesomeIcon className="edit" icon={faEdit} />

                    </Container>

                    <Scroll><FontAwesomeIcon className="icon" icon={faChevronUp} /></Scroll>
                    <WordList>
                        {words}
                    </WordList>
                    <Scroll><FontAwesomeIcon className="icon" icon={faChevronDown} /></Scroll>
                    
                </WordListContainer>

            {/* <h2>Add Words</h2>
            <form onSubmit={this.handleWordSubmit} className="AddWordsForm-form">
                <input
                    autoComplete="off"

                    id="0"
                    name="Main-input"
                    type='text'
                    className="CreateForm-addword"
                    value={this.state.currentWordValue}
                    onChange={this.handleWordChange}
                    onSubmit={this.handleWordSubmit}
                />
                <button>
                    <FontAwesomeIcon className="icon" icon={faPlusSquare} />
                </button>
            </form>

                <div className="WordList">
                    {words}
                </div> */}
            </StyledViewLibrary>
        )
    }
}

const WordField = props => {
    return (
        <StyledWordField
            autoComplete="off"
            id={props.id}
            name={props.name}
            type='text'
            value={props.value}
            onChange={props.handleChange}>
        </StyledWordField>

    )
}