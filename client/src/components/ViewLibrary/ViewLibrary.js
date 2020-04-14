import React from 'react';
import LibraryPreview from '../LibraryPreview';
import EditableInput from './EditableInput';
import LibraryWordList from './LibraryWordList';
import EditToggle from './EditToggle';
import AddWordsForm from './AddWordsForm';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faPlusSquare, faMinusSquare, faGamepad, faStar, faEdit, faCalendarAlt, faChevronUp, faChevronDown, faSave } from '@fortawesome/free-solid-svg-icons'

import { StyledViewLibrary, Container, DescriptionField, WordListContainer, LibraryInformation, WordList, StyledWordField,
    Scroll, DetailsField, DetailsContainer, Detail, Title,
    StyledEditableInput, EditableParagraph
} from './ViewLibrary.styled'

export default class ViewLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWordValue: "",
            initLibrary: true,
            library: this.props.library,
            libraryName: false,
            description: false,
            wordLibrary: false,
            addWords: false,
            authenticatedUser: true
        }
        this.handleWordChange = this.handleWordChange.bind(this)
        this.handleWordSubmit = this.handleWordSubmit.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.updateField = this.updateField.bind(this)
        this.updateWord = this.updateWord.bind(this)
        this.change = this.change.bind(this)

    }

    handleWordChange(event) {
        console.log("WORD = " + this.state.currentWordValue)
        const currentWord = event.target.value
        console.log("WORD = " + currentWord)
        this.setState({ currentWordValue: currentWord })
    }
    change() {
        console.log("WORD = " + this.state.currentWordValue)
    }

    handleWordSubmit(event) {
        event.preventDefault()
        // REPLACE with post to word library on back end 
        // current use is to get base functionality
        // let editLibrary = this.state.library
        // editLibrary.words.push(this.state.currentWordValue)
        this.postNewWord()
        // this.setState({
        //     currentWordValue: "",
        //     library: editLibrary
        // })
    }

    toggleEdit(e) {
        console.log("MADE IT + " + e)
        let editingValue = ""
        if(this.state[e.currentTarget.id]) {
            this.updateField(e.currentTarget.id)
        } else {
            editingValue = this.state.library[e.currentTarget.id]
        }
        this.setState({ 
            [e.currentTarget.id]: !this.state[e.currentTarget.id],
            currentWordValue: editingValue
        })
    }

    postNewWord() {
        console.log("UPDATEFIELD")

        console.log(this.state.currentWordValue)

        let url = "/libraries/" + this.state.library._id
        let word = {
            words: [this.state.currentWordValue]
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
                library[response.data.type] = response.data.value

                this.setState({
                    library: library,
                    currentWordValue: ""
                })
        })
    }
    
    updateField(field) {
        console.log("UPDATEFIELD")
        let url = "/libraries/" + this.state.library._id
        let update = {
            [field]: this.state.currentWordValue
        }
        const options = {
            url: url,
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: update
        };

        axios(options)
            .then(response => {
                console.log("__________________> " + response.data.type)
                let library = this.state.library
                library[response.data.type] = response.data.value

                this.setState({
                    library: library,
                    currentWordValue: ""
                })
            })
    }

    updateWord(payload) {
        // This function will eventually point to the word list entry in the database once it is independant from the word library entry
        let url = "/libraries/" + this.state.library._id
        const options = {
            url: url,
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: payload
        };

        axios(options)
            .then(response => {
                let library = this.state.library
                library.words = response.data.words
                console.log(response.data)
                
                this.setState({
                    library: library,
                    currentWordValue: "",
                    // wordLibrary: false
                })
            })
    }

    render() {

        return(
            <StyledViewLibrary>
                <LibraryInformation>
                    <Container>

                        {!this.state.libraryName
                        ? <h1>{this.state.library.libraryName}</h1>
                        : <EditableInput
                                id="libraryName"
                                type="text"
                                font={StyledEditableInput}
                                value={this.state.currentWordValue}
                                handleChange={this.handleWordChange}
                            />
                        }

                        {this.state.authenticatedUser
                            ? <EditToggle
                                toggleEdit={this.toggleEdit}
                                id="libraryName"
                                active={this.state.libraryName}
                            />
                            : null
                        }

                    </Container>

                    <DescriptionField>
                        <div>
                            <h2>Description</h2>
                            {this.state.authenticatedUser
                                ? <EditToggle
                                    toggleEdit={this.toggleEdit}
                                    id="description"
                                    active={this.state.description}
                                />
                                : null
                            }
                        </div>

                        {!this.state.description
                            ? <p>{this.state.library.description}</p>
                            : <EditableInput
                                id="description"
                                type="text"
                                font={EditableParagraph}
                                value={this.state.currentWordValue}
                                handleChange={this.handleWordChange}
                            />
                        }
                        
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
                
                {this.state.authenticatedUser
                ?   <AddWordsForm
                        active={this.state.addWords}
                        toggleEdit={this.toggleEdit}
                        currentWord={this.state.currentWordValue}
                        handleSubmit={this.handleWordSubmit}
                        handleChange={this.handleWordChange}
                    />
                : null
                }

                <LibraryWordList
                    library={this.props.library}
                    toggleEdit={this.toggleEdit}
                    active={this.state.wordLibrary}
                    handleChange={this.handleWordChange}
                    updateWord={this.updateWord}
                    authenticatedUser={this.state.authenticatedUser}
                />
            </StyledViewLibrary>
        )
    }
}