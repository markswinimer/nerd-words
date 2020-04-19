import styled from 'styled-components';
import { Card, Option, Label } from '../../global';


export const StyledDiscover = styled.div`
    .filter {
        margin-left: 1em;
        font-size: 10px
    }
`
export const SearchBar = styled.input`
    margin: 0;
    margin-left: 0;
`

export const OptionFilter = styled(Option)`
    flex-direction: column;
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }
`

export const Filters = styled.div`
    flex-direction: row;
    margin-top: 1em;
    
`
export const Filter = styled.div`
    font-family: "Roboto Condensed";
    font-size: 17px;
    margin-right: 1em;

    input { 
        margin-right: .5em;
    }
`

export const Table = styled.div`
    width: 100%;
`
export const TableHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;

    padding: 1em 2em;
    border-bottom: 1px solid silver;
    background-color: #f8f8f8;
`
export const TableBody = styled.div`
    width: 100%;
`

export const Data = styled.div`
    display: flex;
    flex-direction: row;
    flex: ${props => props.size};
    font-size: 17px;
    font-weight: 300;
    font-family: "Roboto Condensed";
    margin-right: .5em;
    padding: 0 1em;

    a {
        color: ${({ theme }) => theme.primaryDark};
        font-family: "Roboto Condensed";
        font-weight: 400;
        cursor: pointer;
    }
    :last-child {
        justify-content: center;
    }
    :first-of-type {
        padding-left: 0;
    }

    .icon {
        margin-left: auto;
    }
`

export const DataClickable = styled(Data)`
    /* color: ${({ theme }) => theme.primaryDark};
    font-weight: 400;
    cursor: pointer; */
`

export const DataHeader = styled(Data)`
    border-right: 1px solid silver;
    font-weight: 400;
    color: black;
    font-family: "Roboto";
`
export const SearchFilter = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid silver;
    justify-content: center;
`

export const StyledFilterToggle = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    height: 40px;
    padding-bottom: .5em;
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
