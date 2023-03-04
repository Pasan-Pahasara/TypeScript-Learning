console.log("Hello World");

//data types

//numbers
let age =22;

//string
let firstName: string ="Kamal";

//array 
let numbersArray = [10, 20, 30, "sss"];

//tuples
let person:[number,string] = [1,"Kamal"];

//functions without defined a return type
/**
 * ඇතුලේ දෙන return type එක අනුව function එකේ return type එක හදාගන්නවා
 */
function calculate(){
    let numbers:number[] =[];
    return numbers;
}

//functions without defined a return type
/**
 * ඇතුලේ දෙන return type එක අනුව function එකේ return type එක හදාගන්නවා
 */
function calculateAvarageMark(    
    subjectCount: number,
    totalMarks: number
   ): number{
    let avarage =(totalMarks/subjectCount) * 100;
    return avarage;
}

let avgMark = calculateAvarageMark(5, 420);
console.log(avgMark)