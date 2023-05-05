function enforceMinMaxDay() {
    var dayInput = document.getElementById("day");
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
    var monthInput = document.getElementById("month");
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
    var dayInput = document.getElementById("day");
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
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var birthDate = new Date(year, month - 1, day);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age < 15) {
        alert("Your age is restricted!");
    } else {
        window.location.href = "https://www.google.com";
    }
}