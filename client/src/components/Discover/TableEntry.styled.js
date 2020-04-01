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
    color: ${({ theme }) => theme.primaryTextColorDark};

    td {
        font-family: "Roboto Condensed";
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
    border: none;
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
    max-height: 30px;
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
export const Entries = styled.div`
    height: 40vh;
    overflow: scroll;
    padding-right: .5em;
    margin: 0;

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

export const TableFooter = styled(TableHeader)`
    margin: 0;
    padding: 0;
    height: 15px;
`