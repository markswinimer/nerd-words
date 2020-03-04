import React from 'react';
import TableEntry from './TableEntry';
import Table from './Table';
import './Discover.css'
// const fetch = require('node-fetch');
import fetch from 'node-fetch';




class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStore: undefined,
            activeFilterIndex: 0
        }
        this.getLibs = this.getLibs.bind(this)
        this.storeResults = this.storeResults.bind(this)
        this.handleToggleFilter = this.handleToggleFilter.bind(this)
    }

    componentDidMount() {
        if(!this.searchStore) {
            this.getLibs()
        }
    }

    storeResults(data) {
        this.setState({ searchStore: data })
    }

    getLibs() {
        const url = "http://localhost:5000/libraries"

        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.storeResults(data)
        })
        .catch(err => {
            console.log("Request was unsuccesful, error log: " + err)
        })
    }

    handleToggleFilter(index) {
        this.setState({ activeFilterIndex: index })
    }

    render() {
        let tableRows;
        console.log(this.state.searchResults)

        if (this.state.searchStore) {
            console.log("THIS IS HAPPENING")
            tableRows = this.state.searchStore.map(lib => (
                <TableEntry 
                    libraryName={lib.librayName}
                    authorName={lib.authorName}
                    creationDate={lib.creationDate}
                    wordCount={lib.wordCount}
                    playCount={lib.playCount}
                />
            ))
        }

        return(
            <div className="Discover">
                <div className="Discover-title">
                    <h1>Word Libraries</h1>
                    <button>+ Create</button>
                </div>
                <div className="Discover-filter-container">
                    <FilterToggle name="All" index={0} count={50} isActive={this.state.activeFilterIndex === 0} onClick={this.handleToggleFilter}/>
                    <FilterToggle name="Top" index={1} count={10} isActive={this.state.activeFilterIndex === 1} onClick={this.handleToggleFilter}/>
                    <FilterToggle name="Owned" index={2} count={13} isActive={this.state.activeFilterIndex === 2} onClick={this.handleToggleFilter}/>
                </div>

                <div className="Discover-table">
                    <table>
                        <tbody>
                            <tr className="Discover-table-header">
                                    <th className="libraryName">Collection Name</th>
                                    <th className="authorName">Creator</th>
                                    <th className="date">Date</th>
                                    <th className="wordCount">Words</th>
                                    <th className="playCount">Date</th>
                                    <th className="sortSpace"></th>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class FilterToggle extends React.Component {
    handleClick = () => this.props.onClick(this.props.index)
    render() {
        return(
            <div className={
                this.props.isActive ? 'Discover-filter active' : 'Discover-filter unselected'
                } 
                onClick={this.handleClick}
            >
                {this.props.name}
                <div className="Discover-filter-amount">{this.props.count}</div>
            </div>
        )
    }
}

export default Discover;