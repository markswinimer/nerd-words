import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import { WordInput, WordForm } from './ViewLibrary.styled'
import { Card, Label, Option } from '../../global';

const AddWordsForm = (props) => {

    return(
        <Card >
            <Label onClick={props.toggleEdit} id="addWords">
                <h2>Add Words</h2>
            </Label>
            <Option>
                {!props.active
                    ? <FontAwesomeIcon onClick={props.toggleEdit} id="addWords" className="icon" icon={faAngleDown} />
                    : <FontAwesomeIcon onClick={props.toggleEdit} id="addWords" className="icon" icon={faAngleUp} />
                }
            </Option>

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
        </Card>
    )
}

export default AddWordsForm