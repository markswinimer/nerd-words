import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import SignupComponent from './SignupComponent';
import LoginComponent from './LoginComponent';

import { Modal, ModalContent, CloseButton, InputSection, ModalBody,
    SignupField, SignupButton, ModalTitle, ModalHeader, ModalForm } from './Modal.styled';

const modals = {
    login: "Log In",
    signup: "Sign Up"
}
class SignupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Modal>
                <ModalContent>

                    <ModalHeader>
                        <CloseButton onClick={this.props.toggleModal} id={this.props.modal}>
                            <FontAwesomeIcon className="icon" icon={faTimes} />
                        </CloseButton>
                        <ModalTitle>{modals[this.props.modal]}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        { this.props.modal === "signup" ? <SignupComponent id={this.props.modal} loginOptionChange={this.props.toggleModal}/> : null }
                        {this.props.modal === "login" ? <LoginComponent id={this.props.modal} loginOptionChange={this.props.toggleModal}/> : null }
                    </ModalBody>
                </ModalContent>
            </Modal>
        )
    }
}

export default SignupModal;