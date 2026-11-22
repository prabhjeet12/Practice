/*let a : number = 5;
let b : number = 6;
let total : number = a+b;
let subt : number = b-a;
console.log("The sum of numbers are" +" "+ total);
console.log("The substraction of number is" + " "+subt);
let isgreater : boolean = a>b;
console.log("Is a greater than b"+" "+isgreater);

console.log("Increment operator"+" "+ ++a);
console.log("Decrement operator"+" "+ --b);


let deptno : number = 201;
let bonus : number = 1000;
let totaldb : number = deptno+bonus;
console.log("Total od dept and bonus:" +" "+ totaldb);*/



const addon =(a: number, b: number): number => {
    return a+b;     
}
console.log(addon(5, 10));

const multiply = (a: number, b: number): number => {
    return a*b;
}
console.log(multiply(5, 4));

const substract = (a: number, b: number): number => a-b;
console.log(substract(10, 5));

const isEven = (a: number): string => a % 2 === 0 ? "Even" : "Odd";

console.log(isEven(5));
console.log(isEven(6));

