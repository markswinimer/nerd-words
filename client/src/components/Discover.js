import React from 'react';
import TableEntry from './TableEntry';
import Table from './Table';
import libraryPayload from '../seed.js'
import './Discover.css'



class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultPayload: undefined
        }
    }

    componentDidMount() {
        const payload = libraryPayload()
        this.setState({ defaultPayload: payload })
    }

    render() {
        let tableRows;
        if(this.state.defaultPayload) {
            tableRows = this.state.defaultPayload.libraries.map(lib => (
                <TableEntry 
                    libraryName={lib.librayName}
                    authorName={lib.authorName}
                    date={lib.date}
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
                    <div className="Discover-filter focus">All<div className="Discover-filter-amount">50</div></div>
                    <div className="Discover-filter">Top<div className="Discover-filter-amount">10</div></div>
                    <div className="Discover-filter">Owned<div className="Discover-filter-amount">15</div></div>
                </div>

                <div className="Discover-table">
                        <tr className="Discover-table-header">
                                <th className="libraryName">Collection Name</th>
                                <th className="authorName">Creator</th>
                                <th className="date">Date</th>
                                <th className="wordCount">Words</th>
                                <th className="playCount">Date</th>
                                <th className="sortSpace"></th>
                        </tr>
                    <div>
                        {tableRows}
                    </div>

                    <div className="testBreak"></div>
                    <Table />
                </div>
            </div>
        )
    }
}

export default Discover;