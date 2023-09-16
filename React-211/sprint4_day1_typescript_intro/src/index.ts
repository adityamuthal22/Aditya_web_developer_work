let isFinished: boolean=false;
isFinished=true;
// console.log(isFinished)

//Numbers
let amount: number =100;

//strings
let first_name:string ="Masai";
let last_name:"School";
let full_name=`${first_name} ${last_name}`
// full_name =100;

//Arrays
let arr1: number[] = [1,2,3,4]
let arr2: string[] = ["Masai","School"]
let arr3: Array<number> =[5,6,7,8]

//objects

//Interface -> describes the shape of an object
// interface person{
//     name:string;
//     age: number
// }

type softwareEngineer={
    skill:string;
}

type person={
    name:string;
    age: number
}


let obj1: person ={
    name:"Masai",
    age:3
}

obj1.name="Masai School"
let arrPersons:person[]=[{name:"Masai school",age:3}]

// console.log(arrPersons)

//Tuples -> Arrays

// let a: string ="Masai";
// let b: string ="School";

let tuple :[string, number,string] =["Masai",100,"School"]
// console.log(tuple[1])


// Enums -> A group of named constants

//const GET_DATA_Loading="GET_DATA_Loading";

enum Color{
    RED,//0
    GREEN ,//1
    BLUE//2
}
// console.log(Color)

//Other Types

let u: undefined;
let n: null;
let a:any;

//functions 

function Sum(a:number,b:number){
    return a + b;

}
// console.log(Sum(2,2))

const printPerson=({name,age}:person):void=>{
    console.log(`${name} ${age}`)
}

printPerson(obj1);

//Union A U B->
let output:(number | string)[]
output=["Masai",3,"Masai School"]
// console.log(output);

//Intersection

let masaiStudent: person & softwareEngineer={
    age:20,
    name:"Masai",
    skill:"Coding"
}

// console.log(masaiStudent)

// type responseObject={
//     postId : number, id: number, name:string,email: string,body:string
// }

// let response:responseObject[];

// axios("URL").then((r)=>{
//     r.data.forEach((item:responseObject)=>{
//         let length = item.name.length
//     })
// })