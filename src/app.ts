//Working with DOM
const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

//inputs
const type= document.querySelector("#type") as HTMLSelectElement
const tofrom= document.querySelector("#tofrom") as HTMLInputElement
const details= document.querySelector("#details") as HTMLInputElement
const amount= document.querySelector("#amount") as HTMLInputElement

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber

    )
})





























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

