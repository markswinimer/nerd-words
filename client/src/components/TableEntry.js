import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './TableEntry.css';

class TableEntry extends React.Component {
    render() {
        const { libraryName, authorName, creationDate, wordCount, playCount } = this.props;

        return(
            <tr className="TableEntry">
                <td className="libraryName">{libraryName}</td>
                <td className="authorName">{authorName}</td>
                <td className="creationDate">{creationDate}</td>
                <td className="wordCount">{wordCount}</td>
                <td className="playCount">{playCount}</td>
                <td className="sortSpace">
                    <button className="TableEntry-button icon">
                        <FontAwesomeIcon className="icon" icon={faStar} />
                    </button>
                    <button className="TableEntry-button">View</button>
                </td>
            </tr>
        )
    }
}
export default TableEntry;