import styled from 'styled-components'

export const StyledViewLibrary = styled.div`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em 2em;
    border-bottom: 1px solid silver;
    h2 {
        margin: 0;
    }
`

export const DescriptionField = styled(Container)`
    flex-direction: column;
`

export const DetailsField = styled(Container)`
    flex-direction: column;
    border-bottom: none;
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
`

export const WordList = styled.div`

`
export const StyledWordField = styled.input`

`