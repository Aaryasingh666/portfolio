//Access all the cart buttons..
let carts = document.querySelectorAll('.add-cart');
// create an array object & save some information like product name price
let products = [{
    name: 'watch',
    tag: 'watch',
    price: 15,
    incart: 0
}, {
    name: 'bag',
    tag: 'bag',
    price: 20,
    incart: 0
}, {
    name: 'jean',
    tag: 'jean',
    price: 20,
    incart: 0
}, {
    name: 'wallet',
    tag: 'wallet',
    price: 15,
    incart: 0
},{
    name: 'watch',
    tag: 'watch',
    price: 15,
    incart: 0
},
 {
    name: 'bag',
    tag: 'bag',
    price: 20,
    incart: 0
}, {
    name: 'jean',
    tag: 'jean',
    price: 20,
    incart: 0
}, {
    name: 'wallet',
    tag: 'wallet',
    price: 15,
    incart: 0
}];
// run the for loop for calculate the number of carts button
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartnumbers(products[i]);
        totalcost(products[i]);
    })
}
// run function & calculate how many items in cart. this fuction already call in main.js file in for loop
let cartnumbers = (products) => {
    // console.log("the product clicked is",products);
    let productnumbers = localStorage.getItem('cartnumbers');
    productnumbers = parseInt(productnumbers);
    if (productnumbers) {
        localStorage.setItem("cartnumbers", productnumbers + 1);
        document.querySelector('.nav-link span').textContent = productnumbers + 1;
    } else {
        localStorage.setItem("cartnumbers", 1);
        document.querySelector('.nav-link span').textContent = 1;
    }
    setItems(products);
}