function isLeapYear(year) {
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  const year = 2020;
  const result = isLeapYear(year) ? `${year} is a leap year.` : `${year} is not a leap year.`;
  
  console.log(result);
  