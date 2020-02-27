import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPencilAlt, faSearch, faCommentAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import './Leftbar.css'

const links = [
    {
        path: '/',
        name: 'Home',
        icon: 'faHome'
    },
    {
        path: '/play',
        name: 'Play',
        icon: 'faPencilAlt'
    },
    {
        path: '/discover',
        name: 'Discover',
        icon: 'faSearch'
    },
    {
        path: '/community',
        name: 'Community',
        icon: 'faCommentAlt'
    },
    {
        path: '/howto',
        name: 'How to Play',
        icon: 'faQuestionCircle'
    },
]

class Leftbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('location ' + this.props.currentPage)
        return(
            <div className="Leftbar">
                <div className="Leftbar-user">
                    <h3 id="name">Mark Swinimer</h3>
                    <p>Account | Log Out</p>
                </div>
                <div className='Leftbar-link-container'>
                <Link className={
                    this.props.currentPage == 'home' ? 'Leftbar-link active' : 'Leftbar-link'
                } to='/'>
                    <FontAwesomeIcon className="icon" icon={faHome} />
                    Home
                </Link>
                
                <Link className={
                    this.props.currentPage == 'play' ? 'Leftbar-link active' : 'Leftbar-link'
                } to='/play'>  
                    <FontAwesomeIcon className="icon" icon={faPencilAlt} />
                    Play
                </Link>

                <Link className={
                    this.props.currentPage == 'discover' ? 'Leftbar-link active' : 'Leftbar-link'
                } to='/discover'>
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                    Discover
                </Link>

                <Link className={
                    this.props.currentPage == 'community' ? 'Leftbar-link active' : 'Leftbar-link'
                } to='/community'>
                    <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                    Community
                </Link>
                
                <Link className={
                    this.props.currentPage == 'howto' ? 'Leftbar-link active' : 'Leftbar-link'
                } to='/howto'>
                    <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
                    How to play
                </Link>
                </div>
                <div className='Leftbar-copywrite'>
                    copywrite @2020 markswinimer
                </div>
            </div>
        )
    }
}
export default Leftbar;