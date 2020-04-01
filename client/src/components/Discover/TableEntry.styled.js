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
        color: ${({ theme }) => theme.primaryTextColorDark};
        text-align: left;
    }

    .libraryName {
        flex: 3;
    }
    .authorName {
        flex: 2;
    }
    /* .creationDate {
        flex: 2;
    } */
    .wordCount {
        flex: 1;
    }
    .playCount {
        flex: 1;
    }  
    @media (max-width: ${({ theme }) => theme.mobile}) {
        .playCount {
            display: none;
            font-weight:bold;
        }  
    }
`

export const TableHeader = styled(StyledTableEntry)`
    margin-top: 1em;
    font-weight: bold;
`

export const EntryLabel = styled.td`

`

export const EntryButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    min-width: 100px;
    overflow: hidden;

    :first-child {
        margin-right: 1em;
    }
`

export const Button = styled.div`
    border: none;
    border: none;
    padding: 0em .5em;
    font-size: 1em;
    background-color: ${({ theme }) => theme.primaryLight};
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    border-radius: 3px;
    min-width: 35px;
    height: 35px;

    :first-child {
        margin-right: 1em;
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