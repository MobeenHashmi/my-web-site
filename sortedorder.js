function sortArrayAscending(array) {
    return array.sort((a, b) => a - b);
  }
  
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedNumbers = sortArrayAscending(numbers);
  
  console.log("Numbers in ascending order:", sortedNumbers);
  