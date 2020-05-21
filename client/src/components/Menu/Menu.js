import React from 'react';
import { withRouter, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPencilAlt, faSearch, faGamepad } from '@fortawesome/free-solid-svg-icons'

import { StyledMenu, StyledMenuLink, MenuContainer, Footer } from './Menu.styled';

const Menu = ({ currentPage, open, setOpen, history }) => {
    const path = history.location.pathname;
    return (
        <MenuContainer open={open}>
        <StyledMenu>

            <div className="user">
                <Link to="/login" id="name">Please Log In</Link>
                    <p>Logging in is required to create and favorite libraries.</p>
            </div>
            {/* <div className="user">
                <p>Hello,</p>
                <h3 id="name">Default Account</h3>
            </div> */}

            <div>
                <MenuLink
                    currentPage={path}
                    name="Home"
                    path="/"
                    icon={faHome}
                    setOpen={setOpen}
                />
                <MenuLink
                    currentPage={path}
                    name="Play"
                    path="/play"
                    icon={faGamepad}
                    setOpen={setOpen}
                />
                <MenuLink
                    currentPage={path}
                    name="Create"
                    path="/create"
                    icon={faPencilAlt}
                    setOpen={setOpen}
                />
                <MenuLink
                    currentPage={path}
                    name="Discover"
                    path="/discover"
                    icon={faSearch}
                    setOpen={setOpen}
                />
            </div>
            <Footer>

            </Footer>
        </StyledMenu>
        </MenuContainer>
    )
}
export default withRouter(Menu);

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