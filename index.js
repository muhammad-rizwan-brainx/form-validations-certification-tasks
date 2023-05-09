var isVlidPassword;
var isPasswordMatched;
var isValidEmail;
var isValidNumber;
var isValidAge;

function validatePhoneNumber() {
    const noError = document.getElementById('phoneNumberREquirementError');
    const phoneNumber = document.getElementById("phoneNumber").value;
    const phoneNumberRegex = /^\d{11}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
        noError.textContent = "Phone number should be an 11-digit number.";
        return false;
    }

    noError.textContent = '';
    isValidNumber = true;
    validateForm()
    return true;
}

function validateAge() {
    const age = document.getElementById("age").value;
    const ageError = document.getElementById('ageError');

    if (isNaN(age) || age < 18 || age > 151) {
        ageError.textContent = 'Age must be between 18 and 151.';
        return false;
    } else {
        ageError.textContent = '';
    }

    isValidAge = true;
    validateForm()
    return true;
}

function validateEmails() {
    const email = document.getElementById("emails");
    const emails = email.value.split(',');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]+$/;

    for (let i = 0; i < emails.length; i++) {
        const email = emails[i].trim();
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Invalid email format.';
            return false;
        }
    }

    emailError.textContent = '';
    isValidEmail = true;
    validateForm()
    return true;
}


function validatePassword() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const passwordRequirementsError = document.getElementById('passwordRequirementsError');
    // Check password requirements
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordRequirementsError.textContent = "Password must be at least 8 characters long, contain both lowercase and uppercase letters, and have at least one digit.";
        return false;
    } else {
        passwordRequirementsError.textContent = '';
    }

    isVlidPassword = true;
    validateForm()
    return true;
}

function matchPassword() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const confirmPassword = confirmPasswordInput.value;
    const passwordMatchError = document.getElementById('passwordMatchError');
    // Check password and confirm password match
    if (password !== confirmPassword) {
        passwordMatchError.textContent = 'Passwords do not match.';
        return false;
    } else {
        passwordMatchError.textContent = '';
        isPasswordMatched = true;
        validateForm()
        return true;
    }

}

function validateForm() {
    const submitButton = document.getElementById('submitButton');
    if (isVlidPassword && isPasswordMatched && isValidAge && isValidNumber && isValidEmail) {
        submitButton.disabled = false;
    }

}