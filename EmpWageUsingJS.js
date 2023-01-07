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
let empDayWithHrsUsingMap=new Map();        //UC9 creating Map for finding only hrs.
let empDailyHrsAndWageArr=[];   //UC10 creating an Array in order to store object this time.

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
    empDayWithHrsUsingMap.set(day,empHrs)       //UC9 -Storing in Map but only Hrs w.r.t Day.
    empDailyHrsAndWageArr.push(          //UC10 Storing objects in an Array.
        {
            dayNum:day,
            dailyWage:empWage,
            dailyHours:empHrs,
            toString()
            {
                return "\nDay:"+this.dayNum+"  EmpWage:"+this.dailyEmpWage+"  Hours:"+this.dailyHours;
            }
        }
    );
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
    return totalWage+dailyWage
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
function FullTimeDays(dailyWage)
{
    return dailyWage.includes("160")
}
let fullTimeDays=mapDayAlongWithWage.filter(FullTimeDays)
console.log("UC-7C Show FullTime Days using filter helper function:\n"+fullTimeDays)

//UC7D Show First day of Occurance of Full time work.
console.log("UC-7D Show First Occurance of full time day using find helper function :- "+fullTimeDays.find(FullTimeDays))

//UC7E Check every element is full time or not using every helper function
console.log("UC-7E Check every element is full time or not? using every helper function :- "+fullTimeDays.every(FullTimeDays))   //true
console.log("UC-7E Check every element is full time or not? using every helper function :- "+mapDayAlongWithWage.every(FullTimeDays))    //false

//UC7F Check if any part time wage is present or not?
function PartTimeDays(dailyWage)
{
    return dailyWage.includes("80")
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
console.log(empDayWithWageUsingMap);    //day with wage

//UC9 Calculate TotalWage using Array function.
let totalHours=Array.from(empDayWithHrsUsingMap.values()).filter(dailyWage=> dailyWage > 0).reduce(getTotalWageUsingReduce,0);
console.log("UC-9A Calculate TotalWage using Map/Array and inline Arrow function : "+totalHours);

console.log("Day with its Hrs using Map :");
console.log(empDayWithHrsUsingMap);     //day with hrs

let findTotalHrs=(totalVal,dailyWage)=>
{
    return totalVal+dailyWage;
}
let totalHrs=Array.from(empDayWithHrsUsingMap.values()).reduce(findTotalHrs,0);
console.log("UC-9A Calculate Total Hours using Map/Array and separate Arrow function : "+totalHrs);
//+++++
console.log("UC-9B Show the Full working days, part working days and no working days .")
let noWorkingDaysArray=new Array();
let fullWorkingDaysArray=new Array();
let partWorkingDaysArray=new Array();
empDayWithHrsUsingMap.forEach( (value,key,map) =>
{
    if(value==0)
        noWorkingDaysArray.push(key)
    else if(value==4)
        partWorkingDaysArray.push(key)
    else
        fullWorkingDaysArray.push(key)
});
console.log("Absent i.e No Working Days : "+noWorkingDaysArray);
console.log("Part Time Working Days : "+partWorkingDaysArray);
console.log("Full Time Working Days : "+fullWorkingDaysArray);

//UC10 
console.log("UC10 Storing Day along with wage and hrs in a single JS object :"+ empDailyHrsAndWageArr);

//UC11 -> Perform following Object operations using Arrow Functions.
//11a. Calc total Wage and total hours worked
let totalWages=empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).reduce((totalwage,dailyHrsAndWage) => totalwage+=dailyHrsAndWage.dailyWage,0);
let OverallWorkingHours=empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage >0).reduce((totalhrs,dailyHrsAndWage) => totalhrs+=dailyHrsAndWage.dailyHours,0);
console.log("UC 11A - Overall Total Working Hours :"+OverallWorkingHours+" Overall Total Employee Wage : "+totalWages);

//11b. Show the full workings days using foreach
let fullTimeWorkingdays=empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11B - Full Time Working days are: "+fullTimeWorkingdays);

//11c. Show Part working days using Map by reducing to String Array
let partTimeWorkingDays=empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4).map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11C - Part Time Working days are: "+ partTimeWorkingDays);

//11d. No working days only using Map function
let nonWorkingDays=empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0).map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D - Non working days are :"+nonWorkingDays)

