//ASC
var arr = [65,88,1,0,2,5,6];

arr.sort(function(a, b) {
  return a - b;
});

console.log(arr);
//descending
var arr2 = [65,88,1,0,2,5,6];

arr2.sort(function(a, b) {
  return b - a;
});

console.log(arr2);
