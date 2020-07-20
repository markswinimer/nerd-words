import React from 'react';
import axios from 'axios';
import FormInput from './FormInput';
import { withRouter } from "react-router-dom";

import { validateEmail, validateUsername, validatePassword, validatePasswordsMatch } from '../../validators';

import {
    StyledLoginComponent, InputSection, SignupField, SignupButton, ChangeMethodLink
} from './LoginComponent.styled';

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: '',
                valid: false,
                error: ''
            },
            password: {
                value: '',
                valid: false,
                error: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateLogin = this.validateLogin.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
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

        const payload = this.validateLogin(this.state)
        
        console.log(payload)

        if (payload !== false) {
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
                    this.props.closeModal(false);
                    this.props.history.push('/create')
                })
        }
    }
    validateLogin(userState) {
        let valid = true;

        for (const [key, v] of Object.entries(userState)) {
            if (userState[key].valid === false) {
                valid = false;
                break;
            }
        }

        if (valid) {
            let login = {
                email: this.state.email.value,
                password: this.state.password.value
            }
            return login;
        } else {
            return false
        }
    }

    validateEmail(e) {
        let value = e.target.value.trim();
        let fieldName = e.target.id;

        const valid = validateEmail(value);

        this.handleValidation(valid, value, fieldName);
    }

    validatePassword(e) {
        let value = e.target.value;
        let fieldName = e.target.id;

        const valid = validatePassword(value);

        this.handleValidation(valid, value, fieldName);
    }

    handleValidation(valid, value, fieldName) {
        if (valid !== true) {
            this.setState({
                [fieldName]: {
                    value: value,
                    error: valid,
                    valid: false
                }
            })
        } else if (valid == true) {
            this.setState({
                [fieldName]: {
                    value: value,
                    error: '',
                    valid: true
                }
            })
        }
    }

    render() {
        return (
            <StyledLoginComponent onSubmit={this.handleSubmit}>

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
                        label="password"
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password.value}
                        handleChange={this.handleChange}
                        error={this.state.password.error}
                        validateInput={this.validatePassword}
                    />
                  
                </InputSection>

                <ChangeMethodLink id="signup" onClick={this.props.loginOptionChange}>
                    Don't have an account yet? Sign up here.
                </ChangeMethodLink>

                <SignupButton type="submit" value="log in" />

            </StyledLoginComponent>
        )
    }
}

export default withRouter(SignupComponent);
