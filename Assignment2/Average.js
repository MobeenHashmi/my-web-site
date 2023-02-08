//Mobeen's Assignmenr
const arrayAverage = (arr) => {
  let total = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    total += arr[i];
  }
  return (total/len);
}
const arr = [1, 2, 3, 4, 6, 7, 8, 9, 7];
console.log(arrayAverage(arr));