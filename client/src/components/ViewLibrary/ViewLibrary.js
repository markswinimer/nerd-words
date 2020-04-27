import React from 'react';
import axios from 'axios';
import Scroll from 'react-scroll';
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faStar } from '@fortawesome/free-solid-svg-icons'

import validateWord from '../../helpers';

import EditableInput from './EditableInput';
import LibraryWordList from './LibraryWordList';
import AddWordsForm from './AddWordsForm';


import { StyledViewLibrary, DetailsField, DetailsContainer, Detail, Title,
    StyledEditableInput, NameLabel, AddWordsButton
} from './ViewLibrary.styled'

import { Card } from '../../global';

const emptyLibrary = {
    libraryName: undefined,
    authorName: undefined,
    description: undefined,
    creationDate: undefined,
    favoriteCount: undefined,
    words: [],
    _id: undefined
}

var scroller = Scroll.scroller;

class ViewLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWordValue: "",
            currentOtherValue: "",
            editingTitle: false,
            initLibrary: true,
            library: emptyLibrary,
            libraryName: undefined,
            description: undefined,
            wordLibrary: false,
            addWords: false,
            authenticatedUser: true,
            error: false
        }
        this.handleWordChange = this.handleWordChange.bind(this)
        this.handleWordSubmit = this.handleWordSubmit.bind(this)
        this.toggleAddWords = this.toggleAddWords.bind(this)
        this.scrollToWord = this.scrollToWord.bind(this)
        this.updateField = this.updateField.bind(this)
        this.toggleEditTitle = this.toggleEditTitle.bind(this)
        this.checkSubmitTitle = this.checkSubmitTitle.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.updateWord = this.updateWord.bind(this)
        this.change = this.change.bind(this)

    }

    handleWordChange(event) {
        const currentWord = event.target.value
        console.log("word")
        console.log(currentWord)
        console.log("target")
        console.log(event.target.id)

        this.setState({ [event.target.id]: currentWord })
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        let id = params.id.slice(1)
        let url = "/libraries/" + id
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

    checkSubmitTitle(e) {
        if(e.keyCode == 13) {
            e.preventDefault()
            this.updateField(e.currentTarget.id)
            console.log('value ' + e.target.value)
        }
    }

    toggleEditTitle(e) {
        console.log("MADE IT + " + e)
        let newLibraryName = "";
        let newDescription = "";
        if(this.state.editingTitle) {
            this.updateField(e.currentTarget.id)
        } else {
            newLibraryName = this.state.library.libraryName
            newDescription = this.state.library.description
            this.setState({
                editingTitle: !this.state.editingTitle,
                libraryName: newLibraryName,
                description: newDescription
            })
        }
    }

    toggleAddWords(e) {
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

    scrollToWord() {
        scroller.scrollTo('bottomElement', {
            duration: 100,
            delay: 100,
            smooth: true,
            containerId: 'containerElement',
            offset: 50,
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

        if(this.state.library.words.includes(this.state.currentWordValue)) {
            this.setState({ error: "cannot add duplicate words" })
        } else if (!validateWord(this.state.currentWordValue)) {
            this.setState({ error: "word must not contain special characters" })
        } else  {

        axios(options)
            .then(response => {
                let library = this.state.library
                library[response.data.type] = response.data.value
                this.scrollToWord()
                this.setState({
                    library: library,
                    currentWordValue: "",
                    error: false
                })
        })
        }
    }
    
    updateField(field) {
        console.log("UPDATEFIELD")
        let url = "/libraries/" + this.state.library._id
        let update = {
            [field]: this.state[field]
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
                    currentWordValue: "",
                    editingTitle: false,
                    libraryName: undefined,
                    description: undefined
                })
            })
    }

    updateWord(payload) {
        // This function will eventually point to the word list entry in the database once it is independant from the word library entry
        let url = "/libraries/" + this.state.library._id
        console.log("updating word")
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
                    <Card>
                        <NameLabel>
                        <Title>
                            {!this.state.editingTitle
                            ? <h1>{this.state.library.libraryName}</h1>
                            : <EditableInput
                                id="libraryName"
                                name="libraryName"
                                type="text"
                                value={this.state.libraryName}
                                checkSubmitTitle={this.checkSubmitTitle}
                                handleChange={this.handleWordChange}
                              />
                            }
                          
                            {!this.state.editingTitle
                            ? <p>{this.state.library.description}</p>
                            : <EditableInput
                                id="description"
                                name="description"
                                type="text"
                                value={this.state.description}
                                checkSubmitTitle={this.checkSubmitTitle}
                                handleChange={this.handleWordChange}
                              />
                            }
                        </Title>
                        {this.state.authenticatedUser
                            ? <AddWordsButton active={this.state.editingTitle} onClick={this.toggleEditTitle} id="editTitle">
                                {this.state.editingTitle
                                    ? "Save"
                                    : "Edit"
                                }
                                </AddWordsButton>
                            // ? <EditToggle
                            //     toggleEdit={this.toggleEditTitle}
                            //     id="libraryName"
                            //     active={this.state.libraryName}
                            // />
                            : null
                        }
                      </NameLabel>
                    <DetailsField active={this.state.addWords || this.state.wordLibrary === true}>
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
                    </Card>

                {this.state.authenticatedUser
                    ? <AddWordsForm
                        active={this.state.addWords}
                        toggleEdit={this.toggleAddWords}
                        currentWord={this.state.currentWordValue}
                        handleSubmit={this.handleWordSubmit}
                        handleChange={this.handleWordChange}
                        error={this.state.error}
                    />
                    : null
                }

                <LibraryWordList
                    library={this.state.library}
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

export default withRouter(ViewLibrary);