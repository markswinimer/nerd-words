import React from 'react';
import LibraryPreview from '../LibraryPreview';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { StyledForm } from './AddWordsForm.styled'
import './AddWords.css'

export default class AddWordsForm extends React.Component {
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
            <div className="AddWordsForm">
            <LibraryPreview library={this.state.library}/>
            <h2>Add Words</h2>
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


            {/* <form className="CreateForm-submit" onSubmit={this.handleSubmit}>
                <button>SAVE</button>
            </form> */}
                <div className="WordList">
                    {words}
                </div>
            </div >
        )
    }
}

const WordField = props => {
    return (
        <input
            autoComplete="off"

            id={props.id}
            name={props.name}
            type='text'
            className="WordField"
            value={props.value}
        // onChange={props.handleChange}
        />
    )
}