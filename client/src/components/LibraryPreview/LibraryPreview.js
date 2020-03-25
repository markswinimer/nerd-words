import React from 'react';

import { DetailsContainer, StyledLibraryPreview, LibraryDetails, WordsPreview, Detail, DescriptionContainer } from './LibraryPreview.styled'

class LibraryPreview extends React.Component {

    render() {
        const { library } = this.props
        let words = library.words.slice(0, 5).map(word => (
            <p>{word}</p>
        ))
        return(
            <StyledLibraryPreview>
                <h1>{library.libraryName}</h1>
                <DetailsContainer>
                    <LibraryDetails>
                        <Detail>
                            <h3>Author</h3>
                            <div>{library.authorName}</div>
                        </Detail>
                        <Detail>
                            <h3>Word Count</h3>
                            <div>{library.wordCount}</div>
                        </Detail>
                        <Detail>
                            <h3>Plays</h3>
                            <div>{library.numPlays}</div>
                        </Detail>
                        <Detail>
                            <div>{library.numFavorites}</div>
                        </Detail>
                        <h3>Description</h3>
                        <DescriptionContainer>
                            {library.description}
                        </DescriptionContainer>
                    </LibraryDetails>

                    <WordsPreview>
                        <h3>Word Preview</h3>

                        <div>
                            {words}
                        </div>
                    </WordsPreview>
                </DetailsContainer>

            </StyledLibraryPreview>
        )
    }
}

export default LibraryPreview;