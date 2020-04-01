import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEye } from '@fortawesome/free-solid-svg-icons'

import { StyledTableEntry, EntryLabel, EntryButtons, Button } from './TableEntry.styled';

class TableEntry extends React.Component {
    render() {
        const { libraryName, authorName, creationDate, wordCount, playCount } = this.props;

        return(
            <StyledTableEntry>
                <EntryLabel className="libraryName">{libraryName}</EntryLabel>
                <EntryLabel className="authorName">{authorName}</EntryLabel>
                {/* <EntryLabel className="creationDate">{creationDate}</EntryLabel> */}
                <EntryLabel className="wordCount">{wordCount}</EntryLabel>
                <EntryLabel className="playCount">{playCount}</EntryLabel>

                <EntryButtons>
                    <Button>
                        <FontAwesomeIcon className="icon" icon={faStar} />
                    </Button>
                    <Button>
                        <FontAwesomeIcon className="icon" icon={faEye} />
                    </Button>
                </EntryButtons>
            </StyledTableEntry>
        )
    }
}
export default TableEntry;