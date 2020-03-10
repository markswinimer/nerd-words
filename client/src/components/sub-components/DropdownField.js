import React from 'react'

class DropDownField extends React.Component {
    render() {
        const { props } = this
        return (
            <label>{props.id}
                <select
                    id={props.id}
                    name={props.name}
                    type='text'
                    // value={props.value}
                    onChange={props.handleChange}
                >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </label>
        )
    }
}

export default DropDownField;