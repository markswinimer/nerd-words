import React from 'react';
import TableRow from './TableRow';

import { SearchFilter, SearchResultsTable, StyledFilterToggle, FilterResultsCount, StyledDiscover,
    TableHead, TableBody, Table, Row, Data, DataHeader, SearchBar, Filters, Filter, OptionFilter
} from './Discover.styled';
import { Card, Label, Option } from '../../global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStore: undefined,
            activeFilterIndex: 0
        }
        this.makeSearch = this.makeSearch.bind(this)
        this.storeResults = this.storeResults.bind(this)
        this.handleToggleFilter = this.handleToggleFilter.bind(this)
    }

    componentDidMount() {
        if(!this.searchStore) {
            this.makeSearch()
        }
    }

    storeResults(data) {
        this.setState({ searchStore: data })
    }

    makeSearch() {
        let url = "/libraries"

        if(this.state.activeFilterIndex === 0) {
            console.log('Default...')
        } else if(this.state.activeFilterIndex === 1) {
            url += "/top"
        } else if(this.state.activeFilterIndex === 2) {
            url += "/owned"
        }
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.storeResults(data)
            console.log(data)
        })
        .catch(err => {
            console.log("Request was unsuccesful, error log: " + err)
        })
    }

    handleToggleFilter(index) {
        this.setState({ activeFilterIndex: index }, () => {
            this.makeSearch()
        })
    }



    render() {
        let tableRows;

        if (this.state.searchStore) {
            tableRows = this.state.searchStore.map(lib => (
                <TableRow 
                    libraryName={lib.libraryName}
                    authorName={lib.authorName}
                    creationDate={lib.creationDate}
                    wordCount={lib.wordCount}
                    playCount={lib.playCount}
                />
            ))
        }

        return(
            <StyledDiscover>
                <Card>

                <Label>
                    <h1>Word Libraries</h1>
                    <p>Search for libraries to favorite and play with.</p>
                </Label>
                <Option>
                    <h2>Search</h2>
                    <SearchBar/>
                </Option>
                <OptionFilter>
                    <div>
                        <h3>Filters</h3>
                        <FontAwesomeIcon className="icon filter" icon={faChevronDown} />
                    </div>

                    <Filters>
                        <Filter><input type="radio"/>Created by me</Filter>
                        <Filter><input type="radio"/>Play Count (> 50)</Filter>
                        <Filter><input type="radio"/>Favorite Count (> 50)</Filter>
                    </Filters>
                </OptionFilter>
                <Table>

                <TableHead>
                    <DataHeader size={4}>
                        Library Name
                        <FontAwesomeIcon className="icon" icon={faChevronDown} />
                    </DataHeader>
                    <DataHeader size={3}>
                        Author
                        <FontAwesomeIcon className="icon" icon={faChevronDown} />
                    </DataHeader>
                    <DataHeader size={2}>
                        Words
                        <FontAwesomeIcon className="icon" icon={faChevronDown} />
                    </DataHeader>
                    <DataHeader size={2}>
                        Plays
                        <FontAwesomeIcon className="icon" icon={faChevronDown} />
                    </DataHeader>
                    <DataHeader size={2}></DataHeader>
                </TableHead>
                <TableBody>
                    {tableRows}
                </TableBody>
                </Table>

                </Card>

                {/* <SearchFilter>
                    <FilterToggle name="All" index={0} count={50} isActive={this.state.activeFilterIndex === 0} onClick={this.handleToggleFilter}/>
                    <FilterToggle name="Top" index={1} count={10} isActive={this.state.activeFilterIndex === 1} onClick={this.handleToggleFilter}/>
                    <FilterToggle name="Owned" index={2} count={13} isActive={this.state.activeFilterIndex === 2} onClick={this.handleToggleFilter}/>
                </SearchFilter> */}
            </StyledDiscover>
        )
    }
}

class FilterToggle extends React.Component {
    handleClick = () => this.props.onClick(this.props.index)
    render() {
        return(
            <StyledFilterToggle
                active={this.props.isActive ? true : false}
                onClick={this.handleClick}
            >
                {this.props.name}
                <FilterResultsCount>{this.props.count}</FilterResultsCount>
            </StyledFilterToggle>
        )
    }
}

export default Discover;