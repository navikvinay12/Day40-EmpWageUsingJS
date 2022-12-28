//Welcome to Employee Wage Program Using JS.
//UC1 Emp is present or absent 
//UC2 Ability to calculate Daily Emp Wage based on Full Time/Part Time or Absent.

const Is_FULL_TIME=1;
const Is_PART_TIME=2;
const EMP_RATE_PER_HR=20;
let empHrs=0;
let present=1;
let empWage=0;
let empInput= (Math.floor(Math.random()*10)%3);  
switch(empInput)
{
    case Is_FULL_TIME:
        console.log("Full Time Employee is present ")
        empHrs=8;
        break;
    case Is_PART_TIME:
        console.log("Part Time Employee is present ")
        empHrs=4
        break;
    default:
        console.log("Employee is Absent")
        break;
}
empWage=EMP_RATE_PER_HR*empHrs;
console.log("Employee Wage is :"+empWage);