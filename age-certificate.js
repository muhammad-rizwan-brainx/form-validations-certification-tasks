function enforceMinMaxDay() {
    const dayInput = document.getElementById("day");
    const day = dayInput.value;
    const minMaxError = document.getElementById('dayInputError');
    if (day < dayInput.min || day > dayInput.max) {
        minMaxError.textContent = 'Value out of range';
        return false;
    }

    minMaxError.textContent = '';
    return true;
}

function enforceMinMaxMon() {
    const monthInput = document.getElementById("month");
    const month = monthInput.value;
    const minMaxError = document.getElementById('monthInputError');
    if (month < monthInput.min || month > monthInput.max) {
        minMaxError.textContent = 'Value out of range';
        return false;
    }

    minMaxError.textContent = '';
    return true;
}

function enforceMinMaxYear() {
    const dayInput = document.getElementById("day");
    const day = dayInput.value;
    const minMaxError = document.getElementById('yearInputError');
    if (day < dayInput.min || day > dayInput.max) {
        minMaxError.textContent = 'Value out of range';
        return false;
    }

    minMaxError.textContent = '';
    return true;
}

function checkAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age < 15) {
        alert("Your age is restricted!");
    } else {
        window.location.href = "https://www.google.com";
    }
}