import React from 'react';
import { Link } from 'react-router-dom';

import { Data, StyledTableRow } from './Discover.styled';

export default class TableRow extends React.Component {
    render() {
        const { libraryName, authorName, creationDate, wordCount, playCount, _id } = this.props;
        return(
            <StyledTableRow>
                <Data size={4} className="libraryName"><Link to={`/library/:${_id}`}>{libraryName}</Link></Data>
                <Data size={3} className="authorName">{authorName}</Data>
                {/* <Data className="creationDate">{creationDate}</Data> */}
                <Data size={2} className="wordCount">{wordCount}</Data>
                <Data size={2} className="playCount">{playCount}</Data>
                {/* <DataClickable size={2}><Link>view</Link></DataClickable> */}
            </StyledTableRow>
        )
    }
}