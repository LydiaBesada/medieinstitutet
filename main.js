function clickFunction() {

    let ourBackground = document.querySelector("html")
    ourBackground.style.backgroundColor = " rgb(21, 150, 73)";
}

function updateDateTime() {

    setInterval(updateDateTime, 0);
    const now = new Date();

    const currentDateTime = now.toLocaleString('sv-SE');

    document.querySelector('#datetime').textContent = currentDateTime;

}


function calculator() {
    let number1 = document.querySelector('#number1').value;
    let operator = document.querySelector('#operator').value;
    let number2 = document.querySelector('#number2').value;

    let sum = 0

    if (operator == '+') {
        sum = parseInt(number1) + parseInt(number2);
    } else if (operator == '-') {
        sum = parseInt(number1) - parseInt(number2);
    } else if (operator == '*') {
        sum = parseInt(number1) * parseInt(number2);
    } else if (operator == '/') {
        sum = parseInt(number1) / parseInt(number2);
    } else {
        sum = 'Ange korrekta värden'
    }
    document.querySelector('#answer').textContent = sum

}

function validate() {
    var name = document.getElementById("contact-name").value;
    var phone = document.getElementById("contact-phone").value;
    var email = document.getElementById("contact-email").value;
    var message = document.getElementById("contact-comment").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 2) {
        text = "Vänligen ange ditt namn";
        error_message.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        text = "Vänligen ange ett giltigt mobilnummer";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Vänligen ange en giltig e-postadress";
        error_message.innerHTML = text;
        return false;
    }

    alert("Formuläret har skickats!");
    return true;
}