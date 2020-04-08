import React from 'react';
import EditToggle from './EditToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faPlusSquare, faGamepad, faStar, faEdit, faCalendarAlt, faChevronUp, faChevronDown, faSave } from '@fortawesome/free-solid-svg-icons'

import { StyledWordList, Container, Scroll, WordList, StyledWordField,
    WordContainer, Toggle
} from './ViewLibrary.styled';

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
        this.props.updateWord(this.state.currentWord)
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

        // if (this.state[e.currentTarget.id]) {
        //     this.updateField(e.currentTarget.id)
        // } else {
        //     editingValue = this.state.library[e.currentTarget.id]
        // }
        // this.setState({
        //     [e.currentTarget.id]: !this.state[e.currentTarget.id],
        //     currentWordValue: editingValue
        // })
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
            <StyledWordList>
                <Container>
                    <h2>Word Library</h2>
                    <EditToggle
                        toggleEdit={this.props.toggleEdit}
                        id="wordLibrary"
                        active={this.props.active}
                    />
                </Container>

                <Scroll><FontAwesomeIcon className="icon" icon={faChevronUp} /></Scroll>
                <WordList>
                    {words}
                </WordList>
                <Scroll><FontAwesomeIcon className="icon" icon={faChevronDown} /></Scroll>

            </StyledWordList>
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
            onChange={props.handleChange}
            editable={props.editable}
        />
    )
}