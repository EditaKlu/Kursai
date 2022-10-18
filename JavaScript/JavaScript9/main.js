const myForm = document.querySelector('form');
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // const myName = document.getElementById('name');
    // const myName = myForm.querySelector('#name');
    const myName = myForm.elements['name'];
    const myEmail = myForm.elements['email'];
    const myNameValid = nameValidation(myName);
    const myEmailValid = validateEmail(myEmail);
    if (myNameValid && myEmailValid) {
        window.location.href = 'https://www.google.com'
    }
    console.log(myName);
})

function nameValidation(inputElement) {
    if (inputElement.value === '') {
        inputElement.parentNode.querySelector("small").innerText = "Fail";
    } else {
        inputElement.parentNode.querySelector("small").innerText = "OK";
    }
    return inputElement.value !== '';
}

function validateEmail(email) {
    if (!hasValue(email)){
        return false;
    }
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // is google regex
    if (!re.test(email.value)) {
        email.parentNode.querySelector("small").innerText = "Fail";
    } else {
        email.parentNode.querySelector("small").innerText = "OK";
    }
    return re.test(email.value);
}
function hasValue(inputElement) {
    if (inputElement.value === "") {
        showMessage(inputElement.parentNode, "required")
        return false;
    }

}
function showMessage(parentElement, msg) {
    parentElement.querySelector("small").innerText = msg;
}