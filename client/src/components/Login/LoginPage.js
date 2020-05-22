import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import EditableInput from '../global-components/EditableInput';
import CreateAccount from './CreateAccount';

import { Card, Label, Option } from '../../global';
import { StyledLoginPage } from './LoginPage.styled';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestLogin = this.requestLogin.bind(this);
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
        this.requestLogin(payload);
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
        return(
            <StyledLoginPage>
                {/* Log in or sign up */}
                    <Card>
                        <Label className="Label">
                            <h2>Log into your account</h2>
                            <p>Logging in allows you to create, save, and favorite libraries.</p>
                        </Label>
                        <form onSubmit={this.handleSubmit}>
                        <Option>
                            <h2>Username</h2>
                            <EditableInput
                                id="username"
                                name="username"
                                type="text"
                                value={this.state.username}
                                handleChange={this.handleChange}
                            />
                        </Option>
                        <Option>
                            <h2>Password</h2>
                            <EditableInput
                                id="password"
                                name="password"
                                type="text"
                                value={this.state.password}
                                handleChange={this.handleChange}
                            />
                        </Option>
                        <Option>
                            <Link to="/signup" className="signup" onClick={this.handleSignUpForm}>
                                If you don't have an account click here to sign up.
                            </Link>
                        </Option>
                        <Option>
                            <button>Log in</button>
                        </Option>
                        </form>
                    </Card>

            </StyledLoginPage>
        )
    }
}
export default LoginPage;