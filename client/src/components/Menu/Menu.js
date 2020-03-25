import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPencilAlt, faSearch, faCommentAlt, faQuestionCircle, faGamepad } from '@fortawesome/free-solid-svg-icons'

import { StyledMenu, StyledMenuLink } from './Menu.styled';

const Menu = ({ currentPage, open, setOpen }) => {

    return (
        <StyledMenu open={open}>

            <div className="user">
                <h3 id="name">Mark Swinimer</h3>
                <p>Account | Log Out</p>
            </div>

            <div>
                <MenuLink
                    currentPage={currentPage}
                    name="Home"
                    path="/"
                    icon={faHome}
                    setOpen={open}
                />
                <MenuLink
                    currentPage={currentPage}
                    name="Play"
                    path="/play"
                    icon={faGamepad}
                    setOpen={open}
                />
                <MenuLink
                    currentPage={currentPage}
                    name="Create"
                    path="/create"
                    icon={faPencilAlt}
                    setOpen={open}
                />
                <MenuLink
                    currentPage={currentPage}
                    name="Discover"
                    path="/discover"
                    icon={faSearch}
                    setOpen={open}
                />
                {/* <MenuLink
                    currentPage={currentPage}
                    name="howto"
                    icon={faHome}
                    setOpen={open}
                /> */}
            </div>
        </StyledMenu>
    )
}
export default Menu;

const MenuLink = props => {
    console.log(props.currentPage)
    return (
        <StyledMenuLink
            active={props.currentPage === props.path}
            to={props.path}
            setOpen={props.open}>
            <FontAwesomeIcon className="icon" icon={props.icon} />
            {props.name}
        </StyledMenuLink>
    )
}