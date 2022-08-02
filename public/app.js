import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
// //Working with DOM
const form = document.querySelector('.new-item-form');
// // console.log(form.children)
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//interface
// interface isPerson {
//     name:string;
//     age:number;
//     speak(a:string):void;
//     spend(a:number):number
// }
// const me:isPerson={
//     name:"Joseph",
//     age:23,
//     speak(text:string):void{
//         console.log(text)
//     },
//     spend(amount:number): number{
//         console.log('I spent ',amount)
//         return amount
//     }
// }
// const greetPerson= (person:isPerson)=>{
//     console.log('hello', person.name);
// }
// greetPerson(me)
// console.log(me);
// //TYPE ALIASES
// type StringorNum = string | number;
// type objWithName = {name:string ,uid:StringorNum}
// const logDetails = (uid: StringorNum , item: string)=>{
//     console.log(`${item} has a ui of ${uid}`)
// }
// const greet =(user:objWithName) =>{
//     console.log(`${user.name} says hi`);
// }
//FUNCTIONS
// let greet : Function
// greet= ()=>{
//     console.log("Hi")
// }
// const add = (a:number ,b:number ,c:number | string =80)=>{
//     console.log(a+b);
//     console.log(c)
// }
// add(4,7)
// any types
// let age : any =34;
// age=true
// console.log(age);
// age='Joseph';
// console.log(age);
// let mixed : any[]=[];
// mixed.push(5)
// mixed.push('Joseph')
// console.log(mixed)
// let ninja :{name:any ,age:any};
// ninja={name:'Joseph', age:25}
// console.log(ninja)
// explicit types
// let character: string;
// let age:number;
// let isLoggedIn: boolean;
// //arrays
// let ninjas: string[]=[];
// ninjas.push('joe')
// let mixed :(string | number | boolean )[]=[];
// mixed.push('hello')
// mixed.push(20)
// mixed.push(true)
// console.log(mixed)
// //union types
// let uid : string|number
// uid='123'
// uid=123
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne= new Invoice("Joseph","webwork",3000);
// docTwo= new Payment("Max","technicaian work",3000);
// let docs:HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)
// const invOne = new Invoice("Joseph" , "Momo transaction", 2000)
// const invTwo = new Invoice("Christy" , "Credit Transfer", 5000)
// let invoices : Invoice[]=[];
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv => {
//     console.log(inv.client , inv.amount, inv.details)
// })
// console.log( invOne.format() , invOne)
