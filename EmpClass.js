//UC11 Ability to create Employee Payrol Data with id,name and salary .
//UC12 Abiity to extend Employee Payroll Data to store gender and start date.
class EmployeePayrollData
{
    //property
    id;
    salary;
    gender;         
    startDate;

    //constructor
    constructor(...params)
    {
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    //getter and setter method
    get name()  {return this._name;}
    set name(name)  {this._name=name;}

    //method
    toString()
    {
        const options = { day:'numeric' , month:'long', year: 'numeric'};
        const empdate=!this.startDate ? "undefinedDate" : 
        this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+", name="+this.name+", salary="+this.salary+", gender="+this.gender+", startDate="+empdate ;
    }
}

let employeePayrollData=new EmployeePayrollData(1);
console.log(employeePayrollData.toString());

employeePayrollData=new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());

employeePayrollData.name="john";
employeePayrollData.salary=44333;
employeePayrollData.gender="M";
employeePayrollData.startDate;
console.log(employeePayrollData.toString());

employeePayrollData.startDate=new Date();
console.log(employeePayrollData.toString());
