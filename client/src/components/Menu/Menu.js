import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPencilAlt, faSearch, faCommentAlt, faQuestionCircle, faGamepad } from '@fortawesome/free-solid-svg-icons'

import { StyledMenu, StyledMenuLink } from './Menu.styled';

const Menu = ({ currentPage, open, setOpen, toggleMenu }) => {

    return (
        <StyledMenu open={open}>

            <div className="user">
                <p>Hello,</p>
                <h3 id="name">Mark Swinimer</h3>
                <p>Account | Log Out</p>
            </div>

            <div>
                <MenuLink
                    currentPage={currentPage}
                    name="Home"
                    path="/"
                    icon={faHome}
                    setOpen={setOpen}
                />
                <MenuLink
                    currentPage={currentPage}
                    name="Play"
                    path="/play"
                    icon={faGamepad}
                    setOpen={setOpen}
                />
                <MenuLink
                    currentPage={currentPage}
                    name="Create"
                    path="/create"
                    icon={faPencilAlt}
                    setOpen={setOpen}
                />
                <MenuLink
                    currentPage={currentPage}
                    name="Discover"
                    path="/discover"
                    icon={faSearch}
                    setOpen={setOpen}
                />
                {/* <MenuLink
                    currentPage={currentPage}
                    name="howto"
                    icon={faHome}
                    setOpen={setOpen}
                /> */}
            </div>
        </StyledMenu>
    )
}
export default Menu;

const MenuLink = props => {
    return (
        <StyledMenuLink
            active={props.currentPage === props.path}
            to={props.path}
            onClick={() => props.setOpen(props.open)}>
            <FontAwesomeIcon className="icon" icon={props.icon} />
            {props.name}
        </StyledMenuLink>
    )
}