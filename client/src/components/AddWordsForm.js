import React from 'react';
import WordField from './sub-components/WordField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class AddWordsForm extends React.Component {
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
        this.setState({
            currentWordValue: "",
            library: editLibrary
        })
    }


    render() {
        let words;
        console.log(this.props)
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
                <p>Your library has been loaded.</p>
                {/* {this.state.library.wordLibrary.length < 1 ? <p>Your library is empy, add some words!</p> : null} */}
           
            <h2>Add Words</h2>
            <form onSubmit={this.handleWordSubmit} className="AddWordsForm">
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

export default AddWordsForm;