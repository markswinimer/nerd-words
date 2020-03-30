import styled from 'styled-components';


export const StyledDiscover = styled.div`

    label { 
        margin-right: 1em;
    }
    input {
        margin: 1em auto;
        margin-left: 1em;
    }
`

export const SearchFilter = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid silver;
    padding: 0 4em;
`

export const StyledFilterToggle = styled.div`
    flex: 1;
    display: flex;
    height: 40px;
    padding-bottom: .5em;
    align-items: center;
    margin-right: 4em;
    font-weight: bold;
    border-bottom: ${props => props.active ? "#2px solid #c73636" : "none"};
    color: ${props => props.active ? "#202020" : "#707070"};

    :hover {
        color: #202020;
        border-bottom: 2px solid #d87171;
        cursor: pointer;
    }
`

export const FilterResultsCount = styled.div`
    margin-left: .4em;
    background-color: #d87171;
    color: white;
    padding: .2em .4em;
    border-radius: 5px;
`

export const SearchResultsTable = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const TableHeader = styled.tr`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2em;
    border: 1px solid silver;
    border-radius: 8px;
    margin: 1.5em 0 .25em 0;
    height: 30px;
    max-width: 100%;

    th {
        font-family: "Roboto Condensed";
        color: #303030;
        text-align: left;
    }

    .libraryName {
        flex: 3;
    }
    .authorName {
        flex: 3;
    }
    .creationDate {
        flex: 2;
    }
    .wordCount {
        flex: 1;
    }
    .playCount {
        flex: 1;
    }
    .sortSpace {
        flex: 2;
    }
`