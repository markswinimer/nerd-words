import React from 'react';
import TableEntry from './TableEntry';

import { SearchFilter, SearchResultsTable, StyledFilterToggle, FilterResultsCount, StyledDiscover } from './Discover.styled';
import { TableHeader, TableFooter, Entries, EntryLabel, EntryButtons, Button } from './TableEntry.styled';


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
                <TableEntry 
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
                <h1>Word Libraries</h1>
                <label>Search
                    <input/>
                </label>
                <SearchFilter>
                    <FilterToggle name="All" index={0} count={50} isActive={this.state.activeFilterIndex === 0} onClick={this.handleToggleFilter}/>
                    <FilterToggle name="Top" index={1} count={10} isActive={this.state.activeFilterIndex === 1} onClick={this.handleToggleFilter}/>
                    <FilterToggle name="Owned" index={2} count={13} isActive={this.state.activeFilterIndex === 2} onClick={this.handleToggleFilter}/>
                </SearchFilter>

                <SearchResultsTable>
                    <div>
                        <TableHeader legend>
                            <EntryLabel large className="libraryName">Library Name</EntryLabel>
                            <EntryLabel medium className="authorName">Author</EntryLabel>
                            {/* <EntryLabel className="creationDate">Created on</EntryLabel> */}
                            <EntryLabel small className="wordCount">Words</EntryLabel>
                            <EntryLabel small className="playCount">Plays</EntryLabel>
                            <EntryButtons medium></EntryButtons>
                        </TableHeader>
                        {/* <TableHeader>
                                <th className="libraryName">Collection Name</th>
                                <th className="authorName">Creator</th>
                                <th className="creationDate">Date</th>
                                <th className="wordCount">Words</th>
                                <th className="playCount">Plays</th>
                                <th className="sortSpace"></th>
                        </TableHeader> */}
                    </div>
                    <Entries>
                            {tableRows}
                    </Entries>
                    <TableFooter></TableFooter>
                </SearchResultsTable>
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