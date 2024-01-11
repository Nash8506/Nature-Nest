let firstNameError = document.getElementById('username-error');
let lastNameError = document.getElementById('password-error');
let emailError = document.getElementById('email-error');
let phoneNumberError = document.getElementById('phonenumber-error');
let messageError = document.getElementById('message-error');


function validateFirstName(){
    let firstName = document.getElementById('firstname').value;
    if(firstName.length === 0){
        firstNameError.innerHTML = 'First Name is required';
        return false;
    }
    if (!firstName.match(/^[a-zA-Z]+$/)){
        firstNameError.innerHTML = 'Write correct first name';
        return false;
    }
    firstNameError.innerHTML = 'Valid';
    return true;
}
function validateLastName(){
    let lastName = document.getElementById('lastname').value;
    if(lastName.length === 0){
        lastNameError.innerHTML = 'Last Name is required';
        return false;
    }
    if (!lastName.match(/^[a-zA-Z]+$/)){
        lastNameError.innerHTML = 'Write correct last name';
        return false;
    }
    lastNameError.innerHTML = 'Valid';
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
function validatePhoneNumber(){
    let phoneNumber = document.getElementById('phonenumber').value;
    if(phoneNumber.length === 0){
        phoneNumberError.innerHTML = 'Phone Number is required';
        return false;
    }
    if (!phoneNumber.match(/^\+\d{2} \d{10}$/)){
        phoneNumberError.innerHTML = 'Write ph. no. (eg: +91 1234567890)';
        return false;
    }
    phoneNumberError.innerHTML = 'Valid';
    return true;
}
function validateMessage(){
    let message = document.getElementById('message').value;
    if(message.length === 0){
        messageError.innerHTML = 'Message is required';
        return false;
    }
    if (!message.match(/^[a-zA-Z]+$/)){
        messageError.innerHTML = 'Write correct message';
        return false;
    }
    messageError.innerHTML = 'Valid';
    return true;
}