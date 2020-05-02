import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import TableRow from './TableRow';

import { StyledFilter, StyledDiscover, Table, TableHeader, TableBody, SearchBar,
    ToggleFilters, Filters, OptionFilter, RadioBox, SearchForm, Data
} from './Discover.styled';
import { Card, Label, Option } from '../../global';


class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStore: undefined,
            filter: 0,
            filtersHidden: true,
            search: undefined,
            searchBarValue: undefined
        }
        this.search = this.search.bind(this)
        this.storeResults = this.storeResults.bind(this)
        this.handleToggleFilter = this.handleToggleFilter.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleFilters = this.toggleFilters.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        if(!this.searchStore) {
            this.search("/libraries")
        }
    }

    storeResults(data) {
        this.setState({ searchStore: data })

    }
    handleChange(e) {
        this.setState({ search: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        let query = `/libraries/?query=${this.state.search}`
        this.search(query);
    }
    search(query) {
        const options = {
            url: query,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };

        axios(options)
            .then(response => {
                this.storeResults(response.data)
            })
    }

    toggleFilters() {
        this.setState({ 
            filtersHidden: !this.state.filtersHidden,
            filter: undefined
         })
    }

    handleToggleFilter(index) {
        const query = `/libraries/?filter=${index}`
        if (this.state.filter !== index) {
            this.setState({ filter: index }, () => {
                this.search(query)
            })
        }
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
                        <SearchForm onSubmit={this.handleSubmit}>
                            <h2>Search</h2>
                            <SearchBar value={this.state.searchBarValue} onChange={this.handleChange}/>
                        </SearchForm>
                    </Option>

                    <OptionFilter>
                        <ToggleFilters onClick={this.toggleFilters}>
                            <h3>Filters</h3>
                            <FontAwesomeIcon className="icon filter" icon={faChevronDown} />
                        </ToggleFilters>

                        <Filters active={this.state.filtersHidden}>
                                <Filter name="Top 10" index="topTen" count={50} isActive={this.state.filter === "topTen"} onClick={this.handleToggleFilter} />
                                <Filter name="Show Libraries with 0 words" index="noWords" count={50} isActive={this.state.filter === "noWords"} onClick={this.handleToggleFilter} />
                        </Filters>
                    </OptionFilter>

                    <Table>
                        <TableHeader>
                            <Data className="header" size={4}>Library Name
                                <FontAwesomeIcon className="icon" icon={faChevronDown} />
                            </Data>

                            <Data className="header" size={3}>Author
                                <FontAwesomeIcon className="icon" icon={faChevronDown} />
                            </Data>

                            <Data className="header" size={2}>Words
                                <FontAwesomeIcon className="icon" icon={faChevronDown} />
                            </Data>

                            <Data className="header" size={2}>Plays
                                <FontAwesomeIcon className="icon" icon={faChevronDown} />
                            </Data>

                            {/* <Data className="header" size={2}></Data> */}
                        </TableHeader>
                    
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
            <StyledFilter active={this.props.isActive ? true : false}>
                <RadioBox active={this.props.isActive ? true : false} onClick={this.handleClick}/>
                {this.props.name}
            </StyledFilter>
        )
    }
}

export default withRouter(Discover);