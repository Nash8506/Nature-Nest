let usernameError = document.getElementById('username-error');
let passwordError = document.getElementById('password-error');
let signinError = document.getElementById('signin-error');  

let signupUsernameError = document.getElementById('signup-username-error');
let signupPasswordError = document.getElementById('signup-password-error');
let repeatPasswordError = document.getElementById('repeat-password-error');
let emailError = document.getElementById('email-error');
let signupError = document.getElementById('signup-error');

// ----------------------signin form validation-----------------------------
function validateName(){
    let name = document.getElementById('user').value;
    if(name.length === 0){
        usernameError.innerHTML = 'Username is required';
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

// -------------------------------signup page form validation-----------------------------
function validateSignupName(){
    let name = document.getElementById('signup-user').value;
    if(name.length === 0){
        signupUsernameError.innerHTML = 'Username is required';
        return false;
    }
    if (!name.match(/^(?=(.*[a-z]){3,10})(?=.*[A-Z])(?=.*\d).*$/)){
        signupUsernameError.innerHTML = 'Write correct username (at least one uppercase and one number. Minimum characters should be between 3 and 10)';
        return false;
    }
    signupUsernameError.innerHTML = 'Valid';
    return true;
}
function validateSignupPassword(){
    let password = document.getElementById('sign-up-pass').value;
    if(password.length === 0){
        signupPasswordError.innerHTML = 'Password is required';
        return false;
    }
    if (!password.match(/^(?=(.*[a-z]){3,10})(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|;':",.<>/?]).*$/)){
        signupPasswordError.innerHTML = 'Write correct password (at least one uppercase, one special character and one number. Minimum characters should be between 3 and 10)';
        return false;
    }
    signupPasswordError.innerHTML = 'Valid';
    return true;
}
function validateRepeatPassword(){
    let password = document.getElementById('sign-up-pass').value;
    let repeatPassword = document.getElementById('signup-repeat-pass').value;
    if(repeatPassword.length === 0){
        repeatPasswordError.innerHTML = 'Repeat password is required';
        return false;
    }
    if(password !== repeatPassword){
        repeatPasswordError.innerHTML = 'Passwords do not match';
        return false;
    }
    repeatPasswordError.innerHTML = 'Valid';
    return true;
}
function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.length === 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = 'Write correct email';
        return false;
    }
    emailError.innerHTML = 'Valid';
    return true;
}
function validateSignup(){
    if(validateSignupName() && validateSignupPassword() && validateRepeatPassword() && validateEmail()){
        signupError.innerHTML = 'Signed up successfully';
        return true;
    }
    return false;
}