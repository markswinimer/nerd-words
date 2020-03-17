import React from 'react'

const InputField = props => {
    
    return (
        <label>{props.label}
            <input
                id={props.id}
                name={props.name}
                type='text'
                autoComplete="off"

                value={props.value}
                onChange={props.handleChange}
            />
        </label>
    )
}

export default InputField;