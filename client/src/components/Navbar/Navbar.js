import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SignupModal from '../Modals/SignupModal';
import LoginModal from '../Modals/LoginModal';

const StyledNavbar = styled.div` 
    background-color: #c73636;
    border-bottom: 1px solid #d87171;
    color: white;

    @media (max-width: 800px) {
        padding: .5em 5em .5em 1em;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: .5em 5em .5em 4em;
    align-items: center;
    color: white;

    .links {
        margin-left: auto;
    }
    @media (max-width: 800px) {
    padding: .5em 5em .5em 1em;
    }
    max-width: 1250px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`
const HomeLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
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

const LoginButtons = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: row;
`
const Button = styled.button`
    min-width: 50px;
    height: 35px;
    margin-left: 1em;
    padding: .5em 1em;
    font-weight: 400;
`

const Signup = styled(Button)`
    background-color: white;
    color: #C73636;
    border: 1px solid #C73636;

    :hover {
        border: 1px solid white;
        background-color: #7AB317;
        color: white;
    }
`
const Login = styled(Button)`
    background-color: #C73636;
    color: white;
    border: 1px solid white;
    :hover {
        background-color: #7AB317;
        color: white;
    }
`

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeModal: "signup"
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(e) {
        const id = e.target.id;

        if (id !== this.state.activeModal || this.state.activeModal === undefined) {
            this.setState({ activeModal: id })
        }
    }



    render() {
        return(
            <StyledNavbar>
                <Container>
                    <HomeLink to="/">
                        <Logo>N</Logo>
                        <Title>Nerd Words</Title>
                    </HomeLink>
                    <LoginButtons>
                        <Login onClick={this.toggleModal} id="login">Log in</Login>
                        <Signup onClick={this.toggleModal} id="signup">Sign Up</Signup>
                    </LoginButtons>
                </Container>

                { this.state.activeModal === "signup" ? <SignupModal toggleModal={this.toggleModal}/> : null }
                { this.state.activeModal === "login" ? <LoginModal toggleModal={this.toggleModal}/> : null }

            </StyledNavbar>
        )
    }
}

export default Navbar;