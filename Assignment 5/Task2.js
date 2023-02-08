class Employee {
    constructor(salary, hours_work_a_day){
        this.salary = salary
        this.hours_work_a_day = hours_work_a_day;
    }

    setSalary(salary){
         this.salary = salary;
    }

    sethours_work_a_day(hours_work_a_day){
        this.hours_work_a_day = hours_work_a_day;
    }

    getSalary(){
        return this.salary;
    }

    gethours_work_a_day(){
        return this.hours_work_a_day
    }

   

    AddSal(){
        if(this.salary < 500){
            return this.salary+=10;
        }
    }
    AddWork(){
        if(this.hours_work_a_day > 6){
            return this.salary+=5;
        }
    }

    getFinalSalary(){
       
        return this.salary * this.hours_work_a_day;
         
    }

    getInfo(){
        return `Salary of an employee ${this.salary} hours work per day  ${this.hours_work_a_day})`
    }
  
}

let emp = new Employee(300, 7)
console.log(emp.getFinalSalary() , emp.AddWork(), emp.AddSal(), emp.getInfo());