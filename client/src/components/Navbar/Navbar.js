import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div` 
    background-color: #c73636;
    display: flex;
    flex-direction: row;
    padding: .5rem 5rem .5rem 4em;
    align-items: center;
    border-bottom: 1px solid #d87171;
    color: white;

    .links {
        margin-left: auto;
    }
`
const Logo = styled.div`
    width: 30px;
    height: 30px;
    padding: 1px 2px 3px 1px;
    border-radius: 3px;
    background-color: #c73636;
    background-color: #fafafa;
    color: #c73636;
    font-family: 'Oleo Script', sans-serif;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: .3em;
`

const Title = styled.div`
    font-size: 1.8em;
    font-family: "Roboto Condensed";
    font-weight: bold;
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