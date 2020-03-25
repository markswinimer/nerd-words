import styled from 'styled-components';

export const StyledLibrarySelector = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${props => props.size === "small" ? "50%" : "auto"};
    max-height: 300px;

    .icon {
        font-size: 1em;
    }
    .iconArrow {
        font-size: 1.5em;
        margin: .5em auto;
    }
`

export const StyledLibraryEntry = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
`

export const LibraryEntryRow = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .25em 2em .25 1em;
    border: 1px solid silver;
    border-radius: 8px;
    margin-bottom: .25em;
    height: ${props => props.size === "small" ? "25px" : "50px"};
    max-width: 100%;
    font-size: 1em;
    cursor: pointer;


    :hover {
        background-color: #c73636;
     color: white;
    }

    div {
        flex: 1
    }
    .icon {
        padding: 0 1em;
        margin-right: 1em;
    }
`

export const SelectedLibraryEntryRow = styled(LibraryEntryRow)`
    background-color: #c73636;
    color: white;    
    pointer-events: none;
`
export const LibraryLegend = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .25em 2em .25 1em;
    border: 1px solid silver;
    border-radius: 8px;
    margin-bottom: .25em;
    min-height: 30px;
    max-width: 100%;
    font-size: 1em;
    cursor: pointer;
    background-color: #F5F5F5;
    padding-left: 4em;
    position: sticky;

    div {
        flex: 1;
        font-weight: bold;
    }
`