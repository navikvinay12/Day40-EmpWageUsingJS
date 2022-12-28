//UC3 - Use function to get Work Hrs.
const Is_FULL_TIME=1;
const Is_PART_TIME=2;
const EMP_RATE_PER_HR=20;
let present=1;
let empWage=0;
let empHrs=0;
let empInput= (Math.floor(Math.random()*10)%3);
function GetWorkingHrs()
{
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
empWage=EMP_RATE_PER_HR*GetWorkingHrs();
console.log("Employee Wage is :"+empWage);