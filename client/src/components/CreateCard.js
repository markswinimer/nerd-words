import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


class CreateCard extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleTruncate = this.handleTruncate.bind(this)
    } 
    handleClick() {
        this.props.onClick(this.props.id)
    }    
    handleTruncate() {
        this.props.onClick("")
    }    

    render() {
        return(
            <div className="Create-card">
                <button onClick={this.handleClick}><FontAwesomeIcon className="icon" icon={faPlus} />
                    {this.props.name}
                    </button>
                <button className="minus" onClick={this.handleTruncate}>
                    <FontAwesomeIcon className="icon" icon={faMinus} />
                </button>
            </div>
        )
    }
}
export default CreateCard;