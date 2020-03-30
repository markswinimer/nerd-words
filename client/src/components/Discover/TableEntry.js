import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './TableEntry.css';

import { StyledTableEntry, EntryLabel } from './TableEntry.styled';

class TableEntry extends React.Component {
    render() {
        const { libraryName, authorName, creationDate, wordCount, playCount } = this.props;

        return(
            <StyledTableEntry>
                <EntryLabel className="libraryName">{libraryName}</EntryLabel>
                <EntryLabel className="authorName">{authorName}</EntryLabel>
                <EntryLabel className="creationDate">{creationDate}</EntryLabel>
                <EntryLabel className="wordCount">{wordCount}</EntryLabel>
                <EntryLabel className="playCount">{playCount}</EntryLabel>
                <td className="sortSpace">
                    <button className="TableEntry-button icon">
                        <FontAwesomeIcon className="icon" icon={faStar} />
                    </button>
                    <button className="TableEntry-button">View</button>
                </td>
            </StyledTableEntry>
        )
    }
}
export default TableEntry;