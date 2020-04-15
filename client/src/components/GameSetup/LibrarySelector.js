import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faPlusSquare, faGamepad, faStar, faEdit, faCalendarAlt, faChevronUp, faChevronDown, faSave } from '@fortawesome/free-solid-svg-icons'

import {
    StyledWordList, Container, Scroll, WordList, StyledWordField,
    WordContainer
} from './LibrarySelector.styled';

export default class LibraryWordList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            libraryList: this.props.library,
            currentWord: "",
            currentWord_id: "",
            editing: false,
            libraries: null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        if (!this.libraries) {
            this.makeSearch()
        }
    }

    storeResults(results) {
        this.setState({ libraries: results.libraries })
    }

    makeSearch() {
        let url = "/libraries"
        
        // if (this.state.activeFilterIndex === 2) {
        //     url += "/owned"
        // }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const results = { libraries: data }
                this.storeResults(results)
                console.log(results)
            })
            .catch(err => {
                console.log("Request was unsuccesful, error log: " + err)
            })
    }

    handleChange(event) {
        console.log("Current WORD = " + this.state.currentWord)
        const newWord = event.target.value
        console.log("New = " + newWord)
        this.setState({ currentWord: newWord })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("HIHIHI")
        const payload = {
            word: this.state.currentWord,
            id: this.state.currentWord_id
        }
        this.props.updateWord(payload)
        this.setState({
            currentWord_id: "",
            currentWord: "",
            editing: false
        })
    }

    render() {
        let libraries = [];
        if (this.state.libraries) {
            let librariesLoaded = this.state.libraries
            libraries = librariesLoaded.map(library => (
                <WordContainer id={library._id} selected={this.props.selectedLibrary === library._id} onClick={this.props.handleLibraryChoice}>
                    <h2>{library.libraryName}</h2>
                </WordContainer>

            ))
        }

        return (
            <StyledWordList>
                <Container>
                    <h2>Choose a library</h2>
                </Container>

                <Scroll><FontAwesomeIcon className="icon" icon={faChevronUp} /></Scroll>
                <WordList>
                    {libraries}
                </WordList>
                <Scroll><FontAwesomeIcon className="icon" icon={faChevronDown} /></Scroll>

            </StyledWordList>
        )
    }
}