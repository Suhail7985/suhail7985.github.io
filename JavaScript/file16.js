//promises

// function f1(){
//     return new Promise((resolve, reject) =>{
//         //resolve(5)
//         reject("Something went wrong")
//     }); 
    
// }

// function f2(x){
//     console.log(x+7)
// }
// f1()
// .then((n)=>f2(n))
// .catch((err) => console.log(err));



//reject and resolve


// function f1(y) {
//     return new Promise((resolve, reject) => {
//         if (y < 0) {
//             reject("Something went wrong");
//         } else {
//             resolve(y);
//         }
//     }); 
// }

// function f2(y) {
//     console.log(y);
// }

// f1(2)
// .then((n) => f2(n)) 
// .catch((err) => console.log("Error:", err));




// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.map(value=>{
//             console.log(value.name)
//         })      
//     })

//     .catch((err)=>console.log(err));

const fetchData = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    data.map(value=>{
        console.log(value.name,value.email)
    })
};

fetchData();