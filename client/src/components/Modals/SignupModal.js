import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import FormInput from './FormInput';

import { Modal, ModalContent, CloseButton, InputSection, ModalBody,
    SignupField, SignupButton, ModalTitle, ModalHeader, ModalForm } from './Modal.styled';

class SignupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            inputError: {
                username: false,
                email: false,
                password: false,
                confirmPassword: false, 
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestSignup = this.requestSignup.bind(this);
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

    requestSignup(payload) {
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
                        <CloseButton onClick={this.props.toggleModal} id="signup">
                            <FontAwesomeIcon className="icon" icon={faTimes} />
                        </CloseButton>
                        <ModalTitle>Sign Up</ModalTitle>
                    </ModalHeader>
                <ModalBody>

                    <InputSection>

                            <FormInput
                                label="username"
                                id="username"
                                name="username"
                                type="text"
                                value={this.state.username}
                                handleChange={this.handleChange}
                                inputError={this.state.inputError}
                                validateInput={this.validateInput}
                            />

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

                            <FormInput
                                label="confirm password"
                                id="confirmPassword"
                                name="confirmPassword"
                                type="text"
                                value={this.state.confirmPassword}
                                handleChange={this.handleChange}
                                errorState={this.state.error}
                                validateInput={this.validateInput}
                            />
                    
                    </InputSection>

                    {/* <Link to="/login" className="signup" onClick={this.handleSignUpForm}>
                        Back to login page
                    </Link> */}
                    <Link to="/login" id="login" onClick={this.props.toggleModal}>
                        Already have an account? Log in.
                    </Link>
                    
                    <SignupButton>Create an Account</SignupButton>

                    </ModalBody>
                </ModalContent>
            </Modal>
        )
    }
}

export default SignupModal;