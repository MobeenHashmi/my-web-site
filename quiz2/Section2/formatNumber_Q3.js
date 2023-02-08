function formatNumDecimal(n , d){
    if((typeof n == "number") || (typeof d == "number")){
        n = parseFloat(n) || 0;
        return n.toFixed(d);
    }
    else{
        return false;
    }
}
console.log(formatNumDecimal(22,2)); // output will be 22.00