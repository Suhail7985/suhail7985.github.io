//arrays
//const score = [2,1,7,5,3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)

//spread operator for adding elemnt in array(for react js because in reactjs push is not allowed)
// const newScore = [...score,9]
// console.log(newScore)



//shoping cart app
 const score=[2,1,7,5,2];
// score.forEach((value)=>{
//     console.log(value);
// });


// score.map((value)=>{
//     console.log(value);
// })

// const newScore=score.map((value)=>{
//     return value > 2;
// });
// console.log(newScore)



// const newScore=score.filter((value)=>{
//     return value > 2;
// });
// console.log(newScore)



// const newScore=score.filter((value)=>{
//     return value === 2;
// });
// console.log(newScore)





// const newScore=score.reduce((sum,value)=>{
//     return sum + value;
// },0);
// console.log(newScore)

// const newScore=score.reduce((sum,value)=> sum + value,0);
// console.log(newScore)




const newScore=score.filter((value)=>{
    return value === 2;
});
console.log(newScore)
