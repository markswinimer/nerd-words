import React from 'react';

import { StyledEditableInput } from './NewLibraryForm.styled'

const EditableInput = props => {
    return (
        <StyledEditableInput
            autoComplete="off"
            as={props.font}
            id={props.id}
            name={props.name}
            type='text'
            value={props.value}
            onChange={props.handleChange}>

        </StyledEditableInput>
    )
}

export default EditableInput;