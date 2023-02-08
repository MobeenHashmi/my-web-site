function palindrom(word) {
    let arr = word.split('').reverse().join('');
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] != word[i]){
            console.log("This is not palindrom");
        }
        break;
    }
    console.log("This is palindrom");
  }
console.log(palindrom("racecar"));
