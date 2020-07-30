import React from 'react';
import axios from 'axios';
import FormInput from './FormInput';
import { withRouter } from "react-router-dom";

import { validateEmail, validateUsername, validatePassword, validatePasswordsMatch } from '../../validators';

import {
    StyledLoginComponent, InputSection, SignupField, SignupButton, ChangeMethodLink, FormError
} from './LoginComponent.styled';

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { 
                email: {
                    value: 'mark@gmail.com',
                    valid: true,
                    error: ''
                },
                username: {
                    value: 'markmark1',
                    valid: true,
                    error: ''
                },
                password: {
                    value: 'numnum',
                    valid: true,
                    error: ''
                },
                confirmPassword: {
                    value: 'numnum',
                    valid: true,
                    error: ''
                }
            },
            // user: { 
            //     email: {
            //         value: '',
            //         valid: false,
            //         error: ''
            //     },
            //     username: {
            //         value: '',
            //         valid: false,
            //         error: ''
            //     },
            //     password: {
            //         value: '',
            //         valid: false,
            //         error: ''
            //     },
            //     confirmPassword: {
            //         value: '',
            //         valid: false,
            //         error: ''
            //     }
            // },
            validation: {
                error: '',
                valid: true
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateSubmit = this.validateSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validatePasswordsMatch = this.validatePasswordsMatch.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.pushErrors = this.pushErrors.bind(this);
    }

    handleChange(e) {
        let inputState = this.state.user
        inputState[e.target.name].value = e.target.value
        this.setState({
            ...this.state,
            user: inputState
        })
    }

    pushErrors(){
        let userState = this.state.user;
        for (const [key, v] of Object.entries(userState)) {
            if(userState[key].error === '' && userState[key].valid === false) {
                userState[key].error = key + ' cannot be empty'
            }
        }
       this.setState({ 
            user: userState,
            validation: {
                valid: false,
                error: "Cannot submit, check above fields."
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const payload = this.validateSubmit(this.state.user)

        if(payload === false) {
            this.pushErrors()
        } else {
            let url = "/users"
            
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
                    console.log("RESPONSE : " + response);
                    this.props.closeModal(false);
                    this.props.history.push('/create')
                })
                .catch(error => {
                    console.log("RESPONSE : " + error.response);
                    console.log(error);
                });
        }
    }
    validateSubmit(userState) {
        let valid = true;

        for (const [key,v] of Object.entries(userState)) {
            if(userState[key].valid === false) {
                valid = false;
                break;
            }
        }

        if (valid) {
            let newUser = {
                email: this.state.user.email.value,
                username: this.state.user.username.value,
                password: this.state.user.password.value
            }
            return newUser;
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
    
    validateUsername(e) {
        let value = e.target.value.trim();
        let fieldName = e.target.id;

        const valid = validateUsername(value);
        
        this.handleValidation(valid, value, fieldName);
    }

    validatePassword(e) {
        let value = e.target.value;
        let fieldName = e.target.id;

        const valid = validatePassword(value);

        this.handleValidation(valid, value, fieldName);
    }

    validatePasswordsMatch(e) {
        let value = e.target.value;
        let fieldName = e.target.id;
            
        const valid = validatePasswordsMatch(value, this.state.user.password.value);
            
        this.handleValidation(valid, value, fieldName);
    }

    handleValidation(valid, value, fieldName) {
        if (valid !== true) {
            this.setState({
                ...this.state,
                user: {
                    ...this.state.user,
                    [fieldName]: {
                        value: value,
                        error: valid,
                        valid: false
                    }
                }
            })
        } else if(valid == true) {
            this.setState({
                ...this.state,
                user: {
                    ...this.state.user,
                    [fieldName]: {
                        value: value,
                        error: '',
                        valid: true
                    }
                }
            })
        }
    }

    render() {
        let user = this.state.user

        return (
            <StyledLoginComponent onSubmit={this.handleSubmit}>

                <InputSection>

                    <FormInput
                        label="email"
                        id="email"
                        name="email"
                        type="text"
                        value={user.email.value}
                        handleChange={this.handleChange}
                        error={user.email.error}
                        validateInput={this.validateEmail}
                    />
                    <FormInput
                        label="username"
                        id="username"
                        name="username"
                        type="text"
                        value={user.username.value}
                        handleChange={this.handleChange}
                        error={user.username.error}
                        validateInput={this.validateUsername}
                    />
                    <FormInput
                        label="password"
                        id="password"
                        name="password"
                        type="password"
                        value={user.password.value}
                        handleChange={this.handleChange}
                        error={user.password.error}
                        validateInput={this.validatePassword}
                    />
                    <FormInput
                        label="confirm password"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={user.confirmPassword.value}
                        handleChange={this.handleChange}
                        error={user.confirmPassword.error}
                        validateInput={this.validatePasswordsMatch}
                    />
                </InputSection>

                <ChangeMethodLink id="login" onClick={this.props.loginOptionChange}>
                    Already have an account? Click here to log in.
                </ChangeMethodLink>
                
                <FormError display={!this.state.validation.valid}>{this.state.validation.error}</FormError>
                
                <SignupButton type="submit" value="sign up"/>

            </StyledLoginComponent>
        )
    }
}

export default withRouter(SignupComponent);
