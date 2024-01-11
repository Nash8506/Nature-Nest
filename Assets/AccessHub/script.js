let usernameError = document.getElementById('username-error');
let passwordError = document.getElementById('password-error');
let signinError = document.getElementById('signin-error');

function validateName(){
    let name = document.getElementById('user').value;
    if(name.length === 0){
        usernameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^(?=(.*[a-z]){3,10})(?=.*[A-Z])(?=.*\d).*$/)){  
        usernameError.innerHTML = 'Write correct username (at least one uppercase and one number. Minimum characters should be between 3 and 10)';
        return false;
    }
    usernameError.innerHTML = 'Valid';
    return true;
}
function validatePassword(){
    let password = document.getElementById('pass').value;
    if(password.length === 0){
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if (!password.match(/^(?=(.*[a-z]){3,10})(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|;':",.<>/?]).*$/)){
        passwordError.innerHTML = 'Write correct password (at least one uppercase, one special character and one number. Minimum characters should be between 3 and 10)';
        return false;
    }
    passwordError.innerHTML = 'Valid';
    return true;
}
function validateSignin(){
    if(validateName() && validatePassword()){
        signinError.innerHTML = 'Signed in successfully';
        return true;
    }
    return false;
}