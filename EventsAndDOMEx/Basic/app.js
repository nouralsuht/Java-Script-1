const username = document.createElement("label");
const password = document.createElement("label");
const ConfirmPassword = document.createElement("label");

username.textContent = "Username: ";
password.textContent = "Password: ";
ConfirmPassword.textContent = "Confirm Password: ";

const text = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const ConfirmInput = document.querySelector("#ConfirmPassword");
const register = document.querySelector("#register");

text.before(username);
passwordInput.before(password);
ConfirmInput.before(ConfirmPassword);


// Errors
const usernameError = document.createElement("span");
const passwordError = document.createElement("span");
const confirmError = document.createElement("span");

text.after(usernameError);
passwordInput.after(passwordError);
ConfirmInput.after(confirmError);

usernameError.style.color = "red";
passwordError.style.color = "red";
confirmError.style.color = "red";

usernameError.style.display = "block";
passwordError.style.display = "block";
confirmError.style.display = "block";


// Initial errors
usernameError.textContent = "Required";
passwordError.textContent = "Required";
confirmError.textContent = "Required";


// Username Validation
function checkUsername() {

    if (text.value.trim() === "") {
        usernameError.textContent = "Required";
    } else {
        usernameError.textContent = "";
    }
}


// Password Validation
function checkPassword() {

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Required";
    } else {
        passwordError.textContent = "";
    }

    checkConfirmPassword();
}


// Confirm Password Validation
function checkConfirmPassword() {

    if (ConfirmInput.value.trim() === "") {
        confirmError.textContent = "Required";
    }
    else if (passwordInput.value !== ConfirmInput.value) {
        confirmError.textContent = "The passwords don't match";
    }
    else {
        confirmError.textContent = "";
    }
}


// Exercise 4
function checkForm() {

    if (
        text.value.trim() !== "" &&
        passwordInput.value.trim() !== "" &&
        ConfirmInput.value.trim() !== "" &&
        passwordInput.value === ConfirmInput.value
    ) {
        register.disabled = false;
    }
    else {
        register.disabled = true;
    }
}


// Events

text.addEventListener("input", function () {
    checkUsername();
    checkForm();
});

passwordInput.addEventListener("input", function () {
    checkPassword();
    checkForm();
});

ConfirmInput.addEventListener("input", function () {
    checkConfirmPassword();
    checkForm();
});


// Exercise 5
register.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Registration successful");
});