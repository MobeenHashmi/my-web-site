function getMonth() {
    const message = document.getElementById("result");
    message.innerHTML = "";
    let inp = document.getElementById('input1').value
    let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    try{
        if (arr.includes(inp)) {
            alert("exists");    }
        else {
            throw "*Please enter a valid month with first letter capital like 'Feb'"
        }
    }
    catch (error){
        message.innerHTML = error;
    }
}

