/* Check validation against the pattern each time when user press a key. 
 * Once correct, add a "valid" class. */
function validation(e, pattern, form) {
    const valid = e.target.value.match(pattern);
    if (valid) {
        form.classList.remove('invalid');
        form.classList.add('valid');
    } else {
        form.classList.remove('valid');
    }
    e.stopPropagation();
}

/* Final validation check agains the pattern before losing focus (user switch to another section). 
 * If not valid, "invalid" class will be added. */
function finalValidation(e, pattern, form) {
    const content = e.target.value;
    if (content) {
        e.target.classList.add('notEmpty');
        const valid = content.match(pattern);
        if (!valid) {
            form.classList.add('invalid');
        } else {
            form.classList.remove('invalid');
        }
    } else {
        form.classList.remove('invalid');
        e.target.classList.remove('notEmpty');
    }
    e.stopPropagation();
}

/* Bind linsteners for form-validation element. */
function formValidationBindPattern(form, pattern) {
    const control = form.querySelector('.form-control');
    control.addEventListener('keyup', (e) => {
        validation(e, pattern, form);
    }, false);

    control.addEventListener('blur', (e) => {
        finalValidation(e, pattern, form);
    }, false);
}



/****************************
 * 
 * API for other developers
 * 
 ***************************/
export const formValidation = {
    bindPattern: formValidationBindPattern
}