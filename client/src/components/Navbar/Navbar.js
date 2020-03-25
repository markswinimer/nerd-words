import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div` 
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
    padding: .75rem 5rem .75rem 1em;
    align-items: center;
    border-bottom: 2px solid #d87171;

    .links {
        margin-left: auto;
    }
`
const Logo = styled.div`
    width: 40px;
    height: 40px;
    padding: 1px 2px 3px 1px;
    border-radius: 3px;
    background-color: #c73636;
    color: #fafafa;
    font-family: 'Oleo Script', sans-serif;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    margin-right: .3em;
`

const Title = styled.div`
    font-size: 1.8em;
    font-family: "Roboto Condensed";
    font-weight: bold;
    color: #303030;
`
const Navbar = () => {
    return(
        <StyledNavbar>
            <Logo>N</Logo>
            <Title>Nerd Words</Title>
            <div className='links'></div>
        </StyledNavbar>
    )
}

export default Navbar;