import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPencilAlt, faSearch, faCommentAlt, faQuestionCircle, faGamepad } from '@fortawesome/free-solid-svg-icons'

import { StyledMenu, StyledLink } from './Menu.styled';

const Menu = ({ currentPage, open }) => {

        return(
            <StyledMenu open={open}>

                <div className="user">
                    <h3 id="name">Mark Swinimer</h3>
                    <p>Account | Log Out</p>
                </div>
                
                <div>
                    <StyledLink className={
                        currentPage === 'home' ? 'Menu-link active' : 'Menu-link'
                    } to='/'>
                        <FontAwesomeIcon className="icon" icon={faHome} />
                        Home
                    </StyledLink>
                    
                    <StyledLink className={
                        currentPage === 'play' ? 'Menu-link active' : 'Menu-link'
                    } to='/play'>  
                        <FontAwesomeIcon className="icon" icon={faGamepad} />
                        Play
                    </StyledLink>

                    <StyledLink className={
                        currentPage === 'create' ? 'Menu-link active' : 'Menu-link'
                    } to='/create'>
                            <FontAwesomeIcon className="icon" icon={faPencilAlt} />
                        Create
                    </StyledLink>

                    <StyledLink className={
                        currentPage === 'discover' ? 'Menu-link active' : 'Menu-link'
                    } to='/discover'>
                        <FontAwesomeIcon className="icon" icon={faSearch} />
                        Discover
                    </StyledLink>

                    <div className={
                        "Menu-link unavailable"
                        // -- Disabled --
                        // this.props.currentPage === 'howto' ? 'Menu-link active' : 'Menu-link'
                    } to='/howto'>
                        <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
                        How to play
                    </div>
                </div>
            </StyledMenu>
        )
    }
export default Menu;