import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import { StyledAddWordsForm, Title, WordInputContainer, WordInput, WordForm } from './ViewLibrary.styled'
import { Word } from '../GameScreen/GameScreen.styled'

const AddWordsForm = (props) => {

    return(
        <StyledAddWordsForm >
            <Title onClick={props.toggleEdit} id="addWords">
                <h2>Add Words</h2>
                {!props.active
                    ? <FontAwesomeIcon onClick={props.toggleEdit} id="addWords" className="icon" icon={faAngleDown} />
                    : <FontAwesomeIcon onClick={props.toggleEdit} id="addWords" className="icon" icon={faAngleUp} />
                }
            </Title>
                <WordForm hidden={props.active} onSubmit={props.handleSubmit}>
                    <WordInput
                        autoComplete="off"
                        id="0"
                        type='text'
                        value={props.currentWord}
                        onChange={props.handleChange}
                        hidden={!props.active}
                    />
                </WordForm>
        </StyledAddWordsForm>
    )
}

export default AddWordsForm