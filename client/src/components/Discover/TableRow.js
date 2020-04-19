import React from 'react';
import { Link } from 'react-router-dom';

import { StyledTableRow } from './TableRow.styled';
import { Data, DataClickable } from './Discover.styled';

export default class TableRow extends React.Component {
    render() {
        const { libraryName, authorName, creationDate, wordCount, playCount } = this.props;

        return(
            <StyledTableRow>
                <DataClickable size={4} className="libraryName"><Link to="/library">{libraryName}</Link></DataClickable>
                <Data size={3} className="authorName">{authorName}</Data>
                {/* <Data className="creationDate">{creationDate}</Data> */}
                <Data size={2} className="wordCount">{wordCount}</Data>
                <Data size={2} className="playCount">{playCount}</Data>
                <DataClickable size={2}><Link>view</Link></DataClickable>
            </StyledTableRow>
        )
    }
}