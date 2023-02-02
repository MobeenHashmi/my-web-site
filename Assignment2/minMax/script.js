function minMax() {
    let input = document.getElementById("arrayInput").value;
    // this line will create a string into array with split function and sort it into descending order.
    let newArray = input.split("").sort() 
    let len = newArray[newArray.length-1];
    let max = newArray[len];
    let min = newArray[0];

    document.getElementById("p1").innerHTML = `max num is = ${max}`;
    document.getElementById("p2").innerHTML = `min num is = ${min}`;
}