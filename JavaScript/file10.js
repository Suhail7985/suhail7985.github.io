//cart and products

// const cart = {
//     1: 5,
//     5: 3,

// };
// const newCart=({...cart,2:1})
// console.log(newCart)

// const new1Cart=({...cart,4:3,9:3})
// console.log(new1Cart)



let cart ={};
const products = [
    { id: 1, name: "product1", price: 25 },
    { id: 2, name: "product2", price: 50 },
    { id: 3, name: "product3", price: 100 },
];

function addToCart(id){
    cart = {...cart, [id]:1};
}

function increase(id){
    cart = {...cart,[id]:cart[id]+1}
    console.log("Incremented one quantity")
}
function decrease(id){
    cart = {...cart,[id]:cart[id]-1}
    console.log("decremented one quantity")
}

addToCart(1)
increase(1)
increase(1)
increase(1)
console.log(cart)
decrease(1)
console.log(cart)


// const newCart=({...products[0]})
// console.log(newCart)
// console.log(cart)

// const nProduct = [...products,{id: 4, name: "product4", price: 110}]
// console.log(nProduct)




