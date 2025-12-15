// q1
// function getMessage(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res("hello from promise!")
//         }, 500);
//     })
// }


// getMessage().then(result =>{console.log(result)})

// q2
// function getRandomNumber() {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             if (5 > 1) {
//                 // res(Math.floor(Math.random()*10)+1)
//                 res(5)
//             }
//             else{
//                 rej("no")
//             }
//         }, 700);
//     })
// }

// getRandomNumber().then(result=>{console.log(result)})

// q3
// function checkEven(n){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             if(n%2==0){
//                 res("even number")
//             }
//             else{
//                 rej("odd number")
//             }
//         }, 500);
//     })
// }

// checkEven(5).then(reuslt=>{console.log(reuslt)}).catch(error=>{console.log(error)})

// q4

// function validateUser(username){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             if (username == "admin"){
//                 res("valid user")
//             }
//             else{
//                 rej("unknown user")
//             }
//         }, 1000);
//     })
// }

// validateUser("amin").then(result=>{console.log(result)}).catch(error=>{console.log(error)})


// q5
// function fetchData(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res({id:1, name:"dana"})
//         }, 1200);
//     })
// }

// fetchData().then(result=>{console.log(result.name)})


// q6
// function toUpperAsync(text){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             if(text && text != " "){
//                 res(text.toUpperCase())
//             }
//             else{
//                 rej("empty string")
//             }
//         }, 600);
//     })
// }

// toUpperAsync("dsa").then(result=>{console.log(result)}).catch(error=>{console.log(error)})


// q7
// function getNumbers(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res([10,20,30])
//         }, 800);
//     })
// }

// getNumbers().then(result=>{result.forEach(element => {console.log(element)})})


// q8
// function double(n){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res(n*2)
//         }, 400);
//     })
// }

// function square(n){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res(n*n)
//         }, 400);
//     })
// }

// double(3).then(result=>square(result)).then(finalvalue=>console.log(finalvalue)).catch(error=>{console.log(error)})


// q9
// function unstable(){
//     return new Promise((res, rej)=>{
//         let number = Math.random()*1
//         setTimeout(() => {
//             if(number<0.5){
//                 res("success")
//             }
//             else{
//                 rej("failure")
//             }
//         }, 1000);
//     })
// }

// unstable().then(result=>{console.log(result)}).catch(error=>{console.log(error)})


// q10
// function loadConfig(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res({mode:"dev"})
//         }, 700);
//     })
// }


// loadConfig().then(result=>{console.log(result)}).catch(error=>{console.log(error)})

// q10.1

// async function waitForHello(){
//     const p1 = new Promise((res)=>{
//         setTimeout(() => {
//             res("hello")
//         }, 500);
//     }) 
//     let value= await p1
//     console.log(value)
// }

// waitForHello()


// q10.2
// function doubleAsync(n){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res(n*2)
//         }, 600);
//     })
// }

// async function run(){
//     let x = await doubleAsync(5)
//     console.log(`result is ${x}`)
// }

// run()


// q10.3
// function fetchUser(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res({id:1,name:"dana"})
//         }, 1000);
//     })
// }

// async function run(){
//     let name = await fetchUser()
//     console.log(`user name: ${name.name}`)
// }

// run()


// q10.4
// function validateAge(age){
//     return new Promise((res, rej) => {
//          if(age >= 18){
//             res("old")
//          }
//          else{
//             rej("too young")
//          }
        
//     })
// }

// async function run(){
//     try{
//         let age = await validateAge(16)
//         console.log(age)
//     }
//     catch(err){
//         console.log(err)
//     }
// }


// run()



// q10.5

// function getNumber(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res(3)
//         }, 400);
//     })
// }

// function square(n){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res(n*n)
//         }, 400);
//     })
// }
// async function run(){
//     let result = await getNumber()
//     let value = await square(result)
//     console.log(value)
// }

// run()


// q10.6
// function delay(ms){
//     return new Promise((res)=>{
//         setTimeout(() => {
//            res(`here the await after ${ms}`) 
//         }, ms);
//     })
// }

// async function run(){
//     for (let i = 1; i<=3;i++){
//         let val = await delay(500)
//         console.log(i)
//     }
// }

// run()


// q10.7
// function maybeFail(){
//     let number = Math.random()*1
//     return new Promise((res, rej)=>{
//         if(number <0.3){
//             rej("random error")
//         }
//         else{
//             res("all good")
//         }
//     })
// }











// function getRandomNumber() {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             if (5 < 1) {
//                 // res(Math.floor(Math.random()*10)+1)
//                 res(5)
//             }
//             else{
//                 rej("no")
//             }
//         }, 700);
//     })
// }




// async function main() {
//     try {
//         let x = "none"
//         console.log(1);
//         console.log(2);
//         console.log(3);
//         let a  = await getRandomNumber()
//         console.log(a);
//         console.log(4);
//     } catch (err) {
//         console.log(err)
//     }

// }
// main()
// console.log("HERE");

