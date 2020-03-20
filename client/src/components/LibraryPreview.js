import React from 'react';
import styled from 'styled-components'

const StyledLibraryPreview = styled.div`
    margin-top: 1em;
    padding: 1em 2em;
    width: 600px;
    border-radius: 5px;
    background-color: #F5F5F5;
    // border-top: 3px solid #c73636;
    // border-bottom: 2px solid #d87171;
    border: 2px solid #c73636;
    display: flex;
    flex-direction: column;
    color: #202020;
    h1 {
        color: #c73636;
        margin-top: 0;
    }
`
const DetailsContainer = styled.div`
    margin-top: .5em;
    display: flex;
    flex-direction: row;
    flex: 1;

    h3 {
        margin-top: .35em;
        font-size: 1em;
    }
`
const LibraryDetails = styled.div`
    // border: 1px solid grey;
    flex: 3;
    display: flex;
    flex-direction: column;

`

const WordsPreview = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding-left: 2em;
    max-height: 200px;
    overflow: hidden;

    div {
        border: 1px solid #909090;
        border-radius: 3px;
        background-color: white;
        margin-top: .35em;
        padding: 1em;
        padding-left: 2em;
        height: 100%;
        p {
            margin: 0;
        }
    }
`
const Detail = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1em;
    align-items: baseline;

    h3 {
        flex: 2;
    }
    
    div {
        flex: 3;
        text-align: left;
    }
`

const DescriptionContainer = styled.div`
    margin-top: .35em;
`

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