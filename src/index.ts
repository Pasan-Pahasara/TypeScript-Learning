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

let avgMark = calculateAvarageMark(420, 500);
console.log(avgMark)

//functions with optional parameters
/**
 * දෙන value එකක් optional නම් ඒකට අපි parameters වලින් pass කරන කොටම ? mark එකක් දෙනවා. ඒක if-else එකෙන් handle කරනවා.
 */
function addNumbers(firstNumber:number, secondNumber?:number){ 
    if(secondNumber){
        return firstNumber+secondNumber;
    }
   return firstNumber;
}
console.log(addNumbers(10))

//Object
let student:{
    id:number;name:string;age:number
}={
    id:1,name:"pahasara",age:5
};

//Object
let teacher:{
    id:number;name:string;enroll?:(date:Date)=> void }={
    id:1,
    name:"Pahasara",
    enroll:(date:Date)=>{
        console.log(date)
    },
};

//type aliases (එක වගේ methods දෙකක් use කරන්න මේක use කරනවා)
type Employee={
    id:number;
    name:string
}

let employee1:Employee ={
    id:1,
    name:"Kamal"
}

let employee2:Employee ={
    id:2,
    name:"Kamal"
}

//Union Types(යවන data type එක දන්නේ නැත්නම් | (union) එක use කරලා string කියලා දෙනවා)
function getNumber(myNumber:number | string):number{
    //Narrowing
    if(typeof myNumber ==='string'){
        return parseInt(myNumber)
    }
    return myNumber;
}
getNumber(10);