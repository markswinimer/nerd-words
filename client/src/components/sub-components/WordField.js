import React from 'react';

const WordField = props => {
    
    return(
        <input 
            id={props.id}
            name={props.name}
            type='text'
            className="WordField"
        // value={props.value}
        // onChange={props.handleChange}
        />
    )
}

export default WordField;