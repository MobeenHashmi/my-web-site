const dashTwixt2Evens = (num) =>{
    const numStr = num.toString();
    let result = '';

  for (let i = 0; i < numStr.length - 1; i++) {
    const currentDigit = parseInt(numStr[i]);
    const nextDigit = parseInt(numStr[i + 1]);

    result += currentDigit;
    if (currentDigit % 2 === 0 && nextDigit % 2 === 0) result += '-';
  }

  result += numStr[numStr.length - 1];
  return result;
}

let number = 2465367864 ;
console.log(dashTwixt2Evens(number));