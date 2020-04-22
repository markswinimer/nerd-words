import React from 'react';
import TableRow from './TableRow';

// A simple component that shows the pathname of the current location

import { StyledFilter, StyledDiscover,
    TableHead, TableBody, Table, DataHeader, SearchBar, ToggleFilters, Filters, OptionFilter
} from './Discover.styled';
import { Card, Label, Option } from '../../global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from "react-router-dom";

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStore: undefined,
            activeFilterIndex: 0,
            filtersHidden: true
        }
        this.makeSearch = this.makeSearch.bind(this)
        this.storeResults = this.storeResults.bind(this)
        this.handleToggleFilter = this.handleToggleFilter.bind(this)
        this.toggleFilters = this.toggleFilters.bind(this)
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

    toggleFilters() {
        this.setState({ filtersHidden: !this.state.filtersHidden })
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
                    wordCount={lib.words.length}
                    playCount={lib.playCount}
                    _id={lib._id}
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
                    <ToggleFilters onClick={this.toggleFilters}>
                        <h3>Filters</h3>
                        <FontAwesomeIcon className="icon filter" icon={faChevronDown} />
                    </ToggleFilters>

                    <Filters active={this.state.filtersHidden}>
                        <Filter name="owned" index={0} count={50} isActive={this.state.activeFilterIndex === 0} onClick={this.handleToggleFilter} />
                        <Filter name="plays" index={0} count={50} isActive={this.state.activeFilterIndex === 0} onClick={this.handleToggleFilter} />
                        <Filter name="favorites" index={0} count={50} isActive={this.state.activeFilterIndex === 0} onClick={this.handleToggleFilter} />
                    </Filters>
                </OptionFilter>
                <Table>
                    <TableHead>
                        <DataHeader size={4}>Library Name
                            <FontAwesomeIcon className="icon" icon={faChevronDown} />
                        </DataHeader>

                        <DataHeader size={3}>Author
                            <FontAwesomeIcon className="icon" icon={faChevronDown} />
                        </DataHeader>

                        <DataHeader size={2}>Words
                            <FontAwesomeIcon className="icon" icon={faChevronDown} />
                        </DataHeader>

                        <DataHeader size={2}>Plays
                            <FontAwesomeIcon className="icon" icon={faChevronDown} />
                        </DataHeader>

                        <DataHeader size={2}></DataHeader>
                    </TableHead>
                
                    <TableBody>
                        {tableRows}
                    </TableBody>
                    </Table>
                </Card>
            </StyledDiscover>
        )
    }
}

class Filter extends React.Component {
    handleClick = () => this.props.onClick(this.props.index)
    render() {
        return(
            <StyledFilter>
                <input type="radio" active={this.props.isActive ? true : false}
                    onClick={this.handleClick}/>
                {this.props.name}
            </StyledFilter>
        )
    }
}

export default withRouter(Discover);