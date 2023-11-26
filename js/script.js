let signUpBtn = document.querySelector('.sign_up');
let pwd = document.getElementById('pwd');
let pwdConfirm = document.getElementById('confirm_pwd');
let form = document.querySelector('.form');
let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');

let error = document.createElement('section');
error.classList.add('error');
error.setAttribute('style', 'white-space: pre;');
error.textContent = "";

signUpBtn.addEventListener('click', () => {
    let errorsPresent = false;
    if (form.querySelector('.error') !== null){
        error.textContent = "";
        form.removeChild(error);
    }

    if (firstName.value === "") {
        errorsPresent = true;
        error.textContent += "⚠ Please enter your first name.\r\n";
    }

    if (lastName.value === "") {
        errorsPresent = true;
        error.textContent += "⚠ Please enter your last name.\r\n";
    }

    if (pwd.value !== pwdConfirm.value) {
        errorsPresent = true;
        error.textContent += "⚠ Passwords do not match.";
    } 

    if (errorsPresent) {
        form.appendChild(error);
        return;
    }
    
    if (!errorsPresent) {
        if (form.querySelector('.error') !== null){
            error.textContent = "";
            form.removeChild(error);
        }
    }
});