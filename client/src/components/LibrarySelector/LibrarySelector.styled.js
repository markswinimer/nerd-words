import styled from 'styled-components';

export const StyledViewLibrary = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2em;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em 2em;
    border-bottom: 1px solid #D3D3D3;

    h1 {
        margin-top: .5em;
        /* border: 1px solid white; */
        
    }
    h2 {
        margin-top: 1em;
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
    border: 1px solid #D3D3D3;
`
export const StyledAddWordsForm = styled.div`
    margin-top: 2em;
   
`

export const WordInput = styled.input`
    border: 1px solid #D3D3D3;
    padding: 1em;
`
export const WordForm = styled.form`
    padding-top: 1em;
    border: 1px solid #D3D3D3;
    border-top: none;
    margin-left: 4em;
    padding: 1em;
    background-color: #f3f3f3;
    display: ${props => !props.hidden ? "none" : "inherit"};

`

export const Title = styled(Container)`
    padding: 1em 2em;
    border: 1px solid #D3D3D3;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    .icon {
        height: 100%;
        font-size: 2em;
        color: ${({ theme }) => theme.primaryDark};
    }
    h2 {
        margin-top: 0;
        margin-right: 1em;
    }

    :hover {
            color: white;
            background-color: ${({ theme }) => theme.primaryDark};
        .icon {
                color: white;
            }
    }

`

export const WordListContainer = styled.div`
    margin-top: 2em;
    border: 1px solid #D3D3D3;
    max-height: 30em;
    padding-top: 2em;
        font-family: "Roboto Condensed";
    font-weight: 400;
`
export const StyledWordList = styled.div`
    border-top: none;
    max-height: 30em;
`

export const Toggle = styled.div`
    display: ${props => props.active ? "flex" : "none"};
    cursor: pointer;
`
export const WordContainer = styled.div`
    border-bottom: 1px solid #D3D3D3;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.selected ? "#c73636" : "white"};
    color: ${props => props.selected ? "white" : "black"};

    :hover {
        background-color: ${({ theme }) => theme.primaryDark};
        color: white;
    }
    h2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.25em;
        font-weight: normal;
        width: 300px;
        min-height: 2em;
        padding: 0 1.5em;
    }   

    .icon { 
        margin-left: 1em;
    }
`

export const WordList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 15em;

    div:last-child {
        border-bottom: none;
    }
`
export const StyledWordField = styled.input`
    min-height: 2em;
    padding: 0 1.5em;
    border: none;
    width: 300px;
    border: ${props => props.editable ? "1px solid red" : "none"};

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
    border-bottom: 1px solid #D3D3D3;

    :last-child {
        border: none;
        border-top: 1px solid #D3D3D3
    }
`

export const Label = styled.div`
`
export const Card = styled.div`
`