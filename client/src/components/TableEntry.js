import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './TableEntry.css';

class TableEntry extends React.Component {
    render() {
        return(
            <div>
            <tr className="TableEntry">
                <td className="libraryName">Magic of Words</td>
                <td className="authorName">Ian Todd</td>
                <td className="date">03/1/2020</td>
                <td className="wordCount">877</td>
                <td className="playCount">14</td>
                <td className="sortSpace">
                    <button className="TableEntry-button icon">
                        <FontAwesomeIcon className="icon" icon={faStar} />
                    </button>
                    <button className="TableEntry-button">View</button>
                </td>
            </tr>
            <tr className="TableEntry">
                <td className="libraryName">Zombie Words</td>
                <td className="authorName">Mark Swinimer</td>
                <td className="date">03/3/2020</td>
                <td className="wordCount">80</td>
                <td className="playCount">7</td>
                <td className="sortSpace">
                    <button className="TableEntry-button icon">
                        <FontAwesomeIcon className="icon" icon={faStar} />
                    </button>
                    <button className="TableEntry-button">View</button>
                </td>
            </tr>
            </div>
        )
    }
}
export default TableEntry;