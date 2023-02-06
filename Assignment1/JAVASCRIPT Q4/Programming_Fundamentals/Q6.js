function processArray(arr) {
    let intArr = [];
    let strArr = [];
    let intSum = 0;
    let strConcat = "";
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number" && Number.isInteger(arr[i])) {
        intSum += arr[i];
        intArr.push(intSum);
      } else if (typeof arr[i] === "string") {
        strConcat += arr[i];
        strArr.push(strConcat);
      }
    }
    console.log("Integer Array:", intArr);
    console.log("String Array:", strArr);
    return [intArr, strArr];
  }
  processArray([1,2,3,4,5,6]); // return only int array and string will be emptys