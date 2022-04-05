import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
//? Type Basics ----------------------------------------
const testFunction = (x) => {
    console.log(x);
    return x + 5;
};
//? Objects and Arrays --------------------------------
//* Arrays
let names = ["Budi", "Andi", "Sarah"];
// names.push(5); // gak bisa ❌
names.push("Candi"); // ✅
let numbers = [1, 2, 3, 4];
// numbers.push("charlie"); // tetep gak bisa ❌
numbers.push(5); // ✅
let mixedNN = ["Budi", "Andi", 3, 5];
mixedNN.push(3); // kalo ada 2 types bisa
mixedNN.push("stringgku");
//* Objects
let exObjects = {
    name: "athalla",
    age: 17,
};
// exObjects.name = 20; // ❌ harus sesuai dengan typenya
// exObjects.age = "17"; // ❌
exObjects.name = "barka"; // ✅
exObjects.age = 18; // ✅
exObjects = {
    // harus sama formatnya
    name: "fadhil",
    age: 17,
    // skill: 'nodejs' ❌
};
//? Explicit Types ------------------------------------
let onlyString;
let onlyNumber;
let onlyBoolean;
onlyString = "athalla";
onlyNumber = 17;
onlyBoolean = true;
//* Arrays
let lists = [];
lists.push("ngopi");
let nums = [];
nums.push(7);
//* Union Types
let mixed = [];
mixed.push("ngops");
mixed.push(7);
mixed.push(true);
let uid;
uid = 123;
uid = "123";
//* Objects
let obj;
obj = { name: "ngops", age: 17 };
let obj2;
obj2 = { name: "athalla", age: 17 };
//? Dynamic (any) Types ------------------------------------------
let age;
age = 25;
age = "25";
age = true;
let mixedArr = [];
mixedArr.push(2);
mixedArr.push("2");
mixedArr.push(true);
let mixedObj;
mixedObj = {
    name: 17,
    age: "athalla",
};
//? Function Basics ----------------------------------------------
let thisFunction;
thisFunction = () => {
    console.log("ngoop");
};
const plus = (a, b, c = 10) => {
    console.log(c);
    return a + b;
};
const typo = 17;
console.log(typo);
let typeFunc;
typeFunc = (name, age) => {
    console.log(`${name} is ${age} years old`);
};
let objFunc;
objFunc = (id) => {
    console.log(`${id.name} is ${id.age} years old`);
};
objFunc({ name: "athalla", age: 17 });
let objNgopi;
objNgopi = (identitas) => {
    console.log(`${identitas.name} is ${identitas.age} years old`);
};
//? the DOM and Type Casting --------------------------------------------------------------
// const form = document.querySelector("form")!;
// console.log(form.children);
/* saat kita ngegrab suatu element, typescript gak akan tau element itu ada atau enggak
makanya dia tulisannya 'possibly null'. Nah cara untuk mengatasinya dengan pake if (form) {...} atau setelah querySelector('form')! tanda seru
jadi kita ngasih tau typescript 'saya tau element ini ada di html'*/
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault(); // biar pas di submit tidak ke refresh
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
const invOne = new Invoice("fido", "studying", 70);
const invTwo = new Invoice("john", "cooking rice", 30);
let invoices = []; /* jadi kita bisa nentuin juga type.
Kita sekarang cuman bisa ngepush object berbasic invoice */
invoices.push(invOne, invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const he = {
    name: "athalla",
    age: 17,
    speak(lang) {
        console.log(lang);
    },
    spend(time) {
        console.log(time);
        return time;
    },
};
const introHim = (person) => {
    console.log(`my name is ${person.name} and i'm ${person.age}`);
};
//? Generics
const addUID = (object) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, object), { uid });
};
const addOne = addUID({ name: "athalla", age: 17 });
console.log(addOne.age);
const addTwo = {
    uid: 7,
    resourceType: 7,
    data: { name: "athalla" },
};
//? Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
})(ResourceType || (ResourceType = {}));
const addThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "Learn Typescript" },
};
const addFour = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: { name: "ABF" },
};
