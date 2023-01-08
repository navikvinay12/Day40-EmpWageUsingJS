//UC11 Ability to create Employee Payrol Data with id,name and salary .
//UC12 Abiity to extend Employee Payroll Data to store gender and start date.
//UC13 Use Regex Pattern and Use TryCatch in case of Error.
class EmployeePayrollData
{
    //property (even if it is not written nothing will be impacted)
    id;
    salary;
    gender;         
    // startDate;
    // email;
    // pinCode;
    //constructor
    constructor(...params)
    {
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
        this.email=params[5];
        this.pinCode=params[6];
    }
    //getter and setter method
    get id() {return this._id; }
    set id(id)
    {
        let idRegex=RegExp("^[1-9]{1}[0-9]*$");
        if(idRegex.test(id))
        {
            this.id=id;
        }
        else 
        {
            throw "ID is Incorrect";
        }
    }
    get name()  { return this._name;}
    set name(name)
    {
        let nameRegex=RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))
        {
            this._name=name;
        }
        else 
        {
            throw "Name is Incorrect";
        }
    }
    get salary()    { return this._salary}
    set salary(salary)
    {
        let salaryRegex=RegExp("^[1-9]{1}[0-9]*([.]?)[0-9]+$");
        if(salaryRegex.test(salary))
        {
            this._salary=salary;
        }
        else
        {
            throw "Salary is Incorrect";
        }
    }
    get gender()    { return this._gender}
    set gender(gender)
    {
        let genderRegex=RegExp("^[MF]{1}$");
        if(genderRegex.test(gender))
        {
            this._gender=gender;
        }
        else
        {
            throw "Invalid Gender Input!";
        }
    }
    get startDate()    { return this._startDate}
    set startDate(startDate)
    {
        let date=new Date();
        let startDateRegex=RegExp("^[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{4}$");
        if(startDate <= date.toLocaleDateString())
        {
            if(startDateRegex.test(startDate))
                this._startDate=startDate;
            else
                throw "Invalid Format";
        }
        else
        {
            throw "Future Date can't be set!";
        }
    }
    get email()    { return this._email}
    set email(email)
    {
        let emailRegex=RegExp("^[a-zA-Z0-9]{1,}([._+-]{1}[a-zA-Z0-9]{1,}){0,1}[@]{1}[a-z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-z]{2,3}){0,1}$");
        if(emailRegex.test(email))
        {
            this._email=email;
        }
        else
        {
            throw "Invalid Email ";
        }
    }
    get pinCode()    { return this._pinCode}
    set pinCode(pinCode)
    {
        let pinCodeRegex=RegExp("^[1-9]{1}[0-9]{2}([ ]{0,1})[0-9]{3}$");
        if(pinCodeRegex.test(pinCode))
        {
            this._pinCode=pinCode;
        }
        else
        {
            throw "Invalid PinCode!";
        }
    }
    //method
    toString()
    {
        // const options = { day:'numeric' , month:'long', year: 'numeric'};
        // //const empdate=!this.startDate ? "undefinedDate" : this.startDate.toLocaleDateString("en-US",options);
        // const empdate=this.startDate === undefined ? "undefinedDate" : this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+", name="+this.name+", salary="+this.salary+", gender="+this.gender+", startDate="+this.startDate+
        ", email:"+this.email+", Pincode:"+this.pinCode ;
    }
}
try
{
    let employeePayrollData=new EmployeePayrollData(1,"Vinay",50000,"M", "08/12/2022" , "navik.vinay12@gmail.com", "400074");
    console.log(employeePayrollData.toString());
    employeePayrollData=new EmployeePayrollData(2,"Vinaykumar",60000,"M", "08/01/2023" , "vinay@bridgelabz.com", "400 074");
    console.log(employeePayrollData.toString());
}
catch(e)
{
    console.error(e);
}


