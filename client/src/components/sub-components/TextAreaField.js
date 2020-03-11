import React from 'react';

const TextAreaField = props => {
    return (
        <textarea className="CreateForm-description-box"
            id={props.id}
            name={props.name}
            type='text'
            onChange={props.handleChange}
        >{props.value}
        </textarea>

    )
}

export default TextAreaField;