const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const buttonOne = document.querySelector('.submit1');
const buttontwo = document.querySelector('.submit2');
const usernameLogin = document.getElementById('login-username')
const passwordLogin = document.getElementById('login-password')



buttonOne.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputs();
})

buttontwo.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputsTwo();
})



function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (usernameValue === '') {
        setErrorFor(username, 'username cannot be blank');
    }
    else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'email cannot be blank');
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'invalid email');
    }
    else {
        setSuccessFor(email);
    }


    if (passwordValue === '') {
        setErrorFor(password, 'password cannot be blank');
    }
    else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'password cannot be blank');
    }
    else if (password2Value != passwordValue) {
        setErrorFor(password2, 'invalid password');
    }
    else {
        setSuccessFor(password2);
    }


}



function checkInputsTwo() {
    const usernameLoginValue = usernameLogin.value.trim();
    const passwordLoginValue = usernameLogin.value.trim();


    if (usernameLoginValue === '') {
        setErrorFor(usernameLogin, 'username cannot be blank');
    }
    else {
        setSuccessFor(usernameLogin);
    }


    if (passwordLoginValue === '') {
        setErrorFor(passwordLogin, 'password cannot be blank');
    }

    else {
        setSuccessFor(passwordLogin);
    }

}




function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';

}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


let login = document.querySelector('#login')
let register = document.querySelector('#register')
let loginBtn = document.querySelector('.btn-switch')
let registerBtn = document.querySelector('#signup-btn')

loginBtn.addEventListener('click', () => {
    login.style.left = "0";
    register.style.left = "-450px";

})

registerBtn.addEventListener('click', () => {
    login.style.left = "450px";
    register.style.left = "0";



})