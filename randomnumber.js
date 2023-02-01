function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const min = 0;
  const max = 100;
  const randomNumber = getRandomNumber(min, max);
  
  console.log(`Random number between ${min} and ${max}: ${randomNumber}`);
  