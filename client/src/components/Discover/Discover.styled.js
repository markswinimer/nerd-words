import styled from 'styled-components';
import { Option } from '../../global';

// Main container
export const StyledDiscover = styled.div`

`

// SearchBar styles
export const SearchForm = styled.form`
    display: flex;

    input {
        border: 1px solid silver;
    }
`
export const SearchBar = styled.input`
    margin-left: 0;
    height: 32px;
    padding-left: .5em;
`

// Filter styles
export const OptionFilter = styled(Option)`
    flex-direction: column;
`
export const ToggleFilters = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    .icon {
        margin-left: 1em;
    }
`
export const Filters = styled.div`
    margin-top: .5em;
    display: ${props => props.active ? "none" : "flex"};
    flex-direction: row;
`
export const StyledFilter = styled.div`
    font-family: "Roboto";
    margin-right: 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const RadioBox = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 4px;
    border: ${props => props.active ? "none" : "1px solid silver"};
    background-color: ${props => props.active ? "#C73636" : "white"};
    margin-right: .75em;
    cursor: pointer;
`    

// Table styles
export const Table = styled.div`
`
export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
    font-weight: 300;
    color: black;
    font-size: 17px;

    padding: 1em 2em;
    border-bottom: 1px solid silver;
    background-color: #f8f8f8;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 16px;

        .icon {
            display: none;
        }
    }
`
export const TableBody = styled.div`
`
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
    display: flex;
    flex-direction: row;
    flex: ${props => props.size};
    margin-right: .5em;
    padding: 0 1em;
    cursor: pointer;

    .header {
        border-right: 1px solid silver;
        font-family: "Roboto";
    }

    a {
        color: ${({ theme }) => theme.primaryDark};
        font-family: "Roboto Condensed";
        font-weight: 400;
        cursor: pointer;
    }

    :last-child {
        border-right: none;
        /* justify-content: center; */
    }

    :first-of-type {
        padding-left: 0;
    }

    .icon {
        margin-left: auto;
    }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            padding: 0;
            border: none;
            margin: 0;
            margin-right: .5em;
            
            .icon {
                display: none;
            }
    }
`