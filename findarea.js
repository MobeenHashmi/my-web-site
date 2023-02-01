function triangleArea(base, height) {
    return (base * height) / 2;
  }
  
  const base = 10;
  const height = 5;
  const area = triangleArea(base, height);
  
  console.log(`The area of a triangle with base ${base} and height ${height} is ${area}.`);
  