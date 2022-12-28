//UC5 Calculating Emp Wage with given Max working hrs and max workng days .
const Is_FULL_TIME=1;
const Is_PART_TIME=2;
const EMP_RATE_PER_HR=20;
const MAX_WORKING_DAY=20;
const MAX_WORKING_HRS=160;

let present=1;
let empWage=0;
let empHrs=0;
let totalEmpHrs=0;
let totalWage=0;
let day=1;

function GetWorkingHrs()
{
    let empInput= (Math.floor(Math.random()*10)%3);
    switch(empInput)
    {
        case Is_FULL_TIME:
            console.log("Full Time Employee is present ")
            return empHrs=8;
        case Is_PART_TIME:
            console.log("Part Time Employee is present ")
            return empHrs=4
        default:
            console.log("Employee is Absent")
            return empHrs=0
    }
}
while(day<=MAX_WORKING_DAY && totalEmpHrs<=MAX_WORKING_HRS)
{
    empHrs=GetWorkingHrs()
    empWage=EMP_RATE_PER_HR*empHrs;
    console.log("Day# : "+day+" EmpWage : "+empWage)
    totalWage+=empWage
    totalEmpHrs+=empHrs
    day++;
}
console.log("Total Employee Wage for "+(day-1)+" days & Emp Hrs "+ (totalEmpHrs-empHrs) +" is :"+(totalWage));