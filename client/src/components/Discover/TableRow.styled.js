import styled from 'styled-components'

export const StyledTableRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: ${props => props.size};
    padding: 1em 2em;
    border-bottom: 1px solid silver;
    :hover {
    background-color: #f5f5f5;
    }
`

export const Data = styled.div`
    flex: ${props => props.size};

    :last-child {
        justify-content: center;
    }
`

export const TableHeader = styled(StyledTableRow)`
    margin-top: 1em;
    font-weight: bold;
    border: none;
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
    max-height: 30px;
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