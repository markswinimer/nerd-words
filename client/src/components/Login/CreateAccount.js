import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';

import EditableInput from '../global-components/EditableInput';

import { Card, Label, Option } from '../../global';
import { StyledLoginPage } from './LoginPage.styled';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestSignup = this.requestSignup.bind(this);
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
        return(
            <div>
                <Card>
                        <Label className="Label">
                            <h2>Sign Up</h2>
                            <p>Signing up allows you to create, save, and favorite libraries.</p>
                        </Label>
                        <form onSubmit={this.handleSignUp}>
                            <Option>
                                <h2>Name</h2>
                                <EditableInput
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={this.state.username}
                                    handleChange={this.handleChange}
                                />
                            </Option>
                            <Option>
                                <h2>email</h2>
                                <EditableInput
                                    id="password"
                                    name="password"
                                    type="text"
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                />
                            </Option>
                            <Option>
                                <h2>password</h2>
                                <EditableInput
                                    id="password"
                                    name="password"
                                    type="text"
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                />
                            </Option>
                        <Option>
                            <Link to="/login" className="signup" onClick={this.handleSignUpForm}>
                                Back to Log In Page.
                            </Link>
                        </Option>
                            <Option>
                                <button>Sign Up</button>
                            </Option>
                        </form>
                    </Card>
            </div>
        )
    }
}
export default CreateAccount;