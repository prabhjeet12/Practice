interface QA {
    testerName: string;
    experience: number;

    testApplication(): void;
}
class ManualTester implements QA {

    testerName: string = "Prabhjeet";
    experience: number = 3;

    testApplication(): void {
        console.log("Testing application manually");
    }
}

let tester1 = new ManualTester();

console.log(tester1.testerName);
console.log(tester1.experience);

tester1.testApplication();