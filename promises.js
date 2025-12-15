
// const p1 = new Promise((res, rej)=>{
//     if (1 > 3){
//         res(true)
//     }
//     else{
//         rej(false)
//     }
// })


// p1.then((result)=>{console.log(result);console.log("success");})
// .catch((error)=>{console.log(error);console.log("reject")})
// .finally(()=>{console.log("good bye")})
// q3.1

// function getHello(){
//     const p1 = new Promise((res)=>{
//         setTimeout(() => {
//             res("hello")
//         }, 500);
//     })
//     return p1
// }


// getHello().then((result)=>{console.log(result)})


// q3.2


// function addAsync(a,b){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res(a+b)
//         }, 1000);
//     })
// }

// addAsync(5,7).then((result)=>{console.log(result)})


// q3.3
// function checkNumber(n){
//     return new Promise((res,rej)=>{
//         if(n%2 ==0){
//             res("even")
//         }
//         else{
//             rej("odd number not allowed")
//         }
//     })
// }

// checkNumber(5).then((result)=>{console.log(result)})
// .catch((error)=>{console.log(error)})


// q3.4
// function createLogin(userName, password){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             if(userName == "admin"&& password == "1234")
//                 res("login successful")
//             else{
//                 rej("invalid credentials")
//             }
//         }, 1200);
//     })
// }


// createLogin("admin","1234").then((result)=>{console.log(result)})
// .catch((error)=>{console.log(error)})


// q3.5
// function getNumbers(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res([1,2,3,4,5])
//         }, 700);
//     })
// }

// getNumbers().then((result)=>{result.forEach(element => {console.log(element)});})


// q3.6
// function unstableOperation(){
//     return new Promise((res,rej)=>{
//         let number = Math.random()* 1
//         setTimeout(() => {
//             if(number>0.5){
//                 res("success")
//             }
//             else{
//                 rej("random failure")
//             }
//         }, 1000);
//     })
// }

// unstableOperation().then((result)=>{console.log(result)})
// .catch((error)=>{console.log(error)})


// q3.7
// function getUser(){
//     return new Promise((res)=>{
//         res({name:"dana",age:16})
//     })
// }

// getUser().then((result)=>{console.log(`user: ${result.name}, age: ${result.age} `)})


// q3.8

// function squarePositive(n){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             if(n>=0){
//                 res(n*n)
//             }
//             else{
//                 rej("negative number not allowed")
//             }
//         }, 500);
//     })
// }


// squarePositive(3).then((result)=>{console.log(result)})
// .catch((error)=>{console.log(error)})


// q3.9
// function waitTwoSeconds(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res("done waiting")
//         }, 2000);
//     })
// }

// waitTwoSeconds().then((result)=>{console.log(result)})


// q3.10
// function dowanloadFile(url){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             if(url.startsWith("http")){
//                 res("download from url")
//             }
//             else{
//                 rej("invalid url")
//             }
//         }, 1500);
//     })
// }

// dowanloadFile("htp").then((result)=>{console.log(result)})
// .catch((error)=>{console.log(error)})

// q4.1
// function getUserName(name){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
            
//         }, );
//     })
// }


