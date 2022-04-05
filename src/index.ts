import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

//? Type Basics ----------------------------------------
const testFunction = (x: number) => {
  console.log(x);
  return x + 5;
};

//? Objects and Arrays --------------------------------
//* Arrays
let names = ['Budi', 'Andi', 'Sarah'];
// names.push(5); // gak bisa ❌
names.push('Candi'); // ✅

let numbers = [1, 2, 3, 4];
// numbers.push("charlie"); // tetep gak bisa ❌
numbers.push(5); // ✅

let mixedNN = ['Budi', 'Andi', 3, 5];
mixedNN.push(3); // kalo ada 2 types bisa
mixedNN.push('stringgku');

//* Objects
let exObjects = {
  name: 'athalla',
  age: 17,
};

// exObjects.name = 20; // ❌ harus sesuai dengan typenya
// exObjects.age = "17"; // ❌
exObjects.name = 'barka'; // ✅
exObjects.age = 18; // ✅

exObjects = {
  // harus sama formatnya
  name: 'fadhil',
  age: 17,
  // skill: 'nodejs' ❌
};

//? Explicit Types ------------------------------------

let onlyString: string;
let onlyNumber: number;
let onlyBoolean: boolean;

onlyString = 'athalla';
onlyNumber = 17;
onlyBoolean = true;

//* Arrays
let lists: string[] = [];
lists.push('ngopi');

let nums: number[] = [];
nums.push(7);

//* Union Types
let mixed: (string | number | boolean)[] = [];
mixed.push('ngops');
mixed.push(7);
mixed.push(true);

let uid: string | number;
uid = 123;
uid = '123';

//* Objects
let obj: object;
obj = { name: 'ngops', age: 17 };

let obj2: {
  name: string;
  age: number;
};
obj2 = { name: 'athalla', age: 17 };

//? Dynamic (any) Types ------------------------------------------
let age: any;
age = 25;
age = '25';
age = true;

let mixedArr: any[] = [];
mixedArr.push(2);
mixedArr.push('2');
mixedArr.push(true);

let mixedObj: {
  name: any;
  age: any;
};

mixedObj = {
  name: 17,
  age: 'athalla',
};

//? Function Basics ----------------------------------------------
let thisFunction: Function;

thisFunction = () => {
  console.log('ngoop');
};

const plus = (a: number, b: number, c: number = 10): number => {
  console.log(c);
  return a + b;
};

//? Type Aliases --------------------------------------------------
type stringOrNum = string | number;
const typo: stringOrNum = 17;

console.log(typo);

let typeFunc: (a: string, b: number) => void;
typeFunc = (name: string, age: number) => {
  console.log(`${name} is ${age} years old`);
};

let objFunc: (obj: { name: string; age: number }) => void;
objFunc = (id: { name: string; age: number }) => {
  console.log(`${id.name} is ${id.age} years old`);
};

objFunc({ name: 'athalla', age: 17 });

type objFunc = { name: string; age: number };
let objNgopi: (obj: objFunc) => void;
objNgopi = (identitas: { name: string; age: number }) => {
  console.log(`${identitas.name} is ${identitas.age} years old`);
};

//? the DOM and Type Casting --------------------------------------------------------------
// const form = document.querySelector("form")!;
// console.log(form.children);
/* saat kita ngegrab suatu element, typescript gak akan tau element itu ada atau enggak
makanya dia tulisannya 'possibly null'. Nah cara untuk mengatasinya dengan pake if (form) {...} atau setelah querySelector('form')! tanda seru
jadi kita ngasih tau typescript 'saya tau element ini ada di html'*/
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault(); // biar pas di submit tidak ke refresh

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, 'end');
});

const invOne = new Invoice('fido', 'studying', 70);
const invTwo = new Invoice('john', 'cooking rice', 30);

let invoices: Invoice[] = []; /* jadi kita bisa nentuin juga type. 
Kita sekarang cuman bisa ngepush object berbasic invoice */
invoices.push(invOne, invTwo);
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

//? Interfaces --------------------------------------------------------------
interface isPerson {
  /** jadi dia 'Enforce a certain rules to a variable
 following isPerson as a type */
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const he: isPerson = {
  name: 'athalla',
  age: 17,
  speak(lang: string): void {
    console.log(lang);
  },
  spend(time: number): number {
    console.log(time);
    return time;
  },
};

const introHim = (person: isPerson) => {
  console.log(`my name is ${person.name} and i'm ${person.age}`);
};

//? Generics

const addUID = <T extends { name: string }>(object: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...object, uid };
};

const addOne = addUID({ name: 'athalla', age: 17 });
console.log(addOne.age);

interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const addTwo: Resource<object> = {
  uid: 7,
  resourceType: 7,
  data: { name: 'athalla' },
};

//? Enums

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
}

const addThree: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'Learn Typescript' },
};

const addFour: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.AUTHOR,
  data: { name: 'ABF' },
};
