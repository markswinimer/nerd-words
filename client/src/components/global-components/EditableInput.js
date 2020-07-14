import React from 'react';
import styled from 'styled-components';

const StyledEditableInput = styled.input`
    margin-top: .5em;
    min-height: 2em;
    padding: 0 .5em;
    border: none;
    border: 1px solid silver;
    width: ${props => props.width};
    max-width: 100%;
`

const EditableInput = props => {
    return (
        <StyledEditableInput
            autoComplete="off"
            id={props.id}
            name={props.name}
            type='text'
            value={props.value}
            onChange={props.handleChange}
            width={props.width}
        />
    )
}

export default EditableInput;

