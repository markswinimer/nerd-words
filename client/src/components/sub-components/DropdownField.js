import React from 'react'

const DropDownField = props => {
    return (
        <label>{props.id}
            <select
                id={props.id}
                name={props.name}
                type='text'
                value={props.value}
                onChange={props.handleChange}
            >
                <option value={10}>Small</option>
                <option value={30}>Medium</option>
                <option value={60}>Large</option>
            </select>
        </label>
    )
}

export default DropDownField;