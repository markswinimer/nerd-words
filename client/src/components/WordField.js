import React from 'react';

class WordField extends React.Component {
    render() {
        const props = this
        return(
            <input 
                id={props.id}
                name={props.name}
                type='text'
            // value={props.value}
            // onChange={props.handleChange}
            />
        )
    }
}
export default WordField;