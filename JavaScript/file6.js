//arrow function


// greet();          //hoisting
// function greet(){
//     console.log("Hello, World!");
// }


//hoisting
// x=10
// console.log(x)
// var x

//

//let do not work in hoisting
// x=10
// console.log(x)
// let x

//Arrow function
// const greet = 10
// console.log(greet)

// const greet = () => {
//     console.log("Hello")
// };
// greet();



//hoisting dosnt work withh arrow funcition
// greet();
// const greet = () => {
//     console.log("Hello")
// };



//pass an argument in arrow function
// const add = (a,b) => {
//     console.log(a+b)
// }
// add(4,5)



// const add = (a,b) => {
//     return a+b
// }
// const result = add(4,5)
// console.log(result)




const add = (...args) => {
    console.log(args[0])
}
add(4,5,6,7,8)



