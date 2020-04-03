import styled from 'styled-components'

export const StyledViewLibrary = styled.div`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 0em 1em 2em;
    border-bottom: 1px solid silver;

    h1 {
        margin-top: .5em;
    }
    h2 {
        margin-top: 1em;
    }

    .edit {
        font-size: 1.3em;
        margin-left: auto;
        margin-right: .75em;
        margin-top: .75em;
        cursor: pointer;
        :hover {
        }
    }
`

export const DescriptionField = styled(Container)`
    flex-direction: column;

    div {
        display: flex;
        flex-direction: row;
    }
`

export const DetailsField = styled(Container)`
    flex-direction: column;
    border-bottom: none;
    padding: 0 0em 1em 2em;

    div {
        display: flex;
        flex-direction: row;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    .column { 
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .authorName {
        align-items: baseline;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Detail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1em;

    h4 {
        color: ${({ theme }) => theme.primaryDark};
        margin-right: 1em;
        /* font-size: 1em; */
        margin: none;
    }

    .icon {
        color: ${({ theme }) => theme.primaryDark};
        font-size: 1.5em;
        margin-right: 1em;
    }
`

export const LibraryInformation = styled.div`
    border: 1px solid silver;
`

export const WordListContainer = styled.div`
    margin-top: 2em;
    border: 1px solid silver;
    max-height: 30em;
`

export const WordList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 15em;
`
export const StyledWordField = styled.input`
    min-height: 2em;
    padding: 0 1.5em;
    border: none;
    border-bottom: 1px solid silver;

    :last-child {
        border-bottom: none;
    }
`
export const Scroll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 2.5em;
    border-bottom: 1px solid silver;

    :last-child {
        border: none;
        border-top: 1px solid silver
    }
`