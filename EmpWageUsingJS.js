//UC4  - Calculating emp Wage for max 20 days in a month.
const Is_FULL_TIME=1;
const Is_PART_TIME=2;
const EMP_RATE_PER_HR=20;
const MAX_WORKING_DAY=20;
let present=1;
let empWage=0;
let empHrs=0;
let totalEmpHrs=0;
let totalWage=0;

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
for(var day=1;day<=MAX_WORKING_DAY;day++)
{
    empWage=EMP_RATE_PER_HR*GetWorkingHrs();
    console.log("Day# : "+day+" EmpWage : "+empWage)
    totalWage+=empWage
}
console.log("Total Employee Wage for 20 days is :"+totalWage);