import React from 'react';
import styled from 'styled-components';

import { StyledEditableInput } from './ViewLibrary.styled'

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