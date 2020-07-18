import validate from 'validate.js';

function validateEmail(field) {
    if (!field) {
        return "Email cannot be empty"
    }
    const constraints = {
        email: {
            email: {
                email: true,
                message: "^Email not valid"
            }
        }
    }
    
    const results = validate({ email: field }, constraints)
    
    if(results) {  
        return results.email;
    } else {
        return true;
    }
}

function validateUsername(field) {
    if (!field) {
        return "Username cannot be empty"
    }
    const constraints = {
        username: {
            presence: true,
            format: {
                pattern: "[a-z0-9]+",
                flags: "i",
                message: "^Username must not contain special characters."
            },
            length: {
                minimum: 6,
                maximum: 12,
            }
        }
    }
    
    const results = validate({ username: field }, constraints)
    console.log(results)
    if(results) {
        return results.username;
    } else {
        return true;
    }
}
function validatePassword(field) {
    if (!field) {
        return "Password cannot be empty"
    }
    const constraints = {
        password: {
            format: {
                pattern: "[a-z0-9]+",
                flags: "i",
                message: "^Username must not contain special characters."
            },
            length: {
                minimum: 6,
            }
        }
    }

    const results = validate({ password: field }, constraints)

    if(results) {
        return results.password;
    } else {
        return true;
    }
}

function validatePasswordsMatch(confirmPassword, password) {
    if (!confirmPassword) {
        return "Please type in your password again"
    }
    const constraints = {
        confirmPassword: {
            equality: {
                attribute: "password",
                message: "^Passwords do not match."
            }
        },
        password: {
            presence: true
        }
    }
    
    const results = validate({ confirmPassword: confirmPassword, password: password }, constraints)
    
    console.log(results)
    
    if (results) {
        return results.confirmPassword;
    } else {
        return true;
    }
}

export { validateEmail, validateUsername, validatePassword, validatePasswordsMatch };