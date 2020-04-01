import styled from 'styled-components';

export const StyledLibrarySelector = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    /* max-width: ${props => props.size === "small" ? "75%" : "auto"}; */
    max-height: 300px;
    padding-right: 1em;
    
    .icon {
        font-size: 1em;
    }
    .iconArrow {
        font-size: 1.5em;
        margin: .5em auto;
    }
`

export const Entries = styled.div`
    overflow: scroll;
    padding-right: .5em;
    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, .5);
        box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    }
`

export const StyledLibraryEntry = styled.div`
    display: flex;
    flex-direction: column;
`

export const LibraryEntryRow = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .75em 2em;
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
        flex: 1;
    }
    .icon {
        padding: 0 1em;
        margin-right: 1em;
        width: auto;
    }
`

export const SelectedLibraryEntryRow = styled(LibraryEntryRow)`
    background-color: #c73636;
    color: white;    
    pointer-events: none;
`
export const LibraryLegend = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid silver; */
    border-radius: 8px;
    margin-bottom: .25em;
    min-height: 40px;
    max-width: 100%;
    font-size: 1em;
    cursor: pointer;
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
    padding-left: 2em;
    position: sticky;
    padding-right: 3em;

    div {
        flex: 1;
        font-weight: bold;
    }
`