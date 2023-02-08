//Mobeen's assignment //I use clousers concept
function createBase(six){
  this.six;
  function addSix(num){
   let sum=  num + six;
    return sum;
  }
  console.log(addSix(10)); //return 16
  console.log(addSix(21)); // retuen 27
}
createBase(6);