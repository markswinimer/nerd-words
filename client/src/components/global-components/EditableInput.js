import React from 'react';

import { StyledEditableInput } from './global-components.styled';

const EditableInput = props => {
    return (
        <StyledEditableInput
            autoComplete="off"
            id={props.id}
            name={props.name}
            type='text'
            value={props.value}
            onChange={props.handleChange}>
        </StyledEditableInput>
    )
}

export default EditableInput;

