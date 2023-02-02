function cardnumber(inputtxt) {
    var cardno = /^(?:3[47][0-9]{13})$/;
    if (inputtxt.value.match(cardno)) {
        alert("You enter a valid num")
        return true;
    }
    else {
        alert("Not a valid credit card number!");
        return false;
    }
}
