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
function addNumbers(firstNumber, secondNumber) {
    if (secondNumber) {
        return firstNumber + secondNumber;
    }
    return firstNumber;
}
console.log(addNumbers(10));
