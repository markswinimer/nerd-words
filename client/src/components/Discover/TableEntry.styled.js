import styled from 'styled-components'

export const StyledTableEntry = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2em;
    border: 1px solid silver;
    border-radius: 8px;
    margin-bottom: .25em;
    height: 50px;
    max-width: 100%;

    td {
    font-family: "Roboto Condensed";
    color: #303030;
    text-align: left;
    }

`

export const EntryLabel = styled.td`

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
`

export const TableEntry = styled.div`

.TableEntry .icon {
    font-size: 1em;
    margin-right: 0;
}

.TableEntry-button {
    padding: .5em .5em;
    margin-right: 1em;
    border: none;
    background-color: #d87171;
    color: white;
    border-radius: 10px;
    font-size: 1em;
}

.TableEntry-button.icon {
    padding: .5em .5em;
    margin-right: 1em;
}


.sortSpace {
    flex: 2;
    display: flex;
    flex-direction: row;
}

`