import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import { WordInput, WordForm, AddLabel, AddWordsButton, Indicator } from './ViewLibrary.styled'
import { Card, Label, Option } from '../../global';

const AddWordsForm = (props) => {

    return(
        <Card >
            <AddLabel>
                <h2>Enable Add Words</h2>
                {/* <Indicator active={props.active}>{props.active
                    ? "On"
                    : "Off"
                }</Indicator> */}
                <AddWordsButton active={props.active} onClick={props.toggleEdit} id="addWords">
                    {props.active
                        ? "Turn Off"
                        : "Turn On" 
                    }
                    </AddWordsButton>

            </AddLabel>
            {/* <Option>
                {!props.active
                    ? <FontAwesomeIcon onClick={props.toggleEdit} id="addWords" className="icon" icon={faAngleDown} />
                    : <FontAwesomeIcon onClick={props.toggleEdit} id="addWords" className="icon" icon={faAngleUp} />
                }
            </Option> */}

                <WordForm hidden={props.active} onSubmit={props.handleSubmit}>
                    <h3>Add a word:</h3>
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