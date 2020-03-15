import React from 'react';
import styled from 'styled-components'


const StyledLibraryPreview = styled.div`
    height: 300px;
`

class LibraryPreview extends React.Component {
    render() {
        return(
            <StyledLibraryPreview>
                <h1>LIBRARY NAME</h1>
            </StyledLibraryPreview>
        )
    }
}

export default LibraryPreview;