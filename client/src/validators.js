import validate from 'validate.js';

function validateEmail(field) {
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
    const constraints = {
        username: {
            email: {
                email: true,
                message: "^Username invalid"
            }
        }
    }
    
    const results = validate({ username: field }, constraints)
    
    if(results) {
        return results.username;
    } else {
        return true;
    }
}
function validatePassword(field) {
    const constraints = {
        password: {
            email: {
                email: true,
                message: "^Password invalid"
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

export { validateEmail, validateUsername, validatePassword };