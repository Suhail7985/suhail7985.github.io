//regular functions

// function greet(){
//     console.log("Hello, World!");
// }
// greet()



//IIFE
// (function greet(){
//     console.log("Hello, World!");
// })()


// function add(a,b){
//     console.log(a+b);
// }
// add(4,5);


// function add(a,b){
//     return a+b;
// }
// const result = add(4,5);
// console.log(result)


function add(a){
    console.log(arguments)
    console.log(arguments[0])
}
add(5,4)