"use strict";
console.log("Hello World");
//data types
//numbers
let age = 22;
//string
let firstName = "Kamal";
//array 
let numbersArray = [10, 20, 30, "sss"];
//tuples
let person = [1, "Kamal"];
//functions without defined a return type
/**
 * ඇතුලේ දෙන return type එක අනුව function එකේ return type එක හදාගන්නවා
 */
function calculate() {
    let numbers = [];
    return numbers;
}
//functions without defined a return type
/**
 * ඇතුලේ දෙන return type එක අනුව function එකේ return type එක හදාගන්නවා
 */
function calculateAvarageMark(subjectCount, totalMarks) {
    let avarage = (totalMarks / subjectCount) * 100;
    return avarage;
}
let avgMark = calculateAvarageMark(420, 500);
console.log(avgMark);
//functions with optional parameters
/**
 * දෙන value එකක් optional නම් ඒකට අපි parameters වලින් pass කරන කොටම ? mark එකක් දෙනවා. ඒක if-else එකෙන් handle කරනවා.
 */
function addNumbers(firstNumber, secondNumber) {
    if (secondNumber) {
        return firstNumber + secondNumber;
    }
    return firstNumber;
}
console.log(addNumbers(10));
//Object
let student = {
    id: 1, name: "pahasara", age: 5
};
//Object
let teacher = {
    id: 1,
    name: "Pahasara",
    enroll: (date) => {
        console.log(date);
    },
};
let employee1 = {
    id: 1,
    name: "Kamal"
};
let employee2 = {
    id: 2,
    name: "Kamal"
};
