var isFinished = false;
isFinished = true;
// console.log(isFinished)
//Numbers
var amount = 100;
//strings
var first_name = "Masai";
var last_name;
var full_name = "".concat(first_name, " ").concat(last_name);
// full_name =100;
//Arrays
var arr1 = [1, 2, 3, 4];
var arr2 = ["Masai", "School"];
var arr3 = [5, 6, 7, 8];
var obj1 = {
    name: "Masai",
    age: 3
};
obj1.name = "Masai School";
var arrPersons = [{ name: "Masai school", age: 3 }];
// console.log(arrPersons)
//Tuples -> Arrays
// let a: string ="Masai";
// let b: string ="School";
var tuple = ["Masai", 100, "School"];
// console.log(tuple[1])
// Enums -> A group of named constants
//const GET_DATA_Loading="GET_DATA_Loading";
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE"; //2
})(Color || (Color = {}));
// console.log(Color)
//Other Types
var u;
var n;
var a;
//functions 
function Sum(a, b) {
    return a + b;
}
// console.log(Sum(2,2))
var printPerson = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("".concat(name, " ").concat(age));
};
printPerson(obj1);
//Union A U B->
var output;
output = ["Masai", 3, "Masai School"];
// console.log(output);
//Intersection
var masaiStudent = {
    age: 20,
    name: "Masai",
    skill: "Coding"
};
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
//# sourceMappingURL=index.js.map