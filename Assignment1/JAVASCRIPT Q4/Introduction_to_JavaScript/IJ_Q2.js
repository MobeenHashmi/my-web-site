//This function uses the common rule for determining leap years in the Gregorian calendar, 
//which is that a year is a leap year if it is evenly divisible by 4, 
//unless it is also divisible by 100. 
//However, if a year is divisible by 400, then it is a leap year.
function isLeapYear(year) {
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isLeapYear(2021));
  