import React from 'react';
import styled from 'styled-components';

const StyledFormInput = styled.div`
    margin-top: 2em;
`

const InputContainer = styled.div`
    max-width: 100%;
    width: 100%;
    padding: .25em .75em 0 .5em;
    border: 1px solid #C73636;
    border-bottom: 4px solid #C73636;
    border-radius: 4px;
`

const InputLabel = styled.div`
    color: #C73636;
    font-weight: 500;
`

const InputError = styled.div`
    background-color: #FEEFB3;
    color: #9F6000;
    font-weight: 500;
    padding: .25em .5em;
    margin-top: .25em;
    margin-right: 2em;
    border-radius: 4px;
`

const StyledInput = styled.input`
    min-height: 30px;
    padding: .25em 0;
    border: none;
    max-width: 100%;
    width: 100%;
    font-size: 20px;
    color: #080808;
    caret-color: #C73636;

    &:focus {
        outline: none;
    }
`

const FormInput = props => {

    return (
        <StyledFormInput>
            <InputContainer>

                <InputLabel>{props.label}</InputLabel>

                <StyledInput
                    autoComplete="off"
                    id={props.id}
                    name={props.name}
                    type='text'
                    value={props.value}
                    onChange={props.handleChange}
                    width={props.width}
                    onBlur={props.validateInput}
                />
            </InputContainer>

            { props.error 
                ? <InputError>{props.error}</InputError> 
                : null }

        </StyledFormInput>
    )
}

export default FormInput;

