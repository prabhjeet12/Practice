class Employee {
   

    work(empName: string, empAge: number): void {
        console.log("Employee Name is"+" "+empName);
        console.log("Employee Age is"+" "+empAge);
    }
}

class QATester extends Employee {
    
        testSoftware(): void {

            console.log("Testing software")
        }
    
    }
       
    let objqatester = new QATester();


    objqatester.work("John", 30);
    objqatester.testSoftware();