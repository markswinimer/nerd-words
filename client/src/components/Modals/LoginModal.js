import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import FormInput from './FormInput';

import { Modal, ModalContent, CloseButton, InputSection, ModalBody,
    SignupField, SignupButton, ModalTitle, ModalHeader, ModalForm } from './Modal.styled';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            inputError: {
                email: false,
                password: false,
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestLogin = this.requestLogin.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const payload = {
            ...this.state
        };
        this.requestSignUp(payload);
    } 
    
    validateInput(e) {
        const id = e.target.id;
        const value = e.target.value
        const validate = validator.isEmail(value)

        let errorState = this.state.inputError;
        errorState[id] = !validate;

        this.setState({ inputError: errorState })
    }

    requestLogin(payload) {
        let url = "/login"

        console.log("Posting")
        const options = {
            url: url,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: payload
        };

        axios(options)
            .then(response => {
                console.log(response);
                this.props.history.push('/')
            })
    }

    render() {
        return (
            <Modal>
                <ModalContent onSubmit={this.handleSignUp}>

                    <ModalHeader>
                        <CloseButton onClick={this.props.toggleModal} id="login">
                            <FontAwesomeIcon className="icon" icon={faTimes} />
                        </CloseButton>
                        <ModalTitle>Log in</ModalTitle>
                    </ModalHeader>
                <ModalBody>

                    <InputSection>

                            <FormInput
                                label="email"
                                id="email"
                                name="email"
                                type="text"
                                value={this.state.email}
                                handleChange={this.handleChange}
                                inputError={this.state.inputError}
                                validateInput={this.validateInput}

                            />

                            <FormInput
                                label="password"
                                id="password"
                                name="password"
                                type="text"
                                value={this.state.password}
                                handleChange={this.handleChange}
                                inputError={this.state.inputError}
                                validateInput={this.validateInput}

                            />
                    
                    </InputSection>

                    <Link to="/login" id="signup" onClick={this.props.toggleModal}>
                        Don't have an account? Sign up now.
                    </Link>
                    
                    <SignupButton>Log in</SignupButton>

                    </ModalBody>
                </ModalContent>
            </Modal>
        )
    }
}

export default LoginModal;