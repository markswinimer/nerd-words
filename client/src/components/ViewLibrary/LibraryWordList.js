import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import EditToggle from './EditToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Scroll, WordList, StyledWordField,
    WordContainer, Toggle, NameLabel
} from './ViewLibrary.styled';
import { Card } from '../../global';

export default class LibraryWordList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            library: this.props.library,
            currentWord: "",
            currentWord_id: "",
            editing: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
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

    toggleEdit(e) {
        console.log("MADE IT + " + e.currentTarget.id)
        if(this.state.editing === false) {
            this.setState({ 
                currentWord_id: e.currentTarget.id,
                currentWord: e.currentTarget.id,
                editing: true
            })
        } else if(this.state.editing === true && this.state.currentWord_id === e.currentTarget.id) {
            this.setState({
                currentWord_id: "",
                currentWord: "",
                editing: false
            })
        }
    }

    render() {

        let words = [];
        if(this.state.library){
        let libraryLoaded = this.props.library.words
        console.log("current ID = " + this.state.currentWord_id)
        words = libraryLoaded.map(word => (
            <WordContainer onSubmit={this.handleSubmit}>

                {this.state.currentWord_id !== word 
                    ?   <h2>{word}</h2>
                    :   <WordField
                            key={uuidv4()}
                            id={word}
                            name="libraryName"
                            type="text"
                            value={this.state.currentWord}
                            handleChange={this.handleChange}
                            editable={word === this.state.currentWord_id}
                       />
                }

                <Toggle 
                    id={word}
                    active={this.props.active}
                    onClick={this.toggleEdit}
                >
                    <FontAwesomeIcon className="icon" icon={faPencilAlt} />
                </Toggle>
            </WordContainer>

        ))
        }

        return(
            <Card>
                <NameLabel>
                    <h2>Word Library</h2>
                    {this.props.authenticatedUser
                    ? <EditToggle
                        toggleEdit={this.props.toggleEdit}
                        id="wordLibrary"
                        active={this.props.active}
                     />
                    : null
                    }

                </NameLabel>
                <Scroll><FontAwesomeIcon className="icon" icon={faChevronUp} /></Scroll>
                <WordList>
                    {words}
                </WordList>
                <Scroll><FontAwesomeIcon className="icon" icon={faChevronDown} /></Scroll>

            </Card>
        )
    }
}

const WordField = props => {
    return (
        <StyledWordField
            autoComplete="off"
            key={uuidv4()}
            id={props.id}
            name={props.name}
            type='text'
            value={props.value}
            onChange={props.handleChange}
            editable={props.editable}
        />
    )
}