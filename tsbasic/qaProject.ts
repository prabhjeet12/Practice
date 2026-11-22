class TestCase
 {
    testName: string;
    actualResult: string;
    expectedResult: string; 
    status: string;

    constructor( 
        testName :string,
        actualResult :string,
        expectedResult :string,

    ) {

        this.testName = testName;
        this.actualResult = actualResult;
        this.expectedResult = expectedResult;
        this.status = "Not Run";
    }

    runTest(): void {
        if (this.actualResult === this.expectedResult) {
            this.status = "Passed";
        } else {
            this.status = "Failed"; 
        }
        console.log(this.testName + " " + this.status);
    }
}

let test1 = new TestCase("Valid Login" , "Success" , "Success");
let test2 = new TestCase("Invalid Password" , "Error" , "Error");
let test3 = new TestCase("Blank Username" , "Validation Message" , "No Message");
let test4 = new TestCase("Password Validation","Validation Message","Validation Message");

let tests : TestCase[] = [ test1, test2, test3, test4];


let passedCount : number = 0;
let failedCount : number = 0;


for( let i=0; i<tests.length; i++)
{
    tests[i].runTest();

    if(tests[i].status === "Passed")
    {
        passedCount++;
    }
    else
    {
        failedCount++;
    }
}

console.log("Total Tests Run: " + tests.length);
console.log("Total Tests Passed: " + passedCount);
console.log("Total Tests Failed: " + failedCount);  
