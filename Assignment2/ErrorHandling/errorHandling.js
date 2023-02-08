function add(){
  let val1 = document.getElementById("input1").value;
  let val2 = document.getElementById("input2").value;
  
  try{
    if(isNaN(val1) || isNaN(val2)){
      throw "Please input is valid number";
    }
    let ans=parseInt(val1)+parseInt(val2)
    alert("sum is "+ ans);
  }
  catch (error){
    alert(error);
  }
}