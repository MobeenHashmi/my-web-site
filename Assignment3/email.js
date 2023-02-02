function validate() {
    let text = document.getElementById("email1").value;
    let pattern = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~]+[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~\.]*[a-zA-Z0-9]+@[a-zA-Z0-9]+([\.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    let result = pattern.test(text);

    document.getElementById("demo").innerHTML = result;
}