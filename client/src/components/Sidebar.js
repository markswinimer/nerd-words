import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPencilAlt, faSearch, faCommentAlt, faQuestionCircle, faGamepad } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css'

// const links = [
//     {
//         path: '/',
//         name: 'Home',
//         icon: 'faHome'
//     },
//     {
//         path: '/play',
//         name: 'Play',
//         icon: 'faPencilAlt'
//     },
//     {
//         path: '/discover',
//         name: 'Discover',
//         icon: 'faSearch'
//     },
//     {
//         path: '/community',
//         name: 'Community',
//         icon: 'faCommentAlt'
//     },
//     {
//         path: '/howto',
//         name: 'How to Play',
//         icon: 'faQuestionCircle'
//     },
// ]

class Sidebar extends React.Component {
    render() {
        return(
            <div className="Sidebar">
                <div className="Sidebar-user">
                    <h3 id="name">Mark Swinimer</h3>
                    <p>Account | Log Out</p>
                </div>
                <div className='Sidebar-link-container'>
                <Link className={
                    this.props.currentPage === 'home' ? 'Sidebar-link active' : 'Sidebar-link'
                } to='/'>
                    <FontAwesomeIcon className="icon" icon={faHome} />
                    Home
                </Link>
                
                <Link className={
                    this.props.currentPage === 'play' ? 'Sidebar-link active' : 'Sidebar-link'
                } to='/play'>  
                    <FontAwesomeIcon className="icon" icon={faGamepad} />
                    Play
                </Link>

                <Link className={
                    this.props.currentPage === 'create' ? 'Sidebar-link active' : 'Sidebar-link'
                } to='/create'>
                        <FontAwesomeIcon className="icon" icon={faPencilAlt} />
                    Create
                </Link>

                <Link className={
                    this.props.currentPage === 'discover' ? 'Sidebar-link active' : 'Sidebar-link'
                } to='/discover'>
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                    Discover
                </Link>

                <div className={
                    "Sidebar-link unavailable"
                    // -- Disabled --
                    // this.props.currentPage === 'community' ? 'Sidebar-link active' : 'Sidebar-link'
                } to='/community'>
                    <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                    Community
                </div>
                
                <div className={
                    "Sidebar-link unavailable"
                    // -- Disabled --
                    // this.props.currentPage === 'howto' ? 'Sidebar-link active' : 'Sidebar-link'
                } to='/howto'>
                    <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
                    How to play
                </div>
                </div>
                <div className='Sidebar-copywrite'>
                    copywrite @2020 markswinimer
                </div>
            </div>
        )
    }
}
export default Sidebar;