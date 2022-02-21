import { formValidation } from "./form-validation.js";



/************************************************
 * usecase of form-floating and form-validation *
 ***********************************************/

/* email */
const emailForm = document.querySelector('.form-validation.email');
/* username */
const usernameForm = document.querySelector('.form-validation.username');
/* password */
const pwdForm = document.querySelector('.form-validation.password');

const patterns = {
    emailPattern: /^[\w\.-]+@[\w-]+\.[\w-]{2,}$/g, 
    /* at least 8 characters */
    pwdWeakPattern: /^[\w#?!@$%^&*-]{8,}$/g,
    /* at least 8 characters(1 lowercase, 1 uppercase, 1 number) */
    pwdMediumPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w#?!@$%^&*-]{8,}$/g,
    /* at least 8 characters(1 lowercase, 1 uppercase, 1 number, 1 special character) 
     * special characters includes: [#?!@$%^&*-]/ */
    pwdStrongPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[\w#?!@$%^&*-]{8,}$/g,
    /* 5-20 characters, including [a-zA-Z0-9_-.] */
    usernamePattern: /^[\w\.-]{5,20}$/g 
};

formValidation.bindPattern(emailForm, patterns.emailPattern);
formValidation.bindPattern(usernameForm, patterns.usernamePattern);
formValidation.bindPattern(pwdForm, patterns.pwdWeakPattern);



/********************************************************
 * Activate submit button only when all forms are valid *
 *******************************************************/

/* submit button */
const submit = document.querySelector('input[type="submit"]');
/* a collection of email, username and password form */
const forms = document.querySelectorAll('.form-validation');

/* check if all three forms(email, username and password) are valid */
function allValid() {
    return Array.from(forms).every((form) => form.classList.contains('valid'));
}

/* activate submit button */
function activateSubmit() {
    submit.classList.remove('disabled');
}

/* disable submit button */
function disableSubmit() {
    submit.classList.add('disabled');
}

function bindAllValid(form) {
    const control = form.querySelector('.form-control');
    control.addEventListener('keyup', () => {
        if (allValid()) {
            activateSubmit();
        } else {
            disableSubmit();
        }
    });
}

bindAllValid(emailForm);
bindAllValid(usernameForm);
bindAllValid(pwdForm);




