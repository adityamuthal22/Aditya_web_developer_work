declare let isFinished: boolean;
declare let amount: number;
declare let first_name: string;
declare let last_name: "School";
declare let full_name: string;
declare let arr1: number[];
declare let arr2: string[];
declare let arr3: Array<number>;
declare type softwareEngineer = {
    skill: string;
};
declare type person = {
    name: string;
    age: number;
};
declare let obj1: person;
declare let arrPersons: person[];
declare let tuple: [string, number, string];
declare enum Color {
    RED = 0,
    GREEN = 1,
    BLUE = 2
}
declare let u: undefined;
declare let n: null;
declare let a: any;
declare function Sum(a: number, b: number): number;
declare const printPerson: ({ name, age }: person) => void;
declare let output: (number | string)[];
declare let masaiStudent: person & softwareEngineer;
