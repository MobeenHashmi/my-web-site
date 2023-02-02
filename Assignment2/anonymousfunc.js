//Mobeen's Assignment anonymous function
let mean = function(arr){
  let totalSum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    totalSum += arr[i];
  }
  return (totalSum/len);
}

const array = [1,3,5,7,9]
console.log("Mean of an array of item passed: "+mean(array));