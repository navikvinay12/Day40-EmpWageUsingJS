//UC8 Store day ,daily wage along with total wage using Map .

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
let empWageArray=new Array();       //creating Array
let empDayWithWageUsingMap=new Map();    //UC8 creating Map .
function GetWorkingHrs()
{
    let empInput= (Math.floor(Math.random()*10)%3);
    switch(empInput)
    {
        case Is_FULL_TIME:
            // console.log("Full Time Employee is present ")
            return empHrs=8;
        case Is_PART_TIME:
            // console.log("Part Time Employee is present ")
            return empHrs=4
        default:
            // console.log("Employee is Absent")
            return empHrs=0
    }
}
while(day<=MAX_WORKING_DAY && totalEmpHrs<=MAX_WORKING_HRS)
{
    empHrs=GetWorkingHrs()
    empWage=EMP_RATE_PER_HR*empHrs;
    console.log("Day# : "+day+" EmpWage : "+empWage)
    empWageArray.push(empWage);     //Store everyday wage in an Array
    empDayWithWageUsingMap.set(day,empWage);        //UC8 -Storing in Map using set().
    totalWage+=empWage
    totalEmpHrs+=empHrs
    day++;
}
console.log("UC6-Array Object for Daily Wage :"+ empWageArray );    //UC6 printing Daiy wage.
console.log("Total Employee Wage for "+(day-1)+" days & Emp Hrs "+ (totalEmpHrs-empHrs) +" is :"+(totalWage));

//UC7A Way1 -using foreach
let total=0;
function getTotalWage(dailyWage)
{
    total+=dailyWage
}
empWageArray.forEach(getTotalWage)
console.log("UC-7A Calculating Total Emp Wage using array helper function i.e foreach : "+total);
//UC7A Way2 - reduce
function getTotalWageUsingReduce(totalWage,dailyWage)
{
    return totalWage+=dailyWage
}
console.log("UC-7A Calculating Total Emp Wage using array helper function i.e reduce : "+empWageArray.reduce(getTotalWageUsingReduce,0))

//UC7B Represent day with wage.
let dayCount=0;
function mapDayWithWageFunc(dailyWage)
{
    dayCount++
    return "Day"+dayCount+":"+dailyWage;
}
mapDayAlongWithWage = empWageArray.map(mapDayWithWageFunc)
console.log("UC-7B Represent day with wage using map helper function:\n"+mapDayAlongWithWage)

//UC7C Show FullTime days.
function FullTimeDays(data)
{
    return data.includes("160")
}
let fullTimeDays=mapDayAlongWithWage.filter(FullTimeDays)
console.log("UC-7C Show FullTime Days using filter helper function:\n"+fullTimeDays)

//UC7D Show First day of Occurance of Full time work.
console.log("UC-7D Show First Occurance of full time day using find helper function :- "+fullTimeDays.find(FullTimeDays))

//UC7E Check every element is full time or not using every helper function
console.log("UC-7E Check every element is full time or not? using every helper function :- "+fullTimeDays.every(FullTimeDays))   //true
console.log("UC-7E Check every element is full time or not? using every helper function :- "+mapDayAlongWithWage.every(FullTimeDays))    //false

//UC7F Check if any part time wage is present or not?
function PartTimeDays(data)
{
    return data.includes("80")
}
console.log("UC-7F Check if any part time wage is present or not? using some helper function :- "+mapDayAlongWithWage.some(PartTimeDays))

//UC7G Number of Present Days .
function NumberOfDays(total,dailyWage)
{
    if(dailyWage>0)
        return total=total+1;
    else
        return total;
}
console.log("UC-7G Number of Working days using reduce helper function :- "+empWageArray.reduce(NumberOfDays,0))

//UC8 Store the Day and the Daily Wage along with the Total Wage .
console.log("UC8 Calculate Total Wage using Map Object :- "+Array.from(empDayWithWageUsingMap.values()).reduce(getTotalWageUsingReduce,0))
console.log("Day with its Wage using Map :");
console.log(empDayWithWageUsingMap);



