function getAge(dateBirth) {
    let today = new Date()
    let dob = new Date(dateBirth);
    let milisec = today - dob;
    let seconds = milisec / 1000;
    let mins = seconds / 60;
    let hours = mins / 60;
    let day = hours / 24;
    let month = day / 30.44;
    let year = month / 12;
    return {
        years: year,
        months: month,
        days: day
      };
}
let age =getAge("1999-05-08")
console.log(age);

