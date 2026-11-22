/*class Employee {
    empName: string = "Prabh";

    work(): void {
        console.log("Employee is working");
    }
}

class QATester extends Employee {
    
        testSoftware(): void {

            console.log("Testing software")
        }
    
    }
       
    let objqatester = new QATester();

    console.log(objqatester.empName);
    objqatester.work();
    objqatester.testSoftware();*/


    class Employee {
    empName: string;

    constructor(empName: string) {
        this.empName = empName;
    }

    displayDetails() {
        console.log("Employee Name: " + this.empName);
    }
}
class QATester extends Employee {

    empAddress: string;
     constructor(empName: string, empAddress: string) {
        super(empName);
        this.empAddress = empAddress;
    }
        address() {
        console.log(this.empName + " lives at " + this.empAddress);
    }
}
    const qa1 = new QATester("Prabhjeet", "Brampton");
    qa1.displayDetails();
    qa1.address();

