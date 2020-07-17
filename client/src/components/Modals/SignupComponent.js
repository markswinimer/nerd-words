import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validate from 'validate.js';
import FormInput from './FormInput';

import { validateEmail, validateUsername, validatePassword } from '../../validators';

import {
    StyledLoginComponent, InputSection, SignupField, SignupButton, ChangeMethodLink
} from './LoginComponent.styled';

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: undefined,
                valid: false,
                error: undefined
            },
            username: {
                value: undefined,
                valid: false,
                error: undefined
            },
            password: {
                value: undefined,
                valid: false,
                error: undefined
            },
            confirmPassword: {
                value: undefined,
                valid: false,
                error: undefined
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestLogin = this.requestLogin.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: {
                ...this.state[e.target.name],
                value: e.target.value
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const payload = {
            ...this.state
        };
        this.requestSignUp(payload);
    }


    validateEmail(e) {
        if(this.state[e.target.id].value !== undefined) {
            const id = e.target.id;
            const value = e.target.value;
            const valid = validateEmail(value);

            if(valid !== true) {
                console.log("NOT TRUE")
                console.log(valid)
                this.setState({
                    [e.target.id]: {
                        ...this.state[e.target.id],
                        error: valid,
                        valid: false
                    }
                })
            }
        }
    }
    validateUsername(e) {
        if(this.state[e.target.id].value !== undefined) {
            const id = e.target.id;
            const value = e.target.value;
            const valid = validateUsername(value);

            if(valid !== true) {
                console.log("NOT TRUE")
                console.log(valid)
                this.setState({
                    [e.target.id]: {
                        ...this.state[e.target.id],
                        error: valid,
                        valid: false
                    }
                })
            }
        }
    }

    validatePassword(e) {
        if(this.state[e.target.id].value !== undefined) {
            const valid = validatePassword(e.target.value);

            if(valid !== true) {
                this.setState({
                    [e.target.id]: {
                        ...this.state[e.target.id],
                        error: valid,
                        valid: false
                    }
                })
            }
        }
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
            <StyledLoginComponent>

                <InputSection>

                    <FormInput
                        label="email"
                        id="email"
                        name="email"
                        type="text"
                        value={this.state.email.value}
                        handleChange={this.handleChange}
                        error={this.state.email.error}
                        validateInput={this.validateEmail}
                    />
                    <FormInput
                        label="username"
                        id="username"
                        name="username"
                        type="text"
                        value={this.state.username.value}
                        handleChange={this.handleChange}
                        error={this.state.username.error}
                        validateInput={this.validateUsername}
                    />
                    <FormInput
                        label="password"
                        id="password"
                        name="password"
                        type="text"
                        value={this.state.password.value}
                        handleChange={this.handleChange}
                        error={this.state.password.error}
                        validateInput={this.validatePassword}
                    />
                    <FormInput
                        label="confirmPassword"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="text"
                        value={this.state.confirmPassword.value}
                        handleChange={this.handleChange}
                        error={this.state.confirmPassword.error}
                        validateInput={this.validatePassword}
                    />
                </InputSection>

                <ChangeMethodLink id="login" onClick={this.props.loginOptionChange}>
                    Already have an account? Click here to log in.
                </ChangeMethodLink>

                <SignupButton>Log in</SignupButton>

            </StyledLoginComponent>
        )
    }
}

export default SignupComponent;