import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validate from 'validate.js';
import FormInput from './FormInput';

import { validateEmail } from '../../validators';

import {
    StyledLoginComponent, InputSection, SignupField, SignupButton, ChangeMethodLink
} from './LoginComponent.styled';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: undefined,
                valid: false,
                error: undefined
            },
            password: {
                value: undefined,
                valid: false,
                error: undefined
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestLogin = this.requestLogin.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    handleChange(e) {
        console.log(e.target.name)
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


    validateInput(e) {
        if(this.state[e.target.id].value !== undefined) {
            const id = e.target.id;
            const value = e.target.value;
            const valid = validateEmail(value);

            if(valid !== true) {
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
                        validateInput={this.validateInput}
                    />

                    <FormInput
                        label="password"
                        id="password"
                        name="password"
                        type="text"
                        value={this.state.password.value}
                        handleChange={this.handleChange}
                        error={this.state.password.error}
                        validateInput={this.validateInput}
                    />
                </InputSection>

                {/* <Link to="/login" id="signup" onClick={this.props.loginOptionChange}>
                    Don't have an account? Sign up now.
                </Link> */}

                <ChangeMethodLink id="signup" onClick={this.props.loginOptionChange}>
                    Don't have an account? Sign up now.
                </ChangeMethodLink>

                <SignupButton>Log in</SignupButton>

            </StyledLoginComponent>
        )
    }
}

export default LoginComponent;