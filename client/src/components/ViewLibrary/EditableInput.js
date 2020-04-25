import React from 'react';
import { StyledEditableInput } from './ViewLibrary.styled'

const EditableInput = props => {
    return (
        <StyledEditableInput
            autoComplete="off"
            id={props.id}
            name={props.name}
            type='text'
            value={props.value}
            onKeyDown={props.checkSubmitTitle} 
            onChange={props.handleChange} />
    )
}

export default EditableInput;