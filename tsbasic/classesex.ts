/*class Course {
    courseName: string;
    courseDuration: number;

    startCourse(): void {
        console.log(this.courseName + " course has started.");
        console.log(this.courseDuration + " weeks duration.");
}   
}
let a = new Course()
let b = new course()

a.courseName = "TypeScript";
a.courseDuration = 6;
b.courseName = "JavaScript";
b.courseDuration = 4;

console.log(a.startCourse())
console.log(b.startCourse())*/

/*class Login {

         username : string;

         constructor(name : string)
       {
        this.username = name;
       }

         loginTest() : void 
         {
             console.log("Login test for" + " " + this.username );
         }
            }

        let objusn = new Login("Prabh");
       
        objusn.loginTest();*/


        class TestCase
        {
            testName : string;
            statuss : string;

            constructor(testName : string, statuss : string)
            {
                this.testName = testName;
                this.statuss = statuss;
            }

            runTest() : void
            {
                console.log(this.testName + " " + this.statuss);
            }
        }

        let objname = new TestCase("Login Test", "Passed");
        let objstatus = new TestCase("Password Test", "Failed");

        objname.runTest();
        objstatus.runTest();
