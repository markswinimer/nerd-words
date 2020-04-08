import React from 'react';
import { StyledEditToggle } from './ViewLibrary.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons'

const EditToggle = (props) => {
    return(
        <StyledEditToggle
            onClick={props.toggleEdit}
            id={props.id}
        >
            {props.active
                ? <FontAwesomeIcon className="save" icon={faSave} />
                : <FontAwesomeIcon className="edit" icon={faEdit} />
            }
        </StyledEditToggle>
    )
}

export default EditToggle;